/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import * as  bo from "../../borep/bo/index";

/** 应用-演示 */
export class DemoEditApp extends ibas.BOEditApplication<IDemoEditView, bo.SalesOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "b77d974d-57a0-4373-884e-b1ec43471c5a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_edit";

    constructor() {
        super();
        this.id = DemoEditApp.APPLICATION_ID;
        this.name = DemoEditApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.boCode = "DEMO";
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.chooseSalesOrderEvent = this.chooseSalesOrder;
        this.view.chooseSalesOrderItemEvent = this.chooseSalesOrderItem;
        this.view.addSalesOrderItemEvent = this.addSalesOrderItem;
        this.view.removeSalesOrderItemEvent = this.removeSalesOrderItem;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        this.view.showSalesOrder(this.editData);
        this.view.showSalesOrderItems(this.editData.items);
    }
    /** 待编辑的数据 */
    protected editData: bo.SalesOrder;
    /** 保存数据 */
    protected saveData(): void {
        try {
            let that = this;
            let boRepository: BORepositoryDemo = new BORepositoryDemo();
            boRepository.saveSalesOrder({
                beSaved: this.editData,
                onCompleted(opRslt: ibas.IOperationResult<bo.SalesOrder>): void {
                    try {
                        that.busy(false);
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        if (opRslt.resultObjects.length === 0) {
                            this.messages(ibas.emMessageType.SUCCESS, "{0}{1}",
                                ibas.i18n.prop("sys_shell_ui_data_delete"),
                                ibas.i18n.prop("sys_shell_ui_sucessful"));
                        } else {
                            this.messages(ibas.emMessageType.SUCCESS, "{0}{1}",
                                ibas.i18n.prop("sys_shell_ui_data_save"),
                                ibas.i18n.prop("sys_shell_ui_sucessful"));
                        }
                    } catch (error) {
                        that.messages(error);
                    }
                }
            });
            this.busy(true);
            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_saving_data"));
        } catch (error) {
            this.messages(error);
        }
    }

    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let data: bo.SalesOrder = arguments[0];
        if (ibas.object.isNull(data)) {
            data = new bo.SalesOrder();
            data.docEntry = 100;
            data.customer = "C00001";
            data.canceled = ibas.emYesNo.YES;
            let item = data.items.create();
            item.itemCode = "A00001";
        }
        this.editData = data;
        super.run();
    }
    /** 选择销售订单事件 */
    chooseSalesOrder(): void {
        let that = this;
        ibas.servicesManager.runChooseService<bo.SalesOrder>({
            boCode: bo.SalesOrder.name,
            criteria: [
                new ibas.Condition("customer", ibas.emConditionOperation.START, "A0001")
            ],
            onCompleted(selecteds: ibas.List<bo.SalesOrder>): void {
                that.editData.customer = selecteds.firstOrDefault().customer;
            }
        });
    }
    /** 选择销售订单行事件 */
    chooseSalesOrderItem(caller: bo.SalesOrderItem): void {
        let that = this;
        ibas.servicesManager.runChooseService<bo.SalesOrder>({
            caller: caller,
            boCode: bo.SalesOrder.name,
            criteria: [
                new ibas.Condition("customer", ibas.emConditionOperation.START, "A0001")
            ],
            onCompleted(selecteds: ibas.List<bo.SalesOrder>): void {
                // 获取触发的对象
                let index = that.editData.items.indexOf(this.caller);
                let item = that.editData.items[index];
                // 选择返回数量多余触发数量时,自动创建新的项目
                for (let selected of selecteds) {
                    if (ibas.object.isNull(item)) {
                        item = that.editData.items.create();
                    }
                    item.itemCode = selected.customer;
                }
            }
        });

    }
    /** 添加销售订单事件 */
    addSalesOrderItem(): void {
        this.editData.items.create();
        this.view.showSalesOrderItems(this.editData.items);
    }
    /** 删除销售订单行事件 */
    removeSalesOrderItem(item: bo.SalesOrderItem): void {
        if (this.editData.items.indexOf(item) >= 0) {
            this.editData.items.remove(item);
            this.view.showSalesOrderItems(this.editData.items);
        }
    }
}
/** 视图-演示 */
export interface IDemoEditView extends ibas.IBOEditView {
    /** 添加销售订单事件 */
    addSalesOrderItemEvent: Function;
    /** 删除销售订单行事件 */
    removeSalesOrderItemEvent: Function;
    /** 选择销售订单事件 */
    chooseSalesOrderEvent: Function;
    /** 选择销售订单行事件 */
    chooseSalesOrderItemEvent: Function;
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void;
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
}