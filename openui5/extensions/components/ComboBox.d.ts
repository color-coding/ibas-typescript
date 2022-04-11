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
             * 下拉框
             */
            class ComboBox extends sap.m.ComboBox {
                /**
                 * 构造
                 * @param {string} sId 唯一标记，不要赋值
                 * @param {any} mSettings 绑定值属性：bindingValue
                 */
                constructor(sId?: string, mSettings?: any);
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
                 * 获取绑定值
                 */
                getBindingValue(): string;
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(value: string): ComboBox;
                /**
                 * 销毁可选项
                 */
                destroyItems(): ComboBox;
            }
            /**
             * 多选下拉框（数据分割符）
             */
            class MultiComboBox extends sap.m.MultiComboBox {
                /**
                 * 构造
                 * @param {string} sId 唯一标记，不要赋值
                 * @param {any} mSettings 绑定值属性：bindingValue
                 */
                constructor(sId?: string, mSettings?: any);
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
                 * 获取绑定值
                 */
                getBindingValue(): string;
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(value: string): MultiComboBox;
                /**
                 * 获取数据分隔符
                 */
                getDataSeparator(): string;
                /**
                 * 设置数据分隔符
                 * @param value 值
                 */
                setDataSeparator(value: string): MultiComboBox;
                /**
                 * 销毁可选项
                 */
                destroyItems(): MultiComboBox;
            }
            /**
             * 对象属性可选值-多择框
             */
            class PropertyMultiComboBox extends MultiComboBox {
                /**
                 * 获取数据信息
                 */
                getDataInfo(): { code: string, name?: string } | string | Function;
                /**
                 * 设置数据信息
                 * @param value 值
                 */
                setDataInfo(value: { code: string, name?: string } | string | Function): this;
                /**
                 * 获取属性名称
                 */
                getPropertyName(): string;
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(value: string): this;
                /**
                 * 加载可选项
                 */
                protected loadItems(): this;
            }
        }
    }
}
