/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
let myWorker: ibas.Worker = undefined;
/** 判断是否可能是脚本依赖尚未加载导致的错误 */
function isDependencyError(error: any): boolean {
    if (error instanceof ReferenceError) {
        return true;
    }
    if (error instanceof TypeError) {
        let message: string = error.message || "";
        return /extends value|constructor or null/i.test(message);
    }
    return false;
}
/** 获取错误文本 */
function errorMessage(error: any): string {
    if (error instanceof Error) {
        return error.stack || error.message;
    }
    return String(error);
}
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
                // 去重，避免重试或页面中重复引用同一脚本时重复执行。
                let pending: string[] = [];
                let queued: { [url: string]: boolean } = {};
                for (let item of data.libraries) {
                    if (typeof item !== "string" || queued[item] === true) {
                        continue;
                    }
                    queued[item] = true;
                    pending.push(item);
                }

                let loaded: { [url: string]: boolean } = {};
                let failed: { [url: string]: any } = {};
                let configApplied: boolean = false;
                // 最长链路不会超过脚本数量；若一轮没有成功加载任何脚本，说明存在真实错误或循环依赖。
                let maxRounds: number = pending.length + 1;
                for (let round: number = 0; pending.length > 0 && round < maxRounds; round++) {
                    let current: string[] = pending;
                    pending = [];
                    let progress: boolean = false;

                    for (let item of current) {
                        if (loaded[item] === true) {
                            continue;
                        }
                        if ((!globalThis.window || !globalThis.document) && globalThis.jsdom && globalThis.require) {
                            // jsdom打包：browserify api.js -o jsdom.bundle.js -s jsdom
                            globalThis.window = new globalThis.jsdom.JSDOM().window;
                            // 兼容性处理
                            globalThis.window.XMLHttpRequest = globalThis.XMLHttpRequest;
                            globalThis.window.fetch = globalThis.fetch;
                            globalThis.document = globalThis.window.document;
                        }
                        try {
                            // importScripts 是同步调用；同一轮后面的脚本可以使用前面已成功加载的类。
                            globalThis.importScripts(item);
                            loaded[item] = true;
                            delete failed[item];
                            progress = true;
                            // shell/index 加载成功后立即赋值配置，保持原有时序。
                            if (!configApplied && item.indexOf("/shell/index") > 0) {
                                if (data?.configs instanceof Array) {
                                    for (let config of data.configs) {
                                        ibas.config.set(config.key, config.value);
                                    }
                                }
                                configApplied = true;
                            }
                        } catch (error) {
                            failed[item] = error;
                            if (isDependencyError(error)) {
                                // 可能只是基类尚未加载，延迟到下一轮重试。
                                pending.push(item);
                            } else if (console?.error instanceof Function) {
                                // 非依赖错误不重复执行，但保留当前兼容行为，继续尝试其他脚本。
                                console.error("scripts: " + item + "\n" + errorMessage(error));
                            }
                        }
                    }

                    if (!progress) {
                        break;
                    }
                }

                // 重试后仍未成功的脚本只报告一次；随后继续执行类查找，让最终错误指向目标 Worker 类。
                for (let item of pending) {
                    if (console?.error instanceof Function) {
                        console.error("scripts: " + item + "\n" + errorMessage(failed[item]));
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
