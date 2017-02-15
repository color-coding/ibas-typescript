/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ModuleFunction, IApplication, IView, IViewShower } from "../../../../ibas/bsbas/bsbas";
import { MainApp } from "./MainApp";

/** 功能-系统中心 */
export class CentersFunc extends ModuleFunction {
    constructor(viewShower: IViewShower) {
        super();
        this.viewShower = viewShower;
    }
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 默认功能 */
    default(): IApplication<IView> {
        let app: MainApp = new MainApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        return app;
    }
}
