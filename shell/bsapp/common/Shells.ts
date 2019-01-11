/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /**
         * 用户壳应用
         */
        export abstract class ShellApplication<T extends IShellView> extends ibas.AbstractApplication<T> implements ibas.IViewShower {
            /** 注册视图，重载需要回掉此方法 */
            protected registerView(): void {
                this.view.closeEvent = this.close;
            }
            run(): void {
                this.show();
            }
            show(): void;
            show(view: ibas.IView): void;
            show(): void {
                if (arguments.length === 0) {
                    // 显示自身视图时
                    if (!ibas.objects.isNull(this.viewShower)) {
                        if (ibas.objects.isNull(this.view)) {
                            throw new Error(ibas.i18n.prop("sys_invalid_view", this.name));
                        }
                        if (!ibas.objects.isNull(this.description)) {
                            this.view.title = this.description;
                        } else {
                            this.view.title = this.name;
                        }
                        this.viewShower.show(this.view);
                        if (this.view instanceof ibas.View) {
                            this.view.isDisplayed = true;
                        }
                        this.viewShowed();
                    } else {
                        throw new Error(ibas.i18n.prop("sys_invalid_view_shower", this.name));
                    }
                } else {
                    // 显示应用视图时
                    this.showView(arguments[0]);
                }
            }
            destroy(): void;
            destroy(view: ibas.IView): void;
            destroy(): void {
                if (arguments.length === 1) {
                    this.view.destroyView(arguments[0]);
                } else {
                    super.destroy();
                }
            }
            /** 视图显示后 */
            protected viewShowed(): void {
            }
            /** 关闭视图 */
            close(): void {
                if (!ibas.objects.isNull(this.view)) {
                    if (!ibas.objects.isNull(this.viewShower)) {
                        this.viewShower.destroy(this.view);
                    }
                }
            }
            busy(view: ibas.IView, busy: boolean, msg: string): void {
                if (this.isViewShowed()) {
                    this.view.busyView(view, busy, msg);
                }
            }
            proceeding(view: ibas.IView, type: ibas.emMessageType, msg: string): void {
                if (this.isViewShowed()) {
                    this.view.showStatusMessage(type, msg);
                }
            }
            messages(caller: ibas.IMessgesCaller): void {
                if (this.isViewShowed()) {
                    this.view.showMessageBox(caller);
                }
            }
            showView(view: ibas.IView): void {
                if (this.isViewShowed()) {
                    this.view.showView(view);
                }
            }
        }
        /**
         * 用户壳视图
         */
        export interface IShellView extends ibas.IView {
            /** 显示视图 */
            showView(view: ibas.IView): void;
            /** 清理资源 */
            destroyView(view: ibas.IView): void;
            /** 设置忙状态 */
            busyView(view: ibas.IView, busy: boolean, msg: string): any;
            /** 显示状态消息 */
            showStatusMessage(type: ibas.emMessageType, message: string): void;
            /** 显示消息对话框    */
            showMessageBox(caller: ibas.IMessgesCaller): void;
        }
        /** 用户壳视图 */
        export abstract class ShellView extends ibas.View implements IShellView {
            showQueryPanel: (view: ibas.BOQueryView | ibas.BOQueryDialogView, embeddedView: ibas.IEmbeddedQueryPanel) => void;
            showDialogView: (view: ibas.DialogView) => void;
            abstract showView(view: ibas.IView): void;
            abstract destroyView(view: ibas.IView): void;
            abstract busyView(view: ibas.IView, busy: boolean, msg: string): void;
            abstract showStatusMessage(type: ibas.emMessageType, message: string): void;
            abstract showMessageBox(caller: ibas.IMessgesCaller): void;
        }
    }
}