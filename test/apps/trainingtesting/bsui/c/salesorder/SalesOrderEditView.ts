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
                            new sap.extension.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                                }
                            }).bindProperty("bindingValue", {
                                path: "/customerCode",
                                type: new sap.extension.data.Alphanumeric({
                                    notEmpty: true,
                                    minLength: 2,
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customername") }),
                            new sap.extension.m.Input("", {
                                // editable: false,
                            }).bindProperty("bindingValue", {
                                path: "/customerName",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_reference1") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                // editable: false,
                                chooseType: ibas.emChooseType.MULTIPLE,
                                repository: bo.BORepositoryTrainingTesting,
                                dataInfo: {
                                    type: bo.Material,
                                    key: bo.Material.PROPERTY_CODE_NAME,
                                    text: bo.Material.PROPERTY_NAME_NAME
                                },
                                criteria: [
                                    new ibas.Condition(bo.Material.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                ],
                            }).bindProperty("bindingValue", {
                                path: "/reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    regExp: /^.{3,20}$/
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_reference2") }),
                            new sap.extension.m.RepositorySelect("", {
                                repository: bo.BORepositoryTrainingTesting,
                                dataInfo: {
                                    type: bo.Material,
                                    key: bo.Material.PROPERTY_CODE_NAME,
                                    text: bo.Material.PROPERTY_NAME_NAME,
                                },
                                // blankData: false,
                                criteria: [
                                    new ibas.Condition(bo.Material.PROPERTY_CODE_NAME, ibas.emConditionOperation.START, "A")
                                ],
                            }).bindProperty("bindingValue", {
                                path: "/reference2",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_docentry") }),
                            new sap.extension.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("bindingValue", {
                                path: "/docEntry",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emDocumentStatus
                            }).bindProperty("bindingValue", {
                                path: "/documentStatus",
                                type: new sap.extension.data.DocumentStatus()
                            }),
                            new sap.extension.m.CheckBox("", {
                                text: ibas.i18n.prop("bo_salesorder_canceled")
                            }).bindProperty("bindingValue", {
                                path: "/canceled",
                                type: new sap.extension.data.YesNo()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "/documentDate",
                                type: new sap.extension.data.Date()
                            }),
                        ]
                    });
                    let formSalesOrderItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorderitem") }),
                            this.tableSalesOrderItem = new sap.extension.table.DataTable("", {
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
                                                that.fireViewEvents(that.removeSalesOrderItemEvent, that.tableSalesOrderItem.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                enableSelectAll: false,
                                visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric()
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_linestatus"),
                                        template: new sap.extension.m.EnumSelect("", {
                                            enumType: ibas.emDocumentStatus
                                        }).bindProperty("bindingValue", {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus()
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_itemcode"),
                                        template: new sap.extension.m.RepositoryInput("", {
                                            showValueHelp: true,
                                            repository: bo.BORepositoryTrainingTesting,
                                            dataInfo: {
                                                type: bo.Material,
                                                key: bo.Material.PROPERTY_CODE_NAME,
                                                text: bo.Material.PROPERTY_NAME_NAME
                                            },
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.chooseSalesOrderItemMaterialEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric()
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_price"),
                                        template: new sap.extension.m.Input("", {
                                            type: sap.m.InputType.Number
                                        }).bindProperty("bindingValue", {
                                            path: "price",
                                            type: new sap.extension.data.Price(),
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_quantity"),
                                        template: new sap.extension.m.Input("", {
                                            type: sap.m.InputType.Number
                                        }).bindProperty("bindingValue", {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity(),
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_salesorderitem_linetotal"),
                                        template: new sap.extension.m.Input("", {
                                            type: sap.m.InputType.Number,
                                        }).bindProperty("bindingValue", {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum(),
                                        })
                                    })
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_dataowner") }),
                            new sap.extension.m.UserInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "/dataOwner",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_organization") }),
                            new sap.extension.m.OrganizationInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "/organization",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_teammembers") }),
                            new sap.extension.m.UserInput("", {
                                showValueHelp: true,
                                chooseType: ibas.emChooseType.MULTIPLE,
                            }).bindProperty("bindingValue", {
                                path: "/teamMembers",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "/remarks",
                            }),
                            new sap.ui.core.Title("", {}),
                        ]
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        width: "100%",
                        content: [
                            formTop,
                            formSalesOrderItem,
                            formBottom,
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
                private tableSalesOrderItem: sap.extension.table.Table;

                /** 改变视图状态 */
                private changeViewStatus(data: bo.SalesOrder): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), true);
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
                    this.layoutMain.setModel(new sap.extension.model.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据 */
                showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
                    this.tableSalesOrderItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
