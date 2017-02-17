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
/** 初始化函数 */
import { config, Configuration } from "./configuration/index";
import { i18n } from "./i18n/index";
import { string, url } from "./data/index";
/** 业务对象库（bobas）文件名称 */
export const LIBRARY_BOBAS_ROOT_FILE_NAME: string = "/bobas/index";
/** 框架初始化 */
export const isInitialized: boolean = function (): boolean {
    if (isInitialized) {
        // 初始化过，不再初始化
        return;
    }
    let rootUrl: string = url.rootUrl(LIBRARY_BOBAS_ROOT_FILE_NAME);
    // 加载配置-框架默认
    config.load(string.format("{0}/{1}", rootUrl, Configuration.CONFIG_FILE_NAME));
    // 加载语言-框架默认
    i18n.load(string.format("{0}/resources/languages/bobas.{1}.json", rootUrl, i18n.language));
    return true;
}();
// 导出的类型
export * from "./data/index";
export * from "./messages/index";
export * from "./configuration/index";
export * from "./i18n/index";
export * from "./core/index";
export * from "./bo/index";
export * from "./repository/index";
// 导出的测试相关类型
export * from "./assert/index";