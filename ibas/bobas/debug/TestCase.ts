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
        /**
         * 运行测试
         * @param result 运行结果
         */
        run(result: TestResult = undefined): void {
            if (objects.isNull(result)) {
                result = new TestResult();
            }
            for (let item of Object.getOwnPropertyNames(objects.getType(this).prototype)) {
                if (strings.isEmpty(item)) {
                    continue;
                }
                if (!item.startsWith("test")) {
                    continue;
                }
                if (!(this[item] instanceof Function)) {
                    continue;
                }
                try {
                    logger.log(emMessageLevel.WARN, "{0}: begin to run [{1}].", objects.getTypeName(this), item);
                    this[item]();
                } catch (error) {
                    if (error instanceof AssertionError) {
                        // 断言错误
                        logger.log(emMessageLevel.ERROR, "{0}: assertion faild, {1}.", objects.getTypeName(this), error.message);
                        result.addFailure(this, error);
                    } else {
                        // 执行错误
                        logger.log(emMessageLevel.ERROR, "{0}: an error has occured, {1}", objects.getTypeName(this), error.message);
                        result.addError(this, error);
                    }
                }
            }
        }
    }
    const PROPERTY_ERRORS: symbol = Symbol("errors");
    const PROPERTY_FAILURES: symbol = Symbol("failures");
    /** 测试结果 */
    export class TestResult {
        /** 添加运行错误 */
        addError(test: TestCase, error: Error): void {
            if (!(this[PROPERTY_ERRORS] instanceof Array)) {
                this[PROPERTY_ERRORS] = new ArrayList<TestFailure>();
            }
            this[PROPERTY_ERRORS].add(new TestFailure(test, error));
        }
        /** 添加断言错误 */
        addFailure(test: TestCase, error: Error): void {
            if (!(this[PROPERTY_FAILURES] instanceof Array)) {
                this[PROPERTY_FAILURES] = new ArrayList<TestFailure>();
            }
            this[PROPERTY_FAILURES].add(new TestFailure(test, error));
        }
        /** 运行错误 */
        errors(): TestFailure[] {
            return this[PROPERTY_ERRORS];
        }
        /** 断言错误 */
        failures(): TestFailure[] {
            return this[PROPERTY_FAILURES];
        }
    }
    /** 测试失败 */
    export class TestFailure {
        constructor(test: TestCase, error: Error) {
            this.failedTest = test;
            this.thrownError = error;
        }
        /** 失败的测试 */
        failedTest: TestCase;
        /** 抛出的错误 */
        thrownError: Error;
    }
    export namespace test {
        /**
         * 返回程序包的测试用例
         * @param lib 程序包
         * @param namespace 分析的命名空间
         */
        export function cases(lib: any): IList<TestCase> {
            let cases: ArrayList<TestCase> = new ArrayList<TestCase>();
            for (let item of Object.getOwnPropertyNames(lib)) {
                let Type: any = lib[item];
                if (!objects.isAssignableFrom(Type, TestCase)) {
                    continue;
                }
                let tCase: TestCase = new Type;
                if (!(tCase instanceof TestCase)) {
                    continue;
                }
                cases.add(tCase);
            }
            return cases;
        }
    }
}