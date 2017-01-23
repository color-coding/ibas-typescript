/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from '../../../src/bobas/bobas';
import { DataConverter4Test } from './DataConverters';
import { SalesOrder } from './SalesOrder';
/**
 * 业务仓库应用
 */
export class BORepositoryTest extends bobas.BORepositoryApplication {

    private converter: DataConverter4Test;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): bobas.IDataConverter {
        if (bobas.object.isNull(this.converter)) {
            this.converter = new DataConverter4Test();
        }
        return this.converter;
    }

    conect() {
        let listener: bobas.RemoteListener = {
            onCompleted(opRslt: bobas.IOperationResult<any>) {
                console.debug(opRslt.resultCode + " - " + opRslt.message);
            }
        };
        super.callRemoteMethod("hello", null, listener);
    }

    protected createAjaxSettings(method: string, data: any): JQueryAjaxSettings {
        // 重写ajax设置
        if (method === "hello") {
            // 特殊方法的处理
            let ajxSetting = super.createAjaxSettings(method, data);
            ajxSetting.url = "http://localhost:8080/demo/services/jersey/hello";
            ajxSetting.type = "GET";
            ajxSetting.dataType = undefined;
            return ajxSetting;
        } else
            if (method === "saveSalesOrder" && this.address.indexOf("/json") < 0) {
                // 特殊方法的处理，调用demo的保存方法时，返回值是OK
                let ajxSetting = super.createAjaxSettings(method, data);
                ajxSetting.type = "POST";
                ajxSetting.contentType = "application/json; charset=utf-8";// 发送值类型
                ajxSetting.dataType = "text";// 返回值类型
                // ajxSetting.contentType = undefined;
                // ajxSetting.dataType = undefined;
                return ajxSetting;
            }
        return super.createAjaxSettings(method, data);
    }

    /**
     * 查询 销售订单
     * @param criteria 查询
     * @param callBack 回掉函数，参数为：bobas.IOperationResult<SalesOrder>
     */
    fetchSalesOrder(criteria: bobas.ICriteria, callBack: Function) {
        super.fetch("SalesOrder", criteria, callBack);
    }
    
    /**
     * 保存 销售订单
     * @param bo 业务对象
     * @param callBack 回掉函数，参数为：bobas.IOperationResult<SalesOrder>
     */
    saveSalesOrder(bo: SalesOrder, callBack: Function) {
        super.save("SalesOrder", bo, callBack);
    }
}


