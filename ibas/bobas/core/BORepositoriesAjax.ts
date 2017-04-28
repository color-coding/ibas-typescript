/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/index.d.ts" />
import {
    objects, strings, emMessageLevel, OperationResult, IOperationResult, ArrayList
} from "../data/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";
import {
    MethodCaller, FetchCaller, SaveCaller, LoadFileCaller,
    IRemoteRepository, IDataConverter, IBORepositoryReadonly
} from "./BORepositoryCore.d";
import { FileRepository, BORepository } from "./BORepositoryCore";


/** 远程文件仓库 */
export class FileRepositoryAjax extends FileRepository implements IRemoteRepository {
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
     * 调用远程方法
     * @param method 方法地址
     * @param data 数据
     * @param caller 调用者
     */
    callRemoteMethod(method: string, data: string, caller: MethodCaller): void {
        let that = this;
        let ajxSetting: JQueryAjaxSettings = this.createAjaxSettings(method, caller);
        let opRslt: OperationResult<any> = new OperationResult();
        // 补充发生错误的事件
        ajxSetting.error = function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): void {
            opRslt.resultCode = 10000 + jqXHR.status;
            opRslt.message = strings.format("{0} - {1}", textStatus, i18n.prop("msg_network_error"));
            logger.log(emMessageLevel.ERROR,
                "repository: call method [{2}] faild, {0} - {1}.", textStatus, errorThrown, ajxSetting.url);
            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        // 补充成功的事件
        ajxSetting.success = function (data: any, textStatus: string, jqXHR: JQueryXHR): void {
            opRslt.resultObjects.add(data);
            logger.log(emMessageLevel.DEBUG,
                "repository: call method [{2}] sucessful, {0} - {1}.", textStatus, opRslt.message, ajxSetting.url);
            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        // 调用远程方法
        logger.log(emMessageLevel.DEBUG, "repository: calling method [{0}].", ajxSetting.url);
        jQuery.ajax(ajxSetting);
    }
    /**
     * 加载文件
     * @param fileName 文件名称
     * @param caller 监听者
     */
    loadFile(fileName: string, caller: LoadFileCaller): void {
        this.callRemoteMethod(fileName, undefined, caller);
    }
    /**
     * 创建调用参数，可重载
     * @param fileName 文件名
     * @param dataType 返回的数据类型
     */
    protected createAjaxSettings(fileName: string, caller: LoadFileCaller): JQueryAjaxSettings {
        if (objects.isNull(this.address)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "address"));
        }
        let methodUrl: string = this.address;
        if (!methodUrl.endsWith("/")) {
            methodUrl = methodUrl + "/";
        }
        methodUrl = methodUrl + fileName;
        let type: string = "GET";
        let contentType: string = "application/json; charset=utf-8";
        if (!objects.isNull(caller.contentType)) {
            contentType = caller.contentType;
        }
        let dataType: string = "json";
        if (!objects.isNull(caller.dataType)) {
            dataType = caller.dataType;
        }
        let ajxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: type,
            contentType: contentType,
            dataType: dataType,
            async: true
        };
        return ajxSetting;
    }
}
export class BOFileRepositoryAjax extends FileRepositoryAjax implements IBORepositoryReadonly {
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
    /** 数据转换者 */
    private _converter: IDataConverter;
    get converter(): IDataConverter {
        return this._converter;
    }
    set converter(value: IDataConverter) {
        this._converter = value;
    }
    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询监听者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let fileName: string = strings.format("{0}s.json", boName).toLowerCase();
        let that = this;
        let loadFileCaller: LoadFileCaller = {
            onCompleted(opRslt: IOperationResult<any>): void {
                if (!objects.isNull(that.converter)) {
                    let datas: ArrayList<any> = new ArrayList();
                    for (let item of opRslt.resultObjects) {
                        if (item instanceof Array) {
                            for (let subItem of item) {
                                if (subItem.type === undefined) {
                                    // 添加对象类型
                                    subItem.type = boName;
                                }
                                datas.push(that.converter.parsing(subItem, fileName));
                            }
                        } else {
                            if (item.type === undefined) {
                                // 添加对象类型
                                item.type = boName;
                            }
                            datas.push(that.converter.parsing(item, fileName));
                        }
                    }
                    // 替换为转换后的数据
                    opRslt.resultObjects = datas;
                }
                caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.loadFile(fileName, loadFileCaller);
    }
}
/** 远程业务对象仓库 */
export class BORepositoryAjax extends BORepository implements IRemoteRepository {
    /** 远程服务地址 */
    private _address: string;
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }
    /** 数据转换者 */
    private _converter: IDataConverter;
    get converter(): IDataConverter {
        if (objects.isNull(this._converter)) {
            throw new Error(i18n.prop("msg_invalid_data_converter"));
        }
        return this._converter;
    }
    set converter(value: IDataConverter) {
        this._converter = value;
    }

    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let method: string = "fetch" + boName;
        let data: string = JSON.stringify(this.converter.convert(caller.criteria, method));
        this.callRemoteMethod(method, data, caller);
    }
    /**
     * 保存数据
     * @param boName 业务对象名称
     * @param caller 保存者
     */
    save<P>(boName: string, caller: SaveCaller<P>): void {
        let method: string = "save" + boName;
        let data: string = JSON.stringify(this.converter.convert(caller.beSaved, method));
        this.callRemoteMethod(method, data, caller);
    }

    /**
     * 远程方法调用
     * 特殊调用参数可重载createAjaxSettings方法
     * @param method 方法名称
     * @param data 数据
     * @param caller 方法监听
     */
    callRemoteMethod(method: string, data: string, caller: MethodCaller): void {
        let that = this;
        let ajxSetting: JQueryAjaxSettings = this.createAjaxSettings(method, data);
        // 补充发生错误的事件
        ajxSetting.error = function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): void {
            let opRslt: OperationResult<any> = new OperationResult();
            opRslt.resultCode = 10000 + jqXHR.status;
            opRslt.message = strings.format("{0} - {1}", textStatus, i18n.prop("msg_network_error"));
            logger.log(emMessageLevel.ERROR,
                "repository: call method [{2}] faild, {0} - {1}.", textStatus, errorThrown, ajxSetting.url);
            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        // 补充成功的事件
        ajxSetting.success = function (data: any, textStatus: string, jqXHR: JQueryXHR): void {
            let opRslt: any = that.converter.parsing(data, method);
            if (objects.isNull(opRslt)) {
                throw new Error(i18n.prop("msg_data_converter_parsing_faild"));
            }
            logger.log(emMessageLevel.DEBUG,
                "repository: call method [{2}] sucessful, {0} - {1}.", opRslt.resultCode, opRslt.message, ajxSetting.url);
            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        // 调用远程方法
        logger.log(emMessageLevel.DEBUG, "repository: calling method [{0}].", ajxSetting.url);
        jQuery.ajax(ajxSetting);
    }

    /**
     * 创建调用参数，可重载
     * @param method 方法名称
     * @param data 调用数据
     */
    protected createAjaxSettings(method: string, data: string): JQueryAjaxSettings {
        if (objects.isNull(this.address)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "address"));
        }
        let methodUrl: string = this.address;
        if (!methodUrl.endsWith("/")) {
            methodUrl = methodUrl + "/";
        }
        methodUrl = methodUrl + method;
        if (!objects.isNull(this.token) && methodUrl.indexOf("token=") < 0) {
            if (methodUrl.indexOf("?") >= 0) {
                methodUrl = methodUrl + "&";
            } else {
                methodUrl = methodUrl + "?";
            }
            methodUrl = methodUrl + strings.format("token={0}", this.token);
        }
        let ajxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            data: data
        };
        return ajxSetting;
    }
}