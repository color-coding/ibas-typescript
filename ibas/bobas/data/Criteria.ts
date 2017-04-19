/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BO_PROPERTY_NAME_DOCENTRY, BO_PROPERTY_NAME_OBJECTKEY, BO_PROPERTY_NAME_CODE, BO_PROPERTY_NAME_LINEID,
    BusinessObject, BODocument, BODocumentLine, BOMasterData, BOMasterDataLine,
    BOSimple, BOSimpleLine
} from "../bo/index";
import { objects } from "./Data";
import { ArrayList, StringBuilder } from "./Common";
import { emConditionOperation, emConditionRelationship, emSortType } from "./Enums";
import { ICriteria, ICondition, IConditions, ISort, ISorts, IChildCriteria, IChildCriterias } from "./Criteria.d";

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
     * 查询结果数量
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
    private _noChilds: boolean;

    get noChilds(): boolean {
        return this._noChilds;
    }

    set noChilds(value: boolean) {
        this._noChilds = value;
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
        if (objects.isNull(this._conditions)) {
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
        if (objects.isNull(this._sorts)) {
            this._sorts = new Sorts();
        }
        return this._sorts;
    }

    set sorts(value: ISorts) {
        this._sorts = value;
    }

    /**
     * 子查询集合
     */
    private _childCriterias: IChildCriterias;

    get childCriterias(): IChildCriterias {
        if (objects.isNull(this._childCriterias)) {
            this._childCriterias = new ChildCriterias();
        }
        return this._childCriterias;
    }

    set childCriterias(value: IChildCriterias) {
        this._childCriterias = value;
    }

    /**
     * 克隆
     */
    clone(): ICriteria {
        return objects.clone(this);
    }

    /**
     * 转换为字符串
     */
    toString(): string {
        let builder: StringBuilder = new StringBuilder();
        builder.append("{");
        for (let item of this.conditions) {
            if (builder.length > 1) {
                builder.append(" ");
                builder.append(this.charRelationship(item.relationship));
                builder.append(" ");
            }
            builder.append(item.toString());
        }
        builder.append("}");
        return builder.toString();
    }

    private charRelationship(value: emConditionRelationship): string {
        if (value === emConditionRelationship.OR) {
            return "||";
        } else {
            return "&&";
        }
    }
    /**
     * 计算下一结果集的查询条件
     * 注意BO多主键情况下，请自行修正
     * @param lastBO
     *            起始业务对象
     * @return 查询
     */
    next(lastBO: BusinessObject<any>): ICriteria {
        if (lastBO != null) {
            let sortType: emSortType = emSortType.ASCENDING;
            let operation: emConditionOperation = emConditionOperation.GRATER_THAN;
            if (this.sorts.length > 0) {
                sortType = this.sorts[0].sortType;
            }
            if (sortType === emSortType.DESCENDING) {
                operation = emConditionOperation.LESS_THAN;
            }
            let boCriteria: ICriteria = this.boCriteria(lastBO, operation);
            if (boCriteria == null) {
                return null;
            }
            return this.copyFrom(boCriteria);
        }
        return null;
    }

    /**
     * 计算上一个结果集的查询条件
     * 注意BO多主键情况下，请自行修正
     * @param firstBO
     *            起始业务对象
     * @return 查询
     */
    previous(firstBO: BusinessObject<any>): ICriteria {
        if (firstBO != null) {
            let sortType: emSortType = emSortType.ASCENDING;
            let operation: emConditionOperation = emConditionOperation.LESS_THAN;
            if (this.sorts.length > 0) {
                sortType = this.sorts[0].sortType;
            }
            if (sortType === emSortType.DESCENDING) {
                operation = emConditionOperation.GRATER_THAN;
            }
            let boCriteria: ICriteria = this.boCriteria(firstBO, operation);
            if (boCriteria == null) {
                return null;
            }
            return this.copyFrom(boCriteria);
        }
        return null;
    }

    protected boCriteria(bo: BusinessObject<any>, operation: emConditionOperation): ICriteria {
        let boCriteria: ICriteria = null;
        // 判断BO类型，添加下个集合条件，尽量使用数值字段
        if (objects.isAssignableFrom(bo, BODocument)
            || objects.isAssignableFrom(bo, BOMasterData)) {
            boCriteria = new Criteria();
            let condition: ICondition = boCriteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_DOCENTRY;
            condition.value = bo[BO_PROPERTY_NAME_DOCENTRY];
            condition.operation = operation;
        } else if (objects.isAssignableFrom(bo, BOSimple)) {
            boCriteria = new Criteria();
            let condition: ICondition = boCriteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
            condition.value = bo[BO_PROPERTY_NAME_OBJECTKEY];
            condition.operation = operation;
        } else if (objects.isAssignableFrom(bo, BODocumentLine)) {
            boCriteria = new Criteria();
            // 父项相等时
            let condition: ICondition = boCriteria.conditions.create();
            condition.bracketOpen = 2;
            condition.alias = BO_PROPERTY_NAME_DOCENTRY;
            condition.value = bo[BO_PROPERTY_NAME_DOCENTRY];
            condition = boCriteria.conditions.create();
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = bo[BO_PROPERTY_NAME_LINEID];
            condition.operation = operation;
            condition = boCriteria.conditions.create();
            // 父项不相等时
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_DOCENTRY;
            condition.value = bo[BO_PROPERTY_NAME_DOCENTRY];
            condition.operation = operation;
        } else if (objects.isAssignableFrom(bo, BOMasterDataLine)) {
            boCriteria = new Criteria();
            // 父项相等时
            let condition: ICondition = boCriteria.conditions.create();
            condition.bracketOpen = 2;
            condition.alias = BO_PROPERTY_NAME_CODE;
            condition.value = bo[BO_PROPERTY_NAME_CODE];
            condition = boCriteria.conditions.create();
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = bo[BO_PROPERTY_NAME_LINEID];
            condition.operation = operation;
            condition = boCriteria.conditions.create();
            // 父项不相等时
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_CODE;
            condition.value = bo[BO_PROPERTY_NAME_CODE];
            condition.operation = operation;
        } else if (objects.isAssignableFrom(bo, BOSimpleLine)) {
            boCriteria = new Criteria();
            // 父项相等时
            let condition: ICondition = boCriteria.conditions.create();
            condition.bracketOpen = 2;
            condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
            condition.value = bo[BO_PROPERTY_NAME_OBJECTKEY];
            condition = boCriteria.conditions.create();
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = bo[BO_PROPERTY_NAME_LINEID];
            condition.operation = operation;
            condition = boCriteria.conditions.create();
            // 父项不相等时
            condition.bracketClose = 1;
            condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
            condition.value = bo[BO_PROPERTY_NAME_OBJECTKEY];
            condition.operation = operation;
        }
        // 不是标准类型
        if (boCriteria == null) {
            boCriteria = bo.criteria();
            for (let condition of boCriteria.conditions) {
                condition.operation = operation;
            }
        }
        return boCriteria;
    }
    /**
     * 复制查询条件
     * @param criteria
     *            基于的查询
     * @return 查询
     */
    copyFrom(criteria: ICriteria): ICriteria {
        let nCriteria: ICriteria = this.clone();
        if (criteria != null) {
            let tmpCriteria: ICriteria = criteria.clone();
            // 复制子项查询
            for (let tmpChildCriteria of tmpCriteria.childCriterias) {
                if (objects.isNull(tmpChildCriteria.propertyPath)) {
                    continue;
                }
                let isNew: boolean = true;
                for (let myChildCriteria of nCriteria.childCriterias) {
                    if (objects.isNull(myChildCriteria.propertyPath)) {
                        continue;
                    }
                    if (myChildCriteria.propertyPath === tmpChildCriteria.propertyPath) {
                        isNew = false;
                        break;
                    }
                }
                if (isNew) {
                    nCriteria.childCriterias.add(tmpChildCriteria);
                }
            }
            // 复制查询条件
            if (nCriteria.conditions.length > 0) {
                // 原始条件括号括起
                let condition: ICondition = nCriteria.conditions.firstOrDefault();
                condition.bracketOpen = condition.bracketOpen + 1;
                condition = nCriteria.conditions[nCriteria.conditions.length - 1];
                condition.bracketClose = condition.bracketClose + 1;
            }
            if (tmpCriteria.conditions.length > 0) {
                // 拷贝条件括号括起
                let condition: ICondition = tmpCriteria.conditions.firstOrDefault();
                condition.bracketOpen = condition.bracketOpen + 1;
                condition = tmpCriteria.conditions[tmpCriteria.conditions.length - 1];
                condition.bracketClose = condition.bracketClose + 1;
            }
            for (let condition of tmpCriteria.conditions) {
                nCriteria.conditions.add(condition);
            }
            // 复制排序条件
            for (let tmpSort of tmpCriteria.sorts) {
                if (objects.isNull(tmpSort.alias)) {
                    continue;
                }
                let isNew: boolean = true;
                for (let mySort of nCriteria.sorts) {
                    if (objects.isNull(mySort.alias)) {
                        continue;
                    }
                    if (mySort.alias === tmpSort.alias) {
                        isNew = false;
                        break;
                    }
                }
                if (isNew) {
                    nCriteria.sorts.add(tmpSort);
                }
            }
        }
        return nCriteria;
    }

}

/**
 * 查询条件
 */
export class Condition implements ICondition {

    constructor(alias: string, operation: emConditionOperation);
    constructor(alias: string, operation: emConditionOperation, value: string);
    constructor();
    constructor() {
        this.operation = emConditionOperation.EQUAL;
        this.relationship = emConditionRelationship.AND;
        this.bracketOpen = 0;
        this.bracketClose = 0;
        if (arguments[0] !== undefined) {
            this.alias = arguments[0];
        }
        if (arguments[1] !== undefined) {
            this.operation = arguments[1];
        }
        if (arguments[2] !== undefined) {
            this.value = arguments[2];
        }
    }

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
    private _value: string;

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
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

    /**
     * 转换为字符串
     */
    toString(): string {
        let builder: StringBuilder = new StringBuilder();
        builder.append("{");
        builder.append(this.alias);
        builder.append(" ");
        builder.append(this.charOperation(this.operation));
        builder.append(" ");
        builder.append(this.value);
        builder.append("}");
        return builder.toString();
    }

    private charOperation(value: emConditionOperation): string {
        switch (value) {
            case emConditionOperation.CONTAIN:
                return "like";
            case emConditionOperation.END:
                return "like";
            case emConditionOperation.EQUAL:
                return "=";
            case emConditionOperation.GRATER_EQUAL:
                return ">=";
            case emConditionOperation.GRATER_THAN:
                return ">";
            case emConditionOperation.IS_NULL:
                return "is null";
            case emConditionOperation.LESS_THAN:
                return "<";
            case emConditionOperation.NOT_CONTAIN:
                return "not like";
            case emConditionOperation.NOT_EQUAL:
                return "<>";
            case emConditionOperation.NOT_NULL:
                return "not null";
            case emConditionOperation.START:
                return "like";
            default:
                return "?";
        }
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
        let item: ICondition = new Condition();
        this.add(item);
        return item;
    }
}
/**
 * 排序
 */
export class Sort implements ISort {

    constructor();
    constructor(alias: string, sortType: emSortType);
    constructor() {
        this.sortType = emSortType.ASCENDING;
        if (arguments[0] !== undefined) {
            this.alias = arguments[0];
        }
        if (arguments[1] !== undefined) {
            this.sortType = arguments[1];
        }
    }

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
    /**
     * 转换为字符串
     */
    toString(): string {
        let builder: StringBuilder = new StringBuilder();
        builder.append("{");
        builder.append(this.alias);
        builder.append(" ");
        builder.append(emSortType[this.sortType]);
        builder.append("}");
        return builder.toString();
    }
}
/**
 * 排序集合
 */
export class Sorts extends ArrayList<ISort> implements ISorts {
    /**
     * 创建并返回新排序
     */
    create(): ISort {
        let item: ISort = new Sort();
        this.add(item);
        return item;
    }
}

/**
 * 子项查询
 */
export class ChildCriteria extends Criteria implements IChildCriteria {
    /**
     * 获取-属性路径
     */
    private _propertyPath: string;

    get propertyPath(): string {
        return this._propertyPath;
    }

    set propertyPath(value: string) {
        this._propertyPath = value;
    }

    /**
     * 仅返回存在子项的
     */
    private _onlyHasChilds: boolean;

    get onlyHasChilds(): boolean {
        return this._onlyHasChilds;
    }

    set onlyHasChilds(value: boolean) {
        this._onlyHasChilds = value;
    }
}

/**
 * 子项查询集合
 */
export class ChildCriterias extends ArrayList<IChildCriteria> implements IChildCriterias {
    /**
     * 创建并返回子项查询
     */
    create(): IChildCriteria {
        let item: IChildCriteria = new ChildCriteria();
        this.add(item);
        return item;
    }
}