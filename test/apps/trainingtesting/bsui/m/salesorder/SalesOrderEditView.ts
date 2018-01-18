/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { ISalesOrderEditView } from "../../../bsapp/salesorder/index";
export class SalesOrderEditView extends ibas.BOEditView implements ISalesOrderEditView {

    private page: sap.m.Page;
    private mainPage: sap.m.Page;
    private childDetailPage: sap.m.Page;
    private childListPage: sap.m.Page;
    private currentPage: sap.m.Page;
    private mainForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tableSalesOrderItem: sap.m.List;
    private childEditForm: sap.ui.layout.form.SimpleForm;
    private navContainer: sap.m.NavContainer;
    private navButton: sap.m.Button;
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
    /** 选择销售订单行仓库事件 */
    chooseSalesOrderItemWarehouseEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.navContainer = new sap.m.NavContainer("", {});
        // mainPage
        this.mainForm = new sap.ui.layout.form.SimpleForm("", {
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
                    path: "customerCode",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customername") }),
                new sap.m.Input("", {
                    editable: false
                }).bindProperty("value", {
                    path: "customerName",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_status") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                }).bindProperty("selectedKey", {
                    path: "documentStatus",
                    type: "sap.ui.model.type.Integer",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                }).bindProperty("selectedKey", {
                    path: "canceled",
                    type: "sap.ui.model.type.Integer",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_amount") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documenttotal") }),
                new sap.m.Input("", {
                    width: "200px",
                    type: sap.m.InputType.Number,
                    description: "RMB"
                }).bindProperty("value", {
                    path: "/documentTotal",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_time") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "documentDate",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_postingdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),

                }).bindProperty("dateValue", {
                    path: "postingDate",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_deliverydate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "deliveryDate"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorder_remarks") }),
                new sap.m.TextArea("", {
                    rows: 3,
                }).bindProperty("value", {
                    path: "/remarks"
                }),
            ]
        });
        this.mainPage = new sap.m.Page("", {
            showHeader: false,
            showfooter: false,
            content: [this.mainForm]
        });
        this.navContainer.addPage(this.mainPage);
        // 子项列表页
        this.tableSalesOrderItem = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.None,
            selectionMode: sap.ui.table.SelectionMode.None,
            swipeContent: new sap.m.FlexBox("", {
                height: "100%",
                mode: sap.m.ListMode.None,
                swipeDirection: sap.m.SwipeDirection.RightToLeft,
                width: "6rem",
                items: [
                    new sap.m.SegmentedButton("", {
                        items: [
                            new sap.m.SegmentedButtonItem("", {
                                // text: ibas.i18n.prop("shell_data_delete"),
                                width: "3rem",
                                icon: "sap-icon://delete",
                                press(oEvent: any): void {
                                    var deleteBo: bo.SalesOrderItem =
                                        that.tableSalesOrderItem.getSwipedItem().getBindingContext().getObject();
                                    that.fireViewEvents(that.removeSalesOrderItemEvent,
                                        deleteBo
                                    );
                                    that.tableSalesOrderItem.swipeOut(null);
                                }
                            }),
                            new sap.m.SegmentedButtonItem("", {
                                // text: ibas.i18n.prop("shell_data_edit"),
                                width: "3rem",
                                icon: "sap-icon://edit",
                                press(oEvent: any): void {
                                    var editBo: bo.SalesOrderItem =
                                        that.tableSalesOrderItem.getSwipedItem().getBindingContext().getObject();
                                    that.childEditForm.setModel(new sap.ui.model.json.JSONModel(editBo));
                                    that.childEditForm.bindObject("/");
                                    that.toPage(that.childDetailPage);
                                    that.tableSalesOrderItem.swipeOut(null);
                                }
                            })
                        ]
                    })
                ]
            }).addStyleClass("sapUiSmallMarginTop"),
        });
        let list_child_customer: sap.m.ObjectListItem = new sap.m.ObjectListItem("", {
            title: "{itemCode}",
            type: "Active",
            number: {
                parts: [
                    { path: "lineTotal" }
                ],
                type: sap.ui.model.type.Currency,
                formatOptions: { showMeasure: false }
            },
            attributes: [
                new sap.m.ObjectAttribute("", {
                    text: "{price} * {quantity}",
                    type: sap.ui.model.type.Integer,
                })
            ]
        });
        this.tableSalesOrderItem.bindItems({
            path: "/rows",
            template: list_child_customer,
        });
        this.childListPage = new sap.m.Page("", {
            showHeader: false,
            floatingFooter: true,
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.ToolbarSpacer(""),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_back"),
                        // type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://undo",
                        press: function (): void {
                            that.toPage(that.mainPage, true);
                            that.tableSalesOrderItem.swipeOut(null);
                        }
                    }),
                    new sap.m.ToolbarSpacer(""),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_new"),
                        // type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        press: function (): void {
                            that.fireViewEvents(that.addSalesOrderItemEvent);
                            let datas: any = (<any>that.tableSalesOrderItem.getModel()).getData().rows;
                            if (datas.length > 0) {
                                let newItem: bo.SalesOrderItem = datas[datas.length - 1];
                                if (!ibas.objects.isNull(newItem)) {
                                    that.childEditForm.setModel(new sap.ui.model.json.JSONModel(newItem));
                                    that.childEditForm.bindObject("/");
                                    that.toPage(that.childDetailPage);
                                }
                            }
                            that.tableSalesOrderItem.swipeOut(null);
                        }
                    }),
                    new sap.m.ToolbarSpacer(""),
                ]
            }),
            content: [this.tableSalesOrderItem]
        });
        this.navContainer.addPage(this.childListPage);
        // 子对象编辑页
        this.childEditForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_linestatus") }),
                new sap.m.Select("", {
                    width: "100%",
                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "lineStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_itemcode") }),
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_price") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "price"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_quantity") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "quantity"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_linetotal") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "lineTotal"
                }),
            ]
        });
        this.childDetailPage = new sap.m.Page("", {
            showHeader: false,
            floatingFooter: true,
            footer: new sap.m.Toolbar("", {
                content: [
                    // 编辑子对象完成
                    new sap.m.Button("", {
                        width: "100%",
                        text: ibas.i18n.prop("em_finished"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.toPage(that.childListPage, true);
                        }
                    }),
                ]
            }),
            content: [this.childEditForm]
        });
        this.navContainer.addPage(this.childDetailPage);
        // 返回值
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
                        text: ibas.i18n.prop("shell_data_new"),
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
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
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
                    new sap.m.ToolbarSpacer("", {}),
                    this.navButton = new sap.m.Button("", {
                        text: "",
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://overflow",
                        press: function (): void {
                            let popover: sap.m.Popover = new sap.m.Popover("", {
                                showHeader: false,
                                placement: sap.m.PlacementType.Bottom,
                            });
                            popover.addContent(new sap.m.Button({
                                text: ibas.i18n.prop("bo_salesorderitem"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://product",
                                press: function (): void {
                                    that.toPage(that.childListPage);
                                    popover.close();
                                }
                            }));
                            (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                            popover.openBy(that.navButton, true);
                        }
                    }),
                ]
            }),
            content: [this.navContainer]
        });
        this.toPage(this.mainPage);
        this.id = this.page.getId();
        return this.page;
    }
    toPage(page: sap.m.Page, leftToRight?: boolean): void {
        switch (page) {
            case this.mainPage:
                this.navButton.setVisible(true);
                this.currentPage = this.mainPage;
                break;
            case this.childListPage:
                this.navButton.setVisible(false);
                this.currentPage = this.childListPage;
                break;
            case this.childDetailPage:
                this.navButton.setVisible(false);
                this.currentPage = this.childDetailPage;
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
    onTouchMove(direcction: ibas.emTouchMoveDirection, event: TouchEvent): void {
        if (!ibas.objects.isNull(this.currentPage)
            && !ibas.objects.isNull(this.currentPage.getFooter())) {
            if (direcction === ibas.emTouchMoveDirection.UP) {
                this.currentPage.setShowFooter(false);
            } else if (direcction === ibas.emTouchMoveDirection.DOWN) {
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
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED
            || data.documentStatus === ibas.emDocumentStatus.CLOSED
            || data.canceled === ibas.emYesNo.YES) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            // openui5.utils.changeFormEditable(this.mainForm, false);
        }
    }
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void {
        this.mainPage.setModel(new sap.ui.model.json.JSONModel(data));
        this.mainPage.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.mainForm, data);
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