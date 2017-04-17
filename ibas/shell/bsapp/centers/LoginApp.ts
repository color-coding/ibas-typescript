/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";

/** 应用-登陆 */
export class LoginApp extends sys.LoginApp<ILoginView> {

    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.changeLanguageEvent = this.changeLanguage;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        super.viewShowed();
        // 获取支持的语言列表
        let address: string = ibas.url.normalize(".../config.json");
        let that: this = this;
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data: any): void {
                if (!ibas.objects.isNull(data)
                    && !ibas.objects.isNull(data.languages)
                    && Array.isArray(data.languages)) {
                    that.view.displayLanguages(data.languages);
                    that.view.language = ibas.i18n.language;
                }
            },
        };
        jQuery.ajax(JQryAjxSetting);
    }

    changeLanguage(): void {
        // 重置语言编码
        ibas.i18n.language = this.view.language;
        // 重置视图
        this.destroy();
        this.show();
    }
}
/** 视图-登陆 */
export interface ILoginView extends sys.ILoginView {
    /** 显示语言列表 */
    displayLanguages(list: string[]): void;
    /** 改变语言 */
    changeLanguageEvent: Function;
    /** 语言 */
    language: string;
}