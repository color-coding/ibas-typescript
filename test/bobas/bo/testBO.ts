/**
* @license
* Copyright color-coding studio. All Rights Reserved.
*
* Use of this source code is governed by an Apache License, Version 2.0
* that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
*/

import * as bobas from "../../../ibas/bobas/bobas";
import { SalesOrder } from "./SalesOrder";
import { BORepositoryTest } from "./BORepository";

let listener: bobas.PropertyChangedListener = {
    propertyChanged(property: string): void {
        bobas.logger.log(bobas.emMessageLevel.DEBUG, "bo: property [{0}] was changed.", property);
    }
}
let order = new SalesOrder();
order.registerListener(listener);
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (order));
order.customer = "C00001";
order.documentStatus = bobas.emDocumentStatus.RELEASED;
let item = order.items.create();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (item));
item.registerListener(listener);
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
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: {0}", "order", order.toString());
order.user.userCode = "aaa";
// 遍历属性名称，包括子项
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {1}", "order", order.getProperties(true).size);
// 遍历属性名称，不包括子项
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {0} {1}", "order", order.getProperties(false).size);
// 测试状态
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
// 远程调用业务仓库
let criteria = new bobas.Criteria();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (criteria));
criteria.result = 100;
let condition = criteria.conditions.create();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (condition));
condition.alias = "docEntry";
condition.operation = bobas.emConditionOperation.GRATER_EQUAL;
condition.condVal = "1";
condition = criteria.conditions.create();
condition.alias = "docEntry";
condition.operation = bobas.emConditionOperation.LESS_THAN;
condition.condVal = "100000";
let sort = criteria.sorts.create();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (sort));
sort.alias = "docEntry";
sort.sortType = bobas.emSortType.DESCENDING;

//http://localhost:8080/demo/services/jersey/fetchSalesOrder?token=hahaha
let boRepository = new BORepositoryTest();
boRepository.token = "hahaha";
boRepository.address = "http://localhost:8080/demo/services/jersey/json/";
boRepository.conect();
boRepository.fetchSalesOrder(criteria, function (opRslt: bobas.IOperationResult<SalesOrder>) {
    bobas.logger.log(bobas.string.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
});
order.markNew(true);
boRepository.saveSalesOrder(order, function (opRslt: bobas.IOperationResult<SalesOrder>) {
    bobas.logger.log(bobas.string.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
    let newOrder = opRslt.resultObjects.firstOrDefault();
    bobas.assert.equals("order document status wrong.", order.documentStatus, newOrder.documentStatus);
});

