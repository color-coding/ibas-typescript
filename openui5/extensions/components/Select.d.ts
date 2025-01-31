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
                /** 
                 * 是否没有值
                 * @param value 值
                 */
                isEmptyValue(value: any): boolean;
                /**
                 * 获取默认项目
                 */
                protected getDefaultSelectedItem(): sap.ui.core.Item;
                /**
                 * 加载可选值
                 */
                loadItems(): this;
                /**
                 * 监听值粘贴事件
                 * @param oData 
                 * @param fnFunction 
                 * @param oListener 
                 */
                attachValuePaste(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 取消监听值粘贴事件
                 * @param fnFunction 
                 * @param oListener 
                 */
                detachValuePaste(fnFunction: Function, oListener?: any): this;
                /** 
                 * 触发值粘贴事件
                 * @param param 
                 */
                protected fireValuePaste(param: { data: any }): this;
            }
            /** 选择框项目 */
            class SelectItem extends sap.ui.core.ListItem {
                /** 是否为默认值 */
                getDefault(): boolean;
                /** 设置为默认值 */
                setDefault(value: boolean): SelectItem;
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
            }
            /**
             * 重复字符计数-选择框
             */
            class RepeatCharSelect extends Select {
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
                getRepeatText(): string;
                /**
                 * 设置重复内容
                 * @param value 重复内容
                 */
                setRepeatText(value: string): this;
            }
            /**
             * 业务对象属性-选择框
             */
            class BusinessObjectPropertiesSelect extends Select {
                /**
                 * 获取数据信息
                 */
                getDataInfo(): { code: string, name?: string } | string | Function;
                /**
                 * 设置数据信息
                 * @param value 值
                 */
                setDataInfo(value: { code: string, name?: string } | string | Function): this;
            }
            /**
             * 货币-选择框
             */
            class CurrencySelect extends Select { }

            /**
             * 货币和汇率-选择框
             */
            class CurrencyRateSelect extends sap.ui.core.Control {
                /**
                 * 日期
                 */
                getDate(): Date;
                /**
                 * 日期
                 * @param value 值
                 */
                setDate(value: Date, onlyValue?: boolean): this;

                /**
                 * 汇率
                 */
                getRate(): number;
                /**
                 * 汇率
                 * @param value 值
                 */
                setRate(value: number, onlyValue?: boolean): this;
                /**
                 * 币种
                 */
                getCurrency(): string;
                /**
                 * 币种
                 * @param value 值
                 */
                setCurrency(value: string, onlyValue?: boolean): this;
                /**
                 * 本币
                 */
                getBaseCurrency(): string;
                /**
                 * 本币
                 * @param value 值
                 */
                setBaseCurrency(value: string, onlyValue?: boolean): this;
                /**
                 * 监听货币改变事件
                 * @param oData 数据
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                attachCurrencyChanged(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * 移出货币改变事件
                 * @param fnFunction 方法
                 * @param oListener 监听者
                 */
                detachCurrencyChanged(fnFunction: Function, oListener?: any): this;
                /**
                 * 触发货币改变事件
                 * @param param 参数
                 */
                protected fireCurrencyChanged(param: {
                    baseCurrency?: string,
                    date?: Date,
                    currency?: string,
                    rate?: number,
                }): void;
                /**
                 * 加载汇率
                 */
                loadCurrencyRate: (done: (result: number | Error) => void) => void;

                protected getCurrencySelect(): CurrencySelect;

                protected getRateInput(): sap.m.Input;
            }
        }
    }
}
