/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /**
         * 关于应用
         */
        export class AboutApp extends ibas.Application<IAboutView>  {

            /** 应用标识 */
            static APPLICATION_ID: string = "414b87e2-f9b7-425d-b1d7-7aeadfa2670e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_app_about";

            constructor() {
                super();
                this.id = AboutApp.APPLICATION_ID;
                this.name = AboutApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                let libraries: ibas.IList<Component> = new ibas.ArrayList<Component>();
                let copyright: string = ibas.i18n.prop("shell_license");
                libraries.add(new Component("ibas", ibas.about.version, copyright, ibas.i18n.prop("shell_icon")));
                libraries.add(new Component(shell.CONSOLE_NAME, shell.CONSOLE_VERSION, copyright, ibas.i18n.prop("shell_icon")));
                libraries.add(
                    new Component("jquery", "3.2.1", "© jQuery foundation and other contributors, released under the MIT license."));
                libraries.add(
                    new Component("requirejs", "2.3.5", "© jQuery foundation and other contributors, released under the MIT license."));
                libraries.add(new Component("require-css", "0.1.10", "© Guy Bedford, released under the MIT license."));
                libraries.add(new Component("cryptojs", "3.1.9", "© Evan Vosberg, released under the MIT license."));
                libraries.add(new Component("spin.js", "2.3.2", "© Felix Gnass, released under the MIT license."));
                this.view.showLibraries(libraries);
                let applications: ibas.IList<Component> = new ibas.ArrayList<Component>();
                modules.forEach((module) => {
                    applications.add(new Component(module.name, module.version, module.copyright, module.icon));
                });
                this.view.showApplications(applications);
            }
        }
        /** 组件信息 */
        export class Component {
            constructor(name: string, version: string);
            constructor(name: string, version: string, copyright: string);
            constructor(name: string, version: string, copyright: string, icon: string);
            constructor() {
                if (arguments.length > 0) {
                    this.name = arguments[0];
                }
                if (arguments.length > 1) {
                    this.version = arguments[1];
                }
                if (arguments.length > 2) {
                    this.copyright = arguments[2];
                }
                if (arguments.length > 3) {
                    this.icon = arguments[3];
                }
            }
            /** 名称 */
            name: string;
            /** 版本 */
            version: string;
            /** 版权声明 */
            copyright: string;
            /** 图标 */
            icon: string;
        }
        /** 模块信息检查 */
        export class ModuleMonitor {
            static RUNTIME_INFORMATION_MAX_MEMORY: string = "MAX_MEMORY";
            static RUNTIME_INFORMATION_TOTAL_MEMORY: string = "TOTAL_MEMORY";
            static RUNTIME_INFORMATION_FREE_MEMORY: string = "FREE_MEMORY";
            static RUNTIME_INFORMATION_USED_MEMORY: string = "USED_MEMORY";
            /** 观察 */
            monitor(caller: IModuleMonitorCaller): void {
                let name: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, caller.name);
                let address: string = ibas.config.get(
                    ibas.strings.format(ibas.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, name));
                if (!ibas.objects.isNull(address)) {
                    address = ibas.urls.normalize(address);
                    let index: number = address.indexOf("/services/");
                    if (index > 0) {
                        address = address.substring(0, index) + "/services/monitor/";
                        // 用户口令，先获取仓库口令
                        let token: string = ibas.config.get(ibas.strings.format(ibas.CONFIG_ITEM_REPOSITORY_USER_TOKEN, name));
                        // 没有仓库口令，则使用全局口令
                        if (ibas.strings.isEmpty(token)) {
                            token = ibas.config.get(ibas.CONFIG_ITEM_USER_TOKEN);
                        }
                        let boRepository: RemoteRepository = new RemoteRepository();
                        boRepository.converter = new DataConverter();
                        boRepository.address = address;
                        boRepository.token = token;
                        let method: string = ibas.strings.format("diagnosing?token={0}", token);
                        boRepository.callRemoteMethod(method, undefined, caller);
                    }
                }
            }
        }
        class RemoteRepository extends ibas.RemoteRepositoryAjax {
            protected createAjaxSettings(method: string, data: string): JQueryAjaxSettings {
                let methodUrl: string = this.methodUrl(method);
                let ajaxSetting: JQueryAjaxSettings = {
                    url: methodUrl,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    data: data
                };
                return ajaxSetting;
            }
        }
        class DataConverter extends ibas.DataConverter4j {
            createConverter(): ibas.IBOConverter<ibas.IBusinessObject, any> {
                return null;
            }
        }
        export interface IModuleMonitorCaller extends ibas.IMethodCaller<any> {
            /** 模块名称 */
            name: string;
        }
        /** 视图-关于 */
        export interface IAboutView extends ibas.IView {
            /** 显示库信息 */
            showLibraries(components: ibas.IList<Component>): void;
            /** 显示应用信息 */
            showApplications(components: ibas.IList<Component>): void;
        }
    }
}