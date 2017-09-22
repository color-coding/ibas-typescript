/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
export * from "./Timing";
export * from "./HashEventManager";
export * from "./HashEventManager.d";

import { HashEventManager } from "./HashEventManager";
/** Hash管理员实例 */
export const hashEventManager: HashEventManager = function (): HashEventManager {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.hashEventManager === undefined) {
        (<any>window).ibas.hashEventManager = new HashEventManager();
    }
    return (<any>window).ibas.hashEventManager;
}();