/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
export * from "./BrowserEventManager";
export * from "./BrowserEventManager.d";
export * from "./Files";

import { BrowserEventManager } from "./BrowserEventManager";
/** 浏览器事件管理员实例 */
export const browserEventManager: BrowserEventManager = function (): BrowserEventManager {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.browserEventManager === undefined) {
        (<any>window).ibas.browserEventManager = new BrowserEventManager();
    }
    return (<any>window).ibas.browserEventManager;
}();
