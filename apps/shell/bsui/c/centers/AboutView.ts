/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { IAboutView } from "../../../../../ibas/bsbas/systems/Systems";
import { BOView } from "../../../../../ibas/bsbas/bsbas";

/**
 * 视图-关于
 */
export class AboutView extends BOView implements IAboutView {
    /** 绘制视图 */
    darw(): any {
        let form = new sap.ui.layout.VerticalLayout("", {
            width: "100%",
            height: "100%"
        });
        this.textArea = new sap.m.TextArea("", {
            width: "100%",
            height: "100%"
        });
        form.addContent(this.textArea);
        return form;
    }
    private textArea: sap.m.TextArea;
    /** 显示版本 */
    showVersions(version: any): void {
        this.textArea.setValue(JSON.stringify(version));
    }
}