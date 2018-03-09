/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        export class CustomerFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "b4d4ef67-46a2-4c10-846e-86d4872a4fd5";
            /** 功能名称 */
            static FUNCTION_NAME = "trainingtesting_func_customer";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CustomerFunc.FUNCTION_ID;
                this.name = CustomerFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: CustomerListApp = new CustomerListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
