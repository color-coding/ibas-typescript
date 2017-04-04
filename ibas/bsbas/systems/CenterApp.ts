/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/index.d.ts" />
import {
    i18n, logger, emMessageLevel, IOperationResult, url,
    object, config, string, BORepositoryApplication, requires
} from "../../bobas/index";
import {
    ModuleConsole, IModuleConsole, IModuleFunction, IApplication,
    IView, IBarView, IBarApplication, IViewShower, Application, IMessgesCaller
} from "../core/index";
import { emMessageType, emPrivilegeSource, emAuthoriseType, emMessageAction } from "../data/index";
import { consolesManager, variablesManager } from "../runtime/index";
import {
    BOResidentApplication, BOApplication,
    BOChooseApplication, BOListApplication,
    BOViewApplication, BOEditApplication
} from "../applications/index";
import {
    ICenterView, ICenterApp, IBORepositorySystem,
    IUser, IUserModule, IUserPrivilege
} from "./Systems.d";
import { Factories } from "./Factories";

/** 应用-中心 */
export abstract class CenterApp<T extends ICenterView> extends Application<T> implements ICenterApp, IViewShower {

    /** 应用标识 */
    static APPLICATION_ID: string = "c1ec9ee1-1138-4358-8323-c579f1e4be37";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_center";

    constructor() {
        super();
        this.id = CenterApp.APPLICATION_ID;
        this.name = CenterApp.APPLICATION_NAME;
        this.description = i18n.prop(this.name);
    }
    show(view: IView): void;
    show(): void;
    /** 显示视图 */
    show(): void {
        if (arguments.length === 0) {
            // 显示自身视图时
            if (!object.isNull(this.viewShower)) {
                if (object.isNull(this.view)) {
                    throw new Error(i18n.prop("msg_invalid_view", this.name));
                }
                if (!object.isNull(this.description)) {
                    this.view.title = this.description;
                } else {
                    this.view.title = this.name;
                }
                this.viewShower.show(this.view);
                this.afterViewShow();
            } else {
                throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
            }
        } else {
            // 显示应用视图时
            this.showView(arguments[0]);
        }
    }
    /** 视图显示后 */
    private afterViewShow(): void {
        if (object.isNull(this.view)) {
            throw new Error(i18n.prop("msg_invalid_view", this.name));
        }
        this.view.isDisplayed = true;
        this.viewShowed();
    }
    /** 注册视图 */
    protected registerView(): void {
        // 注册视图事件
        this.view.activateFunctionsEvent = this.activateFunctions;
        this.view.aboutEvent = this.about;
        this.view.helpEvent = this.help;
        this.view.closeEvent = this.close;
    }
    /** 运行 */
    run(): void {
        this.show();
        let user: IUser = arguments[0];
        // 初始化
        this.init(user);
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 显示常驻应用
        // 显示建议应用
        let app: IBarApplication<IBarView> = Factories.systemsFactory.createSuggestionApp();
        app.navigation = this.navigation;
        app.viewShower = this;
        this.view.showResidentView(app.view);
    }
    /** 帮助 */
    private help(): void {
        let app: IApplication<IView> = Factories.systemsFactory.createHelpApp();
        app.navigation = this.navigation;
        app.viewShower = this;
        app.run();
    }
    /** 关于 */
    private about(): void {
        let app: IApplication<IView> = Factories.systemsFactory.createAboutApp();
        app.navigation = this.navigation;
        app.viewShower = this;
        app.run();
    }
    /** 初始化用户相关 */
    private init(user: IUser): void {
        if (object.isNull(user)) {
            return;
        }
        // 注册运行变量
        variablesManager.register(variablesManager.VARIABLE_NAME_USER_ID, user.id);
        variablesManager.register(variablesManager.VARIABLE_NAME_USER_CODE, user.code);
        variablesManager.register(variablesManager.VARIABLE_NAME_USER_NAME, user.name);
        // 显示当前用户
        this.view.showUser(user);
        // 加载用户相关
        logger.log(emMessageLevel.DEBUG, "center: initializing user [{0} - {1}]'s modules.", user.id, user.code);
        this.view.showStatusMessage(
            emMessageType.INFORMATION,
            i18n.prop("msg_initialize_user_modules", user.code, user.name)
        );
        let that: this = this;
        let boRep: IBORepositorySystem = Factories.systemsFactory.createRepository();
        boRep.fetchUserModules({
            user: user.code,
            onCompleted: function (opRslt: IOperationResult<IUserModule>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    for (let module of opRslt.resultObjects) {
                        that.view.showStatusMessage(
                            emMessageType.INFORMATION,
                            i18n.prop("msg_initialize_modules", module.id, module.name)
                        );
                        that.initModuleConsole(module);
                    }
                } catch (error) {
                    that.view.showMessageBox(error);
                }
            }
        });
        boRep.fetchUserPrivileges({
            user: user.code,
            onCompleted: function (opRslt: IOperationResult<IUserPrivilege>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.userPrivileges = opRslt.resultObjects;
                    // 此处应该通过权限过滤下已加载内容
                } catch (error) {
                    that.view.showMessageBox(error);
                    // 权限获取失败，此处应该退出系统
                }
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
    protected initModuleConsole(module: IUserModule): void {
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
        let that: this = this;
        let baseUrl = address;//.substring(0, address.indexOf("index"));
        let indexName = module.index;
        if (object.isNull(indexName) || indexName === "") {
            indexName = "index";
        }
        indexName = string.format("{0}/{1}", module.name, indexName);
        let moduleRequire = requires.create({
            baseUrl: baseUrl
        }, ["ibas/index"]);
        logger.log(emMessageLevel.DEBUG, "center: module [{0}] {root: [{1}], index: [{2}]}.", module.name, baseUrl, indexName);
        moduleRequire([indexName], function (moduleIndex: any): void {
            try {
                // 模块加载成功
                if (object.isNull(moduleIndex)) {
                    // 模块的索引文件加载不成功，或返回值不正确
                    throw new Error(i18n.prop("msg_invalid_module_index", object.isNull(module.name) ? module.id : module.name));
                }
                // 模块加载成功
                if (object.isNull(moduleIndex)) {
                    // 模块的索引文件加载不成功，或返回值不正确
                    throw new Error(i18n.prop("msg_invalid_module_index", object.isNull(module.name) ? module.id : module.name));
                }
                let consoleClass = moduleIndex.default;
                if (object.isNull(consoleClass) && consoleClass.prototype !== ModuleConsole) {
                    // 模块的控制台无效
                    // throw new Error(i18n.prop("msg_invalid_module_console", object.isNull(module.name) ? module.id : module.name));
                }
                let console: ModuleConsole = new consoleClass();
                if (!(console instanceof ModuleConsole)) {
                    // 控制台实例无效
                    // throw new Error(i18n.prop("msg_invalid_module_console_instance", object.isNull(module.name) ? module.id : module.name));
                }
                // 有效模块控制台
                console.addListener(function (): void {
                    // 注册模块业务仓库默认地址，创建实例时默认取此地址
                    if (!object.isNull(module.name) && !object.isNull(module.repository)) {
                        let configName: string = string.format(
                            BORepositoryApplication.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS
                            , module.name);
                        config.set(configName, module.repository);
                        logger.log(emMessageLevel.DEBUG, "repository: register repository's default address [{0}].", module.repository);
                    }
                    // 显示模块
                    that.view.showModule(console);
                    // 注册模块功能
                    that.registerFunctions(console);
                    // 显示常驻应用
                    for (let app of console.applications()) {
                        if (app instanceof BOResidentApplication) {
                            app.viewShower = that;
                            that.view.showResidentView(app.view);
                        }
                    }
                });
                console.run();
            } catch (error) {
                that.view.showStatusMessage(emMessageType.ERROR, error);
            }
        }, function (): void {
            // 模块加载失败
            that.view.showStatusMessage(
                emMessageType.ERROR,
                i18n.prop("msg_invalid_module_index", object.isNull(module.name) ? module.id : module.name));
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
                app.viewShower = this;
            }
            app.run();
        }
    }

    /** 用户权限 */
    private userPrivileges: Array<IUserPrivilege>;
    /** 判断是否可以运行应用 */
    protected canRun(app: IApplication<IView>): boolean {
        let run: boolean = true;
        if (!object.isNull(this.userPrivileges)) {
            if (app instanceof BOApplication) {
                // 应用是业务对象应用，根据应用类型设置权限
                for (let item of this.userPrivileges) {
                    if (item.source !== emPrivilegeSource.BUSINESS_OBJECT) {
                        continue;
                    }
                    if (item.target !== app.boCode) {
                        continue;
                    }
                    if (item.value === emAuthoriseType.READ) {
                        if (app instanceof BOListApplication) {
                            run = true;
                        } else if (app instanceof BOChooseApplication) {
                            run = true;
                        } else if (app instanceof BOViewApplication) {
                            run = true;
                        } else if (app instanceof BOEditApplication) {
                            run = false;
                        }
                    } else {
                        run = item.value === emAuthoriseType.NONE ? false : true;
                    }
                    break;
                }
            }
            // 应用设置，覆盖之前设置
            for (let item of this.userPrivileges) {
                if (item.source !== emPrivilegeSource.APPLICATION) {
                    continue;
                }
                if (item.target !== app.id) {
                    continue;
                }
                run = item.value === emAuthoriseType.NONE ? false : true;
                break;
            }
        }
        return run;
    }
    /** 关闭视图 */
    close(): void {
        let that = this;
        this.messages({
            type: emMessageType.QUESTION,
            title: i18n.prop(this.name),
            message: i18n.prop("msg_whether_to_exit"),
            actions: [emMessageAction.YES, emMessageAction.NO],
            onCompleted(action: emMessageAction): void {
                if (action === emMessageAction.YES) {
                    that.view.destroyView(that.view);
                }
            }
        });
    }
    /** 清理资源 */
    destroy(): void {
        if (arguments.length === 0) {
            super.destroy();
        } else {
            this.view.destroyView(arguments[0]);
        }
    }
    /** 设置忙状态 */
    busy(view: IView, busy: boolean, msg: string): any {
        this.view.busyView(view, busy, msg);
    }
    /** 设置消息 */
    proceeding(view: IView, type: emMessageType, msg: string): any {
        this.view.showStatusMessage(type, msg);
    }
    /** 对话消息 */
    messages(caller: IMessgesCaller): any {
        this.view.showMessageBox(caller);
    }
    /** 显示视图，可重载并添加权限控制 */
    showView(view: IView): void {
        if (!object.isNull(view.application)) {
            if (!this.canRun(view.application)) {
                throw new Error(
                    i18n.prop("msg_application_not_allowed_run",
                        object.isNull(view.application.description) ? view.application.name : view.application.description));
            }
        }
        this.view.showView(view);
    }
}