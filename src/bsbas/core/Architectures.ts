/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Architectures.d.ts" />
import { List, ArrayList, object, i18n, string, uuid } from "../../../src/bobas/bobas";
import { emPlantform } from "../data/Enums";
import {
    IElement, IModule, IFunction, IApplication, IView,
    IModuleConsole, IViewShower, IViewNavigation, IModuleFunction
} from "./Architectures.d";


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
/**
 * 模块
 */
export class Module extends Element implements IModule {
    constructor() {
        super();
    }
    private _functions: List<IFunction>;
    /** 功能集合 */
    functions(): List<IFunction> {
        if (object.isNull(this._functions)) {
            this._functions = new ArrayList<IFunction>();
        }
        return this._functions;
    }
    /** 默认功能 */
    default(): IFunction {
        return this.functions().firstOrDefault();
    }
    /** 注册功能 */
    protected register(item: IFunction): void {
        if (object.isNull(item)) { return; };
        if (object.isNull(this._functions)) {
            this._functions = new ArrayList<IFunction>();
        }
        this._functions.add(item);
    }
}
/**
 * 模块-功能
 */
export class Function extends Element implements IFunction {
    constructor() {
        super();
    }
    private _applications: List<IApplication<IView>>;
    /** 注册功能 */
    protected register(item: IApplication<IView>): void {
        if (object.isNull(item)) { return; };
        if (object.isNull(this._applications)) {
            this._applications = new ArrayList<IApplication<IView>>();
        }
        this._applications.add(item);
    }
    /** 功能集合 */
    applications(): List<IApplication<IView>> {
        if (object.isNull(this._applications)) {
            this._applications = new ArrayList<IApplication<IView>>();
        }
        return this._applications;
    }
    /** 默认功能 */
    default(): IApplication<IView> {
        return this.applications().firstOrDefault();
    }
}
/**
 * 功能-应用
 */
export abstract class Application<T extends IView> extends Element implements IApplication<T> {
    constructor() {
        super();
    }

    private _view: T;
    /** 应用的视图 */
    get view(): T {
        if (object.isNull(this._view)) {
            if (object.isNull(this.navigation)) {
                throw new Error(i18n.prop("msg_invalid_view_navigation", this.id));
            }
            this._view = <T>this.navigation.create(this);
        }
        return this._view;
    }
    /** 显示视图 */
    abstract show(): void;
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 视图导航 */
    navigation: IViewNavigation;
}
/**
 * 模块控制台
 */
export abstract class ModuleConsole extends Module implements IModuleConsole {
    constructor() {
        super();
    }
    /** 当前平台 */
    plantform: emPlantform;
    /** 初始化 */
    abstract init(): void;
    /** 创建视图导航 */
    abstract navigation(): IViewNavigation;
    /** 创建功能 */
    protected createFunction(): IModuleFunction {
        let func: ModuleFunction = new ModuleFunction();
        func.id = uuid.random();
        func.navigation = this.navigation();
        this.register(func);
        return func;
    }
}
/**
 * 模块控制台
 */
export class ModuleFunction extends Function implements IModuleFunction {

    /** 创建视图导航 */
    navigation: IViewNavigation;
    /** 注册功能 */
    register(app: Application<IView>): void {
        if (object.isNull(app)) { return; };
        app.navigation = this.navigation;
        super.register(app);
    }
}
/**
 * 视图-导航
 */
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
        } else if (!object.isNull(data) && !object.isNull(data.id)) {
            id = data.id;
        }
        if (object.isNull(id)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "view id"));
        }
        let view: IView = this.newView(id);
        if (object.isNull(view)) {
            throw new Error(i18n.prop("msg_invalid_view", id));
        }
        view.id = string.format("{0} - {1}", id, uuid.random());
        return view;
    }

    /** 
     * 创建实例     
     * @param id 应用id
     */
    protected abstract newView(id: string): IView;
}