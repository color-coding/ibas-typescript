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
                                header: ibas.i18n.prop("bo_salesorderitem_itemdescription")
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_quantity")
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_warehouse")
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_price")
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_salesorderitem_linetotal")
                            })
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectIdentifier("", {
                                        title: {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                            formatter(this: sap.m.ObjectIdentifier, data: any): any {
                                                let boRepository: bo.BORepositoryTrainingTesting = new bo.BORepositoryTrainingTesting();
                                                boRepository.fetchMaterial({
                                                    criteria: [
                                                        new ibas.Condition(bo.Material.PROPERTY_CODE_NAME, ibas.emConditionOperation.EQUAL, data)
                                                    ],
                                                    onCompleted: (opRslt) => {
                                                        let data: any = opRslt.resultObjects.firstOrDefault();
                                                        if (data instanceof bo.Material) {
                                                            this.setText(data.name);
                                                        }
                                                    }
                                                });
                                                return data;
                                            }
                                        },
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity()
                                        },
                                    }),
                                    new sap.extension.m.ObjectIdentifier("", {
                                        title: {
                                            path: "warehouse",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "price",
                                            type: new sap.extension.data.Price()
                                        },
                                        unit: {
                                            path: "priceCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Price()
                                        },
                                        unit: {
                                            path: "priceCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    }),
                                ]
                            })
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
                                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                                        showHeader: false,
                                                        placement: sap.m.PlacementType.Bottom,
                                                    });
                                                    for (let service of services) {
                                                        popover.addContent(new sap.m.Button("", {
                                                            text: ibas.i18n.prop(service.name),
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: service.icon,
                                                            press: function (): void {
                                                                service.run();
                                                                popover.close();
                                                            }
                                                        }));
                                                    }
                                                    popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                    popover.openBy(event.getSource(), true);
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_salesorder_documentstatus"),
                                    text: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(true),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_salesorder_canceled"),
                                    negative: true,
                                    text: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(true),
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
                            new sap.ui.layout.VerticalLayout("", {
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_salesorder_documentdate"),
                                        text: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date()
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_salesorder_deliverydate"),
                                        text: {
                                            path: "deliveryDate",
                                            type: new sap.extension.data.Date()
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_salesorder_reference1"),
                                        text: {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_salesorder_reference2"),
                                        text: {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    })
                                ]
                            })
                        ],
                        sections: [
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
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_salesorder_remarks"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectStatus("", {
                                                title: ibas.i18n.prop("bo_salesorder_remarks"),
                                                text: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric()
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            })
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
