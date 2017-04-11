/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import { IDemoUrlView } from "../../../bsapp/demo/index";

/**
 * 视图-demo
 */
export class DemoUrlView extends ibas.UrlView implements IDemoUrlView {

    /** 绘制视图 */
    darw(): any {
        return null;
    }
}
/**
 * 视图-demo
 */
export class DemoTabUrlView extends ibas.TabView implements IDemoUrlView {
    /** 内部打开 */
    isInside: boolean;
    /** 地址 */
    url: string;
    /** 绘制视图 */
    darw(): any {
        let html: string = ibas.string.format(
            `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
            , this.url);
        return new sap.ui.core.HTML("",
            {
                content: html
            });
    }
}