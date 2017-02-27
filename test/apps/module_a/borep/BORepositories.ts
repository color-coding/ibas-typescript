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
     * @param listener 查询监听者
     */
    fetchSalesOrder(listener: ibas.FetchListener<bo.SalesOrder>): void {
        this.address = ibas.url.rootUrl("module_a/index");
        let method: string = "borep/bo/SalesOrders.json";
        let remoteListener: ibas.RemoteListener = {
            onCompleted(orders: any): void {
                if (!ibas.object.isNull(listener.onCompleted)) {
                    let opRslt = new ibas.OperationResult<bo.SalesOrder>();
                    for (let item of orders) {
                        opRslt.resultObjects.add(item);
                    }
                    listener.onCompleted.call(listener.onCompleted, opRslt);
                }
            }
        };
        this.callRemoteMethod(method, null, remoteListener);
    }

    /**
     * 保存 销售订单
     * @param bo 业务对象
     * @param callBack 回掉函数，参数为：IOperationResult<SalesOrder>
     */
    saveSalesOrder(listener: ibas.SaveListener<bo.SalesOrder>): void {
        let opRslt = new ibas.OperationResult<bo.SalesOrder>();
        opRslt.resultObjects.add(listener.beSaved);
        listener.onCompleted.call(listener.onCompleted, opRslt);
    }
}