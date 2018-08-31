/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        /** 应用-演示 */
        export class DemoUrlApp extends ibas.Application<IDemoUrlView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "12dd3006-7055-409b-9fc5-8b4434b1c781";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtestingothers_app_url";

            constructor() {
                super();
                this.id = DemoUrlApp.APPLICATION_ID;
                this.name = DemoUrlApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                //
                this.view.closeEvent = this.close;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
            }
            static INSIDE_OPENED: boolean = true;
            /** 运行 */
            run(): void {
                DemoUrlApp.INSIDE_OPENED = !DemoUrlApp.INSIDE_OPENED;
                this.view.url = "http://www.bing.com";
                this.view.isInside = DemoUrlApp.INSIDE_OPENED;
                super.run.apply(this, arguments);
            }
        }
        /** 视图-演示 */
        export interface IDemoUrlView extends ibas.IUrlView {
        }
        /** 应用-演示 */
        export class DemoTabUrlApp extends DemoUrlApp {

            /** 应用标识 */
            static APPLICATION_ID: string = "c4be3c42-4b4c-45dc-8d38-d47e2ab2b35d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtestingothers_app_tab";

            constructor() {
                super();
                this.id = DemoTabUrlApp.APPLICATION_ID;
                this.name = DemoTabUrlApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
        }
    }
}