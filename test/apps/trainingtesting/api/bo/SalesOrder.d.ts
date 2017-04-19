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
    IBusinessObjects,
    IBOMasterData,
    IBOMasterDataLine,
    IBODocument,
    IBODocumentLine,
    IBOSimple,
    IBOSimpleLine
} from "ibas/index";

/** 销售订单 */
export interface ISalesOrder extends IBODocument {

    /** 凭证编号 */
    docEntry: number;

    /** 期间编号 */
    docNum: number;

    /** 期间 */
    period: number;

    /** Instance */
    instance: number;

    /** 服务系列 */
    series: number;

    /** 手写 */
    handwritten: emYesNo;

    /** 已引用 */
    referenced: emYesNo;

    /** 取消 */
    canceled: emYesNo;

    /** 类型 */
    objectCode: string;

    /** 数据源 */
    dataSource: string;

    /** 实例号（版本） */
    logInst: number;

    /** 用户 */
    userSign: number;

    /** 是否结转 */
    transfered: emYesNo;

    /** 状态 */
    status: emBOStatus;

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

    /** 单据状态 */
    documentStatus: emDocumentStatus;

    /** 过账日期 */
    postingDate: Date;

    /** 到期日 */
    deliveryDate: Date;

    /** 凭证日期 */
    documentDate: Date;

    /** 参考1 */
    reference1: string;

    /** 参考2 */
    reference2: string;

    /** 备注 */
    remarks: string;

    /** 客户代码 */
    customerCode: string;

    /** 客户名称 */
    customerName: string;

    /** 单据货币 */
    documentCurrency: string;

    /** 单据交换率 */
    documentRate: number;

    /** 单据总计 */
    documentTotal: number;

    /** 周期 */
    cycle: number;

    /** 周期单位 */
    cycleUnit: string;


    /** 销售订单-行集合 */
    salesOrderItems: ISalesOrderItems;


}

/** 销售订单-行 */
export interface ISalesOrderItem extends IBODocumentLine {

    /** 编码 */
    docEntry: number;

    /** 行号 */
    lineId: number;

    /** 显示顺序 */
    visOrder: number;

    /** 类型 */
    objectCode: string;

    /** 数据源 */
    dataSource: string;

    /** 实例号（版本） */
    logInst: number;

    /** 已引用 */
    referenced: emYesNo;

    /** 取消 */
    canceled: emYesNo;

    /** 状态 */
    status: emBOStatus;

    /** 单据状态 */
    lineStatus: emDocumentStatus;

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

    /** 参考1 */
    reference1: string;

    /** 参考2 */
    reference2: string;

    /** 物料编号 */
    itemCode: string;

    /** 物料/服务描述 */
    itemDescription: string;

    /** 数量 */
    quantity: number;

    /** 行交货日期 */
    deliveryDate: Date;

    /** 剩余未清数量 */
    openQuantity: number;

    /** 单价 */
    price: number;

    /** 价格货币 */
    priceCurrency: string;

    /** 行总计 */
    lineTotal: number;

    /** 仓库代码 */
    warehouse: string;

}

/** 销售订单-行 集合 */
export interface ISalesOrderItems extends IBusinessObjects<ISalesOrderItem, ISalesOrder> {

    /** 创建并添加子项 */
    create(): ISalesOrderItem;
}

