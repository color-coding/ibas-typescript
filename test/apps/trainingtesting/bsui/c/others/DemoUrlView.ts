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
            /** 配置项目-全屏模式 */
            export const CONFIG_ITEM_FULL_SCREEN: string = "fullScreen";
            /** 获取窗口宽度 */
            let getWindowWidth: Function = function (tab: boolean): number {
                let consume: number = 96;
                return window.innerWidth - consume;
            };
            /** 获取窗口高度 */
            let getWindowHeight: Function = function (tab: boolean): number {
                let consume: number = 86;
                if (ibas.config.get(CONFIG_ITEM_FULL_SCREEN, false)) {
                    consume = consume - 50;
                }
                if (tab) {
                    consume = consume + 50;
                }
                return window.innerHeight - consume;
            };

            /**
             * 视图-demo
             */
            export class DemoUrlView extends ibas.UrlView implements app.IDemoUrlView {
                /** 绘制视图 */
                draw(): any {
                    return null;
                }
            }
            /**
             * 视图-demo
             */
            export class DemoTabUrlView extends ibas.TabView implements app.IDemoUrlView {
                /** 内部打开 */
                isInside: boolean;
                /** 地址 */
                url: string;
                /** 绘制视图 */
                draw(): any {
                    this.form = new sap.ui.layout.form.SimpleForm("", {
                        content: [
                        ]
                    });
                    let html: string = ibas.strings.format(
                        `<iframe src="{0}" width="{1}" height="{2}" style="border:0px;" scrolling="no"></iframe>`,
                        this.url, getWindowWidth(false), getWindowHeight(false));
                    this.form.addContent(
                        new sap.ui.core.HTML("", {
                            content: html,
                            preferDOM: false,
                            sanitizeContent: true,
                            visible: true,
                        })
                    );
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: null,
                        content: [this.form]
                    });
                    this.id = this.page.getId();
                    return this.page;
                }
                private page: sap.m.Page;
                private form: sap.ui.layout.form.SimpleForm;
            }
        }
    }
}