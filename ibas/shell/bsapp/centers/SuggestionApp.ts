/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";

/**
 * 应用-建议
 */
export class SuggestionApp extends ibas.SuggestionApp<ISuggestionView> {
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
        super.run();
    }

}
/** 视图-建议 */
export interface ISuggestionView extends ibas.ISuggestionView {

}