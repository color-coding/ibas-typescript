/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../openui5/typings/index.d.ts" />
import { i18n, IViewShower, object, logger, emMessageLevel } from "../../../../ibas/bsbas/bsbas";

/**
 * 视图-显示者-默认
 */
export class ViewShowerDefault implements IViewShower {
    /** 显示视图 */
    show(view: any): void {
        if (object.isNull(view)) {
            logger.log(emMessageLevel.WARN, "shower: empty view.");
        } else if (view instanceof sap.ui.layout.VerticalLayout) {
            view.placeAt("mainView");
        } else {
            throw new Error(i18n.prop("sys_ui_invalid"));
        }
    }
}
/**
 * 视图-显示者-系统
 */
export class ViewShowerSystem implements IViewShower {
    /** 显示视图 */
    show(view: any): void {

    }
}