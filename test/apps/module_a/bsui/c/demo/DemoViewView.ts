/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOViewView, i18n
} from "../../../../../../ibas/bsbas/index";
import { SalesOrder, SalesOrderItem } from "../../../borep/bo/index";
import { IDemoViewView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoViewView extends BOViewView implements IDemoViewView {

    /** 绘制视图 */
    darw(): any {
        let that = this;
        let form = new sap.ui.layout.form.SimpleForm("", {
            toolbar: new sap.m.Toolbar("", {
                content: [
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
            content: [
                new sap.ui.core.Title("", { text: "Customer" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_customer") }),
                new sap.m.Text("", { text: "{customer}" }),
                new sap.ui.core.Title("", { text: "Document" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_docentry") }),
                new sap.m.Text("", { text: "{docEntry}" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_documentstatus") }),
                new sap.m.Text("", { text: "{documentStatus}" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_canceled") }),
                new sap.m.Text("", { text: "{canceled}" })
            ]
        });
        form.addContent(new sap.ui.core.Title("", { text: "Items" }));
        this.table = new sap.m.Table("", {
            columns: [
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_lineid")
                    }),
                    template: new sap.m.Text("", {
                        text: "{lineId}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_linestatus")
                    }),
                    template: new sap.m.Text("", {
                        text: "{lineStatus}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_itemcode")
                    }),
                    template: new sap.m.Text("", {
                        text: "{itemCode}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_price")
                    }),
                    template: new sap.m.Text("", {
                        text: "{Price}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_quantity")
                    }),
                    template: new sap.m.Text("", {
                        text: "{Quantity}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_linetotal")
                    }),
                    template: new sap.m.Text("", {
                        text: "{lineTotal}"
                    })
                })
            ]
        });
        form.addContent(this.table);
        this.id = form.getId();
        return form;
    }
    private table: sap.m.Table;

    /** 显示数据 */
    showSalesOrder(data: SalesOrder): void { }
    /** 显示数据 */
    showSalesOrderItems(datas: SalesOrderItem[]): void { }
}