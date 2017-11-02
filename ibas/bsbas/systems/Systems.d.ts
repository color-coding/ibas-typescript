/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
	List, IBusinessObject, IOperationMessage, IOperationResult, ICriteria,
	MethodCaller, SaveCaller, IView, IUrlView, IModule, IApplication,
	IModuleConsole, IModuleFunction, IViewShower, IBarView, IMessgesCaller,
	emMessageType, emPrivilegeSource, emAuthoriseType, emPlantform
} from "ibas/index";

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
	/** 激活帮助 */
	helpEvent: Function;
	/** 激活关于 */
	aboutEvent: Function;
	/** 激活功能，参数1 string 功能ID */
	activateFunctionsEvent: Function;
	/** 清理资源 */
	destroyView(view: IView): void
	/** 显示视图 */
	showView(view: IView): void;
	/** 设置忙状态 */
	busyView(view: IView, busy: boolean, msg: string): any;
	/** 显示状态消息 */
	showStatusMessage(type: emMessageType, message: string): void;
	/** 显示消息对话框	*/
	showMessageBox(caller: IMessgesCaller): void;
	/** 显示模块 */
	showModule(console: IModuleConsole): void;
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
/** 查询面板-应用 */
export interface IQueryPanel<T extends IQueryPanelView> extends IApplication<T> {
	/** 运行 参数，初始化回调 */
	run(callBack: Function): void;
	/** 注册监听 */
	register(listener: IUseQueryPanel);
}
/** 查询面板-视图 */
export interface IQueryPanelView extends IBarView {
	/** 查询事件 */
	searchEvent: Function;
	/** 查询内容 */
	searchContent: string;
	/** 使用的查询 */
	usingQuery: string;
}
/** 使用查询面板 */
export interface IUseQueryPanel {
	/** 查询标识 */
	readonly queryId: string;
	/** 查询目标 */
	readonly queryTarget?: any;
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
	code: string;
	/** 名称 */
	name: string;
	/** 超级用户 */
	super: boolean;
}
/** 用户模块 */
export interface IUserModule {
	/** 唯一标识 */
	id: string;
	/** 名称 */
	name: string;
	/** 索引文件 */
	index: string;
	/** 类别 */
	category: string;
	/** 地址 */
	address: string;
	/** 仓库地址 */
	repository: string;
	/** 权限 */
	authorise: emAuthoriseType;
}
/** 用户权限 */
export interface IUserPrivilege {
	/** 来源 */
	source: emPrivilegeSource;
	/** 权限目标 */
	target: string;
	/** 权限值 */
	value: emAuthoriseType;
}
/** 用户查询 */
export interface IUserQuery {
	/** 标记 */
	id: string;
	/** 名称 */
	name: string;
	/** 查询 */
	criteria: ICriteria;
	/** 顺序 */
	order: number;
}
/** 业务对象信息 */
export interface IBOInfo {
	/** 名称 */
	name: string;
	/** 编码 */
	code: string;
	/** 类型 */
	type: string;
	/** 属性集合 */
	properties: Array<IBOPropertyInfo>;
}
/** 业务对象属性信息 */
export interface IBOPropertyInfo {
	/** 属性 */
	property: string;
	/** 描述 */
	description: string;
	/** 查询 */
	searched: boolean;
}
/**
 * 登录调用者
 */
export interface ConnectCaller extends MethodCaller {
    /**
     * 调用完成
     * @param opRslt 结果
     */
	onCompleted(opRslt: IOperationResult<IUser>);
}
/**
 * 用户密码登录调用者
 */
export interface UserConnectCaller extends ConnectCaller {
	/** 用户 */
	user: string;
	/** 密码 */
	password: string;
}
/**
 * 用户口令登录调用者
 */
export interface TokenConnectCaller extends ConnectCaller {
	/** 口令 */
	token: string;
}
/**
 * 用户相关调用者
 */
export interface UserMethodCaller<P> extends MethodCaller {
	/** 用户 */
	user: string;
	/** 平台 */
	platform?: string;
    /**
     * 调用完成
     * @param opRslt 结果
     */
	onCompleted(opRslt: IOperationResult<P>);
}
/**
 * 用户查询调用者
 */
export interface UserQueriesCaller extends UserMethodCaller<IUserQuery> {
	/** 查询标识 */
	queryId: string;
}
/**
 * 业务对象信息调用者
 */
export interface BOInfoCaller extends MethodCaller {
	/** 业务对象名称 */
	boName: string;
	/** 业务对象编码 */
	boCode: string;
    /**
     * 调用完成
     * @param opRslt 结果
     */
	onCompleted(opRslt: IOperationResult<IBOInfo>);
}
/** 系统仓库 */
export interface IBORepositorySystem {
	/**
	 * 用户密码登录
	 * @param caller 调用者
	 */
	userConnect(caller: UserConnectCaller): void;
	/**
	 * 用户口令登录
	 * @param caller 调用者
	 */
	tokenConnect(caller: TokenConnectCaller): void;

	/**
	 * 查询用户模块
	 * @param caller 调用者
	 */
	fetchUserModules(caller: UserMethodCaller<IUserModule>): void;

	/**
	 * 查询用户权限
	 * @param caller 调用者
	 */
	fetchUserPrivileges(caller: UserMethodCaller<IUserPrivilege>): void;

	/**
	 * 查询用户查询
	 * @param caller 调用者
	 */
	fetchUserQueries(caller: UserQueriesCaller): void;

	/**
	 * 保存用户查询
	 * 当被保存的查询没有条件时则认为是删除
	 * @param caller 调用者
	 */
	saveUserQuery(caller: SaveCaller<IUserQuery>): void;

	/**
	 * 业务对象信息查询
	 * @param caller 调用者
	 */
	fetchBOInfos(caller: BOInfoCaller): void;
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
	/** 创建仓库 */
	createRepository(): IBORepositorySystem;
	/** 创建查询面板 */
	createQueryPanel(): IQueryPanel<IQueryPanelView>;
}