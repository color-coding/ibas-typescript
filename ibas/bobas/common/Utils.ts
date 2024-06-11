/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />
/// <reference path="./I18N.ts" />
/// <reference path="./Criteria.ts" />
/// <reference path="./Enum.ts" />

namespace ibas {
    /**
     * 对象
     */
    export namespace objects {
        /**
         * 是否为空
         * @param object 判断对象
         */
        export function isNull(object: any): boolean {
            if (object === undefined || object === null) {
                return true;
            }
            return false;
        }
        /**
         * 判断数据是否为某类型
         * @param instance 数据
         * @param type 类型
         */
        export function instanceOf(instance: any, type: any): boolean {
            if (isNull(instance) || isNull(type)) {
                return false;
            }
            // 直接判断
            if (instance instanceof type) {
                return true;
            }
            // 通过名称判断，不安全
            let tType: any = Object.getPrototypeOf(instance).constructor;
            if (isAssignableFrom(tType, type)) {
                return true;
            }
            return false;
        }
        /**
         * 判断是否为其子类
         * @param subType 待判断类型
         * @param type 父类型
         */
        export function isAssignableFrom(subType: any, type: any): boolean {
            if (isNull(subType) || isNull(type)) {
                return false;
            }
            if (isSame(subType, type)) {
                return true;
            }
            let cType: any = Object.getPrototypeOf(subType);
            while (!isNull(cType)) {
                if (isSame(cType, type)) {
                    return true;
                }
                cType = Object.getPrototypeOf(cType);
            }
            return false;
        }
        /**
         * 是否一样
         * @param type1 类型1
         * @param type2 类型2
         */
        export function isSame(type1: any, type2: any): boolean {
            if (type1 === type2) {
                return true;
            }
            if (isNull(type1) || isNull(type2)) {
                return false;
            }
            if (type1.name === type2.name) {
                return true;
            }
            return false;
        }
        /**
         * 获取类型名称
         * @param type 类型
         */
        export function nameOf(type: Function | Object): string {
            if (objects.isNull(type)) {
                return undefined;
            }
            if (typeof type === "object") {
                type = typeOf(type);
            }
            if (typeof type !== "function") {
                throw new Error("is not a class.");
            }
            if (type.name) {
                return type.name;
            }
            return typeof type;
        }
        /**
         * 获取实例类型
         * @param 实例
         */
        export function typeOf(instance: Object): any {
            if (objects.isNull(instance)) {
                return undefined;
            }
            if (typeof instance !== "object") {
                throw new Error("is not a object.");
            }
            return instance.constructor;
        }
        /**
         * 克隆对象
         * @param data 数据
         */
        export function clone<D>(data: D): D {
            if (objects.isNull(data)) {
                return data;
            }
            if (typeof data !== "object") {
                return data;
            }
            let type: any = objects.typeOf(<any>data);
            let newData: any = new type;
            // 置为加载数据状态，此状态不触发事件
            if (newData instanceof BusinessObject) {
                newData.isLoading = true;
            }
            for (let name in data) {
                if (objects.isNull(name)) {
                    continue;
                }
                if (name.startsWith("_")) {
                    continue;
                }
                let value: any = data[name];
                if (value instanceof UserFields) {
                    let nValue: any = newData[name];
                    if (nValue === undefined) {
                        nValue = new UserFields(newData);
                        newData[name] = nValue;
                    }
                    for (let item of value) {
                        let nItem: any = clone(item);
                        if (nValue.add !== undefined) {
                            nValue.add(nItem);
                        } else {
                            nValue.push(nItem);
                        }
                    }
                } else if (value instanceof Array) {
                    let nValue: any = newData[name];
                    if (nValue === undefined) {
                        nValue = new ArrayList<any>();
                        newData[name] = nValue;
                    }
                    for (let item of value) {
                        let nItem: any = clone(item);
                        if (nValue.add !== undefined) {
                            nValue.add(nItem);
                        } else {
                            nValue.push(nItem);
                        }
                    }
                } else if (value instanceof Date) {
                    newData[name] = new Date(value.getTime());
                } else if (value instanceof Object) {
                    // 克隆新对象
                    let nValue: any = clone(value);
                    if (objects.isNull(nValue)) {
                        newData[name] = nValue;
                    }
                } else {
                    newData[name] = value;
                }
            }
            // 取消加载数据状态
            if (newData instanceof BusinessObject) {
                newData.isLoading = false;
            }
            return newData;
        }
        /**
         * 获取属性值
         * @param data 对象
         * @param propertyName 属性名称
         * @param ignoreCase 忽略大小写
         */
        export function propertyValue(data: any, propertyName: string, ignoreCase: boolean = true): any {
            if (isNull(data)) {
                return undefined;
            }
            if (strings.isEmpty(propertyName)) {
                return undefined;
            }
            for (let key in data) {
                if (ignoreCase === true) {
                    if (strings.equalsIgnoreCase(key, propertyName)) {
                        return data[key];
                    }
                } else {
                    if (strings.equals(key, propertyName)) {
                        return data[key];
                    }
                }
            }
            return undefined;
        }
        /**
         * 属性是否存在
         * @param data 对象
         * @param propertyName 属性名称
         * @param ignoreCase 忽略大小写
         */
        export function hasProperty(data: any, propertyName: string, ignoreCase: boolean = true): boolean {
            if (isNull(data)) {
                return false;
            }
            if (strings.isEmpty(propertyName)) {
                return false;
            }
            for (let item in data) {
                if (ignoreCase === true) {
                    if (strings.equalsIgnoreCase(item, propertyName)) {
                        return true;
                    }
                } else {
                    if (strings.equals(item, propertyName)) {
                        return true;
                    }
                }
            }
            return false;
        }
        /**
         * 复制属性值
         * @param source 源
         * @param target 目标
         */
        export function copyProperties(source: IBusinessObject, target: IBusinessObject): void {
            if (isNull(source) || isNull(target)) {
                return;
            }
            // 复制属性
            for (let property in source) {
                if (strings.isEmpty(property)) {
                    continue;
                }
                let value: any = source[property];
                if (typeof value === "number"
                    || typeof value === "string"
                    || typeof value === "boolean"
                    || typeof value === "bigint") {
                    target[property] = value;
                } else if (value instanceof Date) {
                    // 日期类型，构建新对象
                    target[property] = new Date(value);
                } else {
                    logger.log(ibas.emMessageLevel.DEBUG, "skip property: {0}", property);
                }
            }
        }
    }
    /**
     * 对字符串操作的封装方法
     */
    export namespace strings {
        /**
         * 是否为空
         * @param object 判断对象
         */
        export function isEmpty(content: any): boolean {
            if (content === undefined || content === null) {
                return true;
            }
            if (typeof (content) === "string" && content.length === 0) {
                return true;
            }
            return false;
        }
        /**
         * 格式化输出
         * @param format 格式，I'm {0} and good at {1}.
         * @param args 替换字符
         */
        export function format(format: string, ...args: any[]): string {
            let result: string = format;
            if (args.length > 0) {
                // 存在替代字符
                if (args.length === 1 && Array.isArray(args[0])) {
                    // 替代字符变量自身是个数组，则使用数组里的内容替代
                    args = args[0];
                    for (let key in args) {
                        if (args[key] !== undefined) {
                            let reg: RegExp = new RegExp("\\{" + key + "\\}", "g");
                            result = result.replace(reg, args[key]);
                        }
                    }
                } else {
                    for (let i: number = 0; i < args.length; i++) {
                        if (args[i] !== undefined) {
                            let reg: RegExp = new RegExp("\\{" + i + "\\}", "g");
                            result = result.replace(reg, args[i]);
                        }
                    }
                }
            }
            return result;
        }
        /**
         * 存在多少个字符
         * @param content 待分析字符
         * @param value 查询的字符
         */
        export function count(content: string, value: string): number {
            let count: number = 0;
            if (content === undefined || content === null) { return count; }
            if (value === undefined || value === null) { return count; }
            let pos: number = content.indexOf(value, 0);
            while (pos >= 0) {
                count++;
                pos = content.indexOf(value, pos + 1);
            }
            return count;
        }
        /**
         * 删除全部空格
         * @param content 待分析字符串
         */
        export function trim(content: string): string {
            return replace(content, " ", "");
        }
        /**
         * 删除指定字符
         * @param content 待分析字符串
         * @param args 删除的字符
         */
        export function remove(content: string, ...args: string[]): string {
            if (content === undefined || content === null) { throw new Error("content is invalid."); }
            if (args === undefined || args === null || args.length === 0) { throw new Error("args is invalid."); }
            let removes: string = "";
            for (let item of args) {
                removes = removes + item;
            }
            let value: string = "";
            for (let item of content) {
                if (removes.indexOf(item) >= 0) {
                    continue;
                }
                value = value + item;
            }
            return value;
        }
        /**
         * 替换字符，全部
         * @param content 待分析字符
         * @param search 查询的字符
         * @param replace 替换的字符
         */
        export function replace(content: string, search: string, replace: string): string {
            if (content === undefined || content === null) { throw new Error("content is invalid."); }
            if (search === undefined || search === null) { throw new Error("search is invalid."); }
            if (replace === undefined || replace === null) { throw new Error("replace is invalid."); }
            let p: number = -1; // 字符出现位置
            let s: number = 0; // 下一次起始位置
            while ((p = content.indexOf(search, s)) > -1) {
                s = p + replace.length; // 位置 + 值的长度
                if (p === 0) {
                    content = replace + content.substring(p + search.length);
                } else {
                    content = content.substring(0, p) + replace + content.substring(p + search.length);
                }
            }
            return content;
        }
        /**
         * 比较字符串
         * @param value1 字符1
         * @param value2 字符2
         */
        export function equals(value1: string, value2: string): boolean {
            return value1 === value2;
        }
        /**
         * 比较字符串，忽略大小写
         * @param value1 字符1
         * @param value2 字符2
         */
        export function equalsIgnoreCase(value1: string, value2: string): boolean {
            if (value1 === undefined || value1 === null) { return false; }
            if (value2 === undefined || value2 === null) { return false; }
            let tmp1: string = value1.toLowerCase();
            let tmp2: string = value2.toLowerCase();
            return equals(tmp1, tmp2);
        }
        /**
         * 补齐字符串
         * @param value 值
         * @param size 长度
         * @param char 补齐字符
         */
        export function fill(value: any, size: number, char: string): string {
            let newValue: string = String(value);
            for (let index: number = newValue.length; index < size; index++) {
                newValue = char + newValue;
            }
            return newValue;
        }
        /**
         * 转为字符类型
         * @param value 值
         */
        export function valueOf(value: any): string {
            if (value === undefined || value === null) {
                return "";
            } else if (typeof value === "string") {
                return value;
            } else if (typeof value === "number") {
                return String(value);
            } else if (value instanceof Array) {
                let stringBuilder: StringBuilder = new StringBuilder();
                stringBuilder.map(undefined, "");
                stringBuilder.map(null, "");
                for (let item of value) {
                    if (stringBuilder.length > 0) {
                        stringBuilder.append(DATA_SEPARATOR);
                    }
                    stringBuilder.append(valueOf(item));
                }
                return stringBuilder.toString();
            } else {
                return value.toString();
            }
        }
        /**
         * 判断字符的开始和结束字符
         * @param value 内容
         * @param starts 开始字符
         * @param ends 结束字符
         * @param ignoreCase 忽略大小写（默认不忽略）
         */
        export function isWith(value: any, starts: string, ends: string, ignoreCase: boolean = false): boolean {
            let sValue: string = valueOf(value);
            if (isEmpty(sValue)) {
                return false;
            }
            if (ignoreCase === true) {
                sValue = sValue.toLowerCase();
            }
            if (!isEmpty(starts)) {
                if (ignoreCase === true) {
                    starts = starts.toLowerCase();
                }
                if (!sValue.startsWith(starts)) {
                    return false;
                }
            }
            if (!isEmpty(ends)) {
                if (ignoreCase === true) {
                    ends = ends.toLowerCase();
                }
                if (!sValue.endsWith(ends)) {
                    return false;
                }
            }
            return true;
        }
        /**
         * utf-8字符转为utf-16字符
         * @param value utf-8字符串
         */
        export function utf8To16(value: string): string {
            let char1: number, char2: number, char3: number;
            let i: number = 0, len: number = value.length;
            let builder: StringBuilder = new StringBuilder;
            builder.map(null, "");
            builder.map(undefined, "");
            while (i < len) {
                char1 = value.charCodeAt(i++);
                // tslint:disable-next-line: no-bitwise
                switch (char1 >> 4) {
                    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                        // 0xxxxxxx
                        builder.append(value.charAt(i - 1));
                        break;
                    case 12: case 13:
                        // 110x xxxx   10xx xxxx
                        char2 = value.charCodeAt(i++);
                        // tslint:disable-next-line: no-bitwise
                        builder.append(String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F)));
                        break;
                    case 14:
                        // 1110 xxxx  10xx xxxx  10xx xxxx
                        char2 = value.charCodeAt(i++);
                        char3 = value.charCodeAt(i++);
                        // tslint:disable-next-line: no-bitwise
                        builder.append(String.fromCharCode(((char1 & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0)));
                        break;
                }
            }
            return builder.toString();
        }
        /**
         * utf-16字符转为utf-8字符
         * @param value utf-16字符串
         */
        export function utf16To8(value: string): string {
            let char1: number;
            let i: number = 0, len: number = value.length;
            let builder: StringBuilder = new StringBuilder;
            builder.map(null, "");
            builder.map(undefined, "");
            for (i = 0; i < len; i++) {
                char1 = value.charCodeAt(i);
                if ((char1 >= 0x0001) && (char1 <= 0x007F)) {
                    builder.append(value.charAt(i));
                } else if (char1 > 0x07FF) {
                    // tslint:disable-next-line: no-bitwise
                    builder.append(String.fromCharCode(0xE0 | ((char1 >> 12) & 0x0F)));
                    // tslint:disable-next-line: no-bitwise
                    builder.append(String.fromCharCode(0x80 | ((char1 >> 6) & 0x3F)));
                    // tslint:disable-next-line: no-bitwise
                    builder.append(String.fromCharCode(0x80 | ((char1 >> 0) & 0x3F)));
                } else {
                    // tslint:disable-next-line: no-bitwise
                    builder.append(String.fromCharCode(0xC0 | ((char1 >> 6) & 0x1F)));
                    // tslint:disable-next-line: no-bitwise
                    builder.append(String.fromCharCode(0x80 | ((char1 >> 0) & 0x3F)));
                }
            }
            return builder.toString();
        }
        /**
         * 是否大写字母
         * @param value 字符
         * @param index 索引
         */
        export function isUpperCase(value: string, index?: number): boolean {
            if (!(index >= 0)) {
                index = 0;
            }
            if (isEmpty(value)) {
                return false;
            }
            let char: number = value.charCodeAt(index);
            if (char >= 65 && char <= 90) {
                return true;
            }
            return false;
        }
        /**
         * 是否小写字母
         * @param value 字符
         * @param index 索引
         */
        export function isLowerCase(value: string, index?: number): boolean {
            if (!(index >= 0)) {
                index = 0;
            }
            if (isEmpty(value)) {
                return false;
            }
            let char: number = value.charCodeAt(index);
            if (char >= 97 && char <= 122) {
                return true;
            }
            return false;
        }
    }
    /**
     * 唯一标识
     */
    export namespace uuids {
        export function random(): string {
            function s4(): string {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
                s4() + "-" + s4() + s4() + s4();
        }
    }
    /**
     * 枚举
     */
    export namespace enums {
        /** 配置项目-枚举最大级数 */
        const CONFIG_ITEM_ENUM_MAX_LEVEL: string = "enumMaxLevel";
        /** 转换为枚举值
         * @param type 目标类型
         * @param value 值
         * @returns 枚举值，失败为undefined
         */
        export function valueOf(type: any, value: any): number {
            if (objects.isNull(type) || objects.isNull(value)) {
                return undefined;
            }
            if (typeof value === "string") {
                // 字符串，首先尝试转为数值
                if (numbers.isNumber(value)) {
                    value = numbers.toInt(value);
                    // 判断是否存在值
                    if (!objects.isNull(type[value])) {
                        return value;
                    }
                }
            }
            for (let item in type) {
                if (typeof item === typeof value) {
                    if (item.toUpperCase() === value.toUpperCase()) {
                        return type[item];
                    }
                }
            }
            return undefined;
        }
        /**
         * 转为字符串
         * @param type 类型
         * @param value 值
         */
        export function toString(type: any, value: any): string {
            if (type.hasOwnProperty(value)) {
                return type[value];
            }
            return value;
        }
        /**
         * 描述枚举值
         * @param type 目标类型
         * @param value 值
         * @returns 首先语言，然后枚举，最后原始
         */
        export function describe(type: any, value: any): string {
            if (objects.isNull(type) || objects.isNull(value)) {
                return value;
            }
            // 获取枚举值
            let sValue: any = value;
            if (typeof sValue === "number") {
                sValue = type[sValue];
            }
            let dValue: string;
            // 获取枚举名称
            let name: string = nameOf(type);
            if (!strings.isEmpty(name) && !strings.equals("object", name)) {
                if (name.startsWith("em")) {
                    name = "em_" + name.substring(2);
                }
                dValue = i18n.prop((name + "_" + sValue).toLowerCase());
                if (!strings.isWith(dValue, "[", "]")) {
                    return dValue;
                }
            }
            dValue = i18n.prop(("em_" + sValue).toLowerCase());
            if (!strings.isWith(dValue, "[", "]")) {
                return dValue;
            }
            return sValue;
        }
        /**
         * 获取名称
         * @param type 类型
         */
        export function nameOf(type: any): string {
            if (objects.isNull(type)) {
                return undefined;
            }
            if (typeof type === "function") {
                return objects.nameOf(type);
            }
            if (typeof type === "object") {
                let name: string = ENUM_NAMES.get(type);
                if (!objects.isNull(name)) {
                    return name;
                }
                let maxLevel: number = config.get(CONFIG_ITEM_ENUM_MAX_LEVEL, 5);
                let getName: Function = function (data: any, level: number = 0): string {
                    for (let item in data) {
                        if (strings.isWith(item, "webkit", undefined)) {
                            continue;
                        }
                        let value: any = data[item];
                        if (typeof value !== "object") {
                            continue;
                        }
                        if (!(value instanceof Object)) {
                            continue;
                        }
                        if (value === globalThis.document || value === globalThis.indexedDB || value === globalThis.caches
                            || value === globalThis.applicationCache || value === globalThis.localStorage
                            || value === globalThis.navigator || value === globalThis.location || value === globalThis.console
                            || value === globalThis.crypto || value === globalThis.frames || value === globalThis.frameElement
                            || value === globalThis.history || value === globalThis.clientInformation || value === globalThis.styleMedia
                            || value === globalThis.event
                        ) {
                            continue;
                        }
                        if (value === data || (level > 0 && value === globalThis)) {
                            continue;
                        }
                        if (value === type) {
                            return item;
                        }
                        if (level >= maxLevel) {
                            continue;
                        }
                        let name: string = getName(value, level + 1);
                        if (!objects.isNull(name)) {
                            return name;
                        }
                    }
                    return undefined;
                };
                name = getName(window);
                if (!objects.isNull(name)) {
                    ENUM_NAMES.set(type, name);
                    return name;
                }
            }
            return typeof type;
        }
        /** 枚举名称 */
        const ENUM_NAMES: Map<object, string> = new Map<object, string>();
        /**
         * 枚举值比较
         * @param type 类型
         * @param value1 字符1
         * @param value2 字符2
         */
        export function equals(type: any, value1: string | number, value2: string | number): boolean {
            if (objects.isNull(type)) {
                return false;
            }
            if (objects.isNull(value1)) {
                return false;
            }
            if (objects.isNull(value2)) {
                return false;
            }
            if (!objects.hasProperty(type, String(value1))) {
                return false;
            }
            if (!objects.hasProperty(type, String(value2))) {
                return false;
            }
            if (value1 === value2) {
                return true;
            }
            let tValue1: any = objects.propertyValue(type, String(value1));
            let tValue2: any = objects.propertyValue(type, String(value2));
            let sValue1: any = objects.propertyValue(type, String(tValue1));
            let sValue2: any = objects.propertyValue(type, String(tValue2));
            if (tValue1 === tValue2 || tValue1 === sValue2) {
                return true;
            }
            if (tValue2 === tValue1 || tValue2 === sValue1) {
                return true;
            }
            return false;
        }
    }
    /**
     * 日期
     */
    export namespace dates {
        /**
         * 是否日期类型
         */
        export function isDate(value: any): boolean {
            if (value instanceof Date) {
                return true;
            }
            return false;
        }
        /**
         * 当前时间（含时间）
         */
        export function now(): Date {
            return new Date(Date.now());
        }
        /**
         * 当前日期（不含时间）
         */
        export function today(): Date {
            return valueOf(now().setHours(0, 0, 0, 0));
        }
        /**
         * 时间（1155）
         */
        export function time(): number {
            let date: Date = now();
            let hour: number = date.getHours();
            let minute: number = date.getMinutes();
            return hour * 100 + minute;
        }
        /**
         * 解析日期，支持以下格式
         * yyyy-MM-dd HH:mm:ss
         * yyyy-MM-ddTHH:mm:ss
         * yyyy/MM/dd HH:mm:ss
         * yyyy/MM/ddTHH:mm:ss
         * @param value 日期字符
         * @returns 日期
         */
        export function valueOf(value: any): Date {
            if (value instanceof Date) {
                return value;
            }
            if (objects.isNull(value)) {
                return undefined;
            }
            if (typeof value === "number") {
                return isNaN(value) ? undefined : new Date(value);
            }
            if (typeof value === "string") {
                if (value.indexOf("/") > 0) {
                    value = strings.replace(value, "/", "-");
                }
                if (value.indexOf(":") < 0) {
                    // 补充时间部分，否则会被加时区时间
                    value = value + "T00:00:00.00";
                }
            }
            return valueOf(Date.parse(value));
        }

        const DATA_SEPARATOR: string = "-";
        const TIME_SEPARATOR: string = ":";
        const DATA_TIME_SEPARATOR: string = "T";
        const DATA_PART_YEAR: string = "yyyy";
        const DATA_PART_MONTH: string = "MM";
        const DATA_PART_DAY: string = "dd";
        const DATA_PART_HOUR: string = "HH";
        const DATA_PART_MINUTE: string = "mm";
        const DATA_PART_SECOND: string = "ss";
        /**
         * 转换日期
         * @param value 日期
         * @returns 日期字符串
         */
        export function toString(value: Date): string;
        /**
         * 转换日期
         * @param value 日期
         * @param format 格式字符，yyyy-MM-dd
         * @returns 日期字符串
         */
        export function toString(value: Date, format: string): string;
        /**
         * 转换日期
         * @param value 日期
         * @returns 日期字符串
         */
        export function toString(): string {
            let value: Date = arguments[0];
            if (objects.isNull(value) || !(value instanceof Date)) {
                return null;
            }
            let format: string =
                DATA_PART_YEAR + DATA_SEPARATOR +
                DATA_PART_MONTH + DATA_SEPARATOR +
                DATA_PART_DAY +
                DATA_TIME_SEPARATOR +
                DATA_PART_HOUR + TIME_SEPARATOR +
                DATA_PART_MINUTE + TIME_SEPARATOR +
                DATA_PART_SECOND;
            if (!objects.isNull(arguments[1])) {
                format = arguments[1];
            }
            let year: number = value.getFullYear(),
                month: number = value.getMonth(),
                day: number = value.getDate(),
                hour: number = value.getHours(),
                minute: number = value.getMinutes(),
                second: number = value.getSeconds();
            format = format.replace(DATA_PART_YEAR, strings.fill(year, DATA_PART_YEAR.length, "0"));
            format = format.replace(DATA_PART_MONTH, strings.fill(month + 1, DATA_PART_MONTH.length, "0"));
            format = format.replace(DATA_PART_DAY, strings.fill(day, DATA_PART_DAY.length, "0"));
            format = format.replace(DATA_PART_HOUR, strings.fill(hour, DATA_PART_HOUR.length, "0"));
            format = format.replace(DATA_PART_MINUTE, strings.fill(minute, DATA_PART_MINUTE.length, "0"));
            format = format.replace(DATA_PART_SECOND, strings.fill(second, DATA_PART_SECOND.length, "0"));
            return format;
        }

        export enum emDifferenceType {
            DAY,
            HOUR,
            MINUTE,
            SECOND
        }
        /**
         * 计算时间差
         * @param type 计算类型
         * @param minuend 被减数
         * @param value 减数
         */
        export function difference(type: emDifferenceType, minuend: Date, value: Date): number {
            if (!objects.isNull(minuend) && !objects.isNull(value)) {
                let diff: number = minuend.getTime() - value.getTime();
                diff = Math.round(diff / 1000);
                if (type === emDifferenceType.SECOND) {
                    return diff;
                }
                diff = Math.round(diff / 60);
                if (type === emDifferenceType.MINUTE) {
                    return diff;
                }
                diff = Math.round(diff / 60);
                if (type === emDifferenceType.HOUR) {
                    return diff;
                }
                diff = Math.round(diff / 24);
                if (type === emDifferenceType.DAY) {
                    return diff;
                }
            }
            return NaN;
        }
        /**
         * 日期增加
         * @param type 计算类型
         * @param date 原始日期
         * @param value 增加值
         */
        export function add(type: emDifferenceType, date: Date, value: number): Date {
            if (!objects.instanceOf(date, Date)) {
                return date;
            }
            let add: number = 0;
            if (type === emDifferenceType.DAY) {
                add = value * 24 * 60 * 60 * 1000;
            } else if (type === emDifferenceType.HOUR) {
                add = value * 60 * 60 * 1000;
            } else if (type === emDifferenceType.MINUTE) {
                add = value * 60 * 1000;
            } else if (type === emDifferenceType.SECOND) {
                add = value * 1000;
            }
            return dates.valueOf(date.getTime() + add);
        }
        /**
         * 日期减少
         * @param type 计算类型
         * @param date 原始日期
         * @param value 减少值
         */
        export function subtract(type: emDifferenceType, date: Date, value: number): Date {
            return add(type, date, -value);
        }

        /**
         * 比较大小
         * @param left
         * @param right
         * @returns 0,相等；-1，right小；1，left小
         */
        export function compare(left: Date, right: Date): number {
            if (!objects.isNull(left) && !objects.isNull(right)) {
                let leftTime: number = left.getTime();
                let rightTime: number = right.getTime();
                if (leftTime === rightTime) {
                    return 0;
                } else if (leftTime < rightTime) {
                    return 1;
                } else if (leftTime > rightTime) {
                    return -1;
                }
            }
            return NaN;
        }
        /**
         * 是否相等
         * @param left
         * @param right
         */
        export function equals(left: Date, right: Date): boolean {
            if (!isDate(left) || !isDate(right)) {
                // 非日期类型，返回false
                return false;
            }
            let value: number = compare(left, right);
            if (isNaN(value)) {
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
            if (value === 0) {
                return true;
            }
            return false;
        }

        /**
         * 左值是否晚于右值
         * @param left
         * @param right
         */
        export function after(left: Date, right: Date): boolean {
            let value: number = compare(left, right);
            if (isNaN(value)) {
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
            if (value < 0) {
                return true;
            }
            return false;
        }
        /**
         * 左值是否早于右值
         * @param left
         * @param right
         */
        export function before(left: Date, right: Date): boolean {
            let value: number = compare(left, right);
            if (isNaN(value)) {
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
            if (value > 0) {
                return true;
            }
            return false;
        }
        /**
         * 当前时间是否处于两值间
         * @param left 左时间（可空）
         * @param right 右时间（可空）
         * @param value 比较时间（默认当前时间）
         */
        export function within(left: Date, right: Date, value: Date = undefined): boolean {
            if (!(value instanceof Date)) {
                value = now();
            }
            let result: boolean = true;
            if (isDate(left)) {
                if (compare(value, left) > 0) {
                    result = false;
                }
            }
            if (isDate(right)) {
                if (compare(value, right) < 0) {
                    result = false;
                }
            }
            return result;
        }
        /**
         * 计算时间跨度，（XX小时XX分XX秒）
         * @param beginTime 开始时间
         * @param finishTime 结束时间
         */
        export function span(beginTime: Date, finishTime: Date): string {
            if (!(beginTime instanceof Date) || !(finishTime instanceof Date)) {
                return undefined;
            }
            let second: number = Math.round((finishTime.getTime() - beginTime.getTime()) / 1000);
            let hour: number = parseInt(String(second / 60 / 60), 10);
            second = second - (hour * 60 * 60);
            let minute: number = parseInt(String(second / 60), 10);
            second = second - (minute * 60);
            return i18n.prop("sys_date_time_span", hour, minute, second);
        }
    }
    /**
     * 数字
     */
    export namespace numbers {
        /** 转为整数 */
        export function toInt(data: any): number {
            if (typeof data !== "string") {
                data = String(data);
            }
            data = strings.remove(data, ",");
            let value: number = parseInt(data, 0);
            if (isNaN(value)) {
                return 0;
            } else {
                return value;
            }
        }
        /**  数字 */
        export function valueOf(data: any): number {
            if (typeof data === "number") {
                return data;
            }
            if (typeof data === "string") {
                data = strings.remove(data, ",");
            }
            if (strings.isWith(data, undefined, "%")) {
                let value: number = parseFloat(data);
                if (isNaN(value)) {
                    return 0.0;
                } else {
                    return value / 100;
                }
            } else {
                let value: number = parseFloat(data);
                if (isNaN(value)) {
                    return 0.0;
                } else {
                    return value;
                }
            }
        }
        /**
         * 保留小数位
         * @param value 数
         * @param scale 小数位（默认配置值）
         */
        export function round(value: number, scale?: number): number {
            if (Math.round(value) !== value) {
                if (isNaN(scale)) {
                    scale = config.get(CONFIG_ITEM_DECIMAL_PLACES, 6);
                }
                if (Math.pow(0.1, 6) > Math.abs(value)) {
                    return 0;
                }
                let sign: number = Math.sign(value);
                let arr: string[] = ("" + Math.abs(value)).split(".");
                if (arr.length > 1) {
                    if (arr[1].length > scale) {
                        let integ: number = +arr[0] * Math.pow(10, scale);
                        let dec: number = integ + (+arr[1].slice(0, scale) + Math.pow(10, scale));
                        let proc: number = +arr[1].slice(scale, scale + 1);
                        if (proc >= 5) {
                            dec = dec + 1;
                        }
                        dec = sign * (dec - Math.pow(10, scale)) / Math.pow(10, scale);
                        return dec;
                    }
                }
            }
            return value;
        }
        /**
         * 是否为数字字符串
         * @param value 值
         */
        export function isNumber(value: any): boolean {
            if (typeof value === "number") {
                return true;
            } else if (typeof value === "string") {
                // 非负浮点数
                let regPos: RegExp = /^\d+(\.\d+)?$/;
                // 负浮点数
                let regNeg: RegExp = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
                if (regPos.test(value) || regNeg.test(value)) {
                    return true;
                }
            }
            return false;
        }
        /**
         * 格式为字符串
         * @param value 值
         * @param digits 保留小数位
         * @param digits 保留小数位
         */
        export function toString(value: any, digits: number = 6, separate: boolean = false): string {
            if (!isNumber(value)) {
                return "NaN";
            }
            let sValue: string = Number(value).toFixed(digits);
            if (separate !== true) {
                return sValue;
            }
            let intValue: string, decValue: string, potIndex: number;
            potIndex = sValue.indexOf(".");
            if (potIndex > 0) {
                intValue = sValue.substring(0, potIndex);
                decValue = sValue.substring(potIndex + 1);
            } else {
                intValue = sValue;
                decValue = null;
            }
            if (intValue.length <= 3) {
                return sValue;
            }
            let builder: StringBuilder = new StringBuilder();
            builder.map(undefined, "");
            builder.map(null, "");
            if (!strings.isEmpty(decValue)) {
                for (let index: number = decValue.length - 1; index >= 0; index--) {
                    builder.append(decValue[index]);
                }
                builder.append(".");
            }
            for (let index: number = intValue.length - 1; index >= 0; index--) {
                builder.append(intValue[index]);
                if ((intValue.length - index) % 3 === 0 && index > 0) {
                    builder.append(",");
                }
            }
            return builder.toString(true);
        }

        /**
         * 判断数值是否近似（忽略微小差异）
         * @param value1 值1
         * @param value2 值2
         * @param digits 小数位
         * @param degree 精确度（默认10小数位次方）
         */
        export function isApproximated(value1: number, value2: number, digits: number = 6, degree: number = undefined): boolean {
            if (isNaN(value1)) {
                return false;
            }
            if (isNaN(value2)) {
                return false;
            }
            if (value1 === value2) {
                return true;
            }
            if (value1 === 0 && value2 !== 0) {
                return false;
            }
            if (value1 !== 0 && value2 === 0) {
                return false;
            }
            if (!(digits > 0)) {
                return value1 === value2;
            }
            let nValue1: number = Math.round(value1 * Math.pow(10, digits));
            let nValue2: number = Math.round(value2 * Math.pow(10, digits));
            let difference: number = Math.abs(nValue1 - nValue2);
            let tolerance: number = 0.01;
            switch (digits) {
                case 1:
                    tolerance = 0.05;
                    break;
                case 2:
                    tolerance = 0.04;
                    break;
                case 3:
                    tolerance = 0.03;
                    break;
                case 4:
                    tolerance = 0.02;
                    break;
            }
            // 变化比例超
            if ((difference / nValue1) >= tolerance || (difference / nValue2) >= tolerance) {
                return false;
            }
            return true;
        }
    }

    /**
     * 布尔值
     */
    export namespace booleans {
        /**  布尔值 */
        export function valueOf(data: any): boolean {
            if (typeof data === "boolean") {
                return <boolean>data;
            }
            return Boolean(data);
        }
    }
    /**
     * 地址
     */
    export namespace urls {
        /** 跟地址标记 */
        export const ROOT_URL_SIGN: string = ".../";
        /** 上级标记 */
        export const PARENT_URL_SIGN: string = "../";
        /** 当前标记 */
        export const CURRENT_URL_SIGN: string = "./";
        /** Meta根地址 */
        export const HTML_META_ROOT_URL: string = "meta[name=rootUrl]";
        /** 正常化地址 */
        export function normalize(value: string): string {
            if (objects.isNull(value) || value.length === 0) {
                value = ROOT_URL_SIGN;
            }
            let url: string;
            if (value.startsWith(ROOT_URL_SIGN)) {
                // 优先使用配置
                let element: any = document.querySelector(HTML_META_ROOT_URL);
                if (element instanceof window.HTMLElement) {
                    url = element.getAttribute("content");
                }
                if (objects.isNull(url)) {
                    // 存在根目录标记，则取文档地址作为根
                    url = document.location.origin + document.location.pathname;
                }
                // 去除文档.html
                let last: number = url.lastIndexOf(".");
                if (last > 0 && url.lastIndexOf("/", last) <= last) {
                    url = url.substring(0, url.lastIndexOf("/"));
                }
                if (!url.endsWith("/")) { url = url + "/"; }
                url = url + value.substring(ROOT_URL_SIGN.length);
            } else {
                url = value;
            }
            // 处理当前目录
            let cIndex: number = url.indexOf(CURRENT_URL_SIGN);
            while (cIndex >= 0) {
                let tmp: string = url.substring(0, cIndex);
                if (!tmp.endsWith(".")) {
                    url = tmp + url.substring(cIndex + PARENT_URL_SIGN.length - 1);
                }
                cIndex = url.indexOf(CURRENT_URL_SIGN, cIndex + 1);
            }
            // 处理上级目录
            let pIndex: number = url.indexOf(PARENT_URL_SIGN);
            while (pIndex >= 0) {
                let tmp: string = url.substring(0, pIndex);
                tmp = tmp.substring(0, tmp.lastIndexOf("/"));
                tmp = tmp.substring(0, tmp.lastIndexOf("/"));
                url = tmp + url.substring(pIndex + PARENT_URL_SIGN.length - 1);
                pIndex = url.indexOf(PARENT_URL_SIGN);
            }
            return url;
        }
        export function rootUrl(): string;
        /**
         * 获取当前根地址
         * @param type 基准文件名称，null表示文档地址
         */
        export function rootUrl(type: string): string;
        export function rootUrl(): string {
            // 未提供类型，则返回文档地址
            if (strings.isEmpty(arguments[0])) {
                // 优先使用配置
                let url: string;
                let element: any = document.querySelector(HTML_META_ROOT_URL);
                if (element instanceof window.HTMLElement) {
                    url = element.getAttribute("content");
                }
                if (objects.isNull(url)) {
                    url = document.location.origin + document.location.pathname;
                }
                return url.substring(0, url.lastIndexOf("/"));
            }
            let fileName: string = arguments[0];
            if (!fileName.startsWith("/")) { fileName = "/" + fileName; }
            if (!fileName.endsWith(".js")) { fileName = fileName + ".js"; }
            let fileName2: string = fileName.indexOf(SIGN_MIN_LIBRARY + ".js") > 0 ? fileName : fileName.replace(".js", SIGN_MIN_LIBRARY + ".js");
            let root: string = window.document.location.origin;
            let scripts: HTMLCollectionOf<HTMLScriptElement> = document.getElementsByTagName("script");
            for (let index: number = 0; index < scripts.length; index++) {
                let script: HTMLScriptElement = scripts[index];
                if (script.src !== undefined && script.src !== null && script.src.length !== 0) {
                    let url: string = script.src;
                    if (url.indexOf("./") >= 0) {
                        // 相对路径地址，需要处理下
                        if (url.startsWith("http")) {
                            url = normalize(url);
                        } else {
                            if (objects.isNull(script.baseURI)) {
                                // 有的浏览器，不存在此属性
                                url = normalize(window.document.location.origin + script.src);
                            } else {
                                url = normalize(script.baseURI + script.src);
                            }
                        }
                    }
                    if (url.indexOf("?") > 0) {
                        // 去除参数部分
                        url = url.substring(0, url.indexOf("?"));
                    }
                    if (url.endsWith(fileName)) {
                        root = url.substring(0, url.lastIndexOf("/"));
                        break;
                    }
                    if (url.endsWith(fileName2)) {
                        root = url.substring(0, url.lastIndexOf("/"));
                        break;
                    }
                }
            }
            return root;
        }
        /**
         * 获取地址栏中的所有查询参数
         */
        export function params(): IList<KeyText> {
            let params: IList<KeyText> = new ArrayList<KeyText>();
            let items: string[] = window.location.search.substr(1).split("&");
            for (let item of items) {
                let keyText: string[] = item.split("=");
                if (keyText.length === 2) {
                    params.add(new KeyText(keyText[0],
                        (<any>window).unescape(keyText[1])));
                }
            }
            return params;
        }
        /**
         * 获取地址栏中的指定查询参数
         * @param name 指定参数名称
         */
        export function param(name: string): KeyText {
            let params: IList<KeyText> = this.params();
            return params.firstOrDefault((c) => {
                if (c.key === name) {
                    return true;
                }
            });
        }

        /**
         * 修改当前地址栏hash值，并触发hashchange事件
         * 如果当前hash值与要修改的值相同，则只触发hashchange事件
         * @param newHash
         */
        export function changeHash(newHash: string): void {
            if (objects.isNull(newHash)) {
                newHash = "";
            }
            if (!strings.isWith(newHash, "#/", undefined)) {
                newHash = "#/" + newHash;
            }
            let oldHash: string = window.location.hash;
            if (!strings.equalsIgnoreCase(oldHash, newHash)) {
                window.history.replaceState(null, null, newHash);
            }
            let event: HashChangeEvent = new HashChangeEvent("hashchange", { oldURL: oldHash, newURL: newHash });
            window.dispatchEvent(event);
        }
    }
    /**
     * 数组
     */
    export namespace arrays {
        /**
         * 排序
         * @param sorts 排序方式
         * @param datas 数据
         */
        export function sort<T>(datas: Array<T>, sorts: ISort[]): IList<T> {
            if (objects.isNull(sorts) || sorts.length === 0) {
                return create(datas);
            }
            let newDatas: Array<T> = datas.sort((c, b): number => {
                let compare: number = 0;
                for (let sort of sorts) {
                    compare = 0;
                    let cValue: any = objects.propertyValue(c, sort.alias);
                    let bValue: any = objects.propertyValue(b, sort.alias);
                    if (objects.isNull(cValue) && objects.isNull(bValue)) {
                        // 均空，一样
                        compare = 0;
                    } else if (objects.isNull(cValue) && !objects.isNull(bValue)) {
                        // c，空，b不空，b大
                        compare = 1;
                    } else if (!objects.isNull(cValue) && objects.isNull(bValue)) {
                        // c，不空，b空，c大
                        compare = -1;
                    } else {
                        // 均不为空，调用比较
                        if (typeof cValue === "number" && typeof bValue === "number") {
                            let valueC: number = Number(cValue);
                            let valueB: number = Number(bValue);
                            if (valueC > valueB) {
                                compare = -1;
                            } else if (valueC < valueB) {
                                compare = 1;
                            } else {
                                compare = 0;
                            }
                        } else if (dates.isDate(cValue) && dates.isDate(bValue)) {
                            // 日期类型比较
                            compare = dates.compare(cValue, bValue);
                        } else {
                            // 默认字符串比较
                            compare = 0 - cValue.toString().localeCompare(bValue.toString());
                        }
                    }
                    if (sort.sortType === emSortType.ASCENDING) {
                        // 升序则比较值取反
                        compare = -compare;
                    }
                    if (compare !== 0) {
                        // 已出比较结果，不在继续
                        break;
                    }
                }
                return compare;
            });
            return create(newDatas);
        }
        /**
         * 创建数组
         * @param data 数据
         * @param datas 数据组
         */
        export function create<T>(data: T | T[] | Iterable<T>, ...datas: T[] | T[][] | Iterable<T>[] | Iterable<T>[][]): IList<T>;
        /**
         * 创建数组
         */
        export function create<T>(): IList<T> {
            let datas: ArrayList<T> = new ArrayList<T>();
            for (let data of arguments) {
                if (data instanceof Array
                    || (typeof data === "object" && !objects.isNull(data[Symbol.iterator]))) {
                    for (let item of data) {
                        datas.push(item);
                    }
                } else if (!objects.isNull(data)) {
                    datas.add(data);
                }
            }
            return datas;
        }
    }
    /**
     * 口令
     */
    export namespace tokens {
        /**
         * 获取内容
         * @param value 口令
         */
        export function content(value: string): string {
            if (strings.isWith(value, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                let values: string[] = value.split(" ");
                if (values.length > 1) {
                    return values[values.length - 1];
                }
            }
            return value;
        }
    }
}