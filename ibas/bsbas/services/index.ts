/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类

export * from "./Services.d";
export * from "./Services";
import { ServicesManager } from "./Services";
/** 服务管理员实例 */
export const servicesManager: ServicesManager = function (): ServicesManager {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.servicesManager === undefined) {
        (<any>window).ibas.servicesManager = new ServicesManager();
    }
    return (<any>window).ibas.servicesManager;
}();