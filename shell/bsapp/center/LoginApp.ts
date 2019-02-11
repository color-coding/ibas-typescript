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
                this.view.changeLanguageEvent = this.changeLanguage;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 获取支持的语言列表
                let address: string = ibas.urls.normalize(".../config.json");
                let that: this = this;
                let JQryAjxSetting: JQueryAjaxSettings = {
                    url: address,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    success: function (data: any): void {
                        if (!ibas.objects.isNull(data)
                            && !ibas.objects.isNull(data.languages)
                            && Array.isArray(data.languages)) {
                            that.view.displayLanguages(data.languages);
                            that.view.language = ibas.i18n.language;
                        }
                    },
                };
                jQuery.ajax(JQryAjxSetting);
            }
            changeLanguage(): void {
                // 重置语言编码
                ibas.i18n.language = this.view.language;
                // 重置视图
                this.destroy();
                this.show();
            }
            /** 运行 */
            run(): void {
                let userTokenParam: ibas.KeyText = ibas.urls.param(ibas.CONFIG_ITEM_USER_TOKEN);
                if (!ibas.objects.isNull(userTokenParam)) {
                    let userToken: string = userTokenParam.text;
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: user login system,token is [{0}].", userToken);
                    let boRepository: bo.IBORepositoryShell = bo.repository.create();
                    boRepository.tokenConnect({
                        caller: this, // 设置调用者，则onCompleted修正this
                        token: userToken,
                        onCompleted: this.onConnectCompleted,
                    });
                    // 发送登录连接请求后,清除地址栏中的查询参数信息,并且不保留浏览器历史记录
                    window.history.replaceState(null, null, window.location.pathname + window.location.hash);
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 登录系统 */
            private login(): void {
                if (ibas.strings.isEmpty(this.view.user) || ibas.strings.isEmpty(this.view.password)) {
                    throw new Error(ibas.i18n.prop("shell_please_input_user_and_password"));
                }
                this.busy(true, ibas.i18n.prop("shell_logging_system"));
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.userConnect({
                    caller: this, // 设置调用者，则onCompleted修正this
                    user: this.view.user,
                    password: this.view.password,
                    onCompleted: this.onConnectCompleted,
                });
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: user [{0}] login system.", this.view.user);
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
                    let user: bo.IUser = opRslt.resultObjects.firstOrDefault();
                    // 设置默认用户口令
                    ibas.config.set(ibas.CONFIG_ITEM_USER_TOKEN, user.token);
                    // 更新配置项目
                    for (let item of opRslt.informations) {
                        if (ibas.strings.equalsIgnoreCase(item.tag, "CONFIG_ITEM")) {
                            if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_COMPANY)) {
                                // 设置公司代码
                                ibas.config.set(ibas.CONFIG_ITEM_COMPANY, item.content);
                            }
                            if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_APPROVAL_WAY)) {
                                // 设置审批方法
                                ibas.config.set(ibas.CONFIG_ITEM_APPROVAL_WAY, item.content);
                            }
                            if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_ORGANIZATION_WAY)) {
                                // 设置组织方式
                                ibas.config.set(ibas.CONFIG_ITEM_ORGANIZATION_WAY, item.content);
                            }
                            if (ibas.strings.equalsIgnoreCase(item.name, ibas.CONFIG_ITEM_OWNERSHIP_WAY)) {
                                // 设置权限判断方式
                                ibas.config.set(ibas.CONFIG_ITEM_OWNERSHIP_WAY, item.content);
                            }
                        }
                    }
                    // 注册运行变量
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_ID, user.id);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_CODE, user.code);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_NAME, user.name);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_SUPER, user.super);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_BELONG, user.belong);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_TOKEN, user.token);
                    ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_IDENTITIES, user.identities);
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
                                this.destroy();
                            }
                        }
                    });
                } catch (error) {
                    this.messages(error);
                }
            }
            /**
             * 显示消息对话框
             * @param caller 消息调用者
             */
            protected messages(caller: ibas.IMessgesCaller): void;
            /**
             * 显示消息对话框
             * @param type 消息类型
             * @param message 消息内容
             */
            protected messages(type: ibas.emMessageType, message: string): void;
            /**
             * 显示消息对话框
             * @param error 错误
             */
            protected messages(error: Error): void;
            protected messages(): void {
                if (arguments[0] instanceof Error) {
                    let error: Error = arguments[0];
                    if (this.view instanceof ibas.View) {
                        this.view.isBusy = true;
                    }
                    super.messages({
                        type: ibas.emMessageType.ERROR,
                        title: ibas.strings.isEmpty(super.description) ? super.name : super.description,
                        message: !ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ?
                            error.message
                            : ibas.strings.isWith(error.stack, "Error: ", undefined) ?
                                error.stack
                                : ibas.strings.format("Error: {0}\n{1}", error.message, error.stack),
                        onCompleted: () => {
                            if (this.view instanceof ibas.View) {
                                this.view.isBusy = false;
                            }
                        }
                    });
                } else {
                    super.messages.apply(this, arguments);
                }
            }
        }
        /** 登陆-视图 */
        export interface ILoginView extends ibas.IView {
            /** 用户 */
            user: string;
            /** 密码 */
            password: string;
            /** 登陆 */
            loginEvent: Function;
            /** 显示语言列表 */
            displayLanguages(list: string[]): void;
            /** 改变语言 */
            changeLanguageEvent: Function;
            /** 语言 */
            language: string;
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
                    onCompleted(opRslt: ibas.IOperationResult<bo.IUserPrivilege>): void {
                        if (opRslt.resultCode !== 0) {
                            loader.onCompleted(new Error(opRslt.message));
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