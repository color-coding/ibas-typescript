/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { BOApplication } from "../applications/index";
import { IMainView, IMainApp, ILoginApp } from "./Systems.d";
import { Factories } from "./Factories";

/** 应用-入口 */
export abstract class MainApp extends BOApplication<IMainView> implements IMainApp {
    /** 应用标识 */
    static APPLICATION_ID: string = "cbd51fd3-63b4-4777-9aad-9c2f303b56f8";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_main";
    constructor() {
        super();
        this.id = MainApp.APPLICATION_ID;
        this.name = MainApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        // 注册视图事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        let loginApp: ILoginApp = Factories.systemsFactory.createLoginApp();
        loginApp.viewShower = this.viewShower;
        loginApp.navigation = this.navigation;
        loginApp.run();
    }
}