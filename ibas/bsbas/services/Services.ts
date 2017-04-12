/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    IServiceContract, IServiceProxy,
    IBOServiceContract, IApplicationServiceContract,
    IDataServiceContract, IBOListServiceContract
} from "./Services.d";

/** 服务代理 */
export class ServiceProxy<C extends IServiceContract> implements IServiceProxy<C> {
    constructor(contract: C) {
        this.contract = contract;
    }
    /** 服务的契约 */
    contract: C;
}
/** 数据服务代理 */
export class DataServiceProxy extends ServiceProxy<IDataServiceContract> {

}
/** 业务对象服务代理 */
export class BOServiceProxy extends ServiceProxy<IBOServiceContract> {

}
/** 业务对象列表服务代理 */
export class BOListServiceProxy extends ServiceProxy<IBOListServiceContract> {

}
/** 应用服务代理 */
export class ApplicationServiceProxy extends ServiceProxy<IApplicationServiceContract> {

}