/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { BOBarView } from "../../../../../ibas/bsbas/index";
import { IQueryPanelView } from "../../../bsapp/centers/QueryPanel";

/**
 * 视图-查询面板
 */
export class QueryPanelView extends BOBarView implements IQueryPanelView {
    /** 绘制工具条视图 */
    darwBar(): any {
        let that = this;
        this.searchField = new sap.m.SearchField("", {
            search: function () {
                that.fireViewEvents(that.searchEvent);
            }
        });
        this.configButton = new sap.m.Button("", {
            icon: "sap-icon://filter",
            type: sap.m.ButtonType.Transparent,
            press: function (): void {
                that.fireViewEvents(that.showFullViewEvent);
            }
        });
        return new sap.m.Toolbar("", {
            width: "100%",
            design: sap.m.ToolbarDesign.Transparent,
            content: [
                this.searchField,
                this.configButton
            ]
        });
    }
    private searchField: sap.m.SearchField;
    private configButton: sap.m.Button;
    /** 查询 */
    searchEvent: Function;
    /** 查询内容 */
    get searchContent(): string {
        return this.searchField.getValue();
    }
    set searchContent(value: string) {
        this.searchField.setValue(value);
    }
    /** 绘制视图 */
    darw(): any {

    }
}