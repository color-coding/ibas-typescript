﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { IAboutView, Component } from "../../../bsapp/centers/AboutApp";

/**
 * 视图-关于
 */
export class AboutView extends ibas.BOView implements IAboutView {
    /** 绘制视图 */
    darw(): any {
        this.form = new sap.m.Page("", {
            showHeader: false,
            enableScrolling: true,
            content: [this.form]
        });
        return this.form;
    }
    private form: sap.m.Page;

    private text(...values: string[]): string {
        let builder: ibas.StringBuilder = new ibas.StringBuilder();
        for (let item of values) {
            if (ibas.strings.isEmpty(item)) {
                continue;
            }
            if (builder.length > 0) {
                builder.append(", ");
            }
            builder.append(item);
        }
        return builder.toString();
    }
    /** 显示库信息 */
    showLibraries(components: ibas.List<Component>): void {
        let list: sap.m.List = new sap.m.List("", {
            headerText: "Libraries",
        });
        // 添加UI组件
        components.add(new Component("openui5",
            (<any>sap.ui.getVersionInfo()).version,
            "© SAP SE, made available under Apache License 2.0",
            "sap-icon://sap-ui5"));
        for (let item of components) {
            list.addItem(new sap.m.FeedListItem("", {
                icon: item.icon ? item.icon : "sap-icon://technical-object",
                text: this.text(item.name, item.copyright),
                info: item.version,
            }));
        }
        this.form.addContent(list);
    }
    /** 显示应用信息 */
    showApplications(components: ibas.List<Component>): void {
        let list: sap.m.List = new sap.m.List("", {
            headerText: "Applications",
        });
        for (let item of components) {
            list.addItem(new sap.m.FeedListItem("", {
                icon: item.icon ? item.icon : ibas.config.get("defalutModuleIcon"),
                text: this.text(item.name, item.copyright),
                info: item.version,
            }));
        }
        this.form.addContent(list);
    }
}