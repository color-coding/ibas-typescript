/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 配置项目-隐藏无功能模块 */
        export const CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE: string = "hideModule";
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
                if (ibas.objects.isNull(this.view)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_view", this.name));
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
                // 注册系统观察者
                ibas.variablesManager.register({
                    modules(): ibas.IList<ibas.IModule> {
                        let modules: ibas.ArrayList<ibas.IModule> = new ibas.ArrayList();
                        if (!ibas.objects.isNull(that.functionMap)) {
                            for (let item of that.functionMap.values()) {
                                let tmp: any = modules.firstOrDefault((c) => {
                                    if (item.module === c || item.module.id === c.id) {
                                        return true;
                                    }
                                });
                                if (ibas.objects.isNull(tmp)) {
                                    modules.add(item.module);
                                }
                            }
                        }
                        return modules;
                    }
                });
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
                let that: this = this;
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserModules({
                    user: this.currentUser.code,
                    platform: ibas.enums.toString(ibas.emPlantform, this.plantform),
                    onCompleted: function (opRslt: ibas.IOperationResult<bo.IUserModule>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            for (let module of opRslt.resultObjects) {
                                that.view.showStatusMessage(
                                    ibas.emMessageType.INFORMATION,
                                    ibas.i18n.prop("shell_initialize_module", ibas.strings.isEmpty(module.name) ? module.id : module.name)
                                );
                                that.initModuleConsole(module);
                            }
                        } catch (error) {
                            that.view.showMessageBox({
                                title: that.description,
                                type: ibas.emMessageType.ERROR,
                                message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                            });
                        }
                    }
                });
                boRepository.fetchUserPrivileges({
                    user: this.currentUser.code,
                    platform: ibas.enums.toString(ibas.emPlantform, this.plantform),
                    onCompleted: function (opRslt: ibas.IOperationResult<bo.IUserPrivilege>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.userPrivileges = opRslt.resultObjects;
                            // 此处应该通过权限过滤下已加载内容
                        } catch (error) {
                            that.view.showMessageBox({
                                title: that.description,
                                type: ibas.emMessageType.ERROR,
                                message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                            });
                            // 权限获取失败，此处应该退出系统
                        }
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
            /** 注册运行的功能 */
            protected registerFunctions(module: ibas.IModuleConsole): void {
                if (ibas.objects.isNull(this.functionMap)) {
                    this.functionMap = new Map<string, ibas.IModuleFunction>();
                }
                for (let func of module.functions()) {
                    // 权限控制，没权限的不能激活菜单
                    let tmp: any = this.userPrivileges.firstOrDefault((c) => {
                        if (c.source === ibas.emPrivilegeSource.APPLICATION && c.target === func.id) {
                            if (c.value !== ibas.emAuthoriseType.ALL) {
                                return true;
                            }
                        }
                        return false;
                    });
                    if (!ibas.objects.isNull(tmp)) {
                        func.activated = false;
                        ibas.logger.log(ibas.emMessageLevel.DEBUG, "center: disabled function [{0} - {1}].", func.description, func.id);
                    }
                    if (func.activated) {
                        // 没权限，不激活功能
                        this.functionMap.set(func.id, func);
                    }
                }
            }
            /** 加载模块 */
            private initModuleConsole(module: bo.IUserModule): void {
                // 补充模块初始值
                if (ibas.objects.isNull(module.authorise)) {
                    module.authorise = ibas.emAuthoriseType.ALL;
                }
                // 模块入口地址
                if (ibas.strings.isEmpty(module.address)) {
                    // 模块地址无效，不再加载
                    this.view.showStatusMessage(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_invalid_module_address", module.name));
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "center: invaild address module [{0}].", module.name);
                    return;
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
                let that: this = this;
                // 模块require函数
                let minLibrary: boolean = ibas.config.get(ibas.CONFIG_ITEM_USE_MINIMUM_LIBRARY, false);
                let require: Require = ibas.requires.create({
                    context: ibas.requires.naming(module.name),
                    baseUrl: module.address,
                    map: {
                        "*": {
                            "css": ibas.strings.format(
                                "{0}/3rdparty/require-css{1}.js", ibas.urls.rootUrl("/ibas/index"), (minLibrary ? ibas.SIGN_MIN_LIBRARY : "")
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
                            // 有效模块控制台
                            console.addListener(function (): void {
                                if (console.functions().length > 0
                                    && ibas.config.get(CONFIG_ITEM_HIDE_NO_FUNCTION_MODULE, true)
                                    && module.authorise === ibas.emAuthoriseType.ALL) {
                                    // 注册模块功能
                                    that.registerFunctions(console);
                                    // 显示模块
                                    that.view.showModule(console);
                                    // 如当前模块包含Hash指向的功能,激活
                                    let currentHashValue: string = window.location.hash;
                                    if (currentHashValue.startsWith(ibas.URL_HASH_SIGN_FUNCTIONS)) {
                                        let url: string = currentHashValue.substring(ibas.URL_HASH_SIGN_FUNCTIONS.length);
                                        let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                                        let id: string = url.substring(0, index);
                                        for (let func of console.functions()) {
                                            if (ibas.strings.equals(func.id, id)) {
                                                ibas.urls.changeHash(currentHashValue);
                                            }
                                        }
                                    }
                                } else {
                                    ibas.logger.log(ibas.emMessageLevel.DEBUG,
                                        "center: hide no functions module [{0}].", console.name);
                                }
                                // 显示常驻应用
                                for (let app of console.applications()) {
                                    if (ibas.objects.instanceOf(app, ibas.ResidentApplication)) {
                                        that.view.showResidentView(<ibas.IBarView>app.view);
                                    }
                                }
                            });
                            // 设置仓库地址
                            if (!ibas.objects.isNull(module.repository)) {
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
                            // 设置视图显示者
                            console.viewShower = that;
                            console.run();
                        }
                    } catch (error) {
                        that.view.showStatusMessage(ibas.emMessageType.ERROR, error.message);
                    }
                }, function (): void {
                    // 模块加载失败
                    that.view.showStatusMessage(
                        ibas.emMessageType.ERROR,
                        ibas.i18n.prop("shell_invalid_module_index", ibas.objects.isNull(module.name) ? module.id : module.name));
                });
                ibas.logger.log(ibas.emMessageLevel.DEBUG,
                    "center: module [{0}] {root: [{1}], index: [{2}]}.", module.name, module.address, module.index);
            }
            /** 视图事件-激活功能 */
            private activateFunctions(id: string): void {
                ibas.urls.changeHash(ibas.strings.format("{0}{1}", ibas.URL_HASH_SIGN_FUNCTIONS, id));
            }

            /** 用户权限 */
            private userPrivileges: ibas.ArrayList<bo.IUserPrivilege>;
            /** 判断是否可以运行应用 */
            protected canRun(app: ibas.IApplication<ibas.IView>): boolean {
                let run: boolean = true;
                if (!ibas.objects.isNull(this.userPrivileges)) {
                    if (ibas.objects.instanceOf(app, ibas.BOApplication)) {
                        // 应用是业务对象应用，根据应用类型设置权限
                        for (let item of this.userPrivileges) {
                            if (item.source !== ibas.emPrivilegeSource.BUSINESS_OBJECT) {
                                continue;
                            }
                            if (item.target !== (<ibas.BOApplication<ibas.IBOView>>app).boCode) {
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
                    for (let item of this.userPrivileges) {
                        if (item.source !== ibas.emPrivilegeSource.APPLICATION) {
                            continue;
                        }
                        if (item.target !== app.id) {
                            continue;
                        }
                        run = item.value === ibas.emAuthoriseType.NONE ? false : true;
                        break;
                    }
                }
                return run;
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
                if (!ibas.objects.isNull(view.application)) {
                    if (!this.canRun(view.application)) {
                        throw new Error(
                            ibas.i18n.prop("shell_application_not_allowed_run",
                                ibas.objects.isNull(view.application.description) ? view.application.name : view.application.description));
                    }
                }
                this.view.showView(view);
            }

        }
        /** 系统中心-视图 */
        export interface ICenterView extends ibas.IView {
            /** 激活帮助 */
            helpEvent: Function;
            /** 激活关于 */
            aboutEvent: Function;
            /** 激活功能，参数1 string 功能ID */
            activateFunctionsEvent: Function;
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
            /** 显示常驻视图 */
            showResidentView(view: ibas.IBarView): void;
        }
    }
}