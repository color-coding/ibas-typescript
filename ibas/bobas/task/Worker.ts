/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/Configuration.ts" />
namespace ibas {
    const PROPERTY_WEB_WORKER: symbol = Symbol("worker");
    const PROPERTY_ID: symbol = Symbol("id");
    const PROPERTY_NAME: symbol = Symbol("name");
    const PROPERTY_SETTINGS: symbol = Symbol("settings");
    const PROPERTY_RUNNING: symbol = Symbol("running");
    const PROPERTY_STARTTIME: symbol = Symbol("startTime");
    const PROPERTY_ENDTIME: symbol = Symbol("endTime");
    export abstract class Worker {
        constructor() {
            this[PROPERTY_ID] = uuids.random();
            this[PROPERTY_NAME] = objects.nameOf(objects.typeOf(this));
        }
        get id(): string {
            return this[PROPERTY_ID];
        }
        get name(): string {
            return this[PROPERTY_NAME];
        }
        set name(value: string) {
            this[PROPERTY_NAME] = value;
        }
        /** 开始时间 */
        get startTime(): Date {
            return this[PROPERTY_STARTTIME];
        }
        /** 结束时间 */
        get endTime(): Date {
            return this[PROPERTY_ENDTIME];
        }
        /** 需要加载的库 */
        getLibraries(): IList<string> {
            let library: IList<string> = new ArrayList<string>();
            if (!workers.isInWorker()) {
                let scripts: HTMLCollectionOf<HTMLScriptElement> = document.getElementsByTagName("script");
                library.insert(0, urls.rootUrl("ibas/index") + "/3rdparty/jsdom.bundle.js");
                for (let index: number = 0; index < scripts.length; index++) {
                    let script: HTMLScriptElement = scripts[index];
                    if (strings.isEmpty(script.src)) {
                        continue;
                    }
                    if (this.filterScripts(script.src) === true) {
                        continue;
                    }
                    library.add(script.src);
                }
            }
            return library;
        }
        protected filterScripts(script: string): boolean {
            if (script.indexOf("/openui5/") > 0) {
                return true;
            }
            if (script.indexOf("/shell/loader") > 0) {
                return true;
            }
            if (script.indexOf("/require-css.js") > 0 || script.indexOf("/require-css.min.js") > 0) {
                return true;
            }
            if (script.indexOf("/crypto-js.js") > 0 || script.indexOf("/crypto-js.min.js") > 0) {
                return true;
            }
            if (script.indexOf("/spin.js") > 0 || script.indexOf("/spin.min.js") > 0) {
                return true;
            }
            if (script.indexOf(".ui.") > 0) {
                return true;
            }
            if (script.indexOf("/bsui/") > 0) {
                return true;
            }
            return false;
        }
        /**
         * 设置参数
         * @param key 键
         * @param value 值
         */
        addSetting(key: string, value: any): void {
            if (!workers.isInWorker()) {
                if (this.isRunning()) {
                    this[PROPERTY_WEB_WORKER].postMessage({
                        type: "setting",
                        settings: [{
                            key: key,
                            value: value
                        }],
                    }); return;
                }
            }
            let map: Map<string, any> = this[PROPERTY_SETTINGS];
            if (!(map instanceof Map)) {
                this[PROPERTY_SETTINGS] = map = new Map<string, any>();
            }
            map.set(key, value);
        }
        getSetting<P>(key: string): P {
            let map: Map<string, any> = this[PROPERTY_SETTINGS];
            if (map instanceof Map) {
                return map.get(key);
            }
            return undefined;
        }
        /** 运行 */
        do(): void {
            try {
                if (this.isRunning() === true) {
                    throw new Error(i18n.prop("sys_action_is_running"));
                }
                this[PROPERTY_RUNNING] = true;
                this[PROPERTY_STARTTIME] = new Date();
                this[PROPERTY_ENDTIME] = undefined;
                if (workers.isInWorker()) {
                    try {
                        this.run();
                    } catch (error) {
                        if (this.onMessage instanceof Function) {
                            this.onMessage(error);
                        }
                    }
                } else {
                    let values: IList<KeyValue> = new ArrayList<KeyValue>();
                    if (this[PROPERTY_SETTINGS] instanceof Map) {
                        for (let key of this[PROPERTY_SETTINGS].keys()) {
                            values.add(new KeyValue(key, this[PROPERTY_SETTINGS].get(key)));
                        }
                    }
                    this[PROPERTY_WEB_WORKER].postMessage({
                        type: "do",
                        settings: values
                    });
                }
            } catch (error) {
                if (this.onMessage instanceof Function) {
                    this.onMessage(error);
                }
            }
        }
        /** 结束 */
        stop(): void {
            try {
                this[PROPERTY_RUNNING] = false;
                this[PROPERTY_ENDTIME] = new Date();
                if (!workers.isInWorker()) {
                    if (this[PROPERTY_WEB_WORKER] instanceof globalThis.Worker) {
                        this[PROPERTY_WEB_WORKER].terminate();
                        this[PROPERTY_WEB_WORKER] = undefined;
                    }
                }
                if (this.onStop instanceof Function) {
                    this.onStop(undefined);
                }
            } catch (error) {
                if (this.onMessage instanceof Function) {
                    this.onMessage(error);
                }
            }
        }
        /** 是否运行中 */
        isRunning(): boolean {
            if (!workers.isInWorker()) {
                if (!(this[PROPERTY_WEB_WORKER] instanceof globalThis.Worker)) {
                    throw new Error(ibas.i18n.prop("sys_not_initialized"));
                }
            }
            return this[PROPERTY_RUNNING] === true ? true : false;
        }
        onStop: (error: Error | any) => void;
        onMessage: (message: string | Error | { type: emMessageType, message: string }) => void;
        /** 运行（需要实现） */
        protected abstract run(): void;
    }
    export namespace workers {
        /** 是否处于worker中 */
        export function isInWorker(): boolean {
            if (typeof (<any>globalThis.WorkerGlobalScope) !== "undefined" && self instanceof <any>globalThis.WorkerGlobalScope) {
                return true;
            }
            return false;
        }
        /**
         * 获取名称
         * @param type 类型
         */
        function nameOf(type: any): string {
            if (objects.isNull(type)) {
                return undefined;
            }
            if (typeof type === "object") {
                return nameOf(objects.typeOf(type));
            }
            if (typeof type === "function") {
                let name: string = WORKER_NAMES.get(type);
                if (!objects.isNull(name)) {
                    return name;
                }
                let maxLevel: number = 3;
                let getName: Function = function (data: any, parent: string): string {
                    let level: number = parent ? parent.split(".").length : 1;
                    for (let item in data) {
                        if (strings.isWith(item, "webkit", undefined)) {
                            continue;
                        }
                        let value: any = data[item];
                        if (value === data || (level > 0 && value === globalThis)) {
                            continue;
                        }
                        if (value === globalThis.document || value === globalThis.indexedDB || value === globalThis.caches
                            || value === globalThis.applicationCache || value === globalThis.localStorage
                            || value === globalThis.navigator || value === globalThis.location || value === globalThis.console
                            || value === globalThis.crypto || value === globalThis.frames || value === globalThis.frameElement
                            || value === globalThis.history || value === globalThis.clientInformation || value === globalThis.styleMedia
                        ) {
                            continue;
                        }
                        if (value === type) {
                            return parent ? parent + "." + item : item;
                        }
                        if (level >= maxLevel) {
                            continue;
                        }
                        let name: string = getName(value, parent ? parent + "." + item : item);
                        if (!objects.isNull(name)) {
                            return name;
                        }
                    }
                    return undefined;
                };
                name = getName(globalThis);
                if (!objects.isNull(name)) {
                    WORKER_NAMES.set(type, name);
                    return name;
                }
            }
            return typeof type;
        }
        const WORKER_NAMES: Map<any, string> = new Map<any, string>();
        export function init<T extends Worker>(worker: T, extraConfigs?: { key: string, value: any }[]): T {
            let configs: IList<{ key: string, value: any }> = config.all();
            if (extraConfigs instanceof Array) {
                for (let item of extraConfigs) {
                    configs.add(item);
                }
            }
            let rootUrl: string = urls.rootUrl("ibas/index");
            let webWorker: globalThis.Worker = new globalThis.Worker(
                rootUrl + "/worker.js" + (config.get(CONFIG_ITEM_DEBUG_MODE, false) === false ? "?_=" + worker.id : ""), {
                name: worker.name,
            });
            webWorker.onerror = function (this: globalThis.AbstractWorker, event: any): void {
                if (worker.onMessage instanceof Function) {
                    worker.onMessage(event.message);
                }
            };
            webWorker.onmessageerror = function (this: globalThis.Worker, event: any): void {
                if (worker.onMessage instanceof Function) {
                    worker.onMessage(event.message);
                }
            };
            webWorker.onmessage = function (this: globalThis.Worker, message: MessageEvent): void {
                let data: { type: string, data: any } = message.data;
                if (data?.type === "stop") {
                    try {
                        if (data.data instanceof Error) {
                            if (worker.onMessage instanceof Function) {
                                worker.onMessage(data.data);
                            } else {
                                ibas.logger.log(ibas.emMessageLevel.FATAL, "{0}: {1}", worker.name, data.data.stack ? data.data.stack : data.data.message);
                            }
                        }
                    } catch (error) {
                    }
                    worker.stop();
                } else if (data?.type === "message") {
                    if (worker.onMessage instanceof Function) {
                        worker.onMessage(data.data);
                    } else if (data.data instanceof Error) {
                        ibas.logger.log(ibas.emMessageLevel.FATAL, "{0}: {1}", worker.name, data.data);
                    }
                }
            };
            webWorker.postMessage({
                type: "init",
                class: nameOf(worker),
                libraries: worker.getLibraries(),
                configs: configs,
                languages: ibas.i18n.all(),
            });
            worker[PROPERTY_WEB_WORKER] = webWorker;
            return worker;
        }
    }
}