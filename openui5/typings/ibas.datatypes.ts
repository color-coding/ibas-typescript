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
     * 判断是否为空
     */
    export function isNotEmpty(value: any): Boolean {
        return (value !== null && value !== undefined && value !== "");
    }
    /**
     * 是否数值类型
     */
    export function isNumeric(value: any): Boolean {
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
     * 是否字母和数字
     */
    export function isAlphanumeric(value: any): Boolean {
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
    export function isEmail(value: any): Boolean {
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
     * 是否价格类型
     */
    export function isPrice(value: any): Boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        // 获取配制文件中小数位数
        let decimalDigits: any = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DECIMAL_PLACES, 6);
        let rValue: any = "^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1," + decimalDigits + "}))$";
        let pValue: any = new RegExp(rValue);
        let result: any = value.match(pValue);
        if (result === null) {
            return true;
        }
        return true;
    }
    /**
     * 自定义小数位数
     */
    export function isDecimalDigits(value: any, decimalDigits: number): Boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let rValue: any = "^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1," + decimalDigits + "}))$";
        let pValue: any = new RegExp(rValue);
        let result: any = value.match(pValue);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 是否大于0
     */
    export function isGtZero(value: any): Boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        return value > 0;
    }
    /**
     * 是否大于等于0
     */
    export function isGteZero(value: any): Boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        return value >= 0;
    }
    /**
     * 是否电话类型
     */
    export function isPhone(value: any): Boolean {
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
    export function isMobile(value: any): Boolean {
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
    export function isTel(value: any): Boolean {
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
    export function isEnglish(value: any): Boolean {
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
    export function isZipCode(value: any): Boolean {
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
    export function isUrl(value: any): Boolean {
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
    export function isPwd(value: any): Boolean {
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
    export function isCardCode(value: any): Boolean {
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
                B = D.getYear().toString() === a[3] && (D.getMonth() + 1) === Number(a[4]) && D.getDate() === Number(a[5]);
            } else {
                D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
                B = D.getFullYear().toString() === a[3] && (D.getMonth() + 1) === Number(a[4]) && D.getDate() === Number(a[5]);
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
    export function isChinese(value: any): Boolean {
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
    export function isChineseChar(value: any): Boolean {
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
     * 字符验证，只能包含中文、英文、数字、下划线等字符
     */
    export function isStringCheck(value: any): Boolean {
        if (value === null || value === "" || value === undefined) {
            return true;
        }
        let result: any = value.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    export function isDate(value: any): Boolean {
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
    let message: String = oEvent.getParameter("message");
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
/**
 * 触发控件UI效果 @ control:控件实例
 */
export function fireValidationError(control: sap.ui.core.Control,message?:String): sap.ui.core.Core {
    if (control !== null && control !== undefined) {
        let arg: any = {
            element: control,
            message:message,
        };
        return sap.ui.getCore().fireValidationError(arg);
    }
}
export class ValidateResults {
    status: Boolean;
    errorMess: String;
}
/**
 * 对sap.ui.model.SimpleType的扩展,所有验证实现类可继承此类
 */
export class SimpleType extends sap.ui.model.SimpleType {
    protected notEmpty: Boolean = false;
    protected AttributeDesc: String = "";
    constructor(settings?: {
        /* 是否不允许为空 */
        notEmpty?: Boolean,
        /* 绑定属性的描述 */
        AttributeDesc?: String,
        /* 验证方法 */
        validateValue?(oValue: any): Function
    }) {
        super();
        if (settings === undefined || settings === null) {
            return;
        }
        this.notEmpty = settings.notEmpty;
        if (settings.AttributeDesc !== null && settings.AttributeDesc !== undefined) {
            this.AttributeDesc = settings.AttributeDesc;
        }
        if ((settings.validateValue !== null && settings.validateValue !== undefined) && settings.validateValue instanceof Function) {
            this.validateValue = settings.validateValue;
        }
    }
    formatValue(oValue: any): any {
        return oValue;
    }
    parseValue(oValue: any): any {
        return oValue;
    }
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (this.notEmpty && !validation.isNotEmpty(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_not_empty_error_msg", this.AttributeDesc);
            fireValidationError(control,results.errorMess);
            return results;
        }
        return results;
    }
    validateValue(oValue: any): any {
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}

// ibas数据类型验证==========================================================================================
/**
 * Numeric类型 - extends SimpleType
 */
export class Numeric extends SimpleType {
    protected minValue: number = undefined;
    protected maxValue: number = undefined;
    constructor(settings?: {
        notEmpty?: Boolean,
        minValue?: number,
        maxValue?: number,
        bindingAttribute?: String,
        validateValue?(oValue: any): Function
    }) {
        super(settings);
        if (settings === undefined || settings === null) {
            return;
        }
        if (settings.minValue !== null && settings.minValue !== undefined) {
            this.minValue = settings.minValue;
        }
        if (settings.maxValue !== null && settings.maxValue !== undefined) {
            this.maxValue = settings.maxValue;
        }
    }
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isNumeric(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_numeric_error_msg");
            fireValidationError(control,results.errorMess);
        }
        if (validation.isNotEmpty(oValue) && this.minValue !== undefined && !(oValue > this.minValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_numeric_minvalue_error_msg", this.AttributeDesc,
                this.minValue.toString());
            fireValidationError(control,results.errorMess);
        }
        if (validation.isNotEmpty(oValue) && this.maxValue !== undefined && !(oValue < this.maxValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_numeric_maxvalue_error_msg", this.AttributeDesc,
                this.maxValue);
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Decimal类型 - extends validation.Numeric
 */
export class Decimal extends Numeric {
    protected decimalDigits: number = undefined;
    constructor(settings?: {
        notEmpty?: Boolean,
        minValue?: number,
        maxValue?: number,
        decimalDigits?: number,
        bindingAttribute?: String,
        validateValue?(oValue: any): Function
    }) {
        super(settings);
        if (settings === undefined || settings === null) {
            return;
        }
        if (settings.decimalDigits !== null && settings.decimalDigits !== undefined) {
            this.decimalDigits = settings.decimalDigits;
        }
    }
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (this.decimalDigits !== undefined && !validation.isDecimalDigits(oValue, this.decimalDigits)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_decimal_decimaldigits_error_msg", this.AttributeDesc,
                this.decimalDigits);
                fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Alphanumeric类型 - extends SimpleType
 */
export class Alphanumeric extends SimpleType {
}
/**
 * Date类型  - extends SimpleType
 */
export class DateTime extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isDate(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_datetime_error_msg", this.AttributeDesc);
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Time类型  - extends SimpleType
 */
export class Time extends Numeric {
}
/**
 * Price类型 - extends validation.Numeric
 */
export class Price extends Numeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isPrice(oValue)) {
            let decimalDigits: any = ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DECIMAL_PLACES, 6);
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_decimal_decimaldigits_error_msg", this.AttributeDesc,
                decimalDigits.toString());
                fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Quantity类型 - extends validation.Numeric
 */
export class Quantity extends Numeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isGtZero(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_quantity_gtzero_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Email类型 - extends SimpleType
 */
export class Email extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isEmail(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_email_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Phone类型 - extends SimpleType
 */
export class Phone extends Alphanumeric {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isTel(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_phone_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * Image类型 - extends SimpleType
 */
export class Image extends SimpleType {
}
/**
 * Link类型 - extends SimpleType
 */
export class Link extends Alphanumeric {
}
/**
 * Measurement类型 - extends SimpleType
 */
export class Measurement extends Quantity {
}
/**
 * Sum类型 - extends validation.Price
 */
export class Sum extends Price {
}
/**
 * Percentage类型  - extends SimpleType
 */
export class Percentage extends SimpleType {
}
/**
 * Rate类型  - extends SimpleType
 */
export class Rate extends SimpleType {
}
/**
 * Address类型  - extends SimpleType
 */
export class Address extends Alphanumeric {
}
/**
 * Bytes类型  - extends SimpleType
 */
export class Bytes extends SimpleType {
}
/**
 * Memo类型  - extends SimpleType
 */
export class Memo extends Alphanumeric {
}

// 其它验证 =====================================================================================
/**
 * 匹配移动电话类型 - extends SimpleType
 */
export class Mobile extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isMobile(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_phone_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 联系电话(手机/电话皆可)验证 - extends SimpleType
 */
export class Telphone extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isTel(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_phone_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 匹配英文 - extends SimpleType
 */
export class English extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isEnglish(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_english_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 匹配邮编 - extends SimpleType
 */
export class ZipCode extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isZipCode(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_zip_code_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 匹配URL地址 - extends SimpleType
 */
export class Url extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isUrl(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_url_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线  - extends SimpleType
 */
export class Password extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isPwd(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_password_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 匹配身份证号码 - extends SimpleType
 */
export class CardCode extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isCardCode(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_cardcode_error_msg");
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}
/**
 * 字符验证，只能包含中文、英文、数字、下划线等字符 - extends SimpleType
 */
export class StringCheck extends SimpleType {
    callValidate(oValue: any, control?: sap.ui.core.Control): ValidateResults {
        super.callValidate(oValue, control);
        let results: ValidateResults = new ValidateResults();
        results.status = true;
        if (!validation.isStringCheck(oValue)) {
            results.status = false;
            results.errorMess = ibas.i18n.prop("data_types_stringcheck_error_msg", this.AttributeDesc);
            fireValidationError(control,results.errorMess);
        }
        return results;
    }
    validateValue(oValue: any): any {
        super.validateValue(oValue);
        let results: ValidateResults = this.callValidate(oValue);
        if (!results.status) {
            throw new sap.ui.model.ValidateException(results.errorMess);
        }
    }
}