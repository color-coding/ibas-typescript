/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { IEmbeddedQueryPanel } from "ibas/bsbas/systems/index";
import { ICenterView } from "../../../bsapp/centers/CenterApp";
import { CenterView as cCenterView, CONFIG_ITEM_COMPACT_SCREEN } from "../../c/centers/index";

/**
 * 视图-中心
 */
export class CenterView extends cCenterView implements ICenterView {
    private dialogQueue: Map<ibas.IView, sap.m.Dialog> = new Map<ibas.IView, sap.m.Dialog>();
    /** 显示对话框视图 */
    showDialogView(view: ibas.BODialogView): void {
        let title: string;
        // 设置标题
        if (!ibas.objects.isNull(view.title)) {
            title = view.title;
        } else if (!ibas.objects.isNull(view.id)) {
            title = view.id;
        }
        let form: any = view.darw();
        let dialog: sap.m.Dialog = null;
        if (form instanceof sap.m.Dialog) {
            dialog = form;
        } else {
            dialog = new sap.m.Dialog("", {
                title: title,
                type: sap.m.DialogType.Standard,
                state: sap.ui.core.ValueState.None,
                // resizable: true,
                // draggable: true,
                stretchOnPhone: true,
                horizontalScrolling: true,
                verticalScrolling: true,
                content: [view.darw()],
                buttons: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_confirm"),
                        press(): void {
                            view.confirm();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_exit"),
                        press(): void {
                            if (view.closeEvent instanceof Function) {
                                view.closeEvent.apply(view.application);
                            }
                        }
                    })]
            });
        }
        // 添加关闭事件
        dialog.attachAfterClose(null, function (): void {
            // 设置视图未显示
            view.isDisplayed = false;
        });
        // 设置视图紧凑
        if (ibas.config.get(CONFIG_ITEM_COMPACT_SCREEN, false)) {
            dialog.addStyleClass("sapUiSizeCompact");
        }
        // 修改id号
        view.id = dialog.getId();
        dialog.open();
        // 添加查询面板
        if (ibas.objects.instanceOf(view, ibas.BOQueryView)
            || ibas.objects.instanceOf(view, ibas.BOQueryDialogView)) {
            let queryView: IEmbeddedQueryPanel = {
                /** 嵌入查询面板 */
                embedded(view: any): void {
                    dialog.setSubHeader(null);
                    dialog.setSubHeader(view);
                }
            };
            this.showQueryPanel(<ibas.BOQueryView><any>view, queryView);
        }

        // m端新增代码
        this.dialogQueue.set(view, dialog);
    }
    /** 清理资源 */
    destroyView(view: ibas.IView, showLast: boolean = true): void {
        super.destroyView(view, showLast);
        if (ibas.objects.isNull(view)) { return; }
        if (this.dialogQueue.has(view)) {
            this.dialogQueue.delete(view);
            if (showLast === true) {
                this.showLastView();
            }
        }
    }
    /** 当手指移动时 */
    onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
        if (this.dialogQueue.size === 0) {
            super.onTouchMove(direction, event);
        } else {
            // 所有对话框都触发事件
            for (let view of this.dialogQueue.keys()) {
                view.onTouchMove(direction, event);
            }
        }
    }
}