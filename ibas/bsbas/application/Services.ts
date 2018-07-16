/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../../bobas/common/Configuration.ts" />
/// <reference path="../../bobas/common/Logger.ts" />
/// <reference path="../../bobas/common/Utils.ts" />
/// <reference path="../common/Enum.ts" />
/// <reference path="../browser/Events.ts" />
/// <reference path="./Architecture.ts" />

namespace ibas {
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
        /** 服务代理 */
        proxy: IServiceProxy<IServiceContract>;
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
    export interface IBOServiceContract extends IDataServiceContract<IBusinessObject | IBusinessObject[]> {
        /** 数据转换者 */
        converter?: IDataConverter;
    }
    /** 数据表格服务契约 */
    export interface IDataTableServiceContract extends IDataServiceContract<DataTable> {
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
        /** 选择类型 */
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
    export interface IBOChooseServiceCaller<D>
        extends IServiceWithResultCaller<IBOChooseServiceContract, IList<D>>, IBOChooseServiceContract {
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
    /** 配置项目-默认服务图片 */
    export const CONFIG_ITEM_DEFALUT_SERVICE_ICON: string = "defalutServiceIcon";
    /** 地址hash值标记-服务 */
    export const URL_HASH_SIGN_SERVICES: string = "#/services/";

    /** 服务映射 */
    export abstract class ServiceMapping implements IServiceMapping {
        constructor() {
            this.icon = config.get(CONFIG_ITEM_DEFALUT_SERVICE_ICON);
        }
        /** 视图显示者 */
        viewShower: IViewShower;
        /** 视图导航 */
        navigation: IViewNavigation;
        /** 唯一标识 */
        id: string;
        /** 名称 */
        name: string;
        /** 类别 */
        category: string;
        /** 描述 */
        description: string;
        /** 图标 */
        icon: string;
        /** 服务契约代理类型（非实例） */
        proxy: any;
        /** 创建服务实例 */
        abstract create(): IService<IServiceCaller<IServiceContract>>;
    }
    /** 业务对象选择服务映射 */
    export abstract class BOChooseServiceMapping extends ServiceMapping {
        constructor() {
            super();
            this.proxy = BOChooseServiceProxy;
        }
        /** 重写此属性到boCode */
        get category(): string {
            return this.boCode;
        }
        set category(value: string) {
            this.boCode = value;
        }
        /** 业务对象编码 */
        boCode: string;
    }
    /** 业务对象连接服务映射 */
    export abstract class BOLinkServiceMapping extends ServiceMapping {
        constructor() {
            super();
            this.proxy = BOLinkServiceProxy;
        }
        /** 重写此属性到boCode */
        get category(): string {
            return this.boCode;
        }
        set category(value: string) {
            this.boCode = value;
        }
        /** 业务对象编码 */
        boCode: string;
    }
    /** 应用服务映射 */
    export abstract class ApplicationServiceMapping extends ServiceMapping {
        constructor() {
            super();
        }
        /** 重写此属性到id */
        get category(): string {
            return this.id;
        }
        set category(value: string) {
            this.id = value;
        }
    }
    /** 服务代理 */
    export abstract class ServiceProxy<C extends IServiceContract> implements IServiceProxy<C> {
        constructor(contract: C);
        constructor() {
            if (objects.isNull(arguments[0])) {
                throw new Error(i18n.prop("sys_invalid_parameter", "contract"));
            }
            this.contract = arguments[0];
        }
        /** 服务的契约 */
        contract: C;
    }
    /** 数据服务代理 */
    export class DataServiceProxy<T> extends ServiceProxy<IDataServiceContract<T>> {
    }
    /** 业务对象服务代理 */
    export class BOServiceProxy extends DataServiceProxy<IBOServiceContract> {
        constructor(contract: IBOServiceContract);
        constructor() {
            super(arguments[0]);
        }
    }
    /** 数据表格服务代理 */
    export class DataTableServiceProxy extends DataServiceProxy<IDataTableServiceContract> {
        constructor(contract: IDataTableServiceContract);
        constructor() {
            super(arguments[0]);
        }
    }
    /** 业务对象连接服务代理 */
    export class BOLinkServiceProxy extends ServiceProxy<IBOLinkServiceContract> {
        constructor(contract: IBOLinkServiceContract);
        constructor() {
            super(arguments[0]);
        }
    }
    /** 业务对象选择服务代理 */
    export class BOChooseServiceProxy extends ServiceProxy<IBOChooseServiceContract> {
        constructor(contract: IBOChooseServiceContract);
        constructor() {
            super(arguments[0]);
        }
    }
    /** 查询编辑服务代理 */
    export class CriteriaEditorServiceProxy extends ServiceProxy<ICriteriaEditorServiceContract> {
        constructor(contract: ICriteriaEditorServiceContract);
        constructor() {
            super(arguments[0]);
        }
    }
    /** 服务管理员 */
    export class ServicesManager {
        constructor() {
            let that: this = this;
            browserEventManager.registerListener({
                eventType: emBrowserEventType.HASHCHANGE,
                onEventFired(event: HashChangeEvent): void {
                    try {
                        if (event.newURL.indexOf(URL_HASH_SIGN_SERVICES) < 0) {
                            return;
                        }
                        let url: string = event.newURL.substring(
                            event.newURL.indexOf(URL_HASH_SIGN_SERVICES) + URL_HASH_SIGN_SERVICES.length);
                        let serviceId: string = url.substring(0, url.indexOf("/"));
                        let mapping: IServiceMapping = that.getServiceMapping(serviceId);
                        if (!objects.isNull(mapping)) {
                            let service: IService<IServiceCaller<IServiceContract>> = mapping.create();
                            if (!objects.isNull(service)) {
                                let method: string = url.substring(url.indexOf("/") + 1);
                                logger.log(emMessageLevel.DEBUG,
                                    "services: call service [{0}-{1}], hash value [{2}] ", mapping.description, mapping.id, method);
                                // 运行服务
                                if (objects.instanceOf(service, Application)) {
                                    (<Application<IView>>service).viewShower = mapping.viewShower;
                                    (<Application<IView>>service).navigation = mapping.navigation;
                                }
                                service.run({
                                    category: method
                                });
                            }
                        }
                    } catch (error) {
                        logger.log(error);
                    }
                }
            });
        }
        /** 服务映射 */
        private mappings: Map<string, IServiceMapping>;
        /** 注册服务映射 */
        register(mapping: IServiceMapping): void {
            if (objects.isNull(mapping)) {
                return;
            }
            if (objects.isNull(this.mappings)) {
                this.mappings = new Map();
            }
            this.mappings.set(mapping.id, mapping);
            // 如当前注册的服务为Hash指向的服务,激活
            let currentHashValue: string = window.location.hash;
            if (currentHashValue.startsWith(URL_HASH_SIGN_SERVICES)) {
                let url: string = currentHashValue.substring(URL_HASH_SIGN_SERVICES.length);
                let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                let id: string = url.substring(0, index);
                if (strings.equals(mapping.id, id)) {
                    urls.changeHash(currentHashValue);
                }
            }
        }
        /** 获取服务映射 */
        getServiceMapping(id: string): IServiceMapping {
            if (objects.isNull(this.mappings)) {
                return null;
            }
            if (this.mappings.has(id)) {
                return this.mappings.get(id);
            }
            return null;
        }
        /** 获取服务 */
        getServices(caller: IServiceCaller<IServiceContract>): IServiceAgent[] {
            let services: Array<IServiceAgent> = new Array<IServiceAgent>();
            if (!objects.isNull(this.mappings)) {
                for (let mapping of this.mappings.values()) {
                    if (!objects.instanceOf(caller.proxy, mapping.proxy)) {
                        continue;
                    }
                    // 创建服务
                    services.push({
                        id: mapping.id,
                        name: mapping.name,
                        category: mapping.category,
                        description: mapping.description ? mapping.description : mapping.name,
                        icon: mapping.icon,
                        caller: caller,
                        run(): void {
                            // 创建服务
                            let service: IService<IServiceContract> = mapping.create();
                            if (!objects.isNull(service)) {
                                // 运行服务
                                if (objects.instanceOf(service, Application)) {
                                    (<Application<IView>>service).viewShower = mapping.viewShower;
                                    (<Application<IView>>service).navigation = mapping.navigation;
                                }
                                service.run(caller);
                            }
                        }
                    });
                }
            }
            return services;
        }
        /**
         * 运行服务
         * @param caller 调用者
         * @returns 是否成功运行服务
         */
        private runService(caller: IServiceCaller<IServiceContract>): boolean {
            if (objects.isNull(caller)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller"));
            }
            if (objects.isNull(caller.proxy) || !objects.instanceOf(caller.proxy, ServiceProxy)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller.proxy"));
            }
            for (let service of this.getServices(caller)) {
                if (!strings.isEmpty(caller.category)
                    && !(caller.category === service.category
                        || config.applyVariables(caller.category) === config.applyVariables(service.category))) {
                    // 类别不符
                    continue;
                }
                // 运行服务
                service.run();
                return true;
            }
            // 没有找到服务
            return false;
        }
        /** 运行选择服务 */
        runChooseService<D>(caller: IBOChooseServiceCaller<D>): void {
            if (objects.isNull(caller)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller"));
            }
            if (objects.isNull(caller.boCode)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller.boCode"));
            }
            if (objects.isNull(caller.proxy)) {
                // 设置代理
                caller.proxy = new BOChooseServiceProxy(caller);
            }
            // 设置服务类别码
            caller.category = caller.boCode;
            // 调用服务
            if (!this.runService(caller)) {
                // 服务未运行
                logger.log(emMessageLevel.WARN, "services: not found [{0}]'s choose service.", caller.boCode);
            }
        }
        /** 运行连接服务 */
        runLinkService(caller: IBOLinkServiceCaller): void {
            if (objects.isNull(caller)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller"));
            }
            if (objects.isNull(caller.boCode)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller.boCode"));
            }
            if (objects.isNull(caller.linkValue)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller.linkValue"));
            }
            if (objects.isNull(caller.proxy)) {
                // 设置代理
                caller.proxy = new BOLinkServiceProxy(caller);
            }
            // 设置服务类别码
            caller.category = caller.boCode;
            // 调用服务
            if (!this.runService(caller)) {
                // 服务未运行
                logger.log(emMessageLevel.WARN, "services: not found [{0}]'s choose service.", caller.boCode);
            }
        }
        /**
         * 运行应用服务
         * @param caller 调用者<In>(<输入类型>)
         */
        runApplicationService<In>(caller: IApplicationServiceCaller<In>): void;
        /**
         * 运行应用服务
         * @param caller 调用者<In,Out>(<输入类型,输出类型>)
         */
        runApplicationService<In, Out>(caller: IApplicationServiceWithResultCaller<In, Out>): void;
        /**
         * 运行应用服务
         * @param caller 调用者<In,Out>(<输入类型,输出类型>)
         */
        runApplicationService<In, Out>(): void {
            let caller: IApplicationServiceCaller<In> = arguments[0];
            if (objects.isNull(caller)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller"));
            }
            if (objects.isNull(caller.proxy) || !objects.instanceOf(caller.proxy, ServiceProxy)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "caller.proxy"));
            }
            if (!strings.isEmpty(caller.appId)) {
                // 设置服务类别码
                caller.category = caller.appId;
            }
            // 调用服务
            if (!this.runService(caller)) {
                // 服务未运行
                logger.log(emMessageLevel.WARN, "services: not found [{0}]'s application service.", objects.getName(objects.getType(caller.proxy)));
            }
        }
        /**
         * 显示可用服务
         * @param shower 显示服务者
         */
        showServices(shower: IServicesShower): void {
            if (objects.isNull(shower)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "shower"));
            }
            if (objects.isNull(shower.proxy)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "shower.proxy"));
            }
            if (!(shower.displayServices instanceof Function)) {
                throw new Error(i18n.prop("sys_not_provided_display_service_method"));
            }
            // 获取服务
            let services: Array<IServiceAgent> = new Array<IServiceAgent>();
            for (let service of servicesManager.getServices({
                proxy: shower.proxy
            })) {
                services.push(service);
            }
            if (services.length > 0) {
                // 服务排序
                services = services.sort((c, b): number => {
                    return c.name.localeCompare(b.name);
                });
                // 显示可用服务
                shower.displayServices(services);
            }
        }
    }
    /** 服务管理员实例 */
    export const servicesManager: ServicesManager = new ServicesManager();
}