/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../ibas/index.d.ts" />
/// <reference path="../shell/index.d.ts" />
/// <reference path="./types/index.d.ts" />
/// <reference path="./datatypes.ts" />
/// <reference path="./utils.ts" />
/// <reference path="./extends/ibas.ex.ts" />
/// <reference path="./extends/sap.m.ex.ts" />
/// <reference path="./extends/sap.ui.table.ex.ts" />

namespace openui5 {
    /** 配置项目-紧缩屏幕 */
    export const CONFIG_ITEM_COMPACT_SCREEN: string = "compactScreen";
    // 监听配置变化
    ibas.config.registerListener({
        onConfigurationChanged(name: string, value: any): void {
            if (name === ibas.CONFIG_ITEM_PLANTFORM) {
                // 平台配置变化
                if (value === ibas.emPlantform.DESKTOP) {
                    // 桌面平台，使用紧凑视图
                    ibas.config.set(CONFIG_ITEM_COMPACT_SCREEN, true);
                } else {
                    // 使用舒适视图
                    ibas.config.set(CONFIG_ITEM_COMPACT_SCREEN, false);
                }
            }
        }
    });
    // 设置默认平台
    if (sap.ui.Device.system.phone) {
        ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.PHONE);
    } else if (sap.ui.Device.system.desktop) {
        ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.DESKTOP);
    } else if (sap.ui.Device.system.tablet) {
        ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.TABLET);
    } else {
        ibas.config.set(ibas.CONFIG_ITEM_PLANTFORM, ibas.emPlantform.COMBINATION);
    }

    // ui 触发错误验证
    sap.ui.getCore().attachValidationError("", (oEvent) => {
        let control: any = oEvent.getParameter("element");
        let message: any = oEvent.getParameter("message");
        if (control && control.setValueState) {
            control.setValueState("Error");
            if (message) {
                control.setValueStateText(message);
            }
            control.focus();
        }
    });
    // ui 触发正确验证
    sap.ui.getCore().attachValidationSuccess("", (oEvent) => {
        let control: any = oEvent.getParameter("element");
        if (control && control.setValueState) {
            control.setValueState("None");
        }
    });
    // 加载资源
    ibas.i18n.load(ibas.strings.format("{0}/languages/openui5.json", ibas.urls.rootUrl("/openui5/index")));
}