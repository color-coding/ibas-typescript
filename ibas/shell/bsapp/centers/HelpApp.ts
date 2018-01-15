/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";

/**
 * 应用-帮助
 */
export class HelpApp extends sys.HelpApp<IHelpView> {
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        super.viewShowed();
    }
    /** 运行 */
    run(): void {
        this.view.url = ibas.config.get(sys.CONFIG_ITEM_HELP_URL);
        this.view.isInside = ibas.config.get(sys.CONFIG_ITEM_HELP_INSIDE, true);
        super.run.apply(this, arguments);
    }

}
/** 视图-帮助 */
export interface IHelpView extends sys.IHelpView {

}