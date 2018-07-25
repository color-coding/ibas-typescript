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
                this.busy(true, ibas.i18n.prop("shell_logging_system"));
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "app: user [{0}] login system.", this.view.user);
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.userConnect({
                    caller: this, // 设置调用者，则onCompleted修正this
                    user: this.view.user,
                    password: this.view.password,
                    onCompleted: this.onConnectCompleted,
                });
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
                    // 启动系统中心
                    let centerApp: CenterApp = new CenterApp();
                    centerApp.viewShower = this.viewShower;
                    centerApp.navigation = this.navigation;
                    centerApp.run(user);
                    this.destroy();
                } catch (error) {
                    this.messages(error);
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
    }
}