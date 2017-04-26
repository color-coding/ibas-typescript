/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryTrainingTesting } from "../../borep/BORepositories";

/** 应用-销售订单 */
export class SalesOrderEditApp extends ibas.BOEditApplication<ISalesOrderEditView, bo.SalesOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "30e2a01d-7706-472b-aad1-1b862f82c89a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "trainingtesting_app_salesorder_edit";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.SalesOrder.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = SalesOrderEditApp.APPLICATION_ID;
        this.name = SalesOrderEditApp.APPLICATION_NAME;
        this.boCode = SalesOrderEditApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.deleteDataEvent = this.deleteData;
        this.view.addSalesOrderItemEvent = this.addSalesOrderItem;
        this.view.removeSalesOrderItemEvent = this.removeSalesOrderItem;
        this.view.chooseSalesOrderCustomerEvent = this.chooseSalesOrderCustomer;
        this.view.chooseSalesOrderItemMaterialEvent = this.chooseSalesOrderItemMaterial;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        this.view.showSalesOrder(this.editData);
        this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        // 尝试设置编辑对象
        if (!ibas.objects.isNull(args) && args.length === 1 && ibas.objects.instanceOf(args[0], bo.SalesOrder)) {
            this.editData = args[0];
        }
        // 创建编辑对象实例
        if (ibas.objects.isNull(this.editData)) {
            this.editData = new bo.SalesOrder();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_ui_data_created_new"));

        }
        super.run();
    }
    /** 待编辑的数据 */
    protected editData: bo.SalesOrder;
    /** 保存数据 */
    protected saveData(): void {
        try {
            let that = this;
            let boRepository: BORepositoryTrainingTesting = new BORepositoryTrainingTesting();
            boRepository.saveSalesOrder({
                beSaved: this.editData,
                onCompleted(opRslt: ibas.IOperationResult<bo.SalesOrder>): void {
                    try {
                        that.busy(false);
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        if (opRslt.resultObjects.length === 0) {
                            that.messages(ibas.emMessageType.SUCCESS,
                                ibas.i18n.prop("sys_shell_ui_data_delete") + ibas.i18n.prop("sys_shell_ui_sucessful"));
                            // 创建新的对象
                            that.editData = new bo.SalesOrder();
                        } else {
                            // 替换编辑对象
                            that.editData = opRslt.resultObjects.firstOrDefault();
                            that.messages(ibas.emMessageType.SUCCESS,
                                ibas.i18n.prop("sys_shell_ui_data_save") + ibas.i18n.prop("sys_shell_ui_sucessful"));
                        }
                        // 刷新当前视图
                        that.viewShowed();
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
    /** 删除数据 */
    protected deleteData(): void {
        let that = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("msg_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    that.editData.delete();
                    that.saveData();
                }
            }
        });
    }
    /** 添加销售订单-行事件 */
    addSalesOrderItem(): void {
        this.editData.salesOrderItems.create();
        this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
    }
    /** 删除销售订单-行事件 */
    removeSalesOrderItem(item: bo.SalesOrderItem): void {
        if (this.editData.salesOrderItems.indexOf(item) >= 0) {
            this.editData.salesOrderItems.remove(item);
            this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
        }
    }

    /** 选择销售订单客户事件 */
    chooseSalesOrderCustomer(): void {
        let that = this;
        ibas.servicesManager.runChooseService<bo.Customer>({
            boCode: bo.Customer.BUSINESS_OBJECT_CODE,
            criteria: [
                new ibas.Condition(bo.Customer.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
            ],
            onCompleted(selecteds: ibas.List<bo.Customer>): void {
                that.editData.customerCode = selecteds.firstOrDefault().code;
                that.editData.customerName = selecteds.firstOrDefault().name;
            }
        });
    }
    /** 选择销售订单行物料事件 */
    chooseSalesOrderItemMaterial(caller: bo.SalesOrderItem): void {
        let that = this;
        ibas.servicesManager.runChooseService<bo.Material>({
            caller: caller,
            boCode: bo.Material.BUSINESS_OBJECT_CODE,
            criteria: [
                new ibas.Condition(bo.Material.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
            ],
            onCompleted(selecteds: ibas.List<bo.Material>): void {
                // 获取触发的对象
                let index: number = that.editData.salesOrderItems.indexOf(caller);
                let item = that.editData.salesOrderItems[index];
                // 选择返回数量多余触发数量时,自动创建新的项目
                let created: boolean = false;
                for (let selected of selecteds) {
                    if (ibas.objects.isNull(item)) {
                        item = that.editData.salesOrderItems.create();
                        created = true;
                    }
                    item.itemCode = selected.code;
                    item.itemDescription = selected.name;
                    item = null;
                }
                if (created) {
                    // 创建了新的行项目
                    that.view.showSalesOrderItems(that.editData.salesOrderItems.filterDeleted());
                }
            }
        });

    }
}
/** 视图-销售订单 */
export interface ISalesOrderEditView extends ibas.IBOEditView {
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 添加销售订单-行事件 */
    addSalesOrderItemEvent: Function;
    /** 删除销售订单-行事件 */
    removeSalesOrderItemEvent: Function;
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
    /** 选择销售订单客户事件 */
    chooseSalesOrderCustomerEvent: Function;
    /** 选择销售订单行物料事件 */
    chooseSalesOrderItemMaterialEvent: Function;
}
