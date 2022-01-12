/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
let myWorker: ibas.Worker = undefined;
// 兼容性处理，globalThis
declare var __magic__: any;
(function (): void {
    if (typeof globalThis === "object") {
        return;
    }
    Object.defineProperty(Object.prototype, "__magic__", {
        get: function (): any {
            return this;
        },
        configurable: true
    });
    __magic__.globalThis = __magic__;
    delete (<any>Object.prototype).__magic__;
}());
// 监听
globalThis.onmessage = function (message: MessageEvent): void {
    let data: {
        type: string,
        class: string,
        libraries: string[],
        configs: { key: string, value: any }[],
        languages: {
            code: string,
            resources: { key: string, text: string }[]
        },
        settings?: { key: string, value: string }[],
    } = message.data;
    if (data?.type === "init") {
        // 初始化
        if (data?.libraries instanceof Array) {
            try {
                for (let item of data?.libraries) {
                    if ((!globalThis.window || !globalThis.document) && globalThis.jsdom && globalThis.require) {
                        // jsdom打包：browserify api.js -o jsdom.bundle.js -s jsdom
                        globalThis.window = new globalThis.jsdom.JSDOM().window;
                        // 兼容性处理
                        globalThis.window.XMLHttpRequest = globalThis.XMLHttpRequest;
                        globalThis.window.fetch = globalThis.fetch;
                        globalThis.document = globalThis.window.document;
                    }
                    try {
                        globalThis.importScripts(item);
                    } catch (error) {
                        // 脚本加载出错，不退出
                        if (console?.error instanceof Function) {
                            console.error("scripts: " + item + "\n" + (error instanceof Error && error.stack ? error.stack : error.message));
                        }
                    }
                }
            } catch (error) {
                // 致命错误，结束任务
                globalThis.postMessage({ type: "stop", data: error }, undefined);
            }
        }
        if (data?.configs instanceof Array) {
            try {
                for (let item of data?.configs) {
                    if (!ibas.strings.isEmpty(item.key)) {
                        ibas.config.set(item.key, item.value);
                    }
                }
            } catch (error) {
                // 致命错误，结束任务
                globalThis.postMessage({ type: "stop", data: error }, undefined);
            }
        }
        if (data.languages instanceof Object) {
            ibas.i18n.language = data.languages.code;
            if (data?.languages.resources instanceof Array) {
                for (let item of data?.languages.resources) {
                    if (!ibas.strings.isEmpty(item.key)) {
                        try {
                            ibas.i18n.add(item.key, item.text);
                        } catch (error) {
                        }
                    }
                }
            }
        }
        if (typeof data?.class === "string") {
            try {
                let clazz: any = globalThis;
                for (let name of data.class.split(".")) {
                    clazz = clazz[name];
                    if (!clazz) {
                        throw new TypeError(data.class);
                    }
                }
                if (!(clazz instanceof Function)) {
                    throw new TypeError(data.class);
                }
                myWorker = new clazz;
                myWorker.onMessage = (message) => {
                    globalThis.postMessage({
                        type: "message",
                        data: message,
                    }, undefined);
                };
                myWorker.onStop = (data) => {
                    globalThis.postMessage({
                        type: "stop",
                        data: data
                    }, undefined);
                };
            } catch (error) {
                // 致命错误，结束任务
                globalThis.postMessage({ type: "stop", data: error }, undefined);
            }
        }
    } else if (data?.type === "setting") {
        try {
            if (!(myWorker instanceof ibas.Worker)) {
                throw new ReferenceError("no worker instance.");
            }
            if (data?.settings instanceof Array) {
                for (let item of data?.settings) {
                    if (!ibas.strings.isEmpty(item.key)) {
                        myWorker.addSetting(item.key, item.value);
                    }
                }
            }
        } catch (error) {
            // 致命错误，结束任务
            globalThis.postMessage({ type: "stop", data: error }, undefined);
        }
    } else if (data?.type === "do") {
        try {
            if (!(myWorker instanceof ibas.Worker)) {
                throw new ReferenceError("no worker instance.");
            }
            if (data?.settings instanceof Array) {
                for (let item of data?.settings) {
                    if (!ibas.strings.isEmpty(item.key)) {
                        myWorker.addSetting(item.key, item.value);
                    }
                }
            }
            myWorker.do();
        } catch (error) {
            // 致命错误，结束任务
            globalThis.postMessage({ type: "stop", data: error }, undefined);
        }
    }
};