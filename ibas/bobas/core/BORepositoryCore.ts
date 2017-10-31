/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    IRemoteRepository, MethodCaller, IDataConverter,
} from "./BORepositoryCore.d";

/** 远程仓库 */
export abstract class RemoteRepository implements IRemoteRepository {
    /** 远程服务地址 */
    private _address: string;
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }
    /** 访问口令 */
    private _token: string;
    get token(): string {
        return this._token;
    }
    set token(value: string) {
        this._token = value;
    }    /** 数据转换者 */
    private _converter: IDataConverter;
    get converter(): IDataConverter {
        return this._converter;
    }
    set converter(value: IDataConverter) {
        this._converter = value;
    }
    /**
     * 调用远程方法
     * @param method 方法地址
     * @param data 数据
     * @param caller 调用者
     */
    abstract callRemoteMethod(method: string, data: any, caller: MethodCaller): void;
}