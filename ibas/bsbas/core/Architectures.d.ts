/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List } from "../../bobas/index";
import { emPlantform, emMessageType, emMessageAction } from "../data/index";

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
    functions(): IFunction[];
}
/**
 * 功能
 */
export interface IFunction extends IElement {
}
/**
 * 功能-应用
 */
export interface IApplication<T extends IView> extends IElement {
    /** 应用的视图 */
    view: T;
    /** 运行 */
    run(...args: any[]): void;
    /** 显示视图 */
    show(): void;
    /** 关闭视图 */
    close(): void;
    /** 清理资源 */
    destroy(): void;
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 视图导航 */
    navigation: IViewNavigation;
}
/**
 * 工具条-应用
 */
export interface IBarApplication<T extends IBarView> extends IApplication<T> {
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
    /** 关闭视图 */
    closeEvent: Function;
    /** 显示之后 */
    onDisplayed(): void;
    /** 关闭之后 */
    onClosed(): void;
    /** 键盘按钮按下 */
    onKeyDown(event: KeyboardEvent): void;
    /** 地址栏哈希值变化 */
    onHashChanged(event: HashChangeEvent): void;
}
/**
 * 应用-视图
 */
export interface IUrlView extends IView {
    /** 内部打开 */
    isInside: boolean;
    /** 地址 */
    url: string;
}
/**
 * 工具条应用-视图
 */
export interface IBarView extends IView {
    /** 绘制工具条视图 */
    darwBar(): any;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 工具条视图显示完成事件 */
    barShowedEvent: Function;
}
/** 对话消息调用者 */
export interface IMessgesCaller {
    /** 类型 */
    type: emMessageType;
    /** 内容 */
    message: string;
    /** 标题 */
    title?: string;
    /** 动作 */
    actions?: emMessageAction[];
    /** 调用完成 */
    onCompleted?(action: emMessageAction): void;
}
/**
 * 视图-显示者
 */
export interface IViewShower {
    /** 显示视图 */
    show(view: IView);
    /** 清理资源 */
    destroy(view: IView): void;
    /** 设置忙状态 */
    busy(view: IView, busy: boolean, msg: string): void;
    /** 进程消息 */
    proceeding(view: IView, type: emMessageType, msg: string): void;
    /** 对话消息 */
    messages(caller: IMessgesCaller): void;
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
    readonly plantform: emPlantform;
    /** 图标 */
    icon: string;
    /** 初始化完成 */
    isInitialized: boolean;
    /** 根地址 */
    rootUrl: string;
    /** 功能集合 */
    functions(): IModuleFunction[];
    /** 默认功能 */
    default(): IModuleFunction;
    /** 添加初始化完成监听 */
    addListener(listener: Function): void;
    /** 已实例应用集合 */
    applications(): IApplication<IView>[];
}
/**
 * 模块-功能
 */
export interface IModuleFunction extends IFunction {
    /** 图标 */
    icon: string;
    /** 视图导航 */
    navigation: IViewNavigation;
    /** 默认应用 */
    default(): IApplication<IView>;
}