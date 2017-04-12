/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { IBusinessObject } from "../../bobas/index";
import { IElement } from "../core/index";

/**
 * 应用服务
 */
export interface IApplicationService extends IElement {
    /** 图标 */
    icon: string;
    /** 运行服务 */
    run(): void;
}
/**
 * 显示服务者
 */
export interface IServicesShower {
    /** 显示服务 */
    displayServices(services: IApplicationService[]): void;
}
/** 服务的契约 */
export interface IServiceContract {

}
/** 业务对象服务的契约 */
export interface IDataServiceContract extends IServiceContract {
    /** 数据 */
    data: any;
}
/** 业务对象服务的契约 */
export interface IBOServiceContract extends IDataServiceContract {
    /** 业务对象 */
    data: IBusinessObject;
}
/** 业务对象列表服务的契约 */
export interface IBOListServiceContract extends IDataServiceContract {
    /** 业务对象 */
    data: IBusinessObject[];
}
/** 应用服务的契约 */
export interface IApplicationServiceContract extends IServiceContract {
    /** 应用标记 */
    AppId: string;
}
/** 服务代理 */
export interface IServiceProxy<C extends IServiceContract> {
    /** 服务的契约 */
    contract: C;
}
