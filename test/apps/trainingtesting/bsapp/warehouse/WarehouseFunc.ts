/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { WarehouseListApp } from "./WarehouseListApp";

export class WarehouseFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "0a993e51-1a1a-4c52-8ffd-4b1f714fe758";
    /** 功能名称 */
    static FUNCTION_NAME = "trainingtesting_func_warehouse";
    /** 构造函数 */
    constructor() {
        super();
        this.id = WarehouseFunc.FUNCTION_ID;
        this.name = WarehouseFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: WarehouseListApp = new WarehouseListApp();
        app.navigation = this.navigation;
        return app;
    }
}
