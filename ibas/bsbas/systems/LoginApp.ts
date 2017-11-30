/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    logger, emMessageLevel, IOperationResult, objects, i18n, strings,
    Application, config, CONFIG_ITEM_USER_TOKEN, CONFIG_ITEM_COMPANY,
    CONFIG_ITEM_APPROVAL_WAY, CONFIG_ITEM_ORGANIZATION_WAY, CONFIG_ITEM_OWNERSHIP_WAY,
    emMessageType, CONFIG_ITEM_DEBUG_MODE, CONFIG_ITEM_PLANTFORM, urls, IMessgesCaller, KeyText
} from "ibas/index";
import { ILoginView, ILoginApp, ICenterApp, IUser, IBORepositorySystem } from "./Systems.d";
import { Factories } from "./Factories";

/** 应用-登陆 */
export class LoginApp<T extends ILoginView> extends Application<T> implements ILoginApp {

    /** 应用标识 */
    static APPLICATION_ID: string = "9b1da07a-89a4-4008-97da-80c34b7f2eb8";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_login";

    constructor() {
        super();
        this.id = LoginApp.APPLICATION_ID;
        this.name = LoginApp.APPLICATION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 运行 */
    run(...args: any[]): void {
        let userTokenParam: KeyText = urls.param(CONFIG_ITEM_USER_TOKEN);
        if (!objects.isNull(userTokenParam)) {
            let userToken: string = userTokenParam.text;
            let plantformParam: KeyText = urls.param(CONFIG_ITEM_PLANTFORM);
            let plantform: string = "";
            if (!objects.isNull(plantformParam)) {
                plantform = plantformParam.text;
            }
            config.set(CONFIG_ITEM_PLANTFORM,
                isNaN(parseInt(plantform, 0)) ? 0 : parseInt(plantform, 0)
            );
            logger.log(emMessageLevel.DEBUG, "app: user login system,token is [{0}].", userToken);
            let boRepository: IBORepositorySystem = Factories.systemsFactory.createRepository();
            boRepository.tokenConnect({
                caller: this, // 设置调用者，则onCompleted修正this
                token: userToken,
                onCompleted: function (opRslt: IOperationResult<IUser>): void {
                    try {
                        this.busy(false);
                        if (objects.isNull(opRslt)) {
                            throw new Error();
                        }
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        let user: IUser = opRslt.resultObjects.firstOrDefault();
                        // 设置默认用户口令
                        config.set(CONFIG_ITEM_USER_TOKEN, user.token);
                        // 更新配置项目
                        for (let item of opRslt.informations) {
                            if (strings.equalsIgnoreCase(item.tag, "CONFIG_ITEM")) {
                                if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_COMPANY)) {
                                    // 设置公司代码
                                    config.set(CONFIG_ITEM_COMPANY, item.content);
                                }
                                if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_APPROVAL_WAY)) {
                                    // 设置审批方法
                                    config.set(CONFIG_ITEM_APPROVAL_WAY, item.content);
                                }
                                if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_ORGANIZATION_WAY)) {
                                    // 设置组织方式
                                    config.set(CONFIG_ITEM_ORGANIZATION_WAY, item.content);
                                }
                                if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_OWNERSHIP_WAY)) {
                                    // 设置权限判断方式
                                    config.set(CONFIG_ITEM_OWNERSHIP_WAY, item.content);
                                }
                            }
                        }
                        // 启动系统中心
                        let centerApp: ICenterApp = Factories.systemsFactory.createCenterApp();
                        centerApp.viewShower = this.viewShower;
                        centerApp.navigation = this.navigation;
                        centerApp.run(user);
                    } catch (error) {
                        let that: any = this;
                        let caller: IMessgesCaller = {
                            title: i18n.prop(this.name),
                            type: emMessageType.ERROR,
                            message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message,
                            onCompleted: function (): void {
                                that.show();
                            }
                        };
                        this.messages(caller);
                    }
                }
            });
            // 发送登录连接请求后,清除地址栏中的查询参数信息,并且不保留浏览器历史记录
            window.history.replaceState(null, null, window.location.pathname + window.location.hash);
        } else {
            super.run.apply(this, args);
        }
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        this.view.loginEvent = this.login;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        //
    }
    /** 登录系统 */
    private login(): void {
        this.busy(true, i18n.prop("sys_logging_system"));
        logger.log(emMessageLevel.DEBUG, "app: user [{0}] login system.", this.view.user);
        let boRepository: IBORepositorySystem = Factories.systemsFactory.createRepository();
        boRepository.userConnect({
            caller: this, // 设置调用者，则onCompleted修正this
            user: this.view.user,
            password: this.view.password,
            onCompleted: function (opRslt: IOperationResult<IUser>): void {
                try {
                    this.busy(false);
                    if (objects.isNull(opRslt)) {
                        throw new Error();
                    }
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    let user: IUser = opRslt.resultObjects.firstOrDefault();
                    // 设置默认用户口令
                    config.set(CONFIG_ITEM_USER_TOKEN, user.token);
                    // 更新配置项目
                    for (let item of opRslt.informations) {
                        if (strings.equalsIgnoreCase(item.tag, "CONFIG_ITEM")) {
                            if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_COMPANY)) {
                                // 设置公司代码
                                config.set(CONFIG_ITEM_COMPANY, item.content);
                            }
                            if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_APPROVAL_WAY)) {
                                // 设置审批方法
                                config.set(CONFIG_ITEM_APPROVAL_WAY, item.content);
                            }
                            if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_ORGANIZATION_WAY)) {
                                // 设置组织方式
                                config.set(CONFIG_ITEM_ORGANIZATION_WAY, item.content);
                            }
                            if (strings.equalsIgnoreCase(item.name, CONFIG_ITEM_OWNERSHIP_WAY)) {
                                // 设置权限判断方式
                                config.set(CONFIG_ITEM_OWNERSHIP_WAY, item.content);
                            }
                        }
                    }
                    // 启动系统中心
                    let centerApp: ICenterApp = Factories.systemsFactory.createCenterApp();
                    centerApp.viewShower = this.viewShower;
                    centerApp.navigation = this.navigation;
                    centerApp.run(user);
                    this.destroy();
                } catch (error) {
                    this.messages(error);
                }
            }
        });
    }

}