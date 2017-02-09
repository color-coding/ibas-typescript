/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类
import { Configuration, config, string, i18n } from "../../ibas/bobas/bobas";
/** 应用系统库（bsbas）文件名称 */
export const LIBRARY_BSBAS_ROOT_FILE_NAME: string = "bsbas.js";
/** 框架初始化 */
export const isInitialized: boolean = function (): boolean {
    if (isInitialized) {
        // 初始化过，不再初始化
        return;
    }
    let rootUrl = config.rootUrl(LIBRARY_BSBAS_ROOT_FILE_NAME);
    // 加载配置-框架默认
    config.load(string.format("{0}/{1}", rootUrl, Configuration.CONFIG_FILE_URL));
    // 加载配置-网站默认
    config.load(string.format("{0}/{1}", config.rootUrl(null), Configuration.CONFIG_FILE_URL));
    // 加载语言-框架默认
    i18n.load(string.format("{0}/resources/languages/bsbas.{1}.json", rootUrl, i18n.language));
}();
export * from "../../ibas/bobas/bobas";// 集中发布bobas内容，减少引用声明
// 此模块内容
export * from "./data/Enums";
export * from "./core/Core";
export * from "./applications/Applications";
// export * from "./systems/Systems"; // 此需要单独引用，不再集中发布
// export * from "./services/Services";

