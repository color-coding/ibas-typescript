/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import * as  bo from "../../borep/bo/index";
import { DemoEditApp } from "./DemoEditApp";

/** 查看应用-演示 */
export class DemoViewApp extends ibas.BOViewService<IDemoViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "a16e23d8-5783-428a-98e4-4a622282f366";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_view";

    constructor() {
        super();
        this.id = DemoViewApp.APPLICATION_ID;
        this.name = DemoViewApp.APPLICATION_NAME;
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
        this.view.showSalesOrder(this.viewData);
        this.view.showSalesOrderItems(this.viewData.items);
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app = new DemoEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    protected viewData: bo.SalesOrder;
    run(...args: any[]): void {
        if (!ibas.object.isNull(args) && args.length === 1 && args[0] instanceof bo.SalesOrder) {
            this.viewData = args[0];
            this.show();
        } else {
            super.run(args);
        }
    }
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository = new BORepositoryDemo();
        boRepository.fetchSalesOrder({
            /** 查询条件 */
            criteria: criteria,
            /**
             * 调用完成
             * @param opRslt 结果
             */
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
    }
    /** 获取服务的代理 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [
            new ibas.BOServiceProxy({
                data: this.viewData
            })
        ];
    }
}
/** 视图-演示 */
export interface IDemoViewView extends ibas.IBOViewView {
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void;
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
}
/** 连接服务映射 */
export class DemoLinkServiceMapping extends ibas.BOLinkServiceMapping {

    constructor() {
        super();
        this.id = DemoViewApp.APPLICATION_ID;
        this.name = DemoViewApp.APPLICATION_NAME;
        this.boCode = bo.SalesOrder.name;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new DemoViewApp();
    }
}