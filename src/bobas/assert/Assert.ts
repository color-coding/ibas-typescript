/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * 单元测试，断言相关
 */
export module assert {
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
    export function equals(...pars: any[]): void {
        let message: string, unexpected: any, actual: any
        if (pars.length === 2) {
            message = "assertion failure: not equals.";
            unexpected = pars[0];
            actual = pars[1];
        } else if (pars.length === 3) {
            message = pars[0];
            unexpected = pars[1];
            actual = pars[2];
        } else {
            throw new Error("assert equals invalid parameters.");
        }
        if (unexpected !== actual) {
            throw new Error(message);
        }
    }
}