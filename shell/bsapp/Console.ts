/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../ibas/index.d.ts" />
/// <reference path="../borep/index.ts" />
/// <reference path="./center/index.ts" />

namespace shell {
    export namespace app {
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 根文件名称 */
            static ROOT_FILE_NAME: string = "shell/index";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            private _navigation: ibas.IViewNavigation;
            /** 视图导航 */
            navigation(): ibas.IViewNavigation {
                return this._navigation;
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new CenterFunc(this.viewShower));
            }
            /** 运行 */
            run(): void {
                // 获取壳根地址
                let rootUrl: string = ibas.urls.rootUrl(Console.ROOT_FILE_NAME);
                // 加载语言-壳
                ibas.i18n.load(ibas.strings.format("{0}/resources/languages/shell.json", rootUrl));
                ibas.i18n.load(ibas.strings.format("{0}/resources/languages/enums.json", rootUrl));
                // 设置资源属性
                this.description = ibas.i18n.prop(this.name);
                this.icon = ibas.strings.format("{0}/resources/images/logo_small.png", rootUrl);
                // 加载视图显示者
                let uiModules: string[] = [];
                if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)) {
                    if (this.plantform === ibas.emPlantform.PHONE) {
                        // 使用m类型视图
                        uiModules.push("index.ui.m");
                    }
                }
                // 默认使用视图
                if (uiModules.length === 0) {
                    // 使用c类型视图
                    uiModules.push("index.ui.c");
                }
                let that: this = this;
                this.loadUI(uiModules, function (ui: any): void {
                    // 设置视图显示者
                    that.viewShower = new ui.ViewShower();
                    // 设置导航
                    that._navigation = new ui.Navigation();
                    // 调用初始化
                    that.initialize();
                    // 调用入口应用
                    let app: ibas.IApplication<ibas.IView> = that.default().default();
                    app.show();
                });
                // 保留基类方法
                super.run();
            }
        }

    }
}