/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ISalesOrderListNewView } from "../../../bsapp/salesorder/index";

/**
 * 视图-SalesOrder
 */
export class SalesOrderListNewView extends ibas.BOListView implements ISalesOrderListNewView {
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
        this.form = new sap.ui.layout.VerticalLayout("");
        this.table = new sap.m.Table("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.SingleSelectMaster,
            selectionMode: sap.ui.table.SelectionMode.MultiToggle,
            columns: [
                new sap.m.Column("", {
                    demandPopin: true,
                    header: new sap.m.Label("", {
                        width: "12em",
                        text: ibas.i18n.prop("bo_salesorder_docentry")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorder_customercode")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorder_customername")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorder_documentstatus")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorder_canceled")
                    })
                }),
            ],
            //移动端滑动事件
            swipe: function (oEvent) {
                // if (that.table.getMode() === sap.m.ListMode.Delete)
                //     that.table.setMode(sap.m.ListMode.SingleSelectMaster);
                // else
                //     that.table.setMode(sap.m.ListMode.Delete);
            },
            swipeContent: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_view"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://display",
                        press: function (oEvent): void {
                            let parentControl = oEvent.getSource().getParent().getParent();
                            let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                            selecteds.push(parentControl.getSwipedItem().getBindingContext().getObject());
                            that.fireViewEvents(that.viewDataEvent,
                                selecteds
                            );
                            parentControl.swipeOut();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (oEvent): void {
                            let parentControl = oEvent.getSource().getParent().getParent();
                            var editBo = parentControl.getSwipedItem().getBindingContext().getObject();
                            that.fireViewEvents(that.editDataEvent,
                                editBo
                            );
                            parentControl.swipeOut();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (oEvent): void {
                            let parentControl = oEvent.getSource().getParent().getParent();
                            let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                            selecteds.push(parentControl.getSwipedItem().getBindingContext().getObject());
                            that.fireViewEvents(that.deleteDataEvent,
                                selecteds
                            );
                            parentControl.swipeOut();
                        }
                    }),
                ]
            }),
            delete: function (oEvent): void {
                var oItem = oEvent.getParameter("listItem");
                var deleteBo = oItem.getBindingContext().getObject();
                let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                selecteds.push(deleteBo);
                that.fireViewEvents(that.deleteDataEvent,
                    selecteds
                );
            }
        });
        var list_item = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.DetailAndActive,
            cells: [
                new sap.m.Text("", {
                    text: "{docEntry}"
                }),
                new sap.m.Link("", {
                    wrapping: false,
                    press(event: any): void {
                        ibas.servicesManager.runLinkService({
                            boCode: bo.Customer.BUSINESS_OBJECT_CODE,
                            linkValue: event.getSource().getText()
                        });
                    }
                }).bindProperty("text", {
                    path: "customerCode"
                }),
                new sap.m.Label("", {
                    text: "{customerName}"
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "documentStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "canceled",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emYesNo, data);
                    }
                })
            ],
            detailPress: function (oEvent): void {
                that.fireViewEvents(that.editDataEvent,
                    oEvent.getSource().getBindingContext().getObject()
                );
            }
        });
        this.table.bindItems({
            path: "/rows",
            template: list_item,
        });
        this.form.addContent(this.table);
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        press: function (): void {
                            that.fireViewEvents(that.newDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_view"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://display",
                        press: function (): void {
                            let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                            selecteds.push(that.table.getSelectedItem().getBindingContext().getObject());
                            that.fireViewEvents(that.viewDataEvent,
                                selecteds
                            );
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent,
                                that.table.getSelectedItem().getBindingContext().getObject()
                            );
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            let selecteds: ibas.List<bo.SalesOrder> = new ibas.ArrayList<bo.SalesOrder>();
                            selecteds.push(that.table.getSelectedItem().getBindingContext().getObject());
                            that.fireViewEvents(that.deleteDataEvent,
                                selecteds
                            );
                        }
                    }),
                    new sap.m.Button("", {
                        text: '行删除',
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            if (that.table.getMode() === sap.m.ListMode.Delete)
                                that.table.setMode(sap.m.ListMode.SingleSelectMaster);
                            else
                                that.table.setMode(sap.m.ListMode.Delete);
                        }
                    }),
                    new sap.m.ToolbarSpacer(""),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
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
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
                ],

            }),
            content: [this.form]
        });
        this.id = this.page.getId();
        // 添加列表自动查询事件
        utils.triggerNextResults({
            listener: this.table,
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
    /** 嵌入查询面板 */
    embedded(view: any): void {
        this.page.addHeaderContent(view);
        this.page.setShowHeader(true);
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.VerticalLayout;
    private table: sap.m.Table;
    /** 显示数据 */
    showData(datas: bo.SalesOrder[]): void {
        let done: boolean = false;
        let model: sap.ui.model.Model = this.table.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: bo.SalesOrder[] = (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas instanceof Array) {
                for (let item of datas) {
                    hDatas.push(item);
                }
                model.refresh(false);
                done = true;
            }
        }
        if (!done) {
            // 没有显示数据
            this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        }
        this.table.setBusy(false);
    }
    private lastCriteria: ibas.ICriteria;
    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);
        this.lastCriteria = criteria;
        // 清除历史数据
        this.table.setBusy(true);
        this.table.setSelectedItemById("0", true);
        this.table.setModel(null);
    }
    /** 获取选择的数据 */
    getSelecteds(): bo.SalesOrder[] {
        return null;
    }
}
