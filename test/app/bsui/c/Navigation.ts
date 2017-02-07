/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ViewNavigation, IView,
    MainApp, LoginApp, CenterApp, AboutApp, HelpApp
} from "../../../../ibas/bsbas/bsbas";
import { MainView } from "./centers/MainView";
import { LoginView } from "./centers/LoginView";

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

                break;
            case AboutApp.APPLICATION_ID:

                break;
            case HelpApp.APPLICATION_ID:

                break;
            default:
                break;
        }
        return view;
    }
}