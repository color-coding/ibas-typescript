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
             * 分段按钮
             */
            class SegmentedButton extends sap.m.SegmentedButton {
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
                setBindingValue(value: string): SegmentedButton;
            }
            /**
             * 分段按钮-枚举
             */
            class EnumSegmentedButton extends SegmentedButton {
                /**
                 * 获取枚举类型
                 */
                getEnumType(): any;
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(value: any): EnumSegmentedButton;
                /**
                 * 加载可选值
                 */
                loadItems(): EnumSegmentedButton;
            }
        }
    }
}
