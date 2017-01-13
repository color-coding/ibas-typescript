import * as bobas from '../../../src/bobas/bobas';
import * as test from './SalesOrder';

var arrays = new bobas.ArrayList();
arrays.add("");
let items = new test.SalesOrderItems();
items.add(new test.SalesOrderItem());
items.create();


let order = new test.SalesOrder();
order.Customer = "C00001";
let item = order.Items.create();
item.ItemCode = "A00001";
item.Price = 1.99;
item.Quantity = 2;
item.LineTotal = item.Price * item.Quantity;
item = order.Items.create();
item.ItemCode = "A00002";
item.Price = 0.99;
item.Quantity = 20;
item.LineTotal = item.Price * item.Quantity;
//bobas.logger.log(bobas.emMessageLevel.DEBUG, order.toString());
