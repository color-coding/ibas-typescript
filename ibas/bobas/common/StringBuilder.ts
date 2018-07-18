/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /**
     * 字符串构建器
     */
    export class StringBuilder {
        constructor() {
            this.valueMap = new Map<any, string>();
            this.valueMap.set(null, "null");
            this.valueMap.set(undefined, "undefined");
        }
        private valueMap: Map<any, string>;
        /**
         * 设置值的映射字符串
         * @param value 值
         * @param str 映射的字符串
         */
        map(value: any, str: string): void {
            if (objects.isNull(str)) {
                return;
            }
            this.valueMap.set(value, str);
        }
        /**
         * 已添加的值
         */
        private values: string[] = new Array<string>();
        /**
         * 获取当前长度
         */
        get length(): number {
            return this.values.length;
        }
        /**
         * 添加字符
         */
        append(str: any): void {
            if (!objects.isNull(this.valueMap) && this.valueMap.has(str)) {
                this.values.push(this.valueMap.get(str));
            } else {
                if (!objects.isNull(str)) {
                    this.values.push(str.toString());
                }
            }
        }
        /**
         * 生成字符串
         */
        toString(): string {
            let str: string = "";
            for (let item of this.values) {
                str += item;
            }
            return str;
        }
    }
}