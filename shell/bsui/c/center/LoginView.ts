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
            /** 配置项目-使用条款 */
            export const CONFIG_ITEM_USAGE_TERMS: string = "usageTerms";
            /** 配置项目-副标题 */
            export const CONFIG_ITEM_SUBHEADING: string = "subheading";
            /** 配置项目-启用验证码 */
            export const CONFIG_ITEM_ENABLE_LOGIN_VERIFICATION: string = "enableLoginVerification";
            /** 配置项目-空验证码地址 */
            export const CONFIG_ITEM_EMPTY_VERIFICATION_CODE_URL: string = "emptyVerificationCodeUrl";
            /**
             * 视图-登陆
             */
            export class LoginView extends ibas.View implements app.ILoginView {
                /** 登陆 */
                loginEvent: Function;
                /** 改变语言 */
                changeLanguageEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    // 设置应用名称
                    let user: string = ibas.config.get(CONFIG_ITEM_DEFAULT_USER);
                    let password: string = ibas.config.get(CONFIG_ITEM_DEFAULT_PASSWORD);
                    let subheading: string = ibas.config.get(CONFIG_ITEM_SUBHEADING);
                    let usageTerms: string = ibas.i18n.prop("shell_app_usageterms");
                    if (ibas.strings.isWith(usageTerms, "[", "]")) {
                        usageTerms = undefined;
                    }
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
                                type: sap.m.InputType.Password,
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("shell_verification_code"),
                                visible: ibas.config.get(CONFIG_ITEM_ENABLE_LOGIN_VERIFICATION, false)
                                    && !ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false),
                            }),
                            new sap.m.HBox("", {
                                height: "auto",
                                renderType: sap.m.FlexRendertype.Bare,
                                alignItems: sap.m.FlexAlignItems.Stretch,
                                justifyContent: sap.m.FlexJustifyContent.Center,
                                items: [
                                    this.txtVerification = new sap.m.Input("", {
                                        width: "100%",
                                        type: sap.m.InputType.Number,
                                        placeholder: ibas.i18n.prop("shell_please_input_results"),
                                    }),
                                    this.imgVerification = new sap.m.Image("", {
                                        lazyLoading: true,
                                        press(this: sap.m.Image): void {
                                            this.setAlt(undefined);
                                            that.getVerificationImage();
                                        },
                                        error(this: sap.m.Image): void {
                                            let url: string = ibas.config.get(CONFIG_ITEM_EMPTY_VERIFICATION_CODE_URL, "");
                                            if (ibas.strings.isEmpty(url)) {
                                                const blob: Blob = new Blob([
                                                    `<svg xmlns="http://www.w3.org/2000/svg" width="170px" height="20px"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="14px" fill="red">请点击刷新</text></svg>`
                                                ], { type: "image/svg+xml" });
                                                url = URL.createObjectURL(blob);
                                                ibas.config.set(CONFIG_ITEM_EMPTY_VERIFICATION_CODE_URL, url);
                                            }
                                            this.setSrc(url);
                                        },
                                    }).addStyleClass("sapUiTinyMarginBegin"),
                                ],
                                visible: ibas.config.get(CONFIG_ITEM_ENABLE_LOGIN_VERIFICATION, false)
                                    && !ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false),
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
                            new sap.m.VBox("", {
                                fitContainer: true,
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Div,
                                items: [
                                    new sap.m.HBox("", {
                                        fitContainer: true,
                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                        alignItems: sap.m.FlexAlignItems.Center,
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
                                                    let user: any = {
                                                        user: that.txtUser.getValue(),
                                                        password: that.txtPassword.getValue()
                                                    };
                                                    if ((<sap.ui.core.Control>that.imgVerification.getParent()).getVisible()) {
                                                        user.verification
                                                            = ibas.strings.format("{0}={1}", that.imgVerification.getAlt(), that.txtVerification.getValue());
                                                    }
                                                    that.fireViewEvents(that.loginEvent, user);
                                                },
                                                width: "40%",
                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                        ]
                                    }),
                                    new sap.m.HBox("", {
                                        fitContainer: true,
                                        justifyContent: sap.m.FlexJustifyContent.End,
                                        alignItems: sap.m.FlexAlignItems.Center,
                                        renderType: sap.m.FlexRendertype.Div,
                                        items: [
                                            new sap.m.FormattedText("", {
                                                htmlText: usageTerms,
                                            }),
                                        ],
                                        visible: !ibas.strings.isEmpty(usageTerms),
                                    }),
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
                    if (event.keyCode === jQuery.sap.KeyCodes.ENTER) {
                        let user: any = {
                            user: this.txtUser.getValue(),
                            password: this.txtPassword.getValue()
                        };
                        if ((<sap.ui.core.Control>this.imgVerification.getParent()).getVisible()) {
                            user.verification
                                = ibas.strings.format("{0}={1}", this.imgVerification.getAlt(), this.txtVerification.getValue());
                        }
                        this.fireViewEvents(this.loginEvent, user);
                    }
                }
                protected onDisplayed(): void {
                    super.onDisplayed();
                    this.getVerificationImage();
                }
                private txtUser: sap.m.Input;
                private txtPassword: sap.m.Input;
                private txtVerification: sap.m.Input;
                private imgVerification: sap.m.Image;
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
                private getVerificationImage(): void {
                    if (ibas.strings.isEmpty(this.imgVerification.getAlt())) {
                        this.imgVerification.setAlt(ibas.uuids.random());
                        let address: string = bo.repository.create().address;
                        if (ibas.strings.isWith(address, "http", undefined)) {
                            if (!ibas.strings.isWith(address, undefined, "/")) {
                                address += "/";
                            }
                            if (ibas.strings.isWith(address, undefined, "/data/")) {
                                address = address.substring(0, address.length - 6);
                                address += "/verify/";
                            }
                        }
                        if (!ibas.strings.isWith(address, "http", "/verify/")) {
                            address = ibas.urls.rootUrl();
                        }
                        this.imgVerification.setSrc(ibas.urls.normalize(address + this.imgVerification.getAlt()));
                    }
                }
            }
            /**
             * 视图-登陆
             */
            export class BigLoginView extends LoginView {
                /** 绘制视图 */
                draw(): any {
                    let form: sap.ui.core.Control = super.draw();
                    if (form instanceof sap.ui.layout.form.SimpleForm) {
                        form.setWidth("460px");
                    }
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
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        content: [
                                            new sap.m.FlexBox("", {
                                                width: "100%",
                                                height: "100%",
                                                fitContainer: true,
                                                renderType: sap.m.FlexRendertype.Div,
                                                alignItems: sap.m.FlexAlignItems.Stretch,
                                                alignContent: sap.m.FlexAlignContent.Stretch,
                                                justifyContent: sap.m.FlexJustifyContent.Center,
                                                direction: sap.m.FlexDirection.Row,
                                                items: [
                                                    form
                                                ]
                                            }),
                                        ]
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