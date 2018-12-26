/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        /** 应用-壳 */
        export class DemoShellApp extends shell.app.ShellApplication<IDemoShellView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "b602ef21-4408-4b73-9793-c639891bf52f";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtestingothers_app_shell";

            constructor() {
                super();
                this.id = DemoShellApp.APPLICATION_ID;
                this.name = DemoShellApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                let app: SalesOrderListApp = new SalesOrderListApp();
                app.viewShower = this;
                app.navigation = this.navigation;
                app.run();
            }
        }
        /** 视图-壳 */
        export interface IDemoShellView extends shell.app.IShellView {
        }
    }
}