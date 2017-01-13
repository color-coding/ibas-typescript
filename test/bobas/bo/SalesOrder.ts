import * as bobas from '../../../src/bobas/bobas';

/**
* 销售订单行对象
*/
export class SalesOrderItem extends bobas.BusinessObject<SalesOrderItem> {

    private docEntry: number;

    get DocEntry(): number {
        return this.docEntry;
    }

    set DocEntry(value: number) {
        this.docEntry = value;
    }

    private lineId: number;

    get LineId(): number {
        return this.lineId;
    }

    set LineId(value: number) {
        this.lineId = value;
    }
    private itemCode: string;

    get ItemCode(): string {
        return this.itemCode;
    }

    set ItemCode(value: string) {
        this.itemCode = value;
    }
    private price: number;

    get Price(): number {
        return this.price;
    }

    set Price(value: number) {
        this.price = value;
    }
    private quantity: number;

    get Quantity(): number {
        return this.quantity;
    }

    set Quantity(value: number) {
        this.quantity = value;
    }
    private lineTotal: number;

    get LineTotal(): number {
        return this.lineTotal;
    }

    set LineTotal(value: number) {
        this.lineTotal = value;
    }
}
/**
* 销售订单行对象集合
*/
export class SalesOrderItems extends bobas.BusinessObjects<SalesOrderItem>{

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

    private docEntry: number;

    get DocEntry(): number {
        return this.docEntry;
    }

    set DocEntry(value: number) {
        this.docEntry = value;
    }

    private customer: string;

    get Customer(): string {
        return this.customer;
    }

    set Customer(value: string) {
        this.customer = value;
    }

    private items: SalesOrderItems;

    get Items(): SalesOrderItems {
        if (this.items == null) {
            this.items = new SalesOrderItems();
        }
        return this.items;
    }

    set Items(value: SalesOrderItems) {
        this.items = value;
    }
}
