/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 配置项目-欢迎内容 */
        export const CONFIG_ITEM_WELCOME_CONTENT: string = "welcomeContent";
        /**
         * 欢迎应用
         */
        export class WelcomeApp extends ibas.Application<IWelcomeView>  {
            /** 应用标识 */
            static APPLICATION_ID: string = "e868ea10-7985-45a7-839e-32b903bd374a";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_welcome";

            constructor() {
                super();
                this.id = WelcomeApp.APPLICATION_ID;
                this.name = WelcomeApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                let content: string = ibas.config.get(CONFIG_ITEM_WELCOME_CONTENT);
                if (!ibas.strings.isEmpty(content)) {
                    this.view.showContent(content);
                } else {
                    this.view.showContent("");
                }
            }
        }
        /** 视图-欢迎 */
        export interface IWelcomeView extends ibas.IView {
            /** 显示内容 */
            showContent(content: string): void;
        }
    }
}