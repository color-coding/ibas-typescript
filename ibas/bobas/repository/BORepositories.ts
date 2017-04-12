/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, string, emMessageLevel, url
} from "../data/index";
import {
    FetchCaller, SaveCaller, IRemoteRepository, IBORepository, IBORepositoryReadonly,
    BORepositoryAjax, BOFileRepositoryAjax, IDataConverter
} from "../core/index";
import { config } from "../configuration/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";

/**
 * 业务仓库应用
 */
export abstract class BORepositoryApplication {

    /** 远程仓库的默认地址模板 */
    static CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS: string = "repositoryAddress|{0}";

    constructor() {
        // 获取离线状态
        this.offline = config.get(config.CONFIG_ITEM_OFFLINE_MODE, false);
        // 获取远程仓库的默认地址
        let name: string = this.constructor.name;
        let address: string = config.get(string.format(BORepositoryApplication.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, name));
        if (!object.isNull(address)) {
            address = url.normalize(address);
            this.address = address;
            logger.log(emMessageLevel.DEBUG, "repository: using repository's default address [{0}].", this.address);
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
        if (object.isNull(boRepository)) {
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
        if (object.isNull(boRepository)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "boRepository"));
        }
        boRepository.save(boName, caller);
    }

    /** 创建数据转换者 */
    protected abstract createConverter(): IDataConverter;
}


