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
            /** 配置项目-功能分组 */
            export const CONFIG_ITEM_GROUP_FUNCTONS: string = "groupFunctions";
            /** 配置项目-自动激活的功能 */
            export const CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION: string = "autoFunction";
            /** 配置项目-欢迎页面地址 */
            export const CONFIG_ITEM_WELCOME_PAGE_URL: string = "welcomeUrl";
            /** 配置项目-欢迎页面图片 */
            export const CONFIG_ITEM_WELCOME_PAGE_IMAGE: string = "welcomeImage";
            /** 配置项目-收缩功能列表 */
            export const CONFIG_ITEM_SHRINK_FUNCTION_LIST: string = "shrinkFunction";
            /** 配置项目-最大消息数 */
            export const CONFIG_ITEM_MAX_MESSAGE_COUNT: string = "messageCount";
            /** 配置项目-隐藏无功能模块 */
            export const CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE: string = "hideModule";
            /**
             * 视图-中心
             */
            export class CenterView extends ibas.BOView implements app.ICenterView {
                /** 主页面 */
                private mainPage: sap.tnt.ToolPage;
                /** 页面头部 */
                private mainHeader: sap.tnt.ToolHeader;
                /** 页面功能导航，左 */
                private navigation: sap.tnt.SideNavigation;
                /** 消息历史框 */
                private messageHistory: sap.m.MessagePopover;
                /** 消息框 */
                private messagePopover: sap.m.Popover;
                /** 消息钮 */
                private messageButton: sap.tnt.NavigationListItem;
                /** 忙对话框 */
                private busyDialog: sap.m.BusyDialog;
                /** 激活帮助 */
                helpEvent: Function;
                /** 激活关于 */
                aboutEvent: Function;
                /** 激活功能，参数1 string 功能ID */
                activateFunctionEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.mainPage = new sap.tnt.ToolPage("");
                    this.mainHeader = new sap.tnt.ToolHeader("", {
                        content: [
                            // 收缩菜单钮
                            new sap.m.Button("", {
                                tooltip: ibas.i18n.prop("shell_apps_menu"),
                                icon: "sap-icon://menu2",
                                type: sap.m.ButtonType.Transparent,
                                layoutData: new sap.m.OverflowToolbarLayoutData("", {
                                    priority: sap.m.OverflowToolbarPriority.NeverOverflow
                                }),
                                press: function (): void {
                                    that.mainPage.setSideExpanded(!that.mainPage.getSideExpanded());
                                }
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
                                            new sap.m.Button({
                                                text: ibas.i18n.prop("shell_help"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://sys-help",
                                                press: function (): void {
                                                    that.fireViewEvents(that.helpEvent);
                                                    popover.close();
                                                }
                                            }),
                                            new sap.m.Button({
                                                text: ibas.i18n.prop("shell_about"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://world",
                                                press: function (): void {
                                                    that.fireViewEvents(that.aboutEvent);
                                                    popover.close();
                                                }
                                            }),
                                            new sap.m.Button({
                                                text: ibas.i18n.prop("shell_logout"),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: "sap-icon://system-exit",
                                                press: function (): void {
                                                    that.fireViewEvents(that.closeEvent);
                                                }
                                            })
                                        ]
                                    });
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            }),
                        ]
                    });
                    this.mainPage.setHeader(this.mainHeader);
                    this.navigation = new sap.tnt.SideNavigation();
                    this.navigation.setItem(new sap.tnt.NavigationList());
                    // 消息历史框
                    this.messageHistory = new sap.m.MessagePopover("", {
                        initiallyExpanded: false,
                        placement: sap.m.VerticalPlacementType.Top,
                    });
                    // 消息历史钮
                    this.messageButton = new sap.tnt.NavigationListItem("", {
                        text: ibas.i18n.prop("shell_messages_history"),
                        icon: "sap-icon://message-popup",
                        select: function (event: any): void {
                            that.messageHistory.openBy(event.getSource());
                        }
                    });
                    // 消息条
                    this.messagePopover = new sap.m.Popover("", {
                        contentWidth: "auto",
                        showHeader: false,
                        placement: sap.m.PlacementType.HorizontalPreferredRight,
                    });
                    (<any>this.messagePopover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                    // 固定菜单
                    this.navigation.setFixedItem(new sap.tnt.NavigationList("", {
                        items: [
                            this.messageButton,
                        ],
                    }));
                    this.mainPage.setSideContent(this.navigation);
                    this.mainPage.setSideExpanded(!ibas.config.get(CONFIG_ITEM_SHRINK_FUNCTION_LIST, true));
                    this.id = this.mainPage.getId();
                    // 创建欢迎页
                    this.mainPage.addMainContent(this.drawWelcomePage());
                    return this.mainPage;
                }
                /**
                 * 创建窗体容器页
                 */
                drawPage(): sap.m.Page {
                    let that: this = this;
                    let form: sap.m.Page = new sap.m.Page("", {
                        enableScrolling: false,
                        showNavButton: false,
                    });
                    // 回退钮
                    // form.setShowNavButton(true);
                    form.attachNavButtonPress(null, this.destroyCurrentView, this);
                    // 全屏钮
                    let icon: string = "sap-icon://full-screen";
                    // 全屏，当前平台
                    let fullScreen: boolean = ibas.config.get(
                        ibas.strings.format(CONFIG_ITEM_FULL_SCREEN_ON_PLANTFORM,
                            ibas.enums.toString(ibas.emPlantform, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM))));
                    // 全屏，整体
                    if (ibas.objects.isNull(fullScreen)) {
                        fullScreen = ibas.config.get(CONFIG_ITEM_FULL_SCREEN, false);
                    }
                    if (fullScreen) {
                        this.mainPage.setHeader(null);
                        icon = "sap-icon://exit-full-screen";
                    } else {
                        this.mainPage.setHeader(this.mainHeader);
                    }
                    // 全屏钮
                    form.addHeaderContent(
                        new sap.m.Button("", {
                            icon: icon,
                            type: sap.m.ButtonType.Transparent,
                            press: function (event: any): void {
                                if (this.getIcon() === "sap-icon://full-screen") {
                                    that.mainPage.setSideExpanded(false);
                                    that.mainPage.setHeader(null);
                                    // that.mainPage.setSideContent(null);
                                    form.setFloatingFooter(true);
                                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, true);
                                    this.setIcon("sap-icon://exit-full-screen");
                                } else {
                                    that.mainPage.setHeader(that.mainHeader);
                                    // that.mainPage.setSideContent(that.navigation);
                                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, false);
                                    this.setIcon("sap-icon://full-screen");
                                }
                            }
                        }));
                    // 退出钮
                    form.addHeaderContent(
                        new sap.m.Button("", {
                            icon: "sap-icon://inspect-down",
                            tooltip: ibas.i18n.prop("shell_close_view"),
                            type: sap.m.ButtonType.Transparent,
                            press: function (): void {
                                that.destroyCurrentView();
                            }
                        }));
                    return form;
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
                /**
                 * 显示状态消息
                 * @param type 消息类型
                 * @param message 消息内容
                 */
                showStatusMessage(type: ibas.emMessageType, message: string): void {
                    let that: this = this;
                    let uiType: sap.ui.core.MessageType = openui5.utils.toMessageType(type);
                    // 特殊字符处理
                    message = message.replace("{", "(").replace("}", ")");
                    this.messagePopover.destroyContent();
                    this.messagePopover.addContent(
                        new sap.m.MessageStrip("", {
                            width: "100%",
                            text: message,
                            type: uiType,
                            showIcon: true,
                            showCloseButton: false
                        })
                    );
                    this.messageTime = ibas.dates.now().getTime();
                    this.messageHistory.insertItem(new sap.m.MessagePopoverItem("", {
                        type: uiType,
                        title: message,
                    }), 0);
                    // 清除超出的历史消息
                    if (ibas.objects.isNull(this.messageCount)) {
                        this.messageCount = ibas.config.get(CONFIG_ITEM_MAX_MESSAGE_COUNT, 50);
                    }
                    if (this.messageHistory.getItems().length > this.messageCount) {
                        this.messageHistory.removeItem(this.messageHistory.getItems().length - 1);
                    }
                    if (!this.messagePopover.isOpen() && this.isDisplayed) {
                        this.messagePopover.openBy(this.messageButton, true);
                    }
                    // 延迟清除消息
                    if (ibas.objects.isNull(this.statusDelay)) {
                        this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 2) * 1000;
                    }
                    setTimeout(function (): void {
                        if (ibas.dates.now().getTime() >= (that.messageTime + that.statusDelay)) {
                            if (that.messagePopover.isOpen() && that.isDisplayed) {
                                that.messagePopover.close();
                            }
                        }
                    }, this.statusDelay);
                }
                /** 对话消息 */
                showMessageBox(caller: ibas.IMessgesCaller): void {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show(
                        caller.message,
                        {
                            icon: openui5.utils.toMessageBoxIcon(caller.type),
                            title: caller.title,
                            actions: openui5.utils.toMessageBoxAction(caller.actions),
                            onClose(oAction: any): void {
                                if (!ibas.objects.isNull(caller.onCompleted)) {
                                    caller.onCompleted(openui5.utils.toMessageAction(oAction));
                                }
                            }
                        }
                    );
                }
                /**
                 * 显示模块
                 * @param module 模块
                 */
                showModule(module: ibas.IModuleConsole): void {
                    let nvList: sap.tnt.NavigationList = this.navigation.getItem();
                    nvList.addItem(
                        new sap.tnt.NavigationListItem("", {
                            key: module.name,
                            text: module.description,
                            icon: module.icon,
                            expanded: false,
                            visible: !ibas.config.get(CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE, true),
                            select(): void {
                                // 展开菜单
                                this.setExpanded(!this.getExpanded());
                            }
                        })
                    );
                    // 延迟排序模块
                    if (ibas.objects.isNull(this.statusDelay)) {
                        this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 2) * 1000;
                    }
                    // 计算模块位置并添加
                    let that: this = this;
                    if (ibas.objects.isNull(this.moduleTime)) {
                        this.moduleTime = ibas.dates.now().getTime();
                        setTimeout(function (): void {
                            if (ibas.dates.now().getTime() >= that.messageTime + that.statusDelay / 2) {
                                that.messageTime = ibas.dates.now().getTime();
                                that.showStatusMessage(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_sorting_modules"));
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
                                delete (that.moduleTime);
                            }
                        }, this.statusDelay / 2);
                    } else {
                        this.moduleTime = ibas.dates.now().getTime();
                    }
                }
                /** 模块时间 */
                private moduleTime: number;
                /**
                 * 显示模块功能
                 * @param module 模块
                 * @param func 功能
                 */
                showModuleFunction(module: string, func: ibas.IModuleFunction): void {
                    /** 自动激活的功能 */
                    let autoActivetedFunction: string = ibas.config.get(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION);
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
                    let that: this = this;
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
                                that.fireViewEvents(that.activateFunctionEvent, func.id);
                            }
                        })
                    );
                    // 自动激活功能
                    if (func.id === autoActivetedFunction) {
                        let duration: number = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 2) * 1000;
                        setTimeout(function (): void {
                            that.fireViewEvents(that.activateFunctionEvent, func.id);
                        }, duration > 0 ? duration * 1.2 : 3000);
                    }
                }
                /** 设置忙状态 */
                busyView(view: ibas.IView, busy: boolean, msg: string): any {
                    let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                    if (!ibas.objects.isNull(ui) && ui instanceof sap.m.Page) {
                        // 视图自身可设置忙状态
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
                private viewQueue: Map<ibas.IView, sap.m.Page> = new Map<ibas.IView, sap.m.Page>();
                /** 显示视图 */
                showView(view: ibas.IView): void {
                    if (ibas.objects.instanceOf(view, ibas.BODialogView)) {
                        // 选择视图
                        this.showDialogView(<ibas.BODialogView>view);
                    } else if (ibas.objects.instanceOf(view, ibas.BOBarView)) {
                        // 工具条视图
                        this.showBarView(<ibas.BOBarView>view);
                    } else {
                        // 主页面中的视图
                        // 获取历史视图
                        let container: sap.m.Page = this.viewQueue.get(view);
                        if (ibas.objects.isNull(container)) {
                            // 不存在历史，绘制新的
                            container = this.drawPage();
                            // 设置标题
                            if (!ibas.objects.isNull(view.title)) {
                                container.setTitle(view.title);
                            } else if (!ibas.objects.isNull(view.id)) {
                                container.setTitle(view.id);
                            }
                            if (ibas.objects.instanceOf(view, ibas.UrlView)) {
                                // 视图为地址视图
                                this.showUrlView(<ibas.UrlView>view, container);
                            } else {
                                // 一般视图
                                this.showCommonView(<ibas.View>view, container);
                            }
                            // 设置视图ID
                            view.id = container.getId();
                            // 缓存视图
                            this.viewQueue.set(view, container);
                        } else {
                            // 待显示的视图是页签一部分，则显示完整页签
                            if (container.getParent() instanceof sap.m.TabContainerItem) {
                                let parent: any = container.getParent();
                                if (parent.getParent() instanceof sap.m.TabContainer) {
                                    for (let item of this.mainPage.getMainContents()) {
                                        this.mainPage.removeMainContent(item);
                                    }
                                    this.mainPage.addMainContent(<sap.m.TabContainer>parent.getParent());
                                    return;
                                }
                            }
                        }
                        // 主窗体加载
                        if (ibas.objects.instanceOf(view, ibas.TabView)) {
                            // 页签视图
                            let tabContainer: sap.m.TabContainer;
                            for (let item of this.mainPage.getMainContents()) {
                                if (item instanceof sap.m.TabContainer) {
                                    tabContainer = item;
                                    break;
                                }
                            }
                            if (ibas.objects.isNull(tabContainer)) {
                                let that: this = this;
                                tabContainer = new sap.m.TabContainer("", {
                                    itemClose: function (oControlEvent: any): void {
                                        // 删除页签
                                        let tabItem: sap.m.TabContainerItem = oControlEvent.getParameters().item;
                                        for (let view of that.viewQueue.keys()) {
                                            if (view.id === tabItem.getKey()) {
                                                that.destroyView(view, false);
                                            }
                                        }
                                        setTimeout(() => {
                                            that.destroyCurrentView();
                                        }, 300);
                                    }
                                });
                                // 移出当前内容
                                for (let item of this.mainPage.getMainContents()) {
                                    this.mainPage.removeMainContent(item);
                                }
                                this.mainPage.addMainContent(tabContainer);
                            }
                            // 隐藏工具条
                            container.setShowHeader(false);
                            let containerItem: sap.m.TabContainerItem = new sap.m.TabContainerItem("", {
                                name: container.getTitle(),
                                key: container.getId(),
                                modified: false,
                                content: [container]
                            });
                            // 接口没定义addItem方法？
                            (<any>tabContainer).addItem(containerItem);
                            (<any>tabContainer).setSelectedItem(containerItem);
                        } else {
                            // 普通视图
                            // 移出当前内容
                            for (let item of this.mainPage.getMainContents()) {
                                this.mainPage.removeMainContent(item);
                            }
                            this.mainPage.addMainContent(container);
                        }
                    }
                }
                /** 显示对话框视图 */
                showDialogView(view: ibas.BODialogView): void {
                    let title: string;
                    // 设置标题
                    if (!ibas.objects.isNull(view.title)) {
                        title = view.title;
                    } else if (!ibas.objects.isNull(view.id)) {
                        title = view.id;
                    }
                    let form: any = view.draw();
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
                            content: [view.draw()],
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
                    if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                        dialog.addStyleClass("sapUiSizeCompact");
                    }
                    // 修改id号
                    view.id = dialog.getId();
                    dialog.open();
                    // 添加查询面板
                    if (ibas.objects.instanceOf(view, ibas.BOQueryView)
                        || ibas.objects.instanceOf(view, ibas.BOQueryDialogView)) {
                        let queryView: ibas.IEmbeddedQueryPanel = {
                            /** 嵌入查询面板 */
                            embedded(view: any): void {
                                dialog.setSubHeader(null);
                                dialog.setSubHeader(view);
                            }
                        };
                        this.showQueryPanel(<ibas.BOQueryView><any>view, queryView);
                    }
                }
                private barViewQueue: Map<ibas.IView, sap.m.Page> = new Map<ibas.IView, sap.m.Page>();
                /** 显示工具条视图 */
                showBarView(view: ibas.BOBarView): void {
                    let that: this = this;
                    let form: any = view.draw();
                    if (ibas.objects.isNull(form)) {
                        setTimeout(function (): void {
                            view.isDisplayed = false;
                        }, 100);
                        return;
                    } else if (form instanceof sap.m.QuickView) {
                        // 快速视图
                        form.attachAfterClose(null, function (): void {
                            // 设置视图未显示
                            view.isDisplayed = false;
                            that.barViewQueue.delete(view);
                            that.destroyView(view, false);
                        });
                        form.openBy(view.drawBar());
                    } else if (form instanceof sap.m.Dialog) {
                        // 对话框视图
                        // 添加关闭事件
                        form.attachAfterClose(null, function (): void {
                            // 设置视图未显示
                            view.isDisplayed = false;
                        });
                        // 设置视图紧凑
                        if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                            form.addStyleClass("sapUiSizeCompact");
                        }
                        // 修改id号
                        view.id = form.getId();
                        form.open();
                    } else {
                        // 弹出层
                        let popover: sap.m.ResponsivePopover;
                        if (form instanceof sap.m.ResponsivePopover) {
                            popover = form;
                        } else {
                            popover = new sap.m.ResponsivePopover("", {
                                showHeader: false,
                                placement: sap.m.PlacementType.Bottom,
                                content: [form]
                            });
                        }
                        // 添加关闭事件
                        popover.attachAfterClose(null, function (): void {
                            // 设置视图未显示
                            view.isDisplayed = false;
                            that.barViewQueue.delete(view);
                            popover.destroy(false);
                        });
                        // 设置视图紧凑
                        if (ibas.config.get(openui5.CONFIG_ITEM_COMPACT_SCREEN, false)) {
                            popover.addStyleClass("sapUiSizeCompact sapMOTAPopover sapTntToolHeaderPopover");
                        } else {
                            popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                        }
                        popover.openBy(view.drawBar());
                    }
                    view.id = form.getId();
                    // 记录视图到列表
                    this.barViewQueue.set(view, form);
                }
                /** 显示常驻视图 */
                showResidentView(view: ibas.IBarView): void {
                    let bar: any = view.drawBar();
                    if (!ibas.objects.isNull(bar) && bar instanceof sap.ui.core.Control) {
                        this.mainHeader.insertContent(bar, this.mainHeader.getContent().length - 1);
                        // 触发工具条显示完成事件
                        if (view instanceof ibas.BOBarView) {
                            view.barShowedEvent.apply(view.application);
                            view.id = bar.getId();
                        }
                    }
                }
                /** 显示地址视图 */
                showUrlView(view: ibas.UrlView, container: sap.m.Page): void {
                    if (view.isInside) {
                        // 内部打开
                        let html: string = ibas.strings.format(
                            `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
                            , view.url);
                        if (ibas.objects.isNull(this.mainPage.getHeader())) {
                            container.setShowHeader(false);
                        } else {
                            // 添加外部打开钮
                            container.insertHeaderContent(new sap.m.Button("", {
                                icon: "sap-icon://forward",
                                tooltip: ibas.i18n.prop("shell_jump"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    window.open(view.url);
                                }
                            }), 0);
                        }
                        let viewContent: any = new sap.ui.core.HTML("", {
                            content: html,
                            preferDOM: true,
                            sanitizeContent: false,
                            visible: true,
                        });
                        view.id = viewContent.getId();
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
                        view.id = viewContent.getId();
                        container.addContent(viewContent);
                        window.open(view.url);
                    }
                }
                /** 显示一般视图 */
                showCommonView(view: ibas.View, container: sap.m.Page): void {
                    let viewContent: any = view.draw();
                    if (ibas.objects.instanceOf(view, ibas.BOQueryView)) {
                        // 添加查询面板
                        let queryView: ibas.IEmbeddedQueryPanel = {
                            /** 嵌入查询面板 */
                            embedded(view: any): void {
                                container.setSubHeader(null);
                                container.setSubHeader(view);
                                container.setShowSubHeader(true);
                            }
                        };
                        this.showQueryPanel(<ibas.BOQueryView>view, queryView);
                    }
                    container.addContent(viewContent);
                    // 隐藏标题栏
                    if (view.hideTitle) {
                        container.setShowHeader(false);
                    }
                }
                /** 显示查询面板 */
                showQueryPanel(view: ibas.BOQueryView, embeddedView: ibas.IEmbeddedQueryPanel): void {
                    let queryPanel: app.QueryPanel = new app.QueryPanel();
                    if (ibas.objects.isNull(queryPanel)) {
                        // 查询面板无效，不添加
                        this.showStatusMessage(ibas.emMessageType.ERROR, ibas.i18n.prop("shell_invalid_query_panel"));
                    } else {
                        let that: this = this;
                        // 设置视图导航
                        queryPanel.navigation = this.application.navigation;
                        queryPanel.viewShower = <any>this.application;
                        // 判断面板嵌入位置
                        if (ibas.objects.instanceOf(view, ibas.BOQueryViewWithPanel)) {
                            // 视图继承嵌入接口
                            embeddedView = <ibas.BOQueryViewWithPanel>view;
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
                        });
                    }
                }

                /** 清理资源 */
                destroyView(view: ibas.IView, showLast: boolean = true): void {
                    if (ibas.objects.isNull(view)) { return; }
                    if (view instanceof CenterView) {
                        // 自身销毁，从浏览器缓存刷新页面
                        document.location.replace(document.location.origin + document.location.pathname);
                        return;
                    } else {
                        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                        if (!ibas.objects.isNull(ui)) {
                            ui.destroy(true);
                        }
                        if (this.viewQueue.has(view)) {
                            this.viewQueue.delete(view);
                            if (showLast === true) {
                                this.showLastView();
                            }
                        }
                    }
                }
                /** 清理当前视图 */
                destroyCurrentView(): void {
                    let showLast: boolean = false;
                    for (let item of this.mainPage.getMainContents()) {
                        if (item instanceof sap.m.TabContainer) {
                            // 当前为页签控件
                            for (let tab of item.getItems()) {
                                // 遍历页签内容
                                if (item.getSelectedItem() !== tab) {
                                    continue;
                                }
                                for (let view of this.viewQueue.keys()) {
                                    if (view.id === tab.getKey()) {
                                        this.destroyView(view, false);
                                    }
                                }
                            }
                            // 页签没有
                            if (item.getItems().length === 0) {
                                item.destroy(true);
                                // 页签销毁后才显示上一个页面
                                showLast = true;
                            }
                        } else {
                            // 清理视图及后续视图
                            let done: boolean = false;
                            for (let view of this.viewQueue.keys()) {
                                if (view.id === item.getId()) {
                                    done = true;
                                }
                                if (done) {
                                    this.destroyView(view, false);
                                }
                            }
                            showLast = true;
                        }
                    }
                    ibas.urls.changeHash("#");
                    // 显示最后视图
                    if (showLast) {
                        this.showLastView();
                    }
                }
                private showLastView(): void {
                    // 显示最后视图
                    if (this.viewQueue.size > 0) {
                        let lastView: ibas.IView;
                        for (let item of this.viewQueue.keys()) {
                            lastView = item;
                        }
                        this.showView(lastView);
                    }
                    if (this.mainPage.getMainContents().length === 0) {
                        // 退出全屏状态
                        if (this.mainPage.getHeader() === null) {
                            this.mainPage.setHeader(this.mainHeader);
                            ibas.config.set(CONFIG_ITEM_FULL_SCREEN, false);
                        }
                        // 页面没有内容时，显示欢迎
                        this.mainPage.addMainContent(this.drawWelcomePage());
                    }
                }
                /** 地址栏哈希值变化 */
                onHashChanged(event: HashChangeEvent): void {
                    if (ibas.objects.isNull(event) || event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) < 0) {
                        return;
                    }
                    let url: string = event.newURL.substring(
                        event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) + ibas.URL_HASH_SIGN_VIEWS.length);
                    let viewId: string = url.substring(0, url.indexOf("/"));
                    // 普通视图匹配
                    for (let view of this.viewQueue.keys()) {
                        if (view.id === viewId) {
                            // 通知视图事件
                            if (view instanceof ibas.View) {
                                view.onHashChanged(event);
                            }
                            return;
                        }
                    }
                    // 常驻视图匹配
                    for (let view of this.barViewQueue.keys()) {
                        if (view.id === viewId) {
                            // 通知视图事件
                            if (view instanceof ibas.View) {
                                view.onHashChanged(event);
                            }
                            return;
                        }
                    }
                }
                /** 当手指移动时 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    for (let item of this.mainPage.getMainContents()) {
                        if (item instanceof sap.m.TabContainer) {
                            // 当前为页签控件
                            for (let tab of item.getItems()) {
                                // 遍历页签内容
                                if (item.getSelectedItem() !== tab) {
                                    continue;
                                }
                                for (let view of this.viewQueue.keys()) {
                                    if (view.id === tab.getKey()) {
                                        if (view instanceof ibas.View) {
                                            view.onTouchMove(direction, event);
                                        }
                                    }
                                }
                            }
                        } else {
                            for (let view of this.viewQueue.keys()) {
                                if (view.id === item.getId()) {
                                    if (view instanceof ibas.View) {
                                        view.onTouchMove(direction, event);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}