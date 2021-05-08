/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace layout {
            /**
             * 窗体布局
             */
            class SimpleForm extends sap.ui.layout.form.SimpleForm {
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
            }
            /**
             * 数据窗体布局
             */
            class DataSimpleForm extends SimpleForm {
                /**
                 * 获取用户字段标题
                 */
                getUserFieldsTitle(): string;
                /**
                 * 设置用户字段标题
                 * @param value 值
                 */
                setUserFieldsTitle(value: string): this;
                /**
                 * 获取用户字段模式
                 */
                getUserFieldsMode(): string;
                /**
                 * 设置用户字段模式
                 * @param value 值
                 */
                setUserFieldsMode(value: "input" | "text" | "none"): this;
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