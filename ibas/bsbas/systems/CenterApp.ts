/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../3rdparty/index.d.ts" />
import {
    i18n, logger, emMessageLevel, IOperationResult, objects, config, strings, requires, urls,
    ModuleConsole, IModuleConsole, IModuleFunction, IApplication, enums, emPlantform,
    IView, IBarView, IBarApplication, IViewShower, AbstractApplication, IMessgesCaller,
    emMessageType, emPrivilegeSource, emAuthoriseType, emMessageAction, variablesManager,
    ResidentApplication, BOApplication, BOChooseApplication, BOListApplication,
    BOViewApplication, BOEditApplication, IBOView,
    MODULE_REPOSITORY_NAME_TEMPLATE, CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS,
    VARIABLE_NAME_USER_ID, VARIABLE_NAME_USER_CODE, VARIABLE_NAME_USER_NAME, CONFIG_ITEM_DEBUG_MODE,
    hashEventManager, URL_HASH_SIGN_FUNCTIONS, IHashInfo
} from "ibas/index";
import {
    ICenterView, ICenterApp, IBORepositorySystem,
    IUser, IUserModule, IUserPrivilege
} from "./Systems.d";
import { Factories } from "./Factories";

/** 配置项目-隐藏无功能模块 */
export const CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE: string = "hideModule";

/** 应用-中心 */
export abstract class CenterApp<T extends ICenterView> extends AbstractApplication<T> implements ICenterApp, IViewShower {

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
            if (!objects.isNull(this.viewShower)) {
                if (objects.isNull(this.view)) {
                    throw new Error(i18n.prop("sys_invalid_view", this.name));
                }
                if (!objects.isNull(this.description)) {
                    this.view.title = this.description;
                } else {
                    this.view.title = this.name;
                }
                this.viewShower.show(this.view);
                this.afterViewShow();
            } else {
                throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
            }
        } else {
            // 显示应用视图时
            this.showView(arguments[0]);
        }
    }
    /** 视图显示后 */
    private afterViewShow(): void {
        if (objects.isNull(this.view)) {
            throw new Error(i18n.prop("sys_invalid_view", this.name));
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
        this.currentUser = arguments[0];
        // 注册运行变量
        variablesManager.register(VARIABLE_NAME_USER_ID, this.currentUser.id);
        variablesManager.register(VARIABLE_NAME_USER_CODE, this.currentUser.code);
        variablesManager.register(VARIABLE_NAME_USER_NAME, this.currentUser.name);
        // 初始化
        let that: this = this;
        setTimeout(function (): void {
            that.init();
        }, 300);
        this.show();
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 显示常驻应用
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
    /** 当前用户 */
    private currentUser: IUser;
    /** 初始化用户相关 */
    private init(): void {
        if (objects.isNull(this.currentUser)) {
            return;
        }
        // 加载用户相关
        logger.log(emMessageLevel.DEBUG, "center: initializing user [{0} - {1}]'s modules.", this.currentUser.id, this.currentUser.code);
        this.view.showStatusMessage(
            emMessageType.INFORMATION,
            i18n.prop("sys_initialize_user_modules", this.currentUser.code, this.currentUser.name)
        );
        let that: this = this;
        let boRep: IBORepositorySystem = Factories.systemsFactory.createRepository();
        boRep.fetchUserModules({
            user: this.currentUser.code,
            platform: enums.toString(emPlantform, this.plantform),
            onCompleted: function (opRslt: IOperationResult<IUserModule>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    for (let module of opRslt.resultObjects) {
                        that.view.showStatusMessage(
                            emMessageType.INFORMATION,
                            i18n.prop("sys_initialize_modules", module.id, module.name)
                        );
                        that.initModuleConsole(module);
                    }
                } catch (error) {
                    that.view.showMessageBox({
                        type: emMessageType.ERROR,
                        message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                    });
                }
            }
        });
        boRep.fetchUserPrivileges({
            user: this.currentUser.code,
            platform: enums.toString(emPlantform, this.plantform),
            onCompleted: function (opRslt: IOperationResult<IUserPrivilege>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.userPrivileges = opRslt.resultObjects;
                    // 此处应该通过权限过滤下已加载内容
                } catch (error) {
                    that.view.showMessageBox({
                        type: emMessageType.ERROR,
                        message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                    });
                    // 权限获取失败，此处应该退出系统
                }
            }
        });
    }
    private functionMap: Map<string, IModuleFunction>;
    /** 注册运行的功能 */
    protected registerFunctions(module: IModuleConsole): void {
        var that: this = this;
        if (objects.isNull(this.functionMap)) {
            this.functionMap = new Map<string, IModuleFunction>();
            hashEventManager.registerListener({
                hashSign: URL_HASH_SIGN_FUNCTIONS,
                onHashChanged: (event: any): void => {
                    try {
                        let url: string = event.newURL.substring(
                            event.newURL.indexOf(URL_HASH_SIGN_FUNCTIONS) + URL_HASH_SIGN_FUNCTIONS.length);
                        let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                        let functionId: string = url.substring(0, index);
                        if (objects.isNull(that.functionMap)) {
                            return;
                        }
                        if (that.functionMap.has(functionId)) {
                            try {
                                let func: IModuleFunction = that.functionMap.get(functionId);
                                let app: IApplication<IView> = func.default();
                                if (objects.isNull(app)) {
                                    return;
                                }
                                if (objects.isNull(app.navigation)) {
                                    app.navigation = func.navigation;
                                }
                                if (objects.isNull(app.viewShower)) {
                                    app.viewShower = that;
                                }
                                app.run();
                            } catch (error) {
                                that.messages({
                                    type: emMessageType.ERROR,
                                    message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                                });
                            }
                        }
                    } catch (error) {
                        logger.log(error);
                    }
                }
            });
        }
        for (let item of module.functions()) {
            this.functionMap.set(item.id, item);
        }
    }

    /** 初始化模块控制台 */
    protected initModuleConsole(module: IUserModule): void {
        // 补充模块初始值
        if (objects.isNull(module.authorise)) {
            module.authorise = emAuthoriseType.ALL;
        }
        // 模块入口地址
        let address: string = module.address;
        address = urls.normalize(address);
        if (!address.endsWith("/")) {
            address += "/";
        }
        let that: this = this;
        let indexName: string = module.index;
        if (objects.isNull(indexName) || indexName === "") {
            indexName = "index";
        }
        let moduleRequire: Function = requires.create({
            baseUrl: address,
            context: requires.naming(module.name)
        }, []);
        logger.log(emMessageLevel.DEBUG, "center: module [{0}] {root: [{1}], index: [{2}]}.", module.name, address, indexName);
        moduleRequire([indexName], function (moduleIndex: any): void {
            try {
                logger.log(emMessageLevel.DEBUG, "center: got a console from [{0}].", (<any>moduleRequire).toUrl(indexName));
                // 模块加载成功
                if (objects.isNull(moduleIndex)) {
                    // 模块的索引文件加载不成功，或返回值不正确
                    throw new Error(
                        i18n.prop("sys_invalid_module_index", objects.isNull(module.name) ? module.id : module.name)
                    );
                }
                // 模块加载成功
                if (objects.isNull(moduleIndex)) {
                    // 模块的索引文件加载不成功，或返回值不正确
                    throw new Error(
                        i18n.prop("sys_invalid_module_index", objects.isNull(module.name) ? module.id : module.name)
                    );
                }
                let consoleClass: any = moduleIndex.default;
                if (objects.isNull(consoleClass) || !objects.isAssignableFrom(consoleClass, ModuleConsole)) {
                    // 模块的控制台无效
                    throw new Error(
                        i18n.prop("sys_invalid_module_console", objects.isNull(module.name) ? module.id : module.name)
                    );
                }
                let console: ModuleConsole = new consoleClass();
                if (!(objects.instanceOf(console, ModuleConsole))) {
                    // 控制台实例无效
                    throw new Error(
                        i18n.prop("sys_invalid_module_console_instance", objects.isNull(module.name) ? module.id : module.name)
                    );
                }
                if (console.id !== module.id) {
                    // 加载的控制台不符
                    throw new Error(
                        i18n.prop("sys_invalid_module_console_instance", objects.isNull(module.name) ? module.id : module.name)
                    );
                }
                // 有效模块控制台
                console.addListener(function (): void {
                    if (console.functions().length > 0
                        && config.get(CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE, true)
                        && module.authorise === emAuthoriseType.ALL) {
                        // 显示模块
                        that.view.showModule(console);
                        // 注册模块功能
                        that.registerFunctions(console);
                        // 如当前模块包含Hash指向的功能,激活
                        let hashInfo: IHashInfo = hashEventManager.currentHashInfo();
                        if (hashInfo.category === URL_HASH_SIGN_FUNCTIONS) {
                            for (let item of console.functions()) {
                                if (strings.equals(item.id, hashInfo.id)) {
                                    hashEventManager.fireHashChanged();
                                    break;
                                }
                            }
                        }
                    } else {
                        logger.log(emMessageLevel.DEBUG,
                            "center: hide no functions module [{1}|{0}].", console.id, console.name);
                    }
                    // 显示常驻应用
                    for (let app of console.applications()) {
                        if (objects.instanceOf(app, ResidentApplication)) {
                            that.view.showResidentView(<IBarView>app.view);
                        }
                    }
                });
                // 设置模块根地址
                console.rootUrl = address;
                // 设置仓库地址
                if (!objects.isNull(module.repository)) {
                    let done: boolean = console.setRepository(module.repository);
                    // 注册模块业务仓库默认地址，创建实例时默认取此地址
                    if (!objects.isNull(console.name) && done) {
                        module.repository = urls.normalize(module.repository);
                        let repositoryName: string = strings.format(MODULE_REPOSITORY_NAME_TEMPLATE, console.name);
                        let configName: string = strings.format(
                            CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS
                            , repositoryName);
                        config.set(configName, module.repository);
                        logger.log(emMessageLevel.DEBUG,
                            "repository: register [{0}]'s default address [{1}].", repositoryName, module.repository);
                    }
                }
                // 设置视图显示者
                console.viewShower = that;
                console.run();
            } catch (error) {
                that.view.showStatusMessage(emMessageType.ERROR, error.message);
            }
        }, function (): void {
            // 模块加载失败
            that.view.showStatusMessage(
                emMessageType.ERROR,
                i18n.prop("sys_invalid_module_index", objects.isNull(module.name) ? module.id : module.name));
        });
    }

    /** 视图事件-激活功能 */
    private activateFunctions(id: string): void {
        hashEventManager.changeHash(strings.format("{0}{1}", URL_HASH_SIGN_FUNCTIONS, id));
    }

    /** 用户权限 */
    private userPrivileges: Array<IUserPrivilege>;
    /** 判断是否可以运行应用 */
    protected canRun(app: IApplication<IView>): boolean {
        let run: boolean = true;
        if (!objects.isNull(this.userPrivileges)) {
            if (objects.instanceOf(app, BOApplication)) {
                // 应用是业务对象应用，根据应用类型设置权限
                for (let item of this.userPrivileges) {
                    if (item.source !== emPrivilegeSource.BUSINESS_OBJECT) {
                        continue;
                    }
                    if (item.target !== (<BOApplication<IBOView>>app).boCode) {
                        continue;
                    }
                    if (item.value === emAuthoriseType.READ) {
                        if (objects.instanceOf(app, BOListApplication)) {
                            run = true;
                        } else if (objects.instanceOf(app, BOChooseApplication)) {
                            run = true;
                        } else if (objects.instanceOf(app, BOViewApplication)) {
                            run = true;
                        } else if (objects.instanceOf(app, BOEditApplication)) {
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
        let that: this = this;
        this.messages({
            type: emMessageType.QUESTION,
            title: i18n.prop(this.name),
            message: i18n.prop("sys_whether_to_exit"),
            actions: [emMessageAction.YES, emMessageAction.NO],
            onCompleted(action: emMessageAction): void {
                if (action === emMessageAction.YES) {
                    that.view.destroyView(that.view);
                    window.location.hash = "";
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
        if (!objects.isNull(view.application)) {
            if (!this.canRun(view.application)) {
                throw new Error(
                    i18n.prop("sys_application_not_allowed_run",
                        objects.isNull(view.application.description) ? view.application.name : view.application.description));
            }
        }
        this.view.showView(view);
    }
}