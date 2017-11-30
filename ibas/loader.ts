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
if ((<any>window).ibas === undefined) {
    (<any>window).ibas = {
        copyright: "color-coding studio",
        license: "Apache License, Version 2.0",
        url: "https://colorcoding.org/"
    };
}
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
    /** 加载 */
    load(caller: ILoaderCaller): void {
        // 加载ibas
        if (caller.noCache === true) {
            // 不适用js缓存
            (<any>window).ibas.runtime = (new Date()).getTime();
            require = requirejs.config({
                baseUrl: caller.url,
                urlArgs: function (id: string, url: string): string {
                    return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + (<any>window).ibas.runtime;
                }
            });
        } else {
            // 使用js缓存
            require = requirejs.config({
                baseUrl: caller.url,
            });
        }
        // 加载库
        require(["ibas/index"], function (ibas: any): void {
            // 加载成功，创建壳加载
            var sysRequire: Require = ibas.requires.create({
                baseUrl: caller.url
            }, []);
            // 加载应用系统
            sysRequire(["ibas/bsbas/systems/index"], function (): void {
                // 加载成功
                var shellRequire: Require = ibas.requires.create({
                    context: ibas.requires.naming("shell"),
                    baseUrl: caller.url + "./ibas/shell/",
                }, ["ibas/bsbas/systems"]);
                shellRequire(["index"], function (): void {
                    // 加载完成
                    if (caller.onCompleted instanceof Function) {
                        caller.onCompleted();
                    }
                }, caller.onCompleted);
            }, caller.onCompleted);
        }, caller.onCompleted);
    }
}