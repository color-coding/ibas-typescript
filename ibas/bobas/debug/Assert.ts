/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 断言错误 */
    export class AssertionError extends Error {

    }
    /**
     * 单元测试，断言相关
     */
    export namespace asserts {
        /**
         * 断言相等
         * @param message 消息
         * @param unexpected 目标值
         * @param actual 运行值
         */
        export function equals(message: string, unexpected: any, actual: any): void;
        /**
         * 断言相等
         * @param unexpected 目标值
         * @param actual 运行值
         */
        export function equals(unexpected: any, actual: any): void;
        /**
         * 断言相等
         * @param pars 参数
         */
        export function equals(): void {
            let message: string, unexpected: any, actual: any;
            if (arguments.length === 2) {
                message = "assertion failure: not equals.";
                unexpected = arguments[0];
                actual = arguments[1];
            } else if (arguments.length === 3) {
                message = arguments[0];
                unexpected = arguments[1];
                actual = arguments[2];
            } else {
                throw new Error("assert equals invalid parameters.");
            }
            if (unexpected instanceof Date && actual instanceof Date) {
                if (equalsDate(unexpected, actual)) {
                    return;
                }
            }
            if (unexpected !== actual) {
                throw new AssertionError(message);
            }
        }
        /**
         * 是否为相等的日期
         * @param unexpected 判断的
         * @param actual 实际的
         */
        function equalsDate(unexpected: Date, actual: Date): boolean {
            return unexpected.getTime() === actual.getTime();
        }
    }
}