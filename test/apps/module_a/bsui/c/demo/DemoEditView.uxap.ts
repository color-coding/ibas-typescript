/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOEditView, i18n, emDocumentStatus, emYesNo
} from "../../../../../../ibas/bsbas/index";
import { utils } from "../../../../../../openui5/typings/ibas.utils";
import { SalesOrder, SalesOrderItem } from "../../../borep/bo/index";
import { IDemoEditView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoEditView extends BOEditView implements IDemoEditView {

    /** 添加销售订单事件 */
    addSalesOrderItemEvent: Function;
    /** 删除销售订单行事件 */
    removeSalesOrderItemEvent: Function;
    /** 选择销售订单事件 */
    chooseSalesOrderEvent: Function;
    /** 选择销售订单行事件 */
    chooseSalesOrderItemEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that = this;
        this.form = new sap.uxap.ObjectPageLayout("", {
            headerTitle: new sap.uxap.ObjectPageHeader("", {
                isObjectTitleAlwaysVisible: false,
                isObjectSubtitleAlwaysVisible: false,
                isActionAreaAlwaysVisible: false,
                navigationBar: new sap.m.Bar("", {
                    contentLeft: [
                        new sap.m.Button("", {
                            text: i18n.prop("sys_shell_ui_data_save"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://save",
                            press: function (): void {
                                that.fireViewEvents(that.saveDataEvent);
                            }
                        })
                    ]
                })
            }),
            headerContent: [new sap.ui.layout.form.SimpleForm("", {
                content: [
                    new sap.ui.core.Title("", { text: "Customer" }),
                    new sap.m.Label("", { text: i18n.prop("bo_salesorder_customer") }),
                    new sap.m.Input("", {
                        value: "{/customer}",
                        showValueHelp: true,
                        valueHelpRequest: function () {
                            that.fireViewEvents(that.chooseSalesOrderEvent);
                        }
                    }),
                    new sap.ui.core.Title("", { text: "Document" }),
                    new sap.m.Label("", { text: i18n.prop("bo_salesorder_docentry") }),
                    new sap.m.Input("", { value: "{/docEntry}" }),
                    new sap.m.Label("", { text: i18n.prop("bo_salesorder_documentstatus") }),
                    new sap.m.ComboBox("",
                        {
                            selectedKey: "{/documentStatus}",
                            items: utils.createComboBoxItems(emDocumentStatus)
                        }),
                    new sap.m.Label("", { text: i18n.prop("bo_salesorder_canceled") }),
                    new sap.m.ComboBox("",
                        {
                            selectedKey: "{/canceled}",
                            items: utils.createComboBoxItems(emYesNo)
                        })
                ]
            })],

        });
        // this.form.addContent(this.table);
        this.id = this.form.getId();
        return this.form;
    }
    private form: sap.uxap.ObjectPageLayout;
    private table: sap.ui.table.Table;

    /** 显示数据 */
    showSalesOrder(data: SalesOrder): void {
        this.form.setModel(new sap.ui.model.json.JSONModel(data));

    }
    /** 显示数据 */
    showSalesOrderItems(datas: SalesOrderItem[]): void {
        this.table.setModel(new sap.ui.model.json.JSONModel(datas));
    }
}