/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="../common/Configuration.ts" />
/// <reference path="../expression/JudgmentLink.ts" />
/// <reference path="./BORepositoryCore.ts" />
namespace ibas {
    /** HTTP头AUTHORIZATION形式口令 */
    export const HTTP_HEADER_TOKEN_AUTHORIZATION: string = "Authorization:";
    /** 远程仓库 */
    export abstract class RemoteRepositoryAjax extends RemoteRepository implements IRemoteRepository {
        constructor() {
            super();
            this.autoParsing = true;
        }
        /**
         * 自动解析数据
         */
        autoParsing: boolean;
        /**
         * 远程方法调用
         * 特殊调用参数可重载createAjaxSettings方法
         * @param method 方法名称
         * @param data 数据
         * @param onCompleted 完成回调
         */
        callRemoteMethod<T>(method: string, data: any, onCompleted: (opRslt: IOperationResult<T>) => void): void {
            let xhr: XMLHttpRequest = this.createHttpRequest(method);
            if (!(xhr instanceof XMLHttpRequest)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "HttpRequest"));
            }
            let that: this = this;
            xhr.onreadystatechange = function (this: XMLHttpRequest, event: Event): void {
                // 响应完成
                if (this.readyState === 4) {
                    let opRslt: IOperationResult<any>;
                    if ((this.status >= 200 && this.status < 300) || this.status === 304) {
                        // 成功
                        if (that.autoParsing) {
                            let opRslt: any = that.converter.parsing(this.response, method);
                            if (objects.isNull(opRslt)) {
                                opRslt = new OperationResult();
                                opRslt.resultCode = 20000;
                                opRslt.message = i18n.prop("sys_data_converter_parsing_faild");
                                logger.log(emMessageLevel.WARN, "repository: call method [{1}] faild, {0}", opRslt.message, method);
                            } else if (!ibas.objects.instanceOf(opRslt, OperationMessage)) {
                                opRslt = new OperationResult().addResults(opRslt);
                            }
                            if (onCompleted instanceof Function) {
                                onCompleted(opRslt);
                            }
                        } else {
                            if (onCompleted instanceof Function) {
                                onCompleted(this.response);
                            }
                        }
                        // 输出头
                        let headers: string = this.getAllResponseHeaders();
                        if (!strings.isEmpty(headers) && opRslt instanceof OperationResult) {
                            headers = headers.replace("\r\n", "\n");
                            for (let item of headers.split("\n")) {
                                let values: string[] = item.split(":");
                                if (values.length < 2) {
                                    continue;
                                }
                                opRslt.informations.add(new OperationInformation(values[0].trim(), values[1].trim()));
                            }
                        }
                    } else {
                        // 出错了
                        opRslt = new OperationResult();
                        opRslt.resultCode = 10000 + this.status;
                        if (this.status === 500) {
                            opRslt.message = strings.format("{0} - {1}", opRslt.resultCode, i18n.prop("sys_server_internal_error"));
                        } else {
                            opRslt.message = strings.format("{0} - {1}", opRslt.resultCode, i18n.prop("sys_network_error"));
                        }
                        logger.log(emMessageLevel.ERROR, "repository: call method [{0}] faild.", method);
                        if (onCompleted instanceof Function) {
                            onCompleted(opRslt);
                        }
                    }
                    that = null;
                }
            };
            xhr.send(data);
        }
        /**
         * 返回方法地址
         * @param method 方法名称
         */
        protected methodUrl(method: string): string {
            let url: string = super.methodUrl(method);
            if (strings.isWith(this.token, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                let index: number = url.indexOf("?token=");
                if (index < 0) {
                    index = url.indexOf("&token=");
                }
                if (index > 0) {
                    let end: number = url.indexOf("&", index + 1);
                    if (end <= 0) {
                        end = url.length;
                    }
                    url = strings.replace(url, url.substring(index, end), "");
                }
            }
            return url;
        }
        protected abstract createHttpRequest(method: string): XMLHttpRequest;
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
            this.callRemoteMethod(method, JSON.stringify(this.converter.convert(caller.criteria, method)), (opRslt) => {
                if (caller.onCompleted instanceof Function) {
                    if (caller.caller) {
                        caller.onCompleted.call(caller.caller, opRslt);
                    } else {
                        caller.onCompleted.call(caller.onCompleted, opRslt);
                    }
                }
            });
        }
        /**
         * 保存数据
         * @param boName 业务对象名称
         * @param caller 保存者
         */
        save<P>(boName: string, caller: ISaveCaller<P>): void {
            let method: string = "save" + boName;
            if (objects.isNull(caller.beSaved)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "beSaved"));
            }
            this.callRemoteMethod(method, JSON.stringify(this.converter.convert(caller.beSaved, method)), (opRslt) => {
                if (caller.onCompleted instanceof Function) {
                    if (caller.caller) {
                        caller.onCompleted.call(caller.caller, opRslt);
                    } else {
                        caller.onCompleted.call(caller.onCompleted, opRslt);
                    }
                }
            });
        }
        /**
         * 创建请求
         * @param method 地址
         */
        protected createHttpRequest(method: string): XMLHttpRequest {
            let methodUrl: string = this.methodUrl(method);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("POST", methodUrl, true);
            xhr.responseType = "json";
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            // token为头认证形式
            if (strings.isWith(this.token, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                // xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", this.token.substring(HTTP_HEADER_TOKEN_AUTHORIZATION.length));
            }
            return xhr;
        }
    }
    /** 远程文件只读仓库 */
    export class FileRepositoryAjax extends RemoteRepositoryAjax implements IFileRepository {
        constructor() {
            super();
            // 关闭自动解析数据
            this.autoParsing = false;
        }
        protected createHttpRequest(method: string): XMLHttpRequest {
            let methodUrl: string = this.methodUrl(method);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", methodUrl, true);
            xhr.responseType = "json";
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            // token为头认证形式
            if (strings.isWith(this.token, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                // xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", this.token.substring(HTTP_HEADER_TOKEN_AUTHORIZATION.length));
            }
            return xhr;
        }
        /**
         * 加载文件
         * @param fileName 文件名称
         * @param caller 调用者
         */
        load(fileName: string, caller: ILoadFileCaller): void {
            this.callRemoteMethod(fileName, null, (opRslt) => {
                if (caller.onCompleted instanceof Function) {
                    if (caller.caller) {
                        caller.onCompleted.call(caller.caller, opRslt);
                    } else {
                        caller.onCompleted.call(caller.onCompleted, opRslt);
                    }
                }
            });
        }
    }
    /** 远程文件业务对象仓库 */
    export class BOFileRepositoryAjax extends FileRepositoryAjax implements IBORepository {
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
                                opRslt.resultObjects.add(item);
                            }
                        } else {
                            opRslt.resultObjects.add(data);
                        }
                    }
                    caller.onCompleted.call(objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    that = null;
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
        /**
         * 保存方法
         * @param boName 业务对象名称
         * @param caller 查询监听者
         */
        save<P>(boName: string, caller: ISaveCaller<P>): void {
            throw new Error("Method not implemented.");
        }
    }
    /** 文件上传仓库 */
    export class FileRepositoryUploadAjax extends RemoteRepositoryAjax implements IFileRepositoryUpload {
        protected createHttpRequest(method: string): XMLHttpRequest {
            let methodUrl: string = this.methodUrl(method);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("POST", methodUrl, true);
            xhr.responseType = "json";
            // token为头认证形式
            if (strings.isWith(this.token, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                // xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", this.token.substring(HTTP_HEADER_TOKEN_AUTHORIZATION.length));
            }
            return xhr;
        }
        /**
         * 上传文件
         * @param method 方法地址
         * @param caller 调用者
         */
        upload<T>(method: string, caller: IUploadFileCaller<T>): void {
            this.callRemoteMethod(method, caller.fileData, (opRslt) => {
                if (caller.onCompleted instanceof Function) {
                    if (caller.caller) {
                        caller.onCompleted.call(caller.caller, opRslt);
                    } else {
                        caller.onCompleted.call(caller, opRslt);
                    }
                }
            });
        }
    }
    /** 文件下载仓库 */
    export class FileRepositoryDownloadAjax extends RemoteRepositoryAjax implements IFileRepositoryDownload {
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
            let data: any = caller.criteria;
            if (!(data instanceof FormData)) {
                data = JSON.stringify(this.converter.convert(data, method));
            }
            this.callRemoteMethod(method, data, (data) => {
                let opRslt: IOperationResult<any> = null;
                if (data instanceof OperationResult || data instanceof OperationMessage) {
                    opRslt = <any>data;
                } else {
                    opRslt = new OperationResult();
                    opRslt.resultObjects.add(data);
                }
                if (caller.onCompleted instanceof Function) {
                    if (caller.caller) {
                        caller.onCompleted.call(caller.caller, opRslt);
                    } else {
                        caller.onCompleted.call(caller, opRslt);
                    }
                }
            });
        }
        protected createHttpRequest(method: string): XMLHttpRequest {
            let methodUrl: string = this.methodUrl(method);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("POST", methodUrl, true);
            xhr.responseType = "blob";
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            // token为头认证形式
            if (strings.isWith(this.token, HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                // xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", this.token.substring(HTTP_HEADER_TOKEN_AUTHORIZATION.length));
            }
            return xhr;
        }
    }
}