/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../ibas/bobas/index";
import { DataConverter4Test, TestBOConverter } from "./DataConverters";
import { SalesOrder } from "./SalesOrder";
/**
 * 业务仓库应用
 */
export class BORepositoryTest extends bobas.BORepositoryApplication {

    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createConverter(): bobas.IDataConverter {
        if (this.offline) {
            // 离线模式，直接转换数据
            return {
                convert(data: any): string {
                    return data;
                },
                parsing(data: any): any {
                    return data;
                }
            };
        }
        return new DataConverter4Test();
    }

    /**
     * 查询 销售订单
     * @param caller 查询者
     */
    fetchSalesOrder(caller: bobas.FetchCaller<SalesOrder>): void {
        super.fetch("SalesOrder", caller);
    }

    /**
     * 保存 销售订单
     * @param caller 保存者
     */
    saveSalesOrder(caller: bobas.SaveCaller<SalesOrder>): void {
        super.save("SalesOrder", caller);
    }
}


