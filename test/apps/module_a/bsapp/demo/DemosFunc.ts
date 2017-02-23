/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../../ibas/index";
import { DemoListApp } from "./DemoListApp";
import { DemoUrlApp } from "./DemoUrlApp";

/** 功能-演示 */
export class DemoFunc extends ibas.ModuleFunction {
    static FUNCTION_ID = "754a9a69-9c51-43af-acf4-ba21120ff8e1";
    static FUNCTION_NAME = "module_a_func_demo";
    static ROOT_FILE_NAME: string = "module_a/index";
    constructor() {
        super();
        this.id = DemoFunc.FUNCTION_ID;
        this.name = DemoFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        // 获取根地址
        let rootUrl: string = ibas.url.rootUrl(DemoFunc.ROOT_FILE_NAME);
        // 加载语言-框架默认
        ibas.i18n.load(ibas.string.format("{0}/resources/languages/bo/salesorder.json", rootUrl, ibas.i18n.language));
        let app: DemoListApp = new DemoListApp();
        app.navigation = this.navigation;
        return app;
    }
}
/** 功能-演示 */
export class DemoUrlFunc extends ibas.ModuleFunction {
    static FUNCTION_ID = "1e70db7a-1e07-4c7d-8149-c61b1b72e5ed";
    static FUNCTION_NAME = "module_a_func_url";
    constructor() {
        super();
        this.id = DemoUrlFunc.FUNCTION_ID;
        this.name = DemoUrlFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: DemoUrlApp = new DemoUrlApp();
        app.navigation = this.navigation;
        return app;
    }
}

