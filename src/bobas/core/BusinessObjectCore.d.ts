/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../data/Common.d.ts" />
import { List } from '../data/Common.d';

/**
* 属性改变监听者
*/
export interface PropertyChangedListener {
    /**
    * 属性改变
    */
    propertyChanged(property: string);
}

/**
* 可绑定对象
*/
export interface IBindable {
    /**
    * 注册监听事件
    * @param listener 监听者
    */
    registerListener(listener: PropertyChangedListener);

    /**
     * 移出监听事件
     * @param listener 监听者
     */
    removeListener(listener: PropertyChangedListener);
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
    * 是否能够保存
    */
    readonly isSavable: boolean;
    /**
    * 是否有效
    */
    readonly isVaild: boolean;
    /**
    * 是否加载数据中
    */
    isLoading: boolean;

    /**
     * 标记为未修改
     * 
     * @param recursive 递归
     */
    markOld(recursive: boolean): void;

    /**
     * 标记为新
     * 
     * @param recursive 递归
     */
    markNew(recursive: boolean): void;

    /**
     * 标记为删除
     * 
     * @param recursive 递归
     */
    markDeleted(recursive: boolean): void;

    /**
     * 对象置为脏
     * 
     * @param recursive 递归
     */
    markDirty(recursive: boolean): void;

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void;
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
    setProperty<P>(property: string, value: P);

}

/**
* 业务对象集合
*/
export interface IBusinessObjectList<T extends IBusinessObject> extends List<T> {
    /**
    * 新建并添加子项
    */
    create(): T;

}