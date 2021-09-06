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
             * 对象项目
             */
            class ObjectListItem extends sap.m.ObjectListItem {
                /**
                 * 构造
                 * @param {string} sId 唯一标记，不要赋值
                 * @param {any} mSettings 构造设置
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
            }
            /**
             * 数据对象项目
             */
            class DataObjectListItem extends ObjectListItem {
                /**
                 * 获取用户字段模式
                 */
                getUserFieldsMode(): string;
                /**
                 * 设置用户字段模式
                 * @param value 值
                 */
                setUserFieldsMode(value: "attribute" | "none"): this;
                /**
                 * 获取数据信息
                 */
                getDataInfo(): { code: string, name?: string } | string | shell.bo.IBizObjectInfo;
                /**
                 * 设置数据信息
                 * @param value 值
                 */
                setDataInfo(value: { code: string, name?: string } | string | shell.bo.IBizObjectInfo): this;
            }
        }
    }
}
