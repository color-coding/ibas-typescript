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
        let versions: ibas.List<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
        versions.add(new ibas.KeyText("ibas.shell", (<any>window).ibas.shell.version));
        versions.add(new ibas.KeyText("ibas.bobas", (<any>window).ibas.bobas.version));
        versions.add(new ibas.KeyText("ibas.bsbas", (<any>window).ibas.bsbas.version));
        versions.add(new ibas.KeyText("ibas.shell.ui", "unknown"));
        versions.add(new ibas.KeyText("jquery", "3.1.1"));
        versions.add(new ibas.KeyText("requirejs", "2.3.2"));
        versions.add(new ibas.KeyText("requirejs-css", "0.1.10"));
        versions.add(new ibas.KeyText("cryptojs", "3.1.9"));
        versions.add(new ibas.KeyText("spin.js", "2.3.2"));
        let watcher: ibas.ISystemWatcher = ibas.variablesManager.getWatcher();
        if (!ibas.objects.isNull(watcher)) {
            for (let item of watcher.modules()) {
                versions.add(new ibas.KeyText(item.name, item.version === undefined ? "0.0.1" : item.version));
            }
        }
        this.view.showVersions(versions);
    }
}
/** 视图-关于 */
export interface IAboutView extends sys.IAboutView {
    /** 显示版本 */
    showVersions(versions: ibas.List<ibas.KeyText>): void;
}