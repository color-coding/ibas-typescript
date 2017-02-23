/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    i18n, config, string, Configuration,
    ModuleConsole, IViewNavigation, IModuleFunction, IViewShower,
    IApplication, IView, emPlantform, url
} from "../../../../ibas/index";
import { AboutApp as AbstractAboutApp } from "../../../../ibas/bsbas/systems/index";

/**
 * 关于应用
 */
export class AboutApp extends AbstractAboutApp {

    /** 视图显示后 */
    protected viewShowed(): void {
        let address: string = url.normalize(".../shell/version.json");
        let that = this;
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            error: function (xhr: JQueryXHR, status: string, error: string): void {
                console.warn(string.format("about: get version file [{2}] faild [{0} - {1}].", status, error, address));
            },
            success: function (data: any): void {
                console.log(string.format("about: get version file [{0}] successful.", address));
                if (data !== undefined && data !== null) {
                    that.view.showVersions(data);
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }
}