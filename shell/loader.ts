/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path ="../ibas/index.d.ts" />
/// <reference path ="../openui5/types/index.d.ts" />
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
    // 最小库标记
    export const SIGN_MIN_LIBRARY: string = ".min";
    // ibas index路径
    export const URL_IBAS_INDEX: string = "ibas/index";
    // ibas 诊断页面路径
    export const URL_IBAS_DIAGNOSIS: string = "ibas/diagnosis/index.html";
    export namespace requires {
        /** 运行时标记 */
        export const runtime: string = (new Date()).getTime().toString();
        /** 创建require方法 */
        export function create(name: string, baseUrl: string): Require;
        /** 创建require方法 */
        export function create(name: string, baseUrl: string, noCache: boolean): Require;
        /** 创建require方法 */
        export function create(): Require {
            let name: string = arguments[0], baseUrl: string = arguments[1], noCache: boolean = arguments[2];
            if (noCache) {
                // 不使用缓存
                let runtime: string = requires.runtime;
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
    }
    export namespace openui5 {
        // 官方地址
        export const URL_OFFICIAL: string = "https://openui5.hana.ondemand.com/resources/sap-ui-core.js";
        // 本地路径
        export const URL_LOCAL: string = "openui5/resources/sap-ui-core.js";
        // index路径
        export const URL_INDEX: string = "openui5/index";
        // element标记
        export const URL_SCRIPT_ELEMENT_ID: string = "sap-ui-bootstrap";

        /** 加载调用者 */
        export interface ILoaderCaller {
            /** 地址 */
            url: string;
            /** 是否使用缓存 */
            noCache: boolean;
            /** 使用最小库 */
            minLibrary: boolean;
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
                    // 加载扩展库
                    sap.ui.getCore().attachInit(() => {
                        extend(caller);
                    });
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
                        sap.ui.getCore().attachInit(() => {
                            extend(caller);
                        });
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
            requires.create("_", caller.url, caller.noCache)([
                URL_INDEX + (caller.minLibrary ? SIGN_MIN_LIBRARY : "")
            ], caller.onSuccess, caller.onError);
        }
        /** 创建脚本元素 */
        function createScriptElement(): HTMLScriptElement {
            let domScript: HTMLScriptElement = document.createElement("script");
            domScript.setAttribute("id", URL_SCRIPT_ELEMENT_ID);
            domScript.setAttribute("data-sap-ui-bindingSyntax", "complex");
            domScript.setAttribute("data-sap-ui-theme", "sap_belize");
            domScript.setAttribute("data-sap-ui-libs", "sap.m, sap.f, sap.tnt, sap.ui.layout, sap.ui.table, sap.uxap");
            domScript.setAttribute("data-sap-ui-async", "true");
            return domScript;
        }
    }
    /** 应用程序 */
    export class Application {
        // index路径
        static URL_INDEX: string = "index";
        /** 根地址 */
        root: string;
        /** ibas 根地址 */
        ibasRoot: string;
        /** openui5 根地址 */
        openui5Root: string;
        /** 不使用缓存 */
        noCache: boolean;
        /** 使用最小库 */
        minLibrary: boolean;
        /** 名称 */
        name: string = "shell";
        /** 运行应用 */
        run(): void {
            if (typeof arguments[0] === "string") {
                this.root = arguments[0];
            }
            if (this.root === undefined || this.root === null) {
                this.root = document.location.origin
                    + document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/"));
            }
            if (!this.root.endsWith("/")) {
                this.root += "/";
            }
            if (this.ibasRoot === null || this.ibasRoot === undefined) {
                this.ibasRoot = this.root;
            }
            if (this.openui5Root === null || this.openui5Root === undefined) {
                this.openui5Root = this.root;
            }
            // chrome禁用下拉刷新
            document.body.style["overscroll-behavior-y"] = "contain";

            requires.create("_", this.ibasRoot, this.noCache)([
                URL_IBAS_INDEX + (this.minLibrary ? SIGN_MIN_LIBRARY : "")
            ], () => {
                // 不使用缓存，设置运行版本
                if (this.noCache === true) {
                    ibas.config.set(ibas.CONFIG_ITEM_RUNTIME_VERSION, requires.runtime);
                }
                // 使用最小库
                if (this.minLibrary === true) {
                    ibas.config.set(ibas.CONFIG_ITEM_USE_MINIMUM_LIBRARY, this.minLibrary);
                }
                // 初始化ibas
                ibas.init(() => {
                    // 加载成功，加载ui5
                    openui5.load({
                        url: this.openui5Root,
                        noCache: this.noCache,
                        minLibrary: this.minLibrary,
                        onError: () => {
                            this.diagnose();
                        },
                        onSuccess: () => {
                            this.show();
                        },
                    });
                });
            }, () => {
                this.diagnose();
            });
        }
        /** 显示视图 */
        private show(): void {
            // 设置默认平台
            if (sap.ui.Device.system.phone) {
                ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.PHONE);
            } else if (sap.ui.Device.system.desktop) {
                ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.DESKTOP);
            } else if (sap.ui.Device.system.tablet) {
                ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.TABLET);
            } else {
                ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.COMBINATION);
            }
            // 模块require函数
            let require: Require = ibas.requires.create({
                context: ibas.requires.naming(this.name),
                baseUrl: this.root + this.name,
                waitSeconds: ibas.config.get(ibas.requires.CONFIG_ITEM_WAIT_SECONDS, 30)
            });
            require([
                Application.URL_INDEX + (this.minLibrary ? SIGN_MIN_LIBRARY : "")
            ], () => {
                // 加载成功
                let shell: any = (<any>window).shell;
                if (shell === undefined || shell === null) {
                    this.diagnose();
                } else {
                    // 加载资源
                    ibas.i18n.load([
                        ibas.strings.format("{0}/languages/openui5.json", ibas.urls.rootUrl("/openui5/index")),
                    ], () => {
                        // 设置语言
                        ibas.i18n.language = sap.ui.getCore().getConfiguration().getLanguageTag();
                        // 重新加载语言
                        ibas.i18n.reload(() => {
                            try {
                                let console: ibas.ModuleConsole = new shell.app.Console();
                                console.module = this.name;
                                console.run();
                            } catch (error) {
                                this.diagnose();
                            }
                        });
                    });
                }
            }, () => {
                this.diagnose();
            });
            // 去掉等待标
            let target: HTMLElement = document.getElementById("spinner");
            if (target) {
                target.remove();
            }
        }
        /** 诊断错误 */
        private diagnose(): void {
            window.location.href = this.ibasRoot + URL_IBAS_DIAGNOSIS;
        }
    }
}