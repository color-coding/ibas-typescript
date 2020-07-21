/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../index.d.ts" />
/// <reference path="./Component.d.ts" />
/// <reference path="./Component.ts" />
namespace shell {
    export namespace ui {
        export const UI_APP: string = "__UI_APP";
        // 语言变化监听
        ibas.i18n.registerListener({
            onLanguageChanged(language: string): void {
                if (ibas.strings.isEmpty(language)) {
                    return;
                }
                if (ibas.strings.isWith(language, "zh_", "") || ibas.strings.isWith(language, "zh-", "")) {
                    sap.ui.getCore().getConfiguration().setLanguage(language);
                } else {
                    sap.ui.getCore().getConfiguration().setLanguage(language.split("-")[0]);
                }
            }
        });
        // 配置变化
        ibas.config.registerListener({
            onConfigurationChanged(name: string, value: any): void {
                if (ibas.strings.equals(ibas.CONFIG_ITEM_PLANTFORM, name)) {
                    // 平台变化，修改控件紧缩模式
                    let body: JQuery = jQuery(document.body);
                    if (value === ibas.emPlantform.DESKTOP) {
                        body.toggleClass("sapUiSizeCompact", true).toggleClass("sapUiSizeCozy", false).toggleClass("sapUiSizeCondensed", false);
                        // 桌面平台，使用紧凑视图
                        ibas.config.set(openui5.CONFIG_ITEM_COMPACT_SCREEN, true);
                    } else {
                        body.toggleClass("sapUiSizeCompact", false).toggleClass("sapUiSizeCozy", true).toggleClass("sapUiSizeCondensed", false);
                        // 使用舒适视图
                        ibas.config.set(openui5.CONFIG_ITEM_COMPACT_SCREEN, false);
                    }
                }
            }
        });
        // 激活平台设置
        ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM));
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
                    sap.extension.customdatas.setView(viewContent, view);
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
                            pView = sap.extension.customdatas.getView(app.getCurrentPage());
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
                    let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        app.addPage(viewContent);
                        app.to(viewContent);
                    }
                } else if (view.application instanceof app.CenterApp) {
                    let app: sap.ui.core.Element = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        app.addPage(viewContent);
                        app.to(viewContent);
                    }
                }
                view.id = viewContent.getId();
                ibas.views.displayed.call(view);
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
                        ibas.views.closed.call(view);
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
                    }
                    this.busyDialog.setTitle(view.title);
                    this.busyDialog.setText(msg);
                    this.busyDialog.open();
                } else {
                    if (!ibas.objects.isNull(this.busyDialog)) {
                        this.busyDialog.close(false);
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
                sap.extension.m.MessageBox.show(caller.message, {
                    type: caller.type,
                    title: caller.title,
                    actions: caller.actions,
                    onCompleted: caller.onCompleted,
                });
            }
        }
    }
}