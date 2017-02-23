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
    ModuleConsole, IViewNavigation, IModuleFunction, IViewShower,
    IApplication, IView, emPlantform, url
} from "../../../ibas/index";
import {
    IMainApp, ILoginApp, ICenterApp, IAboutApp, IHelpApp, ISuggestionApp,
    ISystemsFactory, IBORepositorySystem, IQueryPanel, IQueryPanelView
} from "../../../ibas/bsbas/systems/index";
import { Factories } from "../../../ibas/bsbas/systems/index";
import { BORepositoryShell, BORepositoryShellOffLine } from "../borep/BORepositories";
import { CentersFunc, MainApp, LoginApp, CenterApp, AboutApp, HelpApp, QueryPanel, SuggestionApp } from "./centers/index";


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
        return new AboutApp();
    }
    /** 创建帮助应用 */
    createHelpApp(): IHelpApp {
        return new HelpApp();
    }
    /** 创建建议应用 */
    createSuggestionApp(): ISuggestionApp {
        return new SuggestionApp();
    }
    /** 创建仓库 */
    createRepository(): IBORepositorySystem {
        if (config.get(config.CONFIG_ITEM_OFFLINE_MODE, false)) {
            // 当前处于离线模式
            return new BORepositoryShellOffLine();
        }
        return new BORepositoryShell();
    }
    /** 创建帮助应用 */
    createQueryPanel(): IQueryPanel<IQueryPanelView> {
        return new QueryPanel();
    }
}

/** 模块控制台 */
export class Console extends ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "00000000-ibas-cc01-00000000000000000";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "sys_ibas";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "apps/index";

    constructor() {
        super();
        this.id = Console.CONSOLE_ID;
        this.name = Console.CONSOLE_NAME;
    }
    private _navigation: any;
    /** 视图导航 */
    navigation(): IViewNavigation {
        return this._navigation;
    }
    /** 视图显示者 */
    private _viewShower: IViewShower;
    /** 初始化 */
    protected registers(): void {
        // 初始化系统工厂
        Factories.systemsFactory = new SystemsFactory();
        // 注册功能
        this.register(new CentersFunc(this._viewShower));
    }
    /** 运行 */
    run(): void {
        // 获取根地址
        let rootUrl: string = url.rootUrl(Console.ROOT_FILE_NAME);
        // 加载配置-框架默认
        config.load(string.format("{0}/{1}", rootUrl, Configuration.CONFIG_FILE_NAME));
        // 加载语言-框架默认
        i18n.load(string.format("{0}/shell/resources/languages/shell.{1}.json", rootUrl, i18n.language));
        // 设置资源属性
        this.description = i18n.prop(this.name);
        this.icon = string.format("{0}/shell/resources/logo.png", rootUrl);
        // 先加载ui导航
        let uiModules: string[] = [];
        if (this.plantform === emPlantform.IPAD) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        let that: Console = this;
        require(uiModules, function (ui: any): void {
            // 设置导航
            that._navigation = new ui.Navigation();
            // 设置视图显示者
            that._viewShower = new ui.ViewShower();
            // 调用初始化
            that.initialize();
            // 调用入口应用
            let app: IApplication<IView> = that.default().default();
            app.show();
        });
        // 保留基类方法
        super.run();
    }
}

