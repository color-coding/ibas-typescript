/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { strings, objects, config, i18n, logger, emMessageLevel, enums, urls } from "../../bobas/index";
import { AbstractApplication as Application, IViewShower, IViewNavigation, IView } from "../core/index";
import { browserEventManager, emBrowserEventType } from "../utils/index";
import {
    IServiceContract, IServiceProxy, IService, IBOServiceContract,
    IDataServiceContract, IBOListServiceContract, IServiceAgent,
    IServiceMapping, IBOChooseServiceCaller, IServiceCaller,
    IBOLinkServiceContract, IBOChooseServiceContract,
    IBOLinkServiceCaller, IApplicationServiceCaller,
    IApplicationServiceWithResultCaller, ICriteriaEditorServiceContract,
} from "./Services.d";

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
/** 业务对象列表服务代理 */
export class BOListServiceProxy extends DataServiceProxy<IBOListServiceContract> {
    constructor(contract: IBOListServiceContract);
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
            if (!objects.isNull(caller.category)
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
            logger.log(emMessageLevel.WARN, "services: not found [{0}]'s application service.", objects.getName(caller.proxy));
        }
    }
}