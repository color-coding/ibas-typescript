/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace m {
            /**
             * 列表
             */
            class List extends sap.m.List {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 绑定属性
                 * @param sName 属性名称
                 * @param oBindingInfo 绑定信息
                 */
                bindProperty(sName: string, oBindingInfo: any): this;
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取选择类型
                 */
                getChooseType(): ibas.emChooseType;
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(value: ibas.emChooseType): this;
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(oModel: model.JSONModel, sName?: string): this;
                /**
                 * 获取模型
                 * @param sModelName 名称
                 */
                getModel(sModelName?: string | undefined): model.JSONModel;
                /**
                 * 监听下一个数据集事件
                 * @param oData 数据
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                attachNextDataSet(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 移出下一个数据集事件
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                detachNextDataSet(fnFunction: Function, oListener?: any): this;
                /**
                 * 触发下一个数据集事件
                 * @param param 参数
                 */
                protected fireNextDataSet(param: { data: any, }): void;
            }
            /**
             * 树列表
             */
            class Tree extends sap.m.Tree {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 绑定属性
                 * @param sName 属性名称
                 * @param oBindingInfo 绑定信息
                 */
                bindProperty(sName: string, oBindingInfo: any): this;
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取选择类型
                 */
                getChooseType(): ibas.emChooseType;
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(value: ibas.emChooseType): this;
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(oModel: model.JSONModel, sName?: string): this;
                /**
                 * 获取模型
                 * @param sModelName 名称
                 */
                getModel(sModelName?: string | undefined): model.JSONModel;
                /**
                 * 监听下一个数据集事件
                 * @param oData 数据
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                attachNextDataSet(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 移出下一个数据集事件
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                detachNextDataSet(fnFunction: Function, oListener?: any): this;
                /**
                 * 触发下一个数据集事件
                 * @param param 参数
                 */
                protected fireNextDataSet(param: { data: any, }): void;
            }
        }
        namespace f {
            class GridList extends sap.f.GridList {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 绑定属性
                 * @param sName 属性名称
                 * @param oBindingInfo 绑定信息
                 */
                bindProperty(sName: string, oBindingInfo: any): this;
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(): ibas.IList<T>;
                /**
                 * 获取选择类型
                 */
                getChooseType(): ibas.emChooseType;
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(value: ibas.emChooseType): this;
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(oModel: model.JSONModel, sName?: string): this;
                /**
                 * 获取模型
                 * @param sModelName 名称
                 */
                getModel(sModelName?: string | undefined): model.JSONModel;
                /**
                 * 监听下一个数据集事件
                 * @param oData 数据
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                attachNextDataSet(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 移出下一个数据集事件
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                detachNextDataSet(fnFunction: Function, oListener?: any): this;
                /**
                 * 触发下一个数据集事件
                 * @param param 参数
                 */
                protected fireNextDataSet(param: { data: any, }): void;
            }
            class GridListItem extends sap.f.GridListItem {

            }
        }
    }
}
