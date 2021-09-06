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
            /** 编辑视图-客户主数据 */
            export class CustomerEditView extends ibas.BOEditView implements app.ICustomerEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Customer.BUSINESS_OBJECT_CODE,
                        },
                        showFooter: false,
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            },
                            objectSubtitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                }),
                            },
                            sideContentButton: new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://save",
                                press(): void {
                                    that.fireViewEvents(that.saveDataEvent);
                                }
                            }),
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://copy",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    press(): void {
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Low,
                                    press(): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("trainingtesting_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_code") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "code",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_name") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "name",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        }),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showCustomer(data: bo.Customer): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}
