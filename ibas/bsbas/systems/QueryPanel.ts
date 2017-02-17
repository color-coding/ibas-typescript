/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { BOApplication } from "../applications/index";
import { IQueryPanelView } from "./Systems.d";

/**
 * 查询面板
 */
export abstract class QueryPanel<T extends IQueryPanelView> extends BOApplication<T> {
    /** 应用标识 */
    static APPLICATION_ID: string = "69e3d786-5bf5-451d-b660-3eb485171af5";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_query_panel";
    constructor() {
        super();
        this.id = QueryPanel.APPLICATION_ID;
        this.name = QueryPanel.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        // 注册视图事件
    }
    /** 视图显示后 */
    protected viewShowed(): void { }
    /** 运行 参数，初始化回调 */
    run(): void {
        let callBack = arguments[0];
        if (!(callBack instanceof Function)) {
            callBack = function () { };
        }
        this.init(callBack);
    }
    /** 初始化 */
    protected abstract init(callBack: Function): void;
}
