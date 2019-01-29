/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace m {
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
                    this.pageSalesOrder = new sap.m.Page("", {
                        showHeader: false,
                        showFooter: false,
                        content: [
                            new sap.ui.layout.form.SimpleForm("", {
                                editable: true,
                                content: [
                                    new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_general") }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customercode") }),
                                    new sap.m.Input("", {
                                        value: {
                                            path: "customerCode",
                                        },
                                        showValueHelp: true,
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customername") }),
                                    new sap.m.Input("", {
                                        editable: false,
                                        value: {
                                            path: "customerName",
                                        }
                                    }),
                                    new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_status") }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                                    new sap.m.Select("", {
                                        items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                                        selectedKey: {
                                            path: "documentStatus",
                                            type: "sap.ui.model.type.Integer",
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                                    new sap.m.Select("", {
                                        items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                                        selectedKey: {
                                            path: "canceled",
                                            type: "sap.ui.model.type.Integer",
                                        }
                                    }),
                                    new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_amount") }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documenttotal") + "(RMB)" }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        type: sap.m.InputType.Number,
                                        value: {
                                            path: "documentTotal",
                                        },
                                    }),
                                    new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_time") }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                                    new sap.m.DatePicker("", {
                                        valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        dateValue: {
                                            path: "documentDate"
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_postingdate") }),
                                    new sap.m.DatePicker("", {
                                        valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        dateValue: {
                                            path: "postingDate"
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_deliverydate") }),
                                    new sap.m.DatePicker("", {
                                        valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd"),
                                        dateValue: {
                                            path: "deliveryDate"
                                        }
                                    }),
                                    new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorder_remarks") }),
                                    new sap.m.TextArea("", {
                                        rows: 3,
                                        value: {
                                            path: "remarks"
                                        }
                                    }),
                                ]
                            })
                        ]
                    });
                    this.listSalesOrderItem = new sap.m.List("", {
                        inset: false,
                        growing: true,
                        growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
                        growingScrollToLoad: true,
                        mode: sap.m.ListMode.None,
                        swipeDirection: sap.m.SwipeDirection.RightToLeft,
                        swipeContent: new sap.m.FlexBox("", {
                            height: "100%",
                            width: "6rem",
                            items: [
                                new sap.m.SegmentedButton("", {
                                    items: [
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://delete",
                                            press(oEvent: any): void {
                                                that.fireViewEvents(that.removeSalesOrderItemEvent,
                                                    // 获取表格选中的对象
                                                    openui5.utils.getSelecteds<bo.SalesOrderItem>(that.listSalesOrderItem)
                                                );
                                                that.listSalesOrderItem.swipeOut(null);
                                            }
                                        }),
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://edit",
                                            press(oEvent: any): void {
                                                that.showSalesOrderItem(
                                                    openui5.utils.getSelecteds<bo.SalesOrderItem>(that.listSalesOrderItem).firstOrDefault()
                                                );
                                                that.listSalesOrderItem.swipeOut(null);
                                            }
                                        })
                                    ]
                                })
                            ]
                        }).addStyleClass("sapUiSmallMarginTop"),
                        items: {
                            path: "/rows",
                            template: new sap.m.ObjectListItem("", {
                                title: {
                                    path: "itemCode"
                                },
                                type: "Active",
                                number: {
                                    parts: [
                                        { path: "lineTotal" }
                                    ],
                                    type: sap.ui.model.type.Currency,
                                    formatOptions: { showMeasure: false }
                                },
                                numberUnit: "RMB",
                                attributes: [
                                    new sap.m.ObjectAttribute("", {
                                        text: {
                                            path: "itemDescription"
                                        }
                                    }),
                                    new sap.m.ObjectAttribute("", {
                                        text: {
                                            parts: [
                                                {
                                                    path: "price"
                                                },
                                                {
                                                    path: "quantity",
                                                    formatter: function (data: any): any {
                                                        if (ibas.strings.isEmpty(data)) {
                                                            return "";
                                                        }
                                                        return ibas.strings.format(" * {0}", data);
                                                    }
                                                }
                                            ]
                                        }
                                    })
                                ]
                            }),
                        }
                    });
                    this.pageSalesOrderItemList = new sap.m.Page("", {
                        showHeader: false,
                        floatingFooter: true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_back"),
                                    width: "50%",
                                    press: function (): void {
                                        that.toPage(that.pageSalesOrder, true);
                                        that.listSalesOrderItem.swipeOut(null);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    width: "50%",
                                    press: function (): void {
                                        that.fireViewEvents(that.addSalesOrderItemEvent);
                                        let datas: any = (<any>that.listSalesOrderItem.getModel()).getData().rows;
                                        if (datas.length > 0) {
                                            let newItem: bo.SalesOrderItem = datas[datas.length - 1];
                                            if (!ibas.objects.isNull(newItem)) {
                                                that.showSalesOrderItem(newItem);
                                            }
                                        }
                                        that.listSalesOrderItem.swipeOut(null);
                                    }
                                }),
                            ]
                        }),
                        content: [
                            this.listSalesOrderItem,
                        ]
                    });
                    this.pageSalesOrderItem = new sap.m.Page("", {
                        showHeader: false,
                        floatingFooter: true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                // 编辑子对象完成
                                new sap.m.Button("", {
                                    width: "100%",
                                    text: ibas.i18n.prop("shell_confirm"),
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        that.toPage(that.pageSalesOrderItemList, true);
                                    }
                                }),
                            ]
                        }),
                        content: [
                            new sap.ui.layout.form.SimpleForm("", {
                                editable: true,
                                content: [
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_linestatus") }),
                                    new sap.m.Select("", {
                                        width: "100%",
                                        items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                                        selectedKey: {
                                            path: "lineStatus",
                                            type: "sap.ui.model.type.Integer"
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_itemcode") }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        value: {
                                            path: "itemCode"
                                        },
                                        showValueHelp: true,
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseSalesOrderItemMaterialEvent,
                                                // 获取当前对象
                                                this.getBindingContext().getObject()
                                            );
                                        }
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_itemdescription") }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        enabled: false,
                                        value: {
                                            path: "itemDescription"
                                        },
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_price") + "(RMB)" }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        value: {
                                            path: "price"
                                        },
                                        type: sap.m.InputType.Number,
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_quantity") }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        value: {
                                            path: "quantity"
                                        },
                                        type: sap.m.InputType.Number
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_linetotal") + "(RMB)" }),
                                    new sap.m.Input("", {
                                        width: "100%",
                                        value: {
                                            path: "lineTotal"
                                        },
                                        type: sap.m.InputType.Number
                                    }),
                                ]
                            })
                        ]
                    });
                    this.navContainer = new sap.m.NavContainer("", {
                        pages: [
                            this.pageSalesOrder,
                            this.pageSalesOrderItemList,
                            this.pageSalesOrderItemList,
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
                                new sap.m.Button("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (event: any): void {
                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            placement: sap.m.PlacementType.Bottom,
                                        });
                                        popover.addContent(new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_new"),
                                            icon: "sap-icon://create",
                                            type: sap.m.ButtonType.Transparent,
                                            press: function (): void {
                                                // 创建新的对象
                                                that.fireViewEvents(that.createDataEvent, false);
                                                popover.close();
                                            }
                                        }));
                                        popover.addContent(new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_clone"),
                                            icon: "sap-icon://copy",
                                            type: sap.m.ButtonType.Transparent,
                                            press: function (): void {
                                                // 复制当前对象
                                                that.fireViewEvents(that.createDataEvent, true);
                                                popover.close();
                                            }
                                        }));
                                        popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                        popover.openBy(event.getSource(), true);
                                    }
                                }),
                                new sap.m.ToolbarSpacer(""),
                                this.navButton = new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://overflow",
                                    press: function (event: any): void {
                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            placement: sap.m.PlacementType.Bottom,
                                        });
                                        popover.addContent(new sap.m.Button("", {
                                            text: ibas.i18n.prop("bo_salesorderitem"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://folder",
                                            press: function (): void {
                                                that.toPage(that.pageSalesOrderItemList);
                                                popover.close();
                                            }
                                        }));
                                        (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                        popover.openBy(event.getSource(), true);
                                    }
                                }),
                            ]
                        }),
                        content: [this.navContainer]
                    });
                    this.toPage(this.pageSalesOrder);
                    return this.page;
                }

                private page: sap.m.Page;
                private pageSalesOrder: sap.m.Page;
                private listSalesOrderItem: sap.m.List;
                private pageSalesOrderItemList: sap.m.Page;
                private pageSalesOrderItem: sap.m.Page;
                private currentPage: sap.m.Page;
                private navContainer: sap.m.NavContainer;
                private navButton: sap.m.Button;
                /** 切换页面 */
                private toPage(page: sap.m.Page, leftToRight?: boolean): void {
                    switch (page) {
                        case this.pageSalesOrder:
                            this.navButton.setVisible(true);
                            this.currentPage = this.pageSalesOrder;
                            break;
                        case this.pageSalesOrderItemList:
                            this.navButton.setVisible(false);
                            this.currentPage = this.pageSalesOrderItemList;
                            break;
                        case this.pageSalesOrderItem:
                            this.navButton.setVisible(false);
                            this.currentPage = this.pageSalesOrderItem;
                            break;
                        default:
                            break;
                    }
                    if (!ibas.objects.isNull(this.currentPage)) {
                        if (leftToRight) {
                            this.navContainer.backToPage(this.currentPage.getId());
                        } else {
                            this.navContainer.to(this.currentPage.getId());
                        }
                    }
                }
                /** 手指触控滑动 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    if (!ibas.objects.isNull(this.currentPage)
                        && !ibas.objects.isNull(this.currentPage.getFooter())) {
                        if (direction === ibas.emTouchMoveDirection.UP) {
                            this.currentPage.setShowFooter(false);
                        } else if (direction === ibas.emTouchMoveDirection.DOWN) {
                            this.currentPage.setShowFooter(true);
                        }
                    }
                }

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
                        openui5.utils.changeFormEditable(this.pageSalesOrder, false);
                    }
                }

                /** 显示数据 */
                showSalesOrder(data: bo.SalesOrder): void {
                    this.pageSalesOrder.setModel(new sap.ui.model.json.JSONModel(data));
                    this.pageSalesOrder.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.pageSalesOrder, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据（销售订单-行） */
                showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
                    this.listSalesOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.listSalesOrderItem, datas);
                }
                /** 显示数据行（销售订单-行） */
                showSalesOrderItem(data: bo.SalesOrderItem): void {
                    this.pageSalesOrderItem.setModel(new sap.ui.model.json.JSONModel(data));
                    this.pageSalesOrderItem.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.pageSalesOrderItem, data);
                    this.toPage(this.pageSalesOrderItem);
                }
            }
        }
    }
}
