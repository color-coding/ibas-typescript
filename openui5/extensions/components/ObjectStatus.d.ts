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
             * 对象状态
             */
            class ObjectStatus extends sap.m.ObjectStatus {
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
             * 对象枚举状态
             */
            class ObjectEnumStatus extends ObjectStatus {
                /**
                 * 获取枚举类型
                 */
                getEnumType(): any;
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(value: any): this;
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState;
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string;
            }
            /**
             * 对象单据状态
             */
            class ObjectDocumentStatus extends ObjectEnumStatus {

            }
            /**
             * 对象是否状态
             */
            class ObjectYesNoStatus extends ObjectEnumStatus {
                /**
                 * 设置相反的
                 * @param value 值
                 */
                setNegative(value: boolean): ObjectYesNoStatus;
                /**
                 * 获取相反的
                 */
                getNegative(): boolean;
            }
            /**
             * 对象审批状态
             */
            class ObjectApprovalStatus extends ObjectEnumStatus {

            }
            /**
             * 对象状态
             */
            class ObjectBOStatus extends ObjectEnumStatus {

            }
            /**
             * 业务仓库数据-对象状态
             */
            class RepositoryObjectStatus extends ObjectStatus {
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
             * 对象状态可选值-对象状态
             */
            class PropertyObjectStatus extends ObjectStatus {
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
        }
    }
}
