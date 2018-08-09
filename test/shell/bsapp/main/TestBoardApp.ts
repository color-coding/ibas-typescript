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
         * 应用-测试台
         */
        export class TestBoardApp extends ibas.Application<IMainView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "a04dda95-9f1e-44dd-9efb-cfecbf42cac6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_testboard";
            constructor() {
                super();
                this.id = TestBoardApp.APPLICATION_ID;
                this.name = TestBoardApp.APPLICATION_NAME;
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
            }

        }
        /** 视图-测试台 */
        export interface ITestBoardView extends ibas.IView {

        }
    }
}