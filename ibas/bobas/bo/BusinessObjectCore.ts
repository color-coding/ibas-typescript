/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/Configuration.ts" />
/// <reference path="../common/I18N.ts" />

namespace ibas {
    /**
     * 属性改变监听者
     */
    export interface IPropertyChangedListener {
        /** 标记 */
        id?: string;
        /** 调用者，this指向 */
        caller?: any;
        /**
         * 属性改变
         */
        propertyChanged(property: string): void;
    }

    /**
     * 可绑定对象
     */
    export interface IBindable {
        /**
         * 注册监听事件
         * @param listener 监听者
         */
        registerListener(listener: IPropertyChangedListener): void;
        /**
         * 移出监听事件
         * @param listener 监听者
         */
        removeListener(listener: IPropertyChangedListener): void;
        /**
         * 移出全部监听事件
         */
        removeListener(recursive: boolean): void;
    }

    /**
     * 状态跟踪对象
     */
    export interface ITrackable {
        /**
         * 是否新建
         */
        readonly isNew: boolean;
        /**
         * 是否修改
         */
        readonly isDirty: boolean;
        /**
         * 是否删除
         */
        readonly isDeleted: boolean;
        /**
         * 是否加载数据中
         */
        isLoading: boolean;
        /**
         * 标记为未修改
         * @param recursive 递归
         */
        markOld(recursive: boolean): void;
        /**
         * 标记为未修改
         */
        markOld(): void;
        /**
         * 标记为新
         * @param recursive 递归
         */
        markNew(recursive: boolean): void;
        /**
         * 标记为新
         */
        markNew(): void;
        /**
         * 标记为删除
         * @param recursive 递归
         */
        markDeleted(recursive: boolean): void;
        /**
         * 标记为删除
         */
        markDeleted(): void;

        /**
         * 对象置为脏
         * @param recursive 递归
         */
        markDirty(recursive: boolean): void;
        /**
         * 对象置为脏
         */
        markDirty(): void;

        /**
         * 清除删除标记
         *
         * @param recursive 递归
         */
        clearDeleted(recursive: boolean): void;
        /**
         * 清除删除标记
         */
        clearDeleted(): void;
    }

    /**
     * 业务对象
     */
    export interface IBusinessObject extends ITrackable {
        /**
         * 获取属性的值
         * @param property 属性名称
         */
        getProperty<P>(property: string): P;

        /**
         * 设置属性的值
         * @param property 属性名称
         * @param value 值
         */
        setProperty<P>(property: string, value: P): void;

        /** 输出字符串 */
        toString(): string;

        /** 删除 */
        delete(): void;
    }

    /**
     * 业务对象集合
     */
    export interface IBusinessObjects<T extends IBusinessObject> extends IList<T> {
        /**
         * 新建并添加子项
         */
        create(): T;
        /**
         * 移出项目
         * @param item 被移出项目
         * @returns true,被移出;false,被delete;null,无效数据
         */
        remove(item: T): boolean;
        /** 过滤删除的项目 */
        filterDeleted(): T[];
    }

    /** 业务对象工厂 */
    export interface IBOFactory {
        /** 注册对象 */
        register(bo: any): void;
        /** 获取对象类型，参数1：对象名称 */
        classOf(name: string): any;
        /** 创建对象实例，参数1：对象名称 */
        create<B extends IBusinessObject>(name: string): B;
    }
    const PROPERTY_LISTENER: symbol = Symbol("listener");
    /**
     * 可监听的对象
     */
    export abstract class Bindable implements IBindable {
        /**
         * 注册监听事件
         * @param listener 监听者
         */
        registerListener(listener: IPropertyChangedListener): void {
            if (this[PROPERTY_LISTENER] === undefined) {
                this[PROPERTY_LISTENER] = new ArrayList<IPropertyChangedListener>();
            }
            this[PROPERTY_LISTENER].push(listener);
        }

        /** 移出全部监听 */
        removeListener(recursive: boolean): void;
        /**
         * 移出监听事件
         * @param listener 监听者
         */
        removeListener(listener: IPropertyChangedListener): void;
        /** 移出监听实现 */
        removeListener(): void {
            if (objects.isNull(this[PROPERTY_LISTENER])) {
                return;
            }
            let listener: IPropertyChangedListener = arguments[0];
            if (!objects.isNull(listener)) {
                for (let item of this[PROPERTY_LISTENER]) {
                    if (item === listener) {
                        this[PROPERTY_LISTENER].remove(item);
                    }
                }
            }
        }

        /**
         * 通知属性改变
         * @param property 属性
         */
        protected firePropertyChanged(property: string): void {
            if (objects.isNull(this[PROPERTY_LISTENER])) {
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
            for (let item of this[PROPERTY_LISTENER]) {
                if (objects.isNull(item.caller)) {
                    item.propertyChanged(property);
                } else {
                    item.propertyChanged.apply(item.caller, [property, this]);
                }
            }
        }
    }
    const PROPERTY_ISLOADING: symbol = Symbol("isLoading");
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
        /** 是否新建 */
        isNew: boolean;
        /** 是否修改 */
        isDirty: boolean;
        /** 是否刪除 */
        isDeleted: boolean;
        /** 是否保存 */
        isSavable: boolean;
        /** 是否加载 */
        get isLoading(): boolean {
            return this[PROPERTY_ISLOADING];
        }
        set isLoading(value: boolean) {
            this[PROPERTY_ISLOADING] = value;
        }
        /**
         * 标记为未修改
         */
        markOld(): void {
            this.isNew = false;
            this.isDirty = false;
            this.isDeleted = false;
        }

        /**
         * 标记为新
         */
        markNew(): void {
            this.isNew = true;
            this.isDirty = true;
            this.isDeleted = false;
        }

        /**
         * 标记为删除
         */
        markDeleted(): void {
            this.isDirty = true;
            this.isDeleted = true;
        }

        /**
         * 对象置为脏
         */
        markDirty(): void {
            this.isDirty = true;
        }

        /**
         * 清除删除标记
         */
        clearDeleted(): void {
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
        markOld(): void;
        markOld(recursive: boolean): void;
        markOld(): void {
            super.markOld();
            let recursive: boolean = arguments[0];
            if (recursive !== undefined && recursive === true) {
                for (let item of this.getChildBOs()) {
                    let value: IBusinessObject = item[1];
                    if (value.markOld !== undefined) {
                        value.markOld(false);// 此处不再递归，因为已处于递归环境
                    }
                }
            }
        }

        markNew(): void;
        markNew(recursive: boolean): void;
        markNew(): void {
            super.markNew();
            let recursive: boolean = arguments[0];
            if (recursive !== undefined && recursive === true) {
                for (let item of this.getChildBOs()) {
                    let value: IBusinessObject = item[1];
                    if (value.markNew !== undefined) {
                        value.markNew(false);// 此处不再递归，因为已处于递归环境
                    }
                }
            }
        }

        markDeleted(): void;
        markDeleted(recursive: boolean): void;
        markDeleted(): void {
            super.markDeleted();
            let recursive: boolean = arguments[0];
            if (recursive !== undefined && recursive === true) {
                for (let item of this.getChildBOs()) {
                    let value: IBusinessObject = item[1];
                    if (value.markDeleted !== undefined) {
                        value.markDeleted(false);// 此处不再递归，因为已处于递归环境
                    }
                }
            }
        }

        markDirty(): void;
        markDirty(recursive: boolean): void;
        markDirty(): void {
            super.markDirty();
            let recursive: boolean = arguments[0];
            if (recursive !== undefined && recursive === true) {
                for (let item of this.getChildBOs()) {
                    let value: IBusinessObject = item[1];
                    if (value.markDirty !== undefined) {
                        value.markDirty(false);// 此处不再递归，因为已处于递归环境
                    }
                }
            }
        }
        clearDeleted(): void;
        clearDeleted(recursive: boolean): void;
        clearDeleted(): void {
            super.clearDeleted();
            let recursive: boolean = arguments[0];
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
            super.removeListener(arguments[0]);
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

        abstract delete(): void;
    }
    /**
     * 业务对象集合基础
     */
    export abstract class BusinessObjectsBase<T extends IBusinessObject>
        extends ArrayList<T>
        implements IBusinessObjects<T> {

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
         * 移出项目（新数据，则移出集合；否则，标记删除）
         * @param item 项目
         */
        remove(item: T): boolean {
            // 无效值不做处理
            if (item === null || item === undefined) {
                return null;
            }
            // 不是集合值
            if (!this.contain(item)) {
                return null;
            }
            if (!item.isNew) {
                item.delete();
                return false;
            } else {
                super.remove(item);
                this.afterRemove(item);
                return true;
            }
        }
        /**
         * 移出项目后
         * @param item 项目
         */
        protected afterRemove(item: T): void {
            // 可重载
        }
        /** 过滤删除的项目 */
        filterDeleted(): T[] {
            return super.where((item: T) => {
                if (!item.isDeleted) {
                    return true;
                }
            });
        }
    }
    /** 业务对象工厂 */
    export class BOFactory implements IBOFactory {
        /** 业务对象字典 */
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
                // 没有提供名称，则注册到模块
                bo = arguments[0];
                if (objects.isNull(bo)) {
                    return;
                }
                name = objects.getName(bo);
                if (strings.isEmpty(name)) {
                    throw new Error(i18n.prop("sys_unrecognized_data"));
                }
                this.boMap.set(name, bo);
            } else if (arguments.length === 2) {
                // 提供名称，则注册到全局
                name = arguments[0];
                if (strings.isEmpty(name)) {
                    throw new Error(i18n.prop("sys_unrecognized_data"));
                }
                name = config.applyVariables(name); // 去除变量
                bo = arguments[1];
                if (objects.isNull(bo)) {
                    return;
                }
                if (this !== ibas.boFactory) {
                    // 注册到模块
                    this.register(bo);
                    // 注册到全局
                    ibas.boFactory.register(name, bo);
                } else {
                    this.boMap.set(name, bo);
                }
            }
        }
        /** 获取对象类型，参数1：对象名称 */
        classOf(name: string): any {
            // 去除变量
            name = config.applyVariables(name);
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
    /** 业务对象工厂实例 */
    export const boFactory: BOFactory = new BOFactory();
}