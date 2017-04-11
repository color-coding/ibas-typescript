/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IBOChooseView } from "./Applications.d";
import { BOQueryApplication } from "./Applications";


/**
 * 业务对象选择应用
 */
export abstract class BOChooseApplication<T extends IBOChooseView, D> extends BOQueryApplication<T> {

    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
        this.view.chooseDataEvent = this.chooseData;
        this.view.newDataEvent = this.newData;
    }
    /** 选择数据，参数：数据 */
    protected abstract chooseData(data: D): void;
    /** 新建数据 */
    protected abstract newData(): void;

}