/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../index.d.ts" />
namespace shell {
    export namespace ui {
        export const UI_APP: string = "__UI_APP";
        export const UI_DATA_KEY_VIEW: string = "__UI_DATA_KEY_VIEW";
        export const UI_DATA_KEY_HASH: string = "__UI_DATA_KEY_HASH";
        /**
         * 视图-显示者-默认
         */
        export class ViewShower implements ibas.IViewShower {
            /** 显示视图 */
            show(view: ibas.IView): void {
                if (!(view instanceof ibas.View)) {
                    throw new Error(ibas.i18n.prop("shell_invalid_ui"));
                }
                let viewContent: any = view.draw();
                if (ibas.objects.isNull(viewContent)) {
                    ibas.logger.log(ibas.emMessageLevel.WARN, "shower: empty view.");
                    return;
                }
                if (viewContent instanceof sap.ui.core.Element) {
                    viewContent.addCustomData(new sap.ui.core.CustomData("", {
                        key: UI_DATA_KEY_VIEW,
                        value: view,
                        writeToDom: false,
                    }));
                }
                if (view.application instanceof app.MainApp) {
                    viewContent.placeAt("content");
                } else if (view.application instanceof app.WelcomeApp) {
                    if (viewContent instanceof sap.m.Dialog) {
                        let pView: ibas.View = null;
                        viewContent.open();
                        // 隐藏app
                        let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                        if (app instanceof sap.m.App) {
                            app.setVisible(false);
                            let page: sap.ui.core.Control = app.getCurrentPage();
                            for (let item of page.getCustomData()) {
                                if (item.getKey() === UI_DATA_KEY_VIEW) {
                                    pView = item.getValue();
                                }
                            }
                            if (pView instanceof ibas.View) {
                                pView.isDisplayed = false;
                            }
                        }
                        viewContent.attachAfterClose(null, () => {
                            // 重新显示app
                            if (app instanceof sap.m.App) {
                                app.setVisible(true);
                                if (pView instanceof ibas.View) {
                                    pView.isDisplayed = true;
                                }
                                // 界面显示后，没有触发导航事件
                                (<any>app).fireAfterNavigate(undefined);
                                pView = null;
                            }
                        });
                    }
                } else if (view.application instanceof app.LoginApp) {
                    if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                        viewContent.addStyleClass("sapUiSizeCompact");
                    }
                    let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        app.addPage(viewContent);
                        app.to(viewContent);
                    }
                } else if (view.application instanceof app.CenterApp) {
                    if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                        viewContent.addStyleClass("sapUiSizeCompact");
                    }
                    let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        app.addPage(viewContent);
                        app.to(viewContent);
                    }
                }
                view.id = viewContent.getId();
                view.isDisplayed = true;
                view.onDisplayed();
            }
            /** 清理资源 */
            destroy(view: ibas.IView): void {
                let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                if (!ibas.objects.isNull(ui)) {
                    if (ui.getParent() && ui.getParent().getId() === UI_APP) {
                        let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                        if (app instanceof sap.m.App) {
                            app.setInitialPage(undefined);
                        }
                    }
                    if (ui instanceof sap.m.Dialog) {
                        ui.close();
                    } else {
                        ui.destroy(true);
                    }
                    if (view instanceof ibas.View) {
                        view.isDisplayed = false;
                        view.onClosed();
                    }
                }
                // 销毁忙对话框
                if (!ibas.objects.isNull(this.busyDialog)) {
                    this.busyDialog.destroy(true);
                    this.busyDialog = undefined;
                }
            }
            /** 忙对话框 */
            private busyDialog: sap.m.BusyDialog;
            /** 设置忙状态 */
            busy(view: ibas.IView, busy: boolean, msg: string): void {
                if (busy) {
                    if (ibas.objects.isNull(this.busyDialog)) {
                        this.busyDialog = new sap.m.BusyDialog("");
                        if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                            this.busyDialog.addStyleClass("sapUiSizeCompact");
                        }
                    }
                    this.busyDialog.setTitle(view.title);
                    this.busyDialog.setText(msg);
                    this.busyDialog.open();
                } else {
                    if (!ibas.objects.isNull(this.busyDialog)) {
                        this.busyDialog.close();
                        this.busyDialog.destroy(true);
                        this.busyDialog = undefined;
                    }
                }
            }
            /** 进程消息 */
            proceeding(view: ibas.IView, type: ibas.emMessageType, msg: string): void {
                this.messages({
                    type: type,
                    message: msg
                });
            }
            /** 对话消息 */
            messages(caller: ibas.IMessgesCaller): void {
                jQuery.sap.require("sap.m.MessageBox");
                sap.m.MessageBox.show(
                    caller.message, {
                        title: caller.title,
                        icon: openui5.utils.toMessageBoxIcon(caller.type),
                        actions: openui5.utils.toMessageBoxAction(caller.actions),
                        onClose(oAction: any): void {
                            if (caller.onCompleted instanceof Function) {
                                caller.onCompleted(openui5.utils.toMessageAction(oAction));
                            }
                        }
                    }
                );
            }
        }
    }
}