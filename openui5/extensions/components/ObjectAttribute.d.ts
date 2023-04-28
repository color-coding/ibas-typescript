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
             * 对象属性
             */
            class ObjectAttribute extends sap.m.ObjectAttribute {
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
                /**
                 * 获取是否换行
                 */
                getWrapping(): boolean;
                /**
                 * 设置是否换行
                 * @param value 值
                 */
                setWrapping(value: boolean): this;
                /**
                * 获取显示值链接钮
                */
                getShowValueLink(): boolean;
                /**
                 * 设置显示值链接钮
                 * @param value 数据信息
                 */
                setShowValueLink(value: boolean): this;
                /**
                 * 监听值链接事件
                 * @param oData 
                 * @param fnFunction 
                 * @param oListener 
                 */
                attachValueLinkRequest(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 取消监听值链接事件
                 * @param fnFunction 
                 * @param oListener 
                 */
                detachValueLinkRequest(fnFunction: Function, oListener?: any): this;
                /** 
                 * 触发地址改变事件
                 * @param param 
                 */
                protected fireValueLinkRequest(param: { value: string }): this;
            }
            /**
             * 业务仓库数据-对象属性
             */
            class RepositoryObjectAttribute extends ObjectAttribute {
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
                /**
                 * 检索值描述
                 * @param value 值
                 */
                protected describeValue(value: string): void;
            }
            /**
             * 对象属性可选值-对象属性
             */
            class PropertyObjectAttribute extends ObjectAttribute {
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
                 * 检索值描述
                 * @param value 值
                 */
                protected describeValue(value: string): void;
            }
            /**
             * 数据转换-对象属性
             */
            class ConversionObjectAttribute extends ObjectAttribute {
                /** 设置改变事件 */
                attachConvert(oData: any, fnFunction: Function, oListener?: any): ConversionObjectAttribute;
                /** 取消改变事件 */
                detachConvert(fnFunction: Function, oListener?: any): ConversionObjectAttribute;
                /** 触发改变事件 */
                protected fireConvert(param: {
                    value: string,
                    done: (newValue: string) => void,
                    bindingData?: any,
                }): ConversionObjectAttribute;
            }
            /**
             * 用户数据-对象属性
             */
            class UserObjectAttribute extends RepositoryObjectAttribute {
            }
            /**
             * 组织数据-对象属性
             */
            class OrganizationObjectAttribute extends RepositoryObjectAttribute {
            }
            /**
             * 角色数据-对象属性
             */
            class RoleObjectAttribute extends RepositoryObjectAttribute {
            }
            /**
             * 业务对象数据-对象属性
             */
            class BusinessObjectObjectAttribute extends RepositoryObjectAttribute {
            }
        }
    }
}
