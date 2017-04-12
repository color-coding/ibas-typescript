/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { i18n } from "../i18n/index";
import { string } from "./String";
/**
 * 对象
 */
export module object {
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
}
/**
 * 唯一标识
 */
export module uuid {
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
        if (object.isNull(type) || object.isNull(value)) {
            return undefined;
        }
        for (let item in type) {
            if (typeof item === typeof value) {
                if (item === value) {
                    return type[item];
                }
            }
        }
        return undefined;
    }
    /**
     * 描述枚举值
     * @param type 目标类型
     * @param value 值
     * @returns 首先语言，然后枚举，最后原始
     */
    export function describe(type: any, value: any): string {
        if (object.isNull(type) || object.isNull(value)) {
            return value;
        }
        // 获取枚举值
        let sValue: any = value;
        if (typeof sValue === "number") {
            sValue = type[sValue];
        }
        let dValue: string = sValue;
        // 获取枚举名称
        let name = "em_";// type.name;
        if (!object.isNull(name)) {
            dValue = i18n.prop((name + sValue).toLowerCase());
            if (dValue.startsWith("[") && dValue.endsWith("]")) {
                // 没有找到语言描述
                dValue = sValue;
            }
        }
        return dValue;
    }
}