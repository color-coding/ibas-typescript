/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List, IBusinessObject } from "../../../src/bobas/bobas";
import { IView } from "../core/Core";

/**
 * 关于-视图
 */
export interface IAboutView extends IView {

}
/**
 * 帮助-视图
 */
export interface IHelpView extends IView {

}
/**
 * 登陆-视图
 */
export interface ILoginView extends IView {
    /** 用户 */
    user: string;
    /** 密码 */
    password: string;
    /** 登陆 */
    login(): void;
}
/**
 * 系统中心-视图
 */
export interface ICenterView extends IView {

}
/**
 * 入口-视图
 */
export interface IMainView extends IView {

}