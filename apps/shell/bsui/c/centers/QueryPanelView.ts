/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as sys from "../../../../../ibas/bsbas/systems/index";
import * as ibas from "../../../../../ibas/index";

/**
 * 视图-查询面板
 */
export class QueryPanelView extends ibas.BOPanelView implements sys.IQueryPanelView {
    /** 绘制工具条视图 */
    darwBar(): any {
        if (ibas.object.isNull(this.bar)) {
            let that = this;
            this.search = new sap.m.SearchField("", {
                search: function () {
                    that.fireViewEvents(that.searchEvent);
                }
            });
            this.baseOn = new sap.m.ComboBox("", {
                placeholder: ibas.i18n.prop("sys_shell_ui_base_on_criteria"),
                maxWidth: "30%"
            });
            this.config = new sap.m.Button("", {
                icon: "sap-icon://filter",
                type: sap.m.ButtonType.Transparent,
                press: function (): void {
                    that.fireViewEvents(that.showFullViewEvent);
                }
            });
            this.bar = new sap.m.Toolbar("", {
                width: "100%",
                design: sap.m.ToolbarDesign.Auto,
                content: [
                    this.search,
                    this.baseOn,
                    this.config
                ]
            });
        }
        return this.bar;
    }
    private bar: sap.m.Toolbar;
    private search: sap.m.SearchField;
    private config: sap.m.Button;
    private baseOn: sap.m.ComboBox;
    /** 查询 */
    searchEvent: Function;
    /** 查询内容 */
    get searchContent(): string {
        return this.search.getValue();
    }
    set searchContent(value: string) {
        this.search.setValue(value);
    }
    /** 绘制工具条 */
    darwBars(): any { }
    /** 绘制视图 */
    darw(): any {

    }
}