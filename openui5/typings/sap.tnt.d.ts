// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace sap {
    namespace tnt {
        export class ToolPage extends sap.ui.core.Control {

            constructor(sId: string, mSettings?: any);
            constructor(mSettings?: any);
            getHeader(): sap.tnt.ToolHeader;
            setHeader(oHeader: sap.tnt.ToolHeader): void;
            getSideContent(): sap.tnt.SideNavigation;
            setSideContent(oSideContent: sap.tnt.SideNavigation): void;
            getSideExpanded(): boolean;
            setSideExpanded(isSideExpanded: boolean): void;
        }
        export class ToolHeader extends sap.m.OverflowToolbar {

            constructor(sId: string, mSettings?: any);
            constructor(mSettings?: any);
        }
        export class SideNavigation extends sap.ui.core.Control {

            constructor(sId: string, mSettings?: any);
            constructor(mSettings?: any);
        }
        export class NavigationList extends sap.ui.core.Control {

            constructor(sId: string, mSettings?: any);
            constructor(mSettings?: any);
        }
        export class NavigationListItem extends sap.ui.core.Item {

            constructor(sId: string, mSettings?: any);
            constructor(mSettings?: any);
        }
    }
}