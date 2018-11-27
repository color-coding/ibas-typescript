/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../c/center/index.ts" />
namespace shell {
    export namespace ui {
        export namespace m {
            /**
             * 视图-查询面板
             */
            export class QueryPanelView extends c.QueryPanelView implements app.IQueryPanelView {
                private list: sap.m.List;
                private list_template: sap.m.CustomListItem;
                /** 显示查询条件 */
                showQueryConditions(datas: ibas.ICondition[]): void {
                    let that: this = this;
                    if (ibas.objects.isNull(this.list_template)) {
                        // 尚未初始化表格
                        // 获取列描述
                        let boRepository: bo.IBORepositoryShell = bo.repository.create();
                        boRepository.fetchBOInfos({
                            boCode: this.boName,
                            onCompleted(opRslt: ibas.IOperationResult<bo.IBOInfo>): void {
                                let properies: bo.IBOPropertyInfo[] = [];
                                if (opRslt.resultObjects.length > 0) {
                                    properies = opRslt.resultObjects.firstOrDefault().properties;
                                }
                                that.list_template = new sap.m.CustomListItem("", {
                                    content: [
                                        new sap.m.VBox("", {
                                            fitContainer: true,
                                            items: [
                                                new sap.m.HBox("", {
                                                    fitContainer: true,
                                                    alignContent: sap.m.FlexAlignContent.Center,
                                                    items: [
                                                        new sap.m.VBox("", {
                                                            justifyContent: sap.m.FlexJustifyContent.Center,
                                                            fitContainer: true,
                                                            width: "14%",
                                                            items: [
                                                                new sap.m.Label("", {
                                                                    width: "100%",
                                                                    text: ibas.i18n.prop("shell_query_condition")
                                                                }),
                                                            ]
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "1%",
                                                        }),
                                                        new sap.m.VBox("", {
                                                            justifyContent: sap.m.FlexJustifyContent.Center,
                                                            fitContainer: true,
                                                            width: "70%",
                                                            items: [
                                                                new sap.m.Select("", {
                                                                    width: "100%",
                                                                    items: openui5.utils.createComboBoxItems(ibas.emConditionRelationship),
                                                                }).bindProperty("selectedKey", {
                                                                    path: "relationship",
                                                                    type: "sap.ui.model.type.Integer"
                                                                }),
                                                            ]
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "1%",
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "14%",
                                                            items: [
                                                                new sap.m.Button("", {
                                                                    type: sap.m.ButtonType.Transparent,
                                                                    width: "100%",
                                                                    icon: "sap-icon://sys-cancel",
                                                                    press: function (): void {
                                                                        let selected: any = this.getBindingContext().getObject();
                                                                        that.fireViewEvents(that.removeQueryConditionEvent, selected);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                    ]
                                                }),
                                                new sap.m.HBox("", {
                                                    fitContainer: true,
                                                    items: [
                                                        new sap.m.VBox("", {
                                                            justifyContent: sap.m.FlexJustifyContent.Center,
                                                            fitContainer: true,
                                                            width: "14%",
                                                            items: [
                                                                new sap.m.Select("", {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    items: that.getCharListItem("(")
                                                                }).bindProperty("selectedKey", {
                                                                    path: "bracketOpen",
                                                                    type: "sap.ui.model.type.Integer"
                                                                }),
                                                            ]
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "1%",
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "70%",
                                                            items: [
                                                                new sap.m.Select("", {
                                                                    width: "100%",
                                                                    items: that.getPropertyListItem(properies)
                                                                }).bindProperty("selectedKey", {
                                                                    path: "alias",
                                                                }),
                                                                new sap.m.Select("", {
                                                                    width: "100%",
                                                                    items: openui5.utils.createComboBoxItems(ibas.emConditionOperation)
                                                                }).bindProperty("selectedKey", {
                                                                    path: "operation",
                                                                    type: "sap.ui.model.type.Integer"
                                                                }),
                                                                new sap.m.Input("", {
                                                                    width: "100%",
                                                                    placeholder: ibas.i18n.prop("shell_query_condition_value"),
                                                                }).bindProperty("value", {
                                                                    path: "value"
                                                                }),
                                                            ]
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            width: "1%",
                                                        }),
                                                        new sap.m.VBox("", {
                                                            fitContainer: true,
                                                            justifyContent: sap.m.FlexJustifyContent.Center,
                                                            width: "14%",
                                                            items: [
                                                                new sap.m.Select("", {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    items: that.getCharListItem(")")
                                                                }).bindProperty("selectedKey", {
                                                                    path: "bracketClose",
                                                                    type: "sap.ui.model.type.Integer"
                                                                }),
                                                            ]
                                                        }),
                                                    ]
                                                }),
                                            ]
                                        }),
                                    ]
                                });
                                that.list.bindItems({
                                    path: "/rows",
                                    template: that.list_template,
                                });
                                that.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                            }
                        });
                        return;
                    }
                    this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                }
                /** 关闭之后 */
                onClosed(): void {
                    super.onClosed();
                    if (this.list != null) {
                        this.list.destroy(true);
                        this.list = null;
                    }
                    if (this.list_template != null) {
                        this.list_template.destroy(true);
                        this.list_template = null;
                    }
                }
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.m.List("", {
                        inset: false,
                        growing: true,
                        mode: sap.m.ListMode.None,
                        swipeDirection: sap.m.SwipeDirection.RightToLeft,
                        delete: function (event: any): void {
                            that.fireViewEvents(that.removeQueryConditionEvent, event.getParameters().listItem.getModel().getData());
                        },
                    });
                    this.form = new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Label("", {
                                    text: ibas.i18n.prop("shell_query_name"),
                                }),
                                new sap.m.Input("", {
                                }).bindProperty("value", {
                                    path: "/name"
                                }),
                                new sap.m.ToolbarSpacer("", { width: "15px" }),
                                new sap.m.RatingIndicator("", {
                                    maxValue: 5,
                                    tooltip: ibas.i18n.prop("shell_query_order"),
                                }).bindProperty("value", {
                                    path: "/order"
                                }),
                                new sap.m.ToolbarSpacer("", { width: "5px" })
                            ]
                        }),
                        content: [
                            this.list,
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_add"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://add",
                                press: function (): void {
                                    that.fireViewEvents(that.addQueryConditionEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://accept",
                                press: function (): void {
                                    that.fireViewEvents(that.saveQueryEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://inspect-down",
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    });
                    return this.form;
                }
            }
        }
    }
}