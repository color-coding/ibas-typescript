/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as app from "../../bsapp/centers/index";
import * as ui from "./centers/index";

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
            case app.MainApp.APPLICATION_ID:
                view = new ui.MainView();
                break;
            case app.LoginApp.APPLICATION_ID:
                view = new ui.BigLoginView();
                break;
            case app.CenterApp.APPLICATION_ID:
                view = new ui.CenterView();
                break;
            case app.AboutApp.APPLICATION_ID:
                view = new ui.AboutView();
                break;
            case app.HelpApp.APPLICATION_ID:
                view = new ui.HelpView();
                break;
            case app.QueryPanel.APPLICATION_ID:
                view = new ui.QueryPanelView();
                break;
            default:
                break;
        }
        return view;
    }
}