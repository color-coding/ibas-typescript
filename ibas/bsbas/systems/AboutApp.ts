/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { BOApplication } from "../applications/Applications";
import { IAboutView, IAboutApp } from "./Systems.d";

/** 应用-关于 */
export class AboutApp extends BOApplication<IAboutView> implements IAboutApp {

    /** 应用标识 */
    static APPLICATION_ID: string = "414b87e2-f9b7-425d-b1d7-7aeadfa2670e";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_about";

    constructor() {
        super();
        this.id = AboutApp.APPLICATION_ID;
        this.name = AboutApp.APPLICATION_NAME;
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