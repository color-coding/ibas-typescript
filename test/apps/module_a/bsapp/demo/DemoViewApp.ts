/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../../ibas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import * as  bo from "../../borep/bo/index";

/** 查看应用-演示 */
export class DemoViewApp extends ibas.BOViewApplication<IDemoViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "a16e23d8-5783-428a-98e4-4a622282f366";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_view";

    constructor() {
        super();
        this.id = DemoViewApp.APPLICATION_ID;
        this.name = DemoViewApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        this.view.showSalesOrder(this.viewData);
        this.view.showSalesOrderItems(this.viewData.items);
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app = new DemoViewApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
    protected viewData: bo.SalesOrder;
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let data: bo.SalesOrder = arguments[0];
        if (ibas.object.isNull(data)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "view data"));
        }
        this.viewData = data;
        super.run();
    }
}
/** 视图-演示 */
export interface IDemoViewView extends ibas.IBOViewView {
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void;
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
}