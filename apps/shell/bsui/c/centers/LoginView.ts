/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { ILoginView } from "../../../../../ibas/bsbas/systems/index";
import { i18n, BOView, config } from "../../../../../ibas/index";

/**
 * 视图-登陆
 */
export class LoginView extends BOView implements ILoginView {
    /** 配置项目-默认用户 */
    static CONFIG_ITEM_DEFAULT_USER = "defaultUser";
    /** 配置项目-默认用户密码 */
    static CONFIG_ITEM_DEFAULT_PASSWORD = "defaultPassword";

    private txtUser: sap.m.Input;
    /** 用户 */
    get user(): string {
        return this.txtUser.getValue();
    }
    set user(value: string) {
        this.txtUser.setValue(value);
    }
    private txtPassword: sap.m.Input;
    /** 密码 */
    get password(): string {
        return this.txtPassword.getValue();
    }
    set password(value: string) {
        this.txtPassword.setValue(value);
    }
    private butLogin: sap.m.Button;
    /** 登陆 */
    loginEvent: Function;
    private fireLoginEvent(): void {
        this.fireViewEvents(this.loginEvent, this.user, this.password);
    }
    /** 绘制视图 */
    darw(): any {
        this.txtUser = new sap.m.Input("", {
            value: config.get(LoginView.CONFIG_ITEM_DEFAULT_USER)
        });
        this.txtPassword = new sap.m.Input("",
            {
                value: config.get(LoginView.CONFIG_ITEM_DEFAULT_PASSWORD),
                type: "Password"
            });
        this.butLogin = new sap.m.Button("", {
            text: i18n.prop("sys_shell_ui_login")
        });
        this.butLogin.attachPress(this.fireLoginEvent, this);
        this.form = new sap.ui.layout.Grid("",
            {
                defaultSpan: "L3 M4 S6",
                content: [
                    new sap.m.Label("", { text: i18n.prop("sys_shell_ui_user") }),
                    this.txtUser,
                    new sap.m.Label("", { text: i18n.prop("sys_shell_ui_password") }),
                    this.txtPassword,
                    this.butLogin
                ]
            });
        // 重新赋值id
        this.id = this.form.getId();
        return this.form;
    }
    private form: sap.ui.layout.Grid;

}