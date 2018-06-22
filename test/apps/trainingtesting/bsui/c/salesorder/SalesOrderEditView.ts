/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace c {
            /**
             * 编辑视图-销售订单
             */
            export class SalesOrderEditView extends ibas.BOEditView implements app.ISalesOrderEditView {
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
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customercode") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                                }
                            }).bindProperty("value", {
                                path: "/customerCode",
                                type: new openui5.datatype.Alphanumeric({
                                    notEmpty: true,
                                    minLength: 2,
                                    maxLength: 8,
                                    description: ibas.i18n.prop("bo_salesorder_customercode")
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customername") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "/customerName",
                                type: new openui5.datatype.Alphanumeric({
                                    description: ibas.i18n.prop("bo_salesorder_customercode"),
                                    validate(oValue: string): openui5.datatype.ValidateResult {
                                        let result: openui5.datatype.ValidateResult = new openui5.datatype.ValidateResult();
                                        result.status = true;
                                        if (!oValue.endsWith("公司")) {
                                            result.status = false;
                                            result.message = "客户名称需要以[公司]结尾";
                                        }
                                        return result;
                                    }
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_reference1") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "/reference1",
                                type: new openui5.datatype.Email({
                                    notEmpty: true,
                                    description: ibas.i18n.prop("bo_salesorder_reference1")
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "/documentDate",
                                type: new openui5.datatype.DateTime({
                                    description: ibas.i18n.prop("bo_salesorder_documentdate")
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_createtime") }),
                            new sap.m.TimePicker("", {
                            }).bindProperty("dateValue", {
                                path: "/createTime",
                                type: new openui5.datatype.Time({
                                    description: ibas.i18n.prop("bo_salesorder_createtime")
                                })
                            }),
                            new sap.m.Label("", { text: "整数" }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "/updateTime",
                                type: new openui5.datatype.Numeric({
                                    description: ibas.i18n.prop("bo_salesorder_createtime")
                                })
                            }),
                            new sap.m.Label("", { text: "小数,保留2位小数" }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "/documentTotal",
                                type: new openui5.datatype.Sum({
                                    decimalPlaces: 2,
                                    description: ibas.i18n.prop("bo_salesorder_documenttotal")
                                })
                            }),
                            new sap.m.Label("", { text: "百分数" }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "/documentRate",
                                type: new openui5.datatype.Percentage()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_docentry") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/docEntry"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus)
                            }).bindProperty("selectedKey", {
                                path: "/documentStatus",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                            }).bindProperty("selectedKey", {
                                path: "/canceled",
                                type: "sap.ui.model.type.Integer"
                            })
                        ]
                    });
                    this.tableSalesOrderItem = new sap.ui.table.Table("", {
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_add"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    press: function (): void {
                                        that.fireViewEvents(that.addSalesOrderItemEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://less",
                                    press: function (): void {
                                        that.fireViewEvents(that.removeSalesOrderItemEvent,
                                            // 获取表格选中的对象
                                            openui5.utils.getSelecteds<bo.SalesOrderItem>(that.tableSalesOrderItem)
                                        );
                                    }
                                })
                            ]
                        }),
                        enableSelectAll: false,
                        selectionBehavior: sap.ui.table.SelectionBehavior.Row,
                        visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
                        rows: "{/rows}",
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_lineid"),
                                template: new sap.m.Text("", {
                                    width: "100%",
                                }).bindProperty("text", {
                                    path: "lineId"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_linestatus"),
                                template: new sap.m.Select("", {
                                    width: "100%",
                                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus)
                                }).bindProperty("selectedKey", {
                                    path: "lineStatus",
                                    type: "sap.ui.model.type.Integer"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_itemcode"),
                                template: new sap.m.Input("", {
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
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_price"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    type: sap.m.InputType.Number
                                }).bindProperty("value", {
                                    path: "price",
                                    type: new openui5.datatype.Price(),
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_quantity"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    type: sap.m.InputType.Number
                                }).bindProperty("value", {
                                    path: "quantity",
                                    type: new openui5.datatype.Quantity(),
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_salesorderitem_linetotal"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    type: sap.m.InputType.Number,
                                }).bindProperty("value", {
                                    path: "lineTotal",
                                    type: new openui5.datatype.Sum(),
                                })
                            })
                        ]
                    });
                    let formSalesOrderItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorderitem") }),
                            this.tableSalesOrderItem,
                        ]
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        width: "100%",
                        height: "100%",
                        content: [
                            formTop,
                            formSalesOrderItem,
                        ]
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [this.layoutMain]
                    });
                    return this.page;
                }

                private page: sap.m.Page;
                private layoutMain: sap.ui.layout.VerticalLayout;
                private tableSalesOrderItem: sap.ui.table.Table;

                /** 改变视图状态 */
                private changeViewStatus(data: bo.SalesOrder): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    }
                    // 不可编辑：已批准，
                    if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                        openui5.utils.changeFormEditable(this.layoutMain, false);
                    }
                }

                /** 显示数据 */
                showSalesOrder(data: bo.SalesOrder): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据 */
                showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
                    this.tableSalesOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.tableSalesOrderItem, datas);
                }
            }
        }
    }
}
