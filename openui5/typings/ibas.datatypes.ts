/**
 * Type definitions for OpenUI5 1.40
 * Project: http://openui5.org/
 * Definitions by: neil.zhou
 */
import * as ibas from "ibas/index";
/**
 * 基础验证方法
 */
export namespace validation {
    /**
     * 是否为空
     */
    export function isNotEmpty(value: any): boolean {
        return (value !== null && value !== undefined && value !== "");
    }
    /**
     * 是否数字类型
     */
    export function isNumeric(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[-\+]?\d+(\.\d+)?$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 是否小数类型
     */
    export function isDecimal(value: any, decimalPlaces: number): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        if (decimalPlaces === undefined || decimalPlaces === null || decimalPlaces < 0) {
            // 获取配制文件中小数位数
            decimalPlaces = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES, 6);
        }
        let rValue: any = "^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1," + decimalPlaces + "}))$";
        let pValue: any = new RegExp(rValue);
        let result: any = value.match(pValue);
        if (result === null) {
            return true;
        }
        return true;
    }
    /**
     * 是否字母和数字
     */
    export function isAlphanumeric(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/[a-zA-Z0-9]+/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 是否Email地址
     */
    export function isEmail(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 是否电话类型
     */
    export function isPhone(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配移动电话类型
     */
    export function isMobile(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15\d{9})|(18\d{9}))$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 联系电话(手机/电话皆可)验证
     */
    export function isTelephone(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        if (validation.isMobile(value) || validation.isPhone(value)) {
            return true;
        }
        return false;
    }
    /**
     * 匹配英文
     */
    export function isEnglish(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[A-Za-z]+$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配邮编
     */
    export function isZipCode(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[0-9]{6}$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配URL地址
     */
    export function isUrl(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
     */
    export function isPassword(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[a-zA-Z]\w{6,12}$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配身份证号码
     */
    export function isPersonalID(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        if (isNaN(value)) { return false; }
        let len: any = value.length;
        let re: any;
        if (len === 15) {
            re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
        } else if (len === 18) {
            re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
        } else {
            return false;
        }
        let a: any = value.match(re);
        if (a != null) {
            let D: any;
            let B: any;
            if (len === 15) {
                D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
                B = D.getYear().tostring() === a[3] && (D.getMonth() + 1) === Number(a[4]) && D.getDate() === Number(a[5]);
            } else {
                D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
                B = D.getFullYear().tostring() === a[3] && (D.getMonth() + 1) === Number(a[4]) && D.getDate() === Number(a[5]);
            }
            if (!B) {
                return false;
            }
        }
        if (!re.test(value)) {
            return false;
        }
        return true;
    }
    /**
     * 匹配汉字
     */
    export function isChinese(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[\u4e00-\u9fa5]+$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配中文字符(包括汉字和字符)
     */
    export function isChineseChar(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[\u0391-\uFFE5]+$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 日期
     */
    export function isDate(value: any): boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        // tslint:disable-next-line:max-line-length
        let rValue: any = "^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$";
        let pValue: any = new RegExp(rValue);
        let result: any = value.match(pValue);
        if (result === null) {
            return false;
        }
        return true;
    }
}
/**
 * uI 触发错误验证
 */
sap.ui.getCore().attachValidationError("", (oEvent: any): void => {
    let control: any = oEvent.getParameter("element");
    let message: string = oEvent.getParameter("message");
    if (control && control.setValueState) {
        control.setValueState("Error");
        if (message) {
            control.setValueStateText(message);
        }
        control.focus();
    }
});
/**
 * 触发正确验证
 */
sap.ui.getCore().attachValidationSuccess("", (oEvent: any): void => {
    let control: any = oEvent.getParameter("element");
    if (control && control.setValueState) {
        control.setValueState("None");
    }
});
export class ValidateResult {
    status: boolean;
    message: string;
}
/**
 * 数据类型设置
 */
export interface IDataTypeSetting {
    /* 是否不允许为空 */
    notEmpty?: boolean;
    /* 绑定属性的描述 */
    description?: string;
    /* 验证方法 */
    validateValue?(oValue: any): Function;
}
/**
 * 数据类型基类
 */
export abstract class DataType extends sap.ui.model.SimpleType {
    constructor(settings?: IDataTypeSetting) {
        super();
        if (ibas.objects.isNull(settings)) {
            return;
        }
        this.notEmpty = settings.notEmpty;
        this.description = settings.description;
        if (settings.validateValue instanceof Function) {
            this.validateValue = settings.validateValue;
        }
    }
    notEmpty: boolean = false;
    description: string = "";
    formatValue(oValue: any): any {
        return oValue;
    }
    parseValue(oValue: any): any {
        return oValue;
    }
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (this.notEmpty && !validation.isNotEmpty(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_not_empty_error", this.description);
            this.fireValidationError(control, result.message);
            return result;
        }
        return result;
    }
    validateValue(oValue: any): any {
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
    fireValidationError(control: sap.ui.core.Control, message?: string): sap.ui.core.Core {
        if (control !== null && control !== undefined) {
            let arg: any = {
                element: control,
                message: message,
            };
            return sap.ui.getCore().fireValidationError(arg);
        }
    }
}

/**
 * 数字类型设置
 */
export interface INumericSetting extends IDataTypeSetting {
    /** 最小值 */
    minValue?: number;
    /** 最大值 */
    maxValue?: number;
}
/**
 * 数字类型
 */
export class Numeric extends DataType {
    constructor(settings?: INumericSetting) {
        super(settings);
        if (ibas.objects.isNull(settings)) {
            return;
        }
        this.minValue = settings.minValue;
        this.maxValue = settings.maxValue;
    }
    minValue: number = undefined;
    maxValue: number = undefined;
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isNumeric(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_numeric_error");
            this.fireValidationError(control, result.message);
        }
        if (validation.isNotEmpty(oValue) && this.minValue !== undefined && !(oValue > this.minValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_numeric_minvalue_error", this.description,
                this.minValue);
            this.fireValidationError(control, result.message);
        }
        if (validation.isNotEmpty(oValue) && this.maxValue !== undefined && !(oValue < this.maxValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_numeric_maxvalue_error", this.description,
                this.maxValue);
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 小数类型设置
 */
export interface IDecimalSetting extends IDataTypeSetting {
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
export class Decimal extends DataType {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        if (ibas.objects.isNull(settings)) {
            return;
        }
        this.decimalPlaces = settings.decimalPlaces;
        if (ibas.objects.isNull(this.decimalPlaces)) {
            this.decimalPlaces = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES, 6);
        }
    }
    minValue: number = undefined;
    maxValue: number = undefined;
    decimalPlaces: number = undefined;
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isDecimal(oValue, this.decimalPlaces)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_decimal_decimalPlaces_error", this.description,
                this.decimalPlaces);
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 字母数字类型
 */
export class Alphanumeric extends DataType {
}
/**
 * 日期类型设置
 */
export interface IDateTimeSetting extends IDataTypeSetting {
    /** 格式 */
    format?: string;
}
/**
 * 日期类型
 */
export class DateTime extends DataType {
    constructor(settings?: IDateTimeSetting) {
        super(settings);
        if (ibas.objects.isNull(settings)) {
            return;
        }
        this.format = settings.format;
    }
    format?: string;
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isDate(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_datetime_error", this.description);
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 时间类型设置
 */
export interface ITimeSetting extends IDataTypeSetting {
    /** 格式 */
    format?: string;
}
/**
 * 时间类型
 */
export class Time extends Numeric {
    constructor(settings?: ITimeSetting) {
        super(settings);
        if (ibas.objects.isNull(settings)) {
            return;
        }
        this.format = settings.format;
    }
    format?: string;
}
/**
 * 价格类型
 */
export class Price extends Decimal {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        // 取此类型小数位设置
        let tmp: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_PRICE);
        if (!ibas.objects.isNull(tmp)) {
            this.decimalPlaces = tmp;
        }
    }
}
/**
 * 数量类型
 */
export class Quantity extends Decimal {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        // 取此类型小数位设置
        let tmp: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY);
        if (!ibas.objects.isNull(tmp)) {
            this.decimalPlaces = tmp;
        }
    }
}
/**
 * 率类型
 */
export class Rate extends Decimal {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        // 取此类型小数位设置
        let tmp: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_RATE);
        if (!ibas.objects.isNull(tmp)) {
            this.decimalPlaces = tmp;
        }
    }
}
/**
 * 总计类型
 */
export class Sum extends Decimal {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        // 取此类型小数位设置
        let tmp: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_SUM);
        if (!ibas.objects.isNull(tmp)) {
            this.decimalPlaces = tmp;
        }
    }
}
/**
 * 单位数量类型
 */
export class Measurement extends Decimal {
    constructor(settings?: IDecimalSetting) {
        super(settings);
        // 取此类型小数位设置
        let tmp: number = ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_MEASUREMENT);
        if (!ibas.objects.isNull(tmp)) {
            this.decimalPlaces = tmp;
        }
    }
}
/**
 * Percentage类型
 */
export class Percentage extends Decimal {
}
/**
 * 邮箱类型
 */
export class Email extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isEmail(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_email_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 电话类型
 */
export class Phone extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isTelephone(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_phone_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 连接类型
 */
export class Link extends Alphanumeric {
}
/**
 * 地址类型
 */
export class Address extends Alphanumeric {
}
/**
 * 图片类型
 */
export class Image extends DataType {
}
/**
 * Bytes类型
 */
export class Bytes extends DataType {
}
/**
 * Memo类型
 */
export class Memo extends DataType {
}
/**
 * 移动电话类型
 */
export class Mobile extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isMobile(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_phone_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 联系电话类型(手机/电话)
 */
export class Telphone extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isTelephone(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_phone_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 邮编类型
 */
export class ZipCode extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isZipCode(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_zip_code_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * URL地址类型
 */
export class Url extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isUrl(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_url_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 密码类型
 * 以字母开头，长度在6-12之间，只能包含字符、数字和下划线
 */
export class Password extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isPassword(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_password_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}
/**
 * 身份证号码类型
 */
export class PersonalID extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResult {
        super.callValidate(oValue, control);
        let result: ValidateResult = new ValidateResult();
        result.status = true;
        if (!validation.isPersonalID(oValue)) {
            result.status = false;
            result.message = ibas.i18n.prop("data_types_msg_PersonalID_error");
            this.fireValidationError(control, result.message);
        }
        return result;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let result: ValidateResult = this.callValidate(oValue);
        if (!result.status) {
            throw new sap.ui.model.ValidateException(result.message);
        }
    }
}