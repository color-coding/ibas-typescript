/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./BusinessObject.d.ts" />

import { IBusinessObject, IBusinessObjectList } from '../core/BusinessObjectCore.d';
import { BusinessObjectBase, BusinessObjectListBase } from '../core/BusinessObjectCore';

/**
 * 业务对象基类
 */
export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {

}


/**
 * 业务对象集合基类
 */
export abstract class BusinessObjects<T extends IBusinessObject> extends BusinessObjectListBase<T> {

}