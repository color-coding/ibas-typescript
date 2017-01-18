/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./BusinessObject.d.ts" />

import { object } from '../data/Data';
import { IBusinessObject, IBusinessObjectList } from '../core/BusinessObjectCore.d';
import { BusinessObjectBase, BusinessObjectListBase } from '../core/BusinessObjectCore';
import {
    IBusinessObjects, IBOLine, IBOReferenced,
    IBODocument, IBODocumentLine, IBODocumentLines,
    IBOMasterData, IBOMasterDataLine, IBOMasterDataLines,
    IBOSimple, IBOSimpleLine, IBOSimpleLines,
} from './BusinessObject.d';

/**
 * 业务对象基类
 */
export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {

    constructor() {
        super();
    }
}

/**
 * 业务对象集合基类
 */
export abstract class BusinessObjects<T extends IBusinessObject, P extends IBusinessObject> extends BusinessObjectListBase<T> implements IBusinessObjects<T, P> {
    /**
     * 构造
     * @param parent 父项
     */
    constructor(parent: P) {
        super();
        if (object.isNull(parent)) {
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
    protected afterAdd(item: T) {

    }

}