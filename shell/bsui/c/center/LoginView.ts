/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        export namespace c {
            /** 配置项目-默认用户 */
            export const CONFIG_ITEM_DEFAULT_USER: string = "defaultUser";
            /** 配置项目-默认用户密码 */
            export const CONFIG_ITEM_DEFAULT_PASSWORD: string = "defaultPassword";
            /** 配置项目-覆盖的版权声明 */
            export const CONFIG_ITEM_COVERED_COPYRIGHT: string = "copyright";
            /**
             * 视图-登陆
             */
            export class LoginView extends ibas.View implements app.ILoginView {
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
                /** 绘制视图 */
                draw(): any {
                    // 设置应用名称
                    let user: string = ibas.config.get(CONFIG_ITEM_DEFAULT_USER);
                    let password: string = ibas.config.get(CONFIG_ITEM_DEFAULT_PASSWORD);
                    let that: this = this;
                    return new sap.ui.layout.form.SimpleForm("", {
                        content: [
                            new sap.m.Title("", {
                                text: document.title,
                                level: sap.ui.core.TitleLevel.H1,
                                titleStyle: sap.ui.core.TitleLevel.H1,
                                textAlign: sap.ui.core.TextAlign.Center,
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_user")
                            }),
                            this.txtUser = new sap.m.Input("", {
                                value: !ibas.strings.isEmpty(user) ? user : "",
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_password")
                            }),
                            this.txtPassword = new sap.m.Input("", {
                                value: !ibas.strings.isEmpty(password) ? password : "",
                                type: "Password"
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_language")
                            }),
                            this.sltLanguages = new sap.m.Select("", {
                                change: function (): void {
                                    that.fireViewEvents(that.changeLanguageEvent);
                                }
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_plantform")
                            }),
                            new sap.m.Select("", {
                                // enabled: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? true : false,
                                items: [
                                    new sap.ui.core.ListItem("", {
                                        key: ibas.emPlantform.DESKTOP,
                                        text: ibas.enums.describe(ibas.emPlantform, ibas.emPlantform.DESKTOP),
                                    }),
                                    new sap.ui.core.ListItem("", {
                                        key: ibas.emPlantform.PHONE,
                                        text: ibas.enums.describe(ibas.emPlantform, ibas.emPlantform.PHONE),
                                    }),
                                    new sap.ui.core.ListItem("", {
                                        key: ibas.emPlantform.TABLET,
                                        text: ibas.enums.describe(ibas.emPlantform, ibas.emPlantform.TABLET),
                                    }),
                                ],
                                selectedKey: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM),
                                change: function (): void {
                                    ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM,
                                        parseInt(this.getSelectedKey(), 0)
                                    );
                                    that.fireViewEvents(that.closeEvent);
                                    that.application.show();
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_login"),
                                type: sap.m.ButtonType.Accept,
                                press: function (): void {
                                    that.fireViewEvents(that.loginEvent);
                                }
                            }),
                            new sap.m.Label("", {}),
                            new sap.m.Title("", {
                                text: ibas.config.get(CONFIG_ITEM_COVERED_COPYRIGHT, ibas.i18n.prop("shell_copyright")),
                                level: sap.ui.core.TitleLevel.H6,
                                titleStyle: sap.ui.core.TitleLevel.H6,
                                textAlign: sap.ui.core.TextAlign.End
                            })
                        ]
                    });
                }
                /** 按钮按下时 */
                onKeyDown(event: KeyboardEvent): void {
                    if (ibas.objects.isNull(event)) {
                        return;
                    }
                    if (event.keyCode === 13) {
                        this.fireViewEvents(this.loginEvent);
                    }
                }
                private txtUser: sap.m.Input;
                private txtPassword: sap.m.Input;
                private sltLanguages: sap.m.Select;
            }
            /**
             * 视图-登陆
             */
            export class BigLoginView extends LoginView {
                /** 绘制视图 */
                draw(): any {
                    let form: sap.ui.core.Control = super.draw();
                    let splitter: sap.ui.layout.Splitter = new sap.ui.layout.Splitter("", {
                        orientation: sap.ui.core.Orientation.Vertical,
                        contentAreas: [
                            // 头部空白
                            new sap.ui.layout.Splitter("", {
                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                    resizable: false,
                                    size: "15%",
                                }),
                            }),
                            new sap.ui.layout.Splitter("", {
                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                    resizable: false,
                                    size: "80%",
                                }),
                                contentAreas: [
                                    new sap.ui.layout.Splitter("", {
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            resizable: false,
                                            size: "auto",
                                        }),
                                    }),
                                    new sap.ui.layout.Splitter("", {
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            resizable: false,
                                            size: "460px",
                                        }),
                                        contentAreas: [
                                            new sap.ui.layout.Splitter("", {
                                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                                    resizable: false,
                                                    size: "auto",
                                                }),
                                                orientation: sap.ui.core.Orientation.Vertical,
                                                contentAreas: [
                                                    form
                                                ]
                                            }),
                                        ]
                                    }),
                                    new sap.ui.layout.Splitter("", {
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            resizable: false,
                                            size: "auto",
                                        }),
                                    }),
                                ]
                            }),
                        ]
                    });
                    // 重新赋值id
                    this.id = splitter.getId();
                    return splitter;
                }
            }
        }
    }
}