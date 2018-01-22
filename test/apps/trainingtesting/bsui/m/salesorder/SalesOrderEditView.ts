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
        // 主表页面
        this.salesOrderForm = new sap.ui.layout.form.SimpleForm("", {
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documenttotal") }),
                new sap.m.Input("", {
                    width: "200px",
                    type: sap.m.InputType.Number,
                    value: {
                        path: "documentTotal",
                    },
                    description: "RMB"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_title_time") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    dateValue: {
                        path: "documentDate",
                        type: new sap.ui.model.type.Date("", {
                            pattern: "yyyy-MM-dd",
                        })
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_postingdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    dateValue: {
                        path: "postingDate",
                        type: new sap.ui.model.type.Date("", {
                            pattern: "yyyy-MM-dd",
                        })
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_deliverydate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    dateValue: {
                        path: "deliveryDate",
                        type: new sap.ui.model.type.Date("", {
                            pattern: "yyyy-MM-dd",
                        })
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
        });
        this.salesOrderPage = new sap.m.Page("", {
            showHeader: false,
            showfooter: false,
            content: [this.salesOrderForm]
        });
        this.navContainer.addPage(this.salesOrderPage);
        // 子项列表页
        this.salesOrderItemList = new sap.m.List("", {
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
                                width: "3rem",
                                icon: "sap-icon://delete",
                                press(oEvent: any): void {
                                    var deleteBo: bo.SalesOrderItem =
                                        that.salesOrderItemList.getSwipedItem().getBindingContext().getObject();
                                    that.fireViewEvents(that.removeSalesOrderItemEvent,
                                        deleteBo
                                    );
                                    that.salesOrderItemList.swipeOut(null);
                                }
                            }),
                            new sap.m.SegmentedButtonItem("", {
                                width: "3rem",
                                icon: "sap-icon://edit",
                                press(oEvent: any): void {
                                    var editBo: bo.SalesOrderItem =
                                        that.salesOrderItemList.getSwipedItem().getBindingContext().getObject();
                                    that.salesOrderItemEditForm.setModel(new sap.ui.model.json.JSONModel(editBo));
                                    that.salesOrderItemEditForm.bindObject("/");
                                    that.toPage(that.salesOrderItemEditPage);
                                    that.salesOrderItemList.swipeOut(null);
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
                    attributes: [
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
                            },
                            type: sap.ui.model.type.Integer,
                        })
                    ]
                }),
            }
        });
        this.salesOrderItemListPage = new sap.m.Page("", {
            showHeader: false,
            floatingFooter: true,
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_back"),
                        width: "50%",
                        press: function (): void {
                            that.toPage(that.salesOrderPage, true);
                            that.salesOrderItemList.swipeOut(null);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_new"),
                        width: "50%",
                        press: function (): void {
                            that.fireViewEvents(that.addSalesOrderItemEvent);
                            let datas: any = (<any>that.salesOrderItemList.getModel()).getData().rows;
                            if (datas.length > 0) {
                                let newItem: bo.SalesOrderItem = datas[datas.length - 1];
                                if (!ibas.objects.isNull(newItem)) {
                                    that.salesOrderItemEditForm.setModel(new sap.ui.model.json.JSONModel(newItem));
                                    that.salesOrderItemEditForm.bindObject("/");
                                    that.toPage(that.salesOrderItemEditPage);
                                }
                            }
                            that.salesOrderItemList.swipeOut(null);
                        }
                    }),
                ]
            }),
            content: [this.salesOrderItemList]
        });
        this.navContainer.addPage(this.salesOrderItemListPage);
        // 子对象编辑页
        this.salesOrderItemEditForm = new sap.ui.layout.form.SimpleForm("", {
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_price") }),
                new sap.m.Input("", {
                    width: "100%",
                    value: {
                        path: "price"
                    },
                    type: sap.m.InputType.Number
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_quantity") }),
                new sap.m.Input("", {
                    width: "100%",
                    value: {
                        path: "quantity"
                    },
                    type: sap.m.InputType.Number
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorderitem_linetotal") }),
                new sap.m.Input("", {
                    width: "100%",
                    value: {
                        path: "lineTotal"
                    },
                    type: sap.m.InputType.Number,
                }),
            ]
        });
        this.salesOrderItemEditPage = new sap.m.Page("", {
            showHeader: false,
            floatingFooter: true,
            footer: new sap.m.Toolbar("", {
                content: [
                    // 编辑子对象完成
                    new sap.m.Button("", {
                        width: "100%",
                        text: ibas.i18n.prop("em_finished"),
                        type: sap.m.ButtonType.Transparent,
                        press: function (): void {
                            that.toPage(that.salesOrderItemListPage, true);
                        }
                    }),
                ]
            }),
            content: [this.salesOrderItemEditForm]
        });
        this.navContainer.addPage(this.salesOrderItemEditPage);
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
                                    that.toPage(that.salesOrderItemListPage);
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
        this.toPage(this.salesOrderPage);
        this.id = this.page.getId();
        return this.page;
    }

    private page: sap.m.Page;
    private salesOrderForm: sap.ui.layout.form.SimpleForm;
    private salesOrderPage: sap.m.Page;
    private salesOrderItemList: sap.m.List;
    private salesOrderItemListPage: sap.m.Page;
    private salesOrderItemEditForm: sap.ui.layout.form.SimpleForm;
    private salesOrderItemEditPage: sap.m.Page;
    private currentPage: sap.m.Page;
    private navContainer: sap.m.NavContainer;
    private navButton: sap.m.Button;
    toPage(page: sap.m.Page, leftToRight?: boolean): void {
        switch (page) {
            case this.salesOrderPage:
                this.navButton.setVisible(true);
                this.currentPage = this.salesOrderPage;
                break;
            case this.salesOrderItemListPage:
                this.navButton.setVisible(false);
                this.currentPage = this.salesOrderItemListPage;
                break;
            case this.salesOrderItemEditPage:
                this.navButton.setVisible(false);
                this.currentPage = this.salesOrderItemEditPage;
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
            // openui5.utils.changeFormEditable(this.salesOrderForm, false);
        }
    }
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void {
        this.salesOrderPage.setModel(new sap.ui.model.json.JSONModel(data));
        this.salesOrderPage.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.salesOrderForm, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
        this.salesOrderItemList.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.salesOrderItemList, datas);
    }

}