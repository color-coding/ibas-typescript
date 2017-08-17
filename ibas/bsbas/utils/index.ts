/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { HashManager } from "./hash";
export * from "./hash";
export * from "./hash.d";

/** Hash管理员实例 */
export const hashManager: HashManager = function (): HashManager {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.hashManager === undefined) {
        (<any>window).ibas.hashManager = new HashManager();
    }
    return (<any>window).ibas.hashManager;
}();