/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../ibas/3rdparty/require.d.ts" />

namespace loader {
    // 解决方法缺失
    if (typeof String.prototype.startsWith === undefined) {
        String.prototype.startsWith = function (prefix: string): boolean {
            return this.slice(0, prefix.length) === prefix;
        };
    }
    if (typeof String.prototype.endsWith === undefined) {
        String.prototype.endsWith = function (suffix: string): boolean {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }
    export namespace ibas {
        // index路径
        export const URL_INDEX: string = "ibas/index.js";
        // 诊断页面路径
        export const URL_DIAGNOSIS: string = "ibas/diagnosis/index.html";
    }
    export namespace openui5 {
        // 官方地址
        export const URL_OFFICIAL: string = "https://openui5.hana.ondemand.com/resources/sap-ui-core.js";
        // 本地路径
        export const URL_LOCAL: string = "openui5/resources/sap-ui-core.js";
        // index路径
        export const URL_INDEX: string = "openui5/index.js";
        // element标记
        export const URL_SCRIPT_ELEMENT_ID: string = "sap-ui-bootstrap";

        /** 加载调用者 */
        export interface ILoaderCaller {
            /** 地址 */
            url: string;
            /** 是否使用缓存 */
            noCache: boolean;
            /** 成功加载 */
            onSuccess(): void;
            /** 发生错误 */
            onError(): void;
        }
        /** 加载 */
        export function load(caller: ILoaderCaller): void {
            let root: string = caller.url;
            let domScript: HTMLScriptElement = createScriptElement();
            domScript.src = root + URL_LOCAL;
            // 加载成功
            domScript.onload = (<any>domScript).onreadystatechange = function (): void {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                    extend(caller);
                }
            };
            // 加载失败
            domScript.onerror = function (): void {
                document.getElementById(URL_SCRIPT_ELEMENT_ID).remove();
                let domScript: HTMLScriptElement = createScriptElement();
                domScript.src = URL_OFFICIAL;
                // 加载成功
                domScript.onload = (<any>domScript).onreadystatechange = function (): void {
                    if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                        // 加载扩展库
                        extend(caller);
                    }
                };
                // 加载失败
                domScript.onerror = function (): void {
                    if (caller !== undefined && caller !== null) {
                        if (typeof caller === "function") {
                            (<any>caller).onError();
                        }
                    }
                };
                document.getElementsByTagName("head")[0].appendChild(domScript);
            };
            document.getElementsByTagName("head")[0].appendChild(domScript);
        }
        /** 扩展 */
        export function extend(caller: ILoaderCaller): void {
            if (caller.noCache === true) {
                // 不适用js缓存
                require = requirejs.config({
                    baseUrl: caller.url,
                    urlArgs: function (id: string, url: string): string {
                        return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + (new Date()).getTime();
                    }
                });
            } else {
                // 使用js缓存
                require = requirejs.config({
                    baseUrl: caller.url,
                });
            }
            require([
                caller.url + URL_INDEX
            ], caller.onSuccess, caller.onError);
        }
        /** 创建脚本元素 */
        function createScriptElement(): HTMLScriptElement {
            let domScript: HTMLScriptElement = document.createElement("script");
            domScript.setAttribute("id", URL_SCRIPT_ELEMENT_ID);
            domScript.setAttribute("data-sap-ui-bindingSyntax", "complex");
            domScript.setAttribute("data-sap-ui-theme", "sap_belize");
            domScript.setAttribute("data-sap-ui-libs", "sap.m, sap.tnt, sap.ui.layout, sap.ui.table");
            // domScript.setAttribute("data-sap-ui-preload", "async"); // 异步加载预加载库
            return domScript;
        }
    }
    /** 应用程序 */
    export class Application {
        /** 根地址 */
        root: string;
        /** 不使用缓存 */
        noCache: boolean;
        /** 运行时标记 */
        runtime: string;
        /** 运行应用 */
        run(): void {
            this.runtime = (new Date()).getTime().toString();
            if (typeof arguments[0] === "string") {
                this.root = arguments[0];
            }
            if (this.root === undefined || this.root === null) {
                this.root = document.location.origin
                    + document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/"));
            }
            let that: this = this;
            let require: Require = this.createRequire("_", this.root);
            require([
                that.root + ibas.URL_INDEX
            ], function (): void {
                // 加载成功，加载ui5
                openui5.load({
                    url: that.root,
                    noCache: that.noCache,
                    onError(): void {
                        that.diagnose();
                    },
                    onSuccess(): void {
                        that.show();
                    },
                });
            }, function (): void {
                that.diagnose();
            });
        }
        /** 显示视图 */
        private show(): void {
            let that: this = this;
            let require: Require = this.createRequire("ibas.shell", this.root + "shell");
            require([
                "index"
            ], function (): void {
                // 加载成功
                let shell: any = (<any>window).shell;
                if (shell === undefined || shell === null) {
                    that.diagnose();
                } else {
                    try {
                        let console = new shell.app.Console();
                        console.run();
                    } catch (error) {
                        that.diagnose();
                    }
                }
            }, function (): void {
                that.diagnose();
            });
        }
        /** 创建require方法 */
        private createRequire(name: string, baseUrl: string): Require {
            if (this.noCache) {
                // 不使用缓存
                let runtime: string = this.runtime;
                return (<any>window).requirejs.config({
                    context: name,
                    baseUrl: baseUrl,
                    urlArgs: function (id: string, url: string): string {
                        return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + runtime;
                    }
                });
            } else {
                return (<any>window).requirejs.config({
                    context: name,
                    baseUrl: baseUrl
                });
            }
        }
        /** 诊断错误 */
        private diagnose() {
            window.location.href = this.root + ibas.URL_DIAGNOSIS;
        }
    }
}