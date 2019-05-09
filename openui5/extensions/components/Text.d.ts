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
             * 文本框
             */
            class Text extends sap.m.Text {
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
                setBindingValue(value: string): this;
            }
            /**
             * 业务仓库数据-文本框
             */
            class RepositoryText extends Text {
                /**
                 * 获取业务仓库实例
                 */
                getRepository(): ibas.BORepositoryApplication;
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(value: ibas.BORepositoryApplication | string): this;
                /**
                 * 获取数据信息
                 */
                getDataInfo(): repository.IDataInfo;
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(value: repository.IDataInfo | any): this;
            }
            /**
             * 对象属性可选值-文本框
             */
            class PropertyText extends Text {
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
            }
            /**
             * 数据转换-文本框
             */
            class ConversionText extends Text {
                /** 设置改变事件 */
                attachConvert(oData: any, fnFunction: Function, oListener?: any): ConversionText;
                /** 取消改变事件 */
                detachConvert(fnFunction: Function, oListener?: any): ConversionText;
                /** 触发改变事件 */
                protected fireConvert(param: {
                    value: string,
                    done: (newValue: string) => void,
                    bindingData?: any,
                }): ConversionText;
            }
            /**
             * 用户数据-文本框
             */
            class UserText extends RepositoryText {
            }
            /**
             * 组织数据-文本框
             */
            class OrganizationText extends RepositoryText {
            }
            /**
             * 角色数据-文本框
             */
            class RoleText extends RepositoryText {
            }
            /**
             * 业务对象数据-文本框
             */
            class BusinessObjectText extends RepositoryText {
            }
        }
    }
}
