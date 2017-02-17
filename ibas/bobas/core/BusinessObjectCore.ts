/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    IBindable, PropertyChangedListener, ITrackable,
    IBusinessObject, IBusinessObjectList
} from "./BusinessObjectCore.d";
import { object } from "../data/Data";
import { ArrayList } from "../data/Common";

/**
 * 可监听的对象
 */
export abstract class Bindable implements IBindable {

    private listeners: ArrayList<PropertyChangedListener>;
    /**
     * 注册监听事件
     * @param listener 监听者
     */
    registerListener(listener: PropertyChangedListener): void {
        if (object.isNull(this.listeners)) {
            this.listeners = new ArrayList<PropertyChangedListener>();
        }
        this.listeners.push(listener);
    }

    /**
     * 移出监听事件
     * @param listener 监听者
     */
    removeListener(listener: PropertyChangedListener): void {
        if (object.isNull(this.listeners)) {
            return;
        }
        for (let item of this.listeners) {
            if (item === listener) {
                this.listeners.remove(item);
            }
        }
    }

    /**
     * 通知属性改变
     * @param property 属性
     */
    protected firePropertyChanged(property: string): void {
        if (object.isNull(this.listeners)) {
            return;
        }
        if (property.startsWith("_")) {
            // 除去映射符
            property = property.substring(1);
        }
        for (let item of this.listeners) {
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
        this.isSavable = true;
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

    private _savable: boolean;
    /**
     * 是否有效
     */
    get isSavable(): boolean {
        return this._savable;
    }
    set isSavable(value: boolean) {
        this._savable = value;
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
        this[property] = value;
        this.firePropertyChanged(property);
    }

    /**
     * 获取对象属性
     * 
     * @param recursive 递归
     */
    getProperties(recursive: boolean): Map<string, any> {
        let properties = new Map();
        // 遍历属性名称
        for (let item in this) {
            if (this[item] === undefined) { continue; }
            let name: string = item;
            let value = this[name];
            properties.set(name, value);
            if (recursive) {
                // 遍历子项
                if (Array.isArray(value)) {
                    // 数组子项，生成格式为： items[0].name {object}
                    let index = 0;
                    for (let sub of value) {
                        let subName = name + "[" + index + "]";
                        properties.set(subName, sub);
                        if (sub.getProperties !== undefined) {
                            for (let subSub of sub.getProperties(recursive)) {
                                let subSubName = subName + "." + subSub[0];
                                properties.set(subSubName, subSub[1]);
                            }
                        }
                        index++;
                    }
                } else if (value.getProperties !== undefined) {
                    // 存在此方法，则调用，生成格式： user.userCode
                    for (let sub of value.getProperties(recursive)) {
                        let subName = name + "." + sub[0];
                        properties.set(subName, sub[1]);
                    }
                }
            }
        }
        return properties;
    }

    protected getChildBOs(): Map<string, IBusinessObject> {
        let childs = new Map();
        // 遍历属性名称
        for (let item of this.getProperties(true)) {
            let name: string = item[0];
            let value = item[1];
            if (value.getChildBOs !== undefined) {
                // 存在此方法，认为是个BO
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
                let value = item[1];
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
                let value = item[1];
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
                let value = item[1];
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
                let value = item[1];
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
                let value = item[1];
                if (value.clearDeleted !== undefined) {
                    value.clearDeleted(false);// 此处不再递归，因为已处于递归环境
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
    add(item: T): void {
        // 无效值不做处理
        if (item === null || item === undefined) {
            return;
        }
        super.add(item);
        this.afterAdd(item);
    }

    /**
     * 添加项目后
     * @param item 项目
     */
    protected afterAdd(item: T): void {

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

    }
}