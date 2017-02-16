/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/require.d.ts" />
import { ModuleConsole, IModuleConsole, IModuleFunction, IApplication, IView, IViewShower } from "../core/Core";
import { BOApplication } from "../applications/Applications";
import { ICenterView, ICenterApp, IUser, IUserModule, IUserPrivilege, IUserRole } from "./Systems.d";
import { Factories } from "./Factories";
import { emMessageType } from "../data/Enums";
import { consolesManager } from "../runtime/Runtime";
import { i18n, logger, emMessageLevel, IOperationResult, object, string, url } from "../../../ibas/bobas/bobas";

/** 应用-中心 */
export abstract class CenterApp extends BOApplication<ICenterView> implements ICenterApp {

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
        // 注册视图事件
        this.view.activateFunctionsEvent = this.activateFunctions;
        this.view.aboutEvent = this.about;
        this.view.helpEvent = this.help;
        this.view.destroyEvent = this.destroy;
    }
    /** 清理资源 */
    destroy(): void {
        // 重写清理方法
        this.view.destroy(this.view);
    }
    /** 运行 */
    run(): void {
        super.run();
        let user: IUser = arguments[0];
        // 初始化
        this.init(user);
    }
    /** 帮助 */
    private help(): void {
        let app: IApplication<IView> = Factories.systemsFactory.createHelpApp();
        app.navigation = this.navigation;
        app.viewShower = this.view;
        app.run();
    }
    /** 关于 */
    private about(): void {
        let app: IApplication<IView> = Factories.systemsFactory.createAboutApp();
        app.navigation = this.navigation;
        app.viewShower = this.view;
        app.run();
    }
    /** 初始化用户相关 */
    private init(user: IUser): void {
        if (object.isNull(user)) {
            return;
        }
        this.view.showUser(user);
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
    private functionMap: Map<string, IModuleFunction>;
    /** 注册运行的功能 */
    protected registerFunctions(module: IModuleConsole): void {
        if (object.isNull(this.functionMap)) {
            this.functionMap = new Map<string, IModuleFunction>();
        }
        for (let item of module.functions()) {
            this.functionMap.set(item.id, item);
        }
    }

    /** 初始化模块控制台 */
    protected initModuleConsole(module: IUserModule) {
        let console: IModuleConsole;
        // 模块入口地址
        let address: string = module.address;
        /*
           if (!address.endsWith(".js")) {
               address = address + ".js";
           }
          */
        // 此处存在问题，
        // 当地址以http开头requirejs不在修正引用文件名称，即：.js不添加。
        // 关联引用也不修正名称。
        // address = url.normalize(address);
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
                console.addListener(function (): void {
                    that.registerFunctions(console);
                });
                that.view.showModule(console);
            }
        }, function (): void {
            // 模块加载失败
            that.view.showStatusMessages(
                emMessageType.ERROR,
                i18n.prop("msg_not_found_module_console", module.id, module.name));
        });
    }

    /** 视图事件-激活功能 */
    private activateFunctions(id: string): void {
        if (object.isNull(this.functionMap)) {
            return;
        }
        if (this.functionMap.has(id)) {
            let func: IModuleFunction = this.functionMap.get(id);
            let app: IApplication<IView> = func.default();
            if (object.isNull(app.navigation)) {
                app.navigation = func.navigation;
            }
            if (object.isNull(app.viewShower)) {
                app.viewShower = this.view;
            }
            app.run();
        }
    }

}