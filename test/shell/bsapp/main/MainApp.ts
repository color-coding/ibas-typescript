/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /**
         * 应用-系统入口
         */
        export class MainApp extends ibas.Application<IMainView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "896b4474-6d1c-4361-a17c-e5494e7e5d21";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_main";
            constructor() {
                super();
                this.id = MainApp.APPLICATION_ID;
                this.name = MainApp.APPLICATION_NAME;
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                let app: TestBoardApp = new TestBoardApp();
                app.viewShower = this.viewShower;
                app.navigation = this.navigation;
                app.run();
            }
        }
        /** 视图-系统入口 */
        export interface IMainView extends ibas.IView {

        }
    }
}