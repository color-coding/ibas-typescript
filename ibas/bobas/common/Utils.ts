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
        export function getName(type: any): string {
            if (objects.isNull(type)) {
                return undefined;
            }
            if (typeof type !== "function") {
                throw new Error("is not a class.");
            }
            return type.name;
        }
        /**
         * 获取实例类型
         * @param 实例
         */
        export function getType(instance: any): any {
            if (objects.isNull(instance)) {
                return undefined;
            }
            if (typeof instance !== "object") {
                throw new Error("is not a object.");
            }
            return instance.constructor;
        }
        /**
         * 获取实例的类型名称
         * @param instance 实例
         */
        export function getTypeName(instance: any): any {
            return getName(getType(instance));
        }
        /**
         * 克隆对象
         * @param data 数据
         */
        export function clone<D>(data: D): D {
            if (objects.isNull(data)) {
                return data;
            }
            let type: any = Object.getPrototypeOf(data).constructor;
            let newData: any = new type;
            // 置为加载数据状态，此状态不触发事件
            if (newData.isLoding !== undefined) {
                newData.isLoding = true;
            }
            for (let name in data) {
                if (objects.isNull(name)) {
                    continue;
                }
                if (name.startsWith("_")) {
                    continue;
                }
                let value: any = data[name];
                if (value instanceof Array) {
                    let nValue: any = newData[name];
                    if (nValue === undefined) {
                        nValue = new ibas.ArrayList<any>();
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
            if (newData.isLoding !== undefined) {
                newData.isLoding = false;
            }
            return newData;
        }
        /**
         * 获取属性值
         * @param propertyName 属性名称
         * @param data 对象
         */
        export function getPropertyValue(propertyName: string, data: any): any {
            for (let key in data) {
                if (strings.equalsIgnoreCase(key, propertyName)) {
                    return data[key];
                }
            }
            return undefined;
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
         * 替换字符，全部
         * @param content 待分析字符
         * @param search 查询的字符
         * @param replace 替换的字符
         */
        export function replace(content: string, search: string, replace: string): string {
            if (content === undefined || content === null) { throw new Error("content is invalid."); }
            if (search === undefined || search === null) { throw new Error("search is invalid."); }
            if (replace === undefined || replace === null) { throw new Error("replace is invalid."); }

            let pos: number = content.indexOf(search);
            while (pos >= 0) {
                content = content.replace(search, replace);
                pos = content.indexOf(search);
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
            let newValue: string = value.toString();
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
                for (let item of value) {
                    if (stringBuilder.length > 0) {
                        stringBuilder.append(", ");
                    }
                    stringBuilder.append(valueOf(item));
                }
                return stringBuilder.toString();
            } else {
                return value.toString();
            }
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
        /** 转换为枚举值
         * @param type 目标类型
         * @param value 值
         * @returns 枚举值，失败为undefined
         */
        export function valueOf(type: any, value: any): number {
            if (objects.isNull(type) || objects.isNull(value)) {
                return undefined;
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
            let dValue: string = sValue;
            // 获取枚举名称
            let name: string = "em_";// type.name;
            if (!objects.isNull(name)) {
                dValue = i18n.prop((name + sValue).toLowerCase());
                if (dValue.startsWith("[") && dValue.endsWith("]")) {
                    // 没有找到语言描述
                    dValue = sValue;
                }
            }
            return dValue;
        }
    }
    /**
     * 日期
     */
    export namespace dates {
        /**
         * 当前时间
         */
        export function isDate(value: any): boolean {
            if (typeof value === "object") {
                if (objects.getName(objects.getType(value)) === "Date") {
                    return true;
                }
            }
            return false;
        }
        /**
         * 当前时间
         */
        export function now(): Date {
            return new Date(Date.now());
        }
        /**
         * 当前日期
         */
        export function today(): Date {
            let date: Date = now();
            // 月份从0开始
            return valueOf(strings.format("{0}-{1}-{2}", date.getFullYear(), date.getMonth() + 1, date.getDate()));
        }

        /**
         * 解析日期，支持以下格式
         * yyyy/MM/dd'T'HH:mm:ss
         * yyyy-MM-dd'T'HH:mm:ss
         * yyyy/MM/ddTHH:mm:ss
         * yyyy-MM-ddTHH:mm:ss
         * yyyy-MM-dd HH:mm:ss
         * yyyy/MM/dd HH:mm:ss
         * @param value 日期字符
         * @returns 日期
         */
        export function valueOf(value: any): Date {
            if (objects.isNull(value)) {
                return undefined;
            }
            if (<any>value instanceof Date) {
                return <Date><any>value;
            }
            if (typeof value === "number") {
                return new Date(value);
            }
            if (typeof value === "string") {
                if (value.length === 0) {
                    return undefined;
                }
                let spTime: string = "T";
                if (value.indexOf("'T'") > 0) {
                    spTime = "'T'";
                } else if (value.indexOf(" ") > 0) {
                    spTime = " ";
                }
                let tmps: string[] = value.split(spTime);
                let date: string = tmps[0];
                let time: string = tmps[1];
                let year: number = 0, month: number = 0, day: number = 0, hour: number = 0, minute: number = 0, second: number = 0;
                if (!objects.isNull(date)) {
                    let spChar: string = "-";
                    if (date.indexOf("/") > 0) {
                        spChar = "/";
                    }
                    tmps = date.split(spChar);
                    if (!objects.isNull(tmps[0])) {
                        year = Number.parseInt(tmps[0], 0);
                    }
                    if (!objects.isNull(tmps[1])) {
                        month = Number.parseInt(tmps[1], 0);
                    }
                    if (!objects.isNull(tmps[2])) {
                        day = Number.parseInt(tmps[2], 0);
                    }
                }
                if (!objects.isNull(time)) {
                    let spChar: string = ":";
                    tmps = time.split(spChar);
                    if (!objects.isNull(tmps[0])) {
                        hour = Number.parseInt(tmps[0], 0);
                    }
                    if (!objects.isNull(tmps[1])) {
                        minute = Number.parseInt(tmps[1], 0);
                    }
                    if (!objects.isNull(tmps[2])) {
                        second = Number.parseInt(tmps[2], 0);
                    }
                }
                // 月份从0开始
                return new Date(year, month - 1, day, hour, minute, second);
            }
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
                return "";
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
    }
    /**
     * 数字
     */
    export namespace numbers {
        /** 转为整数 */
        export function toInt(data: any): number {
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
                return <number>data;
            }
            let value: number = parseFloat(data);
            if (isNaN(value)) {
                return 0.0;
            } else {
                return value;
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
                if (Math.pow(0.1, scale) > value) {
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
        /** 正常化地址 */
        export function normalize(value: string): string {
            if (objects.isNull(value) || value.length === 0) {
                value = ROOT_URL_SIGN;
            }
            let url: string;
            if (value.startsWith(ROOT_URL_SIGN)) {
                // 存在根目录标记，则取文档地址作为根
                url = document.location.origin + document.location.pathname;
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
            if (strings.isEmpty(arguments[0])) {
                // 未提供类型，则返回文档地址
                let url: string = document.location.origin + document.location.pathname;
                return url.substring(0, url.lastIndexOf("/"));
            }
            let fileName: string = arguments[0];
            if (!fileName.startsWith("/")) { fileName = "/" + fileName; }
            if (!fileName.endsWith(".js")) { fileName = fileName + ".js"; }
            let fileName2: string = fileName.indexOf(ibas.SIGN_MIN_LIBRARY + ".js") > 0 ? fileName : fileName.replace(".js", ibas.SIGN_MIN_LIBRARY + ".js");
            let root: string = window.document.location.origin;
            let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
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
            if (strings.equalsIgnoreCase(window.location.hash, newHash)) {
                let event: HashChangeEvent = new HashChangeEvent("hashchange", { oldURL: window.location.href, newURL: newHash });
                window.dispatchEvent(event);
            } else {
                window.location.hash = newHash;
            }
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
        export function sort<T>(datas: Array<T>, sorts: ISort[]): Array<T> {
            if (objects.isNull(sorts) || sorts.length === 0) {
                return datas;
            }
            let newDatas: Array<T> = datas.sort((c, b): number => {
                let compare: number = 0;
                for (let sort of sorts) {
                    compare = 0;
                    let cValue: any = objects.getPropertyValue(sort.alias, c);
                    let bValue: any = objects.getPropertyValue(sort.alias, b);
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
                            compare = cValue.toString().localeCompare(bValue.toString());
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
            return newDatas;
        }
    }
}