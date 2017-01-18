/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./BORepositoryCore.d.ts" />

import {
    object, string, emMessageLevel,
    ArrayList, IOperationResult, OperationResult, ICriteria
} from '../data/Data';
import { IBusinessObject, IBusinessObjectList } from './BusinessObjectCore.d';
import { IBORemoteRepository, RemoteListener, IDataConverter } from './BORepositoryCore.d';
import { logger } from '../messages/Messages';
import { i18n } from '../i18n/I18N';

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
    * @param method 方法名称
    * @param criteria 查询
    */
    fetch<P>(method: string, criteria: ICriteria) {

    }

    /**
    * 保存数据
    * @param method 方法名称
    * @param bo 业务对象
    */
    save<P>(method: string, bo: IBusinessObject) {

    }

    /**
    * 调用远程方法
    */
    abstract callRemoteMethod(method: string, data: any, listener: RemoteListener);
    /**
     * 创建数据转换者
     */
    abstract createDataConverter(): IDataConverter;
}

/**
 * 业务对象的远程仓库-jQuery实现
 */
export abstract class BORemoteRepositoryJQuery extends BORemoteRepository {

    /**
     * 远程方法调用
     * 特殊调用参数可重载createAjaxSettings方法
     * @param method 方法名称
     * @param data 数据
     * @param listener 方法监听
     */
    callRemoteMethod(method: string, data: any, listener: RemoteListener) {
        let that = this;
        let ajxSetting = this.createAjaxSettings(method, data);
        // 补充发生错误的事件
        ajxSetting.error = function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {
            let opRslt = new OperationResult();
            opRslt.resultCode = -999;
            opRslt.message = string.format("{0} - {1}", textStatus, errorThrown);
            logger.log(emMessageLevel.DEBUG, "repository: call method [{2}] faild, {0} - {1}", textStatus, errorThrown, ajxSetting.url);
            listener.onCompleted(opRslt);
        };
        // 补充成功的事件
        ajxSetting.success = function (data: any, textStatus: string, jqXHR: JQueryXHR) {
            let converter = that.createDataConverter();
            if (object.isNull(converter)) {
                throw new Error(i18n.prop("msg_invalid_data_converter"));
            }
            let opRslt = converter.parsing(data);
            if (object.isNull(opRslt)) {
                throw new Error(i18n.prop("msg_data_converter_parsing_faild"));
            }
            logger.log(emMessageLevel.DEBUG, "repository: call method [{2}] sucessful, {0} - {1}", textStatus, opRslt.message, ajxSetting.url);
            listener.onCompleted(opRslt);
        };
        // 调用远程方法
        logger.log(emMessageLevel.DEBUG, "repository: calling method {0}", ajxSetting.url);
        jQuery.ajax(ajxSetting);
    }

    /**
     * 创建调用参数，可重载
     * @param method 方法名称
     * @param data 调用数据
     */
    protected createAjaxSettings(method: string, data: any): JQueryAjaxSettings {
        let methodUrl = this.address;
        if (!methodUrl.endsWith("/")) {
            methodUrl = methodUrl + "/";
        }
        methodUrl = methodUrl + method;
        let ajxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
        }
        return ajxSetting;
    }
}
