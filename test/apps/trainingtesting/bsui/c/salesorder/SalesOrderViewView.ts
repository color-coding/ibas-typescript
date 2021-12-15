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
            /** 查看视图-销售订单 */
            export class SalesOrderViewView extends ibas.BOViewView implements app.ISalesOrderViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableSalesOrderItem = new sap.extension.m.DataTable("", {
                        dataInfo: {
                            code: bo.SalesOrder.BUSINESS_OBJECT_CODE,
                            name: bo.SalesOrderItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_itemcode"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_itemdescription"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_quantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_deliverydate"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_price"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_pricecurrency"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_linetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_warehouse"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_reference2"),
                            }),
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "deliveryDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "price",
                                            type: new sap.extension.data.Price(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "priceCurrency",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "warehouse",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.SalesOrder.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data);
                                }
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "customerName",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "customerCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                        formatter(data: string): any {
                                            return ibas.strings.format("({0})", data);
                                        }
                                    }
                                ],
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                        press: function (): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://action",
                                        press: function (event: any): void {
                                            ibas.servicesManager.showServices({
                                                proxy: new ibas.BOServiceProxy({
                                                    data: that.page.getModel().getData(),
                                                    converter: new bo.DataConverter(),
                                                }),
                                                displayServices(services: ibas.IServiceAgent[]): void {
                                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                                        return;
                                                    }
                                                    let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                        placement: sap.m.PlacementType.Bottom,
                                                        buttons: {
                                                            path: "/",
                                                            template: new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Transparent,
                                                                text: {
                                                                    path: "name",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? ibas.i18n.prop(data) : "";
                                                                    }
                                                                },
                                                                icon: {
                                                                    path: "icon",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? data : "sap-icon://e-care";
                                                                    }
                                                                },
                                                                press(this: sap.m.Button): void {
                                                                    let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                    if (service) {
                                                                        service.run();
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    });
                                                    actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                    actionSheet.openBy(event.getSource());
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_salesorder_documentstatus"),
                                    enumValue: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_salesorder_canceled"),
                                    negative: true,
                                    enumValue: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(),
                                    },
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    number: {
                                        path: "documentTotal",
                                        type: new sap.extension.data.Sum()
                                    },
                                    unit: {
                                        path: "documentCurrency",
                                        type: new sap.extension.data.Alphanumeric()
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_salesorder"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_postingdate"),
                                                bindingValue: {
                                                    path: "postingDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_deliverydate"),
                                                bindingValue: {
                                                    path: "deliveryDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_documentdate"),
                                                bindingValue: {
                                                    path: "documentDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_customercode"),
                                                bindingValue: {
                                                    path: "customerCode",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_customername"),
                                                bindingValue: {
                                                    path: "customerName",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_documentcurrency"),
                                                bindingValue: {
                                                    path: "documentCurrency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_documentrate"),
                                                bindingValue: {
                                                    path: "documentRate",
                                                    type: new sap.extension.data.Rate(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_documenttotal"),
                                                bindingValue: {
                                                    path: "documentTotal",
                                                    type: new sap.extension.data.Sum(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_reference1"),
                                                bindingValue: {
                                                    path: "reference1",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_salesorder_reference2"),
                                                bindingValue: {
                                                    path: "reference2",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_salesorder_salesorderitems"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tableSalesOrderItem
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private tableSalesOrderItem: sap.extension.m.Table;

                /** 显示数据 */
                showSalesOrder(data: bo.SalesOrder): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-销售订单-行 */
                showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
                    this.tableSalesOrderItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
