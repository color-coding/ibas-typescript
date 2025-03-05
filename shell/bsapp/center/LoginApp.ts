/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 应用-登陆 */
        export class LoginApp extends ibas.Application<ILoginView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "9b1da07a-89a4-4008-97da-80c34b7f2eb8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_login";
            constructor() {
                super();
                this.id = LoginApp.APPLICATION_ID;
                this.name = LoginApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.loginEvent = this.login;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
            }
            /** 运行 */
            run(): void {
                let userToken: string;
                let userTokenParam: ibas.KeyText = ibas.urls.param(ibas.CONFIG_ITEM_USER_TOKEN);
                if (!ibas.objects.isNull(userTokenParam)) {
                    userToken = userTokenParam.text;
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: got token from urls.");
                }
                if (ibas.strings.isEmpty(userToken)) {
                    userToken = ibas.cookies.get(ibas.CONFIG_ITEM_USER_TOKEN);
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: got token from cookies.");
                }
                if (!ibas.strings.isEmpty(userToken)) {
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: use token login system.");
                    let boRepository: bo.IBORepositoryShell = bo.repository.create();
                    boRepository.tokenConnect({
                        caller: this, // 设置调用者，则onCompleted修正this
                        token: userToken,
                        onCompleted: this.onConnectCompleted,
                    });
                    // 发送登录连接请求后，清除地址栏中的查询参数信息，并且不保留浏览器历史记录
                    window.history.replaceState(null, null, window.location.pathname + window.location.hash);
                    // 发送登录连接请求后，清理Cookies
                    ibas.cookies.remove(ibas.CONFIG_ITEM_USER_TOKEN);
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 登录系统 */
            private login(logInfo: { user: string, password: string, verification?: string }): void {
                if (ibas.strings.isEmpty(logInfo?.user) || ibas.strings.isEmpty(logInfo?.password)) {
                    throw new Error(ibas.i18n.prop("shell_please_input_user_and_password"));
                }
                this.busy(true, ibas.i18n.prop("shell_logging_system"));
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.userConnect({
                    caller: this, // 设置调用者，则onCompleted修正this
                    user: logInfo?.user,
                    password: logInfo?.password,
                    verification: logInfo?.verification,
                    onCompleted: this.onConnectCompleted,
                });
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: user [{0}] login system.", logInfo?.user);
            }

            private onConnectCompleted(opRslt: ibas.IOperationResult<bo.IUser>): void {
                try {
                    this.busy(false);
                    if (ibas.objects.isNull(opRslt)) {
                        throw new Error();
                    }
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        throw new Error(ibas.i18n.prop("shell_user_not_found"));
                    }
                    // 更新配置项目
                    for (let item of opRslt.informations) {
                        if (ibas.strings.equalsIgnoreCase(item.tag, "CONFIG_ITEM")) {
                            if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_COMPANY)) {
                                // 设置公司代码
                                ibas.config.set(ibas.CONFIG_ITEM_COMPANY, item.content);
                            } else if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_APPROVAL_WAY)) {
                                // 设置审批方法
                                ibas.config.set(ibas.CONFIG_ITEM_APPROVAL_WAY, item.content);
                            } else if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_ORGANIZATION_WAY)) {
                                // 设置组织方式
                                ibas.config.set(ibas.CONFIG_ITEM_ORGANIZATION_WAY, item.content);
                            } else if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_OWNERSHIP_WAY)) {
                                // 设置权限判断方式
                                ibas.config.set(ibas.CONFIG_ITEM_OWNERSHIP_WAY, item.content);
                            } else if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_USER_TOKEN_WAY)) {
                                // 设置用户口令方式
                                ibas.config.set(ibas.CONFIG_ITEM_USER_TOKEN_WAY, item.content);
                            }
                        }
                    }
                    let user: bo.IUser = opRslt.resultObjects.firstOrDefault();
                    // 设置默认用户口令
                    if (ibas.strings.isWith(ibas.config.get(ibas.CONFIG_ITEM_USER_TOKEN_WAY), ibas.HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                        ibas.config.set(ibas.CONFIG_ITEM_USER_TOKEN,
                            ibas.strings.format("{0} {1}", ibas.config.get(ibas.CONFIG_ITEM_USER_TOKEN_WAY), user.token));
                    } else {
                        ibas.config.set(ibas.CONFIG_ITEM_USER_TOKEN, user.token);
                    }
                    // 注册运行变量
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_ID, user.id);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_CODE, user.code);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_NAME, user.name);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_SUPER, user.super);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_BELONG, user.belong);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_TOKEN, user.token);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_IDENTITIES, user.identities);
                    ibas.variablesManager.register("${TODAY}", ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd"));
                    // 加载用户配置
                    let boRepository: bo.IBORepositoryShell = bo.repository.create();
                    boRepository.fetchUserConfigs({
                        user: user.code,
                        platform: ibas.enums.toString(ibas.emPlantform, this.plantform),
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                // 配置赋值
                                for (let item of opRslt.resultObjects) {
                                    if (ibas.strings.isEmpty(item.group)) {
                                        ibas.config.set(item.key, item.value);
                                    } else if (ibas.strings.equals(item.group, shell.CONSOLE_ID)) {
                                        let value: any = ibas.config.get(item.key);
                                        // 全局变量替换，转换类型
                                        if (typeof (value) === "number") {
                                            ibas.config.set(item.key, Number(item.value));
                                        } else if (typeof (value) === "boolean") {
                                            ibas.config.set(item.key, Boolean(item.value));
                                        } else if (typeof (value) === "string") {
                                            ibas.config.set(item.key, String(item.value));
                                        } else {
                                            ibas.config.set(item.key, item.value);
                                        }
                                    } else {
                                        ibas.config.set(ibas.strings.format("{0}|{1}", item.group, item.key), item.value);
                                    }
                                }
                                // 加载权限
                                userPrivilegeManager.load({
                                    user: user.code,
                                    platform: ibas.enums.toString(ibas.emPlantform, this.plantform),
                                    onCompleted: (error: Error) => {
                                        if (error instanceof Error) {
                                            this.messages(error);
                                        } else {
                                            // 启动系统中心
                                            let centerApp: CenterApp = new CenterApp();
                                            centerApp.viewShower = this.viewShower;
                                            centerApp.navigation = this.navigation;
                                            centerApp.run(user);
                                            if (this.isViewShowed()) {
                                                this.destroy();
                                            } else {
                                                ibas.servicesManager.viewShower = function (): ibas.IViewShower {
                                                    return centerApp;
                                                };
                                            }
                                        }
                                    }
                                });
                            } catch (error) {
                                this.messages(error);
                            }
                        }
                    });
                } catch (error) {
                    this.messages(error);
                }
            }
        }
        /** 登陆-视图 */
        export interface ILoginView extends ibas.IView {
            /** 登陆事件，参数：用户、密码 */
            loginEvent: Function;
        }
        interface IUserPrivilegeLoader {
            /** 用户 */
            user: string;
            /** 平台 */
            platform: string;
            /** 完成 */
            onCompleted: (error: Error) => void;
        }
        /** 用户权限管理员 */
        class UserPrivilegeManager {
            private userPrivileges: ibas.IList<bo.IUserPrivilege> = new ibas.ArrayList<bo.IUserPrivilege>();
            /** 判断是否可以运行应用 */
            canRun(element: ibas.IElement): boolean {
                let run: boolean = true;
                if (ibas.objects.isNull(this.userPrivileges)) {
                    return run;
                }
                if (element instanceof ibas.BOApplication) {
                    // 应用是业务对象应用，根据应用类型设置权限
                    for (let item of this.userPrivileges) {
                        if (item.source !== ibas.emPrivilegeSource.BUSINESS_OBJECT) {
                            continue;
                        }
                        if (item.target !== element.boCode) {
                            continue;
                        }
                        if (item.value === ibas.emAuthoriseType.READ) {
                            if (app instanceof ibas.BOListApplication) {
                                run = true;
                            } else if (app instanceof ibas.BOChooseApplication) {
                                run = true;
                            } else if (app instanceof ibas.BOViewApplication) {
                                run = true;
                            } else if (app instanceof ibas.BOEditApplication) {
                                run = false;
                            }
                        } else {
                            run = item.value === ibas.emAuthoriseType.NONE ? false : true;
                        }
                        break;
                    }
                }
                // 应用设置，覆盖之前设置
                for (let item of this.userPrivileges) {
                    if (item.source === ibas.emPrivilegeSource.BUSINESS_OBJECT) {
                        continue;
                    }
                    if (item.target !== element.id) {
                        continue;
                    }
                    if (element instanceof ibas.ModuleConsole) {
                        run = item.value === ibas.emAuthoriseType.ALL ? true : false;
                    } else {
                        run = item.value === ibas.emAuthoriseType.NONE ? false : true;
                    }
                    break;
                }
                return run;
            }
            /** 加载权限 */
            load(loader: IUserPrivilegeLoader): void {
                if (!ibas.objects.isNull(this.userPrivileges) && this.userPrivileges.length > 0) {
                    // 已初始化不在处理
                    return;
                }
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserPrivileges({
                    user: loader.user,
                    platform: loader.platform,
                    onCompleted: (opRslt) => {
                        if (opRslt.resultCode !== 0) {
                            if (loader.onCompleted instanceof Function) {
                                loader.onCompleted(new Error(opRslt.message));
                            }
                        } else {
                            let configed: boolean = ibas.config.get(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION) ? true : false;
                            for (let item of opRslt.resultObjects) {
                                this.userPrivileges.add(item);
                                if (item.automatic === true && !configed
                                    && item.source === ibas.emPrivilegeSource.APPLICATION
                                    && item.value === ibas.emAuthoriseType.ALL) {
                                    // 没有配置，则使用权限设置
                                    ibas.config.set(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION, item.target);
                                }
                            }
                            if (loader.onCompleted instanceof Function) {
                                loader.onCompleted(undefined);
                            }
                        }
                    }
                });
            }
        }
        const userPrivilegeManager: UserPrivilegeManager = new UserPrivilegeManager();
        /** 权限管理员 */
        export namespace privileges {
            /**
             * 是否允许运行
             * @param element 元素
             */
            export function canRun(element: ibas.IElement): boolean {
                return userPrivilegeManager.canRun(element);
            }
        }
    }
}