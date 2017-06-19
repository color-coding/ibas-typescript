/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    IBindable, PropertyChangedListener, ITrackable,
    IBusinessObject, IBusinessObjectList, IBOFactory,
} from "./BusinessObjectCore.d";
import { objects } from "../data/Datas";
import { ArrayList } from "../data/Common";
import { i18n } from "../i18n/index";

/**
 * 可监听的对象
 */
export abstract class Bindable implements IBindable {

    private _listeners: ArrayList<PropertyChangedListener>;
    /**
     * 注册监听事件
     * @param listener 监听者
     */
    registerListener(listener: PropertyChangedListener): void {
        if (objects.isNull(this._listeners)) {
            this._listeners = new ArrayList<PropertyChangedListener>();
        }
        // 存在指定id则更新
        for (let index: number = 0; index < this._listeners.length; index++) {
            let item: PropertyChangedListener = this._listeners[index];
            if (item.id === listener.id && listener.id !== undefined) {
                this._listeners[index] = item;
                return;
            }
        }
        this._listeners.push(listener);
    }

    /** 移出全部监听 */
    removeListener(recursive: boolean): void;
    /**
     * 移出监听事件
     * @param listener 监听者
     */
    removeListener(listener: PropertyChangedListener): void;
    /** 移出监听实现 */
    removeListener(): void {
        if (objects.isNull(this._listeners)) {
            return;
        }
        let listener: PropertyChangedListener = arguments[0];
        if (!objects.isNull(listener)) {
            for (let item of this._listeners) {
                if (item === listener) {
                    this._listeners.remove(item);
                }
            }
        }
    }

    /**
     * 通知属性改变
     * @param property 属性
     */
    protected firePropertyChanged(property: string): void {
        if (objects.isNull(this._listeners)) {
            return;
        }
        if (!objects.isNull(property) && property.length > 0) {
            if (property.startsWith("_")) {
                // 除去映射符
                property = property.substring(1);
            }
            // 属性首字母小写
            property = property[0].toLowerCase() + property.substring(1);
        }
        for (let item of this._listeners) {
            item.propertyChanged(property);
        }
    }
}

/**
 * 状态跟踪对象
 */
export abstract class TrackableBase extends Bindable implements ITrackable {

    constructor() {
        super();
        this.isNew = true;
        this.isDirty = true;
        this.isDeleted = false;
        this.isLoading = false;
    }

    private _new: boolean;
    /**
     * 是否新建
     */
    get isNew(): boolean {
        return this._new;
    }
    set isNew(value: boolean) {
        this._new = value;
    }

    private _dirty: boolean;
    /**
     * 是否修改
     */
    get isDirty(): boolean {
        return this._dirty;
    }
    set isDirty(value: boolean) {
        this._dirty = value;
    }

    private _deleted: boolean;
    /**
     * 是否刪除
     */
    get isDeleted(): boolean {
        return this._deleted;
    }
    set isDeleted(value: boolean) {
        this._deleted = value;
    }

    private _loading: boolean;
    /**
     * 是否加载
     */
    get isLoading(): boolean {
        return this._loading;
    }
    set isLoading(value: boolean) {
        this._loading = value;
    }

    private _vaild: boolean;
    /**
     * 是否有效
     */
    get isVaild(): boolean {
        return this._vaild;
    }
    set isVaild(value: boolean) {
        this._vaild = value;
    }

    /**
     * 标记为未修改
     */
    markOld(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = false;
        this.isDeleted = false;
    }

    /**
     * 标记为新
     */
    markNew(recursive: boolean): void {
        this.isNew = true;
        this.isDirty = true;
        this.isDeleted = false;
    }

    /**
     * 标记为删除
     */
    markDeleted(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = true;
        this.isDeleted = true;
    }

    /**
     * 对象置为脏
     */
    markDirty(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = true;
    }

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void {
        this.isDirty = true;
        this.isDeleted = false;
    }
}


/**
 * 业务对象基础
 */
export abstract class BusinessObjectBase<T extends IBusinessObject> extends TrackableBase implements IBusinessObject {

    constructor() {
        super();
        this.isLoading = true;
        this.init();
        this.isLoading = false;
    }

    /**
     * 初始化方法，属性在此方法初始化
     */
    protected abstract init(): void;

    /**
     * 通知属性改变
     * @param property 属性
     */
    protected firePropertyChanged(property: string): void {
        if (this.isLoading) { return; }
        if (!this.isDirty) { this.markDirty(false); }
        super.firePropertyChanged(property);
    }

    /**
     * 获取属性值
     */
    getProperty<P>(property: string): P {
        return this[property];
    }

    /**
     * 设置属性值
     */
    setProperty<P>(property: string, value: P): void {
        if (this.isLoading) {
            // 读取状态，直接赋值
            this[property] = value;
        } else {
            let oldValue: any = this[property];
            this[property] = value;
            if (oldValue !== value) {
                // 值发生变化触发属性改变
                this.firePropertyChanged(property);
            }

        }
    }

    /**
     * 获取对象属性
     * @param recursive 递归
     */
    getProperties(recursive: boolean): Map<string, any> {
        let properties: Map<string, any> = new Map();
        // 遍历属性名称
        for (let item in this) {
            if (this[item] === undefined) { continue; }
            let name: string = item;
            let value: any = this[name];
            properties.set(name, value);
            if (recursive) {
                // 遍历子项
                if (Array.isArray(value)) {
                    // 数组子项，生成格式为： items[0].name {object}
                    let index: number = 0;
                    for (let sub of value) {
                        let subName: string = name + "[" + index + "]";
                        properties.set(subName, sub);
                        if (sub.getProperties !== undefined) {
                            for (let subSub of sub.getProperties(recursive)) {
                                let subSubName: string = subName + "." + subSub[0];
                                properties.set(subSubName, subSub[1]);
                            }
                        }
                        index++;
                    }
                } else if (value.getProperties !== undefined) {
                    // 存在此方法，则调用，生成格式： user.userCode
                    for (let sub of value.getProperties(recursive)) {
                        let subName: string = name + "." + sub[0];
                        properties.set(subName, sub[1]);
                    }
                }
            }
        }
        return properties;
    }

    protected getChildBOs(): Map<string, IBusinessObject> {
        let childs: Map<string, IBusinessObject> = new Map();
        // 遍历属性名称
        for (let item of this.getProperties(true)) {
            let name: string = item[0];
            let value: any = item[1];
            if (objects.instanceOf(value, BusinessObjectBase)) {
                // 继承此类，则认为是IBusinessObject
                childs.set(name, value);
            }
        }
        return childs;
    }

    /**
     * 标记为未修改
     */
    markOld(recursive: boolean): void {
        super.markOld(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: IBusinessObject = item[1];
                if (value.markOld !== undefined) {
                    value.markOld(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 标记为新
     */
    markNew(recursive: boolean): void {
        super.markNew(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: IBusinessObject = item[1];
                if (value.markNew !== undefined) {
                    value.markNew(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 标记为删除
     */
    markDeleted(recursive: boolean): void {
        super.markDeleted(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: IBusinessObject = item[1];
                if (value.markDeleted !== undefined) {
                    value.markDeleted(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 对象置为脏
     */
    markDirty(recursive: boolean): void {
        super.markDirty(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: IBusinessObject = item[1];
                if (value.markDirty !== undefined) {
                    value.markDirty(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void {
        super.clearDeleted(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: IBusinessObject = item[1];
                if (value.clearDeleted !== undefined) {
                    value.clearDeleted(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }
    /** 移出监听实现 */
    removeListener(): void {
        super.removeListener(<any>arguments);
        let recursive: boolean = arguments[0];
        if (recursive === true) {
            for (let item of this.getChildBOs()) {
                let value: any = item[1];
                if (value.removeListener !== undefined) {
                    value.removeListener(false);
                }
            }
        }
    }
}

/**
 * 业务对象集合基础
 */
export abstract class BusinessObjectListBase<T extends IBusinessObject>
    extends ArrayList<T>
    implements IBusinessObjectList<T> {

    constructor() {
        super();
    }

    /**
     * 创建子项
     */
    abstract create(): T;

    /**
     * 添加项目
     * @param item 项目
     */
    add(item: T): void;
    /**
     * 添加项目
     * @param items 项目集合
     */
    add(items: T[]): void;
    add(): void {
        // 无效值不做处理
        if (arguments === null || arguments === undefined) {
            return;
        }
        for (let arg of arguments) {
            if (arg instanceof Array) {
                for (let item of arg) {
                    super.add(item);
                    this.afterAdd(item);
                }
            } else {
                super.add(arg);
                this.afterAdd(arg);
            }
        }
    }

    /**
     * 添加项目后
     * @param item 项目
     */
    protected afterAdd(item: T): void {
        // 可重载
    }

    /**
     * 移出项目
     * @param item 项目
     */
    remove(item: T): void {
        // 无效值不做处理
        if (item === null || item === undefined) {
            return;
        }
        super.remove(item);
        this.afterRemove(item);
    }

    /**
     * 移出项目后
     * @param item 项目
     */
    protected afterRemove(item: T): void {
        // 可重载
    }
}
/** 业务对象工厂 */
export class BOFactory implements IBOFactory {
    private boMap: Map<string, any> = new Map();
    /**
     * 注册业务对象
     * @param name 检索值
     * @param type 注册类型
     */
    register(key: string, type: any): void;
    /**
     * 注册业务对象
     * @param type 注册类型
     */
    register(type: any): void;
    /** 注册对象 */
    register(): void {
        let bo: any, name: string;
        if (arguments.length === 1) {
            bo = arguments[0];
            name = objects.getName(bo);
        } else if (arguments.length === 2) {
            name = arguments[0];
            bo = arguments[1];
        }
        if (objects.isNull(bo)) {
            return;
        }
        if (objects.isNull(name)) {
            throw new Error(i18n.prop("sys_unrecognized_data"));
        }
        this.boMap.set(name, bo);
        if (name !== objects.getName(bo)) {
            // 名称与类型名称不同，再注册一次
            this.boMap.set(objects.getName(bo), bo);
        }

    }
    /** 获取对象类型，参数1：对象名称 */
    classOf(name: string): any {
        if (this.boMap.has(name)) {
            return this.boMap.get(name);
        }
        throw new Error(i18n.prop("sys_bo_not_registered", name));
    }
    /** 创建对象实例，参数1：对象名称 */
    create<B>(name: string): B {
        let bo: any = this.classOf(name);
        if (objects.isNull(bo) && objects.isAssignableFrom(bo, BusinessObjectBase)) {
            throw new Error(i18n.prop("sys_bo_type_invalid", name));
        }
        let instance: any = new bo;
        return <B>instance;
    }
}