/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />
/// <reference path="./Enum.ts" />
/// <reference path="./Configuration.ts" />
/// <reference path="../bo/BusinessObject.ts" />

namespace ibas {
    /**
     * 查询
     */
    export interface ICriteria {

        /**
         * 业务对象
         */
        businessObject: string;

        /**
         * 查询结果数量
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
         * 注意BO多主键情况下，请自行修正。
         * @param lastBO
         *            起始业务对象
         * @return 查询
         */
        next(lastBO: IBusinessObject): ICriteria;

        /**
         * 计算上一个结果集的查询条件
         * 注意BO多主键情况下，请自行修正。
         * @param firstBO
         *            起始业务对象
         * @return 查询
         */
        previous(firstBO: IBusinessObject): ICriteria;

        /**
         * 复制查询条件
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
    export interface IConditions extends IList<ICondition> {
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
    export interface ISorts extends IList<ISort> {
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
    export interface IChildCriterias extends IList<IChildCriteria> {
        /**
         * 创建并返回新子项查询
         */
        create(): IChildCriteria;
    }

    /**
     * 查询
     */
    export class Criteria implements ICriteria {

        constructor() {
            this.conditions = new Conditions();
            this.childCriterias = new ChildCriterias();
            this.sorts = new Sorts();
        }
        /**
         * 业务对象
         */
        private BusinessObject: string;

        get businessObject(): string {
            return this.BusinessObject;
        }

        set businessObject(value: string) {
            this.BusinessObject = value;
        }

        /**
         * 查询结果数量
         */
        private Result: number;

        get result(): number {
            return this.Result;
        }

        set result(value: number) {
            this.Result = value;
        }

        /**
         * 不加载子项
         */
        private NoChilds: boolean;

        get noChilds(): boolean {
            return this.NoChilds;
        }

        set noChilds(value: boolean) {
            this.NoChilds = value;
        }

        /**
         * 备注
         */
        private Remarks: string;

        get remarks(): string {
            return this.Remarks;
        }

        set remarks(value: string) {
            this.Remarks = value;
        }

        /**
         * 查询条件集合
         */
        private Conditions: IConditions;

        get conditions(): IConditions {
            if (objects.isNull(this.Conditions)) {
                this.Conditions = new Conditions();
            }
            return this.Conditions;
        }

        set conditions(value: IConditions) {
            this.Conditions = value;
        }

        /**
         * 排序字段集合
         */
        private Sorts: ISorts;

        get sorts(): ISorts {
            if (objects.isNull(this.Sorts)) {
                this.Sorts = new Sorts();
            }
            return this.Sorts;
        }

        set sorts(value: ISorts) {
            this.Sorts = value;
        }

        /**
         * 子查询集合
         */
        private ChildCriterias: IChildCriterias;

        get childCriterias(): IChildCriterias {
            if (objects.isNull(this.ChildCriterias)) {
                this.ChildCriterias = new ChildCriterias();
            }
            return this.ChildCriterias;
        }

        set childCriterias(value: IChildCriterias) {
            this.ChildCriterias = value;
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
            let repeat: Function = function (count: number, char: string): string {
                let rChars: string = "";
                for (let index: number = 0; index < count; index++) {
                    rChars = rChars + char;
                }
                return rChars;
            };
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            for (let item of this.conditions) {
                if (builder.length > 1) {
                    builder.append(" ");
                    builder.append(this.charRelationship(item.relationship));
                    builder.append(" ");
                }
                builder.append(repeat(item.bracketOpen, "("));
                builder.append(item.toString());
                builder.append(repeat(item.bracketClose, ")"));
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
            if (objects.instanceOf(bo, BODocument)
                || objects.instanceOf(bo, BOMasterData)) {
                boCriteria = new Criteria();
                let condition: ICondition = boCriteria.conditions.create();
                condition.alias = BO_PROPERTY_NAME_DOCENTRY;
                condition.value = bo[BO_PROPERTY_NAME_DOCENTRY];
                condition.operation = operation;
            } else if (objects.instanceOf(bo, BOSimple)) {
                boCriteria = new Criteria();
                let condition: ICondition = boCriteria.conditions.create();
                condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
                condition.value = bo[BO_PROPERTY_NAME_OBJECTKEY];
                condition.operation = operation;
            } else if (objects.instanceOf(bo, BODocumentLine)) {
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
            } else if (objects.instanceOf(bo, BOMasterDataLine)) {
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
            } else if (objects.instanceOf(bo, BOSimpleLine)) {
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
        constructor(alias: string, operation: emConditionOperation, value: number);
        constructor(alias: string, operation: emConditionOperation, value: Date);
        constructor();
        constructor() {
            this.alias = "";
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
        private Alias: string;

        get alias(): string {
            return this.Alias;
        }

        set alias(value: string) {
            this.Alias = value;
        }
        /**
         * 几个闭括号"）"
         */
        private BracketClose: number;

        get bracketClose(): number {
            return this.BracketClose;
        }

        set bracketClose(value: number) {
            this.BracketClose = value;
        }
        /**
         * 几个开括号"（"
         */
        private BracketOpen: number;

        get bracketOpen(): number {
            return this.BracketOpen;
        }

        set bracketOpen(value: number) {
            this.BracketOpen = value;
        }
        /**
         * 比较的字段（属性）名
         */
        private ComparedAlias: string;

        get comparedAlias(): string {
            return this.ComparedAlias;
        }

        set comparedAlias(value: string) {
            this.ComparedAlias = value;
        }
        /**
         * 比较的值
         */
        private Value: string;

        get value(): string {
            return this.Value;
        }

        set value(value: string) {
            this.Value = value;
        }
        /**
         * 比较方法
         */
        private Operation: emConditionOperation;

        get operation(): emConditionOperation {
            return this.Operation;
        }

        set operation(value: emConditionOperation) {
            this.Operation = value;
        }
        /**
         * 和后续条件关系
         */
        private Relationship: emConditionRelationship;

        get relationship(): emConditionRelationship {
            return this.Relationship;
        }

        set relationship(value: emConditionRelationship) {
            this.Relationship = value;
        }
        /**
         * 获取-备注
         */
        private Remarks: string;

        get remarks(): string {
            return this.Remarks;
        }

        set remarks(value: string) {
            this.Remarks = value;
        }

        /**
         * 转换为字符串
         */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.map(undefined, "");
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
                case emConditionOperation.LESS_EQUAL:
                    return "<=";
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
        private Alias: string;

        get alias(): string {
            return this.Alias;
        }

        set alias(value: string) {
            this.Alias = value;
        }
        /**
         * 排序方式
         */
        private SortType: emSortType;

        get sortType(): emSortType {
            return this.SortType;
        }

        set sortType(value: emSortType) {
            this.SortType = value;
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
        private PropertyPath: string;

        get propertyPath(): string {
            return this.PropertyPath;
        }

        set propertyPath(value: string) {
            this.PropertyPath = value;
        }

        /**
         * 仅返回存在子项的
         */
        private OnlyHasChilds: boolean;

        get onlyHasChilds(): boolean {
            return this.OnlyHasChilds;
        }

        set onlyHasChilds(value: boolean) {
            this.OnlyHasChilds = value;
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
    /** 查询结果集数量 */
    export const CONFIG_ITEM_CRITERIA_RESULT_COUNT: string = "resultCount";
    /**
     * 查询方法
     */
    export namespace criterias {
        /**
         * 检查-排序字段
         * @param criteria 待处理查询
         */
        export function resultCount(criteria: ICriteria): ICriteria {
            if (objects.isNull(criteria)) {
                return criteria;
            }
            if (objects.isNull(criteria.result) || criteria.result < 1) {
                criteria.result = config.get(CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30);
            }
            return criteria;
        }
        /**
         * 检查-排序字段
         * @param criteria 待处理查询
         * @param target 查询目标类型
         */
        export function sorts(criteria: ICriteria, target: any): ICriteria {
            if (objects.isNull(criteria) || objects.isNull(target)) {
                return criteria;
            }
            if (criteria.sorts.length !== 0) {
                return criteria;
            }
            if (objects.isAssignableFrom(target, BODocument)
                || objects.isAssignableFrom(target, BOMasterData)) {
                let sort: ISort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_DOCENTRY;
                sort.sortType = emSortType.DESCENDING;
            } else if (objects.isAssignableFrom(target, BOSimple)) {
                let sort: ISort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_OBJECTKEY;
                sort.sortType = emSortType.DESCENDING;
            } else if (objects.isAssignableFrom(target, BODocumentLine)) {
                let sort: ISort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_DOCENTRY;
                sort.sortType = emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_LINEID;
                sort.sortType = emSortType.ASCENDING;
            } else if (objects.isAssignableFrom(target, BOMasterDataLine)) {
                let sort: ISort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_CODE;
                sort.sortType = emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_LINEID;
                sort.sortType = emSortType.ASCENDING;
            } else if (objects.isAssignableFrom(target, BOSimpleLine)) {
                let sort: ISort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_OBJECTKEY;
                sort.sortType = emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = BO_PROPERTY_NAME_LINEID;
                sort.sortType = emSortType.ASCENDING;
            } else if (objects.isAssignableFrom(target, BusinessObject)) {
                let bo: BusinessObject<any> = new target();
                let boCriteria: ICriteria = bo.criteria();
                if (!objects.isNull(boCriteria)) {
                    for (let item of boCriteria.conditions) {
                        let sort: ISort = criteria.sorts.create();
                        sort.alias = item.alias;
                        if (criteria.sorts.length === 0) {
                            sort.sortType = emSortType.DESCENDING;
                        } else {
                            sort.sortType = emSortType.ASCENDING;
                        }
                    }
                }
            }
            return criteria;
        }
        /**
         * 检查-查询字段
         * @param criteria 待处理查询
         * @param target 查询目标类型
         * @param search 查询内容
         */
        export function conditions(criteria: ICriteria, target: any, search: string): ICriteria;
        /**
         * 检查-查询字段
         * @param criteria 待处理查询
         * @param target 查询目标类型
         * @param search 查询内容
         * @param operation 查询方式
         */
        export function conditions(criteria: ICriteria, target: any, search: string, operation: emConditionOperation): ICriteria;

        export function conditions(): ICriteria {
            let criteria: ICriteria, target: any, search: string, operation: emConditionOperation;
            criteria = arguments[0];
            target = arguments[1];
            search = arguments[2];
            operation = arguments[3];
            if (objects.isNull(criteria) || strings.isEmpty(search) || objects.isNull(target)) {
                return criteria;
            }
            // 默认like查询
            if (objects.isNull(operation)) {
                operation = emConditionOperation.CONTAIN;
            }
            if (criteria.conditions.length === 0) {
                // 添加主键查询
                if (objects.isAssignableFrom(target, BODocument)) {
                    let condition: ICondition = criteria.conditions.create();
                    condition.alias = BO_PROPERTY_NAME_DOCENTRY;
                    condition.operation = operation;
                    condition.value = search;
                } else if (objects.isAssignableFrom(target, BOMasterData)) {
                    let condition: ICondition = criteria.conditions.create();
                    condition.alias = BO_PROPERTY_NAME_CODE;
                    condition.operation = operation;
                    condition.value = search;
                    condition = criteria.conditions.create();
                    condition.relationship = emConditionRelationship.OR;
                    condition.alias = BO_PROPERTY_NAME_NAME;
                    condition.operation = operation;
                    condition.value = search;
                } else if (objects.isAssignableFrom(target, BOSimple)) {
                    let condition: ICondition = criteria.conditions.create();
                    condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
                    condition.operation = operation;
                    condition.value = search;
                }
            }
            return criteria;
        }
    }
    /**
     * 检索条件项目：文件夹。如：documents，条件仅可等于，其他忽略。
     */
    export const CRITERIA_CONDITION_ALIAS_FOLDER: string = "FileFolder";
    /**
     * 检索条件项目：包含子文件夹。如： emYesNo.Yes，条件仅可等于，其他忽略。
     */
    export const CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER: string = "IncludeSubfolder";
    /**
     * 检索条件项目：文件名称。如：ibas.*.jar，条件仅可等于，其他忽略。
     */
    export const CRITERIA_CONDITION_ALIAS_FILE_NAME: string = "FileName";
    /**
     * 检索条件项目：最后修改时间（文件时间）。如：1479965348，条件可等于，大小等于。
     */
    export const CRITERIA_CONDITION_ALIAS_MODIFIED_TIME: string = "ModifiedTime";
}