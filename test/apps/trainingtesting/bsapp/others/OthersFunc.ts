/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { DemoUrlApp, DemoTabUrlApp } from "./DemoUrlApp";

/** 功能-演示 */
export class DemoUrlFunc extends ibas.ModuleFunction {
    static FUNCTION_ID = "1e70db7a-1e07-4c7d-8149-c61b1b72e5ed";
    static FUNCTION_NAME = "trainingtestingothers_func_url";
    constructor() {
        super();
        this.id = DemoUrlFunc.FUNCTION_ID;
        this.name = DemoUrlFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: DemoUrlApp = new DemoUrlApp();
        app.navigation = this.navigation;
        return app;
    }
}
/** 功能-演示 */
export class DemoTabFunc extends ibas.ModuleFunction {
    static FUNCTION_ID = "a4f404c1-559d-4099-89f5-fab4a6d5fa23";
    static FUNCTION_NAME = "trainingtestingothers_func_tab";
    constructor() {
        super();
        this.id = DemoTabFunc.FUNCTION_ID;
        this.name = DemoTabFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: DemoTabUrlApp = new DemoTabUrlApp();
        app.navigation = this.navigation;
        return app;
    }
}
