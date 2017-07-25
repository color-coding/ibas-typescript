/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { IBusinessObject, ICriteria, KeyValue, List, ICondition, IDataConverter } from "../../bobas/index";
import { IElement, IViewShower, IViewNavigation } from "../core/index";
import { emChooseType} from "../data/index";

/**
 * 应用服务
 */
export interface IService<C extends IServiceContract> {
    /** 运行服务 */
    run(contract: C): void;
}
/**
 * 业务对象选择服务
 */
export interface IBOChooseService extends IService<IBOChooseServiceContract> {
}
/**
 * 业务对象选择服务
 */
export interface IBOLinkService extends IService<IBOLinkServiceContract> {
}
/**
 * 应用服务代理
 */
export interface IServiceAgent extends IElement {
    /** 图标 */
    icon: string;
    /** 运行服务 */
    run(): void;
}
/**
 * 应用服务映射
 */
export interface IServiceMapping extends IElement {
    /** 图标 */
    icon: string;
    /** 服务代理 */
    proxy: any;
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 视图导航 */
    navigation: IViewNavigation;
    /** 创建服务并运行 */
    create(): IService<IServiceContract>;
}
/**
 * 显示服务者
 */
export interface IServicesShower {
    /** 显示服务 */
    displayServices(services: IServiceAgent[]): void;
}
/** 服务的契约 */
export interface IServiceContract {
    /** 完成 */
    onCompleted?: Function;
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
    /** 数据转换者 */
    converter?: IDataConverter;
}
/** 业务对象列表服务的契约 */
export interface IBOListServiceContract extends IDataServiceContract {
    /** 业务对象 */
    data: IBusinessObject[];
    /** 数据转换者 */
    converter?: IDataConverter;
}
/** 业务对象连接服务的契约 */
export interface IBOLinkServiceContract extends IServiceContract {
    /** 业务对象编码 */
    boCode: string;
    /** 连接的值 */
    linkValue: string | ICriteria | ICondition[];
}
/** 业务对象选择服务的契约 */
export interface IBOChooseServiceContract extends IServiceContract {
    /** 业务对象编码 */
    boCode: string;
    //选择类型
    chooseType?: emChooseType;
    /** 条件 */
    criteria?: ICriteria | ICondition[];
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
/** 服务调用者 */
export interface IServiceCaller {
    /** 完成事件 */
    onCompleted?: Function;
}
/** 业务对象选择服务调用者 */
export interface IBOChooseServiceCaller<D> extends IServiceCaller, IBOChooseServiceContract {
    /** 调用者 */
    caller?: any
    /** 服务调用完成 */
    onCompleted(selecteds: List<D>): void;
}
/** 业务对象连接服务调用者 */
export interface IBOLinkServiceCaller extends IServiceCaller, IBOLinkServiceContract {
    /** 调用者 */
    caller?: any
}