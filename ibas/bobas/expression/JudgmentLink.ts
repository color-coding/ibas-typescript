/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import {
    emJudmentOperation, StringBuilder,
    objects, dates, strings, List, ArrayList,
} from "../data/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";
import {
    IJudgmentLinkItem, IJudgmentLink, IValueOperator,
    IPropertyValueOperator, IJudgmentExpression
} from "./Expression.d";
import { judment } from "./JudgmentExpression";

/** 值操作 */
export class ValueOperator implements IValueOperator {
    constructor();
    constructor(value: any);
    constructor() {
        this.value = arguments[0];
    }
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
        return typeof this.getValue();
    }
}
/** 值操作 */
export class PropertyValueOperator implements IPropertyValueOperator {
    constructor();
    constructor(propertyName: string);
    constructor() {
        this.propertyName = arguments[0];
    }
    private value: any;
    /** 获取值 */
    getValue(): any {
        for (let key in this.value) {
            if (strings.equalsIgnoreCase(key, this.propertyName)) {
                return this.value[key];
            }
        }
        return this.value;
    }
    /** 设置值 */
    setValue(value: any): void {
        this.value = value;
    }
    /** 获取值类型 */
    valueType(): string {
        return typeof this.getValue();
    }
    /** 属性名称 */
    propertyName: string;
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
        stringBuilder.append(this.relationship.toString());
        stringBuilder.append(" ");
        for (let index = 0; index < this.openBracket; index++) {
            stringBuilder.append("(");
        }
        stringBuilder.append(this.leftOperter.toString());
        stringBuilder.append(" ");
        stringBuilder.append(this.operation.toString());
        stringBuilder.append(" ");
        stringBuilder.append(this.rightOperter.toString());
        for (let index = 0; index < this.closeBracket; index++) {
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
        for (let index = 0; index < judgmentItems.length; index++) {
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
	 * @throws 不支持的操作
     */
    judge(value: any): boolean {
        // 无条件
        if (this.judgmentItems === null) {
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
        let rootJudExp: IJudgmentExpression<any> = null;
        for (let index = 0; index < judgmentItems.length; index++) {
            let jItem: IJudgmentLinkItem = judgmentItems[index];
            if (rootJudExp !== null) {
                rootJudExp.operation = jItem.relationship;
            }
            // 计算表达式结果
            if ((jItem.openBracket !== bracket || (jItem.openBracket === bracket && index > 0))
                && jItem.openBracket > 0) {
                // 新的括号，先执行新括号判断
                let nextJudgmentItems: JudgmentLinkItem[] = this.getJudgmentItems(index, judgmentItems);
                currentValue = this.judgeLink(jItem.openBracket, nextJudgmentItems);
                // 跳过已执行的
                if (nextJudgmentItems.length > 0) {
                    index = index + nextJudgmentItems.length - 1;
                }
            } else {
                // 计算当前表达式
                let currentJudExp: IJudgmentExpression<any> = judment.factory.create(jItem.leftOperter.valueType());
                currentJudExp.leftValue = jItem.leftOperter.getValue();
                currentJudExp.operation = jItem.operation;
                currentJudExp.rightValue = jItem.rightOperter.getValue();
                currentValue = currentJudExp.result();
            }
            if (rootJudExp === null) {
                // 第一个表达式
                rootJudExp = judment.factory.create<boolean>("boolean");
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
}