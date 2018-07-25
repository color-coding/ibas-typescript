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
        /** 默认语言编码 */
        private DEFAULT_LANGUAGE_CODE: string = "en_US";
        /** 语言 */
        get language(): string {
            if (strings.isEmpty(this[PROPERTY_LANGUAGE])) {
                this[PROPERTY_LANGUAGE] = config.get(CONFIG_ITEM_LANGUAGE_CODE, this.DEFAULT_LANGUAGE_CODE);
            }
            return this[PROPERTY_LANGUAGE];
        }
        set language(value: string) {
            if (this[PROPERTY_LANGUAGE] !== value) {
                this[PROPERTY_LANGUAGE] = value;
                this.fireLanguageChanged();
            }
        }
        /**
         * 注册监听事件
         * @param listener 监听者
         */
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
            this.reload();
            if (!objects.isNull(this[PROPERTY_LISTENER])) {
                for (let item of this[PROPERTY_LISTENER]) {
                    item.onLanguageChanged(this[PROPERTY_LANGUAGE]);
                }
            }
        }
        /** 资源字典，已按前缀分类 */
        private resources: Map<string, Map<string, string>>;
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
                // 没有初始化则加载
                this.resources = new Map<string, Map<string, string>>();
                this.load(null);
            }
            let value: string = null;
            let map: Map<string, string> = this.resources.get(this.groupName(key));
            if (!objects.isNull(map)) {
                value = map.get(key);
            }
            if (!strings.isEmpty(value)) {
                return strings.format(value, args);
            }
            return strings.format("[{0}]", key);
        }

        private languageFiles: ArrayList<string> = new ArrayList<string>();
        /** 重新加载已加载 */
        reload(): void {
            for (let item of this.languageFiles) {
                this.load(item);
            }
        }
        load(address: string): void {
            let that: this = this;
            if (objects.isNull(address)) {
                return;
            }
            address = urls.normalize(address);
            if (!this.languageFiles.contain(address)) {
                this.languageFiles.add(address);
            }
            // 设置运行时版本
            let rtVersion: string = config.get(CONFIG_ITEM_RUNTIME_VERSION);
            if (!objects.isNull(rtVersion)) {
                address = address + (address.indexOf("?") === -1 ? "?" : "&") + "_=" + rtVersion;
            }
            let loader: LanguageLoader = new LanguageLoader();
            let caller: ILanguageLoaderCaller = {
                address: address,
                onCompleted(resource: any): void {
                    if (objects.isNull(that.resources)) {
                        that.resources = new Map<string, Map<string, string>>();
                    }
                    let setMap: Function = function (data: any): void {
                        for (let name in data) {
                            if (objects.isNull(name)) {
                                continue;
                            }
                            let value: any = data[name];
                            if (objects.isNull(value)) {
                                continue;
                            }
                            that.add(name, value);
                        }
                    };
                    if (resource instanceof Array) {
                        for (let item of resource) {
                            setMap(item);
                        }
                    } else {
                        setMap(resource);
                    }
                }
            };
            // 加载默认语言
            loader.load(caller);
            // 加载指定语言
            if (this.language !== this.DEFAULT_LANGUAGE_CODE) {
                let index: number = caller.address.lastIndexOf(".");
                if (index > 0) {
                    caller.address = caller.address.substring(0, index + 1) + this.language + caller.address.substring(index);
                    loader.load(caller);
                }
            }
        }
        // 分组标记
        private groups: ArrayList<string> = null;
        private groupName(key: string): string {
            if (objects.isNull(this.groups)) {
                // 初始化分组配置
                this.groups = new ArrayList<string>();
                let values: string = config.get(CONFIG_ITEM_I18N_GROUP_NAMES);
                if (!strings.isEmpty(values)) {
                    for (let item of values.split(",")) {
                        item = item.trim();
                        if (strings.isEmpty(item)) {
                            continue;
                        }
                        this.groups.add(item);
                    }
                }
            }
            let tmps: string[] = key.split("_");
            if (this.groups.contain(tmps[0])) {
                // 对象资源分组优化
                return tmps[0] + "_" + tmps[1].substring(0, 1);
            } else {
                return tmps[0];
            }
        }
        add(key: string, value: string): string {
            if (strings.isEmpty(key)) {
                return;
            }
            let group: string = this.groupName(key);
            let map: Map<string, string> = this.resources.get(group);
            if (objects.isNull(map)) {
                map = new Map<string, string>();
                this.resources.set(group, map);
            }
            map.set(key, value);
        }
    }
    /** 语言变化监听者 */
    export interface ILanguageChangedListener {
        /** 语言变化 */
        onLanguageChanged(value: string): void;
    }
    /** 语言加载调用者 */
    interface ILanguageLoaderCaller {
        /** 加载地址 */
        address: string;
        /** 加载完成通知 */
        onCompleted(datas: any): void;
    }
    /** 语言加载者 */
    class LanguageLoader {
        /** 加载 */
        load(caller: ILanguageLoaderCaller): void {
            let JQryAjxSetting: JQueryAjaxSettings = {
                url: caller.address,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                cache: true,
                error: function (xhr: JQueryXHR, status: string, error: string): void {
                    logger.log(emMessageLevel.ERROR, "i18n: get language file [{2}] faild [{0} - {1}].", status, error, caller.address);
                    caller.onCompleted({});
                },
                success: function (data: any): void {
                    /*
                    logger.log(emMessageLevel.DEBUG, "i18n: get language file [{0}] sucessful.", caller.address);
                    */
                    if (!objects.isNull(data)) {
                        caller.onCompleted(data);

                    } else {
                        caller.onCompleted({});
                    }
                },
            };
            jQuery.ajax(JQryAjxSetting);
        }
    }

    /** 语言实例 */
    export const i18n: I18N = new I18N();
}