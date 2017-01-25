/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List, ArrayList, object } from "../../../src/bobas/bobas";
/// <reference path="./Modules.d.ts" />
import { IElement, IModule, IFunction, IApplication, IView, IConsole } from "./Modules.d";


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
    /** 注册功能 */
    protected register(item: IApplication<IView>): void {
        if (object.isNull(item)) { return; };
        if (object.isNull(this._applications)) {
            this._applications = new ArrayList<IApplication<IView>>();
        }
        this._applications.add(item);
    }
}
/**
 * 功能-应用
 */
export abstract class Application<T extends IView> extends Element implements IApplication<T> {
    constructor() {
        super();
    }
    /** 应用的视图 */
    view: T;
    /** 显示视图 */
    abstract show(): void;
}
/**
 * 模块控制台
 */
export abstract class ModuleConsole extends Module implements IConsole {
    constructor() {
        super();
    }
    /** 初始化 */
    abstract init(): void;
}