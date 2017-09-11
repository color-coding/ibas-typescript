/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    strings, objects, List, ArrayList, ICriteria, Criteria, ICondition,
    StringBuilder
} from "../data/index";
import {
    IBusinessObject, BusinessObjectBase, BusinessObjectListBase, PropertyChangedListener, Bindable
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
/** 业务对象属性名称-documentStatus */
export const BO_PROPERTY_NAME_DOCUMENTSTATUS: string = "documentStatus";
/** 业务对象属性名称-lineStatus */
export const BO_PROPERTY_NAME_LINESTATUS: string = "lineStatus";
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
                    this.onChildPropertyChanged(bo, name);
                }
            }
        };
        if (!objects.isNull(parent)) {
            this.parent = parent;
        }
    }

    private _listener: PropertyChangedListener;

    protected get listener(): PropertyChangedListener {
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
    }
    /**
     * 移出项目后
     * @param item 项目
     */
    protected afterRemove(item: T): void {
        if (objects.instanceOf(item, Bindable)) {
            (<any>item).removeListener(this.listener);
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
