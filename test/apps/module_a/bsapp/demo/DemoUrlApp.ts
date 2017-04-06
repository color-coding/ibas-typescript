/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";

/** 应用-演示 */
export class DemoUrlApp extends ibas.BOApplication<IDemoUrlView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "12dd3006-7055-409b-9fc5-8b4434b1c781";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_url";

    constructor() {
        super();
        this.id = DemoUrlApp.APPLICATION_ID;
        this.name = DemoUrlApp.APPLICATION_NAME;
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
    run(): void {
        this.view.url = "http://csp.b1plus.cn/web/csp/index.html";
        this.view.isInside = true;
        super.run();
    }
}
/** 视图-演示 */
export interface IDemoUrlView extends ibas.IUrlView {
}