/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import { ICenterView } from "../../../../../../ibas/bsbas/systems/Systems";
import { BOView } from "../../../../../../ibas/bsbas/bsbas";

/**
 * 系统入口应用
 */
export class CenterView extends BOView implements ICenterView {
    /** 主页面 */
    private page: sap.tnt.ToolPage;
    /** 页面头部 */
    private header: sap.tnt.ToolHeader;
    /** 页面功能导航，左 */
    private navigation: sap.tnt.SideNavigation;

    /** 绘制视图 */
    darw(): any {
        this.header = new sap.tnt.ToolHeader();
        let button: sap.m.Button = new sap.m.Button("", {
            icon: "sap-icon://menu2",
            type: "Transparent"
        });
        this.header.addContent(button);
        this.navigation = new sap.tnt.SideNavigation();
        this.page = new sap.tnt.ToolPage();
        this.page.setHeader(this.header);
        this.page.setSideContent(this.navigation);
        this.id = this.page.getId();
        return this.page;
    }
}