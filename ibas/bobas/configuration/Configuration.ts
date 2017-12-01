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
import { strings, emMessageLevel } from "../data/index";
import { ILogger } from "../messages/Logger.d"; // 仅引用声明，避免嵌套引用

/** 配置项目-调试模式 */
export const CONFIG_ITEM_DEBUG_MODE: string = "debug";
/** 配置项目-公司代码 */
export const CONFIG_ITEM_COMPANY: string = "company";
/** 默认配置文件名称 */
export const CONFIG_FILE_NAME: string = "config.json";
/** 配置项目-运行时版本 */
export const CONFIG_ITEM_RUNTIME_VERSION: string = "runtimeVersion";
/**
 * 配置
 */
export class Configuration {

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
                console.warn(strings.format("config: load file [{2}] faild [{0} - {1}].", status, error, address));
            },
            success: function (data: any): void {
                console.log(strings.format("config: load file [{0}] successful.", address));
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
        // 触发值改变事件
        this.fireConfigurationChanged(key, value);
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
    get<T>(): T {
        let key: string, defalut: T, type: any;
        if (arguments.length === 0) {
            throw new Error(strings.format("invaild param."));
        }
        // 配置项参数
        key = arguments[0];
        // 默认值参数
        if (arguments.length > 0) {
            defalut = arguments[1];
        }
        // 类型参数
        if (arguments.length > 1) {
            type = arguments[2];
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
                            if (strings.equalsIgnoreCase(value, item)) {
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
        // 记录不能获取到的配置
        this.log(emMessageLevel.DEBUG, strings.format("config: unable to get value for [{0}].", key));
        return undefined;
    }

    private log(level: emMessageLevel, message: string): void {
        if ((<any>window).ibas !== undefined && (<any>window).ibas !== null
            && (<any>window).ibas.logger !== undefined && (<any>window).ibas.logger !== null) {
            let logger: ILogger = <ILogger>(<any>window).ibas.logger;
            logger.log(level, message);
        } else {
            if (level === emMessageLevel.WARN) {
                console.warn(message);
            } if (level === emMessageLevel.ERROR) {
                console.error(message);
            } else {
                console.log(message);
            }
        }
    }

    private variableMap: Map<string, string>;
    /** 替换字符串中的配置项，配置项示例：${Company} */
    applyVariables(value: string): string {
        if (value !== null && value.indexOf("${") >= 0) {
            if (this.variableMap == null) {
                this.variableMap = new Map<string, string>();
            }
            if (this.variableMap.has(value)) {
                return this.variableMap.get(value);
            }
            let reg: RegExp = new RegExp("\\$\\{([\\!a-zA-Z].*?)\\}");
            let results: RegExpExecArray = reg.exec(value);
            if (results !== null) {
                for (let item of results) {
                    if (!item.startsWith("${") || !item.endsWith("}")) {
                        // 正则写不对，麻痹的不搞了
                        continue;
                    }
                    let key: string = item.replace("${", "").replace("}", "");
                    // 首字母小写
                    key = key.substring(0, 1).toLowerCase() + key.substring(1);
                    let cValue: any = this.get(key);
                    if (cValue !== undefined && cValue !== null) {
                        return value.replace(item, cValue);
                    }
                }
            }
        }
        return value;
    }

    private _listeners: Array<IConfigurationChangedListener>;
    /**
     * 注册监听事件
     * @param listener 监听者
     */
    registerListener(listener: IConfigurationChangedListener): void {
        if (listener === undefined || listener === null) {
            return;
        }
        if (this._listeners === undefined || this._listeners === null) {
            this._listeners = new Array<IConfigurationChangedListener>();
        }
        this._listeners.push(listener);
    }
    /** 触发语言改变事件 */
    protected fireConfigurationChanged(name: string, value: any): void {
        if (this._listeners === undefined || this._listeners === null) {
            return;
        }
        for (let item of this._listeners) {
            item.onConfigurationChanged(name, value);
        }
    }
}

/** 配置变化监听者 */
export interface IConfigurationChangedListener {
    /** 配置变化 */
    onConfigurationChanged(name: string, value: any): void;
}