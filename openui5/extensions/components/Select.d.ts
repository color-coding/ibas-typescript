﻿/**
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
             * 选择框
             */
            class Select extends sap.m.Select {
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
             * 枚举数据-选择框
             */
            class EnumSelect extends Select {
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
                 * 加载可选值
                 */
                loadItems(): this;
            }
            /**
             * 业务仓库数据-选择框
             */
            class RepositorySelect extends Select {
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
                 * 获取查询条件
                 */
                getCriteria(): ibas.ICriteria;
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setCriteria(value: ibas.ICriteria | ibas.ICondition[]): this;
                /**
                 * 获取空白数据
                 */
                getBlankData(): { key: string, text: string };
                /**
                 * 设置空白数据（未设置使用默认，无效值则为不使用）
                 * @param value 空白数据；undefined表示不使用
                 */
                setBlankData(value: { key: string, text: string }): this;
                /**
                 * 加载可选值
                 */
                loadItems(): this;
            }
            /**
             * 对象属性可选值-选择框
             */
            class PropertySelect extends Select {
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
                 * 加载可选值
                 */
                loadItems(): this;
            }
            /**
             * 对象服务系列-选择框
             */
            class SeriesSelect extends Select {
                /**
                 * 获取对象编码
                 */
                getObjectCode(): string;
                /**
                 * 设置对象编码
                 * @param value 对象编码
                 */
                setObjectCode(value: string): this;
                /**
                 * 加载可选值
                 */
                loadItems(): this;
            }
            /**
             * 重复字符计数-选择框
             */
            class RepeatCountSelect extends Select {
                /**
                 * 获取最大数
                 */
                getMaxCount(): number;
                /**
                 * 设置最大数
                 * @param value 最大数
                 */
                setMaxCount(value: number): this;
                /**
                 * 获取重复内容
                 */
                getRepeateText(): string;
                /**
                 * 设置重复内容
                 * @param value 重复内容
                 */
                setRepeateText(value: string): this;
                /**
                 * 加载可选值
                 */
                loadItems(): this;
            }
            /**
             * 对象属性别名-选择框
             */
            class AliasSelect extends Select {
                /**
                 * 获取对象信息
                 */
                getObjectInfo(): string | { code: string, name: string };
                /**
                 * 设置对象信息
                 * @param value 对象信息
                 */
                setObjectInfo(value: string | { code: string, name: string }): this;
                /**
                 * 获取别名值属性
                 */
                getAliasProperty(): string;
                /**
                 * 设置别名值属性
                 * @param value 别名值属性
                 */
                setAliasProperty(value: string): this;
                /**
                 * 加载可选值
                 */
                loadItems(): this;
            }
        }
    }
}
