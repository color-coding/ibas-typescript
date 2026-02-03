/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace c {
            /**
             * 视图-帮助（替换原）
             */
            export class HelpView extends ibas.View implements shell.app.IHelpView {

                isInside: boolean;

                url: string;

                /** 绘制视图 */
                draw(): any {
                    return this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSpacer(),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_refresh"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://attachment-html",
                                    press: function (): void {
                                    }
                                }),
                            ]
                        }),
                        content: [
                        ]
                    });
                }

                private page: sap.m.Page;
            }
        }
    }
}