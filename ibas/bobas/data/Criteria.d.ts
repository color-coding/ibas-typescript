/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IBusinessObject } from "../core/index";
import { List } from "./Common.d";
import { emConditionOperation, emConditionRelationship, emSortType } from "./Enums";

/**
* 查询
*/
export interface ICriteria {

    /**
     * 业务对象
     */
    businessObject: string;

    /**
     *查询结果数量
     */
    result: number;

    /**
     * 不加载子项
     */
    noChilds: boolean;

    /**
     * 备注
     */
    remarks: string;

    /**
     * 查询条件集合
     */
    conditions: IConditions;

    /**
     * 排序字段集合
     */
    sorts: ISorts;

    /**
     * 子查询集合
     */
    childCriterias: IChildCriterias;

    /**
     * 克隆
     */
    clone(): ICriteria;

    /**
     * 转换为字符串
     */
    toString(): string;

    /**
     * 计算下一结果集的查询条件
     * 
     * 注意BO多主键情况下，请自行修正。
     * 
     * @param lastBO
     *            起始业务对象
     * @return 查询
     */
    next(lastBO: IBusinessObject): ICriteria;

    /**
     * 计算上一个结果集的查询条件
     * 
     * 注意BO多主键情况下，请自行修正。
     * 
     * @param firstBO
     *            起始业务对象
     * @return 查询
     */
    previous(firstBO: IBusinessObject): ICriteria;

    /**
     * 复制查询条件
     * 
     * @param criteria
     *            基于的查询
     * @return 查询
     */
    copyFrom(criteria: ICriteria): ICriteria;

}

/**
* 查询条件
*/
export interface ICondition {

    /**
     * 获取-条件字段（属性）名
     */
    alias: string;
    /**
     * 几个闭括号"）"
     */
    bracketClose: number;
    /**
     * 几个开括号"（"
     */
    bracketOpen: number;
    /**
     * 比较的字段（属性）名
     */
    comparedAlias: string;
    /**
     * 比较的值
     */
    value: string;
    /**
     * 比较方法
     */
    operation: emConditionOperation;
    /**
     * 和后续条件关系
     */
    relationship: emConditionRelationship;
    /**
     * 获取-备注
     */
    remarks: string;
}
/**
 * 查询条件集合
 */
export interface IConditions extends List<ICondition> {
    /**
     * 创建并返回新查询条件
     */
    create(): ICondition;
}
/**
 * 排序
*/
export interface ISort {
    /**
     * 排序的字段（属性）名
     */
    alias: string;

    /**
     * 排序方式
     */
    sortType: emSortType;

}
/**
 * 排序集合
 */
export interface ISorts extends List<ISort> {
    /**
     * 创建并返回新排序
     */
    create(): ISort;
}
/**
 * 子项查询
 */
export interface IChildCriteria extends ICriteria {

    /**
     * 获取-属性路径
     */
    propertyPath: string;

    /**
     * 仅返回存在子项的
     */
    onlyHasChilds: boolean;
}

/**
 * 子项查询集合
 */
export interface IChildCriterias extends List<IChildCriteria> {
    /**
     * 创建并返回新子项查询
     */
    create(): IChildCriteria;
}
