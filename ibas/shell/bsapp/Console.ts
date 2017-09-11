﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/require.d.ts" />
import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";
import { BORepositoryShell, BORepositoryShellOffline } from "../borep/BORepositories";
import { CentersFunc, MainApp, LoginApp, CenterApp, AboutApp, HelpApp, QueryPanel } from "./centers/index";


/** 系统工厂 */
export class SystemsFactory implements sys.ISystemsFactory {
    /** 创建入口应用 */
    createMainApp(): sys.IMainApp {
        return new MainApp();
    }
    /** 创建登陆应用 */
    createLoginApp(): sys.ILoginApp {
        return new LoginApp();
    }
    /** 创建系统中心应用 */
    createCenterApp(): sys.ICenterApp {
        return new CenterApp();
    }
    /** 创建关于应用 */
    createAboutApp(): sys.IAboutApp {
        return new AboutApp();
    }
    /** 创建帮助应用 */
    createHelpApp(): sys.IHelpApp {
        return new HelpApp();
    }
    /** 创建仓库 */
    createRepository(): sys.IBORepositorySystem {
        // 全局离线状态
        let offline: boolean = ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false);
        // 壳仓库离线状态
        offline = ibas.config.get(
            ibas.CONFIG_ITEM_OFFLINE_MODE + "|" + BORepositoryShell.name, offline);
        if (offline) {
            // 当前处于离线模式
            return new BORepositoryShellOffline();
        }
        return new BORepositoryShell();
    }
    /** 创建帮助应用 */
    createQueryPanel(): sys.IQueryPanel<sys.IQueryPanelView> {
        return new QueryPanel();
    }
}

/** 模块控制台 */
export class Console extends ibas.ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "00000000-ibas-cc01-00000000000000000";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "ibas.shell";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "shell/index";
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
    /** 初始化 */
    protected registers(): void {
        // 初始化系统工厂
        sys.Factories.systemsFactory = new SystemsFactory();
        // 注册功能
        this.register(new CentersFunc(this.viewShower));
    }
    /** 运行 */
    run(): void {
        // 获取壳根地址
        let rootUrl: string = ibas.urls.rootUrl(Console.ROOT_FILE_NAME);
        // 加载配置-壳
        ibas.config.load(ibas.strings.format("{0}/{1}", rootUrl, ibas.CONFIG_FILE_NAME));
        // 加载语言-壳
        ibas.i18n.load(ibas.strings.format("{0}/resources/languages/shell.json", rootUrl));
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name);
        this.icon = ibas.strings.format("{0}/resources/images/logo_small.png", rootUrl);
        // 加载网站配置文件
        let siteUrl: string = ibas.urls.rootUrl(undefined);
        if (siteUrl !== rootUrl) {
            // 网站与壳地址不同，加载网站配置
            ibas.config.load(ibas.strings.format("{0}/{1}", siteUrl, ibas.CONFIG_FILE_NAME));
        }
        // 加载视图显示者
        let that: this = this;
        require(["../bsui/ViewShower"], function (ViewShower: any): void {
            // 设置视图显示者
            that.viewShower = new ViewShower.default();
            // 加载ui导航
            let uiModules: string[] = [];
            if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
                && that.plantform === ibas.emPlantform.PHONE) {
                // 使用m类型视图
                uiModules.push("../bsui/m/Navigation");
            } else {
                // 使用c类型视图
                uiModules.push("../bsui/c/Navigation");
            }
            require(uiModules, function (ui: any): void {
                // 设置导航
                that._navigation = new ui.default();
                // 调用初始化
                that.initialize();
                // 调用入口应用
                let app: ibas.IApplication<ibas.IView> = that.default().default();
                app.show();
            });
        });
        // 保留基类方法
        super.run();
    }
}

