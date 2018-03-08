/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 配置项目-帮助地址 */
        export const CONFIG_ITEM_HELP_URL: string = "helpUrl";
        /** 配置项目-内部浏览帮助 */
        export const CONFIG_ITEM_HELP_INSIDE: string = "helpInside";
        /**
         * 应用-帮助
         */
        export class HelpApp extends ibas.Application<IHelpView>  {
            /** 应用标识 */
            static APPLICATION_ID: string = "ac17a471-01f2-455f-9193-ddbfcaf81c0f";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_help";

            constructor() {
                super();
                this.id = HelpApp.APPLICATION_ID;
                this.name = HelpApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                //
            }
            /** 运行 */
            run(): void {
                this.view.url = ibas.config.get(CONFIG_ITEM_HELP_URL);
                this.view.isInside = ibas.config.get(CONFIG_ITEM_HELP_INSIDE, true);
                super.run.apply(this, arguments);
            }

        }
        /** 视图-帮助 */
        export interface IHelpView extends ibas.IUrlView {

        }
    }
}