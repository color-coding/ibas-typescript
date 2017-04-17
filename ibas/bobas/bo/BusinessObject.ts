/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { objects } from "../data/index";
import {
    IBusinessObject, BusinessObjectBase, BusinessObjectListBase
} from "../core/index";
import {
    IBusinessObjects
} from "./BusinessObject.d";


/** 业务对象属性名称-DocEntry */
export const BO_PROPERTY_NAME_DOCENTRY: string = "docEntry";
/** 业务对象属性名称-Code */
export const BO_PROPERTY_NAME_CODE: string = "code";
/** 业务对象属性名称-ObjectKey */
export const BO_PROPERTY_NAME_OBJECTKEY: string = "objectKey";
/** 业务对象属性名称-LineId */
export const BO_PROPERTY_NAME_LINEID: string = "lineId";


/**
 * 业务对象基类
 */
export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {
    /** 构造 */
    constructor() {
        super();
    }
    /** 删除 */
    delete(): void {
        this.markDeleted(true);
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
        if (objects.isNull(parent)) {
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
    }

}