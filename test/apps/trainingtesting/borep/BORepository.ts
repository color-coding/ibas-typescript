/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace bo {
        /** 业务对象仓库 */
        export class BORepositoryTrainingTesting extends ibas.BORepositoryApplication implements IBORepositoryTrainingTesting {

            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.upload("upload", caller);
            }
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.download("download", caller);
            }
            /**
             * 查询 物料主数据
             * @param fetcher 查询者
             */
            fetchMaterial(fetcher: ibas.IFetchCaller<bo.Material>): void {
                super.fetch(bo.Material.name, fetcher);
            }
            /**
             * 保存 物料主数据
             * @param saver 保存者
             */
            saveMaterial(saver: ibas.ISaveCaller<bo.Material>): void {
                super.save(bo.Material.name, saver);
            }

            /**
             * 查询 客户主数据
             * @param fetcher 查询者
             */
            fetchCustomer(fetcher: ibas.IFetchCaller<bo.Customer>): void {
                super.fetch(bo.Customer.name, fetcher);
            }
            /**
             * 保存 客户主数据
             * @param saver 保存者
             */
            saveCustomer(saver: ibas.ISaveCaller<bo.Customer>): void {
                super.save(bo.Customer.name, saver);
            }

            /**
             * 查询 销售订单
             * @param fetcher 查询者
             */
            fetchSalesOrder(fetcher: ibas.IFetchCaller<bo.SalesOrder>): void {
                super.fetch(bo.SalesOrder.name, fetcher);
            }
            /**
             * 保存 销售订单
             * @param saver 保存者
             */
            saveSalesOrder(saver: ibas.ISaveCaller<bo.SalesOrder>): void {
                super.save(bo.SalesOrder.name, saver);
            }

        }
    }
}
