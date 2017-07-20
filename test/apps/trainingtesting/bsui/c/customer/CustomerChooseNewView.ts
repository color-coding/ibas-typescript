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
import { ICustomerChooseNewView } from "../../../bsapp/customer/index";
import { emChooseType } from "ibas/index";

/**
 * 视图-Customer
 */
export class CustomerChooseNewView extends ibas.BOChooseView implements ICustomerChooseNewView {
    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.Customer;
    }
    /** 绘制工具条 */
    darwBars(): any {
        let that: this = this;
        return [
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_new"),
                type: sap.m.ButtonType.Transparent,
                icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.newDataEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_choose"),
                visible:this.getChooseType()===ibas.emChooseType.multi?true:false,
                type: sap.m.ButtonType.Transparent,
                icon: "sap-icon://accept",
                press: function (): void {
                    let selecteds: ibas.List<bo.Customer> = new ibas.ArrayList<bo.Customer>();
                    for (var i = 0; i < that.table.getSelectedItems().length; i++) {
                        selecteds.push(that.table.getSelectedItems()[i].getBindingContext().getObject());
                    }
                    that.fireViewEvents(that.chooseDataEvent,
                        selecteds
                    );
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_exit"),
                type: sap.m.ButtonType.Transparent,
                icon: "sap-icon://inspect-down",
                press: function (): void {
                    that.fireViewEvents(that.closeEvent);
                }
            }),
        ];
    }
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.table = new sap.m.Table("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: this.getChooseType()===ibas.emChooseType.multi?sap.m.ListMode.MultiSelect:sap.m.ListMode.SingleSelectMaster,
            selectionMode: sap.ui.table.SelectionMode.MultiToggle,
            columns: [
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        width: "12em",
                        text: ibas.i18n.prop("bo_customer_code")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_customer_name")
                    })
                })
            ],
            itemPress: function (oEvent) {
                let selecteds: ibas.List<bo.Customer> = new ibas.ArrayList<bo.Customer>();
                for (var i = 0; i < that.table.getSelectedItems().length; i++) {
                    selecteds.push(that.table.getSelectedItems()[i].getBindingContext().getObject());
                }
                that.fireViewEvents(that.chooseDataEvent,
                    selecteds
                );
            }
        });
        var list_item = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            cells: [
                new sap.m.Text("", {
                    text: "{code}"
                }),
                new sap.m.Text("", {
                    text: "{name}"
                }),
            ],
            press: function (oEvent) {
                let selecteds: ibas.List<bo.Customer> = new ibas.ArrayList<bo.Customer>();
                let selectedItem: bo.Customer = oEvent.getSource().getBindingContext().getObject();
                selecteds.push(selectedItem);
                that.fireViewEvents(that.chooseDataEvent,
                    selecteds
                );
            }
        });
        this.table.bindItems({
            path: "/rows",
            template: list_item,
        });
        this.id = this.table.getId();
        // 添加列表自动查询事件
        utils.triggerNextResults({
            listener: this.table,
            next(data: any): void {
                if (ibas.objects.isNull(that.lastCriteria)) {
                    return;
                }
                let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                if (ibas.objects.isNull(criteria)) {
                    return;
                }
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                that.fireViewEvents(that.fetchDataEvent, criteria);
            }
        });
        return this.table;
    }
    private table: sap.m.Table;
    /** 显示数据 */
    showData(datas: bo.Customer[]): void {
        let done: boolean = false;
        let model: sap.ui.model.Model = this.table.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: bo.Customer[] = (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas instanceof Array) {
                for (let item of datas) {
                    hDatas.push(item);
                }
                model.refresh(false);
                done = true;
            }
        }
        if (!done) {
            // 没有显示数据
            this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        }
        this.table.setBusy(false);
    }
    private lastCriteria: ibas.ICriteria;
    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);
        this.lastCriteria = criteria;
        // 清除历史数据
        if (this.isDisplayed) {
            this.table.setBusy(true);
            this.table.setSelectedItemById("0", true);
            this.table.setModel(null);
        }
    }
}
