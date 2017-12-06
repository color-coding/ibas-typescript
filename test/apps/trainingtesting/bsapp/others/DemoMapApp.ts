/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";

/** 地图-演示 */
export class DemoMapApp extends ibas.Application<IDemoMapView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "c77a3baf-aa38-4875-a528-0c2eeab4a5ff";
    /** 应用名称 */
    static APPLICATION_NAME: string = "trainingtestingothers_app_map";

    constructor() {
        super();
        this.id = DemoMapApp.APPLICATION_ID;
        this.name = DemoMapApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        //
        this.view.closeEvent = this.close;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        //
    }
    /** 运行 */
    run(...args: any[]): void {
        super.run.apply(this, args);
    }
}
/** 视图-地图演示 */
export interface IDemoMapView extends ibas.IView {
}