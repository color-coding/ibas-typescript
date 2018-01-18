/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as salesorderApps from "../../bsapp/salesorder/index";
import * as salesorderViews from "./salesorder/index";
import * as materialApps from "../../bsapp/material/index";
import * as materialViews from "./material/index";
import * as customerApps from "../../bsapp/customer/index";
import * as customerViews from "./customer/index";
import * as othersApps from "../../bsapp/others/index";
import * as othersViews from "./others/index";

/**
 * 视图导航
 */
export default class Navigation extends ibas.ViewNavigation {

    /**
     * 创建实例
     * @param id 应用id
     */
    protected newView(id: string): ibas.IView {
        let view: ibas.IView = null;
        switch (id) {
            case materialApps.MaterialListApp.APPLICATION_ID:
                view = new materialViews.MaterialListView();
                break;
            case customerApps.CustomerListApp.APPLICATION_ID:
                view = new customerViews.CustomerListView();
                break;
            case customerApps.CustomerChooseApp.APPLICATION_ID:
                view = new customerViews.CustomerChooseView();
                break;
            case salesorderApps.SalesOrderListApp.APPLICATION_ID:
                view = new salesorderViews.SalesOrderListView();
                break;
            case salesorderApps.SalesOrderEditApp.APPLICATION_ID:
                view = new salesorderViews.SalesOrderEditView();
                break;
            case othersApps.DemoResidentApp.APPLICATION_ID:
                view = new othersViews.DemoResidentView();
                break;
            default:
                break;
        }
        return view;
    }
}
