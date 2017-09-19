/**
 * Type definitions for OpenUI5 1.40
 * Project: http://openui5.org/
 * Definitions by: neil.zhou
 */

/// <reference path="./index.d.ts" />
/// <reference path="../../ibas/index.ts" />
export namespace validation {
    /** uI 触发错误验证 */
    sap.ui.getCore().attachValidationError("", (oEvent: any): void => {
        let control: any = oEvent.getParameter("element");
        if (control && control.setValueState) {
            control.focus();
            control.setValueState("Error");
        }
    });
    /** 触发正确验证 */
    sap.ui.getCore().attachValidationSuccess("", (oEvent: any): void => {
        let control: any = oEvent.getParameter("element");
        if (control && control.setValueState) {
            control.setValueState("None");
        }
    });
    /** 触发控件UI效果 @ control:控件实例 */
    export function fireValidationError(control: sap.ui.core.Control): void {
        if (control !== null && control !== undefined) {
            let arg: any = {
                element: control
            };
            sap.ui.getCore().fireValidationError(arg);
        }
    }
    /** 判断是否为空 */
    export function isNotEmpty(value: any): Boolean {
        return (value !== null && value !== undefined && value !== "");
    }
    /** 判断是否为0 */
    export function isIntEqZero(value: any): Boolean {
        return value === 0;
    }
    /** 判断是否大于0 */
    export function isIntGtZero(value: any): Boolean {
        return value > 0;
    }
    /** 判断是否大于等于0 */
    export function isIntGteZero(value: any): Boolean {
        return value >= 0;
    }
    /** 判断是否Email地址 */
    export function isEmail(value: any): Boolean {
        if (value === null || value === "") {
            return false;
        }
        let result: any = value.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /** 判断数值类型，包括整数和浮点数 */
    export function isNumber(value: any): Boolean {
        if (value === null || value === "") {
            return false;
        }
        let result: any = value.match(/^[-\+]?\d+(\.\d+)?$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /** 只能输入数字[0-9] */
    export function isDigits(value: any): Boolean {
        if (value === null || value === "") {
            return false;
        }
        let result: any = value.match(/^\d+$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 是否为money类型
     */
    export function isMoney(value: any): Boolean {
        if (value === null || value === "") {
            return false;
        }
        // //获取配制文件中小数位数
        // var decimalDigits=bsbas.config.getValue(bsbas.config.CONFIG_ITEM_SYSTEM_DECIMAL_DIGITS, '6');
        let money: any = "/^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1,2}))$/";
        let result: any = value.match(money);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配电话类型
     */
    export function isPhone(value: any): Boolean {
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
        }
        if (validation.isMobile(value) || validation.isPhone(value)) {
            return true;
        }
        return false;
    }
    /**
     * 匹配qq号
     */
    export function isQq(value: any): Boolean {
        if (value === null || value === "") {
            return false;
        }
        let result: any = value.match(/^[1-9]\d{4,12}$/);
        if (result === null) {
            return false;
        }
        return true;
    }
    /**
     * 匹配英文
     */
    export function isEnglish(value: any): Boolean {
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
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
        if (value === null || value === "") {
            return false;
        }
        let result: any = value.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
        if (result === null) {
            return false;
        }
        return true;
    }


    /**
     * 判断是否为空 - extends SimpleType
     */
    export class IsNotEmpty extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isNotEmpty(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 判断是否为0 - extends SimpleType
     */
    export class IsIntEqZero extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isIntEqZero(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 判断是否大于0 - extends SimpleType
     */
    export class IsIntGtZero extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isIntGtZero(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 判断是否大于等于0 - extends SimpleType
     */
    export class IsIntGteZero extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isIntGteZero(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 判断是否Email地址 - extends SimpleType
     */
    export class IsEmail extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isEmail(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 判断数值类型，包括整数和浮点数 - extends SimpleType
     */
    export class IsNumber extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isNumber(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 只能输入数字[0-9] - extends SimpleType
     */
    export class IsDigits extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isDigits(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }

    }
    /**
     * 是否为money类型 - extends SimpleType
     */
    export class IsMoney extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isMoney(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配电话类型 - extends SimpleType
     */
    export class IsPhone extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isPhone(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配移动电话类型 - extends SimpleType
     */
    export class IsMobile extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isMobile(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 联系电话(手机/电话皆可)验证 - extends SimpleType
     */
    export class IsTel extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isTel(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 联系电话(手机/电话皆可)验证 - extends SimpleType
     */
    export class IsQq extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isQq(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配英文 - extends SimpleType
     */
    export class IsEnglish extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isEnglish(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配邮编 - extends SimpleType
     */
    export class IsZipCode extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isZipCode(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配URL地址 - extends SimpleType
     */
    export class IsUrl extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isUrl(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线  - extends SimpleType
     */
    export class IsPwd extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isPwd(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配身份证号码 - extends SimpleType
     */
    export class IsCardCode extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isCardCode(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配汉字 - extends SimpleType
     */
    export class IsChinese extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isChinese(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 匹配中文字符(包括汉字和字符) - extends SimpleType
     */
    export class IsChineseChar extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isChineseChar(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
    /**
     * 字符验证，只能包含中文、英文、数字、下划线等字符 - extends SimpleType
     */
    export class IsStringCheck extends sap.ui.model.SimpleType {
        formatValue(oValue: any): any {
            return oValue;
        }
        parseValue(oValue: any): any {
            return oValue;
        }
        validateValue(oValue: any): any {
            if (!validation.isStringCheck(oValue)) {
                throw new sap.ui.model.ValidateException(oValue);
            }
        }
    }
}