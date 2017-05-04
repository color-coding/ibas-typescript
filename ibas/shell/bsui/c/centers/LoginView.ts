/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";
import { utils } from "../../../../../openui5/typings/ibas.utils";

/** 配置项目-默认用户 */
export const CONFIG_ITEM_DEFAULT_USER: string = "defaultUser";
/** 配置项目-默认用户密码 */
export const CONFIG_ITEM_DEFAULT_PASSWORD: string = "defaultPassword";
/**
 * 视图-登陆
 */
export class LoginView extends ibas.BOView implements sys.ILoginView {
    /** 登陆 */
    loginEvent: Function;
    /** 改变语言 */
    changeLanguageEvent: Function;
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
    private languages: sap.m.Select;
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
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.txtUser = new sap.m.Input("", {
            value: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)
                ? ibas.config.get(CONFIG_ITEM_DEFAULT_USER)
                : "",
        });
        this.txtPassword = new sap.m.Input("", {
            value: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)
                ? ibas.config.get(CONFIG_ITEM_DEFAULT_PASSWORD)
                : "",
            type: "Password"
        });
        this.languages = new sap.m.Select("", {
            placeholder: ibas.i18n.prop("sys_shell_chooose_language"),
            change: function (): void {
                that.fireViewEvents(that.changeLanguageEvent);
            }
        });
        this.butLogin = new sap.m.Button("", {
            text: ibas.i18n.prop("sys_shell_login"),
            press: function (): void {
                that.fireViewEvents(that.loginEvent);
            }
        });
        this.form = new sap.ui.layout.form.SimpleForm("",
            {
                layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
                content: [
                    new sap.m.Label("", {
                        text: "ibas",
                    }),
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_user") }),
                    this.txtUser,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_password") }),
                    this.txtPassword,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_language") }),
                    this.languages,
                    new sap.m.Label("", { text: ibas.i18n.prop("sys_shell_plantform") }),
                    new sap.m.Select("", {
                        enabled: false,
                        items: utils.createComboBoxItems(ibas.emPlantform),
                        selectedKey: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM)
                    }),
                    this.butLogin,
                    new sap.m.Label("", {
                        text: "Copyright © 2016-2017 ColorCoding Studio",
                        textAlign: "Right",
                    })
                ]
            });
        // 重新赋值id
        this.id = this.form.getId();
        // 键盘按钮按下
        document.onkeydown = function (event): void {
            if (ibas.objects.isNull(event)) {
                return;
            }
            if (event.keyCode === 13) {
                that.fireViewEvents(that.loginEvent);
            }
        };
        return this.form;
    }
    private form: sap.ui.layout.form.SimpleForm;

}
