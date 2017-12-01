/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";

/** 服务应用-演示 */
export class DemoService extends ibas.Application<IDemoServiceView> implements ibas.IService<ibas.IBOServiceContract> {

    /** 应用标识 */
    static APPLICATION_ID: string = "6f00f7d9-3dbc-4eff-98ad-fe67ca0cca34";
    /** 应用名称 */
    static APPLICATION_NAME: string = "trainingtestingothers_app_service";

    constructor() {
        super();
        this.id = DemoService.APPLICATION_ID;
        this.name = DemoService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        super.run.apply(args);
    }
}
/** 服务-演示 */
export interface IDemoServiceView extends ibas.IView {
}
/** 服务应用-演示 */
export class DemoServiceMapping extends ibas.ServiceMapping {

    constructor() {
        super();
        this.id = DemoService.APPLICATION_ID;
        this.name = DemoService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.proxy = ibas.BOServiceProxy;
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new DemoService();
    }
}