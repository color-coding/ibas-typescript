/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />
/// <reference path="./Configuration.ts" />
/// <reference path="./Logger.ts" />

namespace ibas {
    /** 配置项目-语言编码 */
    export const CONFIG_ITEM_LANGUAGE_CODE: string = "language";
    /** 配置项目-资源分组名称 */
    export const CONFIG_ITEM_I18N_GROUP_NAMES: string = "i18nGroups";
    const PROPERTY_LISTENER: symbol = Symbol("listener");
    const PROPERTY_LANGUAGE: symbol = Symbol("language");
    /** 多语言 */
    export class I18N {
        /** 资源字典，已按前缀分类 */
        private resources: Map<string, Map<string, string>>;
        /** 已加载文件 */
        private languageFiles: ArrayList<string> = new ArrayList<string>();
        /** 语言 */
        get language(): string {
            return this[PROPERTY_LANGUAGE];
        }
        set language(value: string) {
            if (this[PROPERTY_LANGUAGE] !== value) {
                this[PROPERTY_LANGUAGE] = value;
                this.fireLanguageChanged();
            }
        }
        /** 注册监听事件 */
        registerListener(listener: ILanguageChangedListener): void {
            if (objects.isNull(listener)) {
                return;
            }
            if (objects.isNull(this[PROPERTY_LISTENER])) {
                this[PROPERTY_LISTENER] = new ArrayList<ILanguageChangedListener>();
            }
            this[PROPERTY_LISTENER].add(listener);
        }
        /** 触发语言改变事件 */
        protected fireLanguageChanged(): void {
            if (!objects.isNull(this[PROPERTY_LANGUAGE])) {
                logger.log(emMessageLevel.INFO, "i18n: language change to [{0}].", this[PROPERTY_LANGUAGE]);
            }
            if (!objects.isNull(this[PROPERTY_LISTENER])) {
                for (let item of this[PROPERTY_LISTENER]) {
                    item.onLanguageChanged(this[PROPERTY_LANGUAGE]);
                }
            }
        }
        /**
         * 增加描述
         * @param key 键
         * @param value 值
         */
        add(key: string, value: string): string;
        add(value: object): string;
        add(value: object[]): string;
        add(): string {
            if (objects.isNull(this.resources)) {
                this.resources = new Map<string, Map<string, string>>();
            }
            if (arguments.length >= 2) {
                let key: string = arguments[0], value: string = arguments[1];
                if (strings.isEmpty(key) || strings.isEmpty(value)) {
                    return;
                }
                let group: string = groupName(key);
                let map: Map<string, string> = this.resources.get(group);
                if (objects.isNull(map)) {
                    map = new Map<string, string>();
                    this.resources.set(group, map);
                }
                map.set(key, value);
            } else if (arguments.length === 1) {
                let data: any = arguments[0];
                if (data instanceof Array) {
                    for (let item of data) {
                        this.add(item);
                    }
                } else if (typeof data === "object") {
                    for (let name in data) {
                        if (objects.isNull(name)) {
                            continue;
                        }
                        this.add(name, data[name]);
                    }
                }
            }
        }
        /**
         * 输出描述
         * @param key 检索值
         * @param args 替代内容
         */
        prop(key: string, ...args: any[]): string {
            if (strings.isEmpty(key)) {
                return key;
            }
            if (objects.isNull(this.resources)) {
                this.resources = new Map<string, Map<string, string>>();
            }
            let value: string = null;
            let map: Map<string, string> = this.resources.get(groupName(key));
            if (!objects.isNull(map)) {
                value = map.get(key);
            }
            if (!strings.isEmpty(value)) {
                return strings.format(value, args);
            }
            return strings.format("[{0}]", key);
        }
        /**
         * 重新加载语言文件
         * @param callBack 加载完成回掉方法
         */
        reload(callBack?: () => void): void {
            this.load(this.languageFiles, callBack);
        }
        /**
         * 加载语言文件
         * @param address 语言文件地址
         * @param callBack 加载完成回掉方法
         */
        load(address: string | string[], callBack?: () => void): void {
            address = ibas.arrays.create(address);
            if (address.length === 0) {
                return;
            }
            // 待处理地址
            let addresses: Array<string> = new Array<string>();
            let rtVersion: string = config.get(CONFIG_ITEM_RUNTIME_VERSION);
            // 获取语言
            let language: string =
                (ibas.strings.isWith(this.language, "en_", undefined) || ibas.strings.isWith(this.language, "en-", undefined))
                    ? null : this.language;
            if (!strings.isEmpty(language)) {
                language = language.replace("-", "_");
            }
            for (let item of address) {
                item = urls.normalize(item);
                // 设置运行时版本
                if (!strings.isEmpty(rtVersion) && item.indexOf("_=") < 0) {
                    item = item + (item.indexOf("?") < 0 ? "?" : "&") + "_=" + rtVersion;
                }
                addresses.push(item);
                if (!this.languageFiles.contain(item)) {
                    this.languageFiles.add(item);
                }
                // 加载指定语言
                if (!strings.isEmpty(language)) {
                    let index: number = item.lastIndexOf(".");
                    if (index > 0) {
                        addresses.push(item.substring(0, index + 1) + language + item.substring(index));
                    }
                }
            }
            // 加载语言文件
            let that: this = this;
            ibas.queues.execute(addresses, (address, next) => {
                let xhr: XMLHttpRequest = new XMLHttpRequest();
                xhr.open("GET", address, callBack instanceof Function ? true : false);
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                xhr.onreadystatechange = function (this: XMLHttpRequest, event: Event): void {
                    if (this.readyState === 4) {
                        if ((this.status >= 200 && this.status < 300) || this.status === 304) {
                            that.add(JSON.parse(this.response));
                        } else {
                            logger.log(emMessageLevel.ERROR, "i18n: load language [{0}] faild.", address);
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
    }
    /** 语言变化监听者 */
    export interface ILanguageChangedListener {
        /** 语言变化 */
        onLanguageChanged(value: string): void;
    }
    // 分组标记
    const GROUPS: ArrayList<string> = new ArrayList<string>();
    // 获取分组名
    function groupName(key: string): string {
        // 初始化分组配置
        if (GROUPS.length === 0) {
            let values: string = config.get(CONFIG_ITEM_I18N_GROUP_NAMES);
            if (!strings.isEmpty(values)) {
                for (let item of values.split(",")) {
                    item = item.trim();
                    if (strings.isEmpty(item)) {
                        continue;
                    }
                    GROUPS.add(item);
                }
            }
        }
        let tmps: string[] = key.split("_");
        if (GROUPS.contain(tmps[0])) {
            // 对象资源分组优化
            return tmps[0] + "_" + tmps[1].substring(0, 1);
        } else {
            return tmps[0];
        }
    }
    /** 语言实例 */
    export const i18n: I18N = new I18N();
}