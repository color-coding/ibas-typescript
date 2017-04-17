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
import { emMessageLevel, objects, strings, url } from "../data/index";
import { config } from "../configuration/index";
import { logger } from "../messages/index";
/** 多语言 */
export class I18N {

    static CONFIG_ITEM_LANGUAGE_CODE: string = "language";

    private _language: string;
    get language(): string {
        if (strings.isEmpty(this._language)) {
            this._language = config.get(I18N.CONFIG_ITEM_LANGUAGE_CODE, "zh_CN");
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

    private languageFiles: Array<string> = new Array<string>();
    /** 重新加载已加载 */
    reload(): void {
        for (let item of this.languageFiles) {
            this.load(item);
        }
    }
    load(address: string): void {
        let that = this;
        if (objects.isNull(address)) {
            return;
        }
        if (!address.startsWith("http")) {
            if (address.startsWith(url.ROOT_URL_SIGN)) {
                // 补齐地址，根目录
                address = window.document.location.origin + "/" + address.slice(url.ROOT_URL_SIGN.length, address.length);
            }
        }
        if (address.indexOf("{0}") > 0) {
            // 加载文件为模板
            let has = false;
            for (let item of this.languageFiles) {
                if (item === address) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                // 记录到列表
                this.languageFiles.push(address.valueOf());
            }
            address = strings.format(address, this.language);
        }
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: true,
            error: function (xhr: JQueryXHR, status: string, error: string): void {
                logger.log(emMessageLevel.ERROR, "i18n: get language file [{2}] faild [{0} - {1}].", status, error, address);
            },
            success: function (data: any): void {
                logger.log(emMessageLevel.DEBUG, "i18n: get language file [{0}] sucessful.", address);
                if (data !== undefined && data !== null) {
                    if (objects.isNull(that.items)) { that.items = new Map<string, string>(); }
                    for (let name in data) {
                        if (data[name] !== undefined) {
                            that.items.set(name, data[name]);
                        }
                    }
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }
}
