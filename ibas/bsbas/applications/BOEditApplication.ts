/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IBOEditView } from "./BOApplications.d";
import { BOApplication } from "./BOApplications";


/**
 * 业务对象编辑应用
 */
export abstract class BOEditApplication<T extends IBOEditView, D> extends BOApplication<T> {

    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        this.view.closeEvent = this.close;
        this.view.saveDataEvent = this.saveData;
    }
    /** 当前编辑的数据 */
    protected abstract editData: D;
    /** 选择数据，参数：数据 */
    protected abstract saveData(): void;
}