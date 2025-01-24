/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace data {
            /**
             * 未知类型
             */
            class Unknown extends sap.ui.model.SimpleType {
                constructor(setting?: IUnknownSetting);
            }
            /**
             * 字母数字类型
             */
            class Alphanumeric extends sap.ui.model.type.String {
                /**
                 * 字母数字类型
                 * @param setting 设置
                 */
                constructor(setting?: IAlphanumericSetting);
            }
            /**
             * 数字类型
             */
            class Numeric extends sap.ui.model.type.Integer {
                /**
                 * 数字类型
                 * @param setting 设置
                 */
                constructor(setting?: INumericSetting);
            }
            /**
             * 小数类型
             */
            class Decimal extends sap.ui.model.type.Float {
                /**
                 * 小数类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 价格类型
             */
            class Price extends Decimal {
                /**
                 * 价格类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 数量类型
             */
            class Quantity extends Decimal {
                /**
                 * 数量类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 率类型
             */
            class Rate extends Decimal {
                /**
                 * 率类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 总计类型
             */
            class Sum extends Decimal {
                /**
                 * 总计类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 单位数量类型
             */
            class Measurement extends Decimal {
                /**
                 * 单位数量类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 百分数类型
             */
            class Percentage extends Decimal {
                /**
                 * 单位数量类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting);
            }
            /**
             * 日期类型
             */
            class Date extends sap.ui.model.type.Date {
                /**
                 * 日期类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting);
            }
            /**
             * 时间类型
             */
            class Time extends sap.ui.model.type.Time {
                /**
                 * 时间类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting);
                /** 格式化方式 */
                format: string;
            }
            /**
             * 日期时间类型
             */
            class DateTime extends sap.ui.model.type.DateTime {
                /**
                 * 日期时间类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting);
            }
            /**
             * 枚举类型
             */
            class Enum extends sap.ui.model.SimpleType {
                /**
                 * 枚举类型
                 * @param setting 设置
                 */
                constructor(setting: IEnumSetting);
                /**
                 * 枚举类型
                 */
                enumType: any;
                /**
                 * 枚举值描述（使用后不能解析值）
                 */
                describe: boolean;
            }
            /**
             * 是否类型
             */
            class YesNo extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 单据状态类型
             */
            class DocumentStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 对象状态类型
             */
            class BOStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 审批状态类型
             */
            class ApprovalStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 审批结果类型
             */
            class ApprovalResult extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 审批步骤状态类型
             */
            class ApprovalStepStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 权限类型类型
             */
            class AuthoriseType extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 条件操作类型
             */
            class ConditionOperation extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 条件关系类型
             */
            class ConditionRelationship extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 排序方式类型
             */
            class SortType extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
            /**
             * 方向类型
             */
            class Direction extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean);
            }
        }
    }
}
namespace sap {
    export namespace extension {
        export namespace data {
            /**
             * 数据类型设置
             */
            export interface ITypeSetting {
                /**
                 * 验证值
                 * @param oValue 值
                 */
                validateValue?(oValue: any): any;
            }
            /**
             * 未知类型设置
             */
            export interface IUnknownSetting extends ITypeSetting {
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any;
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any;
            }
            sap.ui.model.SimpleType.extend("sap.extension.data.Unknown", {
                constructor: function (this: sap.ui.model.SimpleType, setting?: IUnknownSetting): void {
                    sap.ui.model.SimpleType.call(this, arguments);
                    if (typeof setting.formatValue === "function") {
                        this.formatValue = setting.formatValue;
                    }
                    if (typeof setting.parseValue === "function") {
                        this.parseValue = setting.parseValue;
                    }
                    if (typeof setting.validateValue === "function") {
                        this.validateValue = setting.validateValue;
                    }
                },
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {

                },
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {

                },
                /**
                 * 验证值
                 * @param oValue 值
                 */
                validateValue(oValue: any): any {

                }
            });
            /**
             * 字母数字设置
             */
            export interface IAlphanumericSetting extends ITypeSetting {
                /* 是否不允许为空 */
                notEmpty?: boolean;
                /** 最大长度 */
                maxLength?: number;
                /** 最小长度 */
                minLength?: number;
                /** 正则表达式 */
                regExp?: RegExp;
            }
            sap.ui.model.type.String.extend("sap.extension.data.Alphanumeric", {
                constructor: function (setting?: IAlphanumericSetting): void {
                    sap.ui.model.type.String.call(this, undefined, setting ?
                        {
                            minLength: setting.minLength,
                            maxLength: setting.maxLength,
                            nullable: setting.notEmpty === false,
                            search: setting.regExp,
                        } : undefined
                    );
                }
            });
            /**
             * 数字类型设置
             */
            export interface INumericSetting extends ITypeSetting {
                /** 最小值 */
                minValue?: number;
                /** 最大值 */
                maxValue?: number;
            }
            sap.ui.model.type.Integer.extend("sap.extension.data.Numeric", {
                constructor: function (this: Numeric, setting?: INumericSetting): void {
                    sap.ui.model.type.Integer.call(this, {
                        // emptyString: 0,
                    }, setting ?
                        {
                            minimum: setting.minValue,
                            maximum: setting.maxValue,
                        } : undefined
                    );
                    (<any>this).sName = ibas.objects.nameOf(this);
                },
                formatValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === sInternalType) {
                        return oValue;
                    }
                    return sap.ui.model.type.Integer.prototype.formatValue.apply(this, arguments);
                },
                parseValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string" && ibas.strings.isEmpty(oValue)) {
                        return 0;
                    }
                    return sap.ui.model.type.Integer.prototype.parseValue.apply(this, arguments);
                },
            });
            /**
             * 小数类型设置
             */
            export interface IDecimalSetting extends ITypeSetting {
                /** 最小值 */
                minValue?: number;
                /** 最大值 */
                maxValue?: number;
                /** 小数位 */
                decimalPlaces?: number;
            }
            let DECIMAL_PLACES: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES, 6);
            let DECIMAL_PLACES_PRICE: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_PRICE, DECIMAL_PLACES);
            let DECIMAL_PLACES_PERCENTAGE: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_PERCENTAGE, DECIMAL_PLACES);
            let DECIMAL_PLACES_MEASUREMENT: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_MEASUREMENT, DECIMAL_PLACES);
            let DECIMAL_PLACES_QUANTITY: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY, DECIMAL_PLACES);
            let DECIMAL_PLACES_RATE: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_RATE, DECIMAL_PLACES);
            let DECIMAL_PLACES_SUM: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_SUM, DECIMAL_PLACES);
            let ALIGN_DECIMAL_PLACES: boolean = ibas.config.get(ibas.ALIGN_DECIMAL_PLACES, true);

            ibas.config.registerListener({
                /** 配置变化 */
                onConfigurationChanged(name: string, value: any): void {
                    if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES)) {
                        DECIMAL_PLACES = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_PRICE)) {
                        DECIMAL_PLACES_PRICE = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_PERCENTAGE)) {
                        DECIMAL_PLACES_PERCENTAGE = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_MEASUREMENT)) {
                        DECIMAL_PLACES_MEASUREMENT = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY)) {
                        DECIMAL_PLACES_QUANTITY = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_RATE)) {
                        DECIMAL_PLACES_RATE = ibas.numbers.valueOf(value);
                    } else if (ibas.strings.equals(name, ibas.CONFIG_ITEM_DECIMAL_PLACES_SUM)) {
                        DECIMAL_PLACES_SUM = ibas.numbers.valueOf(value);
                    }
                }
            });

            sap.ui.model.type.Float.extend("sap.extension.data.Decimal", {
                constructor: function (setting?: IDecimalSetting): void {
                    sap.ui.model.type.Float.call(this,
                        ALIGN_DECIMAL_PLACES ? {
                            decimals: setting?.decimalPlaces > 0 ? setting?.decimalPlaces : DECIMAL_PLACES,
                            preserveDecimals: false,
                        } : {
                                maxFractionDigits: setting?.decimalPlaces > 0 ? setting?.decimalPlaces : DECIMAL_PLACES,
                                preserveDecimals: false,
                            },
                        setting ?
                            {
                                minimum: setting.minValue,
                                maximum: setting.maxValue,
                            } : undefined
                    );
                },
                formatValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === sInternalType) {
                        return oValue;
                    }
                    return sap.ui.model.type.Float.prototype.formatValue.apply(this, arguments);
                },
                parseValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string" && ibas.strings.isEmpty(oValue)) {
                        return 0.0;
                    }
                    return sap.ui.model.type.Float.prototype.parseValue.apply(this, arguments);
                },
            });
            Decimal.extend("sap.extension.data.Price", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_PRICE;
                    }
                    Decimal.call(this, setting);
                }
            });
            Decimal.extend("sap.extension.data.Quantity", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_QUANTITY;
                    }
                    Decimal.call(this, setting);
                }
            });
            Decimal.extend("sap.extension.data.Rate", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_RATE;
                    }
                    Decimal.call(this, setting);
                }
            });
            Decimal.extend("sap.extension.data.Sum", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_SUM;
                    }
                    Decimal.call(this, setting);
                }
            });
            Decimal.extend("sap.extension.data.Measurement", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_MEASUREMENT;
                    }
                    Decimal.call(this, setting);
                }
            });
            Decimal.extend("sap.extension.data.Percentage", {
                constructor: function (setting?: IDecimalSetting): void {
                    if (!(setting?.decimalPlaces > 0)) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.decimalPlaces = DECIMAL_PLACES_PERCENTAGE - 2;
                        if (setting.decimalPlaces < 2) {
                            setting.decimalPlaces = 2;
                        }
                    }
                    Decimal.call(this, setting);
                },
                _createFormats(): void {
                    let oSourceOptions: any = this.oFormatOptions.source;
                    this.oOutputFormat = sap.ui.core.format.NumberFormat.getPercentInstance(this.oFormatOptions);
                    if (oSourceOptions) {
                        if ((<any>sap).base.util.isEmptyObject(oSourceOptions)) {
                            oSourceOptions = {
                                groupingEnabled: false,
                                groupingSeparator: ",",
                                decimalSeparator: "."
                            };
                        }
                        this.oInputFormat = sap.ui.core.format.NumberFormat.getPercentInstance(oSourceOptions);
                    }
                },
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "string" && !ibas.strings.isWith(oValue, undefined, "%")) {
                        oValue += "%";
                    }
                    return Decimal.prototype.parseValue.call(this, oValue, sInternalType);
                }
            });
            /**
             * 日期时间类型设置
             */
            export interface IDateTimeSetting extends ITypeSetting {
                /** 格式 */
                format?: string;
            }
            export const DEFAULT_FORMAT_DATE: string = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, null);
            sap.ui.model.type.Date.extend("sap.extension.data.Date", {
                constructor: function (setting?: IDateTimeSetting): void {
                    if (DEFAULT_FORMAT_DATE && !setting?.format) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.format = DEFAULT_FORMAT_DATE;
                    }
                    sap.ui.model.type.Date.call(this, { pattern: setting?.format });
                },
                formatValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === sInternalType) {
                        return oValue;
                    }
                    if (oValue instanceof globalThis.Date) {
                        if (sInternalType === "Date") {
                            return oValue;
                        }
                        if (sInternalType === "object") {
                            return oValue;
                        }
                    }
                    return sap.ui.model.type.Date.prototype.formatValue.apply(this, arguments);
                },
                parseValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "Date") {
                        return oValue;
                    }
                    if (sInternalType === "object" && oValue instanceof globalThis.Date) {
                        return oValue;
                    }
                    return sap.ui.model.type.Date.prototype.parseValue.apply(this, arguments);
                },
            });
            export const DEFAULT_FORMAT_TIME: string = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_TIME, "HH:mm");
            sap.ui.model.SimpleType.extend("sap.extension.data.Time", {
                constructor: function (this: Time, setting?: IDateTimeSetting): void {
                    sap.ui.model.SimpleType.apply(this, arguments);
                    this.format = setting?.format;
                    if (!this.format) {
                        this.format = DEFAULT_FORMAT_TIME;
                    }
                },
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        if (typeof oValue === "number") {
                            if (oValue >= 0) {
                                let hour: number = Math.floor(oValue / 100);
                                let minute: number = oValue - (hour * 100);
                                return this.format.replace("HH", ibas.strings.fill(hour, 2, "0")).replace("mm", ibas.strings.fill(minute, 2, "0"));
                            } else {
                                return null;
                            }
                        } else if (oValue instanceof globalThis.Date) {
                            return ibas.dates.toString(oValue, this.format);
                        }
                    } else if (sInternalType === "Date" && !ibas.objects.isNull(oValue)) {
                        let value: number = 0;
                        if (typeof oValue === "number") {
                            value = oValue;
                        } else if (typeof oValue === "string") {
                            value = parseInt(oValue.replace(":", ""), 0);
                        }
                        if (value >= 0) {
                            let hour: number = Math.floor(value / 100);
                            let minute: number = value - (hour * 100);
                            value = (hour * 60 * 60 * 1000) + (minute * 60 * 1000);
                            return ibas.dates.valueOf(ibas.dates.valueOf(0).setHours(hour, minute));
                        } else {
                            return null;
                        }
                    }
                    return oValue;
                },
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "number") {
                        return oValue;
                    } else if (typeof oValue === "string") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                        for (let item of oValue) {
                            if (!ibas.numbers.isNumber(item)) {
                                continue;
                            }
                            builder.append(item);
                        }
                        oValue = builder.toString();
                        if (oValue.length > 4) {
                            if (oValue.length <= 6) {
                                oValue = oValue.substring(0, oValue.length - 2);
                            } else {
                                oValue = oValue.substring(0, 4);
                            }
                        }
                        return ibas.numbers.toInt(oValue);
                    } else if (ibas.dates.isDate(oValue)) {
                        return parseInt(ibas.dates.toString(oValue, "HHmm"), 0);
                    }
                    return undefined;
                },
                validateValue(oValue: any): any {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (typeof oValue === "number") {
                        if (!(oValue >= 0 && oValue <= 2400)) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_not_between", 0, 2400));
                        }
                    } else {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            });
            export const DEFAULT_FORMAT_DATETIME: string = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATETIME, null);
            /**
             * 日期时间类型
             */
            sap.ui.model.type.DateTime.extend("sap.extension.data.DateTime", {
                constructor: function (setting?: IDateTimeSetting): void {
                    if (DEFAULT_FORMAT_DATETIME && !setting?.format) {
                        if (!setting) {
                            setting = {};
                        }
                        setting.format = DEFAULT_FORMAT_DATETIME;
                    }
                    sap.ui.model.type.DateTime.call(this, { pattern: setting?.format });
                },
                formatValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === sInternalType) {
                        return oValue;
                    }
                    return sap.ui.model.type.DateTime.prototype.formatValue.apply(this, arguments);
                },
                parseValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "Date") {
                        return oValue;
                    }
                    return sap.ui.model.type.DateTime.prototype.parseValue.apply(this, arguments);
                },
            });
            /**
             * 枚举类型设置
             */
            export interface IEnumSetting extends ITypeSetting {
                /**
                 * 枚举类型
                 */
                enumType: any;
                /**
                 * 枚举值描述（使用后不能解析值）
                 */
                describe?: boolean;
            }
            sap.ui.model.SimpleType.extend("sap.extension.data.Enum", {
                constructor: function (this: Enum, setting?: IEnumSetting): void {
                    sap.ui.model.SimpleType.apply(this);
                    this.describe = setting.describe;
                    this.enumType = setting.enumType;
                },
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        if (this.describe === true) {
                            return ibas.enums.describe(this.enumType, oValue);
                        }
                        return ibas.strings.valueOf(oValue);
                    }
                    return oValue;
                },
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(this: Enum, oValue: any, sInternalType: string): any {
                    if (typeof oValue === "number") {
                        return oValue;
                    }
                    let vValue: any = this.enumType[oValue];
                    if (this.enumType[vValue] === undefined && vValue !== undefined) {
                        return oValue;
                    }
                    vValue = ibas.enums.valueOf(this.enumType, oValue);
                    if (!ibas.objects.isNull(vValue)) {
                        return vValue;
                    }
                    if (this.describe) {
                        for (let item in this.enumType) {
                            if (ibas.numbers.isNumber(item)) {
                                vValue = ibas.enums.describe(this.enumType, item);
                                if (ibas.strings.equals(vValue, oValue)) {
                                    return parseInt(item, 10);
                                }
                            }
                        }
                    }
                    return undefined;
                },
                /** 验证数据 */
                validateValue(oValue: any): Promise<any> {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    // 判断是否存在此值
                    if (!ibas.objects.isNull(this.enumType[oValue])) {
                        return;
                    }
                    for (let item in this.enumType) {
                        if (this.enumType[item] === oValue) {
                            return;
                        }
                    }
                    if (this.describe) {
                        for (let item in this.enumType) {
                            if (ibas.numbers.isNumber(item)) {
                                let vValue: any = ibas.enums.describe(this.enumType, item);
                                if (ibas.strings.equals(vValue, oValue)) {
                                    return;
                                }
                            }
                        }
                    }
                    throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                }
            });
            Enum.extend("sap.extension.data.YesNo", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emYesNo,
                    });
                },
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "boolean") {
                        return oValue === ibas.emYesNo.YES ? true : false;
                    } else {
                        return Enum.prototype.formatValue.apply(this, arguments);
                    }
                },
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "boolean") {
                        return oValue === true ? ibas.emYesNo.YES : ibas.emYesNo.NO;
                    } else {
                        return Enum.prototype.parseValue.apply(this, arguments);
                    }
                }
            });
            Enum.extend("sap.extension.data.DocumentStatus", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emDocumentStatus,
                    });
                },
            });
            Enum.extend("sap.extension.data.BOStatus", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emBOStatus,
                    });
                },
            });
            Enum.extend("sap.extension.data.ApprovalStatus", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emApprovalStatus,
                    });
                },
            });
            Enum.extend("sap.extension.data.ApprovalResult", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emApprovalResult,
                    });
                },
            });
            Enum.extend("sap.extension.data.ApprovalStepStatus", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emApprovalStepStatus,
                    });
                },
            });
            Enum.extend("sap.extension.data.AuthoriseType", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emAuthoriseType,
                    });
                },
            });
            Enum.extend("sap.extension.data.ConditionOperation", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emConditionOperation,
                    });
                },
            });
            Enum.extend("sap.extension.data.ConditionRelationship", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emConditionRelationship,
                    });
                },
            });
            Enum.extend("sap.extension.data.SortType", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emSortType,
                    });
                },
            });
            Enum.extend("sap.extension.data.Direction", {
                constructor: function (this: Enum, describe?: boolean): void {
                    Enum.call(this, {
                        describe: describe,
                        enumType: ibas.emDirection,
                    });
                },
            });
            class ValidatorItem {
                constructor(element: sap.ui.core.Element, property: string) {
                    this.element = element;
                    this.property = property;
                }
                element: sap.ui.core.Element;
                property: string;
                error: Error;
                check(): boolean {
                    try {
                        this.error = null;
                        checkValueType.call(this.element, this.property);
                    } catch (error) {
                        this.error = error;
                    }
                    return this.error ? false : true;
                }
            }
            function checkValueType(this: sap.ui.core.Element, property: string): void {
                let bindingInfo: {
                    parts: {
                        path: string,
                        type: sap.ui.model.SimpleType,
                    }[]
                } = this.getBindingInfo(property);
                if (bindingInfo && bindingInfo.parts instanceof Array) {
                    let pValue: any = this.getProperty(property);
                    for (let item of bindingInfo.parts) {
                        let type: any = item.type;
                        if (typeof type === "function") {
                            type = new type;
                        }
                        if (type instanceof sap.ui.model.SimpleType) {
                            try {
                                type.validateValue(type.parseValue(pValue, typeof pValue));
                            } catch (error) {
                                throw error;
                            }
                        }
                    }
                }
            }
            export class Validator {
                constructor(elements: sap.ui.core.Element[], properties: string[]) {
                    this.properties = ibas.arrays.create(properties);
                    this.elements = ibas.arrays.create(elements);
                }
                /** 检查的属性 */
                properties: string[];
                /** 检查的属性 */
                elements: sap.ui.core.Element[];
                /** 校验项目 */
                items: ValidatorItem[];

                private validItems(elements: sap.ui.core.Element[]): void {
                    if (elements instanceof Array) {
                        for (let element of elements) {
                            if (element instanceof sap.m.InputBase) {
                                for (let property of this.properties) {
                                    let vItem: ValidatorItem = new ValidatorItem(element, property);
                                    if (!vItem.check()) {
                                        this.items.push(vItem);
                                        element.setValueState(sap.ui.core.ValueState.Error);
                                        element.setValueStateText(vItem.error.message);
                                    }
                                }
                            } else if (element instanceof sap.ui.layout.DynamicSideContent) {
                                this.validItems(element.getMainContent());
                                this.validItems(element.getSideContent());
                            } else if (element instanceof sap.m.Page) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.m.FlexBox) {
                                this.validItems(element.getItems());
                            } else if (element instanceof sap.m.ListBase) {
                                this.validItems(element.getItems());
                            } else if (element instanceof sap.m.Panel) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.m.Wizard) {
                                for (let item of element.getSteps()) {
                                    this.validItems(item.getContent());
                                }
                            } else if (element instanceof sap.m.TabContainer) {
                                this.validItems(element.getItems());
                            } else if (element instanceof sap.m.TabContainerItem) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.layout.BlockLayout) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.layout.FixFlex) {
                                this.validItems(element.getFixContent());
                            } else if (element instanceof sap.ui.layout.Grid) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.layout.Splitter) {
                                this.validItems(element.getContentAreas());
                            } else if (element instanceof sap.ui.layout.HorizontalLayout) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.layout.VerticalLayout) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.layout.cssgrid.CSSGrid) {
                                this.validItems(element.getItems());
                            } else if (element instanceof sap.ui.layout.form.SimpleForm) {
                                this.validItems(element.getContent());
                            } else if (element instanceof sap.ui.table.Table) {
                                for (let row of element.getRows()) {
                                    this.validItems(row.getCells());
                                }
                            }
                        }
                    }
                }
                getErrors(): Error[] {
                    let errors: Error[] = [];
                    if (this.items instanceof Array) {
                        for (let item of this.items) {
                            if (item.error) {
                                errors.push(item.error);
                            }
                        }
                    }
                    return errors;
                }
                valid(): boolean {
                    this.items = [];
                    this.validItems(this.elements);
                    if (this.items && this.items.length > 0) {
                        return false;
                    }
                    return true;
                }
            }

            /**
             * 数据状态
             */
            export function status(documentStatus: ibas.emDocumentStatus, approvalStatus?: ibas.emApprovalStatus, canceled?: ibas.emYesNo, deleted?: ibas.emYesNo): sap.ui.core.ValueState {
                // tslint:disable-next-line: triple-equals
                if (canceled == ibas.emYesNo.YES) {
                    return sap.ui.core.ValueState.Error;
                }
                // tslint:disable-next-line: triple-equals
                if (deleted == ibas.emYesNo.YES) {
                    return sap.ui.core.ValueState.Error;
                }
                // tslint:disable-next-line: triple-equals
                if (approvalStatus == ibas.emApprovalStatus.CANCELLED
                    // tslint:disable-next-line: triple-equals
                    || approvalStatus == ibas.emApprovalStatus.REJECTED
                    // tslint:disable-next-line: triple-equals
                    || approvalStatus == ibas.emApprovalStatus.RETURNED) {
                    return sap.ui.core.ValueState.Error;
                    // tslint:disable-next-line: triple-equals
                } else if (approvalStatus == ibas.emApprovalStatus.PROCESSING) {
                    return sap.ui.core.ValueState.Warning;
                }
                // tslint:disable-next-line: triple-equals
                if (documentStatus == ibas.emDocumentStatus.PLANNED) {
                    return sap.ui.core.ValueState.Warning;
                    // tslint:disable-next-line: triple-equals
                } else if (documentStatus == ibas.emDocumentStatus.RELEASED) {
                    return sap.ui.core.ValueState.Information;
                    // tslint:disable-next-line: triple-equals
                } else if (documentStatus == ibas.emDocumentStatus.FINISHED
                    // tslint:disable-next-line: triple-equals
                    || documentStatus == ibas.emDocumentStatus.CLOSED) {
                    return sap.ui.core.ValueState.Success;
                }
                return sap.ui.core.ValueState.None;
            }

            const instanceMaps: Map<any, sap.ui.model.SimpleType> = new Map<any, sap.ui.model.SimpleType>();
            /**
             * 格式化值
             * @param type 目标类型
             * @param value 值
             * @param internalType 内部类型
             */
            export function formatValue(type: any, value: any, internalType: string): any {
                if (!ibas.objects.isAssignableFrom(type, sap.ui.model.SimpleType)) {
                    return value;
                }
                let instance: sap.ui.model.SimpleType = instanceMaps.get(type);
                if (ibas.objects.isNull(instance)) {
                    instance = new type;
                    if (instance instanceof sap.ui.model.SimpleType) {
                        instanceMaps.set(type, instance);
                    }
                }
                return instance.formatValue(value, internalType);
            }
        }
    }
}