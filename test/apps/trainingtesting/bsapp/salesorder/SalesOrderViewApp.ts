/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryTrainingTesting } from "../../borep/BORepositories";
import { SalesOrderEditApp } from "./SalesOrderEditApp";

/** 查看应用-销售订单 */
export class SalesOrderViewApp extends ibas.BOViewService<ISalesOrderViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "3594ef7e-bd54-48e8-b6ad-cdc94189f2ce";
    /** 应用名称 */
    static APPLICATION_NAME: string = "trainingtesting_app_salesorder_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.SalesOrder.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = SalesOrderViewApp.APPLICATION_ID;
        this.name = SalesOrderViewApp.APPLICATION_NAME;
        this.boCode = SalesOrderViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: SalesOrderEditApp = new SalesOrderEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        if (!ibas.objects.isNull(args) && args.length === 1 && args[0] instanceof bo.SalesOrder) {
            this.viewData = args[0];
            this.show();
        } else {
            super.run(args);
        }
    }
    private viewData: bo.SalesOrder;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        try {
            let boRepository: BORepositoryTrainingTesting = new BORepositoryTrainingTesting();
            boRepository.fetchSalesOrder({
                criteria: criteria,
                onCompleted(opRslt: ibas.IOperationResult<bo.SalesOrder>): void {
                    try {
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        that.viewData = opRslt.resultObjects.firstOrDefault();
                        that.viewShowed();
                    } catch (error) {
                        that.messages(error);
                    }
                }
            });
            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
        } catch (error) {
            that.messages(error);
        }
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [
            new ibas.BOServiceProxy({
                data: this.viewData
            })
        ];
    }
}
/** 视图-销售订单 */
export interface ISalesOrderViewView extends ibas.IBOViewView {

}
/** 销售订单连接服务映射 */
export class SalesOrderLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = SalesOrderViewApp.APPLICATION_ID;
        this.name = SalesOrderViewApp.APPLICATION_NAME;
        this.boCode = SalesOrderViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new SalesOrderViewApp();
    }
}
