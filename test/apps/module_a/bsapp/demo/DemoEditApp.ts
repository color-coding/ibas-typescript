/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BOEditApplication, IBOEditView, emMessageType, ICriteria, i18n, IOperationResult, object
} from "../../../../../ibas/bsbas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import { SalesOrder, SalesOrderItem, SalesOrderItems } from "../../borep/bo/index";
import { DemoChooseApp } from "./DemoChooseApp";


/** 应用-演示 */
export class DemoEditApp extends BOEditApplication<IDemoEditView, SalesOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "b77d974d-57a0-4373-884e-b1ec43471c5a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_edit";

    constructor() {
        super();
        this.id = DemoEditApp.APPLICATION_ID;
        this.name = DemoEditApp.APPLICATION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.chooseSalesOrderEvent = this.chooseSalesOrder;
        this.view.chooseSalesOrderItemEvent = this.chooseSalesOrderItem;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        this.view.showSalesOrder(this.editData);
        this.view.showSalesOrderItems(this.editData.items);
    }
    /** 待编辑的数据 */
    protected editData: SalesOrder;
    /** 保存数据 */
    protected saveData(): void {
        this.messages(emMessageType.SUCCESS, i18n.prop("sys_shell_ui_sucessful"));
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let data: SalesOrder = arguments[0];
        if (object.isNull(data)) {
            data = new SalesOrder();
        }
        this.editData = data;
        super.run();
    }
    /** 选择销售订单事件 */
    chooseSalesOrder(): void {
        let app = new DemoChooseApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
    /** 选择销售订单行事件 */
    chooseSalesOrderItem(): void {

    }
}
/** 视图-演示 */
export interface IDemoEditView extends IBOEditView {
    /** 选择销售订单事件 */
    chooseSalesOrderEvent: Function;
    /** 选择销售订单行事件 */
    chooseSalesOrderItemEvent: Function;
    /** 显示数据 */
    showSalesOrder(data: SalesOrder): void;
    /** 显示数据 */
    showSalesOrderItems(datas: SalesOrderItem[]): void;
}