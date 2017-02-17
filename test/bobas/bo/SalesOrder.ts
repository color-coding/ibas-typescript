/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../ibas/bobas/index";

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

/**
 * 销售订单行对象
 */
export class SalesOrderItem extends bobas.BusinessObject<SalesOrderItem> {

    get docEntry(): number {
        return this.getProperty<number>("_docEntry");
    }

    set docEntry(value: number) {
        this.setProperty("_docEntry", value);
    }

    get lineId(): number {
        return this.getProperty<number>("_lineId");
    }

    set lineId(value: number) {
        this.setProperty("_lineId", value);
    }

    get itemCode(): string {
        return this.getProperty<string>("_itemCode");
    }

    set itemCode(value: string) {
        this.setProperty("_itemCode", value);
    }

    get price(): number {
        return this.getProperty<number>("_price");
    }

    set price(value: number) {
        this.setProperty("_price", value);
    }

    get quantity(): number {
        return this.getProperty<number>("_quantity");
    }

    set quantity(value: number) {
        this.setProperty("_quantity", value);
    }

    get lineTotal(): number {
        return this.getProperty<number>("_lineTotal");
    }

    set lineTotal(value: number) {
        this.setProperty("_lineTotal", value);
    }

    get lineStatus(): bobas.emDocumentStatus {
        return this.getProperty<bobas.emDocumentStatus>("_lineStatus");
    }

    set lineStatus(value: bobas.emDocumentStatus) {
        this.setProperty("_lineStatus", value);
    }

    // 非“_”开始字符，不映射到远程对象

    get user(): User {
        return this.getProperty<User>("oUser");
    }

    set user(value: User) {
        this.setProperty("oUser", value);
    }

    protected init(): void {
        this.user = new User();
    }
}
/**
 * 销售订单行对象集合
 */
export class SalesOrderItems extends bobas.BusinessObjects<SalesOrderItem, SalesOrder> {

    /**
     * 创建并添加子项
     */
    create(): SalesOrderItem {
        let item = new SalesOrderItem();
        this.add(item);
        return item;
    }

}
/**
 * 销售订单对象
 */
export class SalesOrder extends bobas.BusinessObject<SalesOrder> {

    get docEntry(): number {
        return this.getProperty<number>("_docEntry");
    }

    set docEntry(value: number) {
        this.setProperty("_docEntry", value);
    }

    get customer(): string {
        return this.getProperty<string>("_customerCode");
    }

    set customer(value: string) {
        this.setProperty("_customerCode", value);
    }

    get documentStatus(): bobas.emDocumentStatus {
        return this.getProperty<bobas.emDocumentStatus>("_documentStatus");
    }

    set documentStatus(value: bobas.emDocumentStatus) {
        this.setProperty("_documentStatus", value);
    }

    get canceled(): bobas.emYesNo {
        return this.getProperty<bobas.emYesNo>("_canceled");
    }

    set canceled(value: bobas.emYesNo) {
        this.setProperty("_canceled", value);
    }

    // 销售订单行，_salesOrderItems，映射远程对象
    get items(): SalesOrderItems {
        return this.getProperty<SalesOrderItems>("_salesOrderItems");
    }

    set items(value: SalesOrderItems) {
        this.setProperty("_salesOrderItems", value);
    }

    // 非“_”开始字符，不映射到远程对象
    get user(): User {
        return this.getProperty<User>("oUser");
    }

    set user(value: User) {
        this.setProperty("oUser", value);
    }

    protected init(): void {
        this.user = new User();
        this.items = new SalesOrderItems(this);
    }
}
