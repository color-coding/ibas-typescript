/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";
import * as sys from "../../../../ibas/bsbas/systems/index";

/**
 * 查询面板
 */
export class QueryPanel extends sys.QueryPanel<IQueryPanelView>  {
    /** 初始化 */
    protected init(callBack: Function): void {
        if (callBack instanceof Function) {
            setTimeout(callBack, 1000);
        }
    }
}
/** 视图-演示 */
export interface IQueryPanelView extends sys.IQueryPanelView {

}
