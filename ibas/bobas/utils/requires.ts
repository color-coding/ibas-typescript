/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ArrayList, dates, strings, objects } from "../data/index";
import * as conf from "../configuration/index";
/**  */
export module requires {
    /** 配置项目-模块间共享的类库名称，逗号分隔 */
    export const CONFIG_ITEM_SHARED_LIBRARIES: string = "sharedLibraries";
    /** 加载器名称模板 */
    export const CONTEXT_NAME_TEMPLATE_IBAS: string = "ibas.{0}";
    /** 加载等待时间 */
    export const CONFIG_ITEM_WAIT_SECONDS: string = "waitSeconds";
    /** 命名 */
    export function naming(name: string): string {
        return CONTEXT_NAME_TEMPLATE_IBAS.replace("{0}", name);
    }
    /**
     * 创建require实例
     * @param config 配置
     * @param library 共享的类库，为null时不共享
     */
    export function create(config: RequireConfig, library: any): Require {
        if ((<any>window).require === undefined || (<any>window).require === null) {
            throw new Error("not found requirejs.");
        }
        let names: ArrayList<string> = new ArrayList<string>();
        // names.push("ibas");
        names.push("ibas/bobas");
        names.push("ibas/bsbas");
        names.push("ibas/index.js");
        if (library !== undefined && library !== null) {
            if (library instanceof Array) {
                // 定义了path
                for (let item of library) {
                    names.push(item);
                }
            } else if (typeof library === "string") {
                names.push(library);
            }
            // 加载共享类库配置项
            let libraries: any = conf.config.get(CONFIG_ITEM_SHARED_LIBRARIES);
            if (libraries !== undefined) {
                for (let item of libraries.toString().split(",")) {
                    if (item === undefined || item === null || item.length === 0) {
                        continue;
                    }
                    let name: string = item;
                    if (!names.contain(name)) {
                        names.push(name);
                    }
                }
            }
            // 运行时版本
            let rtVersion: string = conf.config.get(conf.CONFIG_ITEM_RUNTIME_VERSION);
            if (!(objects.isNull(rtVersion))) {
                config.urlArgs = function (id: string, url: string): string {
                    return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + rtVersion;
                };
            }
            // 设置路径
            config.paths = {};
            let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
            for (let index: number = 0; index < scripts.length; index++) {
                let script: HTMLScriptElement = scripts[index];
                if (script.src !== undefined && script.src !== null && script.src.length !== 0) {
                    let scriptUrl: string = script.src;
                    if (scriptUrl.indexOf("?") > 0) {
                        // 去除参数部分
                        scriptUrl = scriptUrl.substring(0, scriptUrl.indexOf("?"));
                    }
                    for (let name of names) {
                        if (name.endsWith(".js")) {
                            // 指定了js文件
                            if (scriptUrl.endsWith(name)) {
                                config.paths[name.substring(0, name.lastIndexOf(".js"))]
                                    = scriptUrl.substring(0, scriptUrl.lastIndexOf(".js"));
                                break;
                            }
                        } else {
                            // 非js结尾不是文件，所有此路径的js均返回
                            if (!name.startsWith("/")) {
                                name = "/" + name;
                            }
                            if (!name.endsWith("/")) {
                                name = name + "/";
                            }
                            if (scriptUrl.indexOf(name) > 0 && scriptUrl.endsWith(".js")) {
                                name = scriptUrl.substring(scriptUrl.indexOf(name) + 1);
                                name = name.substring(0, name.lastIndexOf(".js"));
                                config.paths[name] = scriptUrl.substring(0, scriptUrl.lastIndexOf(".js"));
                                break;
                            }
                        }
                    }
                }
            }
        }
        return (<any>window).require.config(config);
    }
}