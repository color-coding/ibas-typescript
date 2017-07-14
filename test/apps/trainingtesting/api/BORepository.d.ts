/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    FetchCaller,
    SaveCaller
} from "ibas/index";
import * as bo from "./bo/index"

/** TrainingTesting 业务仓库 */
export interface IBORepositoryTrainingTesting {

    /**
     * 查询 物料主数据
     * @param fetcher 查询者
     */
    fetchMaterial(fetcher: FetchCaller<bo.IMaterial>);
    /**
     * 保存 物料主数据
     * @param saver 保存者
     */
    saveMaterial(saver: SaveCaller<bo.IMaterial>);

    /**
     * 查询 客户主数据
     * @param fetcher 查询者
     */
    fetchCustomer(fetcher: FetchCaller<bo.ICustomer>);
    /**
     * 保存 客户主数据
     * @param saver 保存者
     */
    saveCustomer(saver: SaveCaller<bo.ICustomer>);

    /**
     * 查询 销售订单
     * @param fetcher 查询者
     */
    fetchSalesOrder(fetcher: FetchCaller<bo.ISalesOrder>);
    /**
     * 保存 销售订单
     * @param saver 保存者
     */
    saveSalesOrder(saver: SaveCaller<bo.ISalesOrder>);
    /**
     * 查询 仓库
     * @param fetcher 查询者
     */
    fetchWarehouse(fetcher: FetchCaller<bo.IWarehouse>);
    /**
     * 保存 仓库
     * @param saver 保存者
     */
    saveWarehouse(saver: SaveCaller<bo.IWarehouse>);    


}
