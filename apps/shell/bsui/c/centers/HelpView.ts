/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { IHelpView } from "../../../../../ibas/bsbas/systems/index";
import { UrlView, config } from "../../../../../ibas/bsbas/index";

/**
 * 视图-帮助
 */
export class HelpView extends UrlView implements IHelpView {
    /** 绘制视图 */
    darw(): any {
        return null;
    }

}