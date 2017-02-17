/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BOListApplication, IBOListView, emMessageType, ICriteria, i18n, IOperationResult
} from "../../../../../ibas/bsbas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import { SalesOrder, SalesOrderItem, SalesOrderItems } from "../../borep/bo/index";

/** 应用-演示 */
export class DemoListApp extends BOListApplication<IDemoListView, SalesOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "f873e18d-b9ca-476b-b300-b177c194d41a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_list";

    constructor() {
        super();
        this.id = DemoListApp.APPLICATION_ID;
        this.name = DemoListApp.APPLICATION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.viewData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ICriteria): void {
        this.busy(true);
        let that = this;
        let boRep = new BORepositoryDemo();
        boRep.fetchSalesOrder(criteria, function (opRslt: IOperationResult<SalesOrder>): void {
            try {
                if (opRslt.resultCode !== 0) {
                    throw new Error(opRslt.message);
                }
                that.view.showData(opRslt.resultObjects);
                that.busy(false);
            } catch (error) {
                that.messages(error);
            }
        });
        this.proceeding(emMessageType.INFORMATION, i18n.prop("sys_shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {

    }
    /** 查看数据，参数：目标数据 */
    protected viewData(data: SalesOrder): void {

    }
    /** 编辑数据，参数：目标数据 */
    protected editData(data: SalesOrder): void {
        this.messages(emMessageType.ERROR, i18n.prop("module_a_ui_no_edit"));
    }
}
/** 视图-演示 */
export interface IDemoListView extends IBOListView {
    /** 编辑数据事件，参数：编辑对象 */
    editDataEvent: Function;
    /** 显示数据 */
    showData(datas: SalesOrder[]): void;
}