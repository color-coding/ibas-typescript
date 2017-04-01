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
/// <reference path="../../3rdparty/index.d.ts" />
import { string } from "../data/index";

/**
 * 配置
 */
export class Configuration {

    /** 默认配置文件名称 */
    static CONFIG_FILE_NAME: string = "config.json";
    /** 配置项目-调试模式 */
    CONFIG_ITEM_DEBUG_MODE: string = "debug";
    /** 配置项目-消息输出级别 */
    CONFIG_ITEM_MESSAGES_LEVEL: string = "msgLevel";
    /** 配置项目-离线模式 */
    CONFIG_ITEM_OFFLINE_MODE: string = "offline";
    /** 配置项目-禁用平台视图 */
    CONFIG_ITEM_DISABLE_PLATFORM_VIEW: string = "disablePlatformView";

    private items: Map<string, any> = new Map<string, any>();
    /**
     * 加载配置文件
     */
    load(address: string): void {
        let that: any = this;
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            error: function (xhr: JQueryXHR, status: string, error: string): void {
                console.warn(string.format("config: get config file [{2}] faild [{0} - {1}].", status, error, address));
            },
            success: function (data: any): void {
                console.log(string.format("config: get config file [{0}] successful.", address));
                if (data !== undefined && data !== null) {
                    if (data.appSettings !== undefined && data.appSettings !== null) {
                        let setting: any = data.appSettings;
                        for (let name in setting) {
                            if (setting[name] !== undefined) {
                                that.set(name, setting[name]);
                            }
                        }
                    }
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }
    /**
     * 设置配置
     * @param key 项
     * @param value 值
     */
    set(key: string, value: any): void {
        this.items.set(key, value);
    }
    /**
     * 获取配置
     * @param key 项
     */
    get(key: string): any;
    /**
     * 获取配置
     * @param key 项
     * @param defalut 默认值（未配置则使用此值）
     */
    get<T>(key: string, defalut: T): T;
    /**
     * 获取配置
     * @param key 项
     * @param defalut 默认值（未配置则使用此值）
     * @param type 值类型
     */
    get<T>(key: string, defalut: T, type: any): T;
    /**
     * 获取配置
     */
    get<T>(...args: any[]): T {
        let key: string, defalut: T, type: any;
        if (args.length === 0) {
            throw new Error(string.format("invaild param."));
        }
        // 配置项参数
        key = args[0];
        // 默认值参数
        if (args.length > 0) {
            defalut = args[1];
        }
        // 类型参数
        if (args.length > 1) {
            type = args[2];
        }
        let value: any;
        if (this.items.has(key)) {
            // 配置了
            value = this.items.get(key);
            if (defalut !== undefined) {
                // 提供了默认值
                if (typeof value !== typeof defalut) {
                    // 配置的值与默认值类型不符
                    if (type !== undefined) {
                        // 提供了转换参数
                        for (let item in type) {
                            if (string.equalsIgnoreCase(value, item)) {
                                return type[item];
                            }
                        }
                    }
                }
            }
            return value;
        } else {
            // 未配置
            if (defalut !== undefined) {
                return defalut;
            }
        }
        console.warn(string.format("unable to get valid value for [{0}].", key));
        return undefined;
    }
}
