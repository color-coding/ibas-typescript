/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/index.d.ts" />
import {
    object, string, emMessageLevel, OperationResult
} from "../data/index";
import { RemoteListener, BORemoteRepository, IDataConverter } from "../core/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";

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
    callRemoteMethod(method: string, data: string, listener: RemoteListener): void {
        let that: BORemoteRepositoryJQuery = this;
        let ajxSetting: JQueryAjaxSettings = this.createAjaxSettings(method, data);
        // 补充发生错误的事件
        ajxSetting.error = function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): void {
            let opRslt = new OperationResult();
            opRslt.resultCode = -999;
            opRslt.message = string.format("{0} - {1}", textStatus, errorThrown);
            logger.log(emMessageLevel.ERROR,
                "repository: call method [{2}] faild, {0} - {1}.", textStatus, errorThrown, ajxSetting.url);
            listener.onCompleted(opRslt);
        };
        // 补充成功的事件
        ajxSetting.success = function (data: any, textStatus: string, jqXHR: JQueryXHR): void {
            let converter: IDataConverter = that.createDataConverter();
            if (object.isNull(converter)) {
                throw new Error(i18n.prop("msg_invalid_data_converter"));
            }
            let opRslt: any = converter.parsing(data);
            if (object.isNull(opRslt)) {
                throw new Error(i18n.prop("msg_data_converter_parsing_faild"));
            }
            logger.log(emMessageLevel.DEBUG,
                "repository: call method [{2}] sucessful, {0} - {1}.", textStatus, opRslt.message, ajxSetting.url);
            listener.onCompleted(opRslt);
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
        if (object.isNull(this.address)) {
            throw new Error(i18n.prop("msg_invalid_parameter", "address"));
        }
        let methodUrl: string = this.address;
        if (!methodUrl.endsWith("/")) {
            methodUrl = methodUrl + "/";
        }
        methodUrl = methodUrl + method;
        if (!object.isNull(this.token)) {
            methodUrl = methodUrl + string.format("?token={0}", this.token);
        }
        let type:string = "POST";
        if (method.endsWith(".json")) {
            // 获取文件，使用get
            type = "GET";
        }
        let ajxSetting: JQueryAjaxSettings = {
            url: methodUrl,
            type: type,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            data: data
        };
        return ajxSetting;
    }
}

/**
 * 业务仓库应用
 */
export abstract class BORepositoryApplication extends BORemoteRepositoryJQuery {

}


