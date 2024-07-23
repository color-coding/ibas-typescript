/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        /** 配置项目-界面背景 */
        export const CONFIG_ITEM_BACKGROUND_IMAGE: string = "backgroundImage";
        /** 配置项目-界面透明度 */
        export const CONFIG_ITEM_BACKGROUND_OPACITY: string = "backgroundOpacity";
        /** 配置项目-图标 */
        export const CONFIG_ITEM_HOME_ICON: string = "homeIcon";
        export namespace c {
            /**
             * 视图-入口
             */
            export class MainView extends ibas.View implements app.IMainView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    // 记录起始地址
                    ibas.config.set(app.CONFIG_ITEM_ENTRY_URL, document.URL);
                    // 设置浏览器标题
                    let title: string = ibas.config.get(app.CONFIG_ITEM_APPLICATION_NAME, ibas.i18n.prop("shell_name"));
                    if (!ibas.strings.isEmpty(title)) {
                        let subheading: string = ibas.config.get(CONFIG_ITEM_SUBHEADING);
                        if (!ibas.strings.isEmpty(subheading)) {
                            title = ibas.strings.format("{0} | {1}", title, subheading);
                        }
                        document.title = title;
                    }
                    // 键盘按钮按下
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.KEYDOWN,
                        onEventFired: (event: KeyboardEvent): void => {
                            that.onKeyDown(event);
                        }
                    }, true);
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
                            if (touch.target === event.target && touch.direction === ibas.emTouchMoveDirection.NONE) {
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
                    window.history.pushState(null, null, document.URL);
                    ibas.browserEventManager.registerListener({
                        eventType: ibas.emBrowserEventType.POPSTATE,
                        onEventFired: (event) => {
                            let firstUrl: string = ibas.config.get(app.CONFIG_ITEM_ENTRY_URL);
                            let currentUrl: string = document.URL;
                            if (ibas.strings.equalsIgnoreCase(firstUrl, currentUrl)) {
                                window.history.pushState(null, null, firstUrl);
                            }
                            that.closeView();
                        }
                    });
                    return new sap.m.App(UI_APP, {
                        autoFocus: false,
                        homeIcon: ibas.config.get(CONFIG_ITEM_HOME_ICON, undefined),
                        backgroundImage: ibas.config.get(CONFIG_ITEM_BACKGROUND_IMAGE, undefined),
                        backgroundOpacity: ibas.config.get(CONFIG_ITEM_BACKGROUND_OPACITY, undefined),
                        afterNavigate(event: sap.ui.base.Event): void {
                            let source: any = event.getSource();
                            if (source instanceof sap.m.App) {
                                // 切换视图
                                let view: any = sap.extension.customdatas.getView(source.getCurrentPage());
                                if (view instanceof ibas.View) {
                                    if (view.application instanceof app.CenterApp
                                        || view.application instanceof app.ShellApplication) {
                                        // 主页改变，切换服务显示者
                                        ibas.servicesManager.viewShower = function (): ibas.IViewShower {
                                            return view.application;
                                        };
                                    }
                                }
                                if (view instanceof CenterView && view.isDisplayed === true) {
                                    let page: any = source.getCurrentPage();
                                    if (page instanceof sap.tnt.ToolPage) {
                                        for (let item of page.getMainContents()) {
                                            if (item instanceof sap.m.NavContainer) {
                                                let hash: string = sap.extension.customdatas.getHash(item.getCurrentPage());
                                                if (ibas.strings.isEmpty(hash)) {
                                                    hash = "#";
                                                }
                                                if (!(ibas.strings.equals(hash, window.location.hash))) {
                                                    window.history.replaceState(null, null, hash);
                                                }
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
                        return sap.extension.customdatas.getView(app.getCurrentPage());
                    }
                    return null;
                }
                /** 按钮按下时 */
                protected onKeyDown(event: KeyboardEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        ibas.views.keyDown.call(view, event);
                    }
                }
                /** 地址栏哈希值变化 */
                protected onHashChanged(event: HashChangeEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        ibas.views.hashChanged.call(view, event);
                    }
                }
                /** 手指触控移动 */
                protected onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        ibas.views.touchMove.call(view, direction, event);
                    }
                }
                /** 手指触控移动 */
                protected closeView(): void {
                    let view: ibas.IView = this.currentView();
                    if (view instanceof ibas.View) {
                        if (!view.isDisplayed) {
                            return;
                        }
                        if (view.isBusy) {
                            return;
                        }
                        if (view instanceof CenterView) {
                            view.destroyView(undefined);
                        } else if (view instanceof app.ShellView) {
                            view.destroyView(undefined);
                        }
                    }
                }
            }
        }
    }
}