/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 配置项目-自动激活的功能 */
        export const CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION: string = "autoFunction";
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
                        if (this.view instanceof ibas.View) {
                            this.view.isDisplayed = true;
                        }
                        this.viewShowed();
                    } else {
                        throw new Error(ibas.i18n.prop("sys_invalid_view_shower", this.name));
                    }
                } else {
                    // 显示应用视图时
                    this.showView(arguments[0]);
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
                // 初始化
                this.show();
                if (arguments[0] instanceof bo.User) {
                    setTimeout(() => this.init(arguments[0]), 300);
                }
            }
            /** 视图显示后 */
            protected viewShowed(): void {
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
            /** 初始化用户相关 */
            private init(user: bo.IUser): void {
                if (ibas.objects.isNull(user)) {
                    return;
                }
                // 加载用户相关
                ibas.logger.log(ibas.emMessageLevel.DEBUG,
                    "center: initializing user [{0} - {1}]'s modules.", user.id, user.code);
                this.view.showStatusMessage(
                    ibas.emMessageType.INFORMATION,
                    ibas.i18n.prop("shell_initialize_user_modules",
                        ibas.strings.isEmpty(user.name) ? user.code : user.name)
                );
                // 如当前模块包含Hash指向的功能,激活
                let hashFuncId: string = null;
                if (window.location.hash.startsWith(ibas.URL_HASH_SIGN_FUNCTIONS)) {
                    let url: string = window.location.hash.substring(ibas.URL_HASH_SIGN_FUNCTIONS.length);
                    let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                    hashFuncId = url.substring(0, index);
                }
                if (ibas.strings.isEmpty(hashFuncId)) {
                    hashFuncId = ibas.config.get(CONFIG_ITEM_AUTO_ACTIVETED_FUNCTION);
                    if (!ibas.strings.isEmpty(hashFuncId)) {
                        ibas.urls.changeHash(ibas.strings.format("{0}{1}", ibas.URL_HASH_SIGN_FUNCTIONS, hashFuncId));
                    }
                }
                // 权限加载成功，加载模块
                moduleConsoleManager.load({
                    user: user.code,
                    platform: ibas.enums.toString(ibas.emPlantform, this.plantform),
                    onError: (error: Error) => {
                        this.view.showMessageBox({
                            title: this.description,
                            type: ibas.emMessageType.ERROR,
                            message: ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                        });
                    },
                    onStatusMessage: (type: ibas.emMessageType, message: string) => {
                        this.view.showStatusMessage(type, message);
                    },
                    onCompleted: (console: ibas.ModuleConsole) => {
                        let that: this = this;
                        // 设置跳过方法
                        console.isSkip = function (element: ibas.IElement): boolean {
                            // 没权限，跳过元素
                            return !privileges.canRun(element);
                        };
                        // 有效模块控制台
                        console.addListener(function (): void {
                            // 显示模块
                            that.view.showModule(console);
                            // 模块可用，才加载功能和应用
                            if (privileges.canRun(console)) {
                                // 处理功能
                                for (let func of console.functions()) {
                                    if (ibas.objects.isNull(func.viewShower)) {
                                        func.viewShower = that;
                                    }
                                    // 注册功能事件响应
                                    moduleFunctions.set(func.id, func);
                                    that.view.showModuleFunction(console.name, func);
                                    if (ibas.strings.equals(func.id, hashFuncId)) {
                                        // 如当前模块包含Hash指向的功能,激活
                                        setTimeout(() => ibas.urls.changeHash(window.location.hash), 1500);
                                    }
                                }
                                // 处理应用
                                for (let app of console.applications()) {
                                    // 显示常驻应用
                                    if (ibas.objects.instanceOf(app, ibas.ResidentApplication)) {
                                        if (ibas.objects.isNull(app.viewShower)) {
                                            app.viewShower = that;
                                        }
                                        that.view.showResidentView(<ibas.IBarView>app.view);
                                    }
                                }
                            }
                            // 处理服务
                            for (let service of console.services()) {
                                ibas.servicesManager.register(service);
                                // 如当前注册的服务为Hash指向的服务,激活
                                if (ibas.strings.isWith(window.location.hash, ibas.URL_HASH_SIGN_SERVICES, undefined)) {
                                    let url: string = window.location.hash.substring(ibas.URL_HASH_SIGN_SERVICES.length);
                                    let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                                    let id: string = url.substring(0, index);
                                    if (ibas.strings.equals(service.id, id)) {
                                        setTimeout(() => ibas.urls.changeHash(window.location.hash), 1500);
                                    }
                                }
                            }
                            // 注册元素描述
                            ibas.i18n.add(console.id, console.description);
                            for (let item of console.elements()) {
                                ibas.i18n.add(item.id, item.description);
                            }
                        });
                        console.run();
                    }
                });
            }
            /** 视图事件-激活功能 */
            private activateFunction(id: string): void {
                if (ibas.objects.isNull(moduleFunctions)) {
                    return;
                }
                if (moduleFunctions.has(id)) {
                    let func: ibas.IModuleFunction = moduleFunctions.get(id);
                    let app: ibas.IApplication<ibas.IView> = func.default();
                    if (ibas.objects.isNull(app)) {
                        return;
                    }
                    if (ibas.objects.isNull(app.navigation)) {
                        app.navigation = func.navigation;
                    }
                    if (ibas.objects.isNull(app.viewShower)) {
                        app.viewShower = this;
                    }
                    app.run();
                }
            }
            /** 关闭视图 */
            close(): void {
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_exit_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted: (action: ibas.emMessageAction) => {
                        if (action === ibas.emMessageAction.YES) {
                            this.view.destroyView(this.view);
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
                    if (!privileges.canRun(view.application)) {
                        throw new Error(
                            ibas.i18n.prop("shell_application_not_allowed_run",
                                ibas.objects.isNull(view.application.description) ? view.application.name : view.application.description));
                    }
                    this.view.showView(view);
                }
            }
        }
        const moduleFunctions: Map<string, ibas.IModuleFunction> = new Map<string, ibas.IModuleFunction>();
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
        interface IModuleConsoleLoader {
            /** 用户 */
            user: string;
            /** 平台 */
            platform: string;
            /** 运行消息 */
            onStatusMessage: (type: ibas.emMessageType, message: string) => void;
            /**
             * 发生错误
             * @param error 错误
             */
            onError: (error: Error) => void;
            /**
             * 完成
             * @param console 控制台
             */
            onCompleted: (console: ibas.ModuleConsole) => void;
        }
        class ModuleConsoleManager {
            minLibrary: boolean;
            modules: ibas.IList<bo.IUserModule>;
            faildModules: ibas.IList<bo.IUserModule>;
            consoles: ibas.IList<ibas.IModule>;
            load(loader: IModuleConsoleLoader): void {
                let that: this = this;
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserModules({
                    user: loader.user,
                    platform: loader.platform,
                    onCompleted(opRslt: ibas.IOperationResult<bo.IUserModule>): void {
                        if (opRslt.resultCode !== 0) {
                            loader.onError(new Error(opRslt.message));
                        } else {
                            // 加载模块
                            that.modules = new ibas.ArrayList<bo.IUserModule>();
                            that.faildModules = new ibas.ArrayList<bo.IUserModule>();
                            that.consoles = new ibas.ArrayList<ibas.IModule>();
                            // 完善模块信息
                            for (let module of opRslt.resultObjects) {
                                if (that.modules.firstOrDefault(c => c.id === module.id) !== null) {
                                    continue;
                                }
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
                                if (module.console.indexOf(".") < 0) {
                                    // 没有命名空间，补全
                                    module.console = ibas.strings.format("{0}.app.{1}", module.name.toLowerCase(), module.console);
                                }
                                ibas.logger.log(ibas.emMessageLevel.DEBUG,
                                    "center: module: [{0}], root: [{1}], console: [{2}].", module.name, module.address, module.console);
                                that.modules.add(module);
                            }
                            let onUncaughtError: EventListener = function (event: ErrorEvent): void {
                                if (event.error instanceof ReferenceError && !ibas.objects.isNull(that.modules)) {
                                    let urlIndex: string = event.filename.split("?")[0];
                                    let module: bo.IUserModule = that.modules.firstOrDefault(c =>
                                        ibas.strings.isWith(urlIndex,
                                            ibas.urls.normalize(
                                                (ibas.strings.isWith(c.address, "/", undefined) ? "..." + c.address : c.address) + c.index
                                            ), ".js")
                                    );
                                    if (!ibas.objects.isNull(module)) {
                                        // 卸载加载失败模块
                                        ibas.requires.create({
                                            context: ibas.requires.naming(module.name)
                                        }).undef(module.index + (that.minLibrary ? ibas.SIGN_MIN_LIBRARY : ""));
                                        // 添加失败清单
                                        for (let item of that.modules) {
                                            if (item.name !== module.name) {
                                                continue;
                                            }
                                            if (item.index !== module.index) {
                                                continue;
                                            }
                                            if (that.faildModules.contain(item)) {
                                                continue;
                                            }
                                            that.faildModules.add(item);
                                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "center: module: [{0}|{1}] will be reload.", item.name, item.console);
                                        }
                                        // 移出失败模块
                                        for (let item of that.faildModules) {
                                            that.modules.remove(item);
                                        }
                                    }
                                }
                            };
                            // 监听模块加载错误
                            window.addEventListener("error", onUncaughtError);
                            // 加载模块文件
                            for (let module of that.modules) {
                                loader.onStatusMessage(
                                    ibas.emMessageType.INFORMATION,
                                    ibas.i18n.prop("shell_initialize_module", ibas.strings.isEmpty(module.name) ? module.id : module.name)
                                );
                                // 模块require函数
                                that.require(module, function (): void {
                                    try {
                                        let consoleClass: any = window;
                                        for (let tmp of module.console.split(".")) {
                                            if (ibas.objects.isNull(consoleClass)) {
                                                break;
                                            }
                                            consoleClass = consoleClass[tmp];
                                        }
                                        if (!ibas.objects.isAssignableFrom(consoleClass, ibas.ModuleConsole)) {
                                            throw new TypeError(ibas.i18n.prop("shell_invalid_module_console", module.console));
                                        }
                                        let console: ibas.ModuleConsole = new consoleClass();
                                        if (!(ibas.objects.instanceOf(console, ibas.ModuleConsole))) {
                                            throw new ReferenceError(module.console);
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
                                        loader.onCompleted(console);
                                        that.consoles.add(console);
                                    } catch (error) {
                                        loader.onStatusMessage(ibas.emMessageType.ERROR, error.message);
                                    } finally {
                                        that.modules.remove(module);
                                        ibas.logger.log(ibas.emMessageLevel.DEBUG, "center: module: [{0}|{1}] was loaded.", module.name, module.console);
                                        if (that.modules.length === 0) {
                                            if (that.faildModules.length === 0) {
                                                that.modules.clear();
                                                that.faildModules.clear();
                                                window.removeEventListener("error", onUncaughtError);
                                            } else {
                                                for (let item of that.faildModules) {
                                                    that.modules.add(item);
                                                }
                                                that.faildModules.clear();
                                                for (let item of that.modules) {
                                                    that.require(item);
                                                }
                                            }
                                        }
                                    }
                                }, function (): void {
                                    that.modules.remove(module);
                                });
                            }
                        }
                    }
                });
            }
            /**
             * 加载模块
             * @param requireConfig 配置
             * @param module 模块
             * @param success 成功时
             * @param fail 失败时
             */
            protected require(module: bo.IUserModule, success?: Function, fail?: Function): void {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, "center: module: [{0}|{1}] begin to reload.", module.name, module.console);
                let that: this = this;
                ibas.requires.require({
                    context: ibas.requires.naming(module.name),
                    baseUrl: module.address,
                    map: {
                        "*": {
                            "css": ibas.strings.format("{0}/3rdparty/require-css{1}.js",
                                ibas.urls.rootUrl("/ibas/index"),
                                (that.minLibrary ? ibas.SIGN_MIN_LIBRARY : "")
                            )
                        }
                    },
                    waitSeconds: ibas.config.get(ibas.requires.CONFIG_ITEM_WAIT_SECONDS, 10),
                },
                    module.index + (that.minLibrary ? ibas.SIGN_MIN_LIBRARY : ""),
                    success,
                    fail
                );
            }
        }
        const moduleConsoleManager: ModuleConsoleManager = new ModuleConsoleManager();
        export namespace modules {
            /**
             * 迭代模块
             * @param caller 调用方法
             */
            export function forEach(caller: (value: ibas.IModule) => void): void {
                if (!(moduleConsoleManager.consoles instanceof Array)) {
                    return;
                }
                for (let item of moduleConsoleManager.consoles) {
                    caller(item);
                }
            }
        }
    }
}