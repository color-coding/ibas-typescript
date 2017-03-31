/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/require.d.ts" />
import * as ibas from "../../../ibas/index";
import { BORepositoryShell, BORepositoryShellOffLine } from "../borep/BORepositories";
import { CentersFunc, MainApp, LoginApp, CenterApp, AboutApp, HelpApp, QueryPanel, SuggestionApp } from "./centers/index";


/** 系统工厂 */
export class SystemsFactory implements ibas.ISystemsFactory {
    /** 创建入口应用 */
    createMainApp(): ibas.IMainApp {
        return new MainApp();
    }
    /** 创建登陆应用 */
    createLoginApp(): ibas.ILoginApp {
        return new LoginApp();
    }
    /** 创建系统中心应用 */
    createCenterApp(): ibas.ICenterApp {
        return new CenterApp();
    }
    /** 创建关于应用 */
    createAboutApp(): ibas.IAboutApp {
        return new AboutApp();
    }
    /** 创建帮助应用 */
    createHelpApp(): ibas.IHelpApp {
        return new HelpApp();
    }
    /** 创建建议应用 */
    createSuggestionApp(): ibas.ISuggestionApp {
        return new SuggestionApp();
    }
    /** 创建仓库 */
    createRepository(): ibas.IBORepositorySystem {
        if (ibas.config.get(ibas.config.CONFIG_ITEM_OFFLINE_MODE, false)) {
            // 当前处于离线模式
            return new BORepositoryShellOffLine();
        }
        return new BORepositoryShell();
    }
    /** 创建帮助应用 */
    createQueryPanel(): ibas.IQueryPanel<ibas.IQueryPanelView> {
        return new QueryPanel();
    }
}

/** 模块控制台 */
export class Console extends ibas.ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "00000000-ibas-cc01-00000000000000000";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "sys_ibas";

    constructor() {
        super();
        this.id = Console.CONSOLE_ID;
        this.name = Console.CONSOLE_NAME;
    }
    private _navigation: any;
    /** 视图导航 */
    navigation(): ibas.IViewNavigation {
        return this._navigation;
    }
    /** 视图显示者 */
    private _viewShower: ibas.IViewShower;
    /** 初始化 */
    protected registers(): void {
        // 初始化系统工厂
        ibas.Factories.systemsFactory = new SystemsFactory();
        // 注册功能
        this.register(new CentersFunc(this._viewShower));
    }
    /** 初始化平台 */
    initPlatform(): void {
        let plantform: ibas.emPlantform = ibas.emPlantform.DESKTOP;
        if (!ibas.object.isNull(navigator) && !ibas.object.isNull(navigator.userAgent)) {
            let agent: string = navigator.userAgent.toLowerCase();
            if (agent.indexOf("android") >= 0
                || agent.indexOf("iphone") >= 0) {
                plantform = ibas.emPlantform.PHONE;
            } else if (agent.indexOf("ipad") >= 0) {
                plantform = ibas.emPlantform.TABLET;
            }
        }
        ibas.config.set(ibas.ModuleConsole.CONFIG_ITEM_PLANTFORM, plantform);
    }
    /** 运行 */
    run(): void {
        // this.initPlatform();
        // 获取根地址
        let rootUrl: string = ibas.url.rootUrl(undefined);
        // 加载配置-框架默认
        ibas.config.load(ibas.string.format("{0}/{1}", rootUrl, ibas.Configuration.CONFIG_FILE_NAME));
        // 加载语言-框架默认
        ibas.i18n.load(ibas.string.format("{0}/resources/languages/shell.{1}.json", rootUrl, "{0}"));
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name);
        this.icon = ibas.string.format("{0}/resources/images/logo_small.png", rootUrl);
        // 先加载ui导航
        let uiModules: string[] = [];
        if (!ibas.config.get(ibas.config.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
            && this.plantform === ibas.emPlantform.PHONE) {
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
            let app: ibas.IApplication<ibas.IView> = that.default().default();
            app.show();
        });
        // 保留基类方法
        super.run();
    }
}

