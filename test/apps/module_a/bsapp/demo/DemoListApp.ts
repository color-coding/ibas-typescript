/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BOListApplication, IBOListView, emMessageType, ICriteria, i18n
} from "../../../../../ibas/bsbas/index";

/** 应用-演示 */
export class DemoListApp extends BOListApplication<IDemoListView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "f873e18d-b9ca-476b-b300-b177c194d41a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_list";

    constructor() {
        super();
        this.id = DemoListApp.APPLICATION_ID;
        this.name = DemoListApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件

    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ICriteria): void {
        this.busy(true);
        this.messages(emMessageType.INFORMATION, i18n.prop("sys_shell_fetching_data"));

    }
}
/** 视图-演示 */
export interface IDemoListView extends IBOListView {
    /** 显示数据 */
    showData(datas: any[]): void;
}