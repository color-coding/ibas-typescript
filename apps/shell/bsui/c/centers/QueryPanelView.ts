/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as ibas from "../../../../../ibas/index";
import * as sys from "../../../../../ibas/bsbas/systems/index";
import { utils } from "../../../../../openui5/typings/ibas.utils";
import { IQueryPanelView } from "../../../bsapp/centers/QueryPanel";
import { UserQuery } from "../../../borep/bo/Systems";

/**
 * 视图-查询面板
 */
export class QueryPanelView extends ibas.BOPanelView implements IQueryPanelView {
    /** 绘制工具条视图 */
    darwBar(): any {
        if (ibas.object.isNull(this.bar)) {
            let that: this = this;
            this.search = new sap.m.SearchField("", {
                search: function (): void {
                    that.fireViewEvents(that.searchEvent);
                }
            });
            this.baseOn = new sap.m.ComboBox("", {
                placeholder: ibas.i18n.prop("sys_shell_ui_base_on_criteria"),
                maxWidth: "40%"
            });
            this.config = new sap.m.Button("", {
                icon: "sap-icon://filter",
                type: sap.m.ButtonType.Transparent,
                press: function (): void {
                    that.fireViewEvents(that.showFullViewEvent);
                }
            });
            this.bar = new sap.m.Toolbar("", {
                width: "100%",
                design: sap.m.ToolbarDesign.Auto,
                content: [
                    this.search,
                    this.baseOn,
                    this.config
                ]
            });
        }
        return this.bar;
    }
    private bar: sap.m.Toolbar;
    private search: sap.m.SearchField;
    private config: sap.m.Button;
    private baseOn: sap.m.ComboBox;
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
        return this.search.getValue();
    }
    set searchContent(value: string) {
        this.search.setValue(value);
    }
    /** 查询内容 */
    get usingQuery(): string {
        return this.baseOn.getSelectedKey();
    }
    set usingQuery(value: string) {
        this.baseOn.setSelectedKey(value);
    }
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
    showQuery(data: UserQuery): void {
        this.boName = data.target;
        this.form.setModel(new sap.ui.model.json.JSONModel(data));
    }
    private boName: string;
    /** 显示查询条件 */
    showQueryConditions(datas: ibas.ICondition[]): void {
        if (ibas.object.isNull(this.table)) {
            // 尚未初始化表格
            if (!ibas.object.isNull(this.boName)) {
                let that = this;
                let boRepository: sys.IBORepositorySystem = sys.Factories.systemsFactory.createRepository();
                boRepository.fetchBOInfos({
                    boName: this.boName,
                    boCode: null,
                    onCompleted(opRslt: ibas.IOperationResult<sys.IBOInfo>): void {
                        let boInfo: sys.IBOInfo = opRslt.resultObjects.firstOrDefault();
                        if (ibas.object.isNull(boInfo)) {
                            that.createTable([]);
                        } else {
                            that.createTable(boInfo.properties);
                        }
                        this.table.setModel(new sap.ui.model.json.JSONModel(datas));
                    }
                });
            } else {
                this.createTable([]);
                this.table.setModel(new sap.ui.model.json.JSONModel(datas));
            }
        } else {
            this.table.setModel(new sap.ui.model.json.JSONModel(datas));
        }
    }
    /** 绘制工具条 */
    darwBars(): any {
        let that = this;
        return [
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_ui_data_delete"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.deleteQueryEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_ui_data_save"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://accept",
                press: function (): void {
                    that.fireViewEvents(that.saveQueryEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_ui_exit"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://inspect-down",
                press: function (): void {
                    that.fireViewEvents(that.closeEvent);
                }
            }),
        ];
    }
    private getCharListItem(char: string): sap.ui.core.ListItem[] {
        // 获取重复的字符
        let count: number = 4;
        let items: Array<sap.ui.core.ListItem> = [];
        items.push(new sap.ui.core.ListItem("", {
            key: 0,
            text: "",
        }));
        let vChar: string = char;
        for (let i: number = 1; i < count; i++) {
            items.push(new sap.ui.core.ListItem("", {
                key: i,
                text: vChar,
            }));
            vChar = vChar + char;
        }
        return items;
    }
    private table: sap.ui.table.Table;
    private getPropertyListItem(properies: sys.IBOPropertyInfo[]): sap.ui.core.ListItem[] {
        let items: Array<sap.ui.core.ListItem> = [];
        for (let property of properies) {
            items.push(new sap.ui.core.ListItem("", {
                key: property.property,
                text: property.description,
            }));
        }
        return items;
    }
    private createTable(properies: sys.IBOPropertyInfo[]): void {
        let that = this;
        this.table = new sap.ui.table.Table("", {
            extension: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_ui_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        press: function (): void {
                            that.fireViewEvents(that.addQueryConditionEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_ui_data_remove"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://less",
                        press: function (): void {
                            let selected: any = utils.getTableSelecteds(that.table).firstOrDefault();
                            that.fireViewEvents(that.removeQueryConditionEvent, selected);
                        }
                    })
                ]
            }),
            visibleRowCount: 5,
            minAutoRowCount: 5,
            enableSelectAll: false,
            rows: "{/}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_relationship"),
                    template: new sap.m.ComboBox("", {
                        selectedKey: "{relationship}",
                        items: utils.createComboBoxItems(ibas.emConditionRelationship)
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_bracketopen"),
                    template: new sap.m.ComboBox("", {
                        selectedKey: "{bracketOpen}",
                        items: this.getCharListItem("(")
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_alias"),
                    template: new sap.m.ComboBox("", {
                        selectedKey: "{alias}",
                        items: this.getPropertyListItem(properies)
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_operation"),
                    template: new sap.m.ComboBox("", {
                        selectedKey: "{operation}",
                        items: utils.createComboBoxItems(ibas.emConditionOperation)
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_value"),
                    template: new sap.m.Input("", {
                        value: "{value}"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("sys_shell_ui_query_condition_bracketclose"),
                    template: new sap.m.ComboBox("", {
                        selectedKey: "{bracketClose}",
                        items: this.getCharListItem(")")
                    })
                })
            ]
        });
        this.form.addContent(this.table);
    }
    private form: sap.ui.layout.VerticalLayout;
    /** 绘制视图 */
    darw(): any {
        if (this.form != null) {
            this.form.destroy(true);
            this.form = null;
        }
        if (this.table != null) {
            this.table.destroy(true);
            this.table = null;
        }
        this.boName = null;
        let that = this;
        this.form = new sap.ui.layout.VerticalLayout("", {
            content: [
                new sap.m.Toolbar("", {
                    content: [
                        new sap.m.Label("", {
                            text: ibas.i18n.prop("sys_shell_ui_query_name"),
                        }),
                        new sap.m.Input("", {
                            value: "{/name}"
                        }),
                        new sap.m.ToolbarSpacer("", { width: "15px" }),
                        new sap.m.RatingIndicator("", {
                            maxValue: 5,
                            tooltip: ibas.i18n.prop("sys_shell_ui_query_order"),
                            value: "{/order}"
                        }),
                        new sap.m.ToolbarSpacer("", { width: "5px" })
                    ]
                })
            ]
        });
        this.id = this.form.getId();
        return this.form;
    }
}