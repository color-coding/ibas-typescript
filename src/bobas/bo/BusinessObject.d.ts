/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../core/BusinessObjectCore.d.ts" />

import { IBusinessObject, IBusinessObjectList } from '../core/BusinessObjectCore.d';


/**
* 业务对象-行
*/
export interface IBOLine {

}

/**
* 业务对象-单据
*/
export interface IBODocument extends IBusinessObject {

}

/**
* 业务对象-单据行
*/
export interface IBODocumentLine extends IBusinessObject, IBOLine {

}

/**
* 业务对象-单据行集合
*/
export interface IBODocumentLines<T extends IBODocumentLine> extends IBusinessObjectList<T> {

}

/**
* 业务对象-主数据
*/
export interface IBOMasterData extends IBusinessObject {

}

/**
* 业务对象-主数据行
*/
export interface IBOMasterDataLine extends IBusinessObject, IBOLine {

}

/**
* 业务对象-主数据行集合
*/
export interface IBOMasterDataLines<T extends IBOMasterDataLine> extends IBusinessObjectList<T> {

}
/**
* 业务对象-简单对象
*/
export interface IBOSimple extends IBusinessObject {

}

/**
* 业务对象-简单对象行
*/
export interface IBOSimpleLine extends IBusinessObject, IBOLine {

}

/**
* 业务对象-简单对象行集合
*/
export interface IBOSimpleLines<T extends IBOSimpleLine> extends IBusinessObjectList<T> {

}
