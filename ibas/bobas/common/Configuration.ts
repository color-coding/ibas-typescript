/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />
/// <reference path="./Logger.ts" />
/// <reference path="./Utils.ts" />
namespace ibas {
    /** 配置项目-调试模式 */
    export const CONFIG_ITEM_DEBUG_MODE: string = "debug";
    /** 配置项目-公司代码 */
    export const CONFIG_ITEM_COMPANY: string = "company";
    /** 默认配置文件名称 */
    export const CONFIG_FILE_NAME: string = "config.json";
    /** 配置项目-运行时版本 */
    export const CONFIG_ITEM_RUNTIME_VERSION: string = "runtimeVersion";
    /** 配置项目-使用最小库 */
    export const CONFIG_ITEM_USE_MINIMUM_LIBRARY: string = "minLibrary";
    const CONFIG_VALUES: Map<string, any> = new Map<string, any>();
    const PROPERTY_LISTENER: symbol = Symbol("listener");
    /**
     * 配置
     */
    export class Configuration {
        /**
         * 加载配置文件
         * @param address 文件地址
         * @param callBack 加载完成回调方法
         */
        load(address: string | string[], callBack?: () => void): void {
            address = arrays.create(address);
            if (address.length === 0) {
                return;
            }
            let that: this = this;
            queues.execute(address, (address, next) => {
                if (address.indexOf("_=") < 0) {
                    address = address + (address.indexOf("?") < 0 ? "?" : "&") + "_=" + (new Date()).getTime();
                }
                let xhr: XMLHttpRequest = new XMLHttpRequest();
                xhr.open("GET", address, callBack instanceof Function ? true : false);
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                xhr.onreadystatechange = function (this: XMLHttpRequest, event: Event): void {
                    if (this.readyState === 4) {
                        if ((this.status >= 200 && this.status < 300) || this.status === 304) {
                            let data: any = JSON.parse(this.response);
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
                        } else {
                            console.warn(strings.format("config: load file [{2}] faild [{0} - {1}].", this.status, this.statusText, address));
                        }
                        next();
                    }
                };
                xhr.send(null);
            }, () => {
                if (callBack instanceof Function) {
                    callBack();
                }
                that = null;
            });
        }
        /**
         * 设置配置
         * @param key 项
         * @param value 值
         */
        set(key: string, value: any): void {
            if (value === null || value === undefined) {
                CONFIG_VALUES.delete(key);
            } else {
                CONFIG_VALUES.set(key, value);
            }
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
            if (CONFIG_VALUES.has(key)) {
                // 配置了
                value = CONFIG_VALUES.get(key);
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
                        } else if (typeof defalut === "string") {
                            value = strings.valueOf(value);
                        } else if (typeof defalut === "number") {
                            value = numbers.valueOf(value);
                        } else if (typeof defalut === "boolean") {
                            if (strings.equalsIgnoreCase("false", value)) {
                                value = false;
                            } else {
                                value = booleans.valueOf(value);
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
            return undefined;
        }
        /** 返回配置项目 */
        all(): IList<KeyValue> {
            let items: IList<KeyValue> = new ArrayList();
            for (let item of CONFIG_VALUES.keys()) {
                items.add(new KeyValue(item, CONFIG_VALUES.get(item)));
            }
            return items;
        }
        private variableMap: Map<string, string>;
        /** 替换字符串中的配置项，配置项示例：${Company} */
        applyVariables(value: string): string {
            if (typeof value === "string" && value.indexOf("${") >= 0) {
                if (this.variableMap == null) {
                    this.variableMap = new Map<string, string>();
                }
                if (this.variableMap.has(value)) {
                    return this.variableMap.get(value);
                }
                let reg: RegExp = new RegExp("\\$\\{([\\!a-zA-Z].*?)\\}");
                let results: RegExpExecArray = reg.exec(value);
                if (results !== undefined && results !== null) {
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
        /**
         * 注册监听事件
         * @param listener 监听者
         */
        registerListener(listener: IConfigurationChangedListener): void {
            if (listener === undefined || listener === null) {
                return;
            }
            if (this[PROPERTY_LISTENER] === undefined || this[PROPERTY_LISTENER] === null) {
                this[PROPERTY_LISTENER] = new Array<IConfigurationChangedListener>();
            }
            this[PROPERTY_LISTENER].push(listener);
        }
        /** 触发语言改变事件 */
        protected fireConfigurationChanged(name: string, value: any): void {
            if (this[PROPERTY_LISTENER] === undefined || this[PROPERTY_LISTENER] === null) {
                return;
            }
            for (let item of this[PROPERTY_LISTENER]) {
                item.onConfigurationChanged(name, value);
            }
        }
    }

    /** 配置变化监听者 */
    export interface IConfigurationChangedListener {
        /** 配置变化 */
        onConfigurationChanged(name: string, value: any): void;
    }
    /** 配置实例 */
    export const config: Configuration = new Configuration();
}