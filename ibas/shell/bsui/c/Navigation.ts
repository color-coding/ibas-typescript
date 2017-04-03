/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "../../../bsbas/systems/index";
import * as ibas from "../../../index";
import * as app from "../../bsapp/centers/index";
import * as ui from "./centers/index";

/** 导出视图显示 */
export { ViewShowerDefault as ViewShower } from "../ViewShowers";
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
                view = new ui.MainView();
                break;
            case app.LoginApp.APPLICATION_ID:
                view = new ui.LoginView();
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
            case app.SuggestionApp.APPLICATION_ID:
                view = new ui.SuggestionView();
                break;
            default:
                break;
        }
        return view;
    }
}