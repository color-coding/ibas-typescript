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
            /** 配置项目-欢迎页手工关闭 */
            export const CONFIG_ITEM_WELCOME_VIEW_MANUAL_CLOSE: string = "welcomeViewManualClose";
            /**
             * 视图-欢迎
             */
            export class WelcomeView extends ibas.DialogView implements app.IWelcomeView {
                /** 绘制视图 */
                draw(): any {
                    let form: sap.m.Dialog = new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: true,
                        // showHeader: false,
                        horizontalScrolling: false,
                        verticalScrolling: true,
                        contentHeight: "auto",
                        contentWidth: "auto",
                        content: [
                            this.page = new sap.m.Page("", {
                                enableScrolling: false,
                                showNavButton: false,
                                showHeader: false,
                                content: [
                                ]
                            })
                        ],
                        endButton: new sap.m.Button("", {
                            text: ibas.i18n.prop("shell_close"),
                            type: sap.m.ButtonType.Transparent,
                            visible: ibas.config.get(CONFIG_ITEM_WELCOME_VIEW_MANUAL_CLOSE, true),
                            enabled: false,
                            press: () => {
                                this.fireViewEvents(this.closeEvent);
                            }
                        })
                    }).addStyleClass("sapUiNoContentPadding");
                    setTimeout(() => {
                        if (form instanceof sap.m.Dialog && form.isOpen()) {
                            form.getEndButton().setEnabled(true);
                            form = null;
                        }
                    }, 3000);
                    return form;
                }
                private page: sap.m.Page;
                /** 显示内容 */
                showContent(content: string): void {
                    if (ibas.strings.isWith(content, undefined, ".jpg")
                        || ibas.strings.isWith(content, undefined, ".png")
                        || ibas.strings.isWith(content, undefined, ".bmp")) {
                        this.page.addContent(new sap.m.FlexBox("", {
                            alignItems: sap.m.FlexAlignItems.Center,
                            justifyContent: sap.m.FlexJustifyContent.Center,
                            height: "100%",
                            width: "100%",
                            items: [
                                new sap.m.Image("", {
                                    height: "100%",
                                    width: "100%",
                                    src: content,
                                })
                            ]
                        }));
                    } else if (ibas.strings.isWith(content, "http", undefined)) {
                        let html: sap.ui.core.HTML = new sap.ui.core.HTML("", {
                            content: ibas.strings.format(
                                `<iframe src="{0}" width="100%" height="100%" frameborder="no" style="border:0px;" scrolling="no"></iframe>`, content),
                            preferDOM: false,
                            sanitizeContent: true,
                            visible: true,
                        });
                        this.page.addContent(html);
                    } else if (!ibas.strings.isEmpty(content)) {
                        this.page.addContent(new sap.m.Text("", {
                            height: "100%",
                            width: "100%",
                            text: content,
                        }));
                    } else {
                        let msgPage: sap.m.MessagePage = new sap.m.MessagePage("", {
                            icon: "sap-icon://fob-watch",
                            text: ibas.i18n.prop("shell_system_preparing"),
                            description: "",
                            showHeader: false,
                        });
                        this.page.addContent(msgPage);
                        setTimeout(() => {
                            if (this.isDisplayed === true && msgPage.getVisible() === true) {
                                msgPage.setText(ibas.i18n.prop("shell_system_prepared"));
                            }
                        }, 3000);
                    }
                }
                /** 按钮按下时 */
                protected onKeyDown(event: KeyboardEvent): void {
                    if (ibas.objects.isNull(event)) {
                        return;
                    }
                    if (event.keyCode === 13) {
                        this.fireViewEvents(this.closeEvent);
                    }
                }
            }
        }
    }
}