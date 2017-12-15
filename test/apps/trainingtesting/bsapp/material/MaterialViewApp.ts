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
import { MaterialEditApp } from "./MaterialEditApp";

/** 查看应用-物料主数据 */
export class MaterialViewApp extends ibas.BOViewService<IMaterialViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "92a5b7d4-e9f1-4001-86d2-c4f41ffd379e";
    /** 应用名称 */
    static APPLICATION_NAME: string = "trainingtesting_app_material_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.Material.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialViewApp.APPLICATION_ID;
        this.name = MaterialViewApp.APPLICATION_NAME;
        this.boCode = MaterialViewApp.BUSINESS_OBJECT_CODE;
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
        let app: MaterialEditApp = new MaterialEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    run(): void;
    run(data: bo.Material): void;
    /** 运行 */
    run(): void {
        if (!(arguments[0] instanceof bo.Material)) {
            this.viewData = arguments[0];
            this.show();
        } else {
            super.run.apply(this, arguments);
        }
    }
    private viewData: bo.Material;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository: BORepositoryTrainingTesting = new BORepositoryTrainingTesting();
        boRepository.fetchMaterial({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.Material>): void {
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
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-物料主数据 */
export interface IMaterialViewView extends ibas.IBOViewView {

}
/** 物料主数据连接服务映射 */
export class MaterialLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialViewApp.APPLICATION_ID;
        this.name = MaterialViewApp.APPLICATION_NAME;
        this.boCode = MaterialViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IBOLinkServiceCaller> {
        return new MaterialViewApp();
    }
}
