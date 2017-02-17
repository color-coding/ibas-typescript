/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ViewNavigation, IView,
} from "../../../../ibas/bsbas/index";
import {
    MainApp, LoginApp, CenterApp, AboutApp, HelpApp
} from "../../../../ibas/bsbas/systems/index";
import { MainView, LoginView, CenterView, AboutView, HelpView } from "./centers/index";

/** 导出视图显示 */
export { ViewShowerDefault as ViewShower } from "../ViewShowers";
/**
 * 视图导航
 */
export class Navigation extends ViewNavigation {

    /** 
     * 创建实例     
     * @param id 应用id
     */
    protected newView(id: string): IView {
        let view: IView = null;
        switch (id) {
            case MainApp.APPLICATION_ID:
                view = new MainView();
                break;
            case LoginApp.APPLICATION_ID:
                view = new LoginView();
                break;
            case CenterApp.APPLICATION_ID:
                view = new CenterView();
                break;
            case AboutApp.APPLICATION_ID:
                view = new AboutView();
                break;
            case HelpApp.APPLICATION_ID:
                view = new HelpView();
                break;
            default:
                break;
        }
        return view;
    }
}