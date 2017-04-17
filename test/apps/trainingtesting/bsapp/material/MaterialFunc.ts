/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { MaterialListApp } from "./MaterialListApp";

export class MaterialFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "8a1c33cd-5f3a-40c7-85e3-f25200e48a6a";
    /** 功能名称 */
    static FUNCTION_NAME = "trainingtesting_func_material";
    /** 根文件名称 */
    static ROOT_FILE_NAME: string = "trainingtesting/index";
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialFunc.FUNCTION_ID;
        this.name = MaterialFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        // 获取根地址
        let rootUrl: string = ibas.url.rootUrl(MaterialFunc.ROOT_FILE_NAME);
        // 加载语言-框架默认
        ibas.i18n.load(ibas.strings.format("{0}/resources/languages/bo/Material.{1}.json", rootUrl, ibas.i18n.language));
        let app: MaterialListApp = new MaterialListApp();
        app.navigation = this.navigation;
        return app;
    }
}
