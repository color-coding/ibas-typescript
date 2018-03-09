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
             * 视图-demo
             */
            export class DemoServiceView extends ibas.BODialogView implements app.IDemoServiceView {
                drawBars(): any {
                    let that: this = this;
                    return [
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("shell_exit"),
                            type: sap.m.ButtonType.Transparent,
                            // icon: "sap-icon://inspect-down",
                            press: function (): void {
                                that.fireViewEvents(that.closeEvent);
                            }
                        }),
                    ];
                }
                /** 绘制视图 */
                draw(): any {
                    return null;
                }
            }
        }
    }
}