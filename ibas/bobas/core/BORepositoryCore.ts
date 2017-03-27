/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, IOperationResult, ICriteria, string, emMessageLevel
} from "../data/index";
import { i18n } from "../i18n/index";
import { config } from "../configuration/index";
import { logger } from "../messages/index";
import { IBusinessObject } from "./BusinessObjectCore.d";
import { IBORemoteRepository, MethodCaller, IDataConverter, FetchCaller, SaveCaller } from "./RepositoryCore.d";

/**
 * 业务对象的远程仓库
 */
export abstract class BORemoteRepository implements IBORemoteRepository {
    /** 远程仓库的默认地址模板 */
    static CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS: string = "default_address_{0}";

    constructor() {
        // 获取远程仓库的默认地址
        let name: string = this.constructor.name;
        let address: string = config.get(string.format(BORemoteRepository.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, name));
        if (!object.isNull(address)) {
            this.address = address;
            logger.log(emMessageLevel.DEBUG, "repository: using repository's default address [{0}].", this.address);
        }
    }
    /**
     * 访问口令
     */
    private _token: string;

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
    /**
     * 远程服务地址
     */
    private _address: string;

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let method: string = "fetch" + boName;
        let remoteCaller: MethodCaller = {
            onCompleted(opRslt: IOperationResult<any>): void {
                caller.onCompleted.call(object.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        let converter: IDataConverter = this.createDataConverter();
        if (object.isNull(converter)) {
            throw new Error(i18n.prop("msg_invalid_data_converter"));
        }
        this.callRemoteMethod(method, converter.convert(caller.criteria), remoteCaller);
    }
    /**
     * 保存数据
     * @param boName 业务对象名称
     * @param caller 保存者
     */
    save<P>(boName: string, caller: SaveCaller<P>): void {
        let method: string = "save" + boName;
        let remoteCaller: MethodCaller = {
            onCompleted(opRslt: IOperationResult<any>): void {
                caller.onCompleted.call(object.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        let converter: IDataConverter = this.createDataConverter();
        if (object.isNull(converter)) {
            throw new Error(i18n.prop("msg_invalid_data_converter"));
        }
        this.callRemoteMethod(method, converter.convert(caller.beSaved), remoteCaller);
    }

    /**
     * 调用远程方法
     */
    abstract callRemoteMethod(method: string, data: any, caller: MethodCaller): void;
    /**
     * 创建数据转换者
     */
    protected abstract createDataConverter(): IDataConverter;
}
