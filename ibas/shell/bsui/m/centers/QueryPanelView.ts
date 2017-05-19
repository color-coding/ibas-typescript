/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";
import { utils } from "../../../../../openui5/typings/ibas.utils";
import { QueryPanelView as cQueryPanelView } from "../../c/centers/index";
import { IQueryPanelView } from "../../../bsapp/centers/QueryPanel";

/**
 * 视图-查询面板
 */
export class QueryPanelView extends cQueryPanelView implements IQueryPanelView {

    private properies: sys.IBOPropertyInfo[];
    private list: sap.m.List;
    /** 显示查询条件 */
    showQueryConditions(datas: ibas.ICondition[]): void {
        let that: this = this;
        if (ibas.objects.isNull(this.list)) {
            // 尚未初始化表格
            this.list = new sap.m.List("", {
                inset: true,
                mode: sap.m.ListMode.Delete,
                delete: function (oControlEvent): void {
                    that.fireViewEvents(that.removeQueryConditionEvent, oControlEvent.getParameters().listItem.getModel().getData());
                }
            });
            this.form.addContent(this.list);
            // 获取列描述
            if (!ibas.objects.isNull(this.boName)) {
                let boRepository: sys.IBORepositorySystem = sys.Factories.systemsFactory.createRepository();
                boRepository.fetchBOInfos({
                    boName: this.boName,
                    boCode: null,
                    onCompleted(opRslt: ibas.IOperationResult<sys.IBOInfo>): void {
                        let boInfo: sys.IBOInfo = opRslt.resultObjects.firstOrDefault();
                        if (ibas.objects.isNull(boInfo)) {
                            that.properies = boInfo.properties;
                        }
                        // 查询完列，回调显示数据
                        that.showQueryConditions(datas);
                    }
                });
            } else {
                // 回调显示数据
                this.showQueryConditions(datas);
            }
        } else {
            this.list.destroyItems();
            for (let data of datas) {
                this.list.addItem(new sap.m.CustomListItem("", {
                    content: [
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_relationship")
                                }),
                                new sap.m.Select("", {
                                    width: "auto",
                                    selectedKey: "{relationship}",
                                    items: utils.createComboBoxItems(ibas.emConditionRelationship)
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_bracketopen")
                                }),
                                new sap.m.Select("", {
                                    width: "auto",
                                    selectedKey: "{bracketOpen}",
                                    items: this.getCharListItem("(")
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_alias")
                                }),
                                new sap.m.Select("", {
                                    width: "auto",
                                    selectedKey: "{alias}",
                                    items: this.getPropertyListItem(this.properies)
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_operation")
                                }),
                                new sap.m.Select("", {
                                    width: "auto",
                                    selectedKey: "{operation}",
                                    items: utils.createComboBoxItems(ibas.emConditionOperation)
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_value")
                                }),
                                new sap.m.Input("", {
                                    width: "auto",
                                    value: "{value}"
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: "100px",
                                    text: ibas.i18n.prop("sys_shell_query_condition_bracketclose")
                                }),
                                new sap.m.Select("", {
                                    width: "auto",
                                    selectedKey: "{bracketClose}",
                                    items: this.getCharListItem(")")
                                })
                            ]
                        })
                    ]
                }));
            }
        }
    }

    /** 绘制工具条 */
    darwBars(): any {
        let that: this = this;
        return [
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_add"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.addQueryConditionEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_exit"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://inspect-down",
                press: function (): void {
                    that.fireViewEvents(that.closeEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_save"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://accept",
                press: function (): void {
                    that.fireViewEvents(that.saveQueryEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_delete"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.deleteQueryEvent);
                }
            }),
        ];
    }
}