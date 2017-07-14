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
import { IWarehouseViewView } from "../../../bsapp/warehouse/index";

/**
 * 查看视图-仓库
 */
export class WarehouseViewView extends ibas.BOViewView implements IWarehouseViewView {

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.form = new sap.ui.layout.form.SimpleForm("", {
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_code") }),
                new sap.m.Input("", {
                    enabled: false,
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "/code"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_name") }),
                new sap.m.Input("", {
                    enabled: false,
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "/name"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_activated") }),
                new sap.m.Select("", {
                    enabled: false,
                    items: utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "/activated",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_docentry") }),
                new sap.m.Input("", {
                    enabled: false,
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "/docEntry"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_warehouse_objectcode") }),
                new sap.m.Input("", {
                    enabled: false,
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "/objectCode"
                }),
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
                ]
            }),
            content: [this.form]
        });
        this.id = this.page.getId();
        return this.page;
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.form.SimpleForm;

    /** 显示数据 */
    showWarehouse(data: bo.Warehouse): void {
        this.form.setModel(new sap.ui.model.json.JSONModel(data));
    }
}
