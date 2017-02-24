/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

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
}