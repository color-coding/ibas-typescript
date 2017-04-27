/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import { IDemoMapView } from "../../../bsapp/others/index";

/**
 * 视图-地图
 */
export class DemoMapView extends ibas.View implements IDemoMapView {

    /** 绘制视图 */
    darw(): any {
        return new sap.ui.core.HTML("", {
            content: "",
            preferDOM: true,
            sanitizeContent: false,
            visible: true,
        });
    }
}