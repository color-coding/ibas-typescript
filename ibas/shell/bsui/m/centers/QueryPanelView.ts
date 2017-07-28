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
                inset: false,
                growing: true,
                mode: sap.m.ListMode.Delete,
                swipeDirection: sap.m.SwipeDirection.LeftToRight,
                delete: function (event: any): void {
                    that.fireViewEvents(that.removeQueryConditionEvent, event.getParameters().listItem.getModel().getData());
                },
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
                        if (!ibas.objects.isNull(boInfo)) {
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
            let labWidth: string = "90px";
            let valWidth: string = "180px";
            for (let data of datas) {
                let listItem: sap.m.CustomListItem = new sap.m.CustomListItem("", {
                    content: [
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_relationship")
                                }),
                                new sap.m.Select("", {
                                    width: valWidth,
                                    items: utils.createComboBoxItems(ibas.emConditionRelationship),
                                }).bindProperty("selectedKey", {
                                    path: "/relationship",
                                    type: "sap.ui.model.type.Integer"
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_bracketopen")
                                }),
                                new sap.m.Select("", {
                                    width: valWidth,
                                    items: this.getCharListItem("(")
                                }).bindProperty("selectedKey", {
                                    path: "/bracketOpen",
                                    type: "sap.ui.model.type.Integer"
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_alias")
                                }),
                                new sap.m.Select("", {
                                    width: valWidth,
                                    items: this.getPropertyListItem(this.properies)
                                }).bindProperty("selectedKey", {
                                    path: "/alias",
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_operation")
                                }),
                                new sap.m.Select("", {
                                    width: valWidth,
                                    items: utils.createComboBoxItems(ibas.emConditionOperation)
                                }).bindProperty("selectedKey", {
                                    path: "/operation",
                                    type: "sap.ui.model.type.Integer"
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_value")
                                }),
                                new sap.m.Input("", {
                                    width: valWidth,
                                }).bindProperty("value", {
                                    path: "/value"
                                }),
                            ]
                        }),
                        new sap.m.HBox("", {
                            items: [
                                new sap.m.Label("", {
                                    width: labWidth,
                                    text: ibas.i18n.prop("sys_shell_query_condition_bracketclose")
                                }),
                                new sap.m.Select("", {
                                    width: valWidth,
                                    items: this.getCharListItem(")")
                                }).bindProperty("selectedKey", {
                                    path: "/bracketClose",
                                    type: "sap.ui.model.type.Integer"
                                }),
                            ]
                        })
                    ]
                });
                listItem.setModel(new sap.ui.model.json.JSONModel(data));
                this.list.addItem(listItem);
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
    /** 绘制视图 */
    darw(): any {
        if (this.form != null) {
            this.form.destroy(true);
            this.form = null;
        }
        if (this.list != null) {
            this.list.destroy(true);
            this.list = null;
        }
        this.boName = null;
        let that: this = this;
        this.form = new sap.ui.layout.VerticalLayout("", {
            width: "100%",
            content: [
                new sap.m.Toolbar("", {
                    content: [
                        new sap.m.Label("", {
                            text: ibas.i18n.prop("sys_shell_query_name"),
                        }),
                        new sap.m.Input("", {
                        }).bindProperty("value", {
                            path: "/name"
                        }),
                        new sap.m.ToolbarSpacer("", { width: "15px" }),
                        new sap.m.RatingIndicator("", {
                            maxValue: 5,
                            tooltip: ibas.i18n.prop("sys_shell_query_order"),
                        }).bindProperty("value", {
                            path: "/order"
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