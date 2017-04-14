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

export * from "./I18N";

/** 发布的配置实例 */
import { I18N } from "./I18N";
export const i18n: I18N = function (): I18N {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {
            url: "https://github.com/color-coding/ibas-typescript",
            author: "niuren.zhu"
        };
    }
    if ((<any>window).ibas.i18n === undefined) {
        (<any>window).ibas.i18n = new I18N();
    }
    return (<any>window).ibas.i18n;
}();