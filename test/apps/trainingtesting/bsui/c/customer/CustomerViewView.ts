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
            /** 查看视图-客户主数据 */
            export class CustomerViewView extends ibas.BOViewView implements app.ICustomerViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Customer.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
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
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_customer_activated"),
                                    text: {
                                        path: "activated",
                                        type: new sap.extension.data.YesNo(true),
                                    }
                                }),
                            ]
                        }),
                        headerContent: [
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_customer"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.VerticalLayout("", {
                                                content: [
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_country"),
                                                        text: {
                                                            path: "country",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_province"),
                                                        text: {
                                                            path: "province",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_city"),
                                                        text: {
                                                            path: "city",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_district"),
                                                        text: {
                                                            path: "district",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_street"),
                                                        text: {
                                                            path: "street",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_customer_zipcode"),
                                                        text: {
                                                            path: "zipCode",
                                                            type: new sap.extension.data.Alphanumeric()
                                                        }
                                                    }),

                                                ]
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showCustomer(data: bo.Customer): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}
