/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOView
} from "../../../../../../ibas/bsbas/bsbas";
import { IDemoView } from "../../../bsapp/demo/DemoApp";

/**
 * 视图-demo
 */
export class DemoView extends BOView implements IDemoView {

    /** 绘制视图 */
    darw(): any {
        let form = new sap.ui.layout.VerticalLayout("");
        form.addContent(new sap.m.TextArea("", { value: "hello world." }));
        this.id = form.getId();
        return form;
    }
}