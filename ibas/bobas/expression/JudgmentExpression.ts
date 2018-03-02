/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="./Expression.ts" />

namespace ibas {
    /** 数据转换 */
    export namespace judgment {
        export namespace convert {
            export function operation(value: emConditionOperation): emJudmentOperation {
                if (objects.isNull(value)) {
                    throw new Error(i18n.prop("sys_invalid_parameter", "value"));
                }
                if (value === emConditionOperation.CONTAIN) {
                    return emJudmentOperation.CONTAIN;
                } else if (value === emConditionOperation.NOT_CONTAIN) {
                    return emJudmentOperation.NOT_CONTAIN;
                } else if (value === emConditionOperation.EQUAL) {
                    return emJudmentOperation.EQUAL;
                } else if (value === emConditionOperation.NOT_EQUAL) {
                    return emJudmentOperation.NOT_EQUAL;
                } else if (value === emConditionOperation.GRATER_EQUAL) {
                    return emJudmentOperation.GRATER_EQUAL;
                } else if (value === emConditionOperation.GRATER_THAN) {
                    return emJudmentOperation.GRATER_THAN;
                } else if (value === emConditionOperation.LESS_EQUAL) {
                    return emJudmentOperation.LESS_EQUAL;
                } else if (value === emConditionOperation.LESS_THAN) {
                    return emJudmentOperation.LESS_THAN;
                } else if (value === emConditionOperation.START) {
                    return emJudmentOperation.BEGIN_WITH;
                } else if (value === emConditionOperation.END) {
                    return emJudmentOperation.END_WITH;
                }
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
            export function relationship(value: emConditionRelationship): emJudmentOperation {
                if (objects.isNull(value)) {
                    throw new Error(i18n.prop("sys_invalid_parameter", "value"));
                }
                if (value === emConditionRelationship.AND) {
                    return emJudmentOperation.AND;
                } else if (value === emConditionRelationship.OR) {
                    return emJudmentOperation.OR;
                }
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
        }
        export namespace expression {
            export function create<T>(type: string): IJudgmentExpression<T> {
                if (strings.equalsIgnoreCase("string", type)) {
                    return <IJudgmentExpression<T>>(<any>new JudgmentExpressionString());
                } else if (strings.equalsIgnoreCase("boolean", type)) {
                    return <IJudgmentExpression<T>>(<any>new JudgmentExpressionBoolean());
                } else if (strings.equalsIgnoreCase("number", type)) {
                    return <IJudgmentExpression<T>>(<any>new JudgmentExpressionNumber());
                } else if (strings.equalsIgnoreCase("date", type)) {
                    return <IJudgmentExpression<T>>(<any>new JudgmentExpressionDate());
                } else if (strings.equalsIgnoreCase("enum", type)) {
                    return <IJudgmentExpression<T>>(<any>new JudgmentExpressionEnum());
                }
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
        }
    }

    /**
     * 判断表达式
     */
    export abstract class JudgmentExpression<T> implements IJudgmentExpression<T> {
        /**
         * 表达式结果
         * @return true，成立；false，不成立
         * @throws 不支持的操作
         */
        result(): boolean {
            throw new Error(i18n.prop("sys_unsupported_operation"));
        }
        /**
         * 左值
         */
        leftValue: T;
        /**
         * 右值
         */
        rightValue: T;
        /**
         * 操作
         */
        operation: emJudmentOperation;
        /**
         * 字符串输出
         */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("expression:");
            builder.append(" ");
            builder.append(this.leftValue);
            builder.append(" ");
            builder.append(enums.toString(emJudmentOperation, this.operation));
            builder.append(" ");
            builder.append(this.rightValue);
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 布尔值表达式比较
     */
    export class JudgmentExpressionBoolean extends JudgmentExpression<boolean> {
        result(): boolean {
            if (this.operation === emJudmentOperation.EQUAL) {
                // 等
                if (this.leftValue === this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_EQUAL) {
                // 不等
                if (this.leftValue !== this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.AND) {
                // 且
                if (this.leftValue && this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.OR) {
                // 或
                if (this.leftValue || this.rightValue) {
                    return true;
                }
                return false;
            }
            // 不支持的
            return super.result();
        }
    }
    /**
     * 日期值表达式比较
     */
    export class JudgmentExpressionDate extends JudgmentExpression<Date> {
        result(): boolean {
            if (this.operation === emJudmentOperation.EQUAL) {
                // 等于
                // 左值为空
                if (objects.isNull(this.leftValue)) {
                    if (objects.isNull(this.rightValue)) {
                        return true;
                    }
                    return false;
                }
                // 比较左右值
                if (dates.equals(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_EQUAL) {
                // 不等于
                // 左值为空
                if (objects.isNull(this.leftValue)) {
                    if (this.rightValue !== null) {
                        return true;
                    }
                    return false;
                }
                // 比较左右值
                if (!dates.equals(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.GRATER_THAN) {
                // 大于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (dates.after(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.LESS_THAN) {
                // 小于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (dates.before(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.GRATER_EQUAL) {
                // 大于等于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (dates.after(this.leftValue, this.rightValue) || dates.equals(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.LESS_EQUAL) {
                // 小于等于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (dates.before(this.leftValue, this.rightValue) || dates.equals(this.leftValue, this.rightValue)) {
                    return true;
                }
                return false;
            }
            return super.result();
        }
    }
    /**
     * 数字值表达式比较
     */
    export class JudgmentExpressionNumber extends JudgmentExpression<number> {
        result(): boolean {
            if (this.operation === emJudmentOperation.EQUAL) {
                // 等于
                // 左值为空
                if (objects.isNull(this.leftValue)) {
                    if (objects.isNull(this.rightValue)) {
                        return true;
                    }
                    return false;
                }
                // 比较左右值
                if (this.leftValue === this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_EQUAL) {
                // 不等于
                // 左值为空
                if (objects.isNull(this.leftValue)) {
                    if (this.rightValue !== null) {
                        return true;
                    }
                    return false;
                }
                // 比较左右值
                if (this.leftValue !== this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.GRATER_THAN) {
                // 大于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (this.leftValue > this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.LESS_THAN) {
                // 小于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (this.leftValue < this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.GRATER_EQUAL) {
                // 大于等于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (this.leftValue >= this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.LESS_EQUAL) {
                // 小于等于
                // 左值为空或右值为空
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                // 比较左右值
                if (this.leftValue <= this.rightValue) {
                    return true;
                }
                return false;
            }
            return super.result();
        }
    }
    /**
     * 枚举值表达式比较
     */
    export class JudgmentExpressionEnum extends JudgmentExpression<number> {
        result(): boolean {
            if (this.operation === emJudmentOperation.EQUAL) {
                // 等于
                // 比较左右值
                if (this.leftValue === this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_EQUAL) {
                // 不等于
                // 比较左右值
                if (this.leftValue !== this.rightValue) {
                    return true;
                }
                return false;
            }
        }
    }
    /**
     * 字符串值表达式比较
     */
    export class JudgmentExpressionString extends JudgmentExpression<string> {
        result(): boolean {
            if (this.operation === emJudmentOperation.EQUAL) {
                // 等于
                // 比较左右值
                if (this.leftValue === this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_EQUAL) {
                // 不等于
                // 比较左右值
                if (this.leftValue !== this.rightValue) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.BEGIN_WITH) {
                // 开始与
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (this.leftValue.startsWith(this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.END_WITH) {
                // 结束于
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (this.leftValue.endsWith(this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_BEGIN_WITH) {
                // 非开始于
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (!this.leftValue.endsWith(this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_END_WITH) {
                // 非结束于
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (!this.leftValue.endsWith(this.rightValue)) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.CONTAIN) {
                // 包含
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (this.leftValue.indexOf(this.rightValue) >= 0) {
                    return true;
                }
                return false;
            } else if (this.operation === emJudmentOperation.NOT_CONTAIN) {
                // 不包含
                if (objects.isNull(this.leftValue) || objects.isNull(this.rightValue)) {
                    return false;
                }
                if (this.leftValue.indexOf(this.rightValue) < 0) {
                    return true;
                }
                return false;
            }
            // 其他
            return super.result();
        }
    }
}