/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../core/BusinessObjectCore.d.ts" />
import { IBusinessObject, IBusinessObjectList } from "../core/index";
import {
    emDocumentStatus, emBOStatus, emYesNo, emApprovalStatus, ICriteria, List
} from "../data/index";

/**
* 业务对象集合
*/
export interface IBusinessObjects<T extends IBusinessObject, P extends IBusinessObject> extends IBusinessObjectList<T> {
    /** 过滤删除的项目 */
    filterDeleted(): T[];
}

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
export interface IBODocumentLines<T extends IBODocumentLine> extends IBusinessObjectList<T> {

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
export interface IBOMasterDataLines<T extends IBOMasterDataLine> extends IBusinessObjectList<T> {

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
export interface IBOSimpleLines<T extends IBOSimpleLine> extends IBusinessObjectList<T> {

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

