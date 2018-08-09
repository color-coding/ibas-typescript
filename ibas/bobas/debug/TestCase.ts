/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 单元测试 */
    export class TestCase {
        /**
         * 断言相等
         * @param message 消息
         * @param unexpected 目标值
         * @param actual 运行值
         */
        protected assertEquals(message: string, unexpected: any, actual: any): void;
        /**
         * 断言相等
         * @param unexpected 目标值
         * @param actual 运行值
         */
        protected assertEquals(unexpected: any, actual: any): void;
        /**
         * 断言相等的实现
         */
        protected assertEquals(): void {
            ibas.asserts.equals.apply(this, arguments);
        }
    }
    /** 测试结果 */
    export class TestResult {

    }
}