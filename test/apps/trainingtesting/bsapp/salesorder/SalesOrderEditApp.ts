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
        this.view.createDataEvent = this.createData;
        this.view.addSalesOrderItemEvent = this.addSalesOrderItem;
        this.view.removeSalesOrderItemEvent = this.removeSalesOrderItem;
        this.view.chooseSalesOrderCustomerEvent = this.chooseSalesOrderCustomer;
        this.view.chooseSalesOrderItemMaterialEvent = this.chooseSalesOrderItemMaterial;
        this.view.chooseSalesOrderItemWarehouseEvent=this.chooseSalesOrderItemWarehouseEvent;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.editData)) {
            // 创建编辑对象实例
            this.editData = new bo.SalesOrder();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showSalesOrder(this.editData);
        this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.SalesOrder)) {
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = arguments[0].criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryTrainingTesting = new BORepositoryTrainingTesting();
                boRepository.fetchSalesOrder({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.SalesOrder>): void {
                        let data: bo.SalesOrder;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.SalesOrder)) {
                            // 查询到了有效数据
                            that.editData = data;
                            that.show();
                        } else {
                            // 数据重新检索无效
                            that.messages({
                                type: ibas.emMessageType.WARNING,
                                message: ibas.i18n.prop("sys_shell_data_deleted_and_created"),
                                onCompleted(): void {
                                    that.show();
                                }
                            });
                        }
                    }
                });
                // 开始查询数据
                return;
            }
        }
        super.run();
    }
    /** 待编辑的数据 */
    protected editData: bo.SalesOrder;
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
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
                        // 删除成功，释放当前对象
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_delete") + ibas.i18n.prop("sys_shell_sucessful"));
                        that.editData = undefined;
                    } else {
                        // 替换编辑对象
                        that.editData = opRslt.resultObjects.firstOrDefault();
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_save") + ibas.i18n.prop("sys_shell_sucessful"));
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
    }
    /** 删除数据 */
    protected deleteData(): void {
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    that.editData.delete();
                    that.saveData();
                }
            }
        });
    }
    /** 新建数据，参数1：是否克隆 */
    protected createData(clone: boolean): void {
        let that: this = this;
        let createData: Function = function (): void {
            if (clone) {
                // 克隆对象
                that.editData = that.editData.clone();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_cloned_new"));
                that.viewShowed();
            } else {
                // 新建对象
                that.editData = new bo.SalesOrder();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
                that.viewShowed();
            }
        };
        if (that.editData.isDirty) {
            this.messages({
                type: ibas.emMessageType.QUESTION,
                title: ibas.i18n.prop(this.name),
                message: ibas.i18n.prop("sys_data_not_saved_whether_to_continue"),
                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                onCompleted(action: ibas.emMessageAction): void {
                    if (action === ibas.emMessageAction.YES) {
                        createData();
                    }
                }
            });
        } else {
            createData();
        }
    }
    /** 添加销售订单-行事件 */
    addSalesOrderItem(): void {
        this.editData.salesOrderItems.create();
        this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
    }
    /** 删除销售订单-行事件 */
    removeSalesOrderItem(items: bo.SalesOrderItem[]): void {
        // 非数组，转为数组
        if (!(items instanceof Array)) {
            items = [items];
        }
        if (items.length === 0) {
            return;
        }
        // 移除项目
        for (let item of items) {
            if (this.editData.salesOrderItems.indexOf(item) >= 0) {
                if (item.isNew) {
                    // 新建的移除集合
                    this.editData.salesOrderItems.remove(item);
                } else {
                    // 非新建标记删除
                    item.delete();
                }
            }
        }
        // 仅显示没有标记删除的
        this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
    }

    /** 选择销售订单客户事件 */
    chooseSalesOrderCustomer(): void {
        let that: this = this;
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
        let that: this = this;
        ibas.servicesManager.runChooseService<bo.Material>({
            caller: caller,
            boCode: bo.Material.BUSINESS_OBJECT_CODE,
            criteria: [
                new ibas.Condition(bo.Material.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
            ],
            onCompleted(selecteds: ibas.List<bo.Material>): void {
                // 获取触发的对象
                let index: number = that.editData.salesOrderItems.indexOf(caller);
                let item: bo.SalesOrderItem = that.editData.salesOrderItems[index];
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
    /** 选择销售订单行仓库事件 */
    chooseSalesOrderItemWarehouseEvent(caller: bo.SalesOrderItem): void {
        let that: this = this;
        ibas.servicesManager.runChooseService<bo.Warehouse>({
            caller: caller,
            boCode: bo.Warehouse.BUSINESS_OBJECT_CODE,
            criteria: [
                new ibas.Condition(bo.Warehouse.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
            ],
            onCompleted(selecteds: ibas.List<bo.Warehouse>): void {
                // 获取触发的对象
                let index: number = that.editData.salesOrderItems.indexOf(caller);
                let item: bo.SalesOrderItem = that.editData.salesOrderItems[index];
                // 选择返回数量多余触发数量时,自动创建新的项目
                let created: boolean = false;
                for (let selected of selecteds) {
                    if (ibas.objects.isNull(item)) {
                        item = that.editData.salesOrderItems.create();
                        created = true;
                    }
                    item.warehouse = selected.code;
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
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
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
    /** 选择销售订单行仓库事件 */
    chooseSalesOrderItemWarehouseEvent: Function;
}
