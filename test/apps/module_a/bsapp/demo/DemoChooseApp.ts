/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../../ibas/index";
import { BORepositoryDemo } from "../../borep/BORepositories";
import * as bo from "../../borep/bo/index";
import { DemoEditApp } from "./DemoEditApp";

/** 应用-演示 */
export class DemoChooseApp extends ibas.BOChooseApplication<IDemoChooseView, bo.SalesOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "7cfa552b-adc4-4cc9-8dac-1533c7dc0013";
    /** 应用名称 */
    static APPLICATION_NAME: string = "module_a_app_demo_choose";

    constructor() {
        super();
        this.id = DemoChooseApp.APPLICATION_ID;
        this.name = DemoChooseApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria): void {
        this.busy(true);
        let that = this;
        let boRepository = new BORepositoryDemo();
        let fetcher: ibas.FetchCaller<bo.SalesOrder> = {
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
                    that.view.showData(opRslt.resultObjects);
                    that.busy(false);
                } catch (error) {
                    that.messages(error);
                }
            }
        }
        boRepository.fetchSalesOrder(fetcher);
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {
        // 关闭自身
        this.destroy();
        // 调用编辑应用
        let app = new DemoEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
    /** 选择数据 */
    protected chooseData(data: bo.SalesOrder): void {

    }
}
/** 视图-演示 */
export interface IDemoChooseView extends ibas.IBOChooseView {
    /** 显示数据 */
    showData(datas: bo.SalesOrder[]): void;
}