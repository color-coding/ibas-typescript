/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";
/**
 * 视图-建议
 */
export class SuggestionView extends ibas.BOResidentView implements sys.ISuggestionView {
    /** 绘制工具条视图 */
    darwBar(): any {
        let that: this = this;
        // 不重复创建工具条钮
        if (ibas.objects.isNull(this.bar)) {
            this.bar = new sap.m.Button("", {
                icon: "sap-icon://discussion",
                type: sap.m.ButtonType.Transparent,
                press: function (): void {
                    that.fireViewEvents(that.showFullViewEvent);
                }
            });
        }
        return this.bar;
    }
    private bar: sap.m.Button;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 绘制视图 */
    darw(): any {
        return new sap.m.FeedInput("", {
            maxLength: 0,
            placeholder: ibas.i18n.prop("sys_shell_ui_submit_suggestion"),
            icon: "",// 当前用户的头像
            showIcon: true,
            iconDensityAware: true,
            post: function (): void {
                // 提交，发消息和自动截屏
                // 截取content元素内容
                require(
                    ["../../../../../ibas/3rdparty/html2canvas.js"],
                    function (): void {
                        html2canvas(document.getElementById("content"),
                            {
                                background: "ibas sreenshot",
                                allowTaint: true // 允许跨域
                            });
                    });
            }
        })
    }
}