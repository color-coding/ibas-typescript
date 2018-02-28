/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../ibas/index.d.ts" />
/// <reference path="../../index.d.ts" />
/// <reference path="./center/index.ts" />

namespace shell {
    export namespace ui {
        export namespace m {
            /**
             * 视图导航
             */
            export class Navigation extends ibas.ViewNavigation {
                /**
                 * 创建实例
                 * @param id 应用id
                 */
                protected newView(id: string): ibas.IView {
                    let view: ibas.IView = null;
                    switch (id) {
                        case app.MainApp.APPLICATION_ID:
                            view = new MainView();
                            break;
                        case app.LoginApp.APPLICATION_ID:
                            view = new LoginView();
                            break;
                        case app.CenterApp.APPLICATION_ID:
                            view = new CenterView();
                            break;
                        case app.AboutApp.APPLICATION_ID:
                            view = new AboutView();
                            break;
                        case app.HelpApp.APPLICATION_ID:
                            view = new HelpView();
                            break;
                        case app.QueryPanel.APPLICATION_ID:
                            view = new QueryPanelView();
                            break;
                        default:
                            break;
                    }
                    return view;
                }
            }
        }
    }
}