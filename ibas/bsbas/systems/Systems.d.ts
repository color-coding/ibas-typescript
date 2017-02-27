/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
	List, IBusinessObject, IOperationMessages, IOperationResult, ICriteria,
	MethodCaller
} from "../../../ibas/bobas/index";
import {
	IView, IUrlView, IModule, IApplication, IModuleConsole,
	IModuleFunction, IViewShower, IBarView
} from "../core/index";
import { emMessageType } from "../data/index";

/** 关于-视图 */
export interface IAboutView extends IView {
	/** 显示版本 */
	showVersions(version: any): void;
}
/** 关于-应用 */
export interface IAboutApp extends IApplication<IAboutView> {

}
/** 帮助-视图 */
export interface IHelpView extends IUrlView {
}
/** 帮助-应用 */
export interface IHelpApp extends IApplication<IHelpView> {

}
/** 登陆-视图 */
export interface ILoginView extends IView {
	/** 用户 */
	user: string;
	/** 密码 */
	password: string;
	/** 登陆 */
	loginEvent: Function;
}
/** 登陆-应用 */
export interface ILoginApp extends IApplication<ILoginView> {

}
/** 系统中心-视图 */
export interface ICenterView extends IView {
	/** 清理资源 */
	destroyView(view: IView): void
	/** 显示视图 */
	showView(view: IView): void;
	/** 设置忙状态 */
	busyView(view: IView, busy: boolean, msg: string): any;
	/**
	 * 显示状态消息
	 * @param type 消息类型
	 * @param message 消息内容
	 */
	showStatusMessages(type: emMessageType, message: string): void;
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
	/**
	 * 显示模块
	 * @param console 模块控制台
	 */
	showModule(console: IModuleConsole): void;
	/**
	 * 激活功能
	 * 参数1 string 功能ID
	 */
	activateFunctionsEvent: Function;
	/** 显示用户信息 */
	showUser(user: IUser): void;
	/** 激活帮助 */
	helpEvent: Function;
	/** 激活关于 */
	aboutEvent: Function;
	/** 显示常驻视图 */
	showResidentView(view: IBarView): void;
}
/** 登陆-应用 */
export interface ICenterApp extends IApplication<ICenterView> {
	/** 运行 */
	run(user: IUser): void;
}
/** 入口-视图 */
export interface IMainView extends IView {
}
/** 登陆-应用 */
export interface IMainApp extends IApplication<IMainView> {

}
/** 建议-视图 */
export interface ISuggestionView extends IBarView {
}
/** 建议-应用 */
export interface ISuggestionApp extends IApplication<ISuggestionView> {

}
/** 查询面板-应用 */
export interface IQueryPanel<T extends IQueryPanelView> extends IApplication<T> {
	/** 运行 参数，初始化回调 */
	run(callBack: Function): void;
	/** 注册监听 */
	addListener(listener: IUseQueryPanel);
}
/** 查询面板-视图 */
export interface IQueryPanelView extends IBarView {
	/** 查询事件 */
	searchEvent: Function;
	/** 查询内容 */
	searchContent: string;
}
/** 使用查询面板 */
export interface IUseQueryPanel {
	/** 查询数据 */
	query(criteria: ICriteria): void;
}
/** 嵌入查询面板 */
export interface IEmbeddedQueryPanel {
	/** 嵌入 */
	embedded(view: any): void;
}
/** 用户 */
export interface IUser {
	/** 编号 */
	id: number;
	/** 编码 */
	userCode: string;
	/** 名称 */
	userName: string;
}
/** 用户模块 */
export interface IUserModule {
	/** 唯一标识 */
	id: string;
	/** 名称 */
	name: string;
	/** 类别 */
	category: string;
	/** 描述 */
	description: string;
	/** 地址 */
	address: string;
}
/** 用户角色 */
export interface IUserRole {
}
/** 用户权限 */
export interface IUserPrivilege {
}
/**
 * 登录调用者
 */
export interface ConnectCaller extends MethodCaller {
	/** 用户 */
	user: String;
	/** 密码 */
	password: String;
    /**
     * 调用完成
     * @param opRslt 结果
     */
	onCompleted(opRslt: IOperationResult<IUser>);
}
/**
 * 用户相关调用者
 */
export interface UserMethodsCaller<P> extends MethodCaller {
	/** 用户编码 */
	userCode: String;
    /**
     * 调用完成
     * @param opRslt 结果
     */
	onCompleted(opRslt: IOperationResult<P>);
}
/** 系统仓库 */
export interface IBORepositorySystem {
	/**
	 * 用户登录
	 * @param caller 登录监听者
	 */
	connect(caller: ConnectCaller): void;

	/**
	 * 查询用户模块
	 * @param caller 用户检索监听者
	 */
	fetchUserModules(caller: UserMethodsCaller<IUserModule>): void;

	/**
	 * 查询用户角色
	 * @param caller 用户检索监听者
	 */
	fetchUserRoles(caller: UserMethodsCaller<IUserRole>): void;

	/**
	 * 查询用户角色权限
	 * @param caller 用户检索监听者
	 */
	fetchUserPrivileges(caller: UserMethodsCaller<IUserPrivilege>): void;
}
/** 系统工厂 */
export interface ISystemsFactory {
	/** 创建入口应用 */
	createMainApp(): IMainApp;
	/** 创建登陆应用 */
	createLoginApp(): ILoginApp;
	/** 创建系统中心应用 */
	createCenterApp(): ICenterApp;
	/** 创建关于应用 */
	createAboutApp(): IAboutApp;
	/** 创建帮助应用 */
	createHelpApp(): IHelpApp;
	/** 创建建议应用 */
	createSuggestionApp(): ISuggestionApp;
	/** 创建仓库 */
	createRepository(): IBORepositorySystem;
	/** 创建查询面板 */
	createQueryPanel(): IQueryPanel<IQueryPanelView>;
}