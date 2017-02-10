/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List } from "../../../ibas/bobas/bobas";
import { emPlantform } from "../data/Enums";

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
 * 功能
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
    /** 清理资源 */
    destroy(): void;
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 视图导航 */
    navigation: IViewNavigation;
}
/**
 * 应用-视图
 */
export interface IView {
    /** 应用 */
    application: IApplication<IView>;
    /** 唯一标识 */
    id: string;
    /** 名称 */
    title: string;
    /** 绘制视图 */
    darw(): any;
    /** 是否已显示 */
    isDisplayed: boolean;
}
/**
 * 视图-显示者
 */
export interface IViewShower {
    /** 显示视图 */
    show(view: any);
    /** 清理资源 */
    destroy(view:IView): void;
}
/**
 * 视图-导航
 */
export interface IViewNavigation {
    /**
     * 创建视图
     * @param id 应用id
     */
    create(id: string): IView;
    /**
     * 创建视图
     * @param app 应用
     */
    create<T extends IView>(app: IApplication<T>): IView;
}
/**
 * 模块-控制台
 */
export interface IModuleConsole extends IModule {
    /** 当前平台 */
    plantform: emPlantform;
}
/**
 * 模块-功能
 */
export interface IModuleFunction extends IFunction {
    /** 注册应用 */
    register(app: IApplication<IView>): void;
}
