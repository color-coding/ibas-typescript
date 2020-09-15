/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace data {
            /**
             * 数据类型设置
             */
            export interface ITypeSetting {
                /* 验证之后 */
                onValidated?(error: Error): sap.ui.model.ValidateException | void;
            }
            /**
             * 数据类型基类
             */
            export abstract class Type extends sap.ui.model.SimpleType {
                constructor(setting?: ITypeSetting) {
                    super();
                    if (!ibas.objects.isNull(setting)) {
                        this.onValidated = setting.onValidated;
                    }
                }
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    return oValue;
                }
                /**
                 * 验证值
                 * @param oValue 值
                 */
                validateValue(oValue: any): any {
                    try {
                        this.validate(oValue);
                    } catch (error) {
                        if (this.onValidated instanceof Function) {
                            let result: sap.ui.model.ValidateException | void = this.onValidated(error);
                            if (!(result instanceof sap.ui.model.ValidateException)) {
                                result = new sap.ui.model.ValidateException(error.message);
                            }
                            throw result;
                        } else {
                            throw new sap.ui.model.ValidateException(error.message);
                        }
                    }
                }
                private onValidated: (error: Error) => sap.ui.model.ValidateException | void;
                protected abstract validate(oValue: any): void;
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
                /**
                 * 验证值
                 * @param oValue 值
                 */
                validate?(oValue: any): void;
            }
            /**
             * 未知类型
             */
            export class Unknown extends Type {
                constructor(setting: IUnknownSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.formatValue = setting.formatValue;
                        this.parseValue = setting.parseValue;
                        this._validate = setting.validate;
                    }
                }
                private _validate: (oValue: any) => void;
                protected validate(oValue: any): void {
                    if (this._validate instanceof Function) {
                        this._validate(oValue);
                    }
                }
            }
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
            /**
             * 字母数字类型
             */
            export class Alphanumeric extends Type {
                /**
                 * 字母数字类型
                 * @param setting 设置
                 */
                constructor(setting?: IAlphanumericSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.notEmpty = setting.notEmpty;
                        this.maxLength = setting.maxLength;
                        this.minLength = setting.minLength;
                        this.regExp = setting.regExp;
                    }
                }
                /** 允许空 */
                notEmpty: boolean;
                /** 最小长度 */
                minLength: number;
                /** 最大长度 */
                maxLength: number;
                /** 正则表达式 */
                regExp?: RegExp;
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        // 需要字符串类型
                        if (ibas.objects.isNull(oValue)) {
                            return undefined;
                        }
                        return ibas.strings.valueOf(oValue);
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (ibas.objects.isNull(oValue)) {
                        return undefined;
                    }
                    return ibas.strings.valueOf(oValue);
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                    if (this.notEmpty === true) {
                        if (ibas.strings.isEmpty(oValue)) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_is_empty"));
                        }
                    }
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (typeof oValue === "string") {
                        if (this.maxLength && oValue.length > this.maxLength) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_length_more_than", this.maxLength));
                        }
                        if (this.minLength && oValue.length < this.minLength) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_length_less_than", this.minLength));
                        }
                        if (this.regExp) {
                            if (oValue.match(this.regExp) === null) {
                                throw new RangeError(ibas.i18n.prop("openui5_data_value_not_match", this.regExp.source));
                            }
                        }
                    } else {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            }
            /**
             * 数字类型设置
             */
            export interface INumericSetting extends ITypeSetting {
                /** 最小值 */
                minValue?: number;
                /** 最大值 */
                maxValue?: number;
            }
            /**
             * 数字类型
             */
            export class Numeric extends Type {
                /**
                 * 数字类型
                 * @param setting 设置
                 */
                constructor(setting?: INumericSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.minValue = setting.minValue;
                        this.maxValue = setting.maxValue;
                    }
                }
                /** 最小值 */
                minValue: number;
                /** 最大值 */
                maxValue: number;
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        // 需要字符串类型
                        if (ibas.objects.isNull(oValue)) {
                            return undefined;
                        }
                        return ibas.numbers.toString(oValue, 0);
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "number") {
                        return Math.floor(oValue);
                    } else if (typeof oValue === "string") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        return ibas.numbers.toInt(oValue);
                    }
                    return 0;
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (typeof oValue === "number" && !isNaN(oValue)) {
                        if (typeof this.minValue === "number" && oValue < this.minValue) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_less_than", this.minValue));
                        }
                        if (typeof this.maxValue === "number" && oValue > this.maxValue) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_more_than", this.maxValue));
                        }
                    } else {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            }
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
            /**
             * 小数类型
             */
            export class Decimal extends Type {
                /**
                 * 小数类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.minValue = setting.minValue;
                        this.maxValue = setting.maxValue;
                        this.decimalPlaces = setting.decimalPlaces;
                    }
                    if (ibas.objects.isNull(this.decimalPlaces)) {
                        this.decimalPlaces = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES, 6);
                        this.decimalPlaces = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES + "|" + ibas.objects.nameOf(this), this.decimalPlaces);
                    }
                }
                /** 最小值 */
                minValue: number;
                /** 最大值 */
                maxValue: number;
                /** 小数位 */
                decimalPlaces: number;
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        // 需要字符串类型
                        if (ibas.objects.isNull(oValue)) {
                            return undefined;
                        }
                        return ibas.numbers.toString(oValue, this.decimalPlaces);
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "number") {
                        return ibas.numbers.round(oValue, this.decimalPlaces);
                    } else if (typeof oValue === "string") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        return ibas.numbers.round(ibas.numbers.valueOf(oValue), this.decimalPlaces);
                    }
                    return 0.0;
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (typeof oValue === "number" && !isNaN(oValue)) {
                        if (typeof this.minValue === "number" && oValue < this.minValue) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_less_than", this.minValue));
                        }
                        if (typeof this.maxValue === "number" && oValue > this.maxValue) {
                            throw new RangeError(ibas.i18n.prop("openui5_data_value_more_than", this.maxValue));
                        }
                    } else {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            }
            /**
             * 价格类型
             */
            export class Price extends Decimal {
                /**
                 * 价格类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                }
            }
            /**
             * 数量类型
             */
            export class Quantity extends Decimal {
                /**
                 * 数量类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                }
            }
            /**
             * 率类型
             */
            export class Rate extends Decimal {
                /**
                 * 率类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                }
            }
            /**
             * 总计类型
             */
            export class Sum extends Decimal {
                /**
                 * 总计类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                }
            }
            /**
             * 单位数量类型
             */
            export class Measurement extends Decimal {
                /**
                 * 单位数量类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                }
            }
            /**
             * 百分比类型
             */
            export class Percentage extends Decimal {
                /**
                 * 百分比类型
                 * @param setting 设置
                 */
                constructor(setting?: IDecimalSetting) {
                    super(setting);
                    if (ibas.objects.isNull(this.decimalPlaces)) {
                        this.decimalPlaces = 2;
                    }
                }
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        oValue = ibas.numbers.round(oValue * 100, this.decimalPlaces - 2);
                        return oValue + "%";
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "string") {
                        if (ibas.strings.isWith(oValue, undefined, "%")) {
                            oValue = oValue.substring(0, oValue.length - 1);
                        }
                        oValue = parseFloat(oValue) / 100;
                        return super.parseValue(oValue, sInternalType);
                    }
                    return super.parseValue.apply(this, arguments);
                }
            }
            /**
             * 日期时间类型设置
             */
            export interface IDateTimeSetting extends ITypeSetting {
                /** 格式 */
                format?: string;
            }
            /**
             * 日期时间类型
             */
            export class Date extends Type {
                /**
                 * 默认格式：yyyy-MM-dd
                 */
                static DEFAULT_FORMAT = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE, "yyyy-MM-dd");
                /**
                 * 日期时间类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.format = setting.format;
                    }
                    if (ibas.strings.isEmpty(this.format)) {
                        this.format = Date.DEFAULT_FORMAT;
                    }
                }
                /** 格式 */
                format: string;
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        if (ibas.objects.isNull(oValue)) {
                            return undefined;
                        }
                        if (this.format) {
                            return ibas.dates.toString(oValue, this.format);
                        } else {
                            return ibas.dates.toString(oValue);
                        }
                    } else if (sInternalType === "number") {
                        return ibas.dates.valueOf(oValue).getTime();
                    } else if (sInternalType === "Date") {
                        if (typeof oValue === "string" || typeof oValue === "number") {
                            return ibas.dates.valueOf(oValue);
                        }
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (ibas.dates.isDate(oValue)) {
                        return oValue;
                    } else if (typeof oValue === "string" || typeof oValue === "number") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        return ibas.dates.valueOf(oValue);
                    }
                    return undefined;
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (!ibas.dates.isDate(oValue)) {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            }
            /**
             * 时间类型
             */
            export class Time extends Type {
                /**
                 * 默认格式：HH:mm
                 */
                static DEFAULT_FORMAT = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_TIME, "HH:mm");
                /**
                 * 时间类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.format = setting.format;
                    }
                    if (ibas.strings.isEmpty(this.format)) {
                        this.format = Time.DEFAULT_FORMAT;
                    }
                }
                /** 格式 */
                format: string;
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
                }
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
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
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
            }
            /**
             * 日期时间类型
             */
            export class DateTime extends Type {
                /**
                 * 默认格式：yyyy-MM-dd HH:ss
                 */
                static DEFAULT_FORMAT = Date.DEFAULT_FORMAT + " " + Time.DEFAULT_FORMAT;
                /**
                 * 日期时间类型
                 * @param setting 设置
                 */
                constructor(setting?: IDateTimeSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.format = setting.format;
                    }
                    if (ibas.strings.isEmpty(this.format)) {
                        this.format = Date.DEFAULT_FORMAT;
                    }
                }
                /** 格式 */
                format: string;
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "string") {
                        if (ibas.objects.isNull(oValue)) {
                            return undefined;
                        }
                        if (this.format) {
                            return ibas.dates.toString(oValue, this.format);
                        } else {
                            return ibas.dates.toString(oValue);
                        }
                    } else if (sInternalType === "number") {
                        return ibas.dates.valueOf(oValue).getTime();
                    } else if (sInternalType === "Date") {
                        if (typeof oValue === "string" || typeof oValue === "number") {
                            return ibas.dates.valueOf(oValue);
                        }
                    }
                    return oValue;
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (ibas.dates.isDate(oValue)) {
                        return oValue;
                    } else if (typeof oValue === "string" || typeof oValue === "number") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        return ibas.dates.valueOf(oValue);
                    }
                    return undefined;
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                    if (ibas.objects.isNull(oValue)) {
                        return;
                    }
                    if (!ibas.dates.isDate(oValue)) {
                        throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                    }
                }
            }
            /**
             * 枚举类型设置
             */
            export interface IEnumSetting extends ITypeSetting {
                /** 枚举类型 */
                enumType: any;
                /**
                 * 枚举值描述（使用后不能解析值）
                 */
                describe?: boolean;
            }
            /**
             * 枚举类型
             */
            export class Enum extends Type {
                /**
                 * 枚举类型
                 * @param setting 设置
                 */
                constructor(setting: IEnumSetting) {
                    super(setting);
                    if (!ibas.objects.isNull(setting)) {
                        this.enumType = setting.enumType;
                        this.describe = setting.describe;
                    }
                }
                /** 枚举类型 */
                enumType: any;
                /**
                 * 枚举值描述（使用后不能解析值）
                 */
                describe: boolean;
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
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (this.describe === true) {
                        throw new Error("Method not implemented.");
                    }
                    if (typeof oValue === "string") {
                        if (ibas.strings.isEmpty(oValue)) {
                            return undefined;
                        }
                        return ibas.enums.valueOf(this.enumType, oValue);
                    } else if (typeof oValue === "number") {
                        return oValue;
                    }
                    return undefined;
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
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
                    throw new TypeError(ibas.i18n.prop("openui5_data_value_type_error", ibas.objects.nameOf(this)));
                }
            }
            /**
             * 是否类型
             */
            export class YesNo extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emYesNo,
                        describe: describe,
                    });
                }
                /**
                 * 格式化值到视图
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                formatValue(oValue: any, sInternalType: string): any {
                    if (sInternalType === "boolean") {
                        return oValue === ibas.emYesNo.YES ? true : false;
                    } else {
                        return super.formatValue(oValue, sInternalType);
                    }
                }
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (typeof oValue === "boolean") {
                        return oValue === true ? ibas.emYesNo.YES : ibas.emYesNo.NO;
                    } else {
                        return super.parseValue(oValue, sInternalType);
                    }
                }
            }
            /**
             * 单据状态类型
             */
            export class DocumentStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emDocumentStatus,
                        describe: describe,
                    });
                }
            }
            /**
             * 对象状态类型
             */
            export class BOStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emBOStatus,
                        describe: describe,
                    });
                }
            }
            /**
             * 审批状态类型
             */
            export class ApprovalStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emApprovalStatus,
                        describe: describe,
                    });
                }
            }
            /**
             * 审批结果类型
             */
            export class ApprovalResult extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emApprovalResult,
                        describe: describe,
                    });
                }
            }
            /**
             * 审批步骤状态类型
             */
            export class ApprovalStepStatus extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emApprovalStepStatus,
                        describe: describe,
                    });
                }
            }
            /**
             * 权限类型类型
             */
            export class AuthoriseType extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emAuthoriseType,
                        describe: describe,
                    });
                }
            }
            /**
             * 条件操作类型
             */
            export class ConditionOperation extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emConditionOperation,
                        describe: describe,
                    });
                }
            }
            /**
             * 条件关系类型
             */
            export class ConditionRelationship extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emConditionRelationship,
                        describe: describe,
                    });
                }
            }
            /**
             * 排序方式类型
             */
            export class SortType extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emSortType,
                        describe: describe,
                    });
                }
            }
            /**
             * 方向类型
             */
            export class Direction extends Enum {
                /**
                 * 构造
                 * @param describe 使用描述，当true时，显示语言描述，但不能使用双向绑定
                 */
                constructor(describe?: boolean) {
                    super({
                        enumType: ibas.emDirection,
                        describe: describe,
                    });
                }
            }
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
                        type: sap.extension.data.Type,
                    }[]
                } = this.getBindingInfo(property);
                if (bindingInfo && bindingInfo.parts instanceof Array) {
                    let pValue: any = this.getProperty(property);
                    for (let item of bindingInfo.parts) {
                        let type: any = item.type;
                        if (typeof type === "function") {
                            type = new type;
                        }
                        if (type instanceof Type) {
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
        }
    }
}