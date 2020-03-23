/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        /** 应用-控件示例 */
        export class DemoControlsApp extends ibas.Application<IDemoControlsView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "b1b9d504-21a5-480a-8537-4ca975f794fa";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtestingothers_app_controls";

            constructor() {
                super();
                this.id = DemoControlsApp.APPLICATION_ID;
                this.name = DemoControlsApp.APPLICATION_NAME;
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
            /** 运行 */
            run(): void {
                super.run.apply(this, arguments);
            }
        }
        /** 视图-控件示例 */
        export interface IDemoControlsView extends ibas.IView {
        }
    }
}