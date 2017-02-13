/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/require.d.ts" />
import {
    i18n, config, string, Configuration,
    ModuleConsole, IViewNavigation, IModuleFunction,
    IApplication, IView, emPlantform
} from "../../../ibas/bsbas/bsbas";
import {
    IMainApp, ILoginApp, ICenterApp, IAboutApp, IHelpApp,
    ISystemsFactory, IBORepositorySystem
} from "../../../ibas/bsbas/systems/Systems.d";
import { Factories } from "../../../ibas/bsbas/systems/Systems";
import { BORepositoryShell, BORepositoryShellOffLine } from "../borep/BORepositories";
import { ViewShowerDefault } from "./ViewShowers";
import { MainApp } from "./centers/MainApp";
import { LoginApp } from "./centers/LoginApp";
import { CenterApp } from "./centers/CenterApp";


/** 系统工厂 */
export class SystemsFactory implements ISystemsFactory {
    /** 创建入口应用 */
    createMainApp(): IMainApp {
        return new MainApp();
    }
    /** 创建登陆应用 */
    createLoginApp(): ILoginApp {
        return new LoginApp();
    }
    /** 创建系统中心应用 */
    createCenterApp(): ICenterApp {
        return new CenterApp();
    }
    /** 创建关于应用 */
    createAboutApp(): IAboutApp {
        return null;
    }
    /** 创建帮助应用 */
    createHelpApp(): IHelpApp {
        return null;
    }
    /** 创建仓库 */
    createRepository(): IBORepositorySystem {
        if (config.get(config.CONFIG_ITEM_OFFLINE_MODE, false)) {
            // 当前处于离线模式
            return new BORepositoryShellOffLine();
        }
        return new BORepositoryShell();
    }
}

/** 模块控制台 */
export class Console extends ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "00000000-ibas-cc01-00000000000000000";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "sys_ibas";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "shell/bsapp/Console.js";

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
        // 初始化系统工厂
        Factories.systemsFactory = new SystemsFactory();
        // 获取根地址
        let rootUrl: string = config.rootUrl(Console.ROOT_FILE_NAME);
        // 加载配置-框架默认
        config.load(string.format("{0}/{1}", rootUrl, Configuration.CONFIG_FILE_NAME));
        // 加载语言-框架默认
        i18n.load(string.format("{0}/shell/resources/languages/shell.{1}.json", rootUrl, i18n.language));
        // 设置资源属性
        this.description = i18n.prop(this.name);
        this.icon = "../resources/logo.png";
        // 注册功能
        let func: IModuleFunction = this.createFunction();
        func.name = "sys_shell_func_centers";
        func.description = i18n.prop(func.name);
        let mainApp: IMainApp = Factories.systemsFactory.createMainApp();
        mainApp.viewShower = new ViewShowerDefault();
        func.register(mainApp);
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

