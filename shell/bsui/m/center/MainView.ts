/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../c/center/index.ts" />
namespace shell {
    export namespace ui {
        export namespace m {
            /** 修正应用高度，以让浏览器自动隐藏地址栏 */
            const CONFIG_ITEM_FIX_APP_HEIGHT: string = "fixAppHeight";
            /**
             * 视图-入口
             */
            export class MainView extends c.MainView implements app.IMainView {
                draw(): any {
                    let app: sap.m.App = super.draw();
                    let fixed: boolean = ibas.config.get(CONFIG_ITEM_FIX_APP_HEIGHT);
                    if (ibas.objects.isNull(fixed)) {
                        fixed = false;
                        if (sap.ui.Device.system.phone === true && sap.ui.Device.os.android === true) {
                            fixed = true;
                            let userAgent = navigator.userAgent.toLowerCase();
                            if (userAgent) {
                                if (String(userAgent.match(/MicroMessenger/i)) === "micromessenger") {
                                    fixed = false;
                                } else if (String(userAgent.match(/Alipay/i)) === "alipay") {
                                    fixed = false;
                                }
                            }
                        }
                    }
                    if (fixed === true) {
                        if (document.documentElement.clientHeight < screen.availHeight) {
                            app.setHeight(document.documentElement.clientWidth / screen.availWidth * screen.availHeight - 26 + 'px');
                        }
                    }
                    return app;
                }
            }
        }
    }
}