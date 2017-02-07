/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/require.d.ts" />
import {
    i18n
} from "../../../ibas/bobas/bobas";
import {
    ModuleConsole, IViewNavigation, IModuleFunction,
    IApplication, IView, emPlantform
} from "../../../ibas/bsbas/bsbas";
import { MainApp } from "./centers/MainApp";

/**
 * 视图导航
 */
export class Console extends ModuleConsole {
    private _navigation: any;
    /** 创建视图导航 */
    navigation(): IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    init(): void {
        let func: IModuleFunction = this.createFunction();
        func.name = "sys_func_centers";
        func.description = i18n.prop(func.name);
        func.register(new MainApp());
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

