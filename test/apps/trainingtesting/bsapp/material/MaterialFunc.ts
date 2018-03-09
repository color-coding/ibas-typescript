/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        export class MaterialFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "7e807c13-e567-4c16-b9c7-0c76a7bbd392";
            /** 功能名称 */
            static FUNCTION_NAME = "trainingtesting_func_material";
            /** 构造函数 */
            constructor() {
                super();
                this.id = MaterialFunc.FUNCTION_ID;
                this.name = MaterialFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: MaterialListApp = new MaterialListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
