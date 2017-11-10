// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace sap {
    namespace uxap {
        export enum ObjectPageSubSectionLayout {
            TitleOnLeft,
            TitleOnTop
        }
        export enum Importance {
            High,
            Low,
            Medium
        }
        export enum ObjectPageSubSectionMode {
            Collapsed,
            Expanded
        }
        export enum ObjectPageHeaderPictureShape {
            Circle,
            Square
        }
        export enum ObjectPageHeaderDesign {
            Dark,
            Light
        }
        export class ObjectPageLayout extends sap.ui.core.Control {
            constructor(sId: string, mSettings?: any);
            addHeaderContent(oHeaderContent: sap.ui.core.Control): sap.uxap.ObjectPageLayout;
            addSection(oSection: sap.uxap.ObjectPageSection): sap.uxap.ObjectPageLayout
            attachEditHeaderButtonPress(oData: any, fnFunction: any, oListener?: any): sap.uxap.ObjectPageLayout;
            attachNavigate(oData: any, fnFunction: any, oListener?: any): sap.uxap.ObjectPageLayout;
            attachToggleAnchorBar(oData: any, fnFunction: any, oListener?: any): sap.uxap.ObjectPageLayout;
            destroyFooter(): sap.uxap.ObjectPageLayout;
            destroyHeaderContent(): sap.uxap.ObjectPageLayout;
            destroyHeaderTitle(): sap.uxap.ObjectPageLayout;
            destroySections(): sap.uxap.ObjectPageLayout;
            detachEditHeaderButtonPress(fnFunction: any, oListener: any): sap.uxap.ObjectPageLayout;
            detachNavigate(fnFunction: any, oListener: any): sap.uxap.ObjectPageLayout;
            detachToggleAnchorBar(fnFunction: any, oListener: any): sap.uxap.ObjectPageLayout;
            fireEditHeaderButtonPress(mArguments?: any): sap.uxap.ObjectPageLayout;
            fireNavigate(mArguments?: any): sap.uxap.ObjectPageLayout;
            fireToggleAnchorBar(mArguments?: any): sap.uxap.ObjectPageLayout;
            getAlwaysShowContentHeader(): boolean;
            getEnableLazyLoading(): boolean;
            getFlexEnabled(): boolean;
            getFooter(): sap.m.IBar;
            getHeaderTitle(): sap.uxap.ObjectPageHeader;
            getHeight(): any;
            getIsChildPage(): boolean;
            getScrollDelegate(): any;
            getScrollingSectionId(): string;
            getSections(): sap.uxap.ObjectPageSection[];
            getSectionTitleLevel(): sap.ui.core.TitleLevel;
            getSelectedSection(): any;
            getShowAnchorBar(): boolean;
            getShowAnchorBarPopover(): boolean;
            getShowEditHeaderButton(): boolean;
            getShowFooter(): boolean;
            getShowHeaderContent(): boolean;
            getShowOnlyHighImportance(): boolean;
            getShowTitleInHeaderContent(): boolean;
            getSubSectionLayout(): sap.uxap.ObjectPageSubSectionLayout;
            getUpperCaseAnchorBar(): boolean;
            getUseIconTabBar(): boolean;
            getUseTwoColumnsForLargeScreen(): boolean;
            indexOfHeaderContent(oHeaderContent: sap.ui.core.Control): number;
            indexOfSection(oSection: sap.uxap.ObjectPageSection): number;
            insertHeaderContent(oHeaderContent: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageLayout;
            insertSection(oSection: sap.uxap.ObjectPageSection, iIndex: number): sap.uxap.ObjectPageLayout;
            removeAllHeaderContent(): sap.ui.core.Control[];
            removeAllSections(): sap.uxap.ObjectPageSection[];
            removeHeaderContent(vHeaderContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
            removeSection(vSection: number | string | sap.uxap.ObjectPageSection): sap.uxap.ObjectPageSection;
            scrollToSection(sId: string, iDuration: number, iOffset: number): void;
            setAlwaysShowContentHeader(bAlwaysShowContentHeader: boolean): sap.uxap.ObjectPageLayout;
            setEnableLazyLoading(bEnableLazyLoading: boolean): sap.uxap.ObjectPageLayout;
            setFlexEnabled(bFlexEnabled: boolean): sap.uxap.ObjectPageLayout;
            setFooter(oFooter: sap.m.IBar): sap.uxap.ObjectPageLayout;
            setHeaderTitle(oHeaderTitle: sap.uxap.ObjectPageHeader): sap.uxap.ObjectPageLayout;
            setHeight(sHeight: any): sap.uxap.ObjectPageLayout;
            setIsChildPage(bIsChildPage: boolean): sap.uxap.ObjectPageLayout;
            setSectionTitleLevel(sSectionTitleLevel: sap.ui.core.TitleLevel): sap.uxap.ObjectPageLayout;
            setSelectedSection(oSelectedSection: any | sap.uxap.ObjectPageSection): sap.uxap.ObjectPageLayout;
            setShowAnchorBar(bShowAnchorBar: boolean): sap.uxap.ObjectPageLayout;
            setShowAnchorBarPopover(bShowAnchorBarPopover: boolean): sap.uxap.ObjectPageLayout;
            setShowEditHeaderButton(bShowEditHeaderButton: boolean): sap.uxap.ObjectPageLayout;
            setShowFooter(bShowFooter: boolean): sap.uxap.ObjectPageLayout;
            setShowOnlyHighImportance(bShowOnlyHighImportance: boolean): sap.uxap.ObjectPageLayout;
            setShowTitleInHeaderContent(bShowTitleInHeaderContent: boolean): sap.uxap.ObjectPageLayout;
            setSubSectionLayout(sSubSectionLayout: sap.uxap.ObjectPageSubSectionLayout): sap.uxap.ObjectPageLayout;
            setUpperCaseAnchorBar(bUpperCaseAnchorBar: boolean): sap.uxap.ObjectPageLayout;
            setUseTwoColumnsForLargeScreen(bUseTwoColumnsForLargeScreen: boolean): sap.uxap.ObjectPageLayout
        }
        export class ObjectPageSectionBase extends sap.ui.core.Control {
            constructor(sId: string, mSettings?: any);
            connectToModels(): void;
            destroyCustomAnchorBarButton(): ObjectPageSectionBase;
            getCustomAnchorBarButton(): sap.m.Button;
            getImportance(): sap.uxap.Importance;
            getTitle(): string;
            getTitleLevel(): sap.ui.core.TitleLevel;
            getVisible(): boolean;
            setCustomAnchorBarButton(oCustomAnchorBarButton: sap.m.Button): sap.uxap.ObjectPageSectionBase;
            setImportance(sImportance: sap.uxap.Importance): sap.uxap.ObjectPageSectionBase;
            setTitle(sTitle: string): sap.uxap.ObjectPageSectionBase;
            setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): sap.uxap.ObjectPageSectionBase;
            setVisible(bVisible: boolean): sap.uxap.ObjectPageSectionBase;
        }
        export class ObjectPageSection extends ObjectPageSectionBase {
            constructor(sId: string, mSettings?: any);
            addSubSection(oSubSection: sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSection;
            destroySubSections(): sap.uxap.ObjectPageSection;
            getSelectedSubSection(): any;
            getShowTitle(): boolean;
            getSubSections(): sap.uxap.ObjectPageSubSection[];
            getTitleUppercase(): boolean;
            indexOfSubSection(oSubSection: sap.uxap.ObjectPageSubSection): number;
            insertSubSection(oSubSection: sap.uxap.ObjectPageSubSection, iIndex: number): sap.uxap.ObjectPageSection;
            removeAllSubSections(): sap.uxap.ObjectPageSubSection[];
            removeSubSection(vSubSection: number | string | sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSubSection;
            setSelectedSubSection(oSelectedSubSection: any | sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSection;
            setShowTitle(bShowTitle: boolean): sap.uxap.ObjectPageSection;
            setTitleUppercase(bTitleUppercase: boolean): sap.uxap.ObjectPageSection;
        }
        export class ObjectPageHeader extends sap.ui.core.Control {
            constructor(sId: string, mSettings?: any);
            addAction(oAction: sap.ui.core.Control): sap.uxap.ObjectPageHeader;
            addBreadCrumbLink(oBreadCrumbLink: sap.m.Link): sap.uxap.ObjectPageHeader;
            attachMarkChangesPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            attachMarkLockedPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            attachTitleSelectorPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            destroyActions(): sap.uxap.ObjectPageHeader;
            destroyBreadCrumbsLinks(): sap.uxap.ObjectPageHeader;
            destroyNavigationBar(): sap.uxap.ObjectPageHeader;
            destroySideContentButton(): sap.uxap.ObjectPageHeader;
            detachMarkChangesPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageHeader;
            detachTitleSelectorPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageHeader;
            fireMarkChangesPress(mArguments?: any[]): sap.uxap.ObjectPageHeader;
            fireMarkLockedPress(mArguments?: any[]): sap.uxap.ObjectPageHeader;
            fireTitleSelectorPress(mArguments?: any[]): sap.uxap.ObjectPageHeader;
            getActions(): sap.ui.core.Control[];
            getBreadCrumbsLinks(): sap.m.Link[];
            getIsActionAreaAlwaysVisible(): boolean;
            getIsObjectIconAlwaysVisible(): boolean;
            getIsObjectSubtitleAlwaysVisible(): boolean;
            getIsObjectTitleAlwaysVisible(): boolean;
            getMarkChanges(): boolean;
            getMarkFavorite(): boolean;
            getMarkFlagged(): boolean;
            getMarkLocked(): boolean;
            getNavigationBar(): sap.m.Bar;
            getObjectImageAlt(): string;
            getObjectImageDensityAware(): boolean;
            getObjectImageShape(): sap.uxap.ObjectPageHeaderPictureShape;
            getObjectImageURI(): string;
            getObjectSubtitle(): string;
            getObjectTitle(): string;
            getShowMarkers(): boolean;
            getShowPlaceholder(): boolean;
            getShowTitleSelector(): boolean;
            getSideContentButton(): sap.m.Button;
            indexOfAction(oAction: sap.ui.core.Control): number;
            indexOfBreadCrumbLink(oBreadCrumbLink: sap.m.Link): number;
            insertAction(oAction: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageHeader;
            insertBreadCrumbLink(oBreadCrumbLink: sap.m.Link, iIndex: number): sap.uxap.ObjectPageHeader;
            removeAllActions(): sap.ui.core.Control[];
            removeAllBreadCrumbsLinks(): sap.m.Link[];
            removeBreadCrumbLink(vBreadCrumbLink: number | string | sap.m.Link): sap.m.Link;
            setIsActionAreaAlwaysVisible(bIsActionAreaAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            setIsObjectIconAlwaysVisible(bIsObjectIconAlwaysVisible: boolean): sap.uxap.ObjectPageHeader
            setIsObjectSubtitleAlwaysVisible(bIsObjectSubtitleAlwaysVisible: boolean): sap.uxap.ObjectPageHeader
            setIsObjectTitleAlwaysVisible(bIsObjectTitleAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            setMarkChanges(bMarkChanges: boolean): sap.uxap.ObjectPageHeader;
            setMarkFavorite(bMarkFavorite: boolean): sap.uxap.ObjectPageHeader;
            setMarkFlagged(bMarkFlagged: boolean): sap.uxap.ObjectPageHeader;
            setMarkLocked(bMarkLocked: boolean): sap.uxap.ObjectPageHeader;
            setObjectImageAlt(sObjectImageAlt: string): sap.uxap.ObjectPageHeader;
            setObjectImageDensityAware(bObjectImageDensityAware: boolean): sap.uxap.ObjectPageHeader;
            setObjectImageShape(sObjectImageShape: sap.uxap.ObjectPageHeaderPictureShape): sap.uxap.ObjectPageHeader;
            setObjectImageURI(sObjectImageURI: string): sap.uxap.ObjectPageHeader;
            setObjectSubtitle(sObjectSubtitle: string): sap.uxap.ObjectPageHeader;
            setShowMarkers(bShowMarkers: boolean): sap.uxap.ObjectPageHeader;
            setShowPlaceholder(bShowPlaceholder: boolean): sap.uxap.ObjectPageHeader;
            setShowTitleSelector(bShowTitleSelector: boolean): sap.uxap.ObjectPageHeader;
            setSideContentButton(oSideContentButton: sap.m.Button): sap.uxap.ObjectPageHeader;
            getHeaderDesign(): sap.uxap.ObjectPageHeaderDesign;
            setHeaderDesign(sHeaderDesign: sap.uxap.ObjectPageHeaderDesign): sap.uxap.ObjectPageHeader
        }
        export class ObjectPageSubSection extends sap.ui.core.Control {
            constructor(sId: string, mSettings?: any);
            addAction(oAction: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            addBlock(oBlock: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            addMoreBlock(oMoreBlock: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            destroyActions(): sap.uxap.ObjectPageSubSection;
            destroyBlocks(): sap.uxap.ObjectPageSubSection;
            destroyMoreBlocks(): sap.uxap.ObjectPageSubSection;
            getActions(): sap.ui.core.Control[];
            getBlocks(): sap.ui.core.Control[];
            getMode(): sap.uxap.ObjectPageSubSectionMode;
            getMoreBlocks(): sap.ui.core.Control[];
            getTitleUppercase(): boolean;
            indexOfAction(oAction: sap.ui.core.Control): number;
            indexOfBlock(oBlock: sap.ui.core.Control): number;
            indexOfMoreBlock(oMoreBlock: sap.ui.core.Control): number;
            insertAction(oAction: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageSubSection;
            insertBlock(oBlock: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageSubSection;
            insertMoreBlock(oMoreBlock: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageSubSection;
            removeAction(vAction: number | string | sap.ui.core.Control): sap.ui.core.Control;
            removeAllActions(): sap.ui.core.Control[];
            removeAllBlocks(): sap.ui.core.Control[];
            removeAllMoreBlocks(): sap.ui.core.Control[];
            removeBlock(vBlock: number | string | sap.ui.core.Control): sap.ui.core.Control;
            removeMoreBlock(vMoreBlock: number | string | sap.ui.core.Control): sap.ui.core.Control;
            setMode(sMode: sap.uxap.ObjectPageSubSectionMode): sap.uxap.ObjectPageSubSection;
            setTitleUppercase(bTitleUppercase: boolean): sap.uxap.ObjectPageSubSection;
        }
        export class ObjectPageHeaderActionButton {
            constructor(sId: string, mSettings?: any);
            getHideIcon(): boolean;
            getHideText(): boolean;
            getImportance(): sap.uxap.Importance;
            setHideIcon(bHideIcon: boolean): sap.uxap.ObjectPageHeaderActionButton;
            setHideText(bHideText: boolean): sap.uxap.ObjectPageHeaderActionButton;
            setImportance(sImportanc: sap.uxap.Importance): sap.uxap.ObjectPageHeaderActionButton;
        }
    }
}