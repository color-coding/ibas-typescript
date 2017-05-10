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
    /** 用户 */
    get user(): string {
        return this.txtUser.getValue();
    }
    set user(value: string) {
        this.txtUser.setValue(value);
    }
    /** 密码 */
    get password(): string {
        return this.txtPassword.getValue();
    }
    set password(value: string) {
        this.txtPassword.setValue(value);
    }
    /** 语言 */
    get language(): string {
        return this.sltLanguages.getSelectedKey();
    }
    set language(value: string) {
        this.sltLanguages.setSelectedKey(value);
    }
    /** 显示语言列表 */
    displayLanguages(list: string[]): void {
        this.sltLanguages.destroyItems();
        for (let item of list) {
            this.sltLanguages.addItem(new sap.ui.core.Item("", {
                text: item,
                // enabled: false,
                textDirection: sap.ui.core.TextDirection.Inherit,
                key: item
            }));
        }
    }
    private static UI_LOGIN_USER: string = "login_user";
    private static UI_LOGIN_PASSWORD: string = "login_password";
    private static UI_LOGIN_LANGUAGE: string = "login_language";
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.form = new sap.ui.layout.form.SimpleForm("",
            {
                layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
                emptySpanXL: -1,
                emptySpanL: 3,
                emptySpanM: 2,
                emptySpanS: 1,
                // labelSpanL: 8,
                // labelSpanM: 4,
                // labelSpanS: 24,
                // columnsXL: -1,
                // columnsL: 1,
                // columnsM: 1,
                adjustLabelSpan: false,
                content: [
                    new sap.m.Title("", {
                        text: ibas.i18n.prop("sys_shell_name") ,
                        level: sap.ui.core.TitleLevel.H1,
                        titleStyle: sap.ui.core.TitleLevel.H1,
                        textAlign: sap.ui.core.TextAlign.End
                    }),
                    new sap.m.Label("", {
                        text: ibas.i18n.prop("sys_shell_user")
                    }),
                    new sap.m.Input(LoginView.UI_LOGIN_USER, {
                        value: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)
                            ? ibas.config.get(CONFIG_ITEM_DEFAULT_USER)
                            : "",
                    }),
                    new sap.m.Label("", {
                        text: ibas.i18n.prop("sys_shell_password")
                    }),
                    new sap.m.Input(LoginView.UI_LOGIN_PASSWORD, {
                        value: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)
                            ? ibas.config.get(CONFIG_ITEM_DEFAULT_PASSWORD)
                            : "",
                        type: "Password"
                    }),
                    new sap.m.Label("", {
                        text: ibas.i18n.prop("sys_shell_language")
                    }),
                    new sap.m.Select(LoginView.UI_LOGIN_LANGUAGE, {
                        placeholder: ibas.i18n.prop("sys_shell_chooose_language"),
                        change: function (): void {
                            that.fireViewEvents(that.changeLanguageEvent);
                        }
                    }),
                    new sap.m.Label("", {
                        text: ibas.i18n.prop("sys_shell_plantform")
                    }),
                    new sap.m.Select("", {
                        enabled: false,
                        items: utils.createComboBoxItems(ibas.emPlantform),
                        selectedKey: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM)
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_login"),
                        press: function (): void {
                            that.fireViewEvents(that.loginEvent);
                        }
                    }),
                    new sap.m.Label("", {}),
                    new sap.m.Title("", {
                        text: ibas.i18n.prop("sys_shell_copyright"),
                        level: sap.ui.core.TitleLevel.H6,
                        titleStyle: sap.ui.core.TitleLevel.H6,
                        textAlign: sap.ui.core.TextAlign.End
                    })
                ]
            });
        // 重新赋值id
        this.id = this.form.getId();
        // 键盘按钮按下
        document.onkeydown = function (event: any): void {
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
    private getContorl(name: string): any {
        for (let item of this.form.getContent()) {
            if (item.getId() === name) {
                return item;
            }
        }
        return undefined;
    }
    private get txtUser(): sap.m.Input {
        return this.getContorl(LoginView.UI_LOGIN_USER);
    }
    private get txtPassword(): sap.m.Input {
        return this.getContorl(LoginView.UI_LOGIN_PASSWORD);
    }
    private get sltLanguages(): sap.m.Select {
        return this.getContorl(LoginView.UI_LOGIN_LANGUAGE);
    }

}
