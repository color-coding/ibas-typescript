/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";

/**
 * 关于应用
 */
export class AboutApp extends ibas.AboutApp<IAboutView> {

    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        super.viewShowed();
        let address: string = ibas.url.normalize(".../version.json");
        let that:this = this;
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            error: function (xhr: JQueryXHR, status: string, error: string): void {
                console.warn(ibas.string.format("about: get version file [{2}] faild [{0} - {1}].", status, error, address));
            },
            success: function (data: any): void {
                console.log(ibas.string.format("about: get version file [{0}] successful.", address));
                if (data !== undefined && data !== null) {
                    that.view.showVersions(data);
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }
}
/** 视图-关于 */
export interface IAboutView extends ibas.IAboutView {

}