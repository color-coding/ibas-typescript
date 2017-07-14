/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryTrainingTesting, BO_REPOSITORY_TRAININGTESTING} from "../api/index";
import { DataConverter4tt } from "./DataConverters";

/** 培训&测试 业务仓库 */
export class BORepositoryTrainingTesting extends ibas.BORepositoryApplication implements IBORepositoryTrainingTesting {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4tt();
    }

    /**
     * 查询 物料主数据
     * @param fetcher 查询者
     */
    fetchMaterial(fetcher: ibas.FetchCaller<bo.Material>): void {
        super.fetch(bo.Material.name, fetcher);
    }
    /**
     * 保存 物料主数据
     * @param saver 保存者
     */
    saveMaterial(saver: ibas.SaveCaller<bo.Material>): void {
        super.save(bo.Material.name, saver);
    }

    /**
     * 查询 客户主数据
     * @param fetcher 查询者
     */
    fetchCustomer(fetcher: ibas.FetchCaller<bo.Customer>): void {
        super.fetch(bo.Customer.name, fetcher);
    }
    /**
     * 保存 客户主数据
     * @param saver 保存者
     */
    saveCustomer(saver: ibas.SaveCaller<bo.Customer>): void {
        super.save(bo.Customer.name, saver);
    }

    /**
     * 查询 销售订单
     * @param fetcher 查询者
     */
    fetchSalesOrder(fetcher: ibas.FetchCaller<bo.SalesOrder>): void {
        super.fetch(bo.SalesOrder.name, fetcher);
    }
    /**
     * 保存 销售订单
     * @param saver 保存者
     */
    saveSalesOrder(saver: ibas.SaveCaller<bo.SalesOrder>): void {
        super.save(bo.SalesOrder.name, saver);
    }

    /**
     * 查询 仓库
     * @param fetcher 查询者
     */
    fetchWarehouse(fetcher: ibas.FetchCaller<bo.Warehouse>): void {
        super.fetch(bo.Warehouse.name, fetcher);
    }
    /**
     * 保存 仓库
     * @param saver 保存者
     */
    saveWarehouse(saver: ibas.SaveCaller<bo.Warehouse>): void {
        super.save(bo.Warehouse.name, saver);
    }

}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_TRAININGTESTING, BORepositoryTrainingTesting);
