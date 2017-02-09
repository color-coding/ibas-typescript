/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List, IBusinessObject, IOperationMessages, IOperationResult } from "../../../ibas/bobas/bobas";
import { IView, IModule } from "../core/Core";

/** 关于-视图 */
export interface IAboutView extends IView {

}
/** 帮助-视图 */
export interface IHelpView extends IView {

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
/** 系统中心-视图 */
export interface ICenterView extends IView {

}
/** 入口-视图 */
export interface IMainView extends IView {
}
/** 用户权限 */
export interface IPrivilege {
}
/** 系统仓库 */
export interface IBORepositorySystem {
	/**
	 * 用户登录
	 * @param user 用户
	 * @param passwrod 密码
	 * @param callBack 回掉方法，参数：IOperationMessages
	 */
    connect(user: String, password: String, callBack: Function): void;

	/**
	 * 查询用户模块
	 * @param userCode 用户
	 * @param callBack 回掉方法，参数：IOperationResult<IModule>
	 */
    fetchUserModules(userCode: String, callBack: Function): void;

	/**
	 * 查询用户角色
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<string>
	 */
    fetchUserRoles(userCode: String, callBack: Function): void;

	/**
	 * 查询用户角色权限
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IPrivilege>
	 */
    fetchUserPrivileges(userCode: String, callBack: Function): void;
}