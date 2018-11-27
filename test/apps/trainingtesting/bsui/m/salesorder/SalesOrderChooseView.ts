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
             * 选择视图-销售订单
             */
            export class SalesOrderChooseView extends ibas.BOChooseView implements app.ISalesOrderChooseView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.SalesOrder;
                }
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.m.List("", {
                        inset: false,
                        growing: true,
                        growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
                        growingScrollToLoad: true,
                        mode: openui5.utils.toListMode(this.chooseType),
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
                            }),
                        }
                    });
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
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        showSubHeader: false,
                        floatingFooter: true,
                        content: [
                            this.list
                        ],
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    width: "50%",
                                    text: ibas.i18n.prop("shell_data_choose"),
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        that.fireViewEvents(that.chooseDataEvent,
                                            openui5.utils.getSelecteds<bo.SalesOrder>(that.list)
                                        );
                                    }
                                }),
                                new sap.m.Button("", {
                                    width: "50%",
                                    text: ibas.i18n.prop("shell_exit"),
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        that.fireViewEvents(that.closeEvent);
                                    }
                                }),
                            ]
                        })
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.page
                        ],
                    });
                }
                private page: sap.m.Page;
                private list: sap.m.List;
                private pullToRefresh: sap.m.PullToRefresh;
                /** 嵌入下拉条 */
                embeddedPuller(view: any): void {
                    if (view instanceof sap.m.PullToRefresh) {
                        if (!ibas.objects.isNull(this.page)) {
                            this.page.insertContent(view, 0);
                            this.pullToRefresh = view;
                        }
                    }
                }
                /** 显示数据 */
                showData(datas: bo.SalesOrder[]): void {
                    if (!ibas.objects.isNull(this.pullToRefresh) && datas.length > 0) {
                        this.pullToRefresh.destroy(true);
                        this.pullToRefresh = undefined;
                    }
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
            }
        }
    }
}
