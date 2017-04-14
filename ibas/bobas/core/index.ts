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

export * from "./BusinessObjectCore.d";
export * from "./BusinessObjectCore";
export * from "./BORepositoryCore.d";
export * from "./BORepositoryCore";
export * from "./BORepositoriesAjax";

/** 创建业务对象工厂实例 */
import { BOFactory } from "./BusinessObjectCore";
export const boFactory: BOFactory = function (): BOFactory {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.boFactory === undefined) {
        (<any>window).ibas.boFactory = new BOFactory();
    }
    return (<any>window).ibas.boFactory;
}();
