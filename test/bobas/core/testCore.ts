import * as core from '../../../src/bobas/bobas';

class SalesOrderItem extends core.BusinessObjectBase<SalesOrderItem> {

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

class SalesOrderItems extends core.BusinessObjectListBase<SalesOrderItem>{

    create(): SalesOrderItem {
        var item = new SalesOrderItem();
        this.push(item);
        return item;
    }

}

class SalesOrder extends core.BusinessObjectBase<SalesOrder> {

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
        return this.items;
    }

    set Items(value: SalesOrderItems) {
        this.items = value;
    }
}

var order = new SalesOrder();
order.Customer = "C00001";
var item = order.Items.create();
item.ItemCode = "A00001";
item.Price = 1.99;
item.Quantity = 2;
item.LineTotal = item.Price * item.Quantity;
item = order.Items.create();
item.ItemCode = "A00002";
item.Price = 0.99;
item.Quantity = 20;
item.LineTotal = item.Price * item.Quantity;
