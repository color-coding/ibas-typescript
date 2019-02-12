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
            /** 配置项目-状态消息延迟时间 */
            export const CONFIG_ITEM_STATUS_MESSAGES_DELAY: string = "statusDelay";
            /** 配置项目-全屏模式 */
            export const CONFIG_ITEM_FULL_SCREEN: string = "fullScreen";
            /** 配置项目-全屏模式-设备 */
            export const CONFIG_ITEM_FULL_SCREEN_ON_PLANTFORM: string = CONFIG_ITEM_FULL_SCREEN + "|{0}";
            /** 配置项目-不允许登出 */
            export const CONFIG_ITEM_NO_LOGOUT: string = "noLogOut";
            /** 配置项目-功能分组 */
            export const CONFIG_ITEM_GROUP_FUNCTONS: string = "groupFunctions";
            /** 配置项目-欢迎页面图片 */
            export const CONFIG_ITEM_WELCOME_PAGE_IMAGE: string = "welcomeImage";
            /** 配置项目-欢迎页面地址 */
            export const CONFIG_ITEM_WELCOME_PAGE_URL: string = "welcomeUrl";
            /** 配置项目-收缩功能列表 */
            export const CONFIG_ITEM_SHRINK_FUNCTION_LIST: string = "shrinkFunction";
            /** 配置项目-最大消息数 */
            export const CONFIG_ITEM_MAX_MESSAGE_COUNT: string = "messageCount";
            /** 配置项目-隐藏无功能模块 */
            export const CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE: string = "hideModule";
            const UI_MAIN_MENU: string = "__UI_MAIN_MENU";
            const UI_MAIN_BACK: string = "__UI_MAIN_BACK";
            const UI_MAIN_TITLE: string = "__UI_MAIN_TITLE";
            /**
             * 视图-中心
             */
            export class CenterView extends ibas.View implements app.ICenterView {
                /** 激活帮助 */
                helpEvent: Function;
                /** 激活关于 */
                aboutEvent: Function;
                /** 激活功能，参数1 string 功能ID */
                activateFunctionEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let mainPage: sap.tnt.ToolPage = new sap.tnt.ToolPage("", {
                        sideExpanded: !ibas.config.get(CONFIG_ITEM_SHRINK_FUNCTION_LIST, true)
                    });
                    this.mainHeader = new sap.tnt.ToolHeader("", {
                        content: [
                            // 收缩菜单钮
                            new sap.m.Button(UI_MAIN_MENU, {
                                tooltip: ibas.i18n.prop("shell_apps_menu"),
                                icon: "sap-icon://menu2",
                                type: sap.m.ButtonType.Transparent,
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow
                                }),
                                press: function (): void {
                                    mainPage.setSideExpanded(!mainPage.getSideExpanded());
                                }
                            }),
                            // 回退单钮
                            new sap.m.Button(UI_MAIN_BACK, {
                                icon: "sap-icon://nav-back",
                                tooltip: ibas.i18n.prop("shell_close_view"),
                                type: sap.m.ButtonType.Transparent,
                                visible: false,
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow
                                }),
                                press: function (): void {
                                    let page: sap.ui.core.Control = that.pageContainer.getCurrentPage();
                                    if (page instanceof sap.m.Page) {
                                        for (let item of page.getCustomData()) {
                                            if (ibas.strings.equals(item.getKey(), UI_DATA_KEY_VIEW)) {
                                                let data: any = item.getValue();
                                                if (data instanceof ibas.View) {
                                                    if (data.closeEvent instanceof Function) {
                                                        data.closeEvent.apply(data.application);
                                                    }
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }),
                            // 标题
                            new sap.m.Title(UI_MAIN_TITLE, {
                                visible: false,
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow
                                }),
                                textAlign: sap.ui.core.TextAlign.Left,
                            }),
                            // 分隔符
                            new sap.m.ToolbarSpacer("", { width: "20px" }),
                            new sap.tnt.ToolHeaderUtilitySeparator(""),
                            new sap.m.ToolbarSpacer("", {
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow,
                                    minWidth: "20px"
                                })
                            }),
                            // 系统服务
                            new sap.m.Button("", {
                                tooltip: this.title,
                                icon: ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE) ?
                                    "sap-icon://appear-offline" : "sap-icon://donut-chart",
                                width: "50px",
                                type: sap.m.ButtonType.Transparent,
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow
                                }),
                                press: function (event: any): void {
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                        content: [
                                            new sap.m.Button("", {
                                                text: ibas.i18n.prop("shell_help"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://sys-help",
                                                press: function (): void {
                                                    that.fireViewEvents(that.helpEvent);
                                                    popover.close();
                                                }
                                            }),
                                            new sap.m.Button("", {
                                                text: ibas.i18n.prop("shell_about"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://world",
                                                press: function (): void {
                                                    that.fireViewEvents(that.aboutEvent);
                                                    popover.close();
                                                }
                                            }),
                                            new sap.m.Button("", {
                                                text: ibas.i18n.prop("shell_logout"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://system-exit",
                                                visible: !ibas.config.get(CONFIG_ITEM_NO_LOGOUT, false),
                                                press: function (): void {
                                                    that.fireViewEvents(that.closeEvent);
                                                }
                                            })
                                        ]
                                    });
                                    popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            }),
                        ]
                    });
                    // 消息历史框
                    this.messageHistory = new sap.m.MessagePopover("", {
                        initiallyExpanded: false,
                        placement: sap.m.VerticalPlacementType.Top,
                    });
                    // 消息条
                    this.messagePopover = new sap.m.Popover("", {
                        contentWidth: "auto",
                        showHeader: false,
                        placement: sap.m.PlacementType.HorizontalPreferredRight,
                    });
                    this.messagePopover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                    this.navigation = new sap.tnt.SideNavigation("", {
                        item: new sap.tnt.NavigationList(),
                        fixedItem: new sap.tnt.NavigationList("", {
                            items: [
                                new sap.tnt.NavigationListItem("", {
                                    text: ibas.i18n.prop("shell_messages_history"),
                                    icon: "sap-icon://message-popup",
                                    select: function (event: any): void {
                                        that.messageHistory.openBy(event.getSource());
                                    }
                                }),
                            ],
                        })
                    });
                    this.pageContainer = new sap.m.NavContainer("", {
                        autoFocus: false,
                        pages: [
                            this.drawWelcomePage()
                        ],
                        afterNavigate(): void {
                            let page: any = this.getCurrentPage();
                            if (page instanceof sap.m.Page) {
                                if (page.getShowHeader() === false && page.getCustomData().length > 0) {
                                    // 全屏模式
                                    let title: any = sap.ui.getCore().byId(UI_MAIN_TITLE);
                                    if (title instanceof sap.m.Title) {
                                        title.setVisible(true);
                                        title.setText(page.getTitle());
                                    }
                                    let button: any = sap.ui.getCore().byId(UI_MAIN_BACK);
                                    if (button instanceof sap.m.Button) {
                                        button.setVisible(true);
                                    }
                                    if (mainPage.getSideExpanded() === false && ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE) {
                                        // 手机模式，全屏时隐藏menu按钮
                                        let button: any = sap.ui.getCore().byId(UI_MAIN_MENU);
                                        if (button instanceof sap.m.Button) {
                                            button.setVisible(false);
                                        }
                                    }
                                }
                                // 切换hash值
                                for (let item of page.getCustomData()) {
                                    if (ibas.strings.equals(item.getKey(), UI_DATA_KEY_HASH)) {
                                        let data: any = item.getValue();
                                        if (typeof data === "string") {
                                            if (!(ibas.strings.equals(data, window.location.hash))) {
                                                window.history.pushState(null, null, data);
                                            }
                                        }
                                        break;
                                    }
                                }
                            } else if (page instanceof sap.m.MessagePage) {
                                let button: any = sap.ui.getCore().byId(UI_MAIN_MENU);
                                if (button instanceof sap.m.Button) {
                                    button.setVisible(true);
                                }
                                let title: any = sap.ui.getCore().byId(UI_MAIN_TITLE);
                                if (title instanceof sap.m.Title) {
                                    title.setVisible(false);
                                    title.setText(null);
                                }
                                button = sap.ui.getCore().byId(UI_MAIN_BACK);
                                if (button instanceof sap.m.Button) {
                                    button.setVisible(false);
                                }
                                // 切换hash值
                                window.history.pushState(null, null, "#");
                            }
                        },
                    });
                    mainPage.setHeader(this.mainHeader);
                    mainPage.setSideContent(this.navigation);
                    mainPage.addMainContent(this.pageContainer);
                    return mainPage;
                }
                /** 页面头部 */
                private mainHeader: sap.tnt.ToolHeader;
                /** 页面容器 */
                private pageContainer: sap.m.NavContainer;
                /** 页面功能导航，左 */
                private navigation: sap.tnt.SideNavigation;
                /** 消息历史框 */
                private messageHistory: sap.m.MessagePopover;
                /** 消息框 */
                private messagePopover: sap.m.Popover;
                /** 忙对话框 */
                private busyDialog: sap.m.BusyDialog;
                /** 创建窗体容器页 */
                protected drawPage(view: ibas.IView): sap.m.Page {
                    let page: sap.m.Page = new sap.m.Page("", {
                        title: ibas.strings.isEmpty(view.title) ? view.id : view.title,
                        enableScrolling: false,
                        showNavButton: false,
                        customData: [
                            new sap.ui.core.CustomData("", {
                                key: UI_DATA_KEY_VIEW,
                                value: view,
                                writeToDom: false,
                            }),
                            new sap.ui.core.CustomData("", {
                                key: UI_DATA_KEY_HASH,
                                value: window.location.hash,
                                writeToDom: false,
                            })
                        ]
                    });
                    // 全屏，当前平台
                    let fullScreen: boolean = ibas.config.get(
                        ibas.strings.format(CONFIG_ITEM_FULL_SCREEN_ON_PLANTFORM,
                            ibas.enums.toString(ibas.emPlantform, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM))));
                    // 全屏，整体
                    if (ibas.objects.isNull(fullScreen)) {
                        fullScreen = ibas.config.get(CONFIG_ITEM_FULL_SCREEN, false);
                    }
                    if (fullScreen) {
                        // 全屏
                        page.setShowHeader(false);
                    } else {
                        // 非全屏
                        // 退出钮
                        page.addHeaderContent(new sap.m.Button("", {
                            icon: "sap-icon://inspect-down",
                            tooltip: ibas.i18n.prop("shell_close_view"),
                            type: sap.m.ButtonType.Transparent,
                            press: function (): void {
                                if (view.closeEvent instanceof Function) {
                                    if (view instanceof ibas.View) {
                                        view.closeEvent.apply(view.application);
                                    } else {
                                        view.closeEvent();
                                    }
                                }
                            }
                        }));
                        // 接管title属性定义
                        Object.defineProperty(view, "title", {
                            get: function (): string {
                                return page.getTitle();
                            },
                            set: function (value: string): void {
                                page.setTitle(value);
                            }
                        });
                    }
                    return page;
                }
                /** 创建欢迎页 */
                private drawWelcomePage(): sap.ui.core.Control {
                    let name: string = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_NAME);
                    if (ibas.objects.isNull(name)) {
                        name = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE);
                    }
                    if (ibas.objects.isNull(name)) {
                        name = ibas.i18n.prop("shell_user_unknown");
                    }
                    let welcomeImage: string = ibas.config.get(CONFIG_ITEM_WELCOME_PAGE_IMAGE);
                    if (ibas.strings.isEmpty(welcomeImage)) {
                        welcomeImage = "sap-icon://hello-world";
                    } else if (welcomeImage.startsWith("sap-icon://")) {
                        // sap图标
                    } else if (welcomeImage.startsWith("https://") || welcomeImage.startsWith("http://")) {
                        // 网络图标
                    } else {
                        // 补全地址，shell目录内
                        welcomeImage = ibas.urls.rootUrl(shell.app.Console.ROOT_FILE_NAME) + "/" + welcomeImage;
                    }
                    let viewContent: any = new sap.m.MessagePage("", {
                        text: ibas.i18n.prop("shell_welcome_page",
                            name, ibas.config.get(app.CONFIG_ITEM_APPLICATION_NAME, ibas.i18n.prop("shell_name"))),
                        customDescription: new sap.m.Link("", {
                            target: "_blank",
                            text: ibas.config.get(CONFIG_ITEM_WELCOME_PAGE_URL),
                            href: ibas.config.get(CONFIG_ITEM_WELCOME_PAGE_URL)
                        }),
                        description: "",
                        showHeader: false,
                        showNavButton: false,
                        icon: welcomeImage,
                        textDirection: sap.ui.core.TextDirection.Inherit
                    });
                    return viewContent;
                }
                /** 状态消息延迟时间（毫秒） */
                private statusDelay?: number;
                /** 消息数量 */
                private messageCount?: number;
                /** 消息时间戳 */
                private messageTime: number;
                /** 模块时间 */
                private moduleTime: number;
                /** 显示状态消息 */
                showStatusMessage(type: ibas.emMessageType, message: string): void {
                    // 记录历史消息
                    message = message.replace(/\{(.+?)\}/g, function (value: string): string {
                        return ibas.businessobjects.describe(value);
                    });
                    let uiType: sap.ui.core.MessageType = openui5.utils.toMessageType(type);
                    this.messageHistory.insertItem(new sap.m.MessagePopoverItem("", {
                        type: uiType,
                        title: message,
                    }).setTitle(message), 0);
                    if (ibas.objects.isNull(this.messageCount)) {
                        this.messageCount = ibas.config.get(CONFIG_ITEM_MAX_MESSAGE_COUNT, 50);
                    }
                    if (this.messageHistory.getItems().length > this.messageCount) {
                        this.messageHistory.removeItem(this.messageHistory.getItems().length - 1);
                    }
                    this.messageTime = ibas.dates.now().getTime();
                    // 视图没有显示，则不显示消息
                    if (this.isDisplayed === false) {
                        return;
                    }
                    this.messagePopover.destroyContent();
                    this.messagePopover.addContent(new sap.m.MessageStrip("", {
                        type: uiType,
                        showIcon: true,
                        showCloseButton: false
                    }).setText(message));
                    if (!this.messagePopover.isOpen()) {
                        this.messagePopover.openBy(this.navigation.getFixedItem(), true);
                    }
                    // 延迟清除消息
                    if (ibas.objects.isNull(this.statusDelay)) {
                        this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 2) * 1000;
                    }
                    setTimeout(() => {
                        if (ibas.dates.now().getTime() >= (this.messageTime + this.statusDelay)) {
                            if (this.messagePopover.isOpen()) {
                                this.messagePopover.close();
                            }
                        }
                    }, this.statusDelay);
                }
                /** 对话消息 */
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
                            if (caller.onCompleted instanceof Function) {
                                caller.onCompleted(openui5.utils.toMessageAction(oAction));
                            }
                        }
                    });
                }
                /** 显示模块 */
                showModule(module: ibas.IModuleConsole): void {
                    let nvList: sap.tnt.NavigationList = this.navigation.getItem();
                    nvList.addItem(new sap.tnt.NavigationListItem("", {
                        key: module.name,
                        text: module.description,
                        icon: module.icon,
                        expanded: false,
                        visible: !ibas.config.get(CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE, true),
                        select(): void {
                            // 展开菜单
                            this.setExpanded(!this.getExpanded());
                        }
                    }));
                    // 延迟排序模块
                    if (ibas.objects.isNull(this.statusDelay)) {
                        this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 2) * 1000;
                    }
                    // 计算模块位置并添加
                    if (ibas.objects.isNull(this.moduleTime)) {
                        this.moduleTime = ibas.dates.now().getTime();
                        setTimeout(() => {
                            if (ibas.dates.now().getTime() >= this.messageTime + this.statusDelay / 2) {
                                this.messageTime = ibas.dates.now().getTime();
                                this.showStatusMessage(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_sorting_modules"));
                                let items: ibas.ArrayList<any> = new ibas.ArrayList<any>();
                                items.add(nvList.getItems());
                                items = items.sort((c, b): number => {
                                    return c.getKey().localeCompare(b.getKey());
                                });
                                nvList.removeAllItems();
                                for (let item of items) {
                                    nvList.addItem(item);
                                }
                                // 重置
                                delete (this.moduleTime);
                            }
                        }, this.statusDelay / 2);
                    } else {
                        this.moduleTime = ibas.dates.now().getTime();
                    }
                }
                /** 显示模块功能 */
                showModuleFunction(module: string, func: ibas.IModuleFunction): void {
                    let nvList: sap.tnt.NavigationList = this.navigation.getItem();
                    let nvItem: sap.tnt.NavigationListItem = null;
                    for (let item of nvList.getItems()) {
                        if (item.getKey() === module) {
                            nvItem = item;
                            break;
                        }
                    }
                    if (ibas.objects.isNull(nvItem)) {
                        throw new Error(ibas.strings.format("not found module [{0}].", module));
                    }
                    // 设置模块可见
                    nvItem.setVisible(true);
                    let mdNVItem: sap.tnt.NavigationListItem = nvItem;
                    if (ibas.config.get(CONFIG_ITEM_GROUP_FUNCTONS, false) && !ibas.strings.isEmpty(func.category)) {
                        // 菜单分组
                        for (let item of nvItem.getItems()) {
                            if (item.getKey() === ibas.strings.format("{0}_{1}", nvItem.getKey(), func.category)) {
                                mdNVItem = item;
                                break;
                            }
                        }
                        if (mdNVItem === nvItem) {
                            // 不存在分组，新建一个
                            mdNVItem = new sap.tnt.NavigationListItem("", {
                                key: ibas.strings.format("{0}_{1}", nvItem.getKey(), func.category),
                                text: ibas.i18n.prop(func.category),
                                expanded: false,
                                hasExpander: true,
                            });
                            nvItem.addItem(mdNVItem);
                        }
                    }
                    mdNVItem.addItem(
                        new sap.tnt.NavigationListItem("", {
                            key: func.name,
                            text: func.description,
                            select(): void {
                                ibas.urls.changeHash(ibas.strings.format("{0}{1}", ibas.URL_HASH_SIGN_FUNCTIONS, func.id));
                            }
                        })
                    );
                }
                /** 设置忙状态 */
                busyView(view: ibas.IView, busy: boolean, msg: string): any {
                    let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                    if (ui instanceof sap.m.Page) {
                        // 视图自身可设置忙状态
                        for (let item of ui.getContent()) {
                            if (item.getBusy() !== busy) {
                                item.setBusy(busy);
                            }
                        }
                    } else if (ui instanceof sap.m.TabContainerItem) {
                        for (let item of ui.getContent()) {
                            if (item.getBusy() !== busy) {
                                item.setBusy(busy);
                            }
                        }
                    } else {
                        // 视图不能设置忙状态，使用全局对话框
                        if (busy) {
                            if (ibas.objects.isNull(this.busyDialog)) {
                                this.busyDialog = new sap.m.BusyDialog("");
                                if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                                    this.busyDialog.addStyleClass("sapUiSizeCompact");
                                }
                            }
                            if (!this.busyDialog.getVisible()) {
                                this.busyDialog.setTitle(view.title);
                                this.busyDialog.setText(msg);
                                this.busyDialog.open();
                            }
                        } else {
                            if (!ibas.objects.isNull(this.busyDialog)) {
                                this.busyDialog.close();
                            }
                        }
                    }
                }
                /** 显示视图 */
                showView(view: ibas.IView): void {
                    if (view instanceof ibas.DialogView) {
                        // 对话框视图
                        this.showDialogView(view);
                    } else if (view instanceof ibas.BarView) {
                        // 工具条视图
                        this.showBarView(view);
                    } else if (view instanceof app.ShellView) {
                        this.showShellView(view);
                    } else if (view instanceof ibas.TabView) {
                        // 页签视图
                        let page: sap.m.Page = <any>this.pageContainer.getCurrentPage();
                        let container: sap.m.TabContainer = page instanceof sap.m.Page ? <any>page.getContent()[0] : null;
                        if (!(page instanceof sap.m.Page && container instanceof sap.m.TabContainer)) {
                            page = new sap.m.Page("", {
                                showHeader: false,
                            });
                            let pageContainer: sap.m.NavContainer = this.pageContainer;
                            container = new sap.m.TabContainer("", {
                                itemClose: function (): void {
                                    view.closeEvent.apply(view.application);
                                    if (container.getItems().length === 1) {
                                        setTimeout(() => {
                                            pageContainer.back(null);
                                            pageContainer.removePage(container.getId());
                                            container.destroy(true);
                                        }, 100);
                                    }
                                }
                            });
                            page.addContent(container);
                            pageContainer.addPage(page);
                            setTimeout(() => pageContainer.to(page.getId()), 100);
                        }
                        let containerItem: sap.m.TabContainerItem = new sap.m.TabContainerItem("", {
                            name: view.title,
                            key: view.id,
                            modified: false,
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
                        view.id = containerItem.getId();
                        container.addItem(containerItem);
                        container.setSelectedItem(containerItem);
                    } else {
                        // 主页面中的视图
                        // 获取历史视图
                        let container: sap.ui.core.Control = this.pageContainer.getPage(view.id);
                        if (ibas.objects.isNull(container)) {
                            // 不存在历史，绘制新的
                            container = this.drawPage(view);
                            if (view instanceof ibas.UrlView) {
                                // 视图为地址视图
                                this.showUrlView(view, <sap.m.Page>container);
                            } else if (view instanceof ibas.View) {
                                // 一般视图
                                this.showCommonView(view, <sap.m.Page>container);
                            } else {
                                throw new Error(ibas.i18n.prop("shell_invalid_ui"));
                            }
                            view.id = container.getId();
                            let pageContainer: sap.m.NavContainer = this.pageContainer.addPage(container);
                            setTimeout(() => pageContainer.to(container.getId()), 100);
                        } else {
                            // 存在页面直接跳转
                            this.pageContainer.backToPage(container.getId());
                        }
                    }
                    if (view instanceof ibas.View) {
                        view.isDisplayed = true;
                        view.onDisplayed();
                    }
                }
                protected showShellView(view: app.ShellView): void {
                    let app: any = sap.ui.getCore().byId(UI_APP);
                    if (app instanceof sap.m.App) {
                        view.showQueryPanel = (view: ibas.BOQueryView | ibas.BOQueryDialogView, embeddedView: ibas.IEmbeddedQueryPanel) => {
                            this.showQueryPanel(view, embeddedView);
                        };
                        view.showDialogView = (view: ibas.DialogView) => {
                            this.showDialogView(view);
                        };
                        let page: sap.m.Page = new sap.m.Page("", {
                            enableScrolling: false,
                            showHeader: false,
                            showSubHeader: false,
                            showNavButton: false,
                            customData: [
                                new sap.ui.core.CustomData("", {
                                    key: UI_DATA_KEY_VIEW,
                                    value: view,
                                    writeToDom: false,
                                }),
                            ],
                            content: [
                                view.draw()
                            ]
                        });
                        if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                            page.addStyleClass("sapUiSizeCompact");
                        }
                        app.addPage(page);
                        app.to(page.getId());
                        view.id = page.getId();
                    } else {
                        throw new Error("Method not implemented.");
                    }
                }
                /** 显示对话框视图 */
                protected showDialogView(view: ibas.DialogView): void {
                    let title: string;
                    // 设置标题
                    if (!ibas.objects.isNull(view.title)) {
                        title = view.title;
                    } else if (!ibas.objects.isNull(view.id)) {
                        title = view.id;
                    }
                    let viewContent: sap.m.Dialog = view.draw();
                    if (!(viewContent instanceof sap.m.Dialog)) {
                        viewContent = new sap.m.Dialog("", {
                            title: title,
                            type: sap.m.DialogType.Standard,
                            state: sap.ui.core.ValueState.None,
                            // resizable: true,
                            // draggable: true,
                            stretchOnPhone: true,
                            horizontalScrolling: true,
                            verticalScrolling: true,
                            content: [
                                viewContent
                            ],
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
                                })
                            ]
                        });
                    }
                    // 设置视图紧凑
                    if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                        viewContent.addStyleClass("sapUiSizeCompact");
                    }
                    // 修改id号
                    view.id = viewContent.getId();
                    viewContent.open();
                    // 添加查询面板
                    if (view instanceof ibas.BOQueryView || view instanceof ibas.BOQueryDialogView) {
                        let queryView: ibas.IEmbeddedQueryPanel = {
                            /** 嵌入查询面板 */
                            embedded(view: any): void {
                                viewContent.setSubHeader(null);
                                viewContent.setSubHeader(view);
                            }
                        };
                        this.showQueryPanel(view, queryView);
                    }
                }
                /** 显示工具条视图 */
                protected showBarView(view: ibas.BarView): void {
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
                    } else if (viewContent instanceof sap.ui.core.Control) {
                        // 弹出层
                        let popover: sap.m.ResponsivePopover;
                        if (viewContent instanceof sap.m.ResponsivePopover) {
                            popover = viewContent;
                        } else {
                            popover = new sap.m.ResponsivePopover("", {
                                showHeader: false,
                                placement: sap.m.PlacementType.Bottom,
                                content: [viewContent]
                            });
                        }
                        // 添加关闭事件
                        popover.attachAfterClose(null, function (): void {
                            // 设置视图未显示
                            view.isDisplayed = false;
                            view.onClosed();
                            popover.destroy(false);
                        });
                        // 设置视图紧凑
                        if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                            popover.addStyleClass("sapUiSizeCompact sapMOTAPopover sapTntToolHeaderPopover");
                        } else {
                            popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                        }
                        view.id = popover.getId();
                        popover.openBy(<any>sap.ui.getCore().byId(view.barId));
                    } else {
                        setTimeout(function (): void {
                            view.isDisplayed = false;
                            view.onClosed();
                        }, 100);
                    }
                }
                /** 显示地址视图 */
                protected showUrlView(view: ibas.UrlView, container: sap.m.Page): void {
                    if (view.isInside) {
                        // 内部打开
                        // 添加外部打开钮
                        container.insertHeaderContent(new sap.m.Button("", {
                            icon: "sap-icon://forward",
                            tooltip: ibas.i18n.prop("shell_jump"),
                            type: sap.m.ButtonType.Transparent,
                            press: function (): void {
                                window.open(view.url);
                            }
                        }), 0);
                        let viewContent: any = new sap.ui.core.HTML("", {
                            content: ibas.strings.format(
                                `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
                                , view.url),
                            preferDOM: true,
                            sanitizeContent: false,
                            visible: true,
                        });
                        container.addContent(viewContent);
                    } else {
                        // 外部打开
                        let viewContent: any = new sap.m.MessagePage("", {
                            customDescription: new sap.m.Link("", {
                                target: "_blank",
                                text: view.url,
                                href: view.url
                            }),
                            text: ibas.i18n.prop("shell_url_new_window_opened"),
                            description: "",
                            // title: "",
                            showHeader: false,
                            showNavButton: false,
                            icon: "sap-icon://documents",
                            textDirection: sap.ui.core.TextDirection.Inherit
                        });
                        container.addContent(viewContent);
                        window.open(view.url);
                    }
                }
                /** 显示一般视图 */
                protected showCommonView(view: ibas.View, container: sap.m.Page): void {
                    let viewContent: any = view.draw();
                    if (view instanceof ibas.BOQueryView) {
                        // 添加查询面板
                        let queryView: ibas.IEmbeddedQueryPanel = {
                            /** 嵌入查询面板 */
                            embedded(view: any): void {
                                container.setSubHeader(null);
                                container.setSubHeader(view);
                                container.setShowSubHeader(true);
                            }
                        };
                        this.showQueryPanel(view, queryView);
                    }
                    container.addContent(viewContent);
                }
                /** 显示查询面板 */
                protected showQueryPanel(view: ibas.BOQueryView | ibas.BOQueryDialogView, embeddedView: ibas.IEmbeddedQueryPanel): void {
                    let queryPanel: app.QueryPanel = new app.QueryPanel();
                    if (ibas.objects.isNull(queryPanel)) {
                        // 查询面板无效，不添加
                        this.showStatusMessage(ibas.emMessageType.ERROR, ibas.i18n.prop("shell_invalid_query_panel"));
                    } else {
                        // 设置视图导航
                        queryPanel.navigation = this.application.navigation;
                        queryPanel.viewShower = <any>this.application;
                        // 判断面板嵌入位置
                        if (view instanceof ibas.BOQueryViewWithPanel) {
                            // 视图继承嵌入接口
                            embeddedView = view;
                        }
                        // 查询面板位置，先添加提示
                        let strip: sap.m.Toolbar = new sap.m.Toolbar("", {
                            design: sap.m.ToolbarDesign.Auto,
                            content: [
                                new sap.m.MessageStrip("", {
                                    text: ibas.i18n.prop("shell_initialize_query_panel"),
                                    type: sap.ui.core.MessageType.Warning
                                })]
                        });
                        embeddedView.embedded(strip);
                        // 运行查询面板，初始化完成添加到视图
                        // 监听查询面板
                        queryPanel.register(view);
                        queryPanel.run(function (): void {
                            // 清理提示
                            strip.destroy(true);
                            // 嵌入查询面板
                            embeddedView.embedded(queryPanel.view.drawBar());
                            // 嵌入刷新条
                            if (typeof (<ibas.IUseQueryPanel>view).embeddedPuller === "function") {
                                (<ibas.IUseQueryPanel>view).embeddedPuller(queryPanel.view.drawPuller());
                            }
                            // 触发工具条显示完成事件
                            queryPanel.view.barShowedEvent.apply(queryPanel);
                            // 如果自动查询，则调用
                            if (view.autoQuery === true) {
                                queryPanel.view.searchEvent.apply(queryPanel);
                            }
                        });
                    }
                }
                /** 显示常驻视图 */
                showResidentView(view: ibas.IBarView): void {
                    let bar: any = view.drawBar();
                    if (bar instanceof sap.ui.core.Control) {
                        view.barId = bar.getId();
                        this.mainHeader.insertContent(bar, this.mainHeader.getContent().length - 1);
                        // 触发工具条显示完成事件
                        if (view instanceof ibas.BarView) {
                            view.barShowedEvent.apply(view.application);
                        }
                    }
                }
                /** 清理资源 */
                destroyView(view: ibas.IView): void {
                    if (ibas.objects.isNull(view)) {
                        return;
                    }
                    if (view instanceof CenterView) {
                        // 自身销毁，从浏览器缓存刷新页面
                        document.location.replace(document.location.origin + document.location.pathname);
                        view.isDisplayed = false;
                        view.onClosed();
                        return;
                    }
                    let viewContent: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                    if (viewContent instanceof sap.m.TabContainerItem) {
                        // 页签的不做处理
                    } else if (viewContent instanceof sap.m.Dialog) {
                        viewContent.close();
                    } else if (!ibas.objects.isNull(viewContent)) {
                        let parent: sap.ui.base.ManagedObject = viewContent.getParent();
                        if (parent instanceof sap.m.NavContainer) {
                            parent.back(null);
                            parent.removePage(viewContent.getId());
                        }
                        viewContent.destroy(true);
                    }
                    if (view instanceof ibas.View) {
                        view.isDisplayed = false;
                        view.onClosed();
                    }
                }
                /** 地址栏哈希值变化 */
                onHashChanged(event: HashChangeEvent): void {
                    if (ibas.objects.isNull(event) || ibas.objects.isNull(event.newURL)) {
                        return;
                    }
                    if (event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) >= 0) {
                        let url: string = event.newURL.substring(
                            event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) + ibas.URL_HASH_SIGN_VIEWS.length);
                        let viewId: string = url.substring(0, url.indexOf("/"));
                        for (let item of this.pageContainer.getPages()) {
                            if (!(ibas.strings.equals(item.getId(), viewId))) {
                                continue;
                            }
                            for (let cusData of item.getCustomData()) {
                                if (!(ibas.strings.equals(cusData.getKey(), UI_DATA_KEY_VIEW))) {
                                    continue;
                                }
                                let data: any = cusData.getValue();
                                if (data instanceof ibas.View) {
                                    // 通知视图事件
                                    data.onHashChanged(event);
                                }
                                break;
                            }
                            break;
                        }
                    } else if (event.newURL.indexOf(ibas.URL_HASH_SIGN_FUNCTIONS) >= 0) {
                        let url: string = event.newURL.substring(
                            event.newURL.indexOf(ibas.URL_HASH_SIGN_FUNCTIONS) + ibas.URL_HASH_SIGN_FUNCTIONS.length);
                        let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                        this.fireViewEvents(this.activateFunctionEvent, url.substring(0, index));
                    }
                }
                private currentPageView(): ibas.View {
                    let page: sap.ui.core.Element = this.pageContainer.getCurrentPage();
                    if (ibas.objects.isNull(page)) {
                        return;
                    }
                    if (page instanceof sap.m.Page && page.getContent()[0] instanceof sap.m.TabContainer) {
                        // 当前页面是页签时，则为选中的页签
                        page = page.getContent()[0];
                        if (page instanceof sap.m.TabContainer) {
                            page = sap.ui.getCore().byId(page.getSelectedItem());
                            if (ibas.objects.isNull(page)) {
                                return;
                            }
                        }
                    }
                    for (let item of page.getCustomData()) {
                        if (ibas.strings.equals(item.getKey(), UI_DATA_KEY_VIEW)) {
                            let data: any = item.getValue();
                            if (data instanceof ibas.View) {
                                return data;
                            }
                        }
                    }
                    return;
                }
                /** 按钮按下时 */
                onKeyDown(event: KeyboardEvent): void {
                    // 获取当前窗体
                    let view: ibas.View = this.currentPageView();
                    if (!ibas.objects.isNull(view)) {
                        view.onKeyDown(event);
                    }
                }
                /** 当手指移动时 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    // 获取当前窗体
                    let view: ibas.View = this.currentPageView();
                    if (!ibas.objects.isNull(view)) {
                        view.onTouchMove(direction, event);
                    }
                }
            }
        }
    }
}