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
            interface ViewContainer extends sap.ui.core.Control {

                addPage(view: any): this;

                getPage(id: string): sap.ui.core.Control;

                getPages(): sap.ui.core.Control[];

                getCurrentPage(): sap.ui.core.Control;

                to(id: string): this;

                back(id: string): this;
            }

            class NavContainer extends sap.m.NavContainer implements ViewContainer {

            }

            class TabContainer extends sap.m.TabContainer implements ViewContainer {

                addPage(view: any): this;

                getPage(id: string): sap.m.Page;

                getPages(): sap.m.Page[];

                getCurrentPage(): sap.m.Page;

                to(id: string): this;

                back(id: string): this;

                protected fireAfterNavigate(param: { toId: string }): void;
            }

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