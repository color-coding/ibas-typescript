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
import { ISalesOrderListView } from "../../../bsapp/salesorder/index";

/**
 * 视图-SalesOrder
 */
export class SalesOrderListView extends ibas.BOListView implements ISalesOrderListView {
    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.SalesOrder;
    }
    /** 编辑数据，参数：目标数据 */
    editDataEvent: Function;
    /** 删除数据事件，参数：删除对象集合 */
    deleteDataEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.list = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.None,
            swipeDirection: sap.m.SwipeDirection.RightToLeft,
            swipeContent: new sap.m.FlexBox("", {
                height: "100%",
                alignItems: sap.m.FlexAlignItems.Start,
                justifyContent: sap.m.FlexJustifyContent.End,
                items: [
                    new sap.m.SegmentedButton("", {
                        width: "9rem",
                        items: [
                            new sap.m.SegmentedButtonItem("", {
                                width: "3rem",
                                icon: "sap-icon://action",
                                press: function (event: any): void {
                                    that.page.setShowFooter(true);
                                    that.fireViewEvents(that.callServicesEvent, {
                                        displayServices(services: ibas.IServiceAgent[]): void {
                                            if (ibas.objects.isNull(services) || services.length === 0) {
                                                return;
                                            }
                                            let popover: sap.m.Popover = new sap.m.Popover("", {
                                                showHeader: false,
                                                placement: sap.m.PlacementType.Bottom,
                                            });
                                            for (let service of services) {
                                                popover.addContent(new sap.m.Button({
                                                    text: ibas.i18n.prop(service.name),
                                                    type: sap.m.ButtonType.Transparent,
                                                    icon: service.icon,
                                                    press: function (): void {
                                                        service.run();
                                                        popover.close();
                                                        that.list.swipeOut(null);
                                                    }
                                                }));
                                            }
                                            popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                            popover.openBy(event.getSource(), true);
                                        }
                                    });
                                }
                            }),
                            new sap.m.SegmentedButtonItem("", {
                                width: "3rem",
                                icon: "sap-icon://delete",
                                press(oEvent: any): void {
                                    that.page.setShowFooter(true);
                                    let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                                    selecteds.push(that.list.getSwipedItem().getBindingContext().getObject());
                                    that.fireViewEvents(that.deleteDataEvent,
                                        selecteds
                                    );
                                }
                            }),
                            new sap.m.SegmentedButtonItem("", {
                                width: "3rem",
                                icon: "sap-icon://edit",
                                press(oEvent: any): void {
                                    that.page.setShowFooter(true);
                                    var editBo: bo.SalesOrder = that.list.getSwipedItem()
                                        .getBindingContext().getObject();
                                    that.fireViewEvents(that.editDataEvent,
                                        editBo
                                    );
                                }
                            })
                        ]
                    }),
                ]
            }).addStyleClass("sapUiSmallMarginTop"),
            swipe: function (event: sap.ui.base.Event): void {
                that.page.setShowFooter(true);
            },
            items: {
                path: "/rows",
                template: new sap.m.ObjectListItem("", {
                    title: {
                        path: "docEntry",
                        formatter(data: any): any {
                            return ibas.strings.format("# {0}", data);
                        }
                    },
                    firstStatus: new sap.m.ObjectStatus("", {
                        text: {
                            path: "documentStatus",
                            formatter(data: any): any {
                                return ibas.enums.describe(ibas.emDocumentStatus, data);
                            }
                        }
                    }),
                    secondStatus: new sap.m.ObjectStatus("", {
                        text: {
                            path: "approvalStatus",
                            formatter(data: any): any {
                                return ibas.enums.describe(ibas.emApprovalStatus, data);
                            }
                        }
                    }),
                    attributes: [
                        new sap.m.ObjectAttribute("", {
                            text: {
                                parts: [
                                    {
                                        path: "customerName"
                                    },
                                    {
                                        path: "customerCode",
                                        formatter: function (data: any): any {
                                            if (ibas.strings.isEmpty(data)) {
                                                return "";
                                            }
                                            return ibas.strings.format(" ({0})", data);
                                        }
                                    }
                                ]
                            }
                        }),
                        new sap.m.ObjectAttribute("", {
                            text: {
                                path: "documentDate",
                                type: new sap.ui.model.type.Date("", {
                                    pattern: "yyyy-MM-dd",
                                })
                            }
                        }),
                        new sap.m.ObjectAttribute("", {
                            title: ibas.i18n.prop("bo_salesorder_documenttotal"),
                            text: {
                                parts: [
                                    { path: "documentTotal" },
                                    { path: "documentCurrency" }
                                ]
                            }
                        })
                    ]
                })
            }
        });
        this.pullToRefresh = new sap.m.PullToRefresh("", {
            refresh: function (event: sap.ui.base.Event): void {
                that.fireViewEvents(that.fetchDataEvent);
            }
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            showSubHeader: false,
            floatingFooter: true,
            content: [
                this.pullToRefresh,
                this.list
            ],
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        width: "100%",
                        text: ibas.i18n.prop("shell_data_new"),
                        press: function (): void {
                            that.fireViewEvents(that.newDataEvent);
                        }
                    })
                ]
            })
        });
        this.id = this.page.getId();
        // 添加列表自动查询事件
        openui5.utils.triggerNextResults({
            listener: this.list,
            next(data: any): void {
                if (ibas.objects.isNull(that.lastCriteria)) {
                    return;
                }
                let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                if (ibas.objects.isNull(criteria)) {
                    return;
                }
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                that.fireViewEvents(that.fetchDataEvent, criteria);
            }
        });
        return this.page;
    }
    private page: sap.m.Page;
    private list: sap.m.List;
    private pullToRefresh: sap.m.PullToRefresh;
    /** 显示数据 */
    showData(datas: bo.SalesOrder[]): void {
        this.pullToRefresh.hide();
        let done: boolean = false;
        let model: sap.ui.model.Model = this.list.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: any = (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas.rows instanceof Array) {
                for (let item of datas) {
                    hDatas.rows.push(item);
                }
                model.refresh(false);
                done = true;
            }
        }
        if (!done) {
            // 没有显示数据
            this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        }
        this.list.setBusy(false);
    }

    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);
        // 清除历史数据
        if (this.isDisplayed) {
            this.list.setBusy(true);
            this.list.setModel(null);
        }
    }
    /** 获取选择的数据 */
    getSelecteds(): bo.SalesOrder[] {
        let result: bo.SalesOrder[] = [];
        if (!ibas.objects.isNull(this.list.getSwipedItem())) {
            result.push(this.list.getSwipedItem().getBindingContext().getObject());
        }
        return result;
    }
    /** 手指触控滑动 */
    onTouchMove(direcction: ibas.emTouchMoveDirection, event: TouchEvent): void {
        if (direcction === ibas.emTouchMoveDirection.UP) {
            this.page.setShowFooter(false);
        } else if (direcction === ibas.emTouchMoveDirection.DOWN) {
            this.page.setShowFooter(true);
        }
    }
}
