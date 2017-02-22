/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import {
    BOResidentView
} from "../../../../../../ibas/bsbas/index";
import { IDemoResidentView } from "../../../bsapp/demo/index";

/**
 * 视图-建议
 */
export class DemoResidentView extends BOResidentView implements IDemoResidentView {
    /** 绘制工具条视图 */
    darwBar(): any {
        let that = this;
        return new sap.m.Button("", {
            icon: "sap-icon://fob-watch",
            type: sap.m.ButtonType.Transparent,
            press: function (): void {
                that.fireViewEvents(that.showFullViewEvent);
            }
        });
    }
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 绘制视图 */
    darw(): any {
    }
}