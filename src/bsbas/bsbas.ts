/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类

import * as bobas from "../../src/bobas/bobas";
/** 应用系统库（bsbas）文件名称 */
export const LIBRARY_BSBAS_ROOT_FILE_NAME: string = "bsbas.js";
export const config: bobas.Configuration = bobas.config;
/** 初始化函数 */
/** 框架初始化 */
let init = function init(): void {
    let rootUrl = config.rootUrl(LIBRARY_BSBAS_ROOT_FILE_NAME);
    // 加载配置-框架默认
    config.load(bobas.string.format("{0}/{1}", rootUrl, bobas.Configuration.CONFIG_FILE_URL));
    // 加载配置-网站默认
    config.load(bobas.string.format("{0}/{1}", config.rootUrl(null), bobas.Configuration.CONFIG_FILE_URL));
    // 加载语言-框架默认
    bobas.i18n.load(bobas.string.format("{0}/resources/languages/bsbas.{1}.json", rootUrl, bobas.i18n.language));
} ();
// 此模块内容
export * from "./core/Core";
export * from "./applications/Applications";
// export * from "./services/Services";

