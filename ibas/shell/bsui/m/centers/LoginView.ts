/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as sys from "../../../../bsbas/systems/index";
import * as ibas from "../../../../index";
import { utils } from "../../../../../openui5/typings/ibas.utils";

/**
 * 视图-登陆
 */
export class LoginView extends ibas.BOView implements sys.ILoginView {
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
    private languages: sap.m.ComboBox;
    /** 语言 */
    get language(): string {
        return this.languages.getSelectedKey();
    }
    set language(value: string) {
        this.languages.setSelectedKey(value);
    }
    /** 显示语言列表 */
    displayLanguages(list: string[]): void {
        this.languages.destroyItems();
        for (let item of list) {
            this.languages.addItem(new sap.ui.core.Item("", {
                text: item,
                // enabled: false,
                textDirection: sap.ui.core.TextDirection.Inherit,
                key: item
            }));
        }
    }
    /** 改变语言 */
    changeLanguageEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.txtUser = new sap.m.Input("", {
            value: ibas.config.get(LoginView.CONFIG_ITEM_DEFAULT_USER)
        });
        this.txtPassword = new sap.m.Input("",
            {
                value: ibas.config.get(LoginView.CONFIG_ITEM_DEFAULT_PASSWORD),
                type: "Password"
            });
        this.languages = new sap.m.ComboBox("", {
            placeholder: ibas.i18n.prop("sys_shell_ui_chooose_language"),
            selectionChange: function (): void {
                that.fireViewEvents(that.changeLanguageEvent);
            }
        });
        this.butLogin = new sap.m.Button("", {
            text: ibas.i18n.prop("sys_shell_ui_login"),
            press: function (): void {
                that.fireViewEvents(that.loginEvent);
            }
        });
        this.form = new sap.ui.layout.form.SimpleForm("",
            {
                content: [
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_ui_user") }),
                    this.txtUser,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_ui_password") }),
                    this.txtPassword,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_ui_language") }),
                    this.languages,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_ui_plantform") }),
                    new sap.m.ComboBox("", {
                        enabled: false,
                        items: utils.createComboBoxItems(ibas.emPlantform),
                        selectedKey: ibas.config.get(ibas.ModuleConsole.CONFIG_ITEM_PLANTFORM)
                    }),
                    this.butLogin
                ]
            });
        // 重新赋值id
        this.id = this.form.getId();
        return this.form;
    }
    private form: sap.ui.layout.form.SimpleForm;

}