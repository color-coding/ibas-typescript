/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../openui5/typings/index.d.ts" />
import { i18n, IView, IViewShower, object, logger, emMessageLevel } from "../../../ibas/bsbas/bsbas";

/**
 * 视图-显示者-默认
 */
export class ViewShowerDefault implements IViewShower {
    /** 显示视图 */
    show(view: any): void {
        if (object.isNull(view)) {
            logger.log(emMessageLevel.WARN, "shower: empty view.");
        } else if (view instanceof sap.ui.layout.VerticalLayout) {
            view.placeAt("content");
        } else if (view instanceof sap.tnt.ToolPage) {
            view.placeAt("content");
        } else {
            throw new Error(i18n.prop("sys_shell_invalid_ui"));
        }
    }
    /** 清理资源 */
    destroy(view: IView): void {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!object.isNull(ui)) {
            ui.destroy(true);
        }
    }
}