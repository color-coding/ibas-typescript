/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
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
        /** 功能-演示 */
        export class DemoMapFunc extends ibas.ModuleFunction {
            static FUNCTION_ID = "23e12ad0-167d-4f49-9eeb-dfc746f572d6";
            static FUNCTION_NAME = "trainingtestingothers_func_map";
            constructor() {
                super();
                this.id = DemoMapFunc.FUNCTION_ID;
                this.name = DemoMapFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: DemoMapApp = new DemoMapApp();
                app.navigation = this.navigation;
                return app;
            }
        }
        /** 功能-壳 */
        export class DemoShellFunc extends ibas.ModuleFunction {
            static FUNCTION_ID = "109dc91d-4c88-42b7-8d5d-9ea21259e060";
            static FUNCTION_NAME = "trainingtestingothers_func_shell";
            constructor() {
                super();
                this.id = DemoShellFunc.FUNCTION_ID;
                this.name = DemoShellFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: DemoShellApp = new DemoShellApp();
                app.navigation = this.navigation;
                return app;
            }
        }
        /** 功能-数据类型 */
        export class DemoDataFunc extends ibas.ModuleFunction {
            static FUNCTION_ID = "7533d53a-b178-47a1-9f2a-e8ad23bad6b6";
            static FUNCTION_NAME = "trainingtestingothers_func_data";
            constructor() {
                super();
                this.id = DemoDataFunc.FUNCTION_ID;
                this.name = DemoDataFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: DemoDataApp = new DemoDataApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
