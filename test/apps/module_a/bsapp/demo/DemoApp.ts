/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BOApplication, IView
} from "../../../../../ibas/bsbas/bsbas";

/** 应用-演示 */
export class DemoApp extends BOApplication<IDemoView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "f873e18d-b9ca-476b-b300-b177c194d41a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo";

    constructor() {
        super();
        this.id = DemoApp.APPLICATION_ID;
        this.name = DemoApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        //
        this.view.destroyEvent = this.destroy;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        //
        this.busy(true,"ding!");
    }
}
/** 视图-演示 */
export interface IDemoView extends IView {
}