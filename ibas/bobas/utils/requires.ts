/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ArrayList, dates, strings, objects, KeyText } from "../data/index";
import { config, CONFIG_ITEM_RUNTIME_VERSION, } from "../configuration/index";
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
    /** 基本-共享库 */
    const basisShared: Map<string, string> = function (): Map<string, string> {
        if (!objects.isNull((<any>window).ibas)) {
            if (objects.isNull((<any>window).ibas.libraries)) {
                (<any>window).ibas.libraries = {};
            }
            if (objects.isNull((<any>window).ibas.libraries.basis)) {
                (<any>window).ibas.libraries.basis = new Map<string, string>();
            }
            return (<any>window).ibas.libraries.basis;
        }
        return new Map<string, string>();
    }();
    /** 其他-共享库 */
    const otherShared: Map<string, string> = function (): Map<string, string> {
        if (!objects.isNull((<any>window).ibas)) {
            if (objects.isNull((<any>window).ibas.libraries)) {
                (<any>window).ibas.libraries = {};
            }
            if (objects.isNull((<any>window).ibas.libraries.other)) {
                (<any>window).ibas.libraries.other = new Map<string, string>();
            }
            return (<any>window).ibas.libraries.other;
        }
        return new Map<string, string>();
    }();
    /** 获取共享库值 */
    function shared(names: string[]): ArrayList<KeyText> {
        let libraries: ArrayList<KeyText> = new ArrayList<KeyText>();
        if (objects.isNull(names) || names.length === 0) {
            return libraries;
        }
        let sharedNames: ArrayList<string> = new ArrayList<string>();
        let skipNames: ArrayList<string> = new ArrayList<string>();
        for (let item of names) {
            if (objects.isNull(item)) {
                continue;
            }
            item = item.trim();
            if (strings.isEmpty(item)) {
                continue;
            }
            if (item.startsWith("!")) {
                skipNames.add(item.substring(1));
            } else {
                sharedNames.add(item);
            }
        }
        let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
        for (let index: number = 0; index < scripts.length; index++) {
            let script: HTMLScriptElement = scripts[index];
            if (strings.isEmpty(script.src)) {
                continue;
            }
            let scriptUrl: string = script.src;
            if (scriptUrl.indexOf("?") > 0) {
                // 去除参数部分
                scriptUrl = scriptUrl.substring(0, scriptUrl.indexOf("?"));
            }
            let skip: boolean = false;
            for (let name of skipNames) {
                if (scriptUrl.indexOf(name) > 0) {
                    skip = true;
                }
            }
            if (skip) {
                continue;
            }
            for (let name of sharedNames) {
                if (strings.isEmpty(name)) {
                    continue;
                }
                if (name.endsWith(".js")) {
                    // 指定了js文件
                    if (scriptUrl.endsWith(name)) {
                        libraries.add(new KeyText(name.substring(0, name.lastIndexOf(".js"))
                            , scriptUrl.substring(0, scriptUrl.lastIndexOf(".js"))));
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
                        libraries.add(new KeyText(name, scriptUrl.substring(0, scriptUrl.lastIndexOf(".js"))));
                        break;
                    }
                }
            }
        }
        return libraries;
    }

    /**
     * 创建require实例
     * @param config 配置
     * @param library 共享的类库，为null时不共享
     */
    export function create(requireConfig: RequireConfig, library: string[]): Require {
        if ((<any>window).require === undefined || (<any>window).require === null) {
            throw new Error("not found requirejs.");
        }
        // 运行时版本
        let rtVersion: string = config.get(CONFIG_ITEM_RUNTIME_VERSION);
        if (!(objects.isNull(rtVersion)) && requireConfig.urlArgs === undefined) {
            requireConfig.urlArgs = function (id: string, url: string): string {
                return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + rtVersion;
            };
        }
        // 加载基本共享库
        if (basisShared.size === 0) {
            for (let item of shared([
                "ibas/bobas/",
                "ibas/bsbas/",
                "ibas/index.js",
                "ibas/bsbas/systems/"
            ])) {
                basisShared.set(item.key, item.text);
            }
        }
        // 加载其他共享库
        let libraries: any = config.get(CONFIG_ITEM_SHARED_LIBRARIES);
        if (libraries !== undefined && otherShared.size === 0) {
            let names: string[] = libraries.toString().split(",");
            if (names.length > 0) {
                for (let item of shared(names)) {
                    otherShared.set(item.key, item.text);
                }
            }
        }
        // 设置共享库
        requireConfig.paths = {};
        for (let item of basisShared.entries()) {
            requireConfig.paths[item[0]] = item[1];
        }
        for (let item of otherShared.entries()) {
            requireConfig.paths[item[0]] = item[1];
        }
        // 加载动态共享库
        if (!objects.isNull(library) && library.length > 0) {
            for (let item of shared(library)) {
                requireConfig.paths[item.key] = item.text;
            }
        }
        return (<any>window).require.config(requireConfig);
    }
}