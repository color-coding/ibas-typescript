/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { i18n } from "../i18n/index";
import { ArrayList } from "./Common";
import { strings } from "./Strings";
/**
 * 对象
 */
export module objects {
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
        return type.name;
    }
    /**
     * 获取实例类型
     * @param 实例 类型
     */
    export function getType(instance: any): any {
        if (objects.isNull(instance)) {
            return undefined;
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
}
/**
 * 唯一标识
 */
export module uuids {
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
export module enums {
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
export module dates {
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
        return new Date(strings.format("{0}-{1}-{2}", date.getFullYear(), date.getMonth() + 1, date.getDate()));
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
    export function valueOf(value: string): Date {
        if (objects.isNull(value) || value.length === 0) {
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
                year = Number.parseInt(tmps[0]);
            }
            if (!objects.isNull(tmps[1])) {
                month = Number.parseInt(tmps[1]);
            }
            if (!objects.isNull(tmps[2])) {
                day = Number.parseInt(tmps[2]);
            }
        }
        if (!objects.isNull(time)) {
            let spChar: string = ":";
            tmps = time.split(spChar);
            if (!objects.isNull(tmps[0])) {
                hour = Number.parseInt(tmps[0]);
            }
            if (!objects.isNull(tmps[1])) {
                minute = Number.parseInt(tmps[1]);
            }
            if (!objects.isNull(tmps[2])) {
                second = Number.parseInt(tmps[2]);
            }
        }
        // 月份从0开始
        return new Date(year, month - 1, day, hour, minute, second);
    }

    const DATA_SEPARATOR: string = "-";
    const TIME_SEPARATOR: string = ":";
    const DATA_TIME_SEPARATOR: string = "T";
    const DATA_PART_YEAR: string = "yyyy";
    const DATA_PART_MONTH: string = "MM";
    const DATA_PART_DAY: string = "dd";
    const DATA_PART_HOUR: string = "hh";
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
            let diff = minuend.getTime() - value.getTime();
            if (type === emDifferenceType.SECOND) {
                diff = Math.abs(diff / 1000);
                return diff;
            }
            if (type === emDifferenceType.MINUTE) {
                diff = Math.abs(diff / 60);
                return diff;
            }
            if (type === emDifferenceType.HOUR) {
                diff = Math.abs(diff / 60);
                return diff;
            }
            if (type === emDifferenceType.DAY) {
                diff = Math.abs(diff / 24);
                return diff;
            }
        }
        return NaN;
    }
}
/**
 * 数字
 */
export module numbers {
    /** 转为整数 */
    export function toInt(data: any): number {
        let value: number = parseInt(data, 0);
        if (isNaN(value)) {
            return 0;
        } else {
            return value;
        }

    }
    /**  转为小数 */
    export function toFloat(data: any): number {
        let value: number = parseFloat(data);
        if (isNaN(value)) {
            return 0.0;
        } else {
            return value;
        }
    }
}