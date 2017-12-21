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
import { config, CONFIG_FILE_NAME, CONFIG_ITEM_RUNTIME_VERSION } from "./configuration/index";
import { i18n } from "./i18n/index";
import { strings, urls } from "./data/index";
/** 业务对象库（bobas）文件名称 */
export const LIBRARY_BOBAS_ROOT_FILE_NAME: string = "/bobas/index";
/** 框架初始化 */
let init: Function = function (): void {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {
            copyright: "color-coding studio",
            license: "Apache License, Version 2.0",
            url: "https://colorcoding.org/"
        };
    }
    if ((<any>window).ibas.bobas === undefined) {
        (<any>window).ibas.bobas = {
            version: "0.1.2",
            author: "niuren.zhu"
        };
        let rootUrl: string = urls.rootUrl(LIBRARY_BOBAS_ROOT_FILE_NAME);
        // 加载配置-框架默认
        config.load(strings.format("{0}/{1}", rootUrl, CONFIG_FILE_NAME));
        if ((<any>window).ibas.runtime !== undefined) {
            config.set(CONFIG_ITEM_RUNTIME_VERSION, (<any>window).ibas.runtime);
        }
        // 加载语言-框架默认
        i18n.load(strings.format("{0}/resources/languages/bobas.json", rootUrl));
        i18n.load(strings.format("{0}/resources/languages/enums.json", rootUrl));
    }
}; init();
// 导出的类型
export * from "./data/index";
export * from "./messages/index";
export * from "./configuration/index";
export * from "./i18n/index";
export * from "./core/index";
export * from "./bo/index";
export * from "./repository/index";
export * from "./utils/index";
export * from "./tasks/index";
// 导出的测试相关类型
export * from "./debug/index";