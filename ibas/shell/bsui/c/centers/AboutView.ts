/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";

/**
 * 视图-关于
 */
export class AboutView extends ibas.BOView implements sys.IAboutView {
    /** 绘制视图 */
    darw(): any {
        this.form = new sap.ui.layout.form.SimpleForm("", {
            maxContainerCols: 1,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout,
        });
        return new sap.m.Page("", {
            showHeader: false,
            enableScrolling: true,
            content: [this.form]
        });
    }
    private form: sap.ui.layout.form.SimpleForm;
    /** 显示版本 */
    showVersions(version: ibas.List<ibas.KeyText>): void {
        this.form.addContent(new sap.ui.core.Title("", {
            text: "Libraries",
        }));
        for (let item of version) {
            if (item.key === "ibas.shell.ui") {
                item.key = "openui5";
                item.text = (<any>sap.ui.getVersionInfo()).version;
            }
            this.form.addContent(new sap.m.Label("", { text: item.key }));
            this.form.addContent(new sap.m.Text("", { text: item.text }));
        }
        this.form.addContent(new sap.ui.core.Title("", {
            text: "Author",
        }));
        this.form.addContent(new sap.m.Label("", { text: "niuren.zhu" }));
        this.form.addContent(new sap.m.Link("", {
            text: "niuren.zhu@icloud.com",
            press: function (): void {
                sap.m.URLHelper.triggerEmail(this.getText(), "hi, niuren.zhu");
            }
        }));
        this.form.addContent(new sap.ui.core.Title("", {
            text: "About",
        }));
        this.form.addContent(new sap.m.Text("", {
            width: "100%",
            textAlign: sap.ui.core.TextAlign.Right,
            text: ibas.strings.format("{0}, {1}.",
                ibas.i18n.prop("sys_shell_copyright"),
                ibas.i18n.prop("sys_shell_license"))
        }));
    }
}