/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ICustomerChooseView } from "../../../bsapp/customer/index";

/**
 * 视图-Customer
 */
export class CustomerChooseView extends ibas.BOChooseView implements ICustomerChooseView {

    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.Customer;
    }

    /** 绘制工具条 */
    darwBars(): any {
        let that = this;
        return [
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_ui_data_new"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.newDataEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_ui_data_choose"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://accept",
                press: function (): void {
                    that.fireViewEvents(that.chooseDataEvent,
                        // 获取表格选中的对象
                        utils.getTableSelecteds<bo.Customer>(that.table)
                    );
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
        ]
    }
    /** 绘制视图 */
    darw(): any {
        let that = this;
        this.table = new sap.ui.table.Table("", {
            enableSelectAll: false,
            visibleRowCount: 15,
            rows: "{/}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_customer_code"),
                    template: new sap.m.Link("", {
                        wrapping: false,
                        press(event: any): void {
                            ibas.servicesManager.runLinkService({
                                boCode: bo.Customer.BUSINESS_OBJECT_CODE,
                                linkValue: event.getSource().getText()
                            });
                        }
                    }).bindProperty("text", {
                        path: "code"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_customer_name"),
                    template: new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "name",
                        formatter(data: any): any {
                            return ibas.enums.describe(ibas.emDocumentStatus, data);
                        }
                    })
                }),
            ]
        });
        this.id = this.table.getId();
        return this.table;
    }
    private table: sap.ui.table.Table;
    /** 显示数据 */
    showData(datas: bo.Customer[]): void {
        this.table.setModel(new sap.ui.model.json.JSONModel(datas));
        // 表格滚动条到底，自动触发查询下一个结果集
        if (!ibas.objects.isNull(this.lastCriteria) && datas.length > 0) {
            let nextCriteria: ibas.ICriteria = this.lastCriteria.next(datas[datas.length - 1]);
            utils.triggerNextResults({
                caller: this,
                listener: this.table,
                criteria: nextCriteria,
                query: this.query
            });
        }
    }
    private lastCriteria: ibas.ICriteria;
    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);
        this.lastCriteria = criteria;
    }
}
