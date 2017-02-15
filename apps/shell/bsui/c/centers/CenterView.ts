/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { ICenterView, IUserModule } from "../../../../../ibas/bsbas/systems/Systems";
import { i18n, object, BOView, emMessageType, IModuleConsole, IView } from "../../../../../ibas/bsbas/bsbas";

/**
 * 系统入口视图
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
    /** 主页面 */
    private page: sap.tnt.ToolPage;
    /** 页面头部 */
    private header: sap.tnt.ToolHeader;
    /** 页面功能导航，左 */
    private navigation: sap.tnt.SideNavigation;
    /** 状态消息条 */
    private statusBar: sap.m.Bar;
    /** 窗体显示 */
    private form: sap.m.Page;
	/**
	 * 显示状态消息
	 * @param type 消息类型
	 * @param message 消息内容
	 */
    showStatusMessages(type: emMessageType, message: string): void;
	/**
	 * 显示状态消息
	 * @param type 消息类型
	 * @param message 消息内容
	 * @param callBack 回掉方法
	 */
    showStatusMessages(type: emMessageType, message: string, callBack: Function): void;
    /** 显示状态消息 */
    showStatusMessages(): void {
        let type: emMessageType = arguments[0];
        let message: string = arguments[1];
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
        // 清理已有的
        this.statusBar.destroyContentLeft();
        // 添加新的
        this.statusBar.addContentLeft(messageStrip);
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
        } else if (arguments.length === 3) {
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

    /** 显示视图 */
    showView(view: IView): void {
        let viewContent = view.darw();
        this.form.destroyContent();
        this.form.addContent(viewContent);
    }
    /** 清理资源 */
    destroyView(view: IView): void {
        let ui: sap.ui.core.Element = sap.ui.getCore().byId(view.id);
        if (!object.isNull(ui)) {
            ui.destroy(true);
        }
    }
    /** 绘制视图 */
    darw(): any {
        this.header = new sap.tnt.ToolHeader();
        let button: sap.m.Button = new sap.m.Button("", {
            icon: "sap-icon://menu2",
            type: "Transparent"
        });
        button.attachPress(this, function (): void {
            let expanded: boolean = this.page.getSideExpanded();
            this.page.setSideExpanded(!expanded);
        }, this);
        this.header.addContent(button);
        this.navigation = new sap.tnt.SideNavigation();
        this.navigation.setItem(new sap.tnt.NavigationList());
        this.page = new sap.tnt.ToolPage();
        this.page.setHeader(this.header);
        this.page.setSideContent(this.navigation);
        this.page.setSideExpanded(false);
        this.page.addMainContent(this.form);
        this.form = new sap.m.Page("");
        this.form.setShowNavButton(true);
        button = new sap.m.Button("", {
            icon: "sap-icon://full-screen"
        });
        button.attachPress(this, function (): void {
            this.header.setVisible(false);
            this.navigation.setVisible(false);
        }, this);
        // this.form.addHeaderContent(button);
        button = new sap.m.Button("", {
            icon: "sap-icon://decline"
        });
        button.attachPress(this, function (): void {
            this.form.destroyContent();
        }, this);
        this.form.addHeaderContent(button);
        // this.form.setFloatingFooter(true);
        this.statusBar = new sap.m.Bar("");
        this.form.setFooter(this.statusBar);
        this.page.addMainContent(this.form);
        this.id = this.page.getId();
        return this.page;
    }
}