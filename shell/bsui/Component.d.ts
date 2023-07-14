/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace shell {
    export namespace ui {
        namespace component {
            class NavigationListSearchItem extends sap.tnt.NavigationListItem {
                /** 设置监听查询事件 */
                attachSearch(oData: any, fnFunction: Function, oListener?: any): NavigationListSearchItem;
                /** 取消监听查询事件 */
                detachSearch(fnFunction: Function, oListener?: any): NavigationListSearchItem;
                /** 触发查询事件 */
                protected fireSearch(param: { searchValue: string, }): void;
                /** 显示切换钮 */
                getShowSwitch(): boolean;
                /** 显示切换钮 */
                setShowSwitch(value: boolean): this;
                /** 设置监听切换事件 */
                attachSwitch(oData: any, fnFunction: Function, oListener?: any): NavigationListSearchItem;
                /** 取消监听切换事件 */
                detachSwitch(fnFunction: Function, oListener?: any): NavigationListSearchItem;
                /** 触发切换事件 */
                protected fireSwitch(param: { status: string, }): void;
                /** 改变状态 */
                chanageStatus(status: "sap-icon://switch-views" | "sap-icon://switch-classes"): NavigationListSearchItem;
            }
        }
    }
}