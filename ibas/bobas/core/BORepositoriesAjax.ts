/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/index.d.ts" />
import {
    objects, strings, emMessageLevel, OperationResult, IOperationResult, ArrayList,
    Criteria, Condition, ICriteria,
} from "../data/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";
import {
    MethodCaller, FetchCaller, SaveCaller, LoadFileCaller, UploadFileCaller,
    IRemoteRepository, IDataConverter, IBORepository, IFileRepository, IBORepositoryReadonly,
    IFileRepositoryUpload, IFileRepositoryDownload, DownloadFileCaller
} from "./BORepositoryCore.d";
import {
    RemoteRepository,
} from "./BORepositoryCore";


/** 远程仓库 */
export abstract class RemoteRepositoryAjax extends RemoteRepository implements IRemoteRepository {
    /** 自动解析数据 */
    autoParsing: boolean = true;
    /**
     * 远程方法调用
     * 特殊调用参数可重载createAjaxSettings方法
     * @param method 方法名称
     * @param data 数据
     * @param caller 方法监听
     */
    callRemoteMethod(method: string, data: any, caller: MethodCaller): void {
        let that: this = this;
        let ajaxSetting: JQueryAjaxSettings = this.createAjaxSettings(method, data);
        if (objects.isNull(ajaxSetting)) {
            throw new Error(i18n.prop("sys_invalid_parameter", "AjaxSetting"));
        }
        // 补充发生错误的事件
        ajaxSetting.error = function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): void {
            let opRslt: OperationResult<any> = new OperationResult();
            opRslt.resultCode = 10000 + jqXHR.status;
            opRslt.message = strings.format("{0} - {1}", textStatus, i18n.prop("sys_network_error"));
            logger.log(emMessageLevel.ERROR,
                "repository: call method [{2}] faild, {0} - {1}.", textStatus, errorThrown, ajaxSetting.url);
            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        // 补充成功的事件
        ajaxSetting.success = function (data: any, textStatus: string, jqXHR: JQueryXHR): void {
            if (that.autoParsing) {
                let opRslt: any = that.converter.parsing(data, method);
                if (objects.isNull(opRslt)) {
                    throw new Error(i18n.prop("sys_data_converter_parsing_faild"));
                }
                logger.log(emMessageLevel.DEBUG,
                    "repository: call method [{2}] sucessful, {0} - {1}.", opRslt.resultCode, opRslt.message, ajaxSetting.url);
                caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            } else {
                logger.log(emMessageLevel.DEBUG,
                    "repository: call method [{1}] sucessful, {0}.", textStatus, ajaxSetting.url);
                caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, data);
            }
        };
        // 调用远程方法
        logger.log(emMessageLevel.DEBUG, "repository: calling method [{0}].", ajaxSetting.url);
        jQuery.ajax(ajaxSetting);
    }
    /**
     * 创建调用参数，可重载
     * @param method 方法名称
     * @param data 调用数据
     */
    protected abstract createAjaxSettings(method: string, data: any): JQueryAjaxSettings;
}
/** 远程业务对象仓库 */
export class BORepositoryAjax extends RemoteRepositoryAjax implements IBORepository {
    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let method: string = "fetch" + boName;
        if (caller.criteria instanceof Array) {
            // 替换查询条件数组
            let criteria: Criteria = new Criteria();
            for (let item of caller.criteria) {
                if (objects.instanceOf(item, Condition)) {
                    criteria.conditions.add(item);
                } else {
                    throw new Error(i18n.prop("sys_invalid_parameter", "criteria"));
                }
            }
            caller.criteria = criteria;
        }
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
     * 创建调用参数，可重载
     * @param method 方法名称
     * @param data 调用数据
     */
    protected createAjaxSettings(method: string, data: string): JQueryAjaxSettings {
        let methodUrl: string = this.methodUrl(method);
        let ajaxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            data: data
        };
        return ajaxSetting;
    }
}
/** 远程文件只读仓库 */
export class FileRepositoryAjax extends RemoteRepositoryAjax implements IFileRepository {

    constructor() {
        super();
        // 关闭自动解析数据
        this.autoParsing = false;
    }
    /**
     * 创建调用参数，可重载
     * @param fileName 文件名
     * @param dataType 返回的数据类型
     */
    protected createAjaxSettings(fileName: string, caller: LoadFileCaller): JQueryAjaxSettings {
        let methodUrl: string = this.methodUrl(fileName);
        let type: string = "GET";
        let contentType: string = "application/json; charset=utf-8";
        if (!objects.isNull(caller.contentType)) {
            contentType = caller.contentType;
        }
        let dataType: string = "json";
        if (!objects.isNull(caller.dataType)) {
            dataType = caller.dataType;
        }
        let ajaxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: type,
            contentType: contentType,
            dataType: dataType,
            async: true
        };
        return ajaxSetting;
    }
    /**
     * 加载文件
     * @param fileName 文件名称
     * @param caller 调用者
     */
    load(fileName: string, caller: LoadFileCaller): void {
        this.callRemoteMethod(fileName, caller, caller);
    }
}
/** 远程文件业务对象仓库 */
export class BOFileRepositoryAjax extends FileRepositoryAjax implements IBORepositoryReadonly {
    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询监听者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>): void {
        let fileName: string = strings.format("{0}s.json", boName).toLowerCase();
        let that: this = this;
        let loadFileCaller: LoadFileCaller = {
            onCompleted(data: any): void {
                let opRslt: IOperationResult<any> = new OperationResult();
                if (!objects.isNull(that.converter)) {
                    if (data instanceof Array) {
                        for (let item of data) {
                            if (item.type === undefined) {
                                item.type = boName;
                            }
                            opRslt.resultObjects.add(that.converter.parsing(item, fileName));
                        }
                    } else {
                        if (data.type === undefined) {
                            data.type = boName;
                        }
                        opRslt.resultObjects.add(that.converter.parsing(data, fileName));
                    }
                } else {
                    if (data instanceof Array) {
                        for (let item of data) {
                            opRslt.resultObjects.add(data);
                        }
                    } else {
                        opRslt.resultObjects.add(data);
                    }
                }
                caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.load(fileName, loadFileCaller);
    }
}
/** 文件上传仓库 */
export class FileRepositoryUploadAjax extends RemoteRepositoryAjax implements IFileRepositoryUpload {
    /**
     * 创建调用参数，可重载
     * @param fileName 文件名
     * @param dataType 返回的数据类型
     */
    protected createAjaxSettings(method: string, data: FormData): JQueryAjaxSettings {
        let methodUrl: string = this.methodUrl(method);
        let ajaxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: "POST",
            data: data,
            async: false,
            cache: false,
            contentType: false,
            processData: false
        };
        return ajaxSetting;
    }
    /**
     * 上传文件
     * @param method 方法地址
     * @param caller 调用者
     */
    upload(method: string, caller: UploadFileCaller): void {
        this.callRemoteMethod(method, caller.fileData, caller);
    }
}
/** 远程仓库 */
export abstract class RemoteRepositoryXhr extends RemoteRepository {
    /** 自动解析数据 */
    autoParsing: boolean = true;
    /**
     * 远程方法调用
     * 特殊调用参数可重载createAjaxSettings方法
     * @param method 方法名称
     * @param data 数据
     * @param caller 方法监听
     */
    callRemoteMethod(method: string, data: any, caller: MethodCaller): void {
        let request: XMLHttpRequest = this.createHttpRequest(method, data);
        if (objects.isNull(request)) {
            throw new Error(i18n.prop("sys_invalid_parameter", "HttpRequest"));
        }
        let that: this = this;
        request.onreadystatechange = function (): void {
            if (this.readyState === 4) {
                let opRslt: IOperationResult<any> = new OperationResult();
                // 响应完成
                if ((this.status >= 200 && this.status < 300) || this.status === 304) {
                    // 成功
                    if (that.autoParsing) {
                        let opRslt: any = that.converter.parsing(this.response, method);
                        if (objects.isNull(opRslt)) {
                            throw new Error(i18n.prop("sys_data_converter_parsing_faild"));
                        }
                        logger.log(emMessageLevel.DEBUG,
                            "repository: call method [{2}] sucessful, {0} - {1}.", opRslt.resultCode, opRslt.message, this.responseURL);
                        caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    } else {
                        logger.log(emMessageLevel.DEBUG,
                            "repository: call method [{1}] sucessful, {0}.", this.statusText, this.responseURL);
                        caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, this.response);
                    }
                } else {
                    // 出错了
                    opRslt.resultCode = 10000 + this.status;
                    opRslt.message = strings.format("{0} - {1}", this.statusText, i18n.prop("sys_network_error"));
                    logger.log(emMessageLevel.ERROR,
                        "repository: call method [{2}] faild, {0} - {1}.", this.status, this.statusText, this.responseURL);
                    caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                }
            }
        };
        request.send(data);
    }
    protected abstract createHttpRequest(method: string, data: any): XMLHttpRequest;
}
/** 文件上传仓库 */
export class FileRepositoryDownloadAjax extends RemoteRepositoryXhr implements IFileRepositoryDownload {
    constructor() {
        super();
        this.autoParsing = false;
    }
    /**
     * 下载文件
     * @param method 方法地址
     * @param caller 调用者
     */
    download(method: string, caller: DownloadFileCaller): void {
        let methodCaller: MethodCaller = {
            onCompleted(data: any): void {
                let opRslt: IOperationResult<any> = null;
                if (data instanceof OperationResult) {
                    opRslt = data;
                } else {
                    opRslt = new OperationResult();
                    opRslt.resultObjects.add(data);
                }
                caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        let data: string = JSON.stringify(this.converter.convert(caller.criteria, method));
        this.callRemoteMethod(method, data, methodCaller);
    }
    protected createHttpRequest(method: string, data: any): XMLHttpRequest {
        let methodUrl: string = this.methodUrl(method);
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST", methodUrl, true);
        xhr.responseType = "blob";
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        return xhr;
    }
}