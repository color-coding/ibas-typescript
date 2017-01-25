/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List } from "../../../src/bobas/bobas";

/** 系统元素 */
export interface IElement {
    /** 唯一标识 */
    id: string;
    /** 名称 */
    name: string;
    /** 类别 */
    category: string;
    /** 描述 */
    description: string;
}
/**
 * 模块
 */
export interface IModule extends IElement {
    /** 功能集合 */
    functions(): List<IFunction>;
    /** 默认功能 */
    default(): IFunction;
}
/**
 * 模块-功能
 */
export interface IFunction extends IElement {
    /** 应用集合 */
    applications(): List<IApplication<IView>>;
    /** 默认应用 */
    default(): IApplication<IView>;
}
/**
 * 功能-应用
 */
export interface IApplication<T extends IView> extends IElement {
    /** 应用的视图 */
    view: T;
    /** 显示视图 */
    show(): void;
}
/**
 * 应用-视图
 */
export interface IView {
    /** 唯一标识 */
    id: string;
    /** 名称 */
    title: string;
    /** 绘制视图 */
    darw(): void;
}
/**
 * 控制台
 */
export interface IConsole extends IModule {

}
