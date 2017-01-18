/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { object } from './Data';
import { List } from './Common.d';
import { ArrayList } from './Common';
import { emConditionOperation, emConditionRelationship, emSortType } from './Enums';
import { IBusinessObject } from '../core/BusinessObjectCore.d';
import { ICriteria, ICondition, IConditions, ISort, ISorts, IChildCriteria, IChildCriterias } from './Criteria.d';

/**
* 查询
*/
export class Criteria implements ICriteria {

    /**
     * 业务对象编码
     */
    private _boCode: string;

    get boCode(): string {
        return this._boCode;
    }

    set boCode(value: string) {
        this._boCode = value;
    }

    /**
     *查询结果数量
     */
    private _result: number;

    get result(): number {
        return this._result;
    }

    set result(value: number) {
        this._result = value;
    }

    /**
     * 不加载子项
     */
    private _noChild: boolean;

    get noChild(): boolean {
        return this._noChild;
    }

    set noChild(value: boolean) {
        this._noChild = value;
    }

    /**
     * 备注
     */
    private _remarks: string;

    get remarks(): string {
        return this._remarks;
    }

    set remarks(value: string) {
        this._remarks = value;
    }

    /**
     * 查询条件集合
     */
    private _conditions: IConditions;

    get conditions(): IConditions {
        if (object.isNull(this._conditions)) {
            this._conditions = new Conditions();
        }
        return this._conditions;
    }

    set conditions(value: IConditions) {
        this._conditions = value;
    }

    /**
     * 排序字段集合
     */
    private _sorts: ISorts;

    get sorts(): ISorts {
        if (object.isNull(this._sorts)) {
            this._sorts = new Sorts();
        }
        return this._sorts;
    }

    set sorts(value: ISorts) {
        this._sorts = value;
    }

    /**
     * 克隆
     */
    clone(): ICriteria {
        throw new Error("not implemented.");
    }

    /**
     * 转换为字符串
     */
    toString(): string {
        throw new Error("not implemented.");
    }

    /**
     * 计算下一结果集的查询条件
     * 
     * 注意BO多主键情况下，请自行修正。
     * 
     * @param lastBO
     *            起始业务对象
     * @return 查询
     */
    nextCriteria(lastBO: IBusinessObject): ICriteria {
        throw new Error("not implemented.");
    }

    /**
     * 计算上一个结果集的查询条件
     * 
     * 注意BO多主键情况下，请自行修正。
     * 
     * @param firstBO
     *            起始业务对象
     * @return 查询
     */
    previousCriteria(firstBO: IBusinessObject): ICriteria {
        throw new Error("not implemented.");
    }

    /**
     * 复制查询条件
     * 
     * @param criteria
     *            基于的查询
     * @return 查询
     */
    copyFrom(criteria: ICriteria): ICriteria {
        throw new Error("not implemented.");
    }

}

/**
* 查询条件
*/
export class Condition implements ICondition {

    /**
    * 获取-条件字段（属性）名
    */
    private _alias: string;

    get alias(): string {
        return this._alias;
    }

    set alias(value: string) {
        this._alias = value;
    }
    /**
     * 几个闭括号"）"
     */
    private _bracketClose: number;

    get bracketClose(): number {
        return this._bracketClose;
    }

    set bracketClose(value: number) {
        this._bracketClose = value;
    }
    /**
     * 几个开括号"（"
     */
    private _bracketOpen: number;

    get bracketOpen(): number {
        return this._bracketOpen;
    }

    set bracketOpen(value: number) {
        this._bracketOpen = value;
    }
    /**
     * 比较的字段（属性）名
     */
    private _comparedAlias: string;

    get comparedAlias(): string {
        return this._comparedAlias;
    }

    set comparedAlias(value: string) {
        this._comparedAlias = value;
    }
    /**
     * 比较的值
     */
    private _condVal: string;

    get condVal(): string {
        return this._condVal;
    }

    set condVal(value: string) {
        this._condVal = value;
    }
    /**
     * 比较方法
     */
    private _operation: emConditionOperation;

    get operation(): emConditionOperation {
        return this._operation;
    }

    set operation(value: emConditionOperation) {
        this._operation = value;
    }
    /**
     * 和后续条件关系
     */
    private _relationship: emConditionRelationship;

    get relationship(): emConditionRelationship {
        return this._relationship;
    }

    set relationship(value: emConditionRelationship) {
        this._relationship = value;
    }
    /**
     * 获取-备注
     */
    private _remarks: string;

    get remarks(): string {
        return this._remarks;
    }

    set remarks(value: string) {
        this._remarks = value;
    }
}
/**
* 查询条件集合
*/
export class Conditions extends ArrayList<ICondition> implements IConditions {
    /**
    * 创建并返回新查询条件
    */
    create(): ICondition {
        let item = new Condition();
        this.add(item);
        return item;
    }
}
/**
* 排序
*/
export class Sort implements ISort {

    /**
    * 排序的字段（属性）名
    */
    private _alias: string;

    get alias(): string {
        return this._alias;
    }

    set alias(value: string) {
        this._alias = value;
    }
    /**
     * 排序方式
     */
    private _sortType: emSortType;

    get sortType(): emSortType {
        return this._sortType;
    }

    set sortType(value: emSortType) {
        this._sortType = value;
    }
}
/**
* 排序集合
*/
export class Sorts extends ArrayList<Sort> implements ISorts {
    /**
    * 创建并返回新排序
    */
    create(): ISort {
        let item = new Sort();
        this.add(item);
        return item;
    }
}
