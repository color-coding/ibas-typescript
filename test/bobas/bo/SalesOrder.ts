/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    BusinessObject, BusinessObjects, BODocument, BODocumentLine,
    emYesNo, emDocumentStatus, emBOStatus, emApprovalStatus
} from "../../../ibas/bobas/index";
import { User } from "./User";

/*
 约束：
    1. 本地对象（如下，SalesOrder）的属性用set、get定义，便于扩展方法。
    2. 本地对象与远程对象，通过私有属性的名称构建关联关系。
          转换规则，仅“_”前缀的属性才进行映射！
             a. 去除“_”字符并把后面的第一个字母改大写。如：_salesOrderItems -> SalesOrderItems
             b. 如果值是boolean类型的，“_”字符替换为“is”并把“_”后的首字母改大写。如：_new -> isNew
 */

/* 远程对象示例
{
  "type": "SalesOrder",
  "isDirty": true,
  "isDeleted": false,
  "isNew": true,
  "UserFields": [
    {
      "Name": "U_OrderType",
      "Value": "S0000",
      "ValueType": "db_Alphanumeric"
    },
    {
      "Name": "U_OrderId",
      "Value": "5768",
      "ValueType": "db_Numeric"
    },
    {
      "Name": "U_OrderDate",
      "Value": "2017-01-22",
      "ValueType": "db_Date"
    },
    {
      "Name": "U_OrderTotal",
      "Value": "999.888",
      "ValueType": "db_Decimal"
    }
  ],
  "ApprovalStatus": "Unaffected",
  "Canceled": "Yes",
  "CreateTime": 0,
  "CreateUserSign": 0,
  "CustomerCode": "C00001",
  "Cycle": {
    "Value": 1.050001,
    "Unit": "hour"
  },
  "DataOwner": 0,
  "DeliveryDate": "2017-01-22T00:00:00",
  "DocEntry": 1,
  "DocNum": 0,
  "DocumentDate": "2017-01-22T00:00:00",
  "DocumentRate": 0,
  "DocumentStatus": "Closed",
  "DocumentTotal": 99.99,
  "Handwritten": "No",
  "Instance": 0,
  "LogInst": 0,
  "ObjectCode": "CC_TT_SALESORDER",
  "Period": 0,
  "PostingDate": "2017-01-22T00:00:00",
  "Referenced": "No",
  "SalesOrderItems": [
    {
      "isDirty": true,
      "isDeleted": false,
      "isNew": true,
      "Canceled": "No",
      "CreateTime": 0,
      "CreateUserSign": 0,
      "DocEntry": 1,
      "ItemCode": "A00001",
      "LineId": 1,
      "LineStatus": "Closed",
      "LineTotal": 0,
      "LogInst": 0,
      "ObjectCode": "CC_TT_SALESORDER",
      "OpenQuantity": 0,
      "Price": 99.99,
      "Quantity": 10,
      "Referenced": "No",
      "Status": "Open",
      "UpdateTime": 0,
      "UpdateUserSign": 0,
      "VisOrder": 0
    },
    {
      "isDirty": true,
      "isDeleted": false,
      "isNew": true,
      "Canceled": "No",
      "CreateTime": 0,
      "CreateUserSign": 0,
      "DocEntry": 1,
      "ItemCode": "A00002",
      "LineId": 2,
      "LineStatus": "Closed",
      "LineTotal": 0,
      "LogInst": 0,
      "ObjectCode": "CC_TT_SALESORDER",
      "OpenQuantity": 0,
      "Price": 199.990001,
      "Quantity": 10,
      "Referenced": "No",
      "Status": "Open",
      "UpdateTime": 0,
      "UpdateUserSign": 0,
      "VisOrder": 0
    },
    {
      "isDirty": true,
      "isDeleted": false,
      "isNew": true,
      "Canceled": "No",
      "CreateTime": 0,
      "CreateUserSign": 0,
      "DocEntry": 1,
      "ItemCode": "A00002",
      "LineId": 3,
      "LineStatus": "Closed",
      "LineTotal": 0,
      "LogInst": 0,
      "ObjectCode": "CC_TT_SALESORDER",
      "OpenQuantity": 0,
      "Price": 199.990001,
      "Quantity": 10,
      "Referenced": "No",
      "Status": "Open",
      "UpdateTime": 0,
      "UpdateUserSign": 0,
      "VisOrder": 0
    }
  ],
  "Series": 0,
  "Status": "Closed",
  "Transfered": "No",
  "UpdateTime": 0,
  "UpdateUserSign": 0,
  "UserSign": 0
}

*/

/** 销售订单 */
export class SalesOrder extends BODocument<SalesOrder> {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = "CC_TT_SALESORDER";
    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-凭证编号 */
    static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
    /** 获取-凭证编号 */
    get docEntry(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_DOCENTRY_NAME);
    }
    /** 设置-凭证编号 */
    set docEntry(value: number) {
        this.setProperty(SalesOrder.PROPERTY_DOCENTRY_NAME, value);
    }

    /** 映射的属性名称-期间编号 */
    static PROPERTY_DOCNUM_NAME: string = "DocNum";
    /** 获取-期间编号 */
    get docNum(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_DOCNUM_NAME);
    }
    /** 设置-期间编号 */
    set docNum(value: number) {
        this.setProperty(SalesOrder.PROPERTY_DOCNUM_NAME, value);
    }

    /** 映射的属性名称-期间 */
    static PROPERTY_PERIOD_NAME: string = "Period";
    /** 获取-期间 */
    get period(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_PERIOD_NAME);
    }
    /** 设置-期间 */
    set period(value: number) {
        this.setProperty(SalesOrder.PROPERTY_PERIOD_NAME, value);
    }

    /** 映射的属性名称-Instance */
    static PROPERTY_INSTANCE_NAME: string = "Instance";
    /** 获取-Instance */
    get instance(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_INSTANCE_NAME);
    }
    /** 设置-Instance */
    set instance(value: number) {
        this.setProperty(SalesOrder.PROPERTY_INSTANCE_NAME, value);
    }

    /** 映射的属性名称-服务系列 */
    static PROPERTY_SERIES_NAME: string = "Series";
    /** 获取-服务系列 */
    get series(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_SERIES_NAME);
    }
    /** 设置-服务系列 */
    set series(value: number) {
        this.setProperty(SalesOrder.PROPERTY_SERIES_NAME, value);
    }

    /** 映射的属性名称-手写 */
    static PROPERTY_HANDWRITTEN_NAME: string = "Handwritten";
    /** 获取-手写 */
    get handwritten(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrder.PROPERTY_HANDWRITTEN_NAME);
    }
    /** 设置-手写 */
    set handwritten(value: emYesNo) {
        this.setProperty(SalesOrder.PROPERTY_HANDWRITTEN_NAME, value);
    }

    /** 映射的属性名称-已引用 */
    static PROPERTY_REFERENCED_NAME: string = "Referenced";
    /** 获取-已引用 */
    get referenced(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrder.PROPERTY_REFERENCED_NAME);
    }
    /** 设置-已引用 */
    set referenced(value: emYesNo) {
        this.setProperty(SalesOrder.PROPERTY_REFERENCED_NAME, value);
    }

    /** 映射的属性名称-取消 */
    static PROPERTY_CANCELED_NAME: string = "Canceled";
    /** 获取-取消 */
    get canceled(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrder.PROPERTY_CANCELED_NAME);
    }
    /** 设置-取消 */
    set canceled(value: emYesNo) {
        this.setProperty(SalesOrder.PROPERTY_CANCELED_NAME, value);
    }

    /** 映射的属性名称-类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-类型 */
    get objectCode(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-类型 */
    set objectCode(value: string) {
        this.setProperty(SalesOrder.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(SalesOrder.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-实例号（版本） */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-实例号（版本） */
    get logInst(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_LOGINST_NAME);
    }
    /** 设置-实例号（版本） */
    set logInst(value: number) {
        this.setProperty(SalesOrder.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-用户 */
    static PROPERTY_USERSIGN_NAME: string = "UserSign";
    /** 获取-用户 */
    get userSign(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_USERSIGN_NAME);
    }
    /** 设置-用户 */
    set userSign(value: number) {
        this.setProperty(SalesOrder.PROPERTY_USERSIGN_NAME, value);
    }

    /** 映射的属性名称-是否结转 */
    static PROPERTY_TRANSFERED_NAME: string = "Transfered";
    /** 获取-是否结转 */
    get transfered(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrder.PROPERTY_TRANSFERED_NAME);
    }
    /** 设置-是否结转 */
    set transfered(value: emYesNo) {
        this.setProperty(SalesOrder.PROPERTY_TRANSFERED_NAME, value);
    }

    /** 映射的属性名称-状态 */
    static PROPERTY_STATUS_NAME: string = "Status";
    /** 获取-状态 */
    get status(): emBOStatus {
        return this.getProperty<emBOStatus>(SalesOrder.PROPERTY_STATUS_NAME);
    }
    /** 设置-状态 */
    set status(value: emBOStatus) {
        this.setProperty(SalesOrder.PROPERTY_STATUS_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(SalesOrder.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(SalesOrder.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(SalesOrder.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-修改日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-修改日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(SalesOrder.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-修改日期 */
    set updateDate(value: Date) {
        this.setProperty(SalesOrder.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-修改时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-修改时间 */
    get updateTime(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-修改时间 */
    set updateTime(value: number) {
        this.setProperty(SalesOrder.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(SalesOrder.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-修改用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-修改用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-修改用户 */
    set updateUserSign(value: number) {
        this.setProperty(SalesOrder.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(SalesOrder.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(SalesOrder.PROPERTY_UPDATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-数据所有者 */
    static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
    /** 获取-数据所有者 */
    get dataOwner(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_DATAOWNER_NAME);
    }
    /** 设置-数据所有者 */
    set dataOwner(value: number) {
        this.setProperty(SalesOrder.PROPERTY_DATAOWNER_NAME, value);
    }

    /** 映射的属性名称-团队成员 */
    static PROPERTY_TEAMMEMBERS_NAME: string = "TeamMembers";
    /** 获取-团队成员 */
    get teamMembers(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_TEAMMEMBERS_NAME);
    }
    /** 设置-团队成员 */
    set teamMembers(value: string) {
        this.setProperty(SalesOrder.PROPERTY_TEAMMEMBERS_NAME, value);
    }

    /** 映射的属性名称-数据所属组织 */
    static PROPERTY_ORGANIZATION_NAME: string = "Organization";
    /** 获取-数据所属组织 */
    get organization(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_ORGANIZATION_NAME);
    }
    /** 设置-数据所属组织 */
    set organization(value: string) {
        this.setProperty(SalesOrder.PROPERTY_ORGANIZATION_NAME, value);
    }

    /** 映射的属性名称-审批状态 */
    static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
    /** 获取-审批状态 */
    get approvalStatus(): emApprovalStatus {
        return this.getProperty<emApprovalStatus>(SalesOrder.PROPERTY_APPROVALSTATUS_NAME);
    }
    /** 设置-审批状态 */
    set approvalStatus(value: emApprovalStatus) {
        this.setProperty(SalesOrder.PROPERTY_APPROVALSTATUS_NAME, value);
    }

    /** 映射的属性名称-单据状态 */
    static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
    /** 获取-单据状态 */
    get documentStatus(): emDocumentStatus {
        return this.getProperty<emDocumentStatus>(SalesOrder.PROPERTY_DOCUMENTSTATUS_NAME);
    }
    /** 设置-单据状态 */
    set documentStatus(value: emDocumentStatus) {
        this.setProperty(SalesOrder.PROPERTY_DOCUMENTSTATUS_NAME, value);
    }

    /** 映射的属性名称-过账日期 */
    static PROPERTY_POSTINGDATE_NAME: string = "PostingDate";
    /** 获取-过账日期 */
    get postingDate(): Date {
        return this.getProperty<Date>(SalesOrder.PROPERTY_POSTINGDATE_NAME);
    }
    /** 设置-过账日期 */
    set postingDate(value: Date) {
        this.setProperty(SalesOrder.PROPERTY_POSTINGDATE_NAME, value);
    }

    /** 映射的属性名称-到期日 */
    static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
    /** 获取-到期日 */
    get deliveryDate(): Date {
        return this.getProperty<Date>(SalesOrder.PROPERTY_DELIVERYDATE_NAME);
    }
    /** 设置-到期日 */
    set deliveryDate(value: Date) {
        this.setProperty(SalesOrder.PROPERTY_DELIVERYDATE_NAME, value);
    }

    /** 映射的属性名称-凭证日期 */
    static PROPERTY_DOCUMENTDATE_NAME: string = "DocumentDate";
    /** 获取-凭证日期 */
    get documentDate(): Date {
        return this.getProperty<Date>(SalesOrder.PROPERTY_DOCUMENTDATE_NAME);
    }
    /** 设置-凭证日期 */
    set documentDate(value: Date) {
        this.setProperty(SalesOrder.PROPERTY_DOCUMENTDATE_NAME, value);
    }

    /** 映射的属性名称-参考1 */
    static PROPERTY_REFERENCE1_NAME: string = "Reference1";
    /** 获取-参考1 */
    get reference1(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_REFERENCE1_NAME);
    }
    /** 设置-参考1 */
    set reference1(value: string) {
        this.setProperty(SalesOrder.PROPERTY_REFERENCE1_NAME, value);
    }

    /** 映射的属性名称-参考2 */
    static PROPERTY_REFERENCE2_NAME: string = "Reference2";
    /** 获取-参考2 */
    get reference2(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_REFERENCE2_NAME);
    }
    /** 设置-参考2 */
    set reference2(value: string) {
        this.setProperty(SalesOrder.PROPERTY_REFERENCE2_NAME, value);
    }

    /** 映射的属性名称-备注 */
    static PROPERTY_REMARKS_NAME: string = "Remarks";
    /** 获取-备注 */
    get remarks(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_REMARKS_NAME);
    }
    /** 设置-备注 */
    set remarks(value: string) {
        this.setProperty(SalesOrder.PROPERTY_REMARKS_NAME, value);
    }

    /** 映射的属性名称-客户代码 */
    static PROPERTY_CUSTOMERCODE_NAME: string = "CustomerCode";
    /** 获取-客户代码 */
    get customerCode(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_CUSTOMERCODE_NAME);
    }
    /** 设置-客户代码 */
    set customerCode(value: string) {
        this.setProperty(SalesOrder.PROPERTY_CUSTOMERCODE_NAME, value);
    }

    /** 映射的属性名称-客户名称 */
    static PROPERTY_CUSTOMERNAME_NAME: string = "CustomerName";
    /** 获取-客户名称 */
    get customerName(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_CUSTOMERNAME_NAME);
    }
    /** 设置-客户名称 */
    set customerName(value: string) {
        this.setProperty(SalesOrder.PROPERTY_CUSTOMERNAME_NAME, value);
    }

    /** 映射的属性名称-单据货币 */
    static PROPERTY_DOCUMENTCURRENCY_NAME: string = "DocumentCurrency";
    /** 获取-单据货币 */
    get documentCurrency(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_DOCUMENTCURRENCY_NAME);
    }
    /** 设置-单据货币 */
    set documentCurrency(value: string) {
        this.setProperty(SalesOrder.PROPERTY_DOCUMENTCURRENCY_NAME, value);
    }

    /** 映射的属性名称-单据交换率 */
    static PROPERTY_DOCUMENTRATE_NAME: string = "DocumentRate";
    /** 获取-单据交换率 */
    get documentRate(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_DOCUMENTRATE_NAME);
    }
    /** 设置-单据交换率 */
    set documentRate(value: number) {
        this.setProperty(SalesOrder.PROPERTY_DOCUMENTRATE_NAME, value);
    }

    /** 映射的属性名称-单据总计 */
    static PROPERTY_DOCUMENTTOTAL_NAME: string = "DocumentTotal";
    /** 获取-单据总计 */
    get documentTotal(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_DOCUMENTTOTAL_NAME);
    }
    /** 设置-单据总计 */
    set documentTotal(value: number) {
        this.setProperty(SalesOrder.PROPERTY_DOCUMENTTOTAL_NAME, value);
    }

    /** 映射的属性名称-周期 */
    static PROPERTY_CYCLE_NAME: string = "Cycle";
    /** 获取-周期 */
    get cycle(): number {
        return this.getProperty<number>(SalesOrder.PROPERTY_CYCLE_NAME);
    }
    /** 设置-周期 */
    set cycle(value: number) {
        this.setProperty(SalesOrder.PROPERTY_CYCLE_NAME, value);
    }

    /** 映射的属性名称-周期单位 */
    static PROPERTY_CYCLEUNIT_NAME: string = "CycleUnit";
    /** 获取-周期单位 */
    get cycleUnit(): string {
        return this.getProperty<string>(SalesOrder.PROPERTY_CYCLEUNIT_NAME);
    }
    /** 设置-周期单位 */
    set cycleUnit(value: string) {
        this.setProperty(SalesOrder.PROPERTY_CYCLEUNIT_NAME, value);
    }


    /** 映射的属性名称-销售订单-行集合 */
    static PROPERTY_SALESORDERITEMS_NAME: string = "SalesOrderItems";
    /** 获取-销售订单-行集合 */
    get salesOrderItems(): SalesOrderItems {
        return this.getProperty<SalesOrderItems>(SalesOrder.PROPERTY_SALESORDERITEMS_NAME);
    }
    /** 设置-销售订单-行集合 */
    set salesOrderItems(value: SalesOrderItems) {
        this.setProperty(SalesOrder.PROPERTY_SALESORDERITEMS_NAME, value);
    }

    /** 初始化数据 */
    protected init(): void {
        this.salesOrderItems = new SalesOrderItems(this);
        this.objectCode = SalesOrder.BUSINESS_OBJECT_CODE;
    }
}

/** 销售订单-行 */
export class SalesOrderItem extends BODocumentLine<SalesOrderItem> {

    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-编码 */
    static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
    /** 获取-编码 */
    get docEntry(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_DOCENTRY_NAME);
    }
    /** 设置-编码 */
    set docEntry(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_DOCENTRY_NAME, value);
    }

    /** 映射的属性名称-行号 */
    static PROPERTY_LINEID_NAME: string = "LineId";
    /** 获取-行号 */
    get lineId(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_LINEID_NAME);
    }
    /** 设置-行号 */
    set lineId(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_LINEID_NAME, value);
    }

    /** 映射的属性名称-显示顺序 */
    static PROPERTY_VISORDER_NAME: string = "VisOrder";
    /** 获取-显示顺序 */
    get visOrder(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_VISORDER_NAME);
    }
    /** 设置-显示顺序 */
    set visOrder(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_VISORDER_NAME, value);
    }

    /** 映射的属性名称-类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-类型 */
    get objectCode(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-类型 */
    set objectCode(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-实例号（版本） */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-实例号（版本） */
    get logInst(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_LOGINST_NAME);
    }
    /** 设置-实例号（版本） */
    set logInst(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-已引用 */
    static PROPERTY_REFERENCED_NAME: string = "Referenced";
    /** 获取-已引用 */
    get referenced(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrderItem.PROPERTY_REFERENCED_NAME);
    }
    /** 设置-已引用 */
    set referenced(value: emYesNo) {
        this.setProperty(SalesOrderItem.PROPERTY_REFERENCED_NAME, value);
    }

    /** 映射的属性名称-取消 */
    static PROPERTY_CANCELED_NAME: string = "Canceled";
    /** 获取-取消 */
    get canceled(): emYesNo {
        return this.getProperty<emYesNo>(SalesOrderItem.PROPERTY_CANCELED_NAME);
    }
    /** 设置-取消 */
    set canceled(value: emYesNo) {
        this.setProperty(SalesOrderItem.PROPERTY_CANCELED_NAME, value);
    }

    /** 映射的属性名称-状态 */
    static PROPERTY_STATUS_NAME: string = "Status";
    /** 获取-状态 */
    get status(): emBOStatus {
        return this.getProperty<emBOStatus>(SalesOrderItem.PROPERTY_STATUS_NAME);
    }
    /** 设置-状态 */
    set status(value: emBOStatus) {
        this.setProperty(SalesOrderItem.PROPERTY_STATUS_NAME, value);
    }

    /** 映射的属性名称-单据状态 */
    static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
    /** 获取-单据状态 */
    get lineStatus(): emDocumentStatus {
        return this.getProperty<emDocumentStatus>(SalesOrderItem.PROPERTY_LINESTATUS_NAME);
    }
    /** 设置-单据状态 */
    set lineStatus(value: emDocumentStatus) {
        this.setProperty(SalesOrderItem.PROPERTY_LINESTATUS_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(SalesOrderItem.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(SalesOrderItem.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-修改日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-修改日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(SalesOrderItem.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-修改日期 */
    set updateDate(value: Date) {
        this.setProperty(SalesOrderItem.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-修改时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-修改时间 */
    get updateTime(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-修改时间 */
    set updateTime(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-修改用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-修改用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-修改用户 */
    set updateUserSign(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_UPDATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-参考1 */
    static PROPERTY_REFERENCE1_NAME: string = "Reference1";
    /** 获取-参考1 */
    get reference1(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_REFERENCE1_NAME);
    }
    /** 设置-参考1 */
    set reference1(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_REFERENCE1_NAME, value);
    }

    /** 映射的属性名称-参考2 */
    static PROPERTY_REFERENCE2_NAME: string = "Reference2";
    /** 获取-参考2 */
    get reference2(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_REFERENCE2_NAME);
    }
    /** 设置-参考2 */
    set reference2(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_REFERENCE2_NAME, value);
    }

    /** 映射的属性名称-物料编号 */
    static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
    /** 获取-物料编号 */
    get itemCode(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_ITEMCODE_NAME);
    }
    /** 设置-物料编号 */
    set itemCode(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_ITEMCODE_NAME, value);
    }

    /** 映射的属性名称-物料/服务描述 */
    static PROPERTY_ITEMDESCRIPTION_NAME: string = "ItemDescription";
    /** 获取-物料/服务描述 */
    get itemDescription(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_ITEMDESCRIPTION_NAME);
    }
    /** 设置-物料/服务描述 */
    set itemDescription(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_ITEMDESCRIPTION_NAME, value);
    }

    /** 映射的属性名称-数量 */
    static PROPERTY_QUANTITY_NAME: string = "Quantity";
    /** 获取-数量 */
    get quantity(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_QUANTITY_NAME);
    }
    /** 设置-数量 */
    set quantity(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_QUANTITY_NAME, value);
    }

    /** 映射的属性名称-行交货日期 */
    static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
    /** 获取-行交货日期 */
    get deliveryDate(): Date {
        return this.getProperty<Date>(SalesOrderItem.PROPERTY_DELIVERYDATE_NAME);
    }
    /** 设置-行交货日期 */
    set deliveryDate(value: Date) {
        this.setProperty(SalesOrderItem.PROPERTY_DELIVERYDATE_NAME, value);
    }

    /** 映射的属性名称-剩余未清数量 */
    static PROPERTY_OPENQUANTITY_NAME: string = "OpenQuantity";
    /** 获取-剩余未清数量 */
    get openQuantity(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_OPENQUANTITY_NAME);
    }
    /** 设置-剩余未清数量 */
    set openQuantity(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_OPENQUANTITY_NAME, value);
    }

    /** 映射的属性名称-单价 */
    static PROPERTY_PRICE_NAME: string = "Price";
    /** 获取-单价 */
    get price(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_PRICE_NAME);
    }
    /** 设置-单价 */
    set price(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_PRICE_NAME, value);
    }

    /** 映射的属性名称-价格货币 */
    static PROPERTY_PRICECURRENCY_NAME: string = "PriceCurrency";
    /** 获取-价格货币 */
    get priceCurrency(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_PRICECURRENCY_NAME);
    }
    /** 设置-价格货币 */
    set priceCurrency(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_PRICECURRENCY_NAME, value);
    }

    /** 映射的属性名称-行总计 */
    static PROPERTY_LINETOTAL_NAME: string = "LineTotal";
    /** 获取-行总计 */
    get lineTotal(): number {
        return this.getProperty<number>(SalesOrderItem.PROPERTY_LINETOTAL_NAME);
    }
    /** 设置-行总计 */
    set lineTotal(value: number) {
        this.setProperty(SalesOrderItem.PROPERTY_LINETOTAL_NAME, value);
    }

    /** 映射的属性名称-仓库代码 */
    static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
    /** 获取-仓库代码 */
    get warehouse(): string {
        return this.getProperty<string>(SalesOrderItem.PROPERTY_WAREHOUSE_NAME);
    }
    /** 设置-仓库代码 */
    set warehouse(value: string) {
        this.setProperty(SalesOrderItem.PROPERTY_WAREHOUSE_NAME, value);
    }

    /** 用户，不映射到远程 */
    user: User;

    /** 初始化数据 */
    protected init(): void {
        this.user = new User();
    }
}

/** 销售订单-行 集合 */
export class SalesOrderItems extends BusinessObjects<SalesOrderItem, SalesOrder>  {

    /** 创建并添加子项 */
    create(): SalesOrderItem {
        let item: SalesOrderItem = new SalesOrderItem();
        this.add(item);
        return item;
    }
    /** 子项属性改变时 */
    protected onChildPropertyChanged(item: SalesOrderItem, name: string): void {
        super.onChildPropertyChanged(item, name);
        if (name.toLowerCase() === SalesOrderItem.PROPERTY_LINETOTAL_NAME.toLowerCase()) {
            let total: number = 0;
            for (let salesOrderItem of this.filterDeleted()) {
                if (!salesOrderItem.lineTotal) {
                    salesOrderItem.lineTotal = 0;
                }
                total += salesOrderItem.lineTotal;
            }
            this.parent.documentTotal = total;
        }
    }
}
