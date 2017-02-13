/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../../ibas/3rdparty/require.d.ts" />
import {
    ModuleConsole, IViewNavigation, IModuleFunction,
    IApplication, IView, emPlantform, config, string, Configuration, i18n
} from "../../../../ibas/bsbas/bsbas";

/** 模块控制台 */
export class Console extends ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "test-0";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "test_module_a";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "module_a/bsapp/Console.js";

    constructor() {
        super();
        this.id = Console.CONSOLE_ID;
        this.name = Console.CONSOLE_NAME;
    }

    private _navigation: any;
    /** 创建视图导航 */
    navigation(): IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    protected init(): void {
        // 获取根地址
        let rootUrl: string = config.rootUrl(Console.ROOT_FILE_NAME);
        // 加载语言-框架默认
        i18n.load(string.format("{0}/module_a/resources/languages/module_a.{1}.json", rootUrl, i18n.language));
        // 设置资源属性
        this.description = i18n.prop(this.name);
        this.icon = "sap-icon://employee";
        // 注册功能



    }
    /** 运行 */
    run(): void {
        // 先加载ui导航
        let that: Console = this;
        let uiBack: Function = function (ui: any) {
            // 设置导航
            that._navigation = new ui.Navigation();
            // 初始化
            that.init();
            // 调用入口应用
            let app: IApplication<IView> = that.default().default();
            app.show();
        };
        // 加载ui
        let uiModules: string[] = [];
        if (this.plantform === emPlantform.IPAD) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        require(uiModules, uiBack);
    }
}

