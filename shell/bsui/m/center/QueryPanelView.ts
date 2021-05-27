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
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.form = new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Title("", {
                                    text: ibas.i18n.prop("shell_query_name"),
                                }).addStyleClass("sapUiSmallMarginBegin"),
                                new sap.m.Input("", {
                                }).addStyleClass("sapUiSmallMarginBegin").bindProperty("value", {
                                    path: "/name"
                                }),
                                new sap.m.RatingIndicator("", {
                                    maxValue: 5,
                                    tooltip: ibas.i18n.prop("shell_query_order"),
                                }).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginEnd").bindProperty("value", {
                                    path: "/order"
                                }),
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
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private list: sap.m.List;
                /** 显示查询条件 */
                showQueryConditions(datas: ibas.ICondition[]): void {
                    let that: this = this;
                    if (ibas.objects.isNull(this.list)) {
                        // 尚未初始化表格
                        // 获取列描述
                        let boRepository: bo.IBORepositoryShell = bo.repository.create();
                        boRepository.fetchBizObjectInfo({
                            user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                            boCode: this.boName,
                            onCompleted(opRslt: ibas.IOperationResult<bo.IBizObjectInfo>): void {
                                let properies: bo.IBizPropertyInfo[] = [];
                                if (opRslt.resultObjects.length > 0) {
                                    properies = opRslt.resultObjects.firstOrDefault().properties;
                                }
                                that.form.addContent(that.list = new sap.m.List("", {
                                    inset: false,
                                    growing: true,
                                    mode: sap.m.ListMode.None,
                                    swipeDirection: sap.m.SwipeDirection.RightToLeft,
                                    delete: function (event: any): void {
                                        that.fireViewEvents(that.removeQueryConditionEvent, event.getParameters().listItem.getModel().getData());
                                    },
                                    items: {
                                        path: "/rows",
                                        template: new sap.m.CustomListItem("", {
                                            content: [
                                                new sap.m.Panel("", {
                                                    expandable: true,
                                                    expanded: true,
                                                    headerToolbar:
                                                        new sap.m.Toolbar("", {
                                                            content: [
                                                                new sap.m.Title("", {
                                                                    text: ibas.i18n.prop("shell_query_condition")
                                                                }),
                                                                new sap.extension.m.EnumSelect("", {
                                                                    width: "100%",
                                                                    enumType: ibas.emConditionRelationship,
                                                                }).bindProperty("bindingValue", {
                                                                    path: "relationship",
                                                                    type: new sap.extension.data.ConditionRelationship(),
                                                                }),
                                                                new sap.m.ToolbarSpacer(),
                                                                new sap.m.Button("", {
                                                                    type: sap.m.ButtonType.Transparent,
                                                                    icon: "sap-icon://sys-cancel",
                                                                    press: function (this: sap.m.Button): void {
                                                                        let selected: any = this.getBindingContext().getObject();
                                                                        that.fireViewEvents(that.removeQueryConditionEvent, selected);
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                    content: [
                                                        new sap.m.VBox("", {
                                                            alignItems: sap.m.FlexAlignItems.Stretch,
                                                            alignContent: sap.m.FlexAlignContent.Stretch,
                                                            justifyContent: sap.m.FlexJustifyContent.Inherit,
                                                            items: [
                                                                new sap.m.HBox("", {
                                                                    items: [
                                                                        new sap.extension.m.RepeatCharSelect("", {
                                                                            width: "100%",
                                                                            repeatText: "(",
                                                                            maxCount: 5,
                                                                            layoutData: new sap.m.FlexItemData("", {
                                                                                growFactor: 1,
                                                                            })
                                                                        }).bindProperty("selectedKey", {
                                                                            path: "bracketOpen",
                                                                            type: "sap.ui.model.type.Integer"
                                                                        }),
                                                                        new sap.extension.m.Select("", {
                                                                            width: "100%",
                                                                            items: that.getPropertyListItem(properies),
                                                                            layoutData: new sap.m.FlexItemData("", {
                                                                                growFactor: 2,
                                                                            })
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "alias",
                                                                        }),
                                                                    ]
                                                                }),
                                                                new sap.m.HBox("", {
                                                                    items: [
                                                                        new sap.extension.m.EnumSelect("", {
                                                                            width: "100%",
                                                                            textAlign: sap.ui.core.TextAlign.Center,
                                                                            enumType: ibas.emConditionOperation,
                                                                            layoutData: new sap.m.FlexItemData("", {
                                                                                growFactor: 3,
                                                                            })
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "operation",
                                                                            type: new sap.extension.data.ConditionOperation(),
                                                                        }),
                                                                    ]
                                                                }),
                                                                new sap.m.HBox("", {
                                                                    items: [
                                                                        new sap.extension.m.Input("", {
                                                                            width: "100%",
                                                                            placeholder: ibas.i18n.prop("shell_query_condition_value"),
                                                                            layoutData: new sap.m.FlexItemData("", {
                                                                                growFactor: 2,
                                                                            })
                                                                        }).bindProperty("bindingValue", {
                                                                            path: "value",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                        }),
                                                                        new sap.extension.m.RepeatCharSelect("", {
                                                                            width: "100%",
                                                                            repeatText: ")",
                                                                            maxCount: 5,
                                                                            layoutData: new sap.m.FlexItemData("", {
                                                                                growFactor: 1,
                                                                            })
                                                                        }).bindProperty("selectedKey", {
                                                                            path: "bracketClose",
                                                                            type: "sap.ui.model.type.Integer"
                                                                        }),
                                                                    ]
                                                                }),
                                                            ]
                                                        }),
                                                    ],
                                                }),
                                            ]
                                        }),
                                    }
                                }));
                                that.showQueryConditions(datas);
                            }
                        });
                    } else {
                        this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    }
                }
                onClosed(): void {
                    this.list.destroy();
                    this.list = null;
                    super.onClosed();
                }
            }
        }
    }
}