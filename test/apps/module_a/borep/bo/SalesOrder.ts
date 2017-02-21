/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../../../ibas/bobas/index";

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
    /**
     * 初始化方法，属性在此方法初始化
     */
    protected init(): void {
        this.lineStatus = bobas.emDocumentStatus.PLANNED;
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
    /**
     * 初始化方法，属性在此方法初始化
     */
    protected init(): void {
        this.documentStatus = bobas.emDocumentStatus.PLANNED;
        this.items = new SalesOrderItems(this);
    }
}
