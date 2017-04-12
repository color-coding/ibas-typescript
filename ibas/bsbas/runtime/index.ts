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
import {  VariablesManager } from "./Runtime";

/** 控制台管理员实例 */
export const variablesManager: VariablesManager = function (): VariablesManager {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.variablesManager === undefined) {
        (<any>window).ibas.variablesManager = new VariablesManager();
    }
    return (<any>window).ibas.variablesManager;
}();