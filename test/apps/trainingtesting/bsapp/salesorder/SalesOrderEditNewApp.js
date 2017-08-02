define(["require", "exports", "ibas/index", "../../borep/bo/index", "../../borep/BORepositories", "ibas/index"], function (require, exports, ibas, bo, BORepositories_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SalesOrderEditNewApp extends ibas.BOEditApplication {
        constructor() {
            super();
            this.id = SalesOrderEditNewApp.APPLICATION_ID;
            this.name = SalesOrderEditNewApp.APPLICATION_NAME;
            this.boCode = SalesOrderEditNewApp.BUSINESS_OBJECT_CODE;
            this.description = ibas.i18n.prop(this.name);
        }
        registerView() {
            super.registerView();
            this.view.deleteDataEvent = this.deleteData;
            this.view.createDataEvent = this.createData;
            this.view.addSalesOrderItemEvent = this.addSalesOrderItem;
            this.view.removeSalesOrderItemEvent = this.removeSalesOrderItem;
            this.view.chooseSalesOrderCustomerEvent = this.chooseSalesOrderCustomer;
            this.view.chooseSalesOrderItemMaterialEvent = this.chooseSalesOrderItemMaterial;
        }
        viewShowed() {
            if (ibas.objects.isNull(this.editData)) {
                this.editData = new bo.SalesOrder();
                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
            }
            this.view.showSalesOrder(this.editData);
            this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
        }
        run(...args) {
            let that = this;
            if (ibas.objects.instanceOf(arguments[0], bo.SalesOrder)) {
                let criteria = arguments[0].criteria();
                if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                    let boRepository = new BORepositories_1.BORepositoryTrainingTesting();
                    boRepository.fetchSalesOrder({
                        criteria: criteria,
                        onCompleted(opRslt) {
                            let data;
                            if (opRslt.resultCode === 0) {
                                data = opRslt.resultObjects.firstOrDefault();
                            }
                            if (ibas.objects.instanceOf(data, bo.SalesOrder)) {
                                that.editData = data;
                                that.show();
                            }
                            else {
                                that.messages({
                                    type: ibas.emMessageType.WARNING,
                                    message: ibas.i18n.prop("sys_shell_data_deleted_and_created"),
                                    onCompleted() {
                                        that.show();
                                    }
                                });
                            }
                        }
                    });
                    return;
                }
            }
            super.run();
        }
        saveData() {
            let that = this;
            let boRepository = new BORepositories_1.BORepositoryTrainingTesting();
            boRepository.saveSalesOrder({
                beSaved: this.editData,
                onCompleted(opRslt) {
                    try {
                        that.busy(false);
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        if (opRslt.resultObjects.length === 0) {
                            that.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("sys_shell_data_delete") + ibas.i18n.prop("sys_shell_sucessful"));
                            that.editData = undefined;
                        }
                        else {
                            that.editData = opRslt.resultObjects.firstOrDefault();
                            that.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("sys_shell_data_save") + ibas.i18n.prop("sys_shell_sucessful"));
                        }
                        that.viewShowed();
                    }
                    catch (error) {
                        that.messages(error);
                    }
                }
            });
            this.busy(true);
            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_saving_data"));
        }
        deleteData() {
            let that = this;
            this.messages({
                type: ibas.emMessageType.QUESTION,
                title: ibas.i18n.prop(this.name),
                message: ibas.i18n.prop("sys_whether_to_delete"),
                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                onCompleted(action) {
                    if (action === ibas.emMessageAction.YES) {
                        that.editData.delete();
                        that.saveData();
                    }
                }
            });
        }
        createData(clone) {
            let that = this;
            let createData = function () {
                if (clone) {
                    that.editData = that.editData.clone();
                    that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_cloned_new"));
                    that.viewShowed();
                }
                else {
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
                    onCompleted(action) {
                        if (action === ibas.emMessageAction.YES) {
                            createData();
                        }
                    }
                });
            }
            else {
                createData();
            }
        }
        addSalesOrderItem() {
            this.editData.salesOrderItems.create();
            this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
        }
        removeSalesOrderItem(items) {
            if (!(items instanceof Array)) {
                items = [items];
            }
            if (items.length === 0) {
                return;
            }
            for (let item of items) {
                if (this.editData.salesOrderItems.indexOf(item) >= 0) {
                    if (item.isNew) {
                        this.editData.salesOrderItems.remove(item);
                    }
                    else {
                        item.delete();
                    }
                }
            }
            this.view.showSalesOrderItems(this.editData.salesOrderItems.filterDeleted());
        }
        chooseSalesOrderCustomer() {
            let that = this;
            ibas.servicesManager.runChooseService({
                chooseType: index_1.emChooseType.single,
                boCode: bo.Customer.BUSINESS_OBJECT_CODE + "_New",
                criteria: [
                    new ibas.Condition(bo.Customer.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
                ],
                onCompleted(selecteds) {
                    that.editData.customerCode = selecteds.firstOrDefault().code;
                    that.editData.customerName = selecteds.firstOrDefault().name;
                }
            });
        }
        chooseSalesOrderItemMaterial(caller) {
            let that = this;
            ibas.servicesManager.runChooseService({
                chooseType: index_1.emChooseType.multi,
                caller: caller,
                boCode: bo.Material.BUSINESS_OBJECT_CODE + "_New",
                criteria: [
                    new ibas.Condition(bo.Material.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
                ],
                onCompleted(selecteds) {
                    let index = that.editData.salesOrderItems.indexOf(caller);
                    let item = that.editData.salesOrderItems[index];
                    let created = false;
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
                        that.view.showSalesOrderItems(that.editData.salesOrderItems.filterDeleted());
                    }
                }
            });
        }
    }
    SalesOrderEditNewApp.APPLICATION_ID = "37f1fce3-ee1a-4c55-bb0d-98e8af355e57";
    SalesOrderEditNewApp.APPLICATION_NAME = "trainingtesting_app_salesorder_edit";
    SalesOrderEditNewApp.BUSINESS_OBJECT_CODE = bo.SalesOrder.BUSINESS_OBJECT_CODE;
    exports.SalesOrderEditNewApp = SalesOrderEditNewApp;
});
