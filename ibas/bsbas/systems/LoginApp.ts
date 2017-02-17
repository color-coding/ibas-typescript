/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    logger, emMessageLevel, IOperationResult, object, i18n
} from "../../../ibas/bobas/index";
import { BOApplication } from "../applications/index";
import { ILoginView, ILoginApp, ICenterApp, IUser } from "./Systems.d";
import { Factories } from "./Factories";

/** 应用-登陆 */
export class LoginApp extends BOApplication<ILoginView> implements ILoginApp {

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
    /** 视图显示后 */
    protected viewShowed(): void {
        //
    }
    //** 登录系统 */
    private login(user: string, password: string): void {
        this.busy(true, i18n.prop("msg_logging_system"));
        logger.log(emMessageLevel.INFO, "app: user [{0}] login system.", user);
        let that = this;
        let boRepository = Factories.systemsFactory.createRepository();
        boRepository.connect(
            this.view.user,
            this.view.password,
            function (opRslt: IOperationResult<IUser>): void {
                try {
                    that.busy(false);
                    if (object.isNull(opRslt)) {
                        throw new Error();
                    }
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.showCenter(opRslt.resultObjects.firstOrDefault());
                } catch (error) {
                    that.messages(error);
                }
            });
    }

    private showCenter(user: IUser): void {
        let centerApp: ICenterApp = Factories.systemsFactory.createCenterApp();
        centerApp.viewShower = this.viewShower;
        centerApp.navigation = this.navigation;
        centerApp.run(user);
        this.destroy();
    }
}