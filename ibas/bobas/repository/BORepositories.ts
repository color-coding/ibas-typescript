/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, strings, emMessageLevel, url
} from "../data/index";
import {
    FetchCaller, SaveCaller, IBORepository, IBORepositoryReadonly,
    BORepositoryAjax, BOFileRepositoryAjax, IDataConverter
} from "../core/index";
import { config } from "../configuration/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";

/** 模块仓库名称模板 */
export const MODULE_REPOSITORY_NAME_TEMPLATE: string = "BORepository{0}";
/** 配置项目-离线模式 */
export const CONFIG_ITEM_OFFLINE_MODE: string = "offline";
/** 配置项目-仓库离线模式 */
export const CONFIG_ITEM_REPOSITORY_OFFLINE_MODE: string = "offline|{0}";
/** 配置项目-远程仓库的默认地址模板 */
export const CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS: string = "repositoryAddress|{0}";
/** 配置项目-离线仓库的默认地址模板 */
export const CONFIG_ITEM_TEMPLATE_OFFLINE_REPOSITORY_ADDRESS: string = "repositoryAddress|{0}Offline";
/** 配置项目-用户口令 */
export const CONFIG_ITEM_USER_TOKEN: string = "userToken";
/** 配置项目-仓库用户口令 */
export const CONFIG_ITEM_REPOSITORY_USER_TOKEN: string = "userToken|{0}";
/**
 * 业务仓库应用
 */
export abstract class BORepositoryApplication {


    constructor() {
        // 子类名称
        let name: string = this.constructor.name;
        // 获取全局离线状态
        this.offline = config.get(CONFIG_ITEM_OFFLINE_MODE, false);
        // 获取此仓库离线状态
        this.offline = config.get(strings.format(CONFIG_ITEM_REPOSITORY_OFFLINE_MODE, name), this.offline);
        // 获取远程仓库的默认地址
        let address: string;
        if (this.offline) {
            // 离线状态，获取离线地址
            address = config.get(strings.format(CONFIG_ITEM_TEMPLATE_OFFLINE_REPOSITORY_ADDRESS, name));
        }
        // 没获取到离线地址，则在线地址
        if (objects.isNull(address) || address.length === 0) {
            // 在线状态
            address = config.get(strings.format(CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, name));
        }
        if (!objects.isNull(address)) {
            address = url.normalize(address);
            this.address = address;
            logger.log(emMessageLevel.DEBUG, "repository: [{0}] using address [{1}].", name, address);
        }
        // 用户口令，先获取仓库口令
        this.token = config.get(strings.format(CONFIG_ITEM_REPOSITORY_USER_TOKEN, name));
        // 没有仓库口令，则使用全局口令
        if (objects.isNull(this.token) || this.token.length === 0) {
            this.token = config.get(CONFIG_ITEM_USER_TOKEN);
        }
    }

    private _address: string;
    /** 远程地址 */
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }
    private _token: string;
    /** 访问口令 */
    get token(): string {
        return this._token;
    }
    set token(value: string) {
        this._token = value;
    }
    private _offline: boolean;
    /** 是否离线 */
    get offline(): boolean {
        return this._offline;
    }
    set offline(value: boolean) {
        this._offline = value;
    }
    /** 创建只读业务仓库 */
    protected createReadonlyRepository(): IBORepositoryReadonly {
        if (this.offline) {
            // 离线状态，使用文件仓库
            let boRepository: BOFileRepositoryAjax = new BOFileRepositoryAjax();
            boRepository.address = this.address;
            boRepository.token = this.token;
            boRepository.converter = this.createConverter();
            return boRepository;
        } else {
            // 在线状态，使用服务仓库
            let boRepository: BORepositoryAjax = new BORepositoryAjax();
            boRepository.address = this.address;
            boRepository.token = this.token;
            boRepository.converter = this.createConverter();
            return boRepository;
        }
    }
    /** 创建读写业务仓库 */
    protected createRepository(): IBORepository {
        let boRepository: BORepositoryAjax = new BORepositoryAjax();
        boRepository.address = this.address;
        boRepository.token = this.token;
        boRepository.converter = this.createConverter();
        return boRepository;
    }
    /** 查询业务对象 */
    protected fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let boRepository: IBORepositoryReadonly = this.createReadonlyRepository();
        if (objects.isNull(boRepository)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "boRepository"));
        }
        boRepository.fetch(boName, caller);
    }
    /** 保存业务对象 */
    protected save<P>(boName: string, caller: SaveCaller<P>): void {
        if (this.offline) {
            throw new Error(i18n.prop("msg_operation_not_allowed_on_offline"));
        }
        let boRepository: IBORepository = this.createRepository();
        if (objects.isNull(boRepository)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "boRepository"));
        }
        boRepository.save(boName, caller);
    }

    /** 创建数据转换者 */
    protected abstract createConverter(): IDataConverter;
}


