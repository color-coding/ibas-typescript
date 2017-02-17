/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ModuleFunction, IApplication, IView, i18n,string,url
} from "../../../../../ibas/bsbas/index";
import { DemoListApp } from "./DemoListApp";
import { DemoUrlApp } from "./DemoUrlApp";

/** 功能-演示 */
export class DemoFunc extends ModuleFunction {
    static FUNCTION_ID = "754a9a69-9c51-43af-acf4-ba21120ff8e1";
    static FUNCTION_NAME = "module_a_func_one";
    static ROOT_FILE_NAME: string = "module_a/index";
    constructor() {
        super();
        this.id = DemoFunc.FUNCTION_ID;
        this.name = DemoFunc.FUNCTION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): IApplication<IView> {
        // 获取根地址
        let rootUrl: string = url.rootUrl(DemoFunc.ROOT_FILE_NAME);
        // 加载语言-框架默认
        i18n.load(string.format("{0}/resources/languages/bo/salesorder.json", rootUrl, i18n.language));
        let app: DemoListApp = new DemoListApp();
        app.navigation = this.navigation;
        return app;
    }
}
/** 功能-演示 */
export class DemoUrlFunc extends ModuleFunction {
    static FUNCTION_ID = "1e70db7a-1e07-4c7d-8149-c61b1b72e5ed";
    static FUNCTION_NAME = "module_a_func_url";
    constructor() {
        super();
        this.id = DemoUrlFunc.FUNCTION_ID;
        this.name = DemoUrlFunc.FUNCTION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): IApplication<IView> {
        let app: DemoUrlApp = new DemoUrlApp();
        app.navigation = this.navigation;
        return app;
    }
}

