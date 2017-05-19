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

/**
 * 视图-中心
 */
export class CenterView extends ibas.BOView implements sys.ICenterView {
    /** 主页面 */
    private page: sap.tnt.ToolPage;
    /** 页面头部 */
    private header: sap.tnt.ToolHeader;
    /** 页面功能导航，左 */
    private navigation: sap.tnt.SideNavigation;
    /** 状态消息条 */
    private statusBar: sap.m.Toolbar;
    /** 消息历史框 */
    private messageHistory: sap.m.MessagePopover;
    /** 窗体显示 */
    private form: sap.m.Page;
    /** 用户信息条 */
    private userBar: sap.m.Button;
    /** 忙对话框 */
    private busyDialog: sap.m.BusyDialog;
    /** 状态消息延迟时间（毫秒） */
    private statusDelay?: number;
    /** 激活帮助 */
    helpEvent: Function;
    /** 激活关于 */
    aboutEvent: Function;
    /** 激活功能，参数1 string 功能ID */
    activateFunctionsEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.header = new sap.tnt.ToolHeader("");
        // 收缩菜单钮
        this.header.addContent(new sap.m.Button("", {
            icon: "sap-icon://menu2",
            type: sap.m.ButtonType.Transparent,
            layoutData: new sap.m.OverflowToolbarLayoutData("", {
                priority: sap.m.OverflowToolbarPriority.NeverOverflow
            }),
            press: function (): void {
                that.page.setSideExpanded(!that.page.getSideExpanded());
            }
        }));
        this.header.addContent(new sap.m.ToolbarSpacer("", { width: "20px" }));
        this.header.addContent(new sap.tnt.ToolHeaderUtilitySeparator(""));
        this.header.addContent(new sap.m.ToolbarSpacer("", {
            layoutData: new sap.m.OverflowToolbarLayoutData("", {
                priority: sap.m.OverflowToolbarPriority.NeverOverflow,
                minWidth: "20px"
            })
        }));
        // 用户钮
        this.userBar = new sap.m.Button("", {
            type: sap.m.ButtonType.Transparent,
            layoutData: new sap.m.OverflowToolbarLayoutData("", {
                priority: sap.m.OverflowToolbarPriority.NeverOverflow
            }),
            press: function (event: any): void {
                let popover: sap.m.Popover = new sap.m.Popover(
                    "", {
                        showHeader: false,
                        placement: sap.m.PlacementType.Bottom,
                        content: [
                            new sap.m.Button({
                                text: ibas.i18n.prop("sys_shell_help"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.helpEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: ibas.i18n.prop("sys_shell_about"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.aboutEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: ibas.i18n.prop("sys_shell_logout"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            })
                        ]
                    }
                );
                (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                popover.openBy(event.getSource(), true);
            }
        });
        this.header.addContent(this.userBar);
        this.navigation = new sap.tnt.SideNavigation();
        this.navigation.setItem(new sap.tnt.NavigationList());
        // 消息历史框
        this.messageHistory = new sap.m.MessagePopover("", {
            initiallyExpanded: false,

        });
        this.navigation.setFixedItem(new sap.tnt.NavigationList("", {
            items: [
                new sap.tnt.NavigationListItem("", {
                    text: ibas.i18n.prop("sys_shell_messages_history"),
                    icon: "sap-icon://message-popup",
                    select: function (event: any): void {
                        that.messageHistory.openBy(event.getSource());
                    }
                })],
        }));
        this.form = new sap.m.Page("", {
            enableScrolling: false,
            showNavButton: false,
        });
        // 回退钮
        // this.form.setShowNavButton(true);
        this.form.attachNavButtonPress(null, this.destroyCurrentView, this);
        // 全屏钮
        let icon: string = "sap-icon://full-screen";
        if (ibas.config.get(CONFIG_ITEM_FULL_SCREEN, false)
            && ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) !== ibas.emPlantform.PHONE) {
            this.page.setHeader(null);
            icon = "sap-icon://exit-full-screen";
        }
        this.form.addHeaderContent(new sap.m.Button("", {
            icon: icon,
            type: sap.m.ButtonType.Transparent,
            press: function (event: any): void {
                if (this.getIcon() === "sap-icon://full-screen") {
                    that.page.setSideExpanded(false);
                    that.page.setHeader(null);
                    // that.page.setSideContent(null);
                    that.form.setFloatingFooter(true);
                    this.setIcon("sap-icon://exit-full-screen");
                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, true);
                } else {
                    that.page.setHeader(that.header);
                    // that.page.setSideContent(that.navigation);
                    that.form.setFloatingFooter(false);
                    this.setIcon("sap-icon://full-screen");
                    ibas.config.set(CONFIG_ITEM_FULL_SCREEN, false);
                }
            }
        }));
        // 退出钮
        this.form.addHeaderContent(new sap.m.Button("", {
            icon: "sap-icon://inspect-down",
            tooltip: ibas.i18n.prop("sys_shell_close_view"),
            type: sap.m.ButtonType.Transparent,
            press: function (): void {
                that.destroyCurrentView();
            }
        }));
        this.form.setFloatingFooter(true); // 浮起状态条
        this.statusBar = new sap.m.OverflowToolbar("", {
            design: sap.m.ToolbarDesign.Transparent,
            height: "auto",
            width: "auto"
        });
        this.form.setFooter(this.statusBar);
        this.page = new sap.tnt.ToolPage();
        this.page.setHeader(this.header);
        this.page.setSideContent(this.navigation);
        this.page.setSideExpanded(false);
        this.page.addMainContent(this.form);
        this.id = this.page.getId();
        return this.page;
    }
	/**
	 * 显示状态消息
	 * @param type 消息类型
	 * @param message 消息内容
	 */
    showStatusMessage(type: ibas.emMessageType, message: string): void {
        let uiType: sap.ui.core.MessageType = sap.ui.core.MessageType.None;
        let uiIcon: any = undefined;
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
        let messageStrip: sap.m.MessageStrip = new sap.m.MessageStrip(
            "",
            {
                text: message,
                type: uiType,
                customIcon: uiIcon,
                showIcon: true,
                showCloseButton: true
            });
        this.form.setFooter(this.statusBar);
        // 清理已有的
        this.statusBar.destroyContent();
        // 添加新的
        this.statusBar.addContent(new sap.ui.layout.VerticalLayout("", {
            width: "100%",
            content: [messageStrip]
        }));
        // 延迟清除消息
        if (ibas.objects.isNull(this.statusDelay)) {
            this.statusDelay = ibas.config.get(CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
        }
        if (this.statusDelay > 0) {
            let that: this = this;
            setTimeout(function (): void {
                if (messageStrip) {
                    messageStrip.destroy(true);
                    that.statusBar.destroyContent();
                    that.form.setFooter(null);
                    let popMessage: sap.m.MessagePopoverItem = new sap.m.MessagePopoverItem("", {
                        type: messageStrip.getType(),
                        title: messageStrip.getText(),
                        counter: that.messageHistory.getItems().length,
                    });
                    that.messageHistory.addItem(popMessage);
                }
            }, this.statusDelay);
        }
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
        let nvItem: sap.tnt.NavigationListItem = new sap.tnt.NavigationListItem();
        nvItem.setKey(module.name);
        nvItem.setText(module.description);
        nvItem.setIcon(module.icon);
        nvItem.setEnabled(true);
        nvItem.setExpanded(false);
        let showFunctions: Function = function (): void {
            /** 自动激活的功能 */
            let autoActivetedFunction: string = ibas.config.get(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION);
            for (let funItem of module.functions()) {
                let newGroup: boolean = false;
                let mdNVItem: sap.tnt.NavigationListItem = nvItem;
                if (ibas.config.get(CONFIG_ITEM_GROUP_FUNCTONS, false)
                    && !ibas.objects.isNull(funItem.category) && funItem.category.length > 0) {
                    // 菜单分组
                    for (let item of nvItem.getItems()) {
                        if (item.getKey() === ibas.strings.format("{0}_{1}", module.name, funItem.category)) {
                            mdNVItem = item;
                            break;
                        }
                    }
                    if (mdNVItem === nvItem) {
                        // 不存在分组，新建一个
                        mdNVItem = new sap.tnt.NavigationListItem();
                        mdNVItem.setKey(ibas.strings.format("{0}_{1}", module.name, funItem.category));
                        mdNVItem.setText(ibas.i18n.prop(funItem.category));
                        mdNVItem.setEnabled(true);
                        mdNVItem.setExpanded(false);
                        mdNVItem.setHasExpander(true);
                        newGroup = true;
                    }
                }
                let subNvItem: sap.tnt.NavigationListItem = new sap.tnt.NavigationListItem();
                subNvItem.setKey(funItem.name);
                subNvItem.setText(funItem.description);
                subNvItem.attachSelect(null, function (): void {
                    that.fireViewEvents(that.activateFunctionsEvent, funItem.id);
                });
                mdNVItem.addItem(subNvItem);
                if (newGroup) {
                    nvItem.addItem(mdNVItem);
                }
                // 自动激活功能
                if (funItem.id === autoActivetedFunction) {
                    setTimeout(function (): void {
                        that.fireViewEvents(that.activateFunctionsEvent, funItem.id);
                    }, 30);
                }
            }
        };
        if (module.isInitialized) {
            // 已初始化完成
            showFunctions();
        } else {
            // 未初始化完成，等待完成后显示
            module.addListener(showFunctions);
        }
        nvList.addItem(nvItem);
    }
    /** 设置忙状态 */
    busyView(view: ibas.IView, busy: boolean, msg: string): any {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!ibas.objects.isNull(ui) && ui instanceof sap.ui.core.Control) {
            // 视图自身可设置忙状态
            ui.setBusy(busy);
        } else {
            // 视图不能设置忙状态，使用全局对话框
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
                }
            }
        }
    }
    /** 显示用户信息 */
    showUser(user: sys.IUser): void {
        if (!ibas.objects.isNull(user.name)) {
            this.userBar.setText(user.name);
        } else if (!ibas.objects.isNull(user.code)) {
            this.userBar.setText(user.code);
        } else {
            this.userBar.setText(ibas.i18n.prop("sys_shell_unknown_user"));
        }
    }
    private viewQueue: Map<ibas.IView, any> = new Map<ibas.IView, any>();
    /** 显示视图 */
    showView(view: ibas.IView): void {
        if (ibas.objects.instanceOf(view, ibas.BODialogView)) {
            // 选择视图
            this.showDialogView(<ibas.BODialogView>view);
        } else if (ibas.objects.instanceOf(view, ibas.BOBarView)) {
            // 工具条视图
            this.showBarView(<ibas.BOBarView>view);
        } else {
            let container: sap.m.Page = this.form;
            // 获取视图显示的容器
            if (ibas.objects.instanceOf(view, ibas.TabView)) {
                // 页签视图
                let tabContainer: sap.m.TabContainer;
                for (let item of container.getContent()) {
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
                            let key: any = oControlEvent.getParameters().item.getKey();
                            let cView: ibas.IView;
                            for (let item of that.viewQueue.keys()) {
                                if (item.id === key) {
                                    cView = item;
                                    break;
                                }
                            }
                            if (!ibas.objects.isNull(cView)) {
                                that.destroyView(cView);
                            }
                        }
                    });
                    for (let item of this.form.getContent()) {
                        this.form.removeContent(item);
                    }
                    this.form.setShowHeader(true);
                    this.form.setSubHeader(null);
                    this.form.setTitle(null);
                    this.form.addContent(tabContainer);
                } else {
                    if (this.viewQueue.has(view)) {
                        // 页签视图已在显示列表中，不再处理
                        return;
                    }
                }
                container = new sap.m.Page("", {
                    showHeader: false,
                    showSubHeader: false,
                });
                let containerItem: sap.m.TabContainerItem = new sap.m.TabContainerItem("", {
                    name: view.title,
                    key: view.id,
                    modified: false,
                    content: [container]
                });
                // 接口没定义addItem方法？
                (<any>tabContainer).addItem(containerItem);
                (<any>tabContainer).setSelectedItem(containerItem);
            } else {
                // 普通视图
                for (let item of container.getContent()) {
                    container.removeContent(item);
                }
                container.setShowHeader(true);
                container.setSubHeader(null);
                container.setTitle(null);
                // 设置标题
                if (!ibas.objects.isNull(view.title)) {
                    container.setTitle(view.title);
                } else if (!ibas.objects.isNull(view.id)) {
                    container.setTitle(view.id);
                }
            }
            if (ibas.objects.instanceOf(view, ibas.UrlView)) {
                // 视图为地址视图
                this.showUrlView(<ibas.UrlView>view, container);
            } else {
                // 一般视图
                this.showCommonView(<ibas.View>view, container);
            }
        }
    }
    /** 显示一般视图 */
    showCommonView(view: ibas.View, container: sap.m.Page): void {
        // this.form.destroyContent();
        // 优先使用缓存中视图数据
        let viewContent: any;
        if (this.viewQueue.has(view)) {
            viewContent = this.viewQueue.get(view);
        }
        if (ibas.objects.isNull(viewContent)) {
            viewContent = view.darw();
        }
        container.addContent(viewContent);
        this.viewQueue.set(view, viewContent);
        // 添加查询面板
        if (ibas.objects.instanceOf(view, ibas.BOQueryView)) {
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
    }
    /** 显示地址视图 */
    showUrlView(view: ibas.UrlView, container: sap.m.Page): void {
        if (view.isInside) {
            // 内部打开
            let html: string = ibas.strings.format(
                `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
                , view.url);
            if (ibas.objects.isNull(this.page.getHeader())) {
                container.setShowHeader(false);
            }
            container.destroySubHeader();
            container.destroyContent();
            container.addContent(new sap.ui.core.HTML("",
                {
                    content: html,
                    preferDOM: true,
                    sanitizeContent: false,
                    visible: true,
                }));
        } else {
            // 外部打开
            window.open(view.url);
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
        let that: this = this;
        let dialog: sap.m.Dialog = new sap.m.Dialog("", {
            title: title,
            type: sap.m.DialogType.Standard,
            state: sap.ui.core.ValueState.None,
            // resizable: true,
            // draggable: true,
            stretchOnPhone: true,
            horizontalScrolling: true,
            verticalScrolling: true,
            content: [view.darw()],
            afterClose: function (): void {
                // 设置视图未显示
                view.isDisplayed = false;
                // 清理缓存的查询面板
                if (that.queryPanels.has(view.id)) {
                    let panelContent: any = that.queryPanels.get(view.id);
                    if (panelContent instanceof sap.ui.core.Element) {
                        panelContent.destroy(true);
                    }
                    that.queryPanels.delete(view.id);
                }
            },
            buttons: [view.darwBars()]
        });
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
    /** 显示工具条视图 */
    showBarView(view: ibas.BOBarView): void {
        let that: this = this;
        let popover: sap.m.Popover = new sap.m.Popover("", {
            showHeader: false,
            placement: sap.m.PlacementType.Bottom,
            afterClose(event: any): void {
                // 设置视图未显示
                view.isDisplayed = false;
            },
            content: [
                view.darw()
            ]
        });
        (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
        popover.openBy(view.darwBar(), true);
    }
    /** 显示常驻视图 */
    showResidentView(view: ibas.IBarView): void {
        let bar: any = view.darwBar();
        if (!ibas.objects.isNull(bar)) {
            this.header.insertContent(bar, this.header.getContent().length - 1);
            // 触发工具条显示完成事件
            view.barShowedEvent.apply(view.application);
        }
    }
    private queryPanels = new Map<string, any>();
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
            // 先使用缓存中的，再次新建
            if (this.queryPanels.has(view.id)) {
                // 已创建查询面板
                embeddedView.embedded(this.queryPanels.get(view.id));
            } else {
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
                    // 记录面板，下次使用
                    that.queryPanels.set(view.id, viewContent);
                });
            }
        }
    }

    /** 清理资源 */
    destroyView(view: ibas.IView): void;
    /** 清理资源 */
    destroyView(views: ibas.IView[]): void;
    /** 清理资源 */
    destroyView(): void {
        let views: ibas.IView[];
        if (arguments[0] instanceof Array) {
            views = arguments[0];
        } else {
            views = [arguments[0]];
        }
        for (let view of views) {
            if (view instanceof CenterView) {
                // 自身销毁，从浏览器缓存刷新页面
                window.location.reload(false);
                return;
            } else if (!this.viewQueue.has(view)) {
                // 不是通过系统中心加载的页面，删除
                if (!ibas.objects.isNull(view)) {
                    let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                    if (!ibas.objects.isNull(ui)) {
                        ui.destroy(true);
                    }
                }
            } else if (ibas.objects.instanceOf(view, ibas.TabView)) {
                // 当是页签应用时，不清理后续
                let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
                if (!ibas.objects.isNull(ui)) {
                    ui.destroy(true);
                }
                this.viewQueue.delete(view);
                // 清理缓存的查询面板
                if (this.queryPanels.has(view.id)) {
                    let panelContent: any = this.queryPanels.get(view.id);
                    if (panelContent instanceof sap.ui.core.Element) {
                        panelContent.destroy(true);
                    }
                    this.queryPanels.delete(view.id);
                }
                return;
            } else {
                // 清理视图队列后续视图
                let beDestory: Array<ibas.IView> = new Array<ibas.IView>();
                let done: boolean = false;
                for (let item of this.viewQueue.keys()) {
                    if (view.id === item.id) {
                        done = true;
                    }
                    if (done) {
                        beDestory.push(item);
                    }
                }
                for (let i: number = beDestory.length - 1; i >= 0; i--) {
                    let item: ibas.IView = beDestory[i];
                    let ui: sap.ui.core.Element = sap.ui.getCore().byId(item.id);
                    if (!ibas.objects.isNull(ui)) {
                        ui.destroy(true);
                    }
                    this.viewQueue.delete(item);
                    // 清理缓存的查询面板
                    if (this.queryPanels.has(item.id)) {
                        let panelContent: any = this.queryPanels.get(item.id);
                        if (panelContent instanceof sap.ui.core.Element) {
                            panelContent.destroy(true);
                        }
                        this.queryPanels.delete(item.id);
                    }
                }
            }
        }
        // 显示最后视图
        if (this.viewQueue.size > 0) {
            let lastView: ibas.IView;
            for (let item of this.viewQueue.keys()) {
                lastView = item;
            }
            this.showView(lastView);
        }
    }
    /** 清理当前视图 */
    destroyCurrentView(): void {
        this.form.setTitle(null);
        this.form.setSubHeader(null);
        this.form.setShowSubHeader(false);
        let ctrls: sap.ui.core.Control[] = this.form.getContent();
        if (!ibas.objects.isNull(ctrls)) {
            let beDestory: Array<ibas.IView> = new Array<ibas.IView>();
            for (let item of ctrls) {
                if (item instanceof sap.ui.core.HTML) {
                    // iframe直接消毁
                    item.destroy(true);
                } else if (item instanceof sap.m.TabContainer) {
                    // 页签直接消毁
                    for (let tabItem of item.getItems()) {
                        if (item.getSelectedItem() !== tabItem.getId()) {
                            continue;
                        }
                        for (let view of this.viewQueue.keys()) {
                            if (view.id === tabItem.getKey()) {
                                beDestory.push(view);
                            }
                        }
                        for (let pageItem of tabItem.getContent()) {
                            for (let view of this.viewQueue.keys()) {
                                if (view.id === pageItem.getId()) {
                                    beDestory.push(view);
                                }
                            }
                            if (pageItem instanceof sap.m.Page) {
                                for (let psItem of pageItem.getContent()) {
                                    for (let view of this.viewQueue.keys()) {
                                        if (view.id === psItem.getId()) {
                                            beDestory.push(view);
                                        }
                                    }
                                }
                            }
                        }
                        item.removeItem(tabItem);
                    }
                    if (item.getItems().length === 0) {
                        let destroyTabContainer: Function = function (): void {
                            item.destroy(true);
                        };
                        // 延迟处理
                        setTimeout(destroyTabContainer, 2);
                    }
                    continue;
                }
                for (let view of this.viewQueue.keys()) {
                    if (view.id === item.getId()) {
                        beDestory.push(view);
                    }
                }
            }
            if (beDestory.length > 0) {
                // 移出被销毁的视图
                this.destroyView(beDestory);
            } else {
                // 移出空视图，显示上个视图
                this.destroyView(null);
            }
        }
    }
}