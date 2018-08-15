/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 应用-中心 */
        export class CenterApp extends ibas.AbstractApplication<ICenterView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c1ec9ee1-1138-4358-8323-c579f1e4be37";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_center";

            constructor() {
                super();
                this.id = CenterApp.APPLICATION_ID;
                this.name = CenterApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            show(view: ibas.IView): void;
            show(): void;
            /** 显示视图 */
            show(): void {
                if (arguments.length === 0) {
                    // 显示自身视图时
                    if (!ibas.objects.isNull(this.viewShower)) {
                        if (ibas.objects.isNull(this.view)) {
                            throw new Error(ibas.i18n.prop("sys_invalid_view", this.name));
                        }
                        if (!ibas.objects.isNull(this.description)) {
                            this.view.title = this.description;
                        } else {
                            this.view.title = this.name;
                        }
                        this.viewShower.show(this.view);
                        this.afterViewShow();
                    } else {
                        throw new Error(ibas.i18n.prop("sys_invalid_view_shower", this.name));
                    }
                } else {
                    // 显示应用视图时
                    this.showView(arguments[0]);
                }
            }
            /** 视图显示后 */
            private afterViewShow(): void {
                if (this.view instanceof ibas.View) {
                    this.view.isDisplayed = true;
                    this.viewShowed();
                } else {
                    throw new Error(ibas.i18n.prop("sys_invalid_view", this.name));
                }
            }
            /** 注册视图 */
            protected registerView(): void {
                // 注册视图事件
                this.view.activateFunctionEvent = this.activateFunction;
                this.view.aboutEvent = this.about;
                this.view.helpEvent = this.help;
                this.view.closeEvent = this.close;
            }
            /** 运行 */
            run(): void;
            run(user: bo.IUser): void;
            /** 运行 */
            run(): void {
                this.currentUser = arguments[0];
                // 注册运行变量
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_ID, this.currentUser.id);
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_CODE, this.currentUser.code);
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_NAME, this.currentUser.name);
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_SUPER, this.currentUser.super);
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_BELONG, this.currentUser.belong);
                ibas.variablesManager.register(ibas.VARIABLE_NAME_USER_TOKEN, this.currentUser.token);
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
                let app: HelpApp = new HelpApp();
                app.navigation = this.navigation;
                app.viewShower = this;
                app.run();
            }
            /** 关于 */
            private about(): void {
                let app: AboutApp = new AboutApp();
                app.navigation = this.navigation;
                app.viewShower = this;
                app.run();
            }
            /** 当前用户 */
            private currentUser: bo.IUser;
            /** 初始化用户相关 */
            private init(): void {
                if (ibas.objects.isNull(this.currentUser)) {
                    return;
                }
                // 加载用户相关
                ibas.logger.log(ibas.emMessageLevel.DEBUG,
                    "center: initializing user [{0} - {1}]'s modules.", this.currentUser.id, this.currentUser.code);
                this.view.showStatusMessage(
                    ibas.emMessageType.INFORMATION,
                    ibas.i18n.prop("shell_initialize_user_modules",
                        ibas.strings.isEmpty(this.currentUser.name) ? this.currentUser.code : this.currentUser.name)
                );
                this.functionMap = new Map<string, ibas.IModuleFunction>();
                let user: string = this.currentUser.code;
                let platform: string = ibas.enums.toString(ibas.emPlantform, this.plantform);
                let that: this = this;
                privilegeManager.load({
                    user: user,
                    platform: platform,
                    onError(error: Error): void {
                        that.view.showMessageBox({
                            title: that.description,
                            type: ibas.emMessageType.ERROR,
                            message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                        });
                    },
                    onCompleted(): void {
                        // 如当前模块包含Hash指向的功能,激活
                        let hashFuncId: string = null;
                        if (window.location.hash.startsWith(ibas.URL_HASH_SIGN_FUNCTIONS)) {
                            let url: string = window.location.hash.substring(ibas.URL_HASH_SIGN_FUNCTIONS.length);
                            let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                            hashFuncId = url.substring(0, index);
                        }
                        // 权限加载成功，加载模块
                        consoleManager.load({
                            user: user,
                            platform: platform,
                            onError(error: Error): void {
                                that.view.showMessageBox({
                                    title: that.description,
                                    type: ibas.emMessageType.ERROR,
                                    message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                                });
                            },
                            onStatusMessage(type: ibas.emMessageType, message: string): void {
                                that.view.showStatusMessage(type, message);
                            },
                            onCompleted(console: ibas.ModuleConsole): void {
                                // 设置跳过方法
                                console.isSkip = function (element: ibas.IElement): boolean {
                                    // 没权限，跳过元素
                                    return !privilegeManager.canRun(element);
                                };
                                // 有效模块控制台
                                console.addListener(function (): void {
                                    // 显示模块
                                    that.view.showModule(console);
                                    // 模块可用，才加载功能和应用
                                    if (privilegeManager.canRun(console)) {
                                        // 处理功能
                                        for (let func of console.functions()) {
                                            // 注册功能事件响应
                                            that.functionMap.set(func.id, func);
                                            that.view.showModuleFunction(console.name, func);
                                            // 如当前模块包含Hash指向的功能,激活
                                            if (ibas.strings.equals(func.id, hashFuncId)) {
                                                ibas.urls.changeHash(window.location.hash);
                                            }
                                        }
                                        // 处理应用
                                        for (let app of console.applications()) {
                                            // 显示常驻应用
                                            if (ibas.objects.instanceOf(app, ibas.ResidentApplication)) {
                                                that.view.showResidentView(<ibas.IBarView>app.view);
                                            }
                                        }
                                    }
                                    // 处理服务
                                    for (let service of console.services()) {
                                        ibas.servicesManager.register(service);
                                    }
                                    // 注册元素描述
                                    ibas.i18n.add(console.id, console.description);
                                    for (let item of console.elements()) {
                                        ibas.i18n.add(item.id, item.description);
                                    }
                                });
                                // 设置视图显示者
                                console.viewShower = that;
                                console.run();
                            }
                        });
                    }
                });
                // 哈希值监控
                ibas.browserEventManager.registerListener({
                    eventType: ibas.emBrowserEventType.HASHCHANGE,
                    onEventFired: (event: HashChangeEvent): void => {
                        try {
                            if (event.newURL.indexOf(ibas.URL_HASH_SIGN_FUNCTIONS) < 0) {
                                return;
                            }
                            let url: string = event.newURL.substring(
                                event.newURL.indexOf(ibas.URL_HASH_SIGN_FUNCTIONS) + ibas.URL_HASH_SIGN_FUNCTIONS.length);
                            let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                            let functionId: string = url.substring(0, index);
                            if (ibas.objects.isNull(that.functionMap)) {
                                return;
                            }
                            if (that.functionMap.has(functionId)) {
                                try {
                                    let func: ibas.IModuleFunction = that.functionMap.get(functionId);
                                    let app: ibas.IApplication<ibas.IView> = func.default();
                                    if (ibas.objects.isNull(app)) {
                                        return;
                                    }
                                    if (ibas.objects.isNull(app.navigation)) {
                                        app.navigation = func.navigation;
                                    }
                                    if (ibas.objects.isNull(app.viewShower)) {
                                        app.viewShower = that;
                                    }
                                    app.run();
                                } catch (error) {
                                    that.messages({
                                        type: ibas.emMessageType.ERROR,
                                        message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                                    });
                                }
                            }
                        } catch (error) {
                            ibas.logger.log(error);
                        }
                    }
                });
            }
            private functionMap: Map<string, ibas.IModuleFunction>;
            /** 视图事件-激活功能 */
            private activateFunction(id: string): void {
                ibas.urls.changeHash(ibas.strings.format("{0}{1}", ibas.URL_HASH_SIGN_FUNCTIONS, id));
            }
            /** 关闭视图 */
            close(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_exit_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
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
            busy(view: ibas.IView, busy: boolean, msg: string): any {
                this.view.busyView(view, busy, msg);
            }
            /** 设置消息 */
            proceeding(view: ibas.IView, type: ibas.emMessageType, msg: string): any {
                this.view.showStatusMessage(type, msg);
            }
            /** 对话消息 */
            messages(caller: ibas.IMessgesCaller): any {
                this.view.showMessageBox(caller);
            }
            /** 显示视图，可重载并添加权限控制 */
            showView(view: ibas.IView): void {
                if (view instanceof ibas.View) {
                    if (!privilegeManager.canRun(view.application)) {
                        throw new Error(
                            ibas.i18n.prop("shell_application_not_allowed_run",
                                ibas.objects.isNull(view.application.description) ? view.application.name : view.application.description));
                    }
                    this.view.showView(view);
                }
            }

        }
        /** 系统中心-视图 */
        export interface ICenterView extends ibas.IView {
            /** 激活帮助 */
            helpEvent: Function;
            /** 激活关于 */
            aboutEvent: Function;
            /** 激活功能，参数1 string 功能ID */
            activateFunctionEvent: Function;
            /** 清理资源 */
            destroyView(view: ibas.IView): void;
            /** 显示视图 */
            showView(view: ibas.IView): void;
            /** 设置忙状态 */
            busyView(view: ibas.IView, busy: boolean, msg: string): any;
            /** 显示状态消息 */
            showStatusMessage(type: ibas.emMessageType, message: string): void;
            /** 显示消息对话框    */
            showMessageBox(caller: ibas.IMessgesCaller): void;
            /** 显示模块 */
            showModule(console: ibas.IModuleConsole): void;
            /** 显示模块功能 */
            showModuleFunction(module: string, func: ibas.IModuleFunction): void;
            /** 显示常驻视图 */
            showResidentView(view: ibas.IBarView): void;
        }
        export interface IUserPrivilegeLoader {
            /** 用户 */
            user: string;
            /** 平台 */
            platform: string;
            /**
             * 发生错误
             * @param error 错误
             */
            onError(error: Error): void;
            /** 完成 */
            onCompleted(): void;
        }
        const PROPERTY_USERPRIVILEGES: symbol = Symbol("userPrivileges");
        /** 用户权限管理员 */
        export class UserPrivilegeManager {
            /** 判断是否可以运行应用 */
            canRun(element: ibas.IElement): boolean {
                let run: boolean = true;
                if (ibas.objects.isNull(this[PROPERTY_USERPRIVILEGES])) {
                    return run;
                }
                if (ibas.objects.instanceOf(element, ibas.BOApplication)) {
                    // 应用是业务对象应用，根据应用类型设置权限
                    for (let item of this[PROPERTY_USERPRIVILEGES]) {
                        if (item.source !== ibas.emPrivilegeSource.BUSINESS_OBJECT) {
                            continue;
                        }
                        if (item.target !== (<ibas.BOApplication<ibas.IBOView>>element).boCode) {
                            continue;
                        }
                        if (item.value === ibas.emAuthoriseType.READ) {
                            if (ibas.objects.instanceOf(app, ibas.BOListApplication)) {
                                run = true;
                            } else if (ibas.objects.instanceOf(app, ibas.BOChooseApplication)) {
                                run = true;
                            } else if (ibas.objects.instanceOf(app, ibas.BOViewApplication)) {
                                run = true;
                            } else if (ibas.objects.instanceOf(app, ibas.BOEditApplication)) {
                                run = false;
                            }
                        } else {
                            run = item.value === ibas.emAuthoriseType.NONE ? false : true;
                        }
                        break;
                    }
                }
                // 应用设置，覆盖之前设置
                for (let item of this[PROPERTY_USERPRIVILEGES]) {
                    if (item.source === ibas.emPrivilegeSource.BUSINESS_OBJECT) {
                        continue;
                    }
                    if (item.target !== element.id) {
                        continue;
                    }
                    if (ibas.objects.instanceOf(element, ibas.ModuleConsole)) {
                        run = item.value === ibas.emAuthoriseType.ALL ? true : false;
                    } else {
                        run = item.value === ibas.emAuthoriseType.NONE ? false : true;
                    }
                    break;
                }
                return run;
            }
            /** 加载权限 */
            load(loader: IUserPrivilegeLoader): void {
                if (!ibas.objects.isNull(this[PROPERTY_USERPRIVILEGES])) {
                    // 已初始化不在处理
                    return;
                }
                let that: this = this;
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserPrivileges({
                    user: loader.user,
                    platform: loader.platform,
                    onCompleted: function (opRslt: ibas.IOperationResult<bo.IUserPrivilege>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that[PROPERTY_USERPRIVILEGES] = opRslt.resultObjects;
                            if (loader.onCompleted instanceof Function) {
                                loader.onCompleted();
                            }
                        } catch (error) {
                            if (loader.onError instanceof Function) {
                                loader.onError(error);
                            }
                        }
                    }
                });
            }
        }
        /** 权限管理员 */
        export const privilegeManager: UserPrivilegeManager = new UserPrivilegeManager();
        export interface IModuleConsoleLoader {
            /** 用户 */
            user: string;
            /** 平台 */
            platform: string;
            /** 运行消息 */
            onStatusMessage(type: ibas.emMessageType, message: string): void;
            /**
             * 发生错误
             * @param error 错误
             */
            onError(error: Error): void;
            /**
             * 完成
             * @param console 控制台
             */
            onCompleted(console: ibas.ModuleConsole): void;
        }
        const PROPERTY_CONSOLES: symbol = Symbol("consoles");
        export class ModuleConsoleManager {
            modules(): ibas.IModule[] {
                let modules: ibas.IList<ibas.IModule> = new ibas.ArrayList<ibas.IModule>();
                if (ibas.objects.isNull(this[PROPERTY_CONSOLES])) {
                    return modules;
                }
                for (let item of this[PROPERTY_CONSOLES]) {
                    modules.add(item);
                }
                return modules;
            }
            load(loader: IModuleConsoleLoader): void {
                this[PROPERTY_CONSOLES] = new ibas.ArrayList<ibas.IModuleConsole>();
                let that: this = this;
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserModules({
                    user: loader.user,
                    platform: loader.platform,
                    onCompleted: function (opRslt: ibas.IOperationResult<bo.IUserModule>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            // 去除重复模块
                            let userModules: ibas.ArrayList<bo.IUserModule> = new ibas.ArrayList<bo.IUserModule>();
                            for (let item of opRslt.resultObjects) {
                                if (userModules.firstOrDefault(c => c.id === item.id) !== null) {
                                    continue;
                                }
                                userModules.add(item);
                            }
                            for (let module of userModules) {
                                loader.onStatusMessage(
                                    ibas.emMessageType.INFORMATION,
                                    ibas.i18n.prop("shell_initialize_module", ibas.strings.isEmpty(module.name) ? module.id : module.name)
                                );
                                // 补充模块初始值
                                if (ibas.objects.isNull(module.authorise)) {
                                    module.authorise = ibas.emAuthoriseType.ALL;
                                }
                                // 模块入口地址
                                if (ibas.strings.isEmpty(module.address)) {
                                    // 模块地址无效，不再加载
                                    loader.onStatusMessage(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_invalid_module_address", module.name));
                                    continue;
                                }
                                module.address = ibas.urls.normalize(module.address);
                                if (!module.address.endsWith("/")) {
                                    module.address += "/";
                                }
                                // 模块索引文件
                                if (ibas.strings.isEmpty(module.index)) {
                                    module.index = "index";
                                }
                                // 模块控制台名称
                                if (ibas.strings.isEmpty(module.console)) {
                                    module.console = "Console";
                                }
                                // 模块require函数
                                let minLibrary: boolean = ibas.config.get(ibas.CONFIG_ITEM_USE_MINIMUM_LIBRARY, false);
                                let require: Require = ibas.requires.create({
                                    context: ibas.requires.naming(module.name),
                                    baseUrl: module.address,
                                    map: {
                                        "*": {
                                            "css": ibas.strings.format("{0}/3rdparty/require-css{1}.js",
                                                ibas.urls.rootUrl("/ibas/index"),
                                                (minLibrary ? ibas.SIGN_MIN_LIBRARY : "")
                                            )
                                        }
                                    },
                                    waitSeconds: ibas.config.get(ibas.requires.CONFIG_ITEM_WAIT_SECONDS, 30)
                                });
                                require([
                                    module.index + (minLibrary ? ibas.SIGN_MIN_LIBRARY : "")
                                ], function (): void {
                                    try {
                                        // 加载模块的控制台（可能多个）
                                        for (let item of module.console.split(ibas.DATA_SEPARATOR)) {
                                            if (ibas.strings.isEmpty(item)) {
                                                continue;
                                            }
                                            item = item.trim();
                                            if (item.indexOf(".") < 0) {
                                                // 没有命名空间，补全
                                                item = ibas.strings.format("{0}.app.{1}", module.name.toLowerCase(), item);
                                            }
                                            let consoleClass: any = window;
                                            for (let tmp of item.split(".")) {
                                                if (ibas.objects.isNull(consoleClass)) {
                                                    break;
                                                }
                                                consoleClass = consoleClass[tmp];
                                            }
                                            if (!ibas.objects.isAssignableFrom(consoleClass, ibas.ModuleConsole)) {
                                                throw new TypeError(item);
                                            }
                                            let console: ibas.ModuleConsole = new consoleClass();
                                            if (!(ibas.objects.instanceOf(console, ibas.ModuleConsole))) {
                                                throw new ReferenceError(item);
                                            }
                                            // 设置模块名称
                                            console.module = module.name.toLowerCase();
                                            // 设置模块根地址
                                            console.rootUrl = module.address;
                                            // 设置仓库地址
                                            if (!ibas.strings.isEmpty(module.repository)) {
                                                let done: boolean = console.setRepository(module.repository);
                                                // 注册模块业务仓库默认地址，创建实例时默认取此地址
                                                if (!ibas.objects.isNull(console.name) && done) {
                                                    module.repository = ibas.urls.normalize(module.repository);
                                                    let repositoryName: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, console.name);
                                                    let configName: string = ibas.strings.format(
                                                        ibas.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, repositoryName);
                                                    ibas.config.set(configName, module.repository);
                                                    ibas.logger.log(ibas.emMessageLevel.DEBUG,
                                                        "repository: register [{0}]'s default address [{1}].", repositoryName, module.repository);
                                                }
                                            }
                                            that[PROPERTY_CONSOLES].add(console);
                                            loader.onCompleted(console);
                                        }
                                    } catch (error) {
                                        loader.onStatusMessage(ibas.emMessageType.ERROR, error.message);
                                    }
                                }, function (): void {
                                    // 模块加载失败
                                    loader.onStatusMessage(
                                        ibas.emMessageType.ERROR,
                                        ibas.i18n.prop("shell_invalid_module_index", ibas.objects.isNull(module.name) ? module.id : module.name)
                                    );
                                });
                                ibas.logger.log(ibas.emMessageLevel.DEBUG,
                                    "center: module [{0}] {root: [{1}], index: [{2}]}.", module.name, module.address, module.index);
                            }
                        } catch (error) {
                            loader.onError(error);
                        }
                    }
                });
            }
        }
        export const consoleManager: ModuleConsoleManager = new ModuleConsoleManager();
    }
}