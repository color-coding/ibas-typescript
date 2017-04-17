/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../../../openui5/typings/index.d.ts" />
import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import { IDemoResidentView } from "../../../bsapp/others/index";

/**
 * 视图-建议
 */
export class DemoResidentView extends ibas.BOResidentView implements IDemoResidentView {
    /** 绘制工具条视图 */
    darwBar(): any {
        let that = this;
        // 不重复创建工具条钮
        if (ibas.objects.isNull(this.bar)) {
            this.bar = new sap.m.Button("", {
                icon: "sap-icon://fob-watch",
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
        let form = new sap.ui.layout.VerticalLayout("", {
            class: "sapUiContentPadding",
            width: "100%",
            content: [
                new sap.m.List("", {
                    class: "sapContrast sapContrastPlus",
                    items: [
                        new sap.m.NotificationListGroup("", {
                            title: "SO-0000001的审批",
                            description: "订单内容简讯",
                            datetime: "1 hour",
                            collapsed: true,
                            autoPriority: true,
                            showCloseButton: false,
                            authorName: "业务员：张三",
                            authorPicture: "sap-icon://person-placeholder",
                            items: [
                                new sap.m.NotificationListItem("", {
                                    title: "销售经理审批",
                                    description: "已拒绝，没钱了",
                                    showCloseButton: false,
                                    datetime: "1 hour",
                                    authorPicture: "sap-icon://person-placeholder",
                                    authorName: "经理：张四",
                                })
                            ],
                            buttons: [,
                                new sap.m.Button("", {
                                    text: "详情",
                                    type: sap.m.ButtonType.Default
                                }),
                                new sap.m.Button("", {
                                    text: "批准",
                                    type: sap.m.ButtonType.Accept
                                }),
                                new sap.m.Button("", {
                                    text: "拒绝",
                                    type: sap.m.ButtonType.Reject
                                })
                            ]
                        }),
                    ]
                }),
            ]
        });
        return form;
    }
}