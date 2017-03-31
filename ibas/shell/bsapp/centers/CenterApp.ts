/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";
import * as sys from "../../../../ibas/bsbas/systems/index";

/** 应用-中心 */
export class CenterApp extends sys.CenterApp<ICenterView> {

    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        super.viewShowed();
    }

}
/** 视图-中心 */
export interface ICenterView extends sys.ICenterView {

}