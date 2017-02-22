/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import {
    i18n, object, string, BOView, UrlView, emMessageType,
    IModuleConsole, IView, config, IBarView, BOQueryView,
    BOChooseView, BOBarView
} from "../../../../../ibas/bsbas/index";
import {
    ICenterView, IUserModule, IUser, Factories
} from "../../../../../ibas/bsbas/systems/index";

/**
 * 视图-中心
 */
export class CenterView extends BOView implements ICenterView {
    /** 显示视图 */
    show(view: IView): void {
        this.showView(view);
    }
    /** 清理资源 */
    destroy(view: IView): void {
        this.destroyView(view);
    }
    /** 设置忙状态 */
    busy(view: IView, busy: boolean, msg: string): any {
        this.busyView(view, busy, msg);
    }
    /** 设置消息 */
    proceeding(view: IView, type: emMessageType, msg: string): any {
        this.showStatusMessages(type, msg);
    }
    /** 对话消息 */
    messages(type: emMessageType, msg: string, callBack: Function): any {
        this.showMessageBox(type, msg, callBack);
    }
    /** 主页面 */
    private page: sap.tnt.ToolPage;
    /** 页面头部 */
    private header: sap.tnt.ToolHeader;
    /** 页面功能导航，左 */
    private navigation: sap.tnt.SideNavigation;
    /** 状态消息条 */
    private statusBar: sap.m.Toolbar;
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
    showStatusMessages(type: emMessageType, message: string): void {
        let uiType: sap.ui.core.MessageType = sap.ui.core.MessageType.None;
        let uiIcon: any = undefined;
        if (type === emMessageType.ERROR) {
            uiType = sap.ui.core.MessageType.Error;
        } else if (type === emMessageType.QUESTION) {
            uiType = sap.ui.core.MessageType.Warning;
        } else if (type === emMessageType.SUCCESS) {
            uiType = sap.ui.core.MessageType.Success;
        } else if (type === emMessageType.WARNING) {
            uiType = sap.ui.core.MessageType.Warning;
        } else if (type === emMessageType.INFORMATION) {
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
        this.statusBar.addContent(messageStrip);
        // 延迟清除消息
        if (object.isNull(this.statusDelay)) {
            this.statusDelay = config.get(CenterView.CONFIG_ITEM_STATUS_MESSAGES_DELAY, 0) * 1000;
        }
        if (this.statusDelay > 0) {
            let that = this;
            setTimeout(function (): void {
                if (messageStrip) {
                    messageStrip.destroy(true);
                    that.form.setFooter(null);
                }
            }, this.statusDelay);
        }
    }
    /**
     * 显示消息对话框
     * @param type 消息类型
     * @param message 消息内容
     * @param callBack 回掉方法
     */
    showMessageBox(type: emMessageType, message: string, callBack: Function): void;
    /**
     * 显示消息对话框
     * @param type 消息类型
     * @param message 消息内容
     */
    showMessageBox(type: emMessageType, message: string): void;
    /**
     * 显示消息对话框
     * @param error 错误
     */
    showMessageBox(error: Error): void;
    /** 显示消息对话框 */
    showMessageBox(): void {
        jQuery.sap.require("sap.m.MessageBox");
        let type: emMessageType;
        let message: string;
        let callBack: Function;
        if (arguments.length === 1 && arguments[0] instanceof Error) {
            type = emMessageType.ERROR;
            message = arguments[0].message;
        } else if (arguments.length === 2) {
            type = arguments[0];
            message = arguments[1];
        } else if (arguments.length === 3) {
            type = arguments[0];
            message = arguments[1];
            callBack = arguments[2];
        }
        let actions: any = [sap.m.MessageBox.Action.OK];
        let icon: any = sap.m.MessageBox.Icon.INFORMATION;
        if (type === emMessageType.ERROR) {
            icon = sap.m.MessageBox.Icon.ERROR;
        } else if (type === emMessageType.QUESTION) {
            icon = sap.m.MessageBox.Icon.QUESTION;
        } else if (type === emMessageType.SUCCESS) {
            icon = sap.m.MessageBox.Icon.SUCCESS;
        } else if (type === emMessageType.WARNING) {
            icon = sap.m.MessageBox.Icon.WARNING;
        }
        sap.m.MessageBox.show(
            message, {
                icon: icon,
                title: i18n.prop(this.application.name),
                actions: actions,
                onClose: function (): void {
                    if (!object.isNull(callBack)) {
                        callBack.call(callBack);
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
    showModule(module: IModuleConsole): void {
        let that = this;
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
                })
                nvItem.addItem(subNvItem);
            }
        }
        if (module.isInitialized) {
            // 已初始化完成
            showFunctions();
        } else {
            // 未初始化完成，等待完成后显示
            module.addListener(showFunctions);
        }
        nvList.addItem(nvItem);
    }
    private _viewQueue: Array<IView>;
    get viewQueue(): Array<IView> {
        if (object.isNull(this._viewQueue)) {
            this._viewQueue = new Array<IView>();
        }
        return this._viewQueue;
    }
    set viewQueue(values: Array<IView>) {
        this._viewQueue = values;
    }
    /** 显示视图 */
    showView(view: IView): void {
        let that = this;
        if (view instanceof UrlView) {
            // 视图为地址视图
            this.showUrlView(view);
        } else if (view instanceof BOChooseView
            || view instanceof BOBarView) {
            // 对话框视图
            this.showDialogView(view);
        } else {
            // 正常视图
            this.form.destroySubHeader();
            this.form.destroyContent();
            this.form.setShowHeader(true);
            // 设置标题
            if (!object.isNull(view.title)) {
                this.form.setTitle(view.title);
            } else if (!object.isNull(view.id)) {
                this.form.setTitle(view.id);
            }
            this.form = this.form;
            this.form.addContent(view.darw());
            // 添加查询面板
            if (view instanceof BOQueryView) {
                let queryPanel = Factories.systemsFactory.createQueryPanel();
                if (object.isNull(queryPanel)) {
                    // 查询面板无效，不添加
                    this.showStatusMessages(emMessageType.ERROR, i18n.prop("sys_shell_invalid_query_panel"));
                } else {
                    // 设置视图导航
                    queryPanel.navigation = this.application.navigation;
                    queryPanel.viewShower = this;
                    queryPanel.description = i18n.prop(queryPanel.name);
                    // 查询面板位置，先添加提示
                    this.form.setSubHeader(new sap.m.OverflowToolbar("", {
                        content: [new sap.m.MessageStrip("", {
                            text: i18n.prop("sys_shell_initialize_query_panel"),
                            type: sap.ui.core.MessageType.Warning
                        })]
                    }));
                    this.form.setShowSubHeader(true);
                    // 运行查询面板，初始化完成添加到视图
                    queryPanel.run(function (): void {
                        that.form.destroySubHeader();
                        that.form.setSubHeader(queryPanel.view.darwBar());
                        that.form.setShowSubHeader(true);
                        // 监听查询面板
                        queryPanel.addListener(view);
                    });
                }
            }
            this.viewQueue.push(view);
        }
    }
    /** 显示地址视图 */
    showUrlView(view: UrlView): void {
        if (view.isInside) {
            // 内部打开
            let html: string = string.format(
                `<iframe src="{0}" width="99%" height="99%" scrolling="no"></iframe>`
                , view.url);
            if (object.isNull(this.page.getHeader())) {
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
    /** 显示对话视图 */
    showDialogView(view: BOView): void {
        let title: string;
        // 设置标题
        if (!object.isNull(view.title)) {
            title = view.title;
        } else if (!object.isNull(view.id)) {
            title = view.id;
        }
        let dialog: sap.m.Dialog = new sap.m.Dialog("", {
            title: title,
            search: "handleSearch",
            confirm: "handleClose",
            cancel: "handleClose",
        });
        dialog.open();
    }
    /** 显示常驻视图 */
    showResidentView(view: IBarView): void {
        let bar = view.darwBar();
        if (!object.isNull(bar)) {
            this.header.insertContent(bar, this.header.getContent().length - 1);
        }
    }
    /** 清理资源 */
    destroyView(view: IView): void {
        if (view instanceof CenterView) {
            // 自身销毁，从浏览器缓存刷新页面
            window.location.reload(false);
        } else {
            let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
            if (!object.isNull(ui)) {
                ui.destroy(true);
            }
            // 清理视图队列后续视图
            let index = this.viewQueue.indexOf(view);
            if (index >= 0 && index < this.viewQueue.length) {
                let beDestoryView = this.viewQueue.slice(index);
                this.viewQueue = this.viewQueue.slice(0, index);
                for (let item of beDestoryView) {
                    ui = sap.ui.getCore().byId(view.id);
                    if (!object.isNull(ui)) {
                        ui.destroy(true);
                    }
                }
            }
            // 显示最后视图
            if (this.viewQueue.length > 0) {
                this.showView(this.viewQueue[this.viewQueue.length - 1]);
            }
        }
    }
    /** 清理当前视图 */
    destroyCurrentView(): void {
        this.form.setTitle(null);
        this.form.setSubHeader(null);
        this.form.setShowSubHeader(false);
        let ctrls = this.form.getContent();
        if (!object.isNull(ctrls)) {
            for (let item of ctrls) {
                for (let view of this.viewQueue) {
                    if (view.id === item.getId()) {
                        this.destroyView(view);
                    }
                }
            }
        }
    }
    /** 设置忙状态 */
    busyView(view: IView, busy: boolean, msg: string): any {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!object.isNull(ui) && ui instanceof sap.ui.core.Control) {
            // 视图自身可设置忙状态
            ui.setBusy(busy);
        } else {
            // 视图不能设置忙状态，使用全局对话框
            if (busy) {
                if (object.isNull(this.busyDialog)) {
                    this.busyDialog = new sap.m.BusyDialog("");
                }
                this.busyDialog.setTitle(view.title);
                this.busyDialog.setText(msg);
                this.busyDialog.open();
            } else {
                if (!object.isNull(this.busyDialog)) {
                    this.busyDialog.close();
                }
            }
        }
    }
    /** 显示用户信息 */
    showUser(user: IUser): void {
        if (!object.isNull(user.userName)) {
            this.userBar.setText(user.userName);
        } else if (!object.isNull(user.userCode)) {
            this.userBar.setText(user.userCode);
        } else {
            this.userBar.setText(i18n.prop("sys_shell_unknown_user"));
        }
    }
    /** 激活帮助 */
    helpEvent: Function;
    /** 激活关于 */
    aboutEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that = this;
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
                                text: i18n.prop("sys_shell_ui_help"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.helpEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: i18n.prop("sys_shell_ui_about"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.aboutEvent);
                                    popover.close();
                                }
                            }),
                            new sap.m.Button({
                                text: i18n.prop("sys_shell_ui_logout"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.destroyEvent);
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
        this.form = new sap.m.Page("", {
            showNavButton: true,
        });
        // 回退钮
        this.form.setShowNavButton(true);
        this.form.attachNavButtonPress(null, this.destroyCurrentView, this);
        // 全屏钮
        let icon: string = "sap-icon://full-screen";
        if (config.get(CenterView.CONFIG_ITEM_FULL_SCREEN, false)) {
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
        // this.form.setFloatingFooter(true);
        this.statusBar = new sap.m.OverflowToolbar("", {
            design: sap.m.ToolbarDesign.Transparent,
            height: "3rem"
        });
        this.form.setFooter(this.statusBar);
        this.page.addMainContent(this.form);
        this.id = this.page.getId();
        return this.page;
    }
}