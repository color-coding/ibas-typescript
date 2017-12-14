﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { StringBuilder } from "./Common";
/**
 * 对字符串操作的封装方法
 */
export module strings {
    /**
     * 转为字符串
     */
    export function toString(content: any): string {
        if (content === undefined || content === null) {
            return "";
        } else if (content instanceof Array) {
            let stringBuilder: StringBuilder = new StringBuilder();
            for (let item of content) {
                if (stringBuilder.length > 0) {
                    stringBuilder.append(", ");
                }
                stringBuilder.append(item);
            }
            return stringBuilder.toString();
        }
        return content.toString();
    }
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
        } else {
            return value.toString();
        }
    }
}
