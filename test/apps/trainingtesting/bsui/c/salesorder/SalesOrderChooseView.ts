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
                    this.table = new sap.extension.table.DataTable("", {
                        enableSelectAll: false,
                        chooseType: this.chooseType,
                        visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_salesorder_docentry"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "docEntry"
                                })
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_salesorder_customercode"),
                                template: new sap.extension.m.DataLink("", {
                                    objectCode: bo.Customer.BUSINESS_OBJECT_CODE,
                                }).bindProperty("bindingValue", {
                                    path: "customerCode"
                                })
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_salesorder_customername"),
                                template: new sap.extension.m.RepositoryText("", {
                                    repository: bo.BORepositoryTrainingTesting,
                                    dataInfo: {
                                        type: bo.Customer,
                                        key: bo.Customer.PROPERTY_CODE_NAME,
                                        text: bo.Customer.PROPERTY_NAME_NAME
                                    },
                                }).bindProperty("bindingValue", {
                                    path: "customerCode",
                                })
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_salesorder_documentstatus"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(true)
                                })
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_salesorder_canceled"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(true)
                                })
                            })
                        ]
                    });
                    // 添加列表自动查询事件
                    sap.extension.table.triggerNextResults({
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
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [this.table],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_new"),
                                visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.newDataEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_choose"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.chooseDataEvent, that.table.getSelecteds());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ],
                    });
                }
                private table: sap.extension.table.Table;
                /** 显示数据 */
                showData(datas: bo.SalesOrder[]): void {
                    let model: sap.ui.model.Model = this.table.getModel(undefined);
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.table.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.table.setBusy(true);
                        this.table.setFirstVisibleRow(0);
                        this.table.setModel(null);
                    }
                }
            }
        }
    }
}
