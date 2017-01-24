/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * 模块索引文件，此文件集中导出类
 */
/// <reference path="../../3rdparty/jquery.d.ts" />
import { string } from "../data/Data";

/**
 * 配置
 */
export class Configuration {

    /**
     * 配置文件地址
     */
    private static CONFIG_FILE_URL: string = "config.json";
    private static ROOT_FILE_NAME: string = "/bobas.js";

    constructor() {
        // 加载配置
        this.load();
    }
    /**
     * 根路径标记
     */
    ROOT_URL_SIGN: string = ".../";

    CONFIG_ITEM_DEBUG_MODE: string = "debug";

    /**
     * 获取当前库路径
     */
    rootUrl(): string {
        let root: string = window.document.location.origin;
        var docScripts: NodeListOf<HTMLScriptElement> = window.document.getElementsByTagName("script");
        for (let i: number = 0; i < docScripts.length; i++) {
            let atr: Attr = docScripts[i].attributes.getNamedItem("src");
            if (atr === undefined || atr === null) {
                continue;
            }
            if (atr.value.endsWith(Configuration.ROOT_FILE_NAME)) {
                let tmp: string = atr.value.slice(0, atr.value.lastIndexOf(Configuration.ROOT_FILE_NAME));
                let count: number = string.count(tmp, "../");
                let tmps: string[] = window.document.location.pathname.split("/");
                for (let j: number = 0; j < tmps.length; j++) {
                    if (tmps[j] === undefined || tmps[j] === null) { continue; }
                    if (tmps[j].length === 0) { continue; }
                    if (j >= tmps.length - 1 - count) { break; }// 超过路径则退出
                    root = root + "/" + tmps[j];
                }
                if (count > 0) {
                    tmp = string.replace(tmp, "../", "");
                    tmp = string.replace(tmp, "./", "");
                    root = root + "/" + tmp;
                }
                break;
            }
        }
        return root;
    }

    private items: Map<string, string> = new Map<string, string>();

    /**
     * 加载配置文件
     */
    load(): void {
        let that: any = this;
        let address: string = string.format("{0}/{1}", this.rootUrl(), Configuration.CONFIG_FILE_URL);
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            error: function (xhr: JQueryXHR, status: string, error: string) {
                console.error(string.format("config: get file [{2}] faild [{0} - {1}].", status, error, address));
            },
            success: function (data: any) {
                console.debug(string.format("config: get file [{0}] successful.", address));
                if (data !== undefined && data !== null) {
                    if (data.appSettings !== undefined && data.appSettings !== null) {
                        let setting: any = data.appSettings;
                        for (let name in setting) {
                            that.items.set(name, setting[name]);
                        }
                    }
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }

    /**
     * 获取配置
     * @param key 项
     * @param defalut 默认值（未配置则使用此值）
     */
    get(key: string, defalut: any): any {
        if (this.items.has(key)) {
            return this.items.get(key);
        }
        if (defalut !== undefined) {
            // 不存在配置内容，默认值替代
            return defalut;
        }
        throw new Error(string.format("invalid parameter [{0}].",key));
    }
}

/**
 * 发布的配置实例
 */
export const config: Configuration = new Configuration();
