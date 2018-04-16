/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="./BusinessObjectCore.ts" />

namespace ibas {
    /** 业务对象属性名称-DocEntry */
    export const BO_PROPERTY_NAME_DOCENTRY: string = "docEntry";
    /** 业务对象属性名称-Code */
    export const BO_PROPERTY_NAME_CODE: string = "code";
    /** 业务对象属性名称-Name */
    export const BO_PROPERTY_NAME_NAME: string = "name";
    /** 业务对象属性名称-ObjectKey */
    export const BO_PROPERTY_NAME_OBJECTKEY: string = "objectKey";
    /** 业务对象属性名称-LineId */
    export const BO_PROPERTY_NAME_LINEID: string = "lineId";
    /** 业务对象属性名称-objectCode */
    export const BO_PROPERTY_NAME_OBJECTCODE: string = "objectCode";
    /** 业务对象属性名称-documentStatus */
    export const BO_PROPERTY_NAME_DOCUMENTSTATUS: string = "documentStatus";
    /** 业务对象属性名称-canceled */
    export const BO_PROPERTY_NAME_CANCELED: string = "canceled";
    /** 业务对象属性名称-approvalStatus */
    export const BO_PROPERTY_NAME_APPROVALSTATUS: string = "approvalStatus";
    /** 业务对象属性名称-deleted */
    export const BO_PROPERTY_NAME_DELETED: string = "deleted";
    /** 业务对象属性名称-lineStatus */
    export const BO_PROPERTY_NAME_LINESTATUS: string = "lineStatus";
    /** 需要被重置的属性名称 */
    const NEED_BE_RESET_PROPERTIES: string[] = [
        "_listeners",
        "createDate", "createTime", "updateDate", "updateTime", "logInst", "createUserSign", "updateUserSign", "createActionId", "updateActionId",
        "referenced", "canceled", "deleted", "approvalStatus", "lineStatus", "status", "documentStatus"
    ];

    /**
     * 业务对象-行
     */
    export interface IBOLine {
        /**
         * 行编号
         */
        lineId: number;
    }

    /**
     * 业务对象-单据
     */
    export interface IBODocument extends IBusinessObject {
        /**
         * 单据号 主键
         */
        docEntry: number;
        /**
         * 单据流水号
         */
        docNum: number;
        /**
         * 期间
         */
        period: number;
        /**
         * 状态
         */
        status: emBOStatus;
        /**
         * 单据状态
         */
        documentStatus: emDocumentStatus;
        /**
         * 过账日期
         */
        postingDate: Date;
        /**
         * 到期日
         */
        deliveryDate: Date;
        /**
         * 凭证日期
         */
        documentDate: Date;
    }

    /**
     * 业务对象-单据行
     */
    export interface IBODocumentLine extends IBusinessObject, IBOLine {
        /**
         * 单据编号 主键
         */
        docEntry: number;
        /**
         * 行编号 主键
         */
        lineId: number;
        /**
         * 获取-顺序号
         */
        visOrder: number;
        /**
         * 设置-状态
         */
        status: emBOStatus;
        /**
         * 获取-单据状态
         */
        lineStatus: emDocumentStatus;
    }

    /**
     * 业务对象-单据行集合
     */
    export interface IBODocumentLines<T extends IBODocumentLine> extends IBusinessObjects<T> {

    }

    /**
     * 业务对象-主数据
     */
    export interface IBOMasterData extends IBusinessObject {
        /**
         * 编码 主键
         */
        code: string;
        /**
         * 名称
         */
        name: string;
        /**
         * 流水号
         */
        docEntry: number;
    }

    /**
     * 业务对象-主数据行
     */
    export interface IBOMasterDataLine extends IBusinessObject, IBOLine {
        /**
         * 编码 主键
         */
        code: string;
        /**
         * 行编号 主键
         */
        lineId: number;
    }

    /**
     * 业务对象-主数据行集合
     */
    export interface IBOMasterDataLines<T extends IBOMasterDataLine> extends IBusinessObjects<T> {

    }
    /**
     * 业务对象-简单对象
     */
    export interface IBOSimple extends IBusinessObject {
        /**
         * 序号 主键
         */
        objectKey: number;
    }

    /**
     * 业务对象-简单对象行
     */
    export interface IBOSimpleLine extends IBusinessObject, IBOLine {
        /**
         * 序号 主键
         */
        objectKey: number;
        /**
         * 行编号 主键
         */
        lineId: number;
    }

    /**
     * 业务对象-简单对象行集合
     */
    export interface IBOSimpleLines<T extends IBOSimpleLine> extends IBusinessObjects<T> {

    }
    /**
     * 业务对象存储标记
     */
    export interface IBOStorageTag {
        /**
         * 获取对象编号
         */
        objectCode: string;
        /**
         * 创建日期
         */
        createDate: Date;
        /**
         * 创建时间
         */
        createTime: number;

        /**
         * 更新日期
         */
        updateDate: Date;

        /**
         * 更细时间
         */
        updateTime: number;

        /**
         * 实例号
         */
        logInst: number;

        /**
         * 创建用户
         */
        createUserSign: number;

        /**
         * 更新用户
         */
        updateUserSign: number;

        /**
         * 创建动作标识
         */
        createActionId: string;

        /**
         * 更新动作标识
         */
        updateActionId: string;

        /**
         * 数据源
         */
        dataSource: string;
    }

    /**
     * 被引用的业务对象
     */
    export interface IBOReferenced {
        /**
         * 是否被引用
         */
        referenced: emYesNo;
    }
    /**
     * 标记取消，已被引用的对象不能取消
     */
    export interface IBOTagCanceled extends IBOReferenced {
        /**
         * 是否取消
         */
        canceled: emYesNo;
    }
    /**
     * 标记删除，已被引用的对象标记删除
     */
    export interface IBOTagDeleted extends IBOReferenced {
        /**
         * 是否取消
         */
        deleted: emYesNo;
    }

    /**
     * 审批的数据
     */
    export interface IApprovalData extends IBusinessObject {
        /**
         * 数据类型
         */
        objectCode: string;
        /**
         * 数据所有人
         */
        dataOwner: number;
        /**
         * 审批状态
         */
        approvalStatus: emApprovalStatus;
        /**
         * 识别码
         */
        identifiers: string;
        /**
         * 数据查询条件
         */
        criteria(): ICriteria;
    }
    /**
     * 数据所有权
     */
    export interface IDataOwnership {
        /**
         * 数据类型
         */
        objectCode: string;
        /**
         * 数据所有者
         */
        dataOwner: number;
        /**
         * 数据所属组织
         */
        organization: string;
    }


    /**
     * 业务对象基类
     */
    export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {
        /** 构造 */
        constructor() {
            super();
            // 注册属性改变监听
            this.initRules();
            let that: this = this;
            this.registerListener({
                propertyChanged(name: string): void {
                    that.onPropertyChanged(name);
                }
            });
        }
        /** 获取查询 */
        abstract criteria(): ICriteria;
        /** 输出字符串 */
        abstract toString(): string;
        /** 删除 */
        delete(): void {
            this.markDeleted(true);
            super.firePropertyChanged("isDeleted");
        }
        /** 克隆对象 */
        clone(): T {
            let newBO: T = objects.clone<T>(<T><any>this);
            // 设置为新对象
            newBO.markNew(true);
            // 重置部分属性值
            newBO.isLoading = true;
            for (let item of NEED_BE_RESET_PROPERTIES) {
                if (newBO[item] !== undefined) {
                    newBO[item] = undefined;
                }
            }
            newBO.isLoading = false;
            return newBO;
        }
        /** 属性改变时 */
        protected onPropertyChanged(name: string): void {
            // 属性改变时调用，可重载此函数加入业务逻辑
        }
        /**
         * 初始化业务规则
         */
        private initRules(): void {
            let myRules: IBusinessRules = businessRulesManager.getRules(objects.getType(this));
            if (objects.isNull(myRules)) {
                return;
            }
            if (myRules.initialized) {
                return;
            }
            let rules: IBusinessRule[] = this.registerRules();
            if (objects.isNull(rules) || rules.length === 0) {
                return;
            }
            myRules.register(rules);
            myRules.initialized = true;
        }
        /**
         * 注册的业务规则
         */
        protected registerRules(): IBusinessRule[] {
            return null;
        }
        protected firePropertyChanged(property: string): void {
            if (this.isLoading) { return; }
            let myRules: IBusinessRules = businessRulesManager.getRules(objects.getType(this));
            if (objects.isNull(myRules)) {
                return;
            }
            myRules.execute(this, property);
            super.firePropertyChanged(property);
        }
    }

    /**
     * 业务对象集合基类
     */
    export abstract class BusinessObjects<T extends IBusinessObject, P extends IBusinessObject>
        extends BusinessObjectsBase<T>
        implements IBusinessObjects<T> {
        /**
         * 构造
         * @param parent 父项
         */
        constructor(parent: P) {
            super();
            this._listener = {
                caller: this,
                propertyChanged(name: string): void {
                    // this指向业务对象集合基类,arguments[1]指向触发事件的BO
                    let bo: any = arguments[1];
                    if (objects.isNull(bo)) {
                        return;
                    }
                    if (this.parent === bo) {
                        this.onParentPropertyChanged(name);
                    } else {
                        if (name === "isDeleted") {
                            this.runRules(null);
                        } else {
                            this.runRules(name);
                        }
                        this.onChildPropertyChanged(bo, name);
                    }
                }
            };
            if (!objects.isNull(parent)) {
                this.parent = parent;
            }
        }

        private _listener: IPropertyChangedListener;

        protected get listener(): IPropertyChangedListener {
            return this._listener;
        }

        private _parent: P;

        protected get parent(): P {
            return this._parent;
        }

        protected set parent(value: P) {
            if (objects.instanceOf(this.parent, Bindable)) {
                (<any>this.parent).removeListener(this.listener);
            }
            this._parent = value;
            if (objects.instanceOf(this.parent, Bindable)) {
                (<any>this.parent).registerListener(this.listener);
            }
        }
        /** 父项属性改变时 */
        protected onParentPropertyChanged(name: string): void {
            // 父项属性改变时调用，可重载此函数加入业务逻辑
            if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_OBJECTKEY)) {
                if (objects.instanceOf(this.parent, BOSimple)
                    || objects.instanceOf(this.parent, BOSimpleLine)) {
                    // 简单对象
                    for (let item of this) {
                        if (objects.instanceOf(item, BOSimple)
                            || objects.instanceOf(item, BOSimpleLine)) {
                            item.setProperty(BO_PROPERTY_NAME_OBJECTKEY, this.parent.getProperty(BO_PROPERTY_NAME_OBJECTKEY));
                        }
                    }

                }
            } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_CODE)) {
                if (objects.instanceOf(this.parent, BOMasterData)
                    || objects.instanceOf(this.parent, BOMasterDataLine)) {
                    // 主数据
                    for (let item of this) {
                        if (objects.instanceOf(item, BOMasterData)
                            || objects.instanceOf(item, BOMasterDataLine)) {
                            item.setProperty(BO_PROPERTY_NAME_CODE, this.parent.getProperty(BO_PROPERTY_NAME_CODE));
                        }
                    }
                }
            } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_DOCENTRY)) {
                if (objects.instanceOf(this.parent, BODocument)
                    || objects.instanceOf(this.parent, BODocumentLine)) {
                    // 单据
                    for (let item of this) {
                        if (objects.instanceOf(item, BODocument)
                            || objects.instanceOf(item, BODocumentLine)) {
                            item.setProperty(BO_PROPERTY_NAME_DOCENTRY, this.parent.getProperty(BO_PROPERTY_NAME_DOCENTRY));
                        }
                    }
                }
            } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_DOCUMENTSTATUS)) {
                if (objects.instanceOf(this.parent, BODocument)) {
                    // 单据
                    for (let item of this) {
                        if (objects.instanceOf(item, BODocument)) {
                            item.setProperty(BO_PROPERTY_NAME_DOCUMENTSTATUS, this.parent.getProperty(BO_PROPERTY_NAME_DOCUMENTSTATUS));
                        } else if (objects.instanceOf(item, BODocumentLine)) {
                            item.setProperty(BO_PROPERTY_NAME_LINESTATUS, this.parent.getProperty(BO_PROPERTY_NAME_DOCUMENTSTATUS));
                        }
                    }
                }
            } else if (strings.equalsIgnoreCase(name, BO_PROPERTY_NAME_LINESTATUS)) {
                if (objects.instanceOf(this.parent, BODocumentLine)) {
                    // 单据
                    for (let item of this) {
                        if (objects.instanceOf(item, BODocument)) {
                            item.setProperty(BO_PROPERTY_NAME_DOCUMENTSTATUS, this.parent.getProperty(BO_PROPERTY_NAME_LINESTATUS));
                        } else if (objects.instanceOf(item, BODocumentLine)) {
                            item.setProperty(BO_PROPERTY_NAME_LINESTATUS, this.parent.getProperty(BO_PROPERTY_NAME_LINESTATUS));
                        }
                    }
                }
            }
        }
        /** 子项属性改变时 */
        protected onChildPropertyChanged(item: T, name: string): void {
            // 子项属性改变时调用，可重载此函数加入业务逻辑
        }
        /**
         * 添加项目后
         * @param item 项目
         */
        protected afterAdd(item: T): void {
            if (!objects.isNull(this.parent)) {
                // 父项主键值给子项
                let docEntry: number = this.parent.getProperty<number>(BO_PROPERTY_NAME_DOCENTRY);
                if (docEntry !== undefined) {
                    item.setProperty(BO_PROPERTY_NAME_DOCENTRY, docEntry);
                }
                let objectKey: number = this.parent.getProperty<number>(BO_PROPERTY_NAME_OBJECTKEY);
                if (objectKey !== undefined) {
                    item.setProperty(BO_PROPERTY_NAME_DOCENTRY, objectKey);
                }
                let code: string = this.parent.getProperty<string>(BO_PROPERTY_NAME_CODE);
                if (code !== undefined) {
                    item.setProperty(BO_PROPERTY_NAME_DOCENTRY, code);
                }
            }
            if ((<any>item).lineId !== undefined) {
                // 存在行编号，为其自动编号
                let max: number = 1;
                for (let tmp of this) {
                    let id: number = tmp.getProperty<number>(BO_PROPERTY_NAME_LINEID);
                    if (id !== undefined) {
                        if (id > max) {
                            max = id;
                        }
                    }
                }
                item.setProperty(BO_PROPERTY_NAME_LINEID, max);
            }
            // 处理单据状态
            if (objects.instanceOf(item, BODocumentLine)) {
                if (objects.instanceOf(this.parent, BODocument)) {
                    item.setProperty(BO_PROPERTY_NAME_LINESTATUS, this.parent.getProperty(BO_PROPERTY_NAME_DOCUMENTSTATUS));
                } else if (objects.instanceOf(this.parent, BODocumentLine)) {
                    item.setProperty(BO_PROPERTY_NAME_LINESTATUS, this.parent.getProperty(BO_PROPERTY_NAME_LINESTATUS));
                }
            }
            let that: this = this;
            if (objects.instanceOf(item, Bindable)) {
                (<any>item).registerListener(this.listener);
            }
            this.runRules(null);
        }
        /**
         * 移出项目后
         * @param item 项目
         */
        protected afterRemove(item: T): void {
            if (objects.instanceOf(item, Bindable)) {
                (<any>item).removeListener(this.listener);
            }
            this.runRules(null);
        }
        private myRules: IBusinessRules;
        private runRules(property: string): void {
            if (objects.isNull(this.parent)) {
                return;
            }
            if (this.parent.isLoading) {
                return;
            }
            if (objects.isNull(this.myRules)) {
                this.myRules = businessRulesManager.getRules(objects.getType(this.parent));
            }
            if (objects.isNull(this.myRules)) {
                return;
            }
            for (let rule of this.myRules) {
                if (!(rule instanceof BusinessRuleCollection)) {
                    continue;
                }
                if (this.parent.getProperty(rule.collection) !== this) {
                    // 不是为此集合规则
                    continue;
                }
                if (!strings.isEmpty(property) && !objects.isNull(rule.inputProperties)) {
                    // 根据属性筛选规则
                    let done: boolean = false;
                    for (let item of rule.inputProperties) {
                        if (strings.equalsIgnoreCase(item, property)) {
                            done = true; break;
                        }
                    }
                    if (!done) {
                        continue;
                    }
                }
                try {
                    rule.execute(this.parent);
                } catch (error) {
                    logger.log(error);
                }
            }
        }
    }
    /**
     * 统一命名
     * @param value 待重命名属性
     */
    function naming(value: string): string {
        if (!strings.isEmpty(value)) {
            return value[0].toUpperCase() + value.substring(1);
        }
        return value;
    }

    /**
     * 单据对象基类
     */
    export abstract class BODocument<T extends IBODocument> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_DOCENTRY;
            condition.value = this[BO_PROPERTY_NAME_DOCENTRY];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_DOCENTRY));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_DOCENTRY]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 单据行对象基类
     */
    export abstract class BODocumentLine<T extends IBODocumentLine> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_DOCENTRY;
            condition.value = this[BO_PROPERTY_NAME_DOCENTRY];
            condition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = this[BO_PROPERTY_NAME_LINEID];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_DOCENTRY));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_DOCENTRY]);
            builder.append("]");
            builder.append("&");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_LINEID));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_LINEID]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 主数据对象基类
     */
    export abstract class BOMasterData<T extends IBOMasterData> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_CODE;
            condition.value = this[BO_PROPERTY_NAME_CODE];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_CODE));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_CODE]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 主数据行对象基类
     */
    export abstract class BOMasterDataLine<T extends IBOMasterDataLine> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_CODE;
            condition.value = this[BO_PROPERTY_NAME_CODE];
            condition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = this[BO_PROPERTY_NAME_LINEID];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_CODE));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_CODE]);
            builder.append("]");
            builder.append("&");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_LINEID));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_LINEID]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 简单对象基类
     */
    export abstract class BOSimple<T extends IBOSimple> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
            condition.value = this[BO_PROPERTY_NAME_OBJECTKEY];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_OBJECTKEY));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_OBJECTKEY]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
    /**
     * 简单行对象基类
     */
    export abstract class BOSimpleLine<T extends IBOSimpleLine> extends BusinessObject<T> {
        /** 获取查询 */
        criteria(): ICriteria {
            let criteria: ICriteria = new Criteria();
            let condition: ICondition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_OBJECTKEY;
            condition.value = this[BO_PROPERTY_NAME_OBJECTKEY];
            condition = criteria.conditions.create();
            condition.alias = BO_PROPERTY_NAME_LINEID;
            condition.value = this[BO_PROPERTY_NAME_LINEID];
            return criteria;
        }
        /** 输出字符串 */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.append("{");
            builder.append("[");
            builder.append(this[BO_PROPERTY_NAME_OBJECTCODE]);
            builder.append("].");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_OBJECTKEY));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_OBJECTKEY]);
            builder.append("]");
            builder.append("&");
            builder.append("[");
            builder.append(naming(BO_PROPERTY_NAME_LINEID));
            builder.append(" ");
            builder.append("=");
            builder.append(" ");
            builder.append(this[BO_PROPERTY_NAME_LINEID]);
            builder.append("]");
            builder.append("}");
            return builder.toString();
        }
    }
}