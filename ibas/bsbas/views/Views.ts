/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as core from "../core/Core";
import { i18n } from "../../bsbas/bsbas";

/**
 * 视图
 */
export abstract class BOView extends core.View {
    /**  
     * 触发视图事件
     * @param event 触发的事件
     * @param pars 参数
     */
    protected fireViewEvents(event: Function, ...pars: any[]): void {
        if (typeof event !== "function") {
            throw new Error(i18n.prop("msg_invalid_parameter", "event"));
        }
        event.apply(this.application, pars);
    }
}