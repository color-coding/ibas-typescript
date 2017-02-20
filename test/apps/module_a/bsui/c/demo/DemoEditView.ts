/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOEditView, i18n
} from "../../../../../../ibas/bsbas/index";
import { SalesOrder, SalesOrderItem } from "../../../borep/bo/index";
import { IDemoEditView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoEditView extends BOEditView implements IDemoEditView {

    /** 选择销售订单事件 */
    chooseSalesOrderEvent: Function;
    /** 选择销售订单行事件 */
    chooseSalesOrderItemEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that = this;
        let form = new sap.ui.layout.form.SimpleForm("", {
            toolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: i18n.prop("sys_shell_ui_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    })
                ]
            }),
            content: [
                new sap.ui.core.Title("", { text: "Customer" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_customer") }),
                new sap.m.Input("", {
                    value: "{customer}",
                    showValueHelp: true,
                    valueHelpRequest: function () {
                        that.fireViewEvents(that.chooseSalesOrderEvent);
                    }
                }),
                new sap.ui.core.Title("", { text: "Document" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_docentry") }),
                new sap.m.Input("", { value: "{docEntry}" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_documentstatus") }),
                new sap.m.Input("", { value: "{documentStatus}" }),
                new sap.m.Label("", { text: i18n.prop("bo_salesorder_canceled") }),
                new sap.m.Input("", { value: "{canceled}" })
            ]
        });
        form.addContent(new sap.ui.core.Title("", { text: i18n.prop("bo_salesorderitem") }));
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
                    template: new sap.m.Input("", {
                        value: "{itemCode}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_price")
                    }),
                    template: new sap.m.Input("", {
                        value: "{Price}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_quantity")
                    }),
                    template: new sap.m.Input("", {
                        value: "{Quantity}"
                    })
                }),
                new sap.m.Column({
                    header: new sap.m.Label("", {
                        text: i18n.prop("bo_salesorderitem_linetotal")
                    }),
                    template: new sap.m.Input("", {
                        value: "{lineTotal}"
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