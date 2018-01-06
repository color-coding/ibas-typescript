/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import {
    emJudmentOperation,
    List,
} from "../data/index";

/**
 * 表达式
 */
export interface IExpression {

}

/**
 * 判断表达式
 */
export interface IJudgmentExpression<T> extends IExpression {
	/**
	 * 表达式结果
	 * 
	 * @return true，成立；false，不成立
	 * @throws 不支持的操作
	 */
    result(): boolean;
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
}
/**
 * 值操作者
 */
export interface IValueOperator {
    /** 获取值 */
    getValue(): any;
    /** 设置值 */
    setValue(value: any): void;
    /** 获取值类型 */
    valueType(): string;
}
/**
 * 属性值操作者
 */
export interface IPropertyValueOperator extends IValueOperator {
    /** 属性名称 */
    propertyName: string;
}
/**
 * 判断链-项目
 */
export interface IJudgmentLinkItem {
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
}
/**
 * 判断链
 */
export interface IJudgmentLink {
    /** 判断项目集合 */
    judgmentItems: IJudgmentLinkItem[];
    /** 
     * 判断
     * @param value 比较值
     * @return true,满足;false,不满足
	 * @throws 不支持的操作
     */
    judge(value: any): boolean;
}