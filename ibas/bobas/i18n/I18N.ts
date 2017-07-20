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
import { emMessageLevel } from "../data/Enums";
import { objects } from "../data/Datas";
import { strings } from "../data/Strings";
import { urls } from "../data/Urls";
import { ArrayList } from "../data/Common";
import { config, CONFIG_ITEM_RUNTIME_VERSION } from "../configuration/index";
import { logger } from "../messages/index";

/** 配置项目-语言编码 */
export const CONFIG_ITEM_LANGUAGE_CODE: string = "language";
/** 多语言 */
export class I18N {
    /** 默认语言编码 */
    private DEFAULT_LANGUAGE_CODE: string = "en_US";

    private _language: string;
    /** 语言 */
    get language(): string {
        if (strings.isEmpty(this._language)) {
            this._language = config.get(CONFIG_ITEM_LANGUAGE_CODE, this.DEFAULT_LANGUAGE_CODE);
        }
        return this._language;
    }
    set language(value: string) {
        this._language = value;
        this.reload();
    }

    private items: Map<string, string>;
    /**
     * 输出描述
     * @param key 检索值
     * @param args 替代内容
     */
    prop(key: string, ...args: any[]): string {
        if (objects.isNull(this.items)) {
            // 没有初始化则加载
            this.items = new Map<string, string>();
            this.load(null);
        }
        if (this.items.has(key)) {
            return strings.format(this.items.get(key), args);
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
            onCompleted(data: any): void {
                if (objects.isNull(that.items)) { that.items = new Map<string, string>(); }
                for (let name in data) {
                    if (data[name] !== undefined) {
                        that.items.set(name, data[name]);
                    }
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
        var JQryAjxSetting: JQueryAjaxSettings = {
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
                logger.log(emMessageLevel.DEBUG, "i18n: get language file [{0}] sucessful.", caller.address);
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