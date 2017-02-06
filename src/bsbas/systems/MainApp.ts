/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Systems.d.ts" />
import { Application } from "./Application";
import { IMainView } from "./Systems.d";
import { ViewShowerDefault } from "./ViewShowers";
import { LoginApp } from "./LoginApp";

/** 应用-入口 */
export abstract class MainApp extends Application<IMainView> {
    /** 应用标识 */
    static APPLICATION_ID: string = "cbd51fd3-63b4-4777-9aad-9c2f303b56f8";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_main";

    constructor() {
        super();
        this.id = MainApp.APPLICATION_ID;
        this.name = MainApp.APPLICATION_NAME;
        // 设置视图显示方式
        this.viewShower = new ViewShowerDefault();
    }

    /** 此应用视图显示后 */
    protected afterViewShow(): void {
        super.afterViewShow();
        let loginApp: LoginApp = new LoginApp();
        loginApp.navigation = this.navigation;
        loginApp.viewShower = this.viewShower;
        loginApp.show();
    }
}