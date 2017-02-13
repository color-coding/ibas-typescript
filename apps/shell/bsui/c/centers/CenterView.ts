/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../openui5/typings/index.d.ts" />
import { ICenterView, IUserModule } from "../../../../../ibas/bsbas/systems/Systems";
import { i18n, object, BOView, emMessageType, IModuleConsole } from "../../../../../ibas/bsbas/bsbas";

/**
 * 系统入口应用
 */
export class CenterView extends BOView implements ICenterView {
    /** 主页面 */
    private page: sap.tnt.ToolPage;
    /** 页面头部 */
    private header: sap.tnt.ToolHeader;
    /** 页面功能导航，左 */
    private navigation: sap.tnt.SideNavigation;
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
        let actions = [sap.m.MessageBox.Action.OK];
        let icon = sap.m.MessageBox.Icon.INFORMATION;
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
	 * 显示模块
	 * @param module 模块
	 */
    showModule(module: IModuleConsole): void {
        let nvList: sap.tnt.NavigationList = this.navigation.getItem();
        let nvItem = new sap.tnt.NavigationListItem();
        nvItem.setKey(module.name);
        nvItem.setText(module.description);
        nvItem.setIcon(module.icon);
        nvItem.setEnabled(false);
        nvItem.setExpanded(false);
        nvList.addItem(nvItem);
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
        this.id = this.page.getId();
        return this.page;
    }
}