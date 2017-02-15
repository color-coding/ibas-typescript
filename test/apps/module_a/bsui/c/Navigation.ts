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
            default:
                break;
        }
        return view;
    }
}