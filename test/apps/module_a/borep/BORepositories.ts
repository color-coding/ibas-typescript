/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";
import { DataConverter4Demo } from "./DataConverters";
import * as bo from "./bo/index";

/**
 * 业务仓库-壳-远程
 */
export class BORepositoryDemo extends ibas.BORepositoryApplication {

    private converter: DataConverter4Demo;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): ibas.IDataConverter {
        if (ibas.object.isNull(this.converter)) {
            this.converter = new DataConverter4Demo();
        }
        return this.converter;
    }

    /**
     * 查询 销售订单
     * @param criteria 查询
     * @param callBack 回掉函数，参数为：IOperationResult<SalesOrder>
     */
    fetchSalesOrder(criteria: ibas.ICriteria, callBack: Function) {
        this.address = ibas.url.rootUrl("module_a/index");
        let method: string = "borep/bo/SalesOrders.json";
        let listener: ibas.RemoteListener = {
            method: method,
            onCompleted(orders: any): void {
                if (!ibas.object.isNull(callBack)) {
                    let opRslt = new ibas.OperationResult<bo.SalesOrder>();
                    for (let item of orders) {
                        opRslt.resultObjects.add(item);
                    }
                    callBack.call(callBack, opRslt);
                }
            }
        };
        this.callRemoteMethod(method, null, listener);
    }

    /**
     * 保存 销售订单
     * @param bo 业务对象
     * @param callBack 回掉函数，参数为：IOperationResult<SalesOrder>
     */
    saveSalesOrder(bo: bo.SalesOrder, callBack: Function) {
        let opRslt = new ibas.OperationResult<bo.SalesOrder>();
        opRslt.resultObjects.add(bo);
        callBack.call(callBack, opRslt);
    }
}