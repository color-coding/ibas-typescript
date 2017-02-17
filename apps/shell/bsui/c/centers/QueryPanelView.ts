/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { View } from "../../../../../ibas/bsbas/index";
import { IQueryPanelView } from "../../../bsapp/centers/QueryPanel";

/**
 * 视图-查询面板
 */
export class QueryPanelView extends View implements IQueryPanelView {
    private searchField: sap.m.SearchField;
    /** 绘制视图 */
    darw(): any {
        this.searchField = new sap.m.SearchField("", {
            width: "98%"
        });
        return this.searchField;
    }
    /** 查询 */
    searchEvent: Function;
    /** 查询内容 */
    get searchContent(): string {
        return this.searchField.getValue();
    }
    set searchContent(value: string) {
        this.searchField.setValue(value);
    }
}