/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../common/Enum.ts" />

namespace ibas {
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
        /** 版本 */
        version: string;
        /** 版权声明 */
        copyright: string;
        /** 图标 */
        icon: string;
        /** 元素 */
        elements(): IElement[];
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
        run(): void;
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
        /** 唯一标识 */
        id: string;
        /** 标题 */
        title: string;
        /** 绘制视图 */
        draw(): any;
        /** 关闭视图 */
        closeEvent: Function;
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
        drawBar(): any;
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
        show(view: IView): void;
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
        /** 模块名称 */
        module: string;
        /** 当前平台 */
        readonly plantform: emPlantform;
        /** 初始化完成 */
        isInitialized: boolean;
        /** 根地址 */
        rootUrl: string;
        /** 功能集合 */
        functions(): IModuleFunction[];
        /** 默认功能 */
        default(): IModuleFunction;
        /** 已实例应用集合 */
        applications(): IApplication<IView>[];
        /** 添加初始化完成监听 */
        addListener(listener: Function): void;
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
    /** 系统元素 */
    export class Element implements IElement {
        /** 唯一标识 */
        id: string;
        /** 名称 */
        name: string;
        /** 类别 */
        category: string;
        /** 描述 */
        description: string;
    }
    const PROPERTY_ELEMENTS: symbol = Symbol("elements");
    /** 模块 */
    export class Module extends Element implements IModule {
        constructor() {
            super();
        }
        /** 版本 */
        version: string;
        /** 版权声明 */
        copyright: string;
        /** 图标 */
        icon: string;
        /** 元素 */
        elements(): IElement[] {
            if (objects.isNull(this[PROPERTY_ELEMENTS])) {
                this[PROPERTY_ELEMENTS] = new ArrayList<IElement>();
            }
            let elements: IList<IElement> = new ArrayList<IElement>();
            for (let item of this[PROPERTY_ELEMENTS]) {
                if (this.isSkip instanceof Function) {
                    if (this.isSkip(item)) {
                        continue;
                    }
                }
                elements.add(item);
            }
            return elements;
        }
        /**
         * 是否跳过
         * @argument element 元素
         * @returns true，跳过；false，使用
         */
        isSkip: (element: IElement) => boolean;
        /** 注册功能 */
        protected register(item: IElement): void {
            if (objects.isNull(item)) { return; }
            if (objects.isNull(this[PROPERTY_ELEMENTS])) {
                this[PROPERTY_ELEMENTS] = new ArrayList<IElement>();
            }
            this[PROPERTY_ELEMENTS].add(item);
        }
    }
    /** 地址hash值标记-功能 */
    export const URL_HASH_SIGN_FUNCTIONS: string = "#/functions/";
    /** 模块-功能 */
    export abstract class AbstractFunction extends Element implements IFunction {
        constructor() {
            super();
        }
    }
    const PROPERTY_VIEW: symbol = Symbol("view");
    /** 配置项目-平台 */
    export const CONFIG_ITEM_PLANTFORM: string = "plantform";
    /** 功能-应用 */
    export abstract class AbstractApplication<T extends IView> extends Element implements IApplication<T> {
        constructor() {
            super();
        }
        /** 当前平台 */
        protected get plantform(): emPlantform {
            return config.get(CONFIG_ITEM_PLANTFORM, emPlantform.COMBINATION, emPlantform);
        }
        /** 视图显示者 */
        viewShower: IViewShower;
        /** 视图导航 */
        navigation: IViewNavigation;
        /** 应用的视图 */
        get view(): T {
            if (objects.isNull(this[PROPERTY_VIEW])) {
                if (objects.isNull(this.navigation)) {
                    throw new Error(i18n.prop("sys_invalid_view_navigation", this.name));
                }
                this[PROPERTY_VIEW] = <T>this.navigation.create(this);
                if (this[PROPERTY_VIEW] instanceof View) {
                    this[PROPERTY_VIEW].application = this;
                    if (!strings.isEmpty(this.description)) {
                        this[PROPERTY_VIEW].title = this.description;
                    } else {
                        this[PROPERTY_VIEW].title = this.name;
                    }
                    this.registerView();
                } else {
                    throw new Error(i18n.prop("sys_invalid_view", this.name));
                }
            }
            return this[PROPERTY_VIEW];
        }
        /** 视图是否已显示 */
        isViewShowed(): boolean {
            if (objects.isNull(this[PROPERTY_VIEW])) {
                return false;
            }
            if (this[PROPERTY_VIEW] instanceof View) {
                if (this[PROPERTY_VIEW].isDisplayed) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        /** 注册视图 */
        protected abstract registerView(): void;
        /** 运行 */
        abstract run(): void;
        /** 显示视图 */
        abstract show(): void;
        /** 关闭视图 */
        abstract close(): void;
        /** 清理资源（视图关闭并取消引用） */
        destroy(): void {
            this.close();
            if (!objects.isNull(this[PROPERTY_VIEW])) {
                this[PROPERTY_VIEW] = null;
            }
        }
    }
    /** 地址hash值标记-视图 */
    export const URL_HASH_SIGN_VIEWS: string = "#/views/";
    /** 视图 */
    export abstract class View implements IView {
        /** 应用 */
        application: IApplication<IView>;
        /** 唯一标识 */
        id: string;
        /** 标题 */
        title: string;
        /** 隐藏标题栏 */
        hideTitle: boolean;
        /** 是否已显示 */
        isDisplayed: boolean;
        /** 是否忙 */
        isBusy: boolean;
        /** 绘制视图 */
        abstract draw(): any;
        /** 关闭视图 */
        closeEvent: Function;
        /**
         * 触发视图事件
         * @param event 触发的事件
         * @param pars 参数
         */
        protected fireViewEvents(event: Function, ...pars: any[]): void {
            if (this.isBusy) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "view: event skipping, [{0} - {1}] is busy.", this.id, this.title);
                return;
            }
            if (typeof event !== "function") {
                throw new Error(i18n.prop("sys_invalid_parameter", "event"));
            }
            try {
                event.apply(this.application, pars);
            } catch (error) {
                this.application.viewShower.messages({
                    title: this.application.description,
                    type: emMessageType.ERROR,
                    message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                });
            }
        }
        /** 显示之后 */
        onDisplayed(): void {
            // 重载要回调
        }
        /** 关闭之后 */
        onClosed(): void {
            // 重载要回调
        }
        /** 按钮按下时 */
        onKeyDown(event: KeyboardEvent): void {
            // 可重载
            // logger.log(emMessageLevel.DEBUG, "view: key [{0}] down at [{1}].", event.keyCode, this.id);
        }
        /** 地址栏哈希值变化 */
        onHashChanged(event: HashChangeEvent): void {
            // 可重载
            logger.log(emMessageLevel.DEBUG, "view: hash change to [{0}] at [{1}].", event.newURL, this.id);
        }
        /** 手指触控移动 */
        onTouchMove(direction: emTouchMoveDirection, event: TouchEvent): void {
            // 可重载
        }
    }
    /** 配置项目-默认模块图标 */
    export const CONFIG_ITEM_DEFALUT_MODULE_ICON: string = "defalutModuleIcon";
    /** 配置项目-禁用平台视图 */
    export const CONFIG_ITEM_DISABLE_PLATFORM_VIEW: string = "disablePlatformView";
    /** 模块控制台 */
    export abstract class ModuleConsole extends Module implements IModuleConsole {
        constructor() {
            super();
        }
        /** 模块名称 */
        module: string;
        /** 根地址 */
        rootUrl: string;
        /** 当前平台 */
        get plantform(): emPlantform {
            return config.get(CONFIG_ITEM_PLANTFORM, emPlantform.COMBINATION, emPlantform);
        }
        /** 默认功能 */
        default(): IModuleFunction {
            let list: IModuleFunction[] = this.functions();
            if (list.length > 0) {
                return list[0];
            }
            return null;
        }
        /** 功能集合，仅激活的 */
        functions(): IModuleFunction[] {
            let list: Array<IModuleFunction> = new Array<IModuleFunction>();
            for (let item of super.elements()) {
                if (!objects.instanceOf(item, ModuleFunction)) {
                    continue;
                }
                list.push(<IModuleFunction>item);
            }
            return list;
        }
        /** 应用集合 */
        applications(): IApplication<IView>[] {
            let list: Array<IApplication<IView>> = new Array<IApplication<IView>>();
            for (let item of super.elements()) {
                if (!objects.instanceOf(item, Application)) {
                    continue;
                }
                list.push(<IApplication<IView>>item);
            }
            return list;
        }
        /** 服务集合 */
        services(): IServiceMapping[] {
            let list: Array<IServiceMapping> = new Array<IServiceMapping>();
            for (let item of super.elements()) {
                if (!objects.instanceOf(item, ServiceMapping)) {
                    continue;
                }
                list.push(<IServiceMapping>item);
            }
            return list;
        }
        /** 注册实现，需要区分注册内容 */
        protected register(item: IElement): void {
            if (item instanceof ModuleFunction) {
                // 注册模块功能
                if (strings.isEmpty(item.id)) {
                    item.id = uuids.random();
                }
                item.navigation = this.navigation();
            } else if (item instanceof Application) {
                // 注册应用
                if (strings.isEmpty(item.id)) {
                    item.id = uuids.random();
                }
                item.navigation = this.navigation();
                item.viewShower = this.viewShower;
            } else if (item instanceof ServiceMapping) {
                // 注册服务
                item.navigation = this.navigation();
                item.viewShower = this.viewShower;
            }
            super.register(item);
        }
        private listeners: Array<Function>;
        /** 添加初始化完成监听 */
        addListener(listener: Function): void {
            if (objects.isNull(this.listeners)) {
                this.listeners = new Array<Function>();
            }
            this.listeners.push(listener);
        }
        /** 初始化完成 */
        isInitialized: boolean;
        /** 初始化 */
        protected initialize(): void {
            this.registers();
            this.fireInitialized();
        }
        /** 初始化完成，需要手工调用 */
        protected fireInitialized(): void {
            this.isInitialized = true;
            if (objects.isNull(this.listeners)) {
                return;
            }
            for (let listener of this.listeners) {
                if (listener instanceof Function) {
                    listener.call(listener, this);
                }
            }
            // 清除监听
            delete (this.listeners);
        }
        /** 注册 */
        protected abstract registers(): void;
        /** 运行，重载后必须保留基类调用 */
        run(): void {
            // 修正模块图标
            if (objects.isNull(this.icon) || this.icon.length === 0) {
                this.icon = config.get(CONFIG_ITEM_DEFALUT_MODULE_ICON);
            }
        }
        /** 创建视图导航 */
        abstract navigation(): IViewNavigation;
        /** 视图显示者 */
        viewShower: IViewShower;
        /** 设置仓库地址，返回值是否执行默认设置 */
        setRepository(address: string): boolean {
            return true;
        }
        /** 加载视图 */
        protected loadUI(ui: string | string[], ready: Function): void {
            let minLibrary: boolean = ibas.config.get(ibas.CONFIG_ITEM_USE_MINIMUM_LIBRARY, false);
            let modules: string[] = [];
            if (ui instanceof Array) {
                for (let item of ui) {
                    modules.push(item + (minLibrary ? SIGN_MIN_LIBRARY : ""));
                }
            } else {
                modules.push(ui + (minLibrary ? SIGN_MIN_LIBRARY : ""));
            }
            let require: Require = ibas.requires.create({
                context: ibas.requires.naming(this.module)
            });
            let that: this = this;
            require(
                modules,
                function (): void {
                    if (typeof ready === "function") {
                        let module: any = window[that.module];
                        if (!ibas.objects.isNull(module)) {
                            module = module[<string>"ui"];
                        }
                        ready(module);
                    }
                },
                function (error: RequireError): void {
                    ibas.logger.log(ibas.emMessageLevel.ERROR, error.message);
                }
            );
        }
    }
    /** 模块控制台 */
    export abstract class ModuleFunction extends AbstractFunction implements IModuleFunction {
        /** 图标 */
        icon: string;
        /** 创建视图导航 */
        navigation: IViewNavigation;
        /** 默认功能 */
        abstract default(): IApplication<IView>;
    }
    /** 视图-导航 */
    export abstract class ViewNavigation implements IViewNavigation {
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
        /**
         * 创建视图
         */
        create(data: any): IView {
            let id: string = null;
            if (typeof data === "string") {
                id = data;
            } else if (data instanceof AbstractApplication) {
                id = data.id;
            }
            if (strings.isEmpty(id)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "view id"));
            }
            let view: IView = this.newView(id);
            if (objects.isNull(view)) {
                let name: string;
                if (data instanceof AbstractApplication) {
                    name = data.description;
                    if (strings.isEmpty(name)) {
                        name = data.name;
                    }
                }
                if (strings.isEmpty(name)) {
                    name = id;
                }
                throw new Error(i18n.prop("sys_invalid_view", name));
            }
            view.id = strings.format("{0}_{1}", id, uuids.random());
            return view;
        }

        /**
         * 创建实例
         * @param id 应用id
         */
        protected abstract newView(id: string): IView;
    }
}