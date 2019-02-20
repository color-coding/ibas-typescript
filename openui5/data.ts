/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
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
                        throw new RangeError();
                    }
                }
                if (ibas.objects.isNull(oValue)) {
                    return;
                }
                if (typeof oValue === "string") {
                    if (this.maxLength && oValue.length > this.maxLength) {
                        throw new RangeError();
                    }
                    if (this.minLength && oValue.length < this.minLength) {
                        throw new RangeError();
                    }
                    if (this.regExp) {
                        if (oValue.match(this.regExp) === null) {
                            throw new RangeError();
                        }
                    }
                } else {
                    throw new TypeError();
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
                if (sInternalType === "number") {
                    return ibas.numbers.toInt(oValue);
                } else if (sInternalType === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    return ibas.numbers.toInt(oValue);
                }
                return oValue;
            }
            /** 验证数据 */
            protected validate(oValue: any): void {
                if (ibas.objects.isNull(oValue)) {
                    return;
                }
                if (typeof oValue === "number") {
                    if (this.minValue && oValue < this.minValue) {
                        throw new RangeError();
                    }
                    if (this.maxValue && oValue > this.maxValue) {
                        throw new RangeError();
                    }
                } else {
                    throw new TypeError();
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
                    this.decimalPlaces = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES + "|" + ibas.objects.getTypeName(this), this.decimalPlaces);
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
                    return ibas.strings.valueOf(ibas.numbers.round(oValue, this.decimalPlaces));
                }
                return ibas.numbers.round(oValue, this.decimalPlaces);
            }
            /**
             * 格式化值到模型
             * @param oValue 值
             * @param sInternalType 视图类型
             */
            parseValue(oValue: any, sInternalType: string): any {
                if (sInternalType === "number") {
                    return ibas.numbers.round(oValue, this.decimalPlaces);
                } else if (sInternalType === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    return ibas.numbers.round(parseFloat(oValue), this.decimalPlaces);
                }
                return oValue;
            }
            /** 验证数据 */
            protected validate(oValue: any): void {
                if (ibas.objects.isNull(oValue)) {
                    return;
                }
                if (typeof oValue === "number") {
                    if (this.minValue && oValue < this.minValue) {
                        throw new RangeError();
                    }
                    if (this.maxValue && oValue > this.maxValue) {
                        throw new RangeError();
                    }
                } else {
                    throw new TypeError();
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
                if (sInternalType === "number") {
                    return ibas.numbers.round(oValue, this.decimalPlaces);
                } else if (sInternalType === "string" || typeof oValue === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    oValue = ibas.strings.valueOf(oValue);
                    if (ibas.strings.isWith(oValue, undefined, "%")) {
                        oValue = oValue.substring(0, oValue.length - 1);
                    }
                    oValue = parseFloat(oValue);
                    return ibas.numbers.round(oValue, this.decimalPlaces);
                }
                return oValue;
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
        export class DateTime extends Type {
            /**
             * 默认格式：yyyy-MM-dd
             */
            static DEFAULT_FORMAT = "yyyy-MM-dd";
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
                    this.format = DateTime.DEFAULT_FORMAT;
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
                }
                return oValue;
            }
            /**
             * 格式化值到模型
             * @param oValue 值
             * @param sInternalType 视图类型
             */
            parseValue(oValue: any, sInternalType: string): any {
                if (sInternalType === "date" || oValue instanceof Date) {
                    return oValue;
                } else if (sInternalType === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    return ibas.dates.valueOf(oValue);
                }
                return oValue;
            }
            /** 验证数据 */
            protected validate(oValue: any): void {
                if (ibas.objects.isNull(oValue)) {
                    return;
                }
                if (!(oValue instanceof Date)) {
                    throw new TypeError();
                }
            }
        }
        /**
         * 时间类型设置
         */
        export interface ITimeSetting extends ITypeSetting {
            /** 格式 */
            format?: string;
        }
        /**
         * 时间类型
         */
        export class Time extends Type {
            /**
             * 默认格式：HH:mm
             */
            static DEFAULT_FORMAT = "HH:mm";
            /**
             * 时间类型
             * @param setting 设置
             */
            constructor(setting?: ITimeSetting) {
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
                if (ibas.objects.isNull(oValue)) {
                    return undefined;
                }
                if (sInternalType === "string") {
                    if (typeof oValue === "number") {
                        let time: string = String(this.format);
                        let hour: number = Math.floor(oValue / 100);
                        let minute: number = oValue - (hour * 100);
                        return time.replace("HH", ibas.strings.valueOf(hour))
                            .replace("mm", ibas.strings.fill(minute, 2, "0"));
                    } else {
                        return oValue;
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
                if (sInternalType === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    if (typeof oValue === "string") {
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
                    }
                    return ibas.numbers.toInt(oValue);
                }
                return oValue;
            }
            /** 验证数据 */
            protected validate(oValue: any): void {
                if (ibas.objects.isNull(oValue)) {
                    return;
                }
                if (typeof oValue === "number") {
                    if (!(oValue >= 0 && oValue <= 2400)) {
                        throw new TypeError();
                    }
                } else {
                    throw new TypeError();
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
                if (ibas.objects.isNull(oValue)) {
                    return undefined;
                } if (sInternalType === "string") {
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
                if (sInternalType === "string") {
                    if (ibas.strings.isEmpty(oValue)) {
                        return undefined;
                    }
                    return ibas.enums.valueOf(this.enumType, oValue);
                }
                return oValue;
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
                throw new TypeError();
            }
        }
        /**
         * 指定的枚举设置
         */
        export interface ISpecifiedEnumSetting extends ITypeSetting {
            /**
             * 枚举值描述（使用后不能解析值）
             */
            describe?: boolean;
        }
        /**
         * 是否类型
         */
        export class YesNo extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emYesNo,
                    describe: setting ? setting.describe : undefined,
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
                if (sInternalType === "boolean") {
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
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emDocumentStatus,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 对象状态类型
         */
        export class BOStatus extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emBOStatus,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 审批状态类型
         */
        export class ApprovalStatus extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emApprovalStatus,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 审批结果类型
         */
        export class ApprovalResult extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emApprovalResult,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 审批步骤状态类型
         */
        export class ApprovalStepStatus extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emApprovalStepStatus,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 权限类型类型
         */
        export class AuthoriseType extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emAuthoriseType,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 条件操作类型
         */
        export class ConditionOperation extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emConditionOperation,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 条件关系类型
         */
        export class ConditionRelationship extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emConditionRelationship,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 排序方式类型
         */
        export class SortType extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emSortType,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
        /**
         * 方向类型
         */
        export class Direction extends Enum {
            constructor(setting?: ISpecifiedEnumSetting) {
                super({
                    enumType: ibas.emDirection,
                    describe: setting ? setting.describe : undefined,
                });
            }
        }
    }
}