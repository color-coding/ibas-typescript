/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        export namespace c {
            /**
             * 视图-入口
             */
            export class MainView extends ibas.BOView implements app.IMainView {
                /** 绘制视图 */
                draw(): any {
                    this.app = new sap.m.App("ibas-app");
                    this.id = this.app.getId();
                    return this.app;
                }
                private app: sap.m.App;
            }
        }
    }
}