/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        export class SalesOrderFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "d205453b-29d4-49c8-99f3-d07737529316";
            /** 功能名称 */
            static FUNCTION_NAME = "trainingtesting_func_salesorder";
            /** 构造函数 */
            constructor() {
                super();
                this.id = SalesOrderFunc.FUNCTION_ID;
                this.name = SalesOrderFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: SalesOrderListApp = new SalesOrderListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
