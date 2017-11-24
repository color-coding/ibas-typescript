/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as sys from "ibas/bsbas/systems/index";

/**
 * 关于应用
 */
export class AboutApp extends sys.AboutApp<IAboutView> {

    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        super.viewShowed();
        let libraries: ibas.List<Component> = new ibas.ArrayList<Component>();
        let copyright: string = ibas.i18n.prop("shell_license");
        libraries.add(new Component("ibas.shell", (<any>window).ibas.shell.version, copyright, ibas.i18n.prop("shell_icon")));
        libraries.add(new Component("ibas.bobas", (<any>window).ibas.bobas.version, copyright, ibas.i18n.prop("shell_icon")));
        libraries.add(new Component("ibas.bsbas", (<any>window).ibas.bsbas.version, copyright, ibas.i18n.prop("shell_icon")));
        libraries.add(new Component("jquery", "3.1.1"));
        libraries.add(new Component("requirejs", "2.3.2"));
        libraries.add(new Component("requirejs-css", "0.1.10"));
        libraries.add(new Component("cryptojs", "3.1.9"));
        libraries.add(new Component("spin.js", "2.3.2"));
        this.view.showLibraries(libraries);
        let applications: ibas.List<Component> = new ibas.ArrayList<Component>();
        let watcher: ibas.ISystemWatcher = ibas.variablesManager.getWatcher();
        if (!ibas.objects.isNull(watcher)) {
            for (let item of watcher.modules()) {
                applications.add(new Component(item.name, item.version, item.copyright, item.icon));
            }
        }
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
/** 视图-关于 */
export interface IAboutView extends sys.IAboutView {
    /** 显示库信息 */
    showLibraries(components: ibas.List<Component>): void;
    /** 显示应用信息 */
    showApplications(components: ibas.List<Component>): void;
}