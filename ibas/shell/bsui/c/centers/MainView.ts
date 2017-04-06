/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";

/**
 * 视图-入口
 */
export class MainView extends ibas.BOView implements sys.IMainView {
    /** 绘制视图 */
    darw(): any {
        this.app = new sap.m.App("ibas-app");
        this.id = this.app.getId();
        return this.app;
    }
    private app: sap.m.App;
}