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
            /** 配置项目-副标题 */
            export const CONFIG_ITEM_SUBHEADING: string = "subheading";
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
                /** 绘制视图 */
                draw(): any {
                    // 设置应用名称
                    let user: string = ibas.config.get(CONFIG_ITEM_DEFAULT_USER);
                    let password: string = ibas.config.get(CONFIG_ITEM_DEFAULT_PASSWORD);
                    let subheading: string = ibas.config.get(CONFIG_ITEM_SUBHEADING);
                    let that: this = this;
                    return new sap.ui.layout.form.SimpleForm("", {
                        content: [
                            new sap.m.VBox("", {
                                items: [
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.ToolbarSpacer(),
                                            new sap.m.Title("", {
                                                text: ibas.config.get(app.CONFIG_ITEM_APPLICATION_NAME, ibas.i18n.prop("shell_name")),
                                                level: sap.ui.core.TitleLevel.H1,
                                                titleStyle: sap.ui.core.TitleLevel.H1,
                                                textAlign: sap.ui.core.TextAlign.Center,
                                            }),
                                            new sap.m.ToolbarSpacer(),
                                        ],
                                        style: sap.m.ToolbarStyle.Clear,
                                    }).addStyleClass("sapUiTinyMarginBottom"),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.ToolbarSpacer(),
                                            new sap.m.Title("", {
                                                text: subheading,
                                                level: sap.ui.core.TitleLevel.H4,
                                                titleStyle: sap.ui.core.TitleLevel.H4,
                                                textAlign: sap.ui.core.TextAlign.Right
                                            }).addStyleClass("sapUiLargeMarginEnd"),
                                        ],
                                        visible: ibas.strings.isEmpty(subheading) ? false : true,
                                        style: sap.m.ToolbarStyle.Clear,
                                    }),
                                ]
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
                            this.getLanguageItems(
                                new sap.m.Select("", {
                                    forceSelection: false,
                                    resetOnMissingKey: true,
                                    change: function (event: sap.ui.base.Event): void {
                                        let selectedItem: any = event.getParameter("selectedItem");
                                        if (selectedItem instanceof sap.ui.core.Item) {
                                            ibas.i18n.language = selectedItem.getKey();
                                            that.application.destroy();
                                            ibas.i18n.reload(() => {
                                                that.application.description = ibas.i18n.prop(that.application.name);
                                                that.application.show();
                                            });
                                        }
                                    }
                                })
                            ),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_plantform")
                            }),
                            new sap.m.HBox("", {
                                width: "100%",
                                height: "100%",
                                alignContent: sap.m.FlexAlignContent.Start,
                                alignItems: sap.m.FlexAlignItems.Center,
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                items: [
                                    new sap.m.Select("", {
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
                                        },
                                        width: "60%",
                                    }),
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_login"),
                                        type: sap.m.ButtonType.Accept,
                                        press: function (): void {
                                            that.fireViewEvents(that.loginEvent);
                                        },
                                        width: "40%",
                                    }).addStyleClass("sapUiTinyMarginBegin"),
                                ]
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
                protected onKeyDown(event: KeyboardEvent): void {
                    if (ibas.objects.isNull(event)) {
                        return;
                    }
                    if (event.keyCode === 13) {
                        this.fireViewEvents(this.loginEvent);
                    }
                }
                private txtUser: sap.m.Input;
                private txtPassword: sap.m.Input;
                private getLanguageItems(select: sap.m.Select): sap.m.Select {
                    jQuery.ajax({
                        url: ibas.urls.rootUrl("shell/index") + "/languages.json",
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: true,
                        success: function (data: any): void {
                            if (Array.isArray(data)) {
                                for (let item of data) {
                                    if (typeof item === "string") {
                                        select.addItem(new sap.ui.core.Item("", {
                                            key: item,
                                            text: item
                                        }));
                                    } else if (typeof item === "object") {
                                        let names: string[] = Object.keys(item);
                                        if (names.length > 0) {
                                            select.addItem(new sap.ui.core.Item("", {
                                                key: names[0],
                                                text: item[names[0]]
                                            }));
                                        }
                                    }
                                }
                            }
                            select.setSelectedKey(ibas.i18n.language);
                        },
                    });
                    return select;
                }
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