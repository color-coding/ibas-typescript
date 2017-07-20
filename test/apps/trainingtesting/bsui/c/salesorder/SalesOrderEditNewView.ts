/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ISalesOrderEditNewView } from "../../../bsapp/salesorder/index";

/**
 * 视图-SalesOrder
 */
export class SalesOrderEditNewView extends ibas.BOEditView implements ISalesOrderEditNewView {
    private page: sap.m.Page;
    private mainLayout: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tableSalesOrderItem: sap.m.Table;

    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加销售订单-行事件 */
    addSalesOrderItemEvent: Function;
    /** 删除销售订单-行事件 */
    removeSalesOrderItemEvent: Function;
    /** 选择销售订单客户事件 */
    chooseSalesOrderCustomerEvent: Function;
    /** 选择销售订单行物料事件 */
    chooseSalesOrderItemMaterialEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        var a="1";
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                    }
                }).bindProperty("value", {
                    path: "/customerCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: "yyyy-MM-dd",
                }).bindProperty("dateValue", {
                    path: "/documentDate"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_docentry") }),
                new sap.m.Input("").bindProperty("value", {
                    path: "/docEntry",
                    type: sap.m.InputType.Number
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                new sap.m.Select("", {
                    items: utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "/documentStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                new sap.m.Select("", {
                    items: utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "/canceled",
                    type: "sap.ui.model.type.Integer"
                })
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorder_remarks") }),
                new sap.m.TextArea("", {
                    rows: 5,
                }).bindProperty("value", {
                    path: "/remarks"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorderitem_linetotal") }),
                new sap.m.Input("", {
                    width: "100px",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "/linetotal"
                })
            ]
        });
        let addButton: sap.m.Button = new sap.m.Button("", {
            text: ibas.i18n.prop("sys_shell_data_add"),
            type: sap.m.ButtonType.Transparent,
            icon: "sap-icon://add",
            visible: false,
            press: function (): void {
                that.fireViewEvents(that.addSalesOrderItemEvent);
            }
        });
        let editButton: sap.m.Button = new sap.m.Button("", {
            text: '编辑',
            type: sap.m.ButtonType.Transparent,
            icon: "sap-icon://edit",
            press: function (): void {
                rebindTable(list_item_edit);
                completeButton.setVisible(true);
                addButton.setVisible(true);
                editButton.setVisible(false);
                that.tableSalesOrderItem.setMode(sap.m.ListMode.None);
            }
        });
        let completeButton: sap.m.Button = new sap.m.Button("", {
            text: '完成',
            type: sap.m.ButtonType.Transparent,
            visible: false,
            icon: "sap-icon://complete",
            press: function (): void {
                rebindTable(list_item_read);
                completeButton.setVisible(false);
                addButton.setVisible(false);
                editButton.setVisible(true);
                that.tableSalesOrderItem.setMode(sap.m.ListMode.Delete);
            }
        });
        this.tableSalesOrderItem = new sap.m.Table("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.Delete,
            selectionMode: sap.ui.table.SelectionMode.None,
            headerToolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Title("", {
                        text: '单据行',
                        level: 'H2'
                    }),
                    new sap.m.ToolbarSpacer(""),
                    addButton,
                    editButton,
                    completeButton
                ]
            }),
            columns: [
                new sap.m.Column("", {
                    demandPopin: true,
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_linestatus")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_itemcode")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_price")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_quantity")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_linetotal")
                    })
                }),
            ],
            delete: function (oEvent): void {
                var oItem = oEvent.getParameter("listItem");
                var deleteBo = oItem.getBindingContext().getObject();
                that.fireViewEvents(that.removeSalesOrderItemEvent,
                    deleteBo
                );
            }
        });
        let list_item_read: sap.m.ColumnListItem = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            //highlight:sap.ui.core.MessageType.Information,
            cells: [
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "lineStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "itemCode",
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "price",
                    type: "sap.ui.model.type.Integer",

                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "quantity",
                    type: "sap.ui.model.type.Integer",

                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "lineTotal",
                    type: "sap.ui.model.type.Integer",

                }),
            ],
            detailPress: function (oEvent): void {
                that.fireViewEvents(that.editDataEvent,
                    oEvent.getSource().getBindingContext().getObject()
                );
            }
        });
        var list_item_edit: sap.m.ColumnListItem = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            cells: [
                new sap.m.Select("", {
                    width: "100%",
                    items: utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "lineStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSalesOrderItemMaterialEvent,
                            // 获取当前对象
                            this.getBindingContext().getObject()
                        );
                    }
                }).bindProperty("value", {
                    path: "itemCode"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "price"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "quantity"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "lineTotal"
                })
            ],
            detailPress: function (oEvent): void {
                that.fireViewEvents(that.editDataEvent,
                    oEvent.getSource().getBindingContext().getObject()
                );
            }
        });
        //绑定table模版
        let rebindTable: Function = function (oTemplate) {
            that.tableSalesOrderItem.bindItems({
                path: "/rows",
                template: oTemplate,
            })
        };
        rebindTable(list_item_read);
        this.mainLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                this.viewTopForm,
                this.tableSalesOrderItem,
                this.viewBottomForm
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_clone"),
                                    icon: "sap-icon://copy"
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
                        })
                    }),
                ]
            }),
            content: [this.mainLayout]
        });
        this.id = this.page.getId();
        return this.page;
    }

    /** 改变视图状态 */
    private changeViewStatus(data: bo.SalesOrder): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED
            || data.documentStatus === ibas.emDocumentStatus.CLOSED
            || data.canceled === ibas.emYesNo.YES) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            utils.changeFormEditable(this.mainLayout, false);
        }
    }
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.mainLayout, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
        this.tableSalesOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.tableSalesOrderItem, datas);
    }
}
