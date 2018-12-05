/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="../common/Logger.ts" />
/// <reference path="./Expression.ts" />
/// <reference path="./JudgmentExpression.ts" />

namespace ibas {
    /** 值操作者 */
    export class ValueOperator implements IValueOperator {
        private value: any;
        /** 获取值 */
        getValue(): any {
            return this.value;
        }
        /** 设置值 */
        setValue(value: any): void {
            this.value = value;
        }
        /** 获取值类型 */
        valueType(): string {
            let name: string = typeof this.getValue();
            if (name === "object") {
                // 日期类型
                name = objects.getName(objects.getType(this.getValue()));
            }
            return name;
        }
    }
    /** 增强值操作者 */
    export class ValueOperatorEx extends ValueOperator implements IValueOperatorEx {
        /** 类型转换者 */
        converter: IValueConverter<any>;
        /** 获取值 */
        getValue(): any {
            if (objects.isNull(this.converter)) {
                return super.getValue();
            }
            return this.converter.convert(super.getValue());
        }
    }
    /** 属性值操作者 */
    export class PropertyValueOperator extends ValueOperator implements IPropertyValueOperator {
        /** 属性名称 */
        propertyName: string;
        /** 获取值 */
        getValue(): any {
            return objects.getPropertyValue(super.getValue(), this.propertyName);
        }
    }
    export class ValueConverterString implements IValueConverter<string> {
        convert(value: any): string {
            return String(value);
        }
    }
    export namespace judgment {
        export namespace converter {
            export function create<T>(type: string): IValueConverter<T> {
                if (strings.equalsIgnoreCase("string", type)) {
                    return <IValueConverter<T>>(<any>{
                        convert(value: any): string {
                            return String(value);
                        }
                    });
                } else if (strings.equalsIgnoreCase("boolean", type)) {
                    return <IValueConverter<T>>(<any>{
                        convert(value: any): boolean {
                            return Boolean(value);
                        }
                    });
                } else if (strings.equalsIgnoreCase("number", type)) {
                    return <IValueConverter<T>>(<any>{
                        convert(value: any): number {
                            return Number(value);
                        }
                    });
                } else if (strings.equalsIgnoreCase("date", type)) {
                    return <IValueConverter<T>>(<any>{
                        convert(value: any): Date {
                            if (typeof value === "string") {
                                return dates.valueOf(value);
                            }
                            return undefined;
                        }
                    });
                }
                throw new Error(i18n.prop("sys_unrecognized_data"));
            }
        }
    }
    /**
     * 判断链-项目
     */
    export class JudgmentLinkItem implements IJudgmentLinkItem {

        constructor() {
            this.relationship = emJudmentOperation.AND;
            this.openBracket = 0;
            this.operation = emJudmentOperation.EQUAL;
            this.closeBracket = 0;
        }
        /** 关系（and、or） */
        relationship: emJudmentOperation;
        /** 开括号 */
        openBracket: number;
        /** 左取值 */
        leftOperter: IValueOperator;
        /** 比较方式 */
        operation: emJudmentOperation;
        /** 右取值 */
        rightOperter: IValueOperator;
        /** 闭括号 */
        closeBracket: number;
        /** 输出字符串 */
        toString(): string {
            let stringBuilder: StringBuilder = new StringBuilder();
            stringBuilder.append(enums.toString(emJudmentOperation, this.relationship));
            stringBuilder.append(" ");
            for (let index: number = 0; index < this.openBracket; index++) {
                stringBuilder.append("(");
            }
            stringBuilder.append(this.leftOperter.getValue());
            stringBuilder.append(" ");
            stringBuilder.append(enums.toString(emJudmentOperation, this.operation.toString()));
            stringBuilder.append(" ");
            stringBuilder.append(this.rightOperter.getValue());
            for (let index: number = 0; index < this.closeBracket; index++) {
                stringBuilder.append(")");
            }
            return stringBuilder.toString();
        }
    }
    /**
     * 判断链
     */
    export class JudgmentLink implements IJudgmentLink {
        constructor() {
            this.judgmentItems = new ArrayList<IJudgmentLinkItem>();
        }
        /** 判断项目集合 */
        judgmentItems: IJudgmentLinkItem[];
        /**
         * 获取判断项目
         * @param startIndex 括号索引
         * @param judgmentItems 基于的项目
         */
        private getJudgmentItems(startIndex: number, judgmentItems: IJudgmentLinkItem[]): IJudgmentLinkItem[] {
            let done: boolean = false;// 完成
            let closeCount: number = 0;
            let bracket: number = -1;
            let currentJudgmentItems: ArrayList<JudgmentLinkItem> = new ArrayList<JudgmentLinkItem>();
            for (let index: number = startIndex; index < judgmentItems.length; index++) {
                let jItem: JudgmentLinkItem = judgmentItems[index];
                if (bracket === -1) {
                    bracket = jItem.openBracket;
                }
                currentJudgmentItems.add(jItem);
                if (jItem.closeBracket > 0) {
                    closeCount += jItem.closeBracket;
                }
                if (jItem.openBracket > 0 && index !== startIndex) {
                    closeCount -= jItem.openBracket;
                }
                if (closeCount >= bracket) {
                    // 闭环
                    done = true;
                    break;
                }
            }
            if (!done) {
                // 未标记完成，存在不匹配的括号
                throw new Error(i18n.prop("sys_invaild_judgment_link_bracket", bracket));
            }
            return currentJudgmentItems;
        }

        /**
         * 判断
         * @param value 比较值
         * @return true,满足;false,不满足
         */
        judge(value: any): boolean {
            if (objects.isNull(value)) {
                // 空对象，
                return false;
            }
            if (this.judgmentItems === null) {
                // 无条件
                return true;
            }
            // 设置所以条件的比较值
            for (let item of this.judgmentItems) {
                // 左值
                if (item.leftOperter instanceof PropertyValueOperator) {
                    let operator: IPropertyValueOperator = <IPropertyValueOperator>item.leftOperter;
                    operator.setValue(value);
                }
                // 右值
                if (item.rightOperter instanceof PropertyValueOperator) {
                    let operator: IPropertyValueOperator = <IPropertyValueOperator>item.rightOperter;
                    operator.setValue(value);
                }
            }
            return this.judgeLink(0, this.judgmentItems);
        }
        /**
         * 判断链
         * @param bracket 括号索引
         * @param judgmentItems 判断链
         */
        protected judgeLink(bracket: number, judgmentItems: IJudgmentLinkItem[]): boolean {
            let currentValue: boolean = false;// 当前的结果
            let rootJudExp: IJudgmentExpression<boolean> = null;
            for (let index: number = 0; index < judgmentItems.length; index++) {
                let jItem: IJudgmentLinkItem = judgmentItems[index];
                if (rootJudExp !== null) {
                    rootJudExp.operation = jItem.relationship;
                }
                // 计算表达式结果
                if ((jItem.openBracket !== bracket || (jItem.openBracket === bracket && index > 0))
                    && jItem.openBracket > 0) {
                    // 新的括号，先执行新括号判断
                    let nextJudgmentItems: IJudgmentLinkItem[] = this.getJudgmentItems(index, judgmentItems);
                    currentValue = this.judgeLink(jItem.openBracket, nextJudgmentItems);
                    // 跳过已执行的
                    if (nextJudgmentItems.length > 0) {
                        index = index + nextJudgmentItems.length - 1;
                    }
                } else {
                    // 计算当前表达式
                    currentValue = this.createExpression(jItem).result();
                }
                if (rootJudExp === null) {
                    // 第一个表达式
                    rootJudExp = judgment.expression.create<boolean>("boolean");
                    rootJudExp.leftValue = currentValue;
                    rootJudExp.operation = emJudmentOperation.AND;
                    rootJudExp.rightValue = true;
                } else {
                    // 后续表达式
                    rootJudExp.rightValue = currentValue;
                }
                currentValue = rootJudExp.result();
                rootJudExp.leftValue = currentValue;// 结果左移
                if (!rootJudExp.result()) {
                    // 表达式不成立
                    if (index === judgmentItems.length - 1) {
                        // 最后一个表达式，返回结果
                        return false;
                    }
                }
            }
            return true;
        }
        /**
         * 创建表达式
         * @param judgeItem 判断项
         */
        protected createExpression(judgeItem: IJudgmentLinkItem): IJudgmentExpression<any> {
            let expression: IJudgmentExpression<any> = judgment.expression.create(judgeItem.leftOperter.valueType());
            expression.leftValue = judgeItem.leftOperter.getValue();
            expression.operation = judgeItem.operation;
            expression.rightValue = judgeItem.rightOperter.getValue();
            return expression;
        }
    }
    /**
     * 业务对象的判断链
     */
    export class BOJudgmentLink extends JudgmentLink {
        /**
         * 判断
         * @param value 比较值
         * @return true,满足;false,不满足
         */
        judge(value: any): boolean {
            if (objects.isNull(value)) {
                // 空对象，
                return false;
            }
            if (this.judgmentItems == null) {
                // 无条件
                return true;
            }
            let jItems: ArrayList<IJudgmentLinkItem> = new ArrayList<IJudgmentLinkItem>();
            // 设置所以条件的比较值
            for (let item of this.judgmentItems) {
                // 左值
                if (item.leftOperter instanceof PropertyValueOperator) {
                    let operator: IPropertyValueOperator = item.leftOperter;
                    operator.setValue(value);
                }
                // 右值
                if (item.rightOperter instanceof PropertyValueOperator) {
                    let operator: IPropertyValueOperator = item.rightOperter;
                    operator.setValue(value);
                } else if (item.rightOperter instanceof ValueOperatorEx) {
                    let operator: IValueOperatorEx = item.rightOperter;
                    operator.converter = judgment.converter.create(item.leftOperter.valueType());
                }
                jItems.add(item);
            }
            let stringBuilder: StringBuilder = new StringBuilder();
            stringBuilder.append("judgment:");
            stringBuilder.append(" ");
            stringBuilder.append(value.toString());
            stringBuilder.append("\n\t");
            for (let item of jItems) {
                if (stringBuilder.length > 4) {
                    stringBuilder.append(" ");
                }
                stringBuilder.append(item.toString());
            }
            logger.log(emMessageLevel.DEBUG, stringBuilder.toString());
            return this.judgeLink(0, jItems);
        }
        /**
         * 创建表达式
         * @param judgeItem 判断项
         */
        protected createExpression(judgeItem: IJudgmentLinkItem): IJudgmentExpression<any> {
            if (judgeItem.operation === emJudmentOperation.BEGIN_WITH
                || judgeItem.operation === emJudmentOperation.END_WITH
                || judgeItem.operation === emJudmentOperation.NOT_BEGIN_WITH
                || judgeItem.operation === emJudmentOperation.NOT_END_WITH
                || judgeItem.operation === emJudmentOperation.CONTAIN
                || judgeItem.operation === emJudmentOperation.NOT_CONTAIN) {
                // 此操作均为字符串独有操作
                let expression: IJudgmentExpression<string> = judgment.expression.create("string");
                expression.leftValue = strings.valueOf(judgeItem.leftOperter.getValue());
                expression.operation = judgeItem.operation;
                expression.rightValue = strings.valueOf(judgeItem.rightOperter.getValue());
                return expression;
            }
            return super.createExpression(judgeItem);
        }
    }
    /**
     * 业务对象的判断链
     */
    export class BOJudgmentLinkCondition extends BOJudgmentLink {
        /** 解析查询条件 */
        parsingConditions(conditions: ICondition[]): void {
            // 判断无条件
            if (objects.isNull(conditions) || conditions.length === 0) {
                return;
            }
            let jLinkItems: ArrayList<IJudgmentLinkItem> = new ArrayList<IJudgmentLinkItem>();
            for (let item of conditions) {
                let jItem: JudgmentLinkItem = new JudgmentLinkItem();
                jItem.openBracket = item.bracketOpen;
                jItem.closeBracket = item.bracketClose;
                if (item.relationship === emConditionRelationship.NONE) {
                    jItem.relationship = emJudmentOperation.AND;
                } else {
                    jItem.relationship = judgment.convert.relationship(item.relationship);
                }
                jItem.operation = judgment.convert.operation(item.operation);
                // 左边取值
                let operator: IPropertyValueOperator = new PropertyValueOperator();
                operator.propertyName = item.alias;
                jItem.leftOperter = operator;
                // 右边取值
                if (!strings.isEmpty(item.comparedAlias)) {
                    // 与属性比较
                    operator = new PropertyValueOperator();
                    operator.propertyName = item.comparedAlias;
                    jItem.rightOperter = operator;
                } else {
                    // 与值比较
                    let operator: IValueOperator = new ValueOperatorEx();
                    operator.setValue(item.value);
                    jItem.rightOperter = operator;
                }
                jLinkItems.add(jItem);
            }
            if (jLinkItems.length === 0) {
                throw new Error(i18n.prop("sys_invaild_judgment_link_conditions"));
            }
            super.judgmentItems = jLinkItems;
        }
    }
}