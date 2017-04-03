/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as sys from "../../../../bsbas/systems/index";
import * as ibas from "../../../../index";

/**
 * 视图-关于
 */
export class AboutView extends ibas.BOView implements sys.IAboutView {
    /** 绘制视图 */
    darw(): any {
        this.form = new sap.ui.layout.form.SimpleForm("", {
            maxContainerCols: 2,
            editable: false,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            labelSpanL: 3,
            labelSpanM: 3,
            emptySpanL: 4,
            emptySpanM: 4,
            columnsL: 1,
            columnsM: 1,
            content: []
        });
        this.id = this.form.getId();
        return this.form;
    }
    private form: sap.ui.layout.form.SimpleForm;
    /** 显示版本 */
    showVersions(version: any): void {
        this.form.addContent(new sap.ui.core.Title("", { text: "Shell" }));
        this.form.addContent(new sap.m.Label("", { text: "name" }));
        this.form.addContent(new sap.m.Text("", { text: version.name }));
        this.form.addContent(new sap.m.Label("", { text: "version" }));
        this.form.addContent(new sap.m.Text("", { text: version.version }));
        this.form.addContent(new sap.ui.core.Title("", { text: "Libraries" }));
        for (let item of version.libraries) {
            this.form.addContent(new sap.m.Label("", { text: "name" }));
            this.form.addContent(new sap.m.Text("", { text: item.name }));
            this.form.addContent(new sap.m.Label("", { text: "version" }));
            this.form.addContent(new sap.m.Text("", { text: item.version }));
        }
        this.form.addContent(new sap.ui.core.Title("", { text: "Authors" }));
        this.form.addContent(new sap.m.Label("", { text: "niuren.zhu" }));
        this.form.addContent(new sap.m.Link("", {
            text: "niuren.zhu@icloud.com",
            press: function (): void {
                sap.m.URLHelper.triggerEmail(this.getText(), "hi, niuren.zhu");
            }
        }));
        this.form.addContent(new sap.ui.core.Title("", { text: "Thanks" }));
        this.form.addContent(new sap.m.Label("", { text: "color-coding studio" }));
        this.form.addContent(new sap.m.Link("", {
            text: "http://www.colorcoding.org",
            press: function (): void {
                sap.m.URLHelper.redirect(this.getText(), true);
            }
        }));
        this.form.addContent(new sap.m.Label("", { text: "sap" }));
        this.form.addContent(new sap.m.Link("", {
            text: "http://www.sap.com",
            press: function (): void {
                sap.m.URLHelper.redirect(this.getText(), true);
            }
        }));
    }
}