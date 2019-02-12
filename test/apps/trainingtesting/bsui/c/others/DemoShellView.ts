/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export const UI_DATA_KEY_VIEW: string = "__UI_DATA_KEY_VIEW";
        export namespace c {
            export class DemoShellView extends shell.app.ShellView implements app.IDemoShellView {
                /** 激活地图应用 */
                activateMapEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return new sap.m.Page("", {
                        title: this.title,
                        enableScrolling: false,
                        showHeader: true,
                        showSubHeader: false,
                        showNavButton: true,
                        headerContent: [
                            new sap.m.Button("", {
                                icon: "sap-icon://map",
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.activateMapEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                icon: "sap-icon://inspect-down",
                                tooltip: ibas.i18n.prop("shell_close_view"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            })
                        ],
                        content: [
                            this.pageContainer = new sap.m.NavContainer("", {
                                pages: [
                                    new sap.m.MessagePage("", {
                                        text: this.title,
                                        description: "",
                                        showHeader: false,
                                        showNavButton: false,
                                        icon: "sap-icon://hello-world",
                                        textDirection: sap.ui.core.TextDirection.Inherit
                                    }),
                                ]
                            })
                        ],
                        navButtonPress(): void {
                            let page: sap.ui.core.Control = that.pageContainer.getCurrentPage();
                            if (!ibas.objects.isNull(page)) {
                                for (let item of page.getCustomData()) {
                                    if (item.getKey() === UI_DATA_KEY_VIEW) {
                                        let value: any = item.getValue();
                                        if (value instanceof ibas.View) {
                                            value.closeEvent.apply(value.application);
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
                private pageContainer: sap.m.NavContainer;

                showView(view: ibas.IView): void {
                    if (view instanceof ibas.DialogView) {
                        this.showDialogView(view);
                    } else if (view instanceof ibas.BarView) {
                        let viewContent: any = view.draw();
                        if (viewContent instanceof sap.m.QuickView) {
                            // 快速视图
                            viewContent.attachAfterClose(null, function (): void {
                                view.isDisplayed = false;
                                view.onClosed();
                            });
                            view.id = viewContent.getId();
                            viewContent.openBy(<any>sap.ui.getCore().byId(view.barId));
                        } else if (viewContent instanceof sap.m.Dialog) {
                            // 对话框视图
                            // 添加关闭事件
                            viewContent.attachAfterClose(null, function (): void {
                                view.isDisplayed = false;
                                view.onClosed();
                            });
                            // 设置视图紧凑
                            if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                                viewContent.addStyleClass("sapUiSizeCompact");
                            }
                            view.id = viewContent.getId();
                            viewContent.open();
                        }
                    } else {
                        let page: sap.m.Page = new sap.m.Page("", {
                            enableScrolling: false,
                            showNavButton: false,
                            showHeader: false,
                            content: [
                                view.draw()
                            ],
                            customData: [
                                new sap.ui.core.CustomData("", {
                                    key: UI_DATA_KEY_VIEW,
                                    value: view,
                                    writeToDom: false,
                                })
                            ]
                        });
                        if (view instanceof ibas.BOQueryView) {
                            this.showQueryPanel(view, {
                                embedded(view: any): void {
                                    page.setSubHeader(null);
                                    page.setSubHeader(view);
                                    page.setShowSubHeader(true);
                                }
                            });
                        }
                        view.id = page.getId();
                        this.pageContainer.addPage(page);
                        this.pageContainer.to(page.getId());
                    }
                    if (view instanceof ibas.View) {
                        view.isDisplayed = true;
                        view.onDisplayed();
                    }
                }
                destroyView(view: ibas.IView): void {
                    let page: sap.ui.core.Control = this.pageContainer.getPage(view.id);
                    if (!ibas.objects.isNull(page)) {
                        this.pageContainer.back(null);
                        this.pageContainer.removePage(view.id);
                    } else {
                        let viewContent: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                        viewContent.destroy(true);
                    }
                    if (view instanceof ibas.View) {
                        view.isDisplayed = false;
                        view.onClosed();
                    }
                }
                busyView(view: ibas.IView, busy: boolean, msg: string): void {
                    let content: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                    if (content instanceof sap.ui.core.Control) {
                        content.setBusy(busy);
                    }
                }
                showStatusMessage(type: ibas.emMessageType, message: string): void {
                    message = message.replace(/\{(.+?)\}/g, function (value: string): string {
                        return ibas.businessobjects.describe(value);
                    });
                    jQuery.sap.require("sap.m.MessageToast");
                    sap.m.MessageToast.show(message, {
                        duration: 1500,
                        width: "15em",
                        my: "center bottom",
                        at: "center bottom",
                        of: window,
                        offset: "0 0",
                        collision: "fit fit",
                        onClose: null,
                        autoClose: true,
                        animationTimingFunction: "ease",
                        animationDuration: 1000,
                        closeOnBrowserNavigation: true
                    });
                }
                showMessageBox(caller: ibas.IMessgesCaller): void {
                    jQuery.sap.require("sap.m.MessageBox");
                    let message: string = caller.message.replace(/\{(.+?)\}/g, function (value: string): string {
                        return ibas.businessobjects.describe(value);
                    });
                    sap.m.MessageBox.show(message, {
                        icon: openui5.utils.toMessageBoxIcon(caller.type),
                        title: caller.title,
                        actions: openui5.utils.toMessageBoxAction(caller.actions),
                        onClose(oAction: any): void {
                            if (!ibas.objects.isNull(caller.onCompleted)) {
                                caller.onCompleted(openui5.utils.toMessageAction(oAction));
                            }
                        }
                    });
                }
            }
        }
    }
}