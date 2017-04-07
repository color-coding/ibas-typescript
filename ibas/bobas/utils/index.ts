/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ArrayList } from "../data/index";
import * as cnf from "../configuration/index";
/**  */
export module requires {
    /** 模块间共享的类库名称，逗号分隔 */
    export const CONFIG_ITEM_SHARED_LIBRARIES: string = "sharedLibraries";
    /** 加载器名称模板 */
    export const CONTEXT_NAME_TEMPLATE_IBAS: string = "ibas.{0}";
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
            let libraries: any = cnf.config.get(CONFIG_ITEM_SHARED_LIBRARIES);
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
            config.paths = {};
            let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
            for (let index: number = 0; index < scripts.length; index++) {
                let script: HTMLScriptElement = scripts[index];
                if (script.src !== undefined && script.src !== null && script.src.length !== 0) {
                    for (let name of names) {
                        if (name.endsWith(".js")) {
                            // 指定了js文件
                            if (script.src.endsWith(name)) {
                                config.paths[name.substring(0, name.lastIndexOf(".js"))]
                                    = script.src.substring(0, script.src.lastIndexOf(".js"));
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
                            if (script.src.indexOf(name) > 0 && script.src.endsWith(".js")) {
                                name = script.src.substring(script.src.indexOf(name) + 1);
                                name = name.substring(0, name.lastIndexOf(".js"));
                                config.paths[name] = script.src.substring(0, script.src.lastIndexOf(".js"));
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