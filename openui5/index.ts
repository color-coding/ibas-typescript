/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./types/index.d.ts" />
import * as ibas from "ibas/index";

/** openui5文件名称 */
export const LIBRARY_OPENUI5_ROOT_FILE_NAME: string = "/openui5/index";
if ((<any>window).ibas === undefined) {
    (<any>window).ibas = {
        url: "https://github.com/color-coding/ibas-typescript",
        author: "niuren.zhu"
    };
}
if ((<any>window).ibas.openui5 === undefined) {
    (<any>window).ibas.openui5 = {
        version: "0.1.0",
        author: "niuren.zhu"
    };
    let rootUrl: string = ibas.urls.rootUrl(LIBRARY_OPENUI5_ROOT_FILE_NAME);
    // 加载语言-框架默认
    ibas.i18n.load(ibas.strings.format("{0}/languages/datatypes.json", rootUrl));
    // 加载语言-框架默认
    ibas.i18n.load(ibas.strings.format("{0}/languages/utils.json", rootUrl));
}
export * from "./datatypes";
export * from "./utils";