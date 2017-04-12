/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { object, config } from "../../bobas/index";
import { AbstractApplication as Application, IViewShower, IViewNavigation, IView } from "../core/index";
import {
    IServiceContract, IServiceProxy, IService,
    IBOServiceContract, IApplicationServiceContract,
    IDataServiceContract, IBOListServiceContract,
    IServiceMapping, IServiceAgent
} from "./Services.d";


/** 服务映射 */
export abstract class ServiceMapping implements IServiceMapping {
    /** 配置项目-默认服务图片 */
    static CONFIG_ITEM_DEFALUT_SERVICE_ICON = "defalutServiceIcon";
    constructor() {
        this.icon = config.get(ServiceMapping.CONFIG_ITEM_DEFALUT_SERVICE_ICON);
    }
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
    /** 服务代理 */
    proxy: any;
    /** 创建服务并运行 */
    abstract create(): IService<IServiceContract>;
}
/** 服务代理 */
export class ServiceProxy<C extends IServiceContract> implements IServiceProxy<C> {
    constructor(contract: C) {
        this.contract = contract;
    }
    /** 服务的契约 */
    contract: C;
    /** 视图显示者 */
    viewShower?: IViewShower;
    /** 视图导航 */
    navigation?: IViewNavigation;
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
/** 服务管理员 */
export class ServicesManager {
    /** 服务映射 */
    private mappings: Map<string, IServiceMapping>;
    /** 注册服务映射 */
    register(mapping: IServiceMapping): void {
        if (object.isNull(mapping)) {
            return;
        }
        if (object.isNull(this.mappings)) {
            this.mappings = new Map();
        }
        this.mappings.set(mapping.id, mapping);
    }
    /** 获取服务映射 */
    getServiceMapping(id: string): IServiceMapping {
        if (object.isNull(this.mappings)) {
            return null;
        }
        if (this.mappings.has(id)) {
            return this.mappings.get(id);
        }
        return null;
    }
    /** 获取服务代理 */
    getServiceProxy(id: string): IServiceProxy<IServiceContract> {
        let mappping = this.getServiceMapping(id);
        if (object.isNull(mappping)) {
            return null;
        }
        return mappping.proxy();
    }
    /** 获取服务 */
    getServices(proxy: IServiceProxy<IServiceContract>): IServiceAgent[] {
        let services: Array<IServiceAgent> = new Array<IServiceAgent>();
        if (!object.isNull(this.mappings)) {
            for (let mapping of this.mappings.values()) {
                if (!object.instanceOf(proxy, mapping.proxy)) {
                    continue;
                }
                // 创建服务
                services.push({
                    id: mapping.id,
                    name: mapping.name,
                    category: mapping.category,
                    description: mapping.description,
                    icon: mapping.icon,
                    run(): void {
                        // 创建服务
                        let service: IService<IServiceContract> = mapping.create();
                        if (!object.isNull(service)) {
                            // 运行服务
                            if (object.instanceOf(service, Application)) {
                                (<Application<IView>>service).viewShower = proxy.viewShower;
                                (<Application<IView>>service).navigation = proxy.navigation;
                            }
                            service.run(proxy.contract);
                        }
                    }
                });
            }
        }
        return services;
    }

}