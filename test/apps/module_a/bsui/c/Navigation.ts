/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ViewNavigation, IView,
} from "../../../../../ibas/bsbas/index";
import * as app from "../../bsapp/demo/index";
import * as ui from "./demo/index";

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
            case app.DemoUrlApp.APPLICATION_ID:
                view = new ui.DemoUrlView();
                break;
            case app.DemoListApp.APPLICATION_ID:
                view = new ui.DemoListView();
                break;
            case app.DemoChooseApp.APPLICATION_ID:
                view = new ui.DemoChooseView();
                break;
            case app.DemoViewApp.APPLICATION_ID:
                view = new ui.DemoViewView();
                break;
            case app.DemoEditApp.APPLICATION_ID:
                view = new ui.DemoEditView();
                break;
            default:
                break;
        }
        return view;
    }
}