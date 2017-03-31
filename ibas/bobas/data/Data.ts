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