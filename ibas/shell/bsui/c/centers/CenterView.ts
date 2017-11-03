/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";
import { utils } from "../../../../../openui5/typings/ibas.utils";

/** 配置项目-状态消息延迟时间 */
export const CONFIG_ITEM_STATUS_MESSAGES_DELAY: string = "statusDelay";
/** 配置项目-全屏模式 */
export const CONFIG_ITEM_FULL_SCREEN: string = "fullScreen";
/** 配置项目-功能分组 */
export const CONFIG_ITEM_GROUP_FUNCTONS: string = "groupFunctions";
/** 配置项目-自动激活的功能 */
export const CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION: string = "autoFunction";
/** 配置项目-欢迎页面地址 */
export const CONFIG_ITEM_WELCOME_PAGE_URL: string = "welcomeUrl";
/** 配置项目-收缩功能列表 */
export const CONFIG_ITEM_SHRINK_FUNCTION_LIST: string = "shrinkFunction";
/** 配置项目-最大消息数 */
export const CONFIG_ITEM_MAX_MESSAGES_COUNT: string = "messgesCount";
/** 配置项目-紧缩屏幕 */
export const CONFIG_ITEM_COMPACT_SCREEN: string = "compactScreen";

/**
 * 视图-中心
 */
export class CenterView extends ibas.BOView implements sys.ICenterView {
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
    activateFunctionsEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.mainPage = new sap.tnt.ToolPage("");
        this.mainHeader = new sap.tnt.ToolHeader("", {
            content: [
                // 收缩菜单钮
                new sap.m.Button("", {
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
                    icon: ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE) ? "sap-icon://appear-offline" : "sap-icon://donut-chart",
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
                                    text: ibas.i18n.prop("sys_shell_help"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://sys-help",
                                    press: function (): void {
                                        that.fireViewEvents(that.helpEvent);
                                        popover.close();
                                    }
                                }),
                                new sap.m.Button({
                                    text: ibas.i18n.prop("sys_shell_about"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://world",
                                    press: function (): void {
                                        that.fireViewEvents(that.aboutEvent);
                                        popover.close();
                                    }
                                }),
                                new sap.m.Button({
                                    text: ibas.i18n.prop("sys_shell_logout"),
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
            text: ibas.i18n.prop("sys_shell_messages_history"),
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
        if (ibas.config.get(CONFIG_ITEM_FULL_SCREEN, false)
            && ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) !== ibas.emPlantform.PHONE) {
            this.mainPage.setHeader(null);
            icon = "sap-icon://exit-full-screen";
        } else {
            this.mainPage.setHeader(this.mainHeader);
        }
        form.addHeaderContent(new sap.m.Button("", {
            icon: icon,
            type: sap.m.ButtonType.Transparent,
            press: function (event: any): void {
                if (this.getIcon() === "sap-icon://full-screen") {
                    that.mainPage.setSideExpanded(false);
                    that.mainPage.setHeader(null);
                    // that.mainPage.setSideContent(null);
                    form.setFloatingFooter(true);
                    this.setIcon("sap-icon://exit-full-screen");
                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, true);
                } else {
                    that.mainPage.setHeader(that.mainHeader);
                    // that.mainPage.setSideContent(that.navigation);
                    this.setIcon("sap-icon://full-screen");
                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, false);
                }
            }
        }));
        // 退出钮
        form.addHeaderContent(new sap.m.Button("", {
            icon: "sap-icon://inspect-down",
            tooltip: ibas.i18n.prop("sys_shell_close_view"),
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
            name = ibas.i18n.prop("sys_shell_unknown_user");
        }
        let viewContent: any = new sap.m.MessagePage("", {
            text: ibas.i18n.prop("sys_shell_welcome_page", name, ibas.i18n.prop("sys_shell_name")),
            customDescription: new sap.m.Link("", {
                target: "_blank",
                text: ibas.config.get(CONFIG_ITEM_WELCOME_PAGE_URL),
                href: ibas.config.get(CONFIG_ITEM_WELCOME_PAGE_URL)
            }),
            description: "",
            // title: "",
            showHeader: false,
            showNavButton: false,
            icon: ibas.i18n.prop("sys_shell_welcome_image"),
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
        let uiType: sap.ui.core.MessageType = sap.ui.core.MessageType.None;
        if (type === ibas.emMessageType.ERROR) {
            uiType = sap.ui.core.MessageType.Error;
        } else if (type === ibas.emMessageType.QUESTION) {
            uiType = sap.ui.core.MessageType.Warning;
        } else if (type === ibas.emMessageType.SUCCESS) {
            uiType = sap.ui.core.MessageType.Success;
        } else if (type === ibas.emMessageType.WARNING) {
            uiType = sap.ui.core.MessageType.Warning;
        } else if (type === ibas.emMessageType.INFORMATION) {
            uiType = sap.ui.core.MessageType.Information;
        }
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
            this.messageCount = ibas.config.get(CONFIG_ITEM_MAX_MESSAGES_COUNT, 5);
        }
        if (this.messageHistory.getItems().length > this.messageCount) {
            for (var index: number = this.messageHistory.getItems().length - 1; index < this.messageCount; index--) {
                this.messageHistory.removeItem(index);
            }
        }
        if (!this.messagePopover.isOpen() && this.isDisplayed) {
            this.messagePopover.openBy(this.messageButton, true);
        }
        // 延迟清除消息
        if (ibas.objects.isNull(this.statusDelay)) {
            this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
        }
        setTimeout(function (): void {
            if (ibas.dates.now().getTime() >= that.messageTime + that.statusDelay) {
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
                icon: utils.toMessageBoxIcon(caller.type),
                title: caller.title,
                actions: utils.toMessageBoxAction(caller.actions),
                onClose(oAction: any): void {
                    if (!ibas.objects.isNull(caller.onCompleted)) {
                        caller.onCompleted(utils.toMessageAction(oAction));
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
        let that: this = this;
        let nvList: sap.tnt.NavigationList = this.navigation.getItem();
        let nvItem: sap.tnt.NavigationListItem = new sap.tnt.NavigationListItem("", {
            key: module.name,
            text: module.description,
            icon: module.icon,
            expanded: false,
            select(): void {
                // 模块菜单激活，打开第一个子项
                let item: sap.tnt.NavigationListItem = this.getItems()[0];
                if (!ibas.objects.isNull(item)) {
                    item.fireSelect();
                }
            }
        });
        nvList.addItem(nvItem);
        let showFunctions: Function = function (mModule: ibas.IModuleConsole): void {
            /** 自动激活的功能 */
            let autoActivetedFunction: string = ibas.config.get(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION);
            for (let funItem of mModule.functions()) {
                let newGroup: boolean = false;
                let mdNVItem: sap.tnt.NavigationListItem = nvItem;
                if (ibas.config.get(CONFIG_ITEM_GROUP_FUNCTONS, false)
                    && !ibas.objects.isNull(funItem.category) && funItem.category.length > 0) {
                    // 菜单分组
                    for (let item of nvItem.getItems()) {
                        if (item.getKey() === ibas.strings.format("{0}_{1}", mModule.name, funItem.category)) {
                            mdNVItem = item;
                            break;
                        }
                    }
                    if (mdNVItem === nvItem) {
                        // 不存在分组，新建一个
                        mdNVItem = new sap.tnt.NavigationListItem("", {
                            key: ibas.strings.format("{0}_{1}", mModule.name, funItem.category),
                            text: ibas.i18n.prop(funItem.category),
                            expanded: false,
                            hasExpander: true,
                        });
                        newGroup = true;
                    }
                }
                let subNvItem: sap.tnt.NavigationListItem = new sap.tnt.NavigationListItem("", {
                    key: funItem.name,
                    text: funItem.description,
                    select(): void {
                        that.fireViewEvents(that.activateFunctionsEvent, funItem.id);
                    }
                });
                mdNVItem.addItem(subNvItem);
                if (newGroup) {
                    nvItem.addItem(mdNVItem);
                }
                // 自动激活功能
                if (funItem.id === autoActivetedFunction) {
                    let duration: number = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
                    setTimeout(function (): void {
                        that.fireViewEvents(that.activateFunctionsEvent, funItem.id);
                    }, duration > 0 ? duration * 1.2 : 3000);
                }
            }
        };
        if (module.isInitialized) {
            // 已初始化完成
            showFunctions(module);
        } else {
            // 未初始化完成，等待完成后显示
            module.addListener(showFunctions);
        }
        // 延迟排序模块
        if (ibas.objects.isNull(this.statusDelay)) {
            this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
        }
        // 计算模块位置并添加
        if (ibas.objects.isNull(this.moduleTime)) {
            this.moduleTime = ibas.dates.now().getTime();
            setTimeout(function (): void {
                if (ibas.dates.now().getTime() >= that.messageTime + that.statusDelay / 2) {
                    that.messageTime = ibas.dates.now().getTime();
                    that.showStatusMessage(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_sorting_modules"));
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
                    if (ibas.config.get(CONFIG_ITEM_COMPACT_SCREEN, false)) {
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
                                    that.destroyView(view);
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
                        text: ibas.i18n.prop("sys_shell_confirm"),
                        press(): void {
                            view.confirm();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_exit"),
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
            let queryView: sys.IEmbeddedQueryPanel = {
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
        let form: any = view.darw();
        if (form instanceof sap.m.QuickView) {
            // 快速视图
            form.attachAfterClose(null, function (): void {
                // 设置视图未显示
                view.isDisplayed = false;
                that.barViewQueue.delete(view);
            });
            form.openBy(view.darwBar());
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
            if (ibas.config.get(CONFIG_ITEM_COMPACT_SCREEN, false)) {
                popover.addStyleClass("sapUiSizeCompact sapMOTAPopover sapTntToolHeaderPopover");
            } else {
                popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
            }
            popover.openBy(view.darwBar());
        }
        view.id = form.getId();
        // 记录视图到列表
        this.barViewQueue.set(view, form);
    }
    /** 显示常驻视图 */
    showResidentView(view: ibas.IBarView): void {
        let bar: any = view.darwBar();
        if (!ibas.objects.isNull(bar) && bar instanceof sap.ui.core.Control) {
            this.mainHeader.insertContent(bar, this.mainHeader.getContent().length - 1);
            // 触发工具条显示完成事件
            view.barShowedEvent.apply(view.application);
            view.id = bar.getId();
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
                    tooltip: ibas.i18n.prop("sys_shell_jump"),
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
                text: ibas.i18n.prop("sys_shell_url_new_window_opened"),
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
        let viewContent: any = view.darw();
        if (ibas.objects.instanceOf(view, ibas.BOQueryView)) {
            // 添加查询面板
            let queryView: sys.IEmbeddedQueryPanel = {
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
    }
    /** 显示查询面板 */
    showQueryPanel(view: ibas.BOQueryView, embeddedView: sys.IEmbeddedQueryPanel): void {
        let queryPanel: sys.IQueryPanel<sys.IQueryPanelView> = sys.Factories.systemsFactory.createQueryPanel();
        if (ibas.objects.isNull(queryPanel)) {
            // 查询面板无效，不添加
            this.showStatusMessage(ibas.emMessageType.ERROR, ibas.i18n.prop("sys_shell_invalid_query_panel"));
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
                        text: ibas.i18n.prop("sys_shell_initialize_query_panel"),
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
                let viewContent: any = queryPanel.view.darwBar();
                embeddedView.embedded(viewContent);
                // 触发工具条显示完成事件
                queryPanel.view.barShowedEvent.apply(queryPanel);
            });
        }
    }
    /** 清理资源 */
    destroyView(view: ibas.IView): void {
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
                            this.destroyView(view);
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
                        this.destroyView(view);
                    }
                }
                showLast = true;
            }
        }
        // 显示最后视图
        if (showLast && this.viewQueue.size > 0) {
            let lastView: ibas.IView;
            for (let item of this.viewQueue.keys()) {
                lastView = item;
            }
            this.showView(lastView);
        }
    }
    /** 地址栏哈希值变化 */
    onHashChanged(event: HashChangeEvent): void {
        if (ibas.objects.isNull(event) || event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) < 0) {
            return;
        }
        let url: string = event.newURL.substring(event.newURL.indexOf(ibas.URL_HASH_SIGN_VIEWS) + ibas.URL_HASH_SIGN_VIEWS.length);
        let viewId: string = url.substring(0, url.indexOf("/"));
        // 普通视图匹配
        for (let view of this.viewQueue.keys()) {
            if (view.id === viewId) {
                // 通知视图事件
                view.onHashChanged(event);
                return;
            }
        }
        // 常驻视图匹配
        for (let view of this.barViewQueue.keys()) {
            if (view.id === viewId) {
                // 通知视图事件
                view.onHashChanged(event);
                return;
            }
        }
    }
}