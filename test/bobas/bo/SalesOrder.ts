/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../src/bobas/bobas";

import { User } from "./User";

/**
* 约束：
*    1. 本地对象（如下，SalesOrder）的属性用set、get定义，便于扩展方法。
*    2. 本地对象与远程对象，通过私有属性的名称构建关联关系。
          转换规则，仅“_”前缀的属性才进行映射！
             a. 去除“_”字符并把后面的第一个字母改大写。如：_salesOrderItems -> SalesOrderItems
             b. 如果值是boolean类型的，“_”字符替换为“is”并把“_”后的首字母改大写。如：_new -> isNew
    */

/** 远程对象示例
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

    private _docEntry: number;

    get docEntry(): number {
        return this._docEntry;
    }

    set docEntry(value: number) {
        this._docEntry = value;
    }

    private _lineId: number;

    get lineId(): number {
        return this._lineId;
    }

    set lineId(value: number) {
        this._lineId = value;
    }
    private _itemCode: string;

    get itemCode(): string {
        return this._itemCode;
    }

    set itemCode(value: string) {
        this._itemCode = value;
    }
    private _price: number;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
    private _quantity: number;

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
    private _lineTotal: number;

    get lineTotal(): number {
        return this._lineTotal;
    }

    set lineTotal(value: number) {
        this._lineTotal = value;
    }

    private _lineStatus: bobas.emDocumentStatus;

    get lineStatus(): bobas.emDocumentStatus {
        return this._lineStatus;
    }

    set lineStatus(value: bobas.emDocumentStatus) {
        this._lineStatus = value;
    }

    // 非“_”开始字符，不映射到远程对象
    private oUser: User = new User();

    get user(): User {
        return this.oUser;
    }

    set user(value: User) {
        this.oUser = value;
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

    private _docEntry: number;

    get docEntry(): number {
        return this._docEntry;
    }

    set docEntry(value: number) {
        this._docEntry = value;
    }

    private _customerCode: string;

    get customer(): string {
        return this._customerCode;
    }

    set customer(value: string) {
        this._customerCode = value;
    }

    private _documentStatus: bobas.emDocumentStatus;

    get documentStatus(): bobas.emDocumentStatus {
        return this._documentStatus;
    }

    set documentStatus(value: bobas.emDocumentStatus) {
        this._documentStatus = value;
    }

    private _canceled: bobas.emYesNo;

    get canceled(): bobas.emYesNo {
        return this._canceled;
    }

    set canceled(value: bobas.emYesNo) {
        this._canceled = value;
    }

    // 销售订单行，_salesOrderItems，映射远程对象
    private _salesOrderItems: SalesOrderItems = new SalesOrderItems(this);

    get items(): SalesOrderItems {
        return this._salesOrderItems;
    }

    set items(value: SalesOrderItems) {
        this._salesOrderItems = value;
    }

    // 非“_”开始字符，不映射到远程对象
    private oUser: User = new User();

    get user(): User {
        return this.oUser;
    }

    set user(value: User) {
        this.oUser = value;
    }

}
