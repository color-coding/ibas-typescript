/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../3rdparty/jquery.d.ts" />
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="../common/Configuration.ts" />
/// <reference path="../expression/JudgmentLink.ts" />
/// <reference path="./BORepositoryCore.ts" />

namespace ibas {
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
        callRemoteMethod(method: string, data: any, caller: IMethodCaller<any>): void {
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
                        opRslt = new OperationResult();
                        opRslt.resultCode = 20000;
                        opRslt.message = i18n.prop("sys_data_converter_parsing_faild");
                        logger.log(emMessageLevel.ERROR,
                            "repository: call method [{1}] faild, {0}", opRslt.message, ajaxSetting.url);
                    } else if (!objects.instanceOf(opRslt, OperationResult) && !objects.instanceOf(opRslt, OperationMessage)) {
                        let tmpOpRslt: OperationResult<any> = new OperationResult();
                        tmpOpRslt.addResults(opRslt);
                        opRslt = tmpOpRslt;
                    }
                    caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                } else {
                    caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, data);
                }
            };
            // 调用远程方法
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
        fetch<P>(boName: string, caller: IFetchCaller<P>): void {
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
        save<P>(boName: string, caller: ISaveCaller<P>): void {
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
        protected createAjaxSettings(fileName: string, caller: ILoadFileCaller): JQueryAjaxSettings {
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
        load(fileName: string, caller: ILoadFileCaller): void {
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
        fetch<P>(boName: string, caller: IFetchCaller<P>): void {
            let criteria: ICriteria;
            if (caller.criteria instanceof Array) {
                criteria = new Criteria();
                for (let item of caller.criteria) {
                    if (!objects.instanceOf(item, Condition)) {
                        continue;
                    }
                    criteria.conditions.add(item);
                }
            } else if (objects.instanceOf(caller.criteria, Criteria)) {
                criteria = caller.criteria;
            }
            let fileName: string = strings.format("{0}s.json", boName).toLowerCase();
            let that: this = this;
            let loadFileCaller: ILoadFileCaller = {
                onCompleted(data: any): void {
                    let opRslt: IOperationResult<any> = new OperationResult();
                    if (!objects.isNull(that.converter)) {
                        // 设置转换方法
                        if (data instanceof Array) {
                            let newDatas: Array<any> = new Array<any>();
                            for (let item of data) {
                                if (item.type === undefined) {
                                    item.type = boName;
                                }
                                newDatas.push(that.converter.parsing(item, fileName));
                            }
                            // 排序
                            if (!objects.isNull(criteria) && criteria.sorts.length > 0) {
                                newDatas = arrays.sort(newDatas, criteria.sorts);
                            }
                            // 过滤数据
                            for (let item of newDatas) {
                                if (!objects.isNull(criteria)) {
                                    // 设置查询
                                    if (that.filter(criteria, item)) {
                                        opRslt.resultObjects.add(item);
                                    }
                                    if (criteria.result > 0 && opRslt.resultObjects.length >= criteria.result) {
                                        // 已够返回数量
                                        break;
                                    }
                                } else {
                                    // 未设置查询
                                    opRslt.resultObjects.add(item);
                                }
                            }
                        } else {
                            if (data.type === undefined) {
                                data.type = boName;
                            }
                            let newData: any = that.converter.parsing(data, fileName);
                            if (!objects.isNull(criteria)) {
                                // 设置查询
                                if (that.filter(criteria, newData)) {
                                    opRslt.resultObjects.add(newData);
                                }
                            } else {
                                // 未设置查询
                                opRslt.resultObjects.add(newData);
                            }
                        }
                    } else {
                        // 未设置转换方法，不能进行查询过滤
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
        /**
         * 过滤数据
         * @param criteria 查询
         * @param data 数据
         * @return true,符合条件；false，不符合条件
         */
        private filter(criteria: ICriteria, data: any): boolean {
            if (objects.isNull(criteria)) {
                return true;
            }
            if (criteria.conditions.length === 0) {
                return true;
            }
            let judgmentLink: BOJudgmentLinkCondition = new BOJudgmentLinkCondition();
            judgmentLink.parsingConditions(criteria.conditions);
            return judgmentLink.judge(data);
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
        upload<T>(method: string, caller: IUploadFileCaller<T>): void {
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
        callRemoteMethod(method: string, data: any, caller: IMethodCaller<any>): void {
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
                            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                        } else {
                            caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, this.response);
                        }
                        let headers: string = request.getAllResponseHeaders();
                        if (!ibas.strings.isEmpty(headers)) {
                            headers = headers.replace("\r\n", "\n");
                            for (let item of headers.split("\n")) {
                                let values: string[] = item.split(":");
                                if (values.length < 2) {
                                    continue;
                                }
                                opRslt.informations.add(new ibas.OperationInformation(values[0].trim(), values[1].trim()));
                            }
                        }
                    } else {
                        // 出错了
                        opRslt.resultCode = 10000 + this.status;
                        if (this.status === 500) {
                            opRslt.message = strings.format("{0} - {1}", this.statusText, i18n.prop("sys_server_internal_error"));
                        } else {
                            opRslt.message = strings.format("{0} - {1}", this.statusText, i18n.prop("sys_network_error"));
                        }
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
    /** 文件下载仓库 */
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
        download<T>(method: string, caller: IDownloadFileCaller<T>): void {
            let methodCaller: IMethodCaller<any> = {
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
            let data: any = caller.criteria;
            if (!(data instanceof FormData)) {
                data = JSON.stringify(this.converter.convert(data, method));
            }
            this.callRemoteMethod(method, data, methodCaller);
        }
        protected createHttpRequest(method: string, data: any): XMLHttpRequest {
            let methodUrl: string = this.methodUrl(method);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("POST", methodUrl, true);
            xhr.responseType = "blob";
            if (!(data instanceof FormData)) {
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            }
            return xhr;
        }
    }
}