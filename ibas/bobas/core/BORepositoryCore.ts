/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, IOperationResult, ICriteria
} from "../data/index";
import { i18n } from "../i18n/index";
import { IBusinessObject } from "./BusinessObjectCore.d";
import { IBORemoteRepository, RemoteListener, IDataConverter, FetchListener, SaveListener } from "./RepositoryCore.d";

/**
 * 业务对象的远程仓库
 */
export abstract class BORemoteRepository implements IBORemoteRepository {

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
     * @param listener 查询监听者
     */
    fetch<P>(boName: string, listener: FetchListener<P>): void {
        let method: string = "fetch" + boName;
        let remoteListener: RemoteListener = {
            onCompleted(opRslt: IOperationResult<any>): void {
                listener.onCompleted.call(object.isNull(listener.caller) ? listener : listener.caller, opRslt);
            }
        };
        let converter: IDataConverter = this.createDataConverter();
        if (object.isNull(converter)) {
            throw new Error(i18n.prop("msg_invalid_data_converter"));
        }
        this.callRemoteMethod(method, converter.convert(listener.criteria), remoteListener);
    }
    /**
     * 保存数据
     * @param boName 业务对象名称
     * @param listener 保存监听者
     */
    save<P>(boName: string, listener: SaveListener<P>): void {
        let method: string = "save" + boName;
        let remoteListener: RemoteListener = {
            onCompleted(opRslt: IOperationResult<any>): void {
                listener.onCompleted.call(object.isNull(listener.caller) ? listener : listener.caller, opRslt);
            }
        };
        let converter: IDataConverter = this.createDataConverter();
        if (object.isNull(converter)) {
            throw new Error(i18n.prop("msg_invalid_data_converter"));
        }
        this.callRemoteMethod(method, converter.convert(listener.beSaved), remoteListener);
    }

    /**
     * 调用远程方法
     */
    abstract callRemoteMethod(method: string, data: any, listener: RemoteListener): void;
    /**
     * 创建数据转换者
     */
    protected abstract createDataConverter(): IDataConverter;
}
