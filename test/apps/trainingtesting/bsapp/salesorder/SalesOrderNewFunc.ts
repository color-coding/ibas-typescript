/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { SalesOrderListNewApp } from "./SalesOrderListNewApp";

export class SalesOrderNewFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "13e0664c-2e3c-463d-92e9-eb1d020414c6";
    /** 功能名称 */
    static FUNCTION_NAME = "trainingtesting_func_salesorder";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "trainingtesting/index";
    /** 构造函数 */
    constructor() {
        super();
        this.id = SalesOrderNewFunc.FUNCTION_ID;
        this.name = SalesOrderNewFunc.FUNCTION_NAME;
        this.description = '新销售订单列表';
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: SalesOrderListNewApp = new SalesOrderListNewApp();
        app.navigation = this.navigation;
        return app;
    }
}
