/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { IBusinessObject, ICriteria, KeyValue, List, ICondition, IDataConverter, KeyText } from "../../bobas/index";
import { IElement, IViewShower, IViewNavigation } from "../core/index";
import { emChooseType } from "../data/index";

/**
 * 应用服务
 */
export interface IService<C extends IServiceCaller<IServiceContract>> {
    /** 运行服务 */
    run(caller: C): void;
}
/**
 * 业务对象选择服务
 */
export interface IBOChooseService<D> extends IService<IBOChooseServiceCaller<D>> {
}
/**
 * 业务对象选择服务
 */
export interface IBOLinkService extends IService<IBOLinkServiceCaller> {
}
/**
 * 应用服务映射
 */
export interface IServiceMapping extends IElement {
    /** 图标 */
    icon: string;
    /** 服务代理的类型 */
    proxy: any;
    /** 视图显示者 */
    viewShower: IViewShower;
    /** 视图导航 */
    navigation: IViewNavigation;
    /** 创建服务实例 */
    create(): IService<IServiceCaller<IServiceContract>>;
}
/**
 * 显示服务者
 */
export interface IServicesShower {
    /** 显示服务 */
    displayServices(services: IServiceAgent[]): void;
}
/**
 * 应用服务代理
 */
export interface IServiceAgent extends IElement {
    /** 图标 */
    icon: string;
    /** 服务调用者 */
    caller: IServiceCaller<IServiceContract>;
    /** 运行服务 */
    run(): void;
}
/** 服务的契约 */
export interface IServiceContract {
}
/** 业务对象服务的契约 */
export interface IDataServiceContract<T> extends IServiceContract {
    /** 数据 */
    data: T;
}
/** 业务对象服务的契约 */
export interface IBOServiceContract extends IDataServiceContract<IBusinessObject> {
    /** 数据转换者 */
    converter?: IDataConverter;
}
/** 业务对象列表服务的契约 */
export interface IBOListServiceContract extends IDataServiceContract<IBusinessObject[]> {
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
    /** 选择服务标题 */
    title?: string;
}
/** 查询编辑服务契约 */
export interface ICriteriaEditorServiceContract extends IServiceContract {
    /** 查询或查询条件 */
    criteria: ICriteria | ICondition[];
    /** 目标对象（业务对象编码或对象类型） */
    target?: string | object;
    /** 查询条件字段 */
    aliases?: KeyText[];
}
/** 服务代理 */
export interface IServiceProxy<C extends IServiceContract> {
    /** 服务的契约 */
    contract: C;
}
/** 服务调用者 */
export interface IServiceCaller<C extends IServiceContract> {
    /** 服务契约代理 */
    proxy?: IServiceProxy<C>;
    /** 服务触发者 */
    trigger?: any;
    /** 服务类别码 */
    category?: string;
}
/** 服务调用者 */
export interface IServiceWithResultCaller<C extends IServiceContract, Out> extends IServiceCaller<C> {
    /** 服务调用完成 - 结果 */
    onCompleted(result: Out): void;
}
/** 业务对象选择服务调用者 */
export interface IBOChooseServiceCaller<D> extends IServiceWithResultCaller<IBOChooseServiceContract, List<D>>, IBOChooseServiceContract {
    /** 服务契约代理 */
    proxy?: IServiceProxy<IBOChooseServiceContract>;
}
/** 业务对象连接服务调用者 */
export interface IBOLinkServiceCaller extends IServiceCaller<IBOLinkServiceContract>, IBOLinkServiceContract {
    /** 服务契约代理 */
    proxy?: IServiceProxy<IBOLinkServiceContract>;
}
/** 应用服务调用者 */
export interface IApplicationServiceCaller<In extends IServiceContract> extends IServiceCaller<In> {
    /** 应用标记 */
    appId?: string;
    /** 服务契约代理 */
    proxy: IServiceProxy<In>;
}
/** 带结果的应用服务调用者 */
export interface IApplicationServiceWithResultCaller<In extends IServiceContract, Out> extends IServiceWithResultCaller<In, Out> {
    /** 应用标记 */
    appId?: string;
    /** 服务契约代理 */
    proxy: IServiceProxy<In>;
}