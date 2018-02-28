/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /**
     * 字符串构建器
     */
    export class StringBuilder {
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
            if (str === undefined) {
                this.values.push("undefined");
            } else if (str === null) {
                this.values.push("null");
            } else {
                this.values.push(str.toString());
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