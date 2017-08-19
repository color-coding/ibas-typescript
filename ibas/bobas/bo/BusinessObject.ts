/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, List, ArrayList, ICriteria, Criteria, ICondition,
    StringBuilder
} from "../data/index";
import {
    IBusinessObject, BusinessObjectBase, BusinessObjectListBase
} from "../core/index";
import {
    IBusinessObjects, IBODocument, IBODocumentLine, IBOMasterData, IBOMasterDataLine, IBOSimple, IBOSimpleLine
} from "./BusinessObject.d";


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
/** 需要被重置的属性名称 */
export const NEED_BE_RESET_PROPERTIES: string[] = ["_listeners",
    "createDate", "createTime", "updateDate", "updateTime", "logInst", "createUserSign", "updateUserSign",
    "createActionId", "updateActionId", "referenced", "canceled", "deleted", "approvalStatus", "lineStatus", "status", "documentStatus"
];


/**
 * 业务对象基类
 */
export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {
    /** 构造 */
    constructor() {
        super();
        // 注册属性改变监听
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
}

/**
 * 业务对象集合基类
 */
export abstract class BusinessObjects<T extends IBusinessObject, P extends IBusinessObject>
    extends BusinessObjectListBase<T>
    implements IBusinessObjects<T, P> {
    /**
     * 构造
     * @param parent 父项
     */
    constructor(parent: P) {
        super();
        if (!objects.isNull(parent)) {
            let that: this = this;
            if (objects.instanceOf(parent, BusinessObjectBase)) {
                if (!objects.isNull((<any>parent).registerListener)) {
                    (<any>parent).registerListener({
                        propertyChanged(name: string): void {
                            that.onParentPropertyChanged(name);
                        }
                    })
                }
            }
            this.parent = parent;
        }
    }

    private _parent: P;

    protected get parent(): P {
        return this._parent;
    }

    protected set parent(value: P) {
        this._parent = value;
    }
    /** 父项属性改变时 */
    protected onParentPropertyChanged(name: string): void {
        // 父项属性改变时调用，可重载此函数加入业务逻辑
    }
    /** 子项属性改变时 */
    protected onChildItemParentPropertyChanged(item: T, name: string): void {
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
        let that: this = this;
        if (objects.instanceOf(item, BusinessObjectBase)) {
            if (!objects.isNull((<any>item).registerListener)) {
                (<any>item).registerListener({
                    caller: item,
                    propertyChanged(name: string): void { //方法中this指向caller
                        that.onChildItemParentPropertyChanged(this, name);
                    }
                })
            }
        }
    }
    /** 过滤删除的项目 */
    filterDeleted(): T[] {
        return super.where((item: T) => {
            if (!item.isDeleted) {
                return true;
            }
        });
    }
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
        builder.append(BO_PROPERTY_NAME_DOCENTRY);
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
        builder.append(BO_PROPERTY_NAME_DOCENTRY);
        builder.append(" ");
        builder.append("=");
        builder.append(" ");
        builder.append(this[BO_PROPERTY_NAME_DOCENTRY]);
        builder.append("]");
        builder.append("&");
        builder.append("[");
        builder.append(BO_PROPERTY_NAME_LINEID);
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
        builder.append(BO_PROPERTY_NAME_CODE);
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
        builder.append(BO_PROPERTY_NAME_CODE);
        builder.append(" ");
        builder.append("=");
        builder.append(" ");
        builder.append(this[BO_PROPERTY_NAME_CODE]);
        builder.append("]");
        builder.append("&");
        builder.append("[");
        builder.append(BO_PROPERTY_NAME_LINEID);
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
        builder.append(BO_PROPERTY_NAME_OBJECTKEY);
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
        builder.append(BO_PROPERTY_NAME_OBJECTKEY);
        builder.append(" ");
        builder.append("=");
        builder.append(" ");
        builder.append(this[BO_PROPERTY_NAME_OBJECTKEY]);
        builder.append("]");
        builder.append("&");
        builder.append("[");
        builder.append(BO_PROPERTY_NAME_LINEID);
        builder.append(" ");
        builder.append("=");
        builder.append(" ");
        builder.append(this[BO_PROPERTY_NAME_LINEID]);
        builder.append("]");
        builder.append("}");
        return builder.toString();
    }
}