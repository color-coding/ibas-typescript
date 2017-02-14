/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/require.d.ts" />
import { ModuleConsole, IModuleConsole } from "../core/Core";
import { BOApplication } from "../applications/Applications";
import { ICenterView, ICenterApp, IUser, IUserModule, IUserPrivilege, IUserRole } from "./Systems.d";
import { Factories } from "./Factories";
import { emMessageType } from "../data/Enums";
import { consolesManager } from "../runtime/Runtime";
import { i18n, logger, emMessageLevel, IOperationResult, object, string, url } from "../../../ibas/bobas/bobas";

/** 应用-中心 */
export class CenterApp extends BOApplication<ICenterView> implements ICenterApp {

    /** 应用标识 */
    static APPLICATION_ID: string = "c1ec9ee1-1138-4358-8323-c579f1e4be37";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_center";

    constructor() {
        super();
        this.id = CenterApp.APPLICATION_ID;
        this.name = CenterApp.APPLICATION_NAME;
    }
    /** 注册视图 */
    protected registerView(): void {

    }
    /** 初始化用户相关 */
    init(user: IUser): void {
        if (object.isNull(user)) {
            return;
        }
        // 加载用户相关
        logger.log(emMessageLevel.DEBUG, "center: initializing user [{0} - {1}]'s modules.", user.id, user.userCode);
        this.view.showStatusMessages(
            emMessageType.INFORMATION,
            i18n.prop("msg_begin_initialize_user_modules", user.userCode, user.userName)
        );
        let that = this;
        let boRep = Factories.systemsFactory.createRepository();
        boRep.fetchUserModules(user.userCode, function (opRslt: IOperationResult<IUserModule>): void {
            try {
                if (opRslt.resultCode !== 0) {
                    throw new Error(opRslt.message);
                }
                for (let module of opRslt.resultObjects) {
                    that.view.showStatusMessages(
                        emMessageType.INFORMATION,
                        i18n.prop("msg_begin_initialize_modules", module.id, module.name)
                    );
                    that.initModuleConsole(module);
                }
            } catch (error) {
                that.view.showMessageBox(error);
            }
        });
    }

    /** 初始化模块控制台 */
    protected initModuleConsole(module: IUserModule) {
        let console: IModuleConsole;
        // 模块入口地址
        let address: string = module.address;
        if (!address.endsWith(".js")) {
            address = address + ".js";
        }
        address = url.normalize(address);
        // 定义模块
        define(
            address,
            ["require", "exports", address],
            function (require: any, exports: any, index: any): void {
                "use strict";
                exports.Index = index;
            });
        let that: CenterApp = this;
        require([address], function (): void {
            // 模块加载成功
            console = consolesManager.get(module.id);
            if (object.isNull(console)) {
                that.view.showStatusMessages(
                    emMessageType.WARNING,
                    i18n.prop("msg_not_found_module_console", module.id, module.name));
                return;
            }
            // 有效模块控制台
            if (console instanceof ModuleConsole) {
                that.view.showModule(console);
            }
        }, function (): void {
            // 模块加载失败
            that.view.showStatusMessages(
                emMessageType.ERROR,
                i18n.prop("msg_not_found_module_console", module.id, module.name));
        });
    }


}