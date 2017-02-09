/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { BOApplication } from "../applications/Applications";
import { ILoginView } from "./Systems.d";
import { logger, emMessageLevel } from "../../../ibas/bobas/bobas";
import { CenterApp } from "./CenterApp";

/** 应用-登陆 */
export class LoginApp extends BOApplication<ILoginView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "9b1da07a-89a4-4008-97da-80c34b7f2eb8";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_login";

    constructor() {
        super();
        this.id = LoginApp.APPLICATION_ID;
        this.name = LoginApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {
        this.view.loginEvent = this.login;
    }

    private login(user: string, password: string): void {
        logger.log(emMessageLevel.INFO, "app: user [{0}] login system.", user);
        this.showCenter();
    }

    private showCenter(): void {
        let centerApp: CenterApp = new CenterApp();
        centerApp.viewShower = this.viewShower;
        centerApp.navigation = this.navigation;
        centerApp.show();
        this.destroy();
    }
}