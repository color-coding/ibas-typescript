﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../ibas/index.d.ts" />
import { SalesOrder, SalesOrderItem } from "./SalesOrder";
import { BORepositoryTest, DataConverter4Test } from "./BORepository";

let listener: ibas.IPropertyChangedListener = {
    propertyChanged(property: string): void {
        ibas.logger.log(ibas.emMessageLevel.DEBUG, "bo: property [{0}] was changed.", property);
    }
};
// 测试工厂
ibas.boFactory.register(SalesOrder);
let order: SalesOrder = ibas.boFactory.create<SalesOrder>(SalesOrder.name);
order.registerListener(listener);
ibas.logger.log(ibas.emMessageLevel.DEBUG, "test: type of {0}", typeof (order));
order.customerCode = "C00001";
order.documentStatus = ibas.emDocumentStatus.RELEASED;
let item: SalesOrderItem = order.salesOrderItems.create();
ibas.logger.log(ibas.emMessageLevel.DEBUG, "test: type of {0}", typeof (item));
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
ibas.logger.log(ibas.emMessageLevel.DEBUG, "test: {0} {1}", "order", order.toString());
ibas.logger.log(ibas.emMessageLevel.DEBUG, "{0}", JSON.stringify(new DataConverter4Test().convert(order, "saveSalesOrder")));
// 遍历属性名称，包括子项
ibas.logger.log(ibas.emMessageLevel.INFO, "test: {1}", "order", order.getProperties(true).size);
// 遍历属性名称，不包括子项
ibas.logger.log(ibas.emMessageLevel.INFO, "test: {0} {1}", "order", order.getProperties(false).size);
// 测试状态
ibas.assert.equals("bo status isNew", order.isNew, true);
ibas.assert.equals("bo status isDirty", order.isDirty, true);
ibas.assert.equals("bo status isDeleted", order.isDeleted, false);
order.markOld(true);
ibas.assert.equals("bo status isNew", order.isNew, false);
ibas.assert.equals("bo status isDirty", order.isDirty, false);
ibas.assert.equals("bo status isDeleted", order.isDeleted, false);
for (let item of order.salesOrderItems) {
    ibas.assert.equals("bo status isNew", item.isNew, false);
    ibas.assert.equals("bo status isDirty", item.isDirty, false);
    ibas.assert.equals("bo status isDeleted", item.isDeleted, false);
}
ibas.logger.log(ibas.emMessageLevel.INFO, "test: {0} {1}", "order", order.getProperties(false).size);
ibas.logger.log(ibas.emMessageLevel.INFO, "test: {0}", order.toString());
console.log(JSON.stringify(new DataConverter4Test().convert(order, "saveSalesOrder")));
// 克隆对象
let cOrder: SalesOrder = order.clone();
console.log(JSON.stringify(new DataConverter4Test().convert(cOrder, "saveSalesOrder")));
ibas.assert.equals("clone bo instance is not change.", order === cOrder, false);
// 测试查询
let criteria: ibas.ICriteria = new ibas.Criteria();
ibas.logger.log(ibas.emMessageLevel.DEBUG, "test: type of {0}", typeof (criteria));
criteria.result = 100;
let condition: ibas.ICondition = criteria.conditions.create();
ibas.logger.log(ibas.emMessageLevel.DEBUG, "test: type of {0}", typeof (condition));
condition.alias = "docEntry";
condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
condition.value = "1";
condition = criteria.conditions.create();
condition.alias = "docEntry";
condition.operation = ibas.emConditionOperation.LESS_THAN;
condition.value = "100000";
let sort: ibas.ISort = criteria.sorts.create();
sort.alias = "docEntry";
sort.sortType = ibas.emSortType.DESCENDING;
console.log(criteria.toString());
// 克隆对象
let cCriteria: ibas.ICriteria = criteria.clone();
console.log(cCriteria.toString());
ibas.assert.equals("clone bo instance is not change.", criteria === cCriteria, false);
condition = cCriteria.conditions.create();
console.log(condition.toString());
// 远程调用业务仓库
let boRepository: BORepositoryTest = new BORepositoryTest();
boRepository.token = "hahaha";
// 测试在线服务仓库
boRepository.offline = false;
boRepository.address = "http://localhost:8080/demo/services/jersey/json/";
// 通过变量调用
let fetcher: ibas.IFetchCaller<SalesOrder> = {
    /** 查询条件 */
    criteria: criteria,
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: ibas.IOperationResult<SalesOrder>): void {
        ibas.logger.log(ibas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
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
    onCompleted(opRslt: ibas.IOperationResult<SalesOrder>): void {
        ibas.logger.log(ibas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
        let newOrder: SalesOrder = opRslt.resultObjects.firstOrDefault();
        if (newOrder) {
            ibas.assert.equals("order document status wrong.", order.documentStatus, newOrder.documentStatus);
        }
    }
});
// 测试离线仓库
boRepository.offline = true;
boRepository.address = ibas.urls.rootUrl() + "/../../repository";
boRepository.fetchSalesOrder({
    criteria: criteria,
    onCompleted(opRslt: ibas.IOperationResult<SalesOrder>): void {
        ibas.logger.log(ibas.strings.format("op code {0} and objects size {1}.", opRslt.resultCode, opRslt.resultObjects.length));
    }
});

// 测试值改变
order = ibas.boFactory.create<SalesOrder>(SalesOrder.name);
order.documentStatus = ibas.emDocumentStatus.RELEASED;
item = order.salesOrderItems.create();
// afterAdd赋初值
ibas.assert.equals("item.lineStatus is default value.",
    item.lineStatus === ibas.emDocumentStatus.RELEASED, true);
// 父项更改修改子项
order.documentStatus = ibas.emDocumentStatus.CLOSED;
ibas.assert.equals("item.lineStatus is not changed to CLOSED.",
    item.lineStatus === ibas.emDocumentStatus.CLOSED, true);
// 子项更改修改父项
item.lineTotal = 100;
ibas.assert.equals("order.documentTotal does not equal the total number of item.lineTotal.",
    order.documentTotal === 100, true);
// 移除子项时移除子项监听事件
let listenerCount: number = (<any>item)._listeners.length;
order.salesOrderItems.remove(item);
ibas.assert.equals("item is not remove the listener after it removed from the collection",
    listenerCount - (<any>item)._listeners.length === 1, true);
