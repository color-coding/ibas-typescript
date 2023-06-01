/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        export namespace c {
            /**
             * 视图-查询面板
             */
            export class QueryPanelView extends ibas.PanelView implements app.IQueryPanelView {
                /** 查询 */
                searchEvent: Function;
                /** 删除查询 */
                deleteQueryEvent: Function;
                /** 保存查询 */
                saveQueryEvent: Function;
                /** 添加查询条件 */
                addQueryConditionEvent: Function;
                /** 移出查询 */
                removeQueryConditionEvent: Function;
                /** 查询内容 */
                get searchContent(): string {
                    return this.content.getValue();
                }
                set searchContent(value: string) {
                    this.content.setValue(value);
                }
                /** 可配置 */
                get configurable(): boolean {
                    return this.config.getVisible();
                }
                set configurable(value: boolean) {
                    this.config.setVisible(value);
                }
                /** 可选择 */
                get selectable(): boolean {
                    return this.baseOn.getVisible();
                }
                set selectable(value: boolean) {
                    this.baseOn.setVisible(value);
                }
                /** 可见的 */
                get visible(): boolean {
                    return this.bar.getVisible();
                }
                set visible(value: boolean) {
                    this.bar.setVisible(value);
                }
                /** 查询内容 */
                get usingQuery(): string {
                    return this.baseOn.getSelectedKey();
                }
                set usingQuery(value: string) {
                    this.baseOn.setSelectedKey(value);
                }
                /** 绘制工具条视图 */
                drawBar(): any {
                    let that: this = this;
                    return this.bar = new sap.m.Toolbar("", {
                        width: "100%",
                        design: sap.m.ToolbarDesign.Auto,
                        content: [
                            this.content = new sap.m.SearchField("", {
                                search: function (): void {
                                    that.search();
                                }
                            }),
                            this.baseOn = new sap.m.Select("", {
                                width: "55%",
                                maxWidth: "55%",
                            }),
                            this.config = new sap.m.Button("", {
                                icon: "sap-icon://filter",
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.showFullViewEvent);
                                },
                            })
                        ]
                    });
                }
                /** 绘制拉动条视图 */
                drawPuller(): any {
                    let that: this = this;
                    return new sap.m.PullToRefresh("", {
                        refresh: function (event: sap.ui.base.Event): void {
                            that.fireViewEvents(that.searchEvent);
                        }
                    });
                }
                search(): void {
                    this.fireViewEvents(this.searchEvent);
                }
                private bar: sap.m.Toolbar;
                private content: sap.m.SearchField;
                private config: sap.m.Button;
                private baseOn: sap.m.Select;
                /** 显示可用查询 */
                showQueries(datas: ibas.KeyValue[]): void {
                    this.baseOn.removeAllItems();
                    for (let item of datas) {
                        this.baseOn.addItem(new sap.ui.core.Item("", {
                            key: item.key,
                            text: item.value
                        }));
                    }
                    if (this.baseOn.getItems().length > 0) {
                        this.baseOn.setSelectedKey("0");
                    }
                }
                /** 显示查询内容 */
                showQuery(data: bo.UserQuery): void {
                    this.boName = data.target;
                    this.form.setModel(new sap.ui.model.json.JSONModel(data));
                }
                protected boName: string;
                /** 显示查询条件 */
                showQueryConditions(datas: ibas.ICondition[]): void {
                    if (ibas.objects.isNull(this.table)) {
                        // 尚未初始化表格
                        if (!ibas.objects.isNull(this.boName)) {
                            let that: this = this;
                            let boRepository: bo.IBORepositoryShell = bo.repository.create();
                            boRepository.fetchBizObjectInfo({
                                user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                                boCode: this.boName,
                                onCompleted(opRslt: ibas.IOperationResult<bo.IBizObjectInfo>): void {
                                    let boInfo: bo.IBizObjectInfo = opRslt.resultObjects.firstOrDefault();
                                    if (ibas.objects.isNull(boInfo)) {
                                        that.table = that.createTable([]);
                                        that.form.addContent(that.table);
                                    } else {
                                        that.table = that.createTable(boInfo.properties);
                                        that.form.addContent(that.table);
                                    }
                                    that.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                                }
                            });
                        } else {
                            this.table = this.createTable([]);
                            this.form.addContent(this.table);
                            this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                        }
                    } else {
                        this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                }
                private table: sap.extension.table.Table;
                protected getPropertyListItem(properies: bo.IBizPropertyInfo[]): sap.ui.core.ListItem[] {
                    let items: Array<sap.ui.core.ListItem> = [];
                    items.push(new sap.ui.core.ListItem("", {
                        key: "",
                        text: ibas.i18n.prop("shell_please_chooose_data", ""),
                    }));
                    if (!ibas.objects.isNull(properies)) {
                        for (let property of properies) {
                            if (ibas.strings.isEmpty(property.editType)) {
                                continue;
                            }
                            items.push(new sap.ui.core.ListItem("", {
                                key: property.name,
                                text: property.description,
                            }));
                        }
                    }
                    return items;
                }
                private createTable(properies: bo.IBizPropertyInfo[]): sap.extension.table.Table {
                    let that: this = this;
                    let table: sap.extension.table.Table = new sap.extension.table.Table("", {
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_add"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    press: function (): void {
                                        that.fireViewEvents(that.addQueryConditionEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://less",
                                    press: function (): void {
                                        that.fireViewEvents(that.removeQueryConditionEvent, that.table.getSelecteds());
                                    }
                                })
                            ]
                        }),
                        visibleRowCount: 5,
                        enableSelectAll: false,
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_relationship"),
                                width: "8rem",
                                template: new sap.extension.m.EnumSelect("", {
                                    enumType: ibas.emConditionRelationship,
                                }).bindProperty("bindingValue", {
                                    path: "relationship",
                                    type: new sap.extension.data.ConditionRelationship()
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_bracketopen"),
                                width: "8rem",
                                template: new sap.extension.m.RepeatCharSelect("", {
                                    repeatText: "(",
                                    maxCount: 5,
                                }).bindProperty("bindingValue", {
                                    path: "bracketOpen",
                                    type: "sap.ui.model.type.Integer"
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_alias"),
                                width: "16rem",
                                template: new sap.extension.m.Select("", {
                                    items: this.getPropertyListItem(properies)
                                }).bindProperty("bindingValue", {
                                    path: "alias",
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_operation"),
                                width: "10rem",
                                template: new sap.extension.m.EnumSelect("", {
                                    enumType: ibas.emConditionOperation,
                                }).bindProperty("bindingValue", {
                                    path: "operation",
                                    type: new sap.extension.data.ConditionOperation()
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_value"),
                                width: "10rem",
                                template: new sap.extension.m.Input("", {
                                    showSuggestion: true,
                                    suggestionItems: [
                                        new sap.ui.core.Item("", {
                                        }).setText(ibas.VARIABLE_NAME_USER_ID),
                                        new sap.ui.core.Item("", {
                                        }).setText(ibas.VARIABLE_NAME_USER_CODE),
                                        new sap.ui.core.Item("", {
                                        }).setText(ibas.VARIABLE_NAME_USER_NAME),
                                        new sap.ui.core.Item("", {
                                        }).setText(ibas.VARIABLE_NAME_USER_BELONG),
                                    ]
                                }).bindProperty("bindingValue", {
                                    path: "value"
                                }),
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("shell_query_condition_bracketclose"),
                                width: "8rem",
                                template: new sap.extension.m.RepeatCharSelect("", {
                                    repeatText: ")",
                                    maxCount: 5,
                                }).bindProperty("bindingValue", {
                                    path: "bracketClose",
                                    type: "sap.ui.model.type.Integer"
                                })
                            })
                        ]
                    });
                    return table;
                }
                /** 关闭之后 */
                protected onClosed(): void {
                    super.onClosed();
                    if (this.form != null) {
                        this.form.destroy(true);
                        this.form = null;
                    }
                    if (this.table != null) {
                        this.table.destroy(true);
                        this.table = null;
                    }
                    this.boName = null;
                }
                protected form: sap.m.Dialog;
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
                            this.table
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_delete"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://create",
                                press: function (): void {
                                    that.fireViewEvents(that.deleteQueryEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://accept",
                                visible: this.configurable,
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
            }
        }
    }
}