/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="./material/index.ts" />
/// <reference path="./customer/index.ts" />
/// <reference path="./salesorder/index.ts" />
/// <reference path="./others/index.ts" />

namespace trainingtesting {
    export namespace ui {
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
                        view = new m.MaterialListView();
                        break;
                    case app.MaterialChooseApp.APPLICATION_ID:
                        view = new m.MaterialChooseView();
                        break;
                    case app.MaterialEditApp.APPLICATION_ID:
                        view = new m.MaterialEditView();
                        break;
                    case app.CustomerListApp.APPLICATION_ID:
                        view = new m.CustomerListView();
                        break;
                    case app.CustomerChooseApp.APPLICATION_ID:
                        view = new m.CustomerChooseView();
                        break;
                    case app.CustomerEditApp.APPLICATION_ID:
                        view = new m.CustomerEditView();
                        break;
                    case app.SalesOrderListApp.APPLICATION_ID:
                        view = new m.SalesOrderListView();
                        break;
                    case app.SalesOrderChooseApp.APPLICATION_ID:
                        view = new m.SalesOrderChooseView();
                        break;
                    case app.SalesOrderEditApp.APPLICATION_ID:
                        view = new m.SalesOrderEditView();
                        break;
                    case app.DemoResidentApp.APPLICATION_ID:
                        view = new m.DemoResidentView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
