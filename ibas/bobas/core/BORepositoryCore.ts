/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import {
    objects, StringBuilder, strings
} from "../data/index";
import { i18n } from "../i18n/index";
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
     * 返回方法地址
     * @param method 方法名称
     */
    protected methodUrl(method: string): string {
        if (objects.isNull(this.address)) {
            throw new Error(i18n.prop("sys_invalid_parameter", "address"));
        }
        let methodUrl: StringBuilder = new StringBuilder();
        methodUrl.append(this.address);
        if (!this.address.endsWith("/")) {
            methodUrl.append("/");
        }
        methodUrl.append(method);
        if (!objects.isNull(this.token) && method.indexOf("token=") < 0) {
            if (method.indexOf("?") >= 0) {
                methodUrl.append("&");
            } else {
                methodUrl.append("?");
            }
            methodUrl.append(strings.format("token={0}", this.token));
        }
        return methodUrl.toString();
    }
    /**
     * 调用远程方法
     * @param method 方法地址
     * @param data 数据
     * @param caller 调用者
     */
    abstract callRemoteMethod(method: string, data: any, caller: MethodCaller): void;
}