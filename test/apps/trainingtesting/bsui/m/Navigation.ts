/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../../../ibas/index.d.ts" />
/// <reference path="../../index.d.ts" />
/// <reference path="./material/index.ts" />
/// <reference path="./customer/index.ts" />
/// <reference path="./salesorder/index.ts" />

namespace trainingtesting {
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
                        case app.MaterialListApp.APPLICATION_ID:
                            view = new MaterialListView();
                            break;
                        case app.MaterialChooseApp.APPLICATION_ID:
                            view = new MaterialChooseView();
                            break;
                        case app.MaterialEditApp.APPLICATION_ID:
                            view = new MaterialEditView();
                            break;
                        case app.CustomerListApp.APPLICATION_ID:
                            view = new CustomerListView();
                            break;
                        case app.CustomerChooseApp.APPLICATION_ID:
                            view = new CustomerChooseView();
                            break;
                        case app.CustomerEditApp.APPLICATION_ID:
                            view = new CustomerEditView();
                            break;
                        case app.SalesOrderListApp.APPLICATION_ID:
                            view = new SalesOrderListView();
                            break;
                        case app.SalesOrderChooseApp.APPLICATION_ID:
                            view = new SalesOrderChooseView();
                            break;
                        case app.SalesOrderEditApp.APPLICATION_ID:
                            view = new SalesOrderEditView();
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
