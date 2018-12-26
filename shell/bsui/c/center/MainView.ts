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
            /**
             * 视图-入口
             */
            export class MainView extends ibas.View implements app.IMainView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    document.title = ibas.config.get(app.CONFIG_ITEM_APPLICATION_NAME, ibas.i18n.prop("shell_name"));
                    // 键盘按钮按下
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.KEYDOWN,
                        onEventFired: (event: KeyboardEvent): void => {
                            that.onKeyDown(event);
                        }
                    });
                    // 哈希值变化
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.HASHCHANGE,
                        onEventFired: (event: HashChangeEvent): void => {
                            that.onHashChanged(event);
                        }
                    });
                    // touch事件
                    let touch: any = {
                        target: null,
                        startPoint: null,
                        direction: ibas.emTouchMoveDirection.NONE,
                        start: function (event: TouchEvent): void {
                            touch.target = event.target;
                            touch.startPoint = event.touches[0];
                            touch.direction = ibas.emTouchMoveDirection.NONE;
                        },
                        move: function (event: TouchEvent): void {
                            if (touch.target === event.target) {
                                if (touch.direction === ibas.emTouchMoveDirection.NONE) { // do once at start
                                    let point: Touch = event.touches[0];
                                    let offsetX: number = point.screenX - touch.startPoint.screenX;
                                    let offsetY: number = point.screenY - touch.startPoint.screenY;
                                    if (Math.abs(offsetY) > Math.abs(offsetX)) {
                                        if (offsetY > 0) {
                                            touch.direction = ibas.emTouchMoveDirection.DOWN;
                                        } else {
                                            touch.direction = ibas.emTouchMoveDirection.UP;
                                        }
                                    } else {
                                        if (offsetX > 0) {
                                            touch.direction = ibas.emTouchMoveDirection.RIGHT;
                                        } else {
                                            touch.direction = ibas.emTouchMoveDirection.LEFT;
                                        }
                                    }
                                    that.onTouchMove(touch.direction, event);
                                }
                            }
                        },
                        end: function (event: TouchEvent): void {
                            touch.target = null;
                            touch.startPoint = null;
                            touch.direction = ibas.emTouchMoveDirection.NONE;
                        }
                    };
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.TOUCHSTART,
                        onEventFired: touch.start
                    });
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.TOUCHMOVE,
                        onEventFired: touch.move
                    });
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.TOUCHEND,
                        onEventFired: touch.end
                    });
                    // 语言变化监听
                    ibas.i18n.language = openui5.utils.toLanguageCode(sap.ui.getCore().getConfiguration().getLanguage());
                    ibas.i18n.registerListener({
                        onLanguageChanged(language: string): void {
                            sap.ui.getCore().getConfiguration().setLanguage(openui5.utils.toLanguageCode(language));
                        }
                    });
                    return new sap.m.App(UI_APP, {
                        autoFocus: false,
                        afterNavigate(): void {
                            let page: any = this.getCurrentPage();
                            if (!ibas.objects.isNull(page)) {
                                for (let item of page.getCustomData()) {
                                    if (ibas.strings.equals(item.getKey(), UI_DATA_KEY_VIEW)) {
                                        let data: any = item.getValue();
                                        if (data instanceof ibas.View) {
                                            if (data.application instanceof app.CenterApp
                                                || data.application instanceof app.ShellApplication) {
                                                // 主页改变，切换服务显示者
                                                ibas.servicesManager.viewShower = function (): ibas.IViewShower {
                                                    return data.application;
                                                };
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
                /** 获取当前View */
                private currentView(): ibas.IView {
                    let app: any = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        let page: sap.ui.core.Control = app.getCurrentPage();
                        if (!ibas.objects.isNull(page)) {
                            for (let item of page.getCustomData()) {
                                if (ibas.strings.equals(item.getKey(), UI_DATA_KEY_VIEW)) {
                                    let data: any = item.getValue();
                                    if (data instanceof ibas.View) {
                                        return data;
                                    }
                                }
                            }
                        }
                    }
                    return null;
                }
                /** 按钮按下时 */
                onKeyDown(event: KeyboardEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        view.onKeyDown(event);
                    }
                }
                /** 地址栏哈希值变化 */
                onHashChanged(event: HashChangeEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        view.onHashChanged(event);
                    }
                }
                /** 手指触控移动 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        view.onTouchMove(direction, event);
                    }
                }
            }
        }
    }
}