/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../borep/index.ts" />
/// <reference path="./material/index.ts" />
/// <reference path="./customer/index.ts" />
/// <reference path="./salesorder/index.ts" />
/// <reference path="./others/index.ts" />

namespace trainingtesting {
    export namespace app {
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            private _navigation: ibas.IViewNavigation;
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this._navigation;
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new MaterialFunc());
                this.register(new CustomerFunc());
                this.register(new SalesOrderFunc());
                // 注册服务应用
                this.register(new MaterialChooseServiceMapping());
                this.register(new MaterialLinkServiceMapping());
                this.register(new CustomerChooseServiceMapping());
                this.register(new CustomerLinkServiceMapping());
                this.register(new SalesOrderChooseServiceMapping());
                this.register(new SalesOrderLinkServiceMapping());
                // 注册常驻应用

            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                ibas.i18n.load(this.rootUrl + "resources/languages/trainingtesting.json");
                ibas.i18n.load(this.rootUrl + "resources/languages/bos.json");
                // 设置资源属性
                this.description = ibas.i18n.prop(this.name.toLowerCase());
                this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
                // 先加载ui导航
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
                    // 设置导航
                    that._navigation = new ui.Navigation();
                    // 调用初始化
                    that.initialize();
                });
                // 保留基类方法
                super.run();
            }
        }
        /** 模块控制台 */
        export class ConsoleOthers extends ibas.ModuleConsole {
            /** 模块-标识 */
            static CONSOLE_ID: string = "e6424319-a311-440e-bc89-a825f82d5848";
            /** 模块-名称 */
            static CONSOLE_NAME: string = "TrainingTestingOthers";
            /** 模块-版本 */
            static CONSOLE_VERSION: string = "0.1.0";
            /** 构造函数 */
            constructor() {
                super();
                this.id = ConsoleOthers.CONSOLE_ID;
                this.name = ConsoleOthers.CONSOLE_NAME;
                this.version = ConsoleOthers.CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            private _navigation: ibas.IViewNavigation;
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this._navigation;
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new DemoUrlFunc());
                this.register(new DemoTabFunc());
                this.register(new DemoMapFunc());
                this.register(new DemoShellFunc());
                this.register(new DemoDataFunc());
                // 注册服务应用
                this.register(new DemoServiceMapping());
                // 注册常驻应用
                this.register(new DemoResidentApp());

            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                ibas.i18n.load(this.rootUrl + "resources/languages/trainingtestingothers.json");
                // 设置资源属性
                this.description = ibas.i18n.prop(this.name.toLowerCase());
                // 先加载ui导航
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
                    // 设置导航
                    that._navigation = new ui.Navigation();
                    // 调用初始化
                    that.initialize();
                });
                // 保留基类方法
                super.run();
            }
        }
    }
}
