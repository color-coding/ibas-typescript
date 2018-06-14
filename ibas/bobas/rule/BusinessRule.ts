/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 业务规则-最大长度 */
    export class BusinessRuleMaxLength extends BusinessRuleCommon {
        /**
         *
         * @param length 长度
         * @param properties 属性
         */
        constructor(length: number, ...properties: string[]) {
            super();
            this.maxLength = length;
            this.name = i18n.prop("sys_business_rule_max_length");
            for (let item of properties) {
                this.inputProperties.add(item);
            }
        }
        maxLength: number;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            for (let item of context.inputValues.entries()) {
                let name: string = item["0"];
                let value: any = item["1"];
                if (typeof value === "string") {
                    if (value.length > this.maxLength) {
                        throw new BusinessRuleError(i18n.prop("sys_business_rule_max_length_error", name, value, this.maxLength));
                    }
                }
            }
        }
    }
    /** 业务规则-最大值 */
    export class BusinessRuleMaxValue<T extends number | Date> extends BusinessRuleCommon {
        /**
         *
         * @param maxValue 最大值
         * @param properties 属性
         */
        constructor(maxValue: T, ...properties: string[]) {
            super();
            this.name = i18n.prop("sys_business_rule_max_value");
            this.maxValue = maxValue;
            for (let item of properties) {
                this.inputProperties.add(item);
            }
        }
        maxValue: T;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            for (let item of context.inputValues.entries()) {
                let name: string = item["0"];
                let value: any = item["1"];
                if (typeof this.maxValue === "number") {
                    value = numbers.valueOf(value);
                    if (value > this.maxValue) {
                        throw new BusinessRuleError(i18n.prop("sys_business_rule_max_value_error", name, value, this.maxValue));
                    }
                } else if (this.maxValue instanceof Date) {
                    value = dates.valueOf(value);
                    if (dates.compare(value, this.maxValue) > 0) {
                        throw new BusinessRuleError(i18n.prop("sys_business_rule_max_value_error", name, value, this.maxValue));
                    }
                }
            }
        }
    }
    /** 业务规则-最小值 */
    export class BusinessRuleMinValue<T extends number | Date> extends BusinessRuleCommon {
        /**
         *
         * @param minValue 最小值
         * @param properties 属性
         */
        constructor(minValue: T, ...properties: string[]) {
            super();
            this.name = i18n.prop("sys_business_rule_min_value");
            this.minValue = minValue;
            for (let item of properties) {
                this.inputProperties.add(item);
            }
        }
        minValue: T;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            for (let item of context.inputValues.entries()) {
                let name: string = item["0"];
                let value: any = item["1"];
                if (typeof this.minValue === "number") {
                    value = numbers.valueOf(value);
                    if (value < this.minValue) {
                        throw new BusinessRuleError(i18n.prop("sys_business_rule_min_value_error", name, value, this.minValue));
                    }
                } else if (this.minValue instanceof Date) {
                    value = dates.valueOf(value);
                    if (dates.compare(value, this.minValue) < 0) {
                        throw new BusinessRuleError(i18n.prop("sys_business_rule_min_value_error", name, value, this.minValue));
                    }
                }
            }
        }
    }
    /** 业务规则-要求有值 */
    export class BusinessRuleRequired extends BusinessRuleCommon {
        /**
         *
         * @param properties 属性
         */
        constructor(...properties: string[]) {
            super();
            this.name = i18n.prop("sys_business_rule_required");
            for (let item of properties) {
                this.inputProperties.add(item);
            }
        }
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            for (let item of context.inputValues.entries()) {
                let name: string = item["0"];
                let value: any = item["1"];
                if (objects.isNull(value)) {
                    throw new BusinessRuleError(i18n.prop("sys_business_rule_required_error", name));
                }
            }
        }
    }
    /** 业务规则-求和 */
    export class BusinessRuleSummation extends BusinessRuleCommon {
        /**
         *
         * @param result 属性-结果
         * @param addends 属性-加数
         */
        constructor(result: string, ...addends: string[]) {
            super();
            this.name = i18n.prop("sys_business_rule_summation");
            this.result = result;
            this.addends = new ArrayList<string>();
            for (let item of addends) {
                this.addends.add(item);
            }
            // 设置输入输出参数
            for (let item of this.addends) {
                this.inputProperties.add(item);
            }
            this.affectedProperties.add(this.result);
        }
        /** 结果 */
        result: string;
        /** 求和 */
        addends: IList<string>;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let sum: number = 0;
            for (let property of this.addends) {
                let value: number = numbers.valueOf(context.inputValues.get(property));
                sum += value;
            }
            context.outputValues.set(this.result, ibas.numbers.round(sum));
        }
    }
    /** 业务规则-求差 */
    export class BusinessRuleSubtraction extends BusinessRuleCommon {
        /**
         *
         * @param result 属性-结果
         * @param subtrahend 属性-被减数
         * @param subtractors 属性-减数
         */
        constructor(result: string, subtrahend: string, ...subtractors: string[]) {
            super();
            this.name = i18n.prop("sys_business_rule_subtraction");
            this.result = result;
            this.subtrahend = subtrahend;
            this.subtractors = new ArrayList<string>();
            for (let item of subtractors) {
                this.subtractors.add(item);
            }
            // 设置输入输出参数
            this.inputProperties.add(this.subtrahend);
            for (let item of this.subtractors) {
                this.inputProperties.add(item);
            }
            this.affectedProperties.add(this.result);
        }
        /** 结果 */
        result: string;
        /** 被减数 */
        subtrahend: string;
        /** 减数 */
        subtractors: IList<string>;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let total: number = context.inputValues.get(this.subtrahend);
            for (let property of this.subtractors) {
                let value: number = numbers.valueOf(context.inputValues.get(property));
                total -= value;
            }
            context.outputValues.set(this.result, ibas.numbers.round(total));
        }
    }
    /** 业务规则-求积 */
    export class BusinessRuleMultiplication extends BusinessRuleCommon {
        /**
         *
         * @param result 属性-结果
         * @param multiplicand 属性-被乘数
         * @param multiplier 属性-乘数
         */
        constructor(result: string, multiplicand: string, multiplier: string) {
            super();
            this.name = i18n.prop("sys_business_rule_multiplication");
            this.result = result;
            this.multiplicand = multiplicand;
            this.multiplier = multiplier;
            this.inputProperties.add(this.multiplicand);
            this.inputProperties.add(this.multiplier);
            this.affectedProperties.add(this.result);
        }
        /** 结果 */
        result: string;
        /** 被乘数 */
        multiplicand: string;
        /** 乘数 */
        multiplier: string;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let multiplicand: number = numbers.valueOf(context.inputValues.get(this.multiplicand));
            let multiplier: number = numbers.valueOf(context.inputValues.get(this.multiplier));
            let result: number = multiplicand * multiplier;
            context.outputValues.set(this.result, ibas.numbers.round(result));
        }
    }
    /** 业务规则-求商 */
    export class BusinessRuleDivision extends BusinessRuleCommon {
        /**
         *
         * @param result 属性-结果
         * @param dividend 属性-被除数
         * @param divisor 属性-除数
         */
        constructor(result: string, dividend: string, divisor: string) {
            super();
            this.name = i18n.prop("sys_business_rule_division");
            this.result = result;
            this.dividend = dividend;
            this.divisor = divisor;
            this.inputProperties.add(this.dividend);
            this.inputProperties.add(this.divisor);
            this.affectedProperties.add(this.result);
        }
        /** 结果 */
        result: string;
        /** 被乘数 */
        dividend: string;
        /** 乘数 */
        divisor: string;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let dividend: number = numbers.valueOf(context.inputValues.get(this.dividend));
            let divisor: number = numbers.valueOf(context.inputValues.get(this.divisor));
            let result: number = dividend / divisor;
            context.outputValues.set(this.result, ibas.numbers.round(result));
        }
    }
    /** 业务规则-加减法推导 */
    export class BusinessRuleAdditiveDeduction extends BusinessRuleCommon {
        /**
         *
         * @param augend 属性-被加数
         * @param addend 属性-加数
         * @param result 属性-结果
         */
        constructor(augend: string, addend: string, result: string) {
            super();
            this.name = i18n.prop("sys_business_rule_additive_deduction");
            this.result = result;
            this.augend = augend;
            this.addend = addend;
            this.inputProperties.add(this.result);
            this.inputProperties.add(this.augend);
            this.inputProperties.add(this.addend);
            this.affectedProperties.add(this.result);
            this.affectedProperties.add(this.addend);
        }
        /** 结果 */
        result: string;
        /** 被加数 */
        augend: string;
        /** 加数 */
        addend: string;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let result: number = numbers.valueOf(context.inputValues.get(this.result));
            let augend: number = numbers.valueOf(context.inputValues.get(this.augend));
            let addend: number = numbers.valueOf(context.inputValues.get(this.addend));

            if (augend === 0) {
                context.outputValues.set(this.result, ibas.numbers.round(addend));
                return;
            }
            if (addend !== 0 && result === 0) {
                // 结果 = 加数 + 被加数
                result = addend + augend;
                context.outputValues.set(this.result, ibas.numbers.round(result));
            } else if (addend === 0 && result !== 0) {
                // 加数 = 结果 - 被加数
                addend = result - augend;
                context.outputValues.set(this.addend, ibas.numbers.round(addend));
            }
        }
    }
    /** 业务规则-乘除法推导 */
    export class BusinessRuleMultiplicativeDeduction extends BusinessRuleCommon {
        /**
         *
         * @param augend 属性-被乘数
         * @param addend 属性-乘数
         * @param result 属性-结果
         */
        constructor(multiplicand: string, multiplier: string, result: string) {
            super();
            this.name = i18n.prop("sys_business_rule_multiplicative_deduction");
            this.result = result;
            this.multiplicand = multiplicand;
            this.multiplier = multiplier;
            this.inputProperties.add(this.result);
            this.inputProperties.add(this.multiplicand);
            this.inputProperties.add(this.multiplier);
            this.affectedProperties.add(this.result);
            this.affectedProperties.add(this.multiplier);
        }
        /** 结果 */
        result: string;
        /** 被乘数 */
        multiplicand: string;
        /** 乘数 */
        multiplier: string;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCommon): void {
            let result: number = numbers.valueOf(context.inputValues.get(this.result));
            let multiplicand: number = numbers.valueOf(context.inputValues.get(this.multiplicand));
            let multiplier: number = numbers.valueOf(context.inputValues.get(this.multiplier));

            if (multiplicand === 0) {
                context.outputValues.set(this.result, ibas.numbers.round(multiplicand));
                return;
            }
            if (multiplier !== 0 && result === 0) {
                // 结果 = 乘数 * 被乘数
                result = multiplier * multiplicand;
                context.outputValues.set(this.result, ibas.numbers.round(result));
            } else if (multiplicand !== 0 && result !== 0) {
                // 乘数 = 结果 / 被乘数
                multiplier = result / multiplicand;
                context.outputValues.set(this.multiplier, ibas.numbers.round(multiplier));
            }
        }
    }
    /**
     * 业务规则-集合元素属性求和
     */
    export class BusinessRuleSumElements extends BusinessRuleCollection {
        /**
         *
         * @param result 属性-结果
         * @param collection 属性-集合
         * @param summing 属性-求和
         */
        constructor(result: string, collection: string, summing: string) {
            super(collection);
            this.name = i18n.prop("sys_business_rule_sum_elements");
            this.result = result;
            this.summing = summing;
            this.inputProperties.add(this.summing);
            this.affectedProperties.add(this.result);
        }
        /** 结果 */
        result: string;
        /** 求和 */
        summing: string;
        /** 计算规则 */
        protected compute(context: BusinessRuleContextCollection): void {
            let result: number = 0;
            let values: any[] = context.inputValues.get(this.summing);
            if (!objects.isNull(values)) {
                for (let item of values) {
                    result += numbers.valueOf(item);
                }
            }
            context.outputValues.set(this.result, ibas.numbers.round(result));
        }
    }
}