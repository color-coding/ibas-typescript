/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ViewNavigation, IView,
} from "../../../../../ibas/bsbas/bsbas";
import { DemoApp } from "../../bsapp/demo/DemoApp";
import { DemoView } from "./demo/DemoView";
import { DemoUrlApp } from "../../bsapp/demo/DemoUrlApp";
import { DemoUrlView } from "./demo/DemoUrlView";

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
            case DemoApp.APPLICATION_ID:
                view = new DemoView();
                break;
            case DemoUrlApp.APPLICATION_ID:
                view = new DemoUrlView();
                break;
            default:
                break;
        }
        return view;
    }
}