/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import { utils } from "../../../openui5/typings/ibas.utils";

/**
 * 视图-显示者-默认
 */
export default class ViewShowerDefault implements ibas.IViewShower {

    constructor() {
        // 设置默认平台
        if (sap.ui.Device.system.phone) {
            ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.PHONE);
        }
        // 键盘按钮按下
        let that: this = this;
        document.addEventListener("keydown", function (event: any): void {
            if (ibas.objects.isNull(event)) {
                return;
            }
            that.onKeyDown(event);
        }, false);
    }

    /** 按钮按下时 */
    private onKeyDown(event: KeyboardEvent): void {
        if (!ibas.objects.isNull(this.busyDialog)) {
            return;
        }
        if (ibas.objects.isNull(this.currentView)) {
            return;
        }
        if (this.currentView.isDisplayed) {
            this.currentView.onKeyDown(event);
        }
    }
    private currentView: ibas.IView;
    /** 显示视图 */
    show(view: ibas.IView): void {
        let viewContent: any = view.darw();
        if (ibas.objects.isNull(viewContent)) {
            ibas.logger.log(ibas.emMessageLevel.WARN, "shower: empty view.");
        } else if (viewContent instanceof sap.m.App) {
            viewContent.placeAt("content");
        } else if (viewContent instanceof sap.tnt.ToolPage
            || viewContent instanceof sap.ui.core.Control) {
            let app: sap.ui.core.Element = sap.ui.getCore().byId("ibas-app");
            if (app instanceof sap.m.App) {
                let page: any = app.getInitialPage();
                if (page instanceof sap.ui.core.Control) {
                    page.destroy(true);
                }
                app.addPage(viewContent);
                app.setInitialPage(viewContent);
                this.currentView = view;
            }
        } else {
            throw new Error(ibas.i18n.prop("sys_shell_invalid_ui"));
        }
    }
    /** 清理资源 */
    destroy(view: ibas.IView): void {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!ibas.objects.isNull(ui)) {
            ui.destroy(true);
            if (this.currentView === view) {
                this.currentView = undefined;
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
        let cView: ibas.IView = this.currentView;
        jQuery.sap.require("sap.m.MessageBox");
        sap.m.MessageBox.show(
            caller.message, {
                icon: utils.toMessageBoxIcon(caller.type),
                title: ibas.i18n.prop("sys_shell_name"),
                actions: utils.toMessageBoxAction(caller.actions),
                onClose(oAction: any): void {
                    if (!ibas.objects.isNull(caller.onCompleted)) {
                        caller.onCompleted(utils.toMessageAction(oAction));
                    }
                    if (!ibas.objects.isNull(cView) && !cView.isDisplayed) {
                        cView.isDisplayed = true;
                    }
                }
            }
        );
        if (!ibas.objects.isNull(cView) && cView.isDisplayed) {
            // 出现消息框，设置当前视图非显示状态
            cView.isDisplayed = false;
        } else {
            cView = undefined;
        }
    }
}