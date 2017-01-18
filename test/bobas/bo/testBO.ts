/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from '../../../src/bobas/bobas';
import * as test from './SalesOrder';

let order = new test.SalesOrder();
order.customer = "C00001";
let item = order.items.create();
item.itemCode = "A00001";
item.price = 1.99;
item.quantity = 2;
item.lineTotal = item.price * item.quantity;
item.user.userCode = "bbb";
item = order.items.create();
item.itemCode = "A00002";
item.price = 0.99;
item.quantity = 20;
item.lineTotal = item.price * item.quantity;
item.user.userCode = "ccc";
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: {0}","order", order.toString());
order.user.userCode = "aaa";
// 遍历属性名称，包括子项
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {1}","order", order.getProperties(true).size);
// 遍历属性名称，不包括子项
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {0} {1}","order", order.getProperties(true).size);
console.warn(order.getProperties(false).size);
bobas.assert.equals("bo status isNew", order.isNew, true);
bobas.assert.equals("bo status isDirty", order.isDirty, true);
bobas.assert.equals("bo status isDeleted", order.isDeleted, false);
order.markOld(true);
bobas.assert.equals("bo status isNew", order.isNew, false);
bobas.assert.equals("bo status isDirty", order.isDirty, false);
bobas.assert.equals("bo status isDeleted", order.isDeleted, false);
for (let item of order.items) {
    bobas.assert.equals("bo status isNew", item.isNew, false);
    bobas.assert.equals("bo status isDirty", item.isDirty, false);
    bobas.assert.equals("bo status isDeleted", item.isDeleted, false);
}
