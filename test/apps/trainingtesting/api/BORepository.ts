/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../../ibas/index.d.ts" />
/// <reference path="./bo/index.ts" />

namespace trainingtesting {
    export namespace bo {
        /** 业务仓库 */
        export interface IBORepositoryTrainingTesting extends ibas.IBORepositoryApplication {

            /**
            * 上传文件
            * @param caller 调用者
            */
            upload(caller: ibas.UploadFileCaller<ibas.FileData>);
            /**
            * 下载文件
            * @param caller 调用者
            */
            download(caller: ibas.DownloadFileCaller<Blob>);
            /**
            * 查询 物料主数据
            * @param fetcher 查询者
            */
            fetchMaterial(fetcher: ibas.FetchCaller<bo.IMaterial>);
            /**
            * 保存 物料主数据
            * @param saver 保存者
            */
            saveMaterial(saver: ibas.SaveCaller<bo.IMaterial>);

            /**
            * 查询 客户主数据
            * @param fetcher 查询者
            */
            fetchCustomer(fetcher: ibas.FetchCaller<bo.ICustomer>);
            /**
            * 保存 客户主数据
            * @param saver 保存者
            */
            saveCustomer(saver: ibas.SaveCaller<bo.ICustomer>);

            /**
            * 查询 销售订单
            * @param fetcher 查询者
            */
            fetchSalesOrder(fetcher: ibas.FetchCaller<bo.ISalesOrder>);
            /**
            * 保存 销售订单
            * @param saver 保存者
            */
            saveSalesOrder(saver: ibas.SaveCaller<bo.ISalesOrder>);


        }
    }
}
