/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    IBusinessObject,
    IBusinessObjects
} from "ibas/index";

/** 客户主数据 */
export interface ICustomer extends IBusinessObject {

    /** 客户编号 */
    code: string;

    /** 客户名称 */
    name: string;

    /** 编号 */
    docEntry: number;

    /** 类型 */
    objectCode: string;

    /** 实例号（版本） */
    logInst: number;

    /** 编号系列 */
    series: number;

    /** 数据源 */
    dataSource: string;

    /** 创建日期 */
    createDate: Date;

    /** 创建时间 */
    createTime: number;

    /** 修改日期 */
    updateDate: Date;

    /** 修改时间 */
    updateTime: number;

    /** 创建用户 */
    createUserSign: number;

    /** 修改用户 */
    updateUserSign: number;

    /** 创建动作标识 */
    createActionId: string;

    /** 更新动作标识 */
    updateActionId: string;

    /** 数据所有者 */
    dataOwner: number;

    /** 团队成员 */
    teamMembers: string;

    /** 数据所属组织 */
    organization: string;

    /** 审批状态 */
    approvalStatus: emApprovalStatus;

    /** 已激活的 */
    activated: emYesNo;

    /** 已引用 */
    referenced: emYesNo;

    /** 删除的 */
    deleted: emYesNo;


}

