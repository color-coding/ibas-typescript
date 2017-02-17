/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOListView
} from "../../../../../../ibas/bsbas/index";
import { IDemoListView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoListView extends BOListView implements IDemoListView {

    /** 绘制视图 */
    darw(): any {
        let form = new sap.ui.layout.form.SimpleForm("");
        this.table = new sap.m.Table("", {
            columns: [
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "A" })
                }),
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "B" })
                }),
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "C" })
                }),
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "D" })
                }),
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "E" })
                }),
                new sap.m.Column("", {
                    header: new sap.m.Text({ text: "F" })
                })
            ]
        });
        form.addContent(this.table);
        this.id = form.getId();
        return form;
    }
    private table: sap.m.Table;
    /** 显示数据 */
    showData(datas: any): void {

    }
}