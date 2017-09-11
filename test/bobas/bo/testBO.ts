﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../ibas/bobas/index";
import { SalesOrder, SalesOrderItem } from "./SalesOrder";
import { BORepositoryTest } from "./BORepository";
import { DataConverter4Test } from "./DataConverters";

let listener: bobas.PropertyChangedListener = {
    propertyChanged(property: string): void {
        bobas.logger.log(bobas.emMessageLevel.DEBUG, "bo: property [{0}] was changed.", property);
    }
};
// 测试工厂
bobas.boFactory.register(SalesOrder);
let order: SalesOrder = bobas.boFactory.create<SalesOrder>(SalesOrder.name);
order.registerListener(listener);
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (order));
order.customerCode = "C00001";
order.documentStatus = bobas.emDocumentStatus.RELEASED;
let item: SalesOrderItem = order.salesOrderItems.create();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (item));
item.registerListener(listener);
item.itemCode = "A00001";
item.price = 1.99;
item.quantity = 2;
item.lineTotal = item.price * item.quantity;
item.user.userCode = "bbb";
item = order.salesOrderItems.create();
item.itemCode = "A00002";
item.price = 0.99;
item.quantity = 20;
item.lineTotal = item.price * item.quantity;
item.user.userCode = "ccc";
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: {0} {1}", "order", order.toString());
bobas.logger.log(bobas.emMessageLevel.DEBUG, "{0}", JSON.stringify(new DataConverter4Test().convert(order, "saveSalesOrder")));
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
for (let item of order.salesOrderItems) {
    bobas.assert.equals("bo status isNew", item.isNew, false);
    bobas.assert.equals("bo status isDirty", item.isDirty, false);
    bobas.assert.equals("bo status isDeleted", item.isDeleted, false);
}
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {0} {1}", "order", order.getProperties(false).size);
bobas.logger.log(bobas.emMessageLevel.INFO, "test: {0}", order.toString());
console.log(JSON.stringify(new DataConverter4Test().convert(order, "saveSalesOrder")));
// 克隆对象
let cOrder: SalesOrder = order.clone();
console.log(JSON.stringify(new DataConverter4Test().convert(cOrder, "saveSalesOrder")));
bobas.assert.equals("clone bo instance is not change.", order === cOrder, false);
// 测试查询
let criteria: bobas.ICriteria = new bobas.Criteria();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (criteria));
criteria.result = 100;
let condition: bobas.ICondition = criteria.conditions.create();
bobas.logger.log(bobas.emMessageLevel.DEBUG, "test: type of {0}", typeof (condition));
condition.alias = "docEntry";
condition.operation = bobas.emConditionOperation.GRATER_EQUAL;
condition.value = "1";
condition = criteria.conditions.create();
condition.alias = "docEntry";
condition.operation = bobas.emConditionOperation.LESS_THAN;
condition.value = "100000";
let sort: bobas.ISort = criteria.sorts.create();
sort.alias = "docEntry";
sort.sortType = bobas.emSortType.DESCENDING;
console.log(criteria.toString());
// 克隆对象
let cCriteria: bobas.ICriteria = criteria.clone();
console.log(cCriteria.toString());
bobas.assert.equals("clone bo instance is not change.", criteria === cCriteria, false);
// 远程调用业务仓库
let boRepository: BORepositoryTest = new BORepositoryTest();
boRepository.token = "hahaha";
// 测试在线服务仓库
boRepository.offline = false;
boRepository.address = "http://localhost:8080/demo/services/jersey/json/";
// 通过变量调用
let fetcher: bobas.FetchCaller<SalesOrder> = {
    /** 查询条件 */
    criteria: criteria,
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: bobas.IOperationResult<SalesOrder>): void {
        bobas.logger.log(bobas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
    }
};
boRepository.fetchSalesOrder(fetcher);
order.markNew(true);
// 直接调用
boRepository.saveSalesOrder({
    /** 被保存对象 */
    beSaved: order,
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: bobas.IOperationResult<SalesOrder>): void {
        bobas.logger.log(bobas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
        let newOrder: SalesOrder = opRslt.resultObjects.firstOrDefault();
        if (newOrder) {
            bobas.assert.equals("order document status wrong.", order.documentStatus, newOrder.documentStatus);
        }
    }
});
// 测试离线仓库
boRepository.offline = true;
boRepository.address = bobas.urls.rootUrl(undefined) + "/../../repository";
boRepository.fetchSalesOrder({
    criteria: criteria,
    onCompleted(opRslt: bobas.IOperationResult<SalesOrder>): void {
        bobas.logger.log(bobas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
    }
});

// 测试值改变
order = bobas.boFactory.create<SalesOrder>(SalesOrder.name);
order.documentStatus = bobas.emDocumentStatus.RELEASED;
item = order.salesOrderItems.create();
// afterAdd赋初值
bobas.assert.equals("item.lineStatus is default value.",
    item.lineStatus === bobas.emDocumentStatus.RELEASED, true);
// 父项更改修改子项
order.documentStatus = bobas.emDocumentStatus.CLOSED;
bobas.assert.equals("item.lineStatus is not changed to CLOSED.",
    item.lineStatus === bobas.emDocumentStatus.CLOSED, true);
// 子项更改修改父项
item.lineTotal = 100;
bobas.assert.equals("order.documentTotal does not equal the total number of item.lineTotal.",
    order.documentTotal === 100, true);
// 移除子项时移除子项监听事件
let listenerCount: number = (<any>item)._listeners.length;
order.salesOrderItems.remove(item);
bobas.assert.equals("item is not remove the listener after it removed from the collection",
    listenerCount - (<any>item)._listeners.length === 1, true);
