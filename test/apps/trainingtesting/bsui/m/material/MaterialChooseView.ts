/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IMaterialChooseView } from "../../../bsapp/material/index";
/**
 * 选择视图-物料
 */
export class MaterialChooseView extends ibas.BOChooseView implements IMaterialChooseView {
    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.Material;
    }
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.list = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: openui5.utils.toListMode(this.chooseType),
            items: {
                path: "/rows",
                template: new sap.m.ObjectListItem("", {
                    title: {
                        path: "code"
                    },
                    number: {
                        path: "onOrder"
                    },
                    numberUnit: {
                        path: "uom"
                    },
                    secondStatus: new sap.m.ObjectStatus("", {
                        text: {
                            path: "approvalStatus",
                            formatter(data: any): any {
                                return ibas.enums.describe(ibas.emApprovalStatus, data);
                            }
                        }
                    }),
                    attributes: [
                        new sap.m.ObjectAttribute("", {
                            text: {
                                path: "name"
                            }
                        }),
                    ]
                }),
            }
        });
        openui5.utils.triggerNextResults({
            listener: this.list,
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
        this.pullToRefresh = new sap.m.PullToRefresh("", {
            refresh: function (event: sap.ui.base.Event): void {
                that.fireViewEvents(that.fetchDataEvent);
            }
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            showSubHeader: false,
            floatingFooter: true,
            content: [
                this.pullToRefresh,
                this.list
            ],
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        width: "50%",
                        text: ibas.i18n.prop("shell_data_choose"),
                        type: sap.m.ButtonType.Transparent,
                        press: function (): void {
                            that.fireViewEvents(that.chooseDataEvent,
                                // 获取表格选中的对象
                                openui5.utils.getSelecteds<bo.Customer>(that.list)
                            );
                        }
                    }),
                    new sap.m.Button("", {
                        width: "50%",
                        text: ibas.i18n.prop("shell_exit"),
                        type: sap.m.ButtonType.Transparent,
                        press: function (): void {
                            that.fireViewEvents(that.closeEvent);
                        }
                    }),
                ]
            })
        });
        this.dialog = new sap.m.Dialog("", {
            title: this.title,
            type: sap.m.DialogType.Standard,
            state: sap.ui.core.ValueState.None,
            stretchOnPhone: true,
            horizontalScrolling: true,
            verticalScrolling: true,
            content: [
                this.page
            ],
        });
        this.id = this.dialog.getId();
        return this.dialog;
    }
    private dialog: sap.m.Dialog;
    private page: sap.m.Page;
    private form: sap.ui.layout.VerticalLayout;
    private list: sap.m.List;
    private pullToRefresh: sap.m.PullToRefresh;
    /** 显示数据 */
    showData(datas: bo.Material[]): void {
        this.pullToRefresh.hide();
        let done: boolean = false;
        let model: sap.ui.model.Model = this.list.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: any = (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas.rows instanceof Array) {
                for (let item of datas) {
                    hDatas.rows.push(item);
                }
                model.refresh(false);
                done = true;
            }
        }
        if (!done) {
            // 没有显示数据
            this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        }
        this.list.setBusy(false);
    }
    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);
        // 清除历史数据
        if (this.isDisplayed) {
            this.list.setBusy(true);
            this.list.setSelectedItemById("0", true);
            this.list.setModel(null);
        }
    }
    /** 手指触控滑动 */
    onTouchMove(direcction: ibas.emTouchMoveDirection, event: TouchEvent): void {
        if (direcction === ibas.emTouchMoveDirection.UP) {
            this.page.setShowFooter(false);
        } else if (direcction === ibas.emTouchMoveDirection.DOWN) {
            this.page.setShowFooter(true);
        }
    }
}