/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import * as sys from "../../../../../ibas/bsbas/systems/index";
import * as ibas from "../../../../../ibas/index";
import { utils } from "../../../../../openui5/typings/ibas.utils";

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
    private statusBar: sap.m.OverflowToolbar;
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
    /** 配置项目-状态消息延迟时间 */
    static CONFIG_ITEM_STATUS_MESSAGES_DELAY = "statusDelay";
    /** 配置项目-全屏模式 */
    static CONFIG_ITEM_FULL_SCREEN = "fullScreen";
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
        if (ibas.object.isNull(this.statusDelay)) {
            this.statusDelay = ibas.config.get(CenterView.CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
        }
        if (this.statusDelay > 0) {
            let that: this = this;
            setTimeout(function (): void {
                if (messageStrip) {
                    messageStrip.destroy(true);
                    that.statusBar.destroyContent();
                    that.form.setFooter(null);
                    let popMessage = new sap.m.MessagePopoverItem("", {
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
                    if (!ibas.object.isNull(caller.onCompleted)) {
                        caller.onCompleted(utils.toMessageAction(oAction));
                    }
                }
            }
        );
    }
    /**
     * 激活功能
     * 参数1 string 功能ID
     */
    activateFunctionsEvent: Function;
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
            for (let item of module.functions()) {
                let subNvItem: sap.tnt.NavigationListItem = new sap.tnt.NavigationListItem();
                subNvItem.setKey(item.name);
                subNvItem.setText(item.description);
                subNvItem.attachSelect(null, function (): void {
                    that.fireViewEvents(that.activateFunctionsEvent, item.id);
                });
                nvItem.addItem(subNvItem);
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
    private viewQueue: Map<ibas.IView, any> = new Map<ibas.IView, any>();
    /** 显示视图 */
    showView(view: ibas.IView): void {
        let that: this = this;
        if (view instanceof ibas.UrlView) {
            // 视图为地址视图
            this.showUrlView(view);
        } else if (view instanceof ibas.BODialogView) {
            // 选择视图
            this.showDialogView(view);
        } else if (view instanceof ibas.BOBarView) {
            // 工具条视图
            this.showBarView(view);
        } else {
            // 正常视图
            this.form.setShowHeader(true);
            this.form.setSubHeader(null);
            // this.form.destroyContent();
            for (let item of this.form.getContent()) {
                this.form.removeContent(item);
            }
            // 设置标题
            if (!ibas.object.isNull(view.title)) {
                this.form.setTitle(view.title);
            } else if (!ibas.object.isNull(view.id)) {
                this.form.setTitle(view.id);
            }
            // 优先使用缓存中视图数据
            let viewContent: any;
            if (this.viewQueue.has(view)) {
                viewContent = this.viewQueue.get(view);
            }
            if (ibas.object.isNull(viewContent)) {
                viewContent = view.darw();
            }
            this.form.addContent(viewContent);
            this.viewQueue.set(view, viewContent);
            // 添加查询面板
            if (view instanceof ibas.BOQueryView) {
                let queryView: sys.IEmbeddedQueryPanel = {
                    /** 嵌入查询面板 */
                    embedded(view: any): void {
                        that.form.setSubHeader(null);
                        that.form.setSubHeader(view);
                        that.form.setShowSubHeader(true);
                    }
                };
                this.showQueryPanel(view, queryView);
            }
        }
    }
    /** 显示地址视图 */
    showUrlView(view: ibas.UrlView): void {
        if (view.isInside) {
            // 内部打开
            let html: string = ibas.string.format(
                `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
                , view.url);
            if (ibas.object.isNull(this.page.getHeader())) {
                this.form.setShowHeader(false);
            }
            this.form.destroySubHeader();
            this.form.destroyContent();
            this.form.addContent(new sap.ui.core.HTML("",
                {
                    content: html
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
        if (!ibas.object.isNull(view.title)) {
            title = view.title;
        } else if (!ibas.object.isNull(view.id)) {
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
        if (view instanceof ibas.BOQueryView
            || view instanceof ibas.BOQueryDialogView) {
            let queryView: sys.IEmbeddedQueryPanel = {
                /** 嵌入查询面板 */
                embedded(view: any): void {
                    dialog.setSubHeader(null);
                    dialog.setSubHeader(view);
                }
            };
            this.showQueryPanel(view, queryView);
        }
    }
    /** 显示工具条视图 */
    showBarView(view: ibas.BOBarView): void {
        let popover: sap.m.Popover = new sap.m.Popover("", {
            showHeader: false,
            placement: sap.m.PlacementType.Bottom,
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
        if (!ibas.object.isNull(bar)) {
            this.header.insertContent(bar, this.header.getContent().length - 1);
            // 触发工具条显示完成事件
            view.barShowedEvent.apply(view.application);
        }
    }
    private queryPanels = new Map<string, any>();
    showQueryPanel(view: ibas.BOQueryView, embeddedView: sys.IEmbeddedQueryPanel): void {
        let queryPanel: sys.IQueryPanel<sys.IQueryPanelView> = sys.Factories.systemsFactory.createQueryPanel();
        if (ibas.object.isNull(queryPanel)) {
            // 查询面板无效，不添加
            this.showStatusMessage(ibas.emMessageType.ERROR, ibas.i18n.prop("sys_shell_invalid_query_panel"));
        } else {
            let that: this = this;
            // 设置视图导航
            queryPanel.navigation = this.application.navigation;
            queryPanel.viewShower = <any>this.application;
            // 判断面板嵌入位置
            if (view instanceof ibas.BOQueryViewWithPanel) {
                // 视图继承嵌入接口
                embeddedView = view;
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
    destroyView(view: ibas.IView): void {
        if (view instanceof CenterView) {
            // 自身销毁，从浏览器缓存刷新页面
            window.location.reload(false);
        } else if (!this.viewQueue.has(view)) {
            // 不是通过系统中心加载的页面，删除
            let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
            if (!ibas.object.isNull(ui)) {
                ui.destroy(true);
            }
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
                    continue;
                }
            }
            for (let i: number = beDestory.length - 1; i >= 0; i--) {
                let item: ibas.IView = beDestory[i];
                let ui: sap.ui.core.Element = sap.ui.getCore().byId(item.id);
                if (!ibas.object.isNull(ui)) {
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
            // 显示最后视图
            if (this.viewQueue.size > 0) {
                let lastView: ibas.IView;
                for (let item of this.viewQueue.keys()) {
                    lastView = item;
                }
                this.showView(lastView);
            }
        }
    }
    /** 清理当前视图 */
    destroyCurrentView(): void {
        this.form.setTitle(null);
        this.form.setSubHeader(null);
        this.form.setShowSubHeader(false);
        let ctrls: sap.ui.core.Control[] = this.form.getContent();
        if (!ibas.object.isNull(ctrls)) {
            let beDestory: Array<ibas.IView> = new Array<ibas.IView>();
            for (let item of ctrls) {
                if (item instanceof sap.ui.core.HTML) {
                    // iframe直接消毁
                    item.destroy(true);
                }
                for (let view of this.viewQueue.keys()) {
                    if (view.id === item.getId()) {
                        beDestory.push(view);
                    }
                }
            }
            for (let i: number = beDestory.length - 1; i >= 0; i--) {
                this.destroyView(beDestory[i]);
            }
        }
    }
    /** 设置忙状态 */
    busyView(view: ibas.IView, busy: boolean, msg: string): any {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!ibas.object.isNull(ui) && ui instanceof sap.ui.core.Control) {
            // 视图自身可设置忙状态
            ui.setBusy(busy);
        } else {
            // 视图不能设置忙状态，使用全局对话框
            if (busy) {
                if (ibas.object.isNull(this.busyDialog)) {
                    this.busyDialog = new sap.m.BusyDialog("");
                }
                this.busyDialog.setTitle(view.title);
                this.busyDialog.setText(msg);
                this.busyDialog.open();
            } else {
                if (!ibas.object.isNull(this.busyDialog)) {
                    this.busyDialog.close();
                }
            }
        }
    }
    /** 显示用户信息 */
    showUser(user: sys.IUser): void {
        if (!ibas.object.isNull(user.name)) {
            this.userBar.setText(user.name);
        } else if (!ibas.object.isNull(user.code)) {
            this.userBar.setText(user.code);
        } else {
            this.userBar.setText(ibas.i18n.prop("sys_shell_unknown_user"));
        }
    }
    /** 激活帮助 */
    helpEvent: Function;
    /** 激活关于 */
    aboutEvent: Function;
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
                                text: ibas.i18n.prop("sys_shell_ui_help"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.helpEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: ibas.i18n.prop("sys_shell_ui_about"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.aboutEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: ibas.i18n.prop("sys_shell_ui_logout"),
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
        this.page = new sap.tnt.ToolPage();
        this.page.setHeader(this.header);
        this.page.setSideContent(this.navigation);
        this.page.setSideExpanded(false);
        this.page.addMainContent(this.form);
        // 消息历史框
        this.messageHistory = new sap.m.MessagePopover("", {
            initiallyExpanded: false,

        });
        this.navigation.setFixedItem(new sap.tnt.NavigationList("", {
            items: [
                new sap.tnt.NavigationListItem("", {
                    title: ibas.i18n.prop("sys_shell_ui_messages_history"),
                    icon: "sap-icon://message-popup",
                    select: function (event: any): void {
                        that.messageHistory.openBy(event.getSource());
                    }
                })],
        }));
        this.form = new sap.m.Page("", {
            showNavButton: true,
        });
        // 回退钮
        this.form.setShowNavButton(true);
        this.form.attachNavButtonPress(null, this.destroyCurrentView, this);
        // 全屏钮
        let icon: string = "sap-icon://full-screen";
        if (ibas.config.get(CenterView.CONFIG_ITEM_FULL_SCREEN, false)
            && ibas.config.get(ibas.ModuleConsole.CONFIG_ITEM_PLANTFORM) !== ibas.emPlantform.PHONE) {
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
                } else {
                    that.page.setHeader(that.header);
                    // that.page.setSideContent(that.navigation);
                    that.form.setFloatingFooter(false);
                    this.setIcon("sap-icon://full-screen");
                }
            }
        }));
        // 退出钮
        this.form.addHeaderContent(new sap.m.Button("", {
            icon: "sap-icon://inspect-down",
            type: sap.m.ButtonType.Transparent,
            press: function (): void {
                that.destroyCurrentView();
            }
        }));
        // this.form.setFloatingFooter(true); // 浮起状态条
        this.statusBar = new sap.m.OverflowToolbar("", {
            design: sap.m.ToolbarDesign.Transparent,
            height: "auto",
            width: "auto"
        });
        this.form.setFooter(this.statusBar);
        this.page.addMainContent(this.form);
        this.id = this.page.getId();
        return this.page;
    }
}