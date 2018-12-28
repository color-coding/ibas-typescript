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
                    if (view instanceof ibas.BODialogView) {
                        this.showDialogView(view);
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
                    let content: sap.ui.core.Element = sap.ui.getCore().getControl(view.id);
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
                        duration: 1500,                  // default
                        width: "15em",                   // default
                        my: "center bottom",             // default
                        at: "center bottom",             // default
                        of: window,                      // default
                        offset: "0 0",                   // default
                        collision: "fit fit",            // default
                        onClose: null,                   // default
                        autoClose: true,                 // default
                        animationTimingFunction: "ease", // default
                        animationDuration: 1000,         // default
                        closeOnBrowserNavigation: true   // default
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