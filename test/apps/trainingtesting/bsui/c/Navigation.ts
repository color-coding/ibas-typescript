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
                        view = new c.MaterialListView();
                        break;
                    case app.MaterialChooseApp.APPLICATION_ID:
                        view = new c.MaterialChooseView();
                        break;
                    case app.MaterialViewApp.APPLICATION_ID:
                        view = new c.MaterialViewView();
                        break;
                    case app.MaterialEditApp.APPLICATION_ID:
                        view = new c.MaterialEditView();
                        break;
                    case app.CustomerListApp.APPLICATION_ID:
                        view = new c.CustomerListView();
                        break;
                    case app.CustomerChooseApp.APPLICATION_ID:
                        view = new c.CustomerChooseView();
                        break;
                    case app.CustomerViewApp.APPLICATION_ID:
                        view = new c.CustomerViewView();
                        break;
                    case app.CustomerEditApp.APPLICATION_ID:
                        view = new c.CustomerEditView();
                        break;
                    case app.SalesOrderListApp.APPLICATION_ID:
                        view = new c.SalesOrderListView();
                        break;
                    case app.SalesOrderChooseApp.APPLICATION_ID:
                        view = new c.SalesOrderChooseView();
                        break;
                    case app.SalesOrderViewApp.APPLICATION_ID:
                        view = new c.SalesOrderViewView();
                        break;
                    case app.SalesOrderEditApp.APPLICATION_ID:
                        view = new c.SalesOrderEditView();
                        break;
                    case app.DemoResidentApp.APPLICATION_ID:
                        view = new c.DemoResidentView();
                        break;
                    case app.DemoTabUrlApp.APPLICATION_ID:
                        view = new c.DemoTabUrlView();
                        break;
                    case app.DemoUrlApp.APPLICATION_ID:
                        view = new c.DemoUrlView();
                        break;
                    case app.DemoService.APPLICATION_ID:
                        view = new c.DemoServiceView();
                        break;
                    case app.DemoMapApp.APPLICATION_ID:
                        view = new c.DemoMapView();
                        break;
                    case app.DemoShellApp.APPLICATION_ID:
                        view = new c.DemoShellView();
                        break;
                    case app.DemoDataApp.APPLICATION_ID:
                        view = new c.DemoDataView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
