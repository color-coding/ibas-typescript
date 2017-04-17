/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
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
    protected createConverter(): ibas.IDataConverter {
        if (ibas.objects.isNull(this.converter)) {
            this.converter = new DataConverter4Demo();
        }
        return this.converter;
    }

    /**
     * 查询 销售订单
     * @param caller 查询者
     */
    fetchSalesOrder(caller: ibas.FetchCaller<bo.SalesOrder>): void {
        this.fetch("SalesOrder", caller);
    }

    /**
     * 保存 销售订单
     * @param caller 保存者
     */
    saveSalesOrder(caller: ibas.SaveCaller<bo.SalesOrder>): void {
        this.save("SalesOrder", caller);
    }
}