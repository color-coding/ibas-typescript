/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { BOApplication } from "../applications/Applications";
import { IHelpView, IHelpApp } from "./Systems.d";

/** 应用-帮助 */
export class HelpApp extends BOApplication<IHelpView> implements IHelpApp {

    /** 应用标识 */
    static APPLICATION_ID: string = "ac17a471-01f2-455f-9193-ddbfcaf81c0f";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_help";
    /** 配置项目-帮助地址 */
    static CONFIG_ITEM_HELP_URL: string = "helpUrl";
    /** 配置项目-内部浏览帮助 */
    static CONFIG_ITEM_HELP_INSIDE: string = "helpInside";

    constructor() {
        super();
        this.id = HelpApp.APPLICATION_ID;
        this.name = HelpApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        // 注册视图事件

    }
    /** 视图显示后 */
    protected viewShowed(): void {
        //
    }
}