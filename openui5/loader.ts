/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


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
// openui5官方地址
export const OPENUI5_OFFICIAL_URL: string = "https://openui5.hana.ondemand.com/resources/sap-ui-core.js";
/** 加载调用者 */
export interface ILoaderCaller {
    /** 地址 */
    url: string;
    /** 是否使用缓存 */
    noCache?: boolean;
    /** 加载完成 */
    onCompleted?(): void;
}
/** 加载者 */
export default class Loader {
    /** 附加openui5 */
    private append(caller: ILoaderCaller): void {
        let domScript: any = document.createElement("script");
        domScript.src = caller.url;
        domScript.setAttribute("id", "sap-ui-bootstrap");
        domScript.setAttribute("data-sap-ui-bindingSyntax", "complex");
        domScript.setAttribute("data-sap-ui-theme", "sap_belize");
        domScript.setAttribute("data-sap-ui-libs", "sap.m, sap.ui.layout, sap.tnt, sap.uxap ,sap.ui.table");
        domScript.setAttribute("data-sap-ui-preload", "async"); // 异步加载预加载库
        domScript.onload = domScript.onreadystatechange = function (): void {
            if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                // openui5初始化完成
                sap.ui.getCore().attachInit(caller.onCompleted);
                // ui 触发错误验证
                sap.ui.getCore().attachValidationError("", (oEvent) => {
                    let control: any = oEvent.getParameter("element");
                    let message: any = oEvent.getParameter("message");
                    if (control && control.setValueState) {
                        control.setValueState("Error");
                        if (message) {
                            control.setValueStateText(message);
                        }
                        control.focus();
                    }
                });
                // ui 触发正确验证
                sap.ui.getCore().attachValidationSuccess("", (oEvent) => {
                    let control: any = oEvent.getParameter("element");
                    if (control && control.setValueState) {
                        control.setValueState("None");
                    }
                });
            }
        };
        document.getElementsByTagName("head")[0].appendChild(domScript);
    }
    /** 加载 */
    load(caller: ILoaderCaller): void {
        let root: string = caller.url;
        if (!root.endsWith("/resources/sap-ui-core.js")) {
            // 没有提供明确路径
            if ($ === undefined || $ === null) {
                throw new Error("please import jquery first.");
            }
            if (!root.endsWith("/")) {
                root = root + "/";
            }
            var that: this = this;
            $.ajax({
                type: "GET",
                url: root + "./resources/sap-ui-version.json",
                success: function (): void {
                    // 本地库存在，则加载本地
                    that.append({
                        url: root + "./resources/sap-ui-core.js",
                        onCompleted: caller.onCompleted
                    });
                },
                error: function (): void {
                    // 本地库不存在，则加载远程
                    that.append({
                        url: OPENUI5_OFFICIAL_URL,
                        onCompleted: caller.onCompleted
                    });
                }
            });
        } else {
            that.append({
                url: root,
                onCompleted: caller.onCompleted
            });
        }
    }
    /** 加载扩展 */
    extends(caller: ILoaderCaller): void {
        // 加载ibas
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
        require(
            ["extends/index"],
            caller.onCompleted,
            function (): void {
                throw new Error("faild to load openui5 extends.");
            }
        );
    }
}