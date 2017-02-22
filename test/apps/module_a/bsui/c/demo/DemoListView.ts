/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOListView, i18n, emDocumentStatus,
} from "../../../../../../ibas/bsbas/index";
import { IDemoListView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoListView extends BOListView implements IDemoListView {

    /** 绘制视图 */
    darw(): any {
        let that = this;
        this.form = new sap.ui.layout.form.SimpleForm("");
        this.table = new sap.ui.table.Table("", {
            visibleRowCount: 15,
            rows: "{/}",
            columns: [
                new sap.ui.table.Column("", {
                    label: i18n.prop("bo_salesorder_docentry"),
                    template: new sap.m.Text("", {
                        text: "{docEntry}"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: i18n.prop("bo_salesorder_customer"),
                    template: new sap.m.Text("", {
                        text: "{customer}"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: i18n.prop("bo_salesorder_documentstatus"),
                    template: new sap.m.Text("", {
                        text: "{documentStatus}"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: i18n.prop("bo_salesorder_canceled"),
                    template: new sap.m.Text("", {
                        text: "{canceled}"
                    })
                })
            ]
        });
        this.form.addContent(this.table);
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: i18n.prop("sys_shell_ui_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        press: function (): void {
                            that.fireViewEvents(that.newDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: i18n.prop("sys_shell_ui_data_view"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://display",
                        press: function (): void {
                            that.fireViewEvents(that.viewDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: i18n.prop("sys_shell_ui_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ]
            }),
            content: [this.form]
        });
        this.id = this.page.getId();
        return this.page;
    }
    /** 嵌入查询面板 */
    embedded(view: any): void {
        this.page.destroyHeaderContent();
        this.page.addHeaderContent(view);
        this.page.setShowHeader(true);
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.form.SimpleForm;
    private table: sap.ui.table.Table;
    /** 编辑数据，参数：目标数据 */
    editDataEvent: Function;
    /** 显示数据 */
    showData(datas: any): void {
        this.table.setModel(new sap.ui.model.json.JSONModel(datas));
    }

}