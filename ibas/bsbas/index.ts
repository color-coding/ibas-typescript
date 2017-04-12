/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类
import { Configuration, config, string, i18n, url } from "../bobas/index";
/** 应用系统库（bsbas）文件名称 */
export const LIBRARY_BSBAS_ROOT_FILE_NAME: string = "/bsbas/index";
/** 框架初始化 */
let init: Function = function (): void {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.bsbas === undefined) {
        (<any>window).ibas.bsbas = {
            version: "0.1.0"
        };

        let rootUrl: string = url.rootUrl(LIBRARY_BSBAS_ROOT_FILE_NAME);
        // 加载配置-框架默认
        config.load(string.format("{0}/{1}", rootUrl, Configuration.CONFIG_FILE_NAME));
        // 加载语言-框架默认
        i18n.load(string.format("{0}/resources/languages/bsbas.{1}.json", rootUrl, "{0}"));
    }
}; init();
// 此模块内容
export * from "./data/index";
export * from "./core/index";
export * from "./applications/index";
export * from "./views/index";
// export * from "./systems/index";
export * from "./services/index";
export * from "./runtime/index";

