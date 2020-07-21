/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        export namespace component {
            sap.tnt.NavigationListItem.extend("shell.ui.component.NavigationListSearchItem", {
                metadata: {
                    properties: {
                    },
                    events: {
                        "search": {
                            parameters: {
                                searchValue: {
                                    type: "string",
                                }
                            }
                        },
                    },
                    aggregations: {
                        "_searchField": { type: "sap.m.SearchField", multiple: false },
                    },
                },
                applySettings(this: NavigationListSearchItem): void {
                    (<any>sap.tnt.NavigationListItem.prototype).applySettings.apply(this, arguments);
                    this.setAggregation("_searchField", new sap.m.SearchField("", {
                        showSearchButton: true,
                        search: (oEvent: sap.ui.base.Event) => {
                            this.fireSearch({ searchValue: oEvent.getParameter("query") });
                        },
                    }));
                },
                _renderText(this: NavigationListSearchItem, rm: any): void {
                    rm.renderControl(this.getAggregation("_searchField", null));
                },
                renderGroupItem(rm: any, control: any): void {
                    let isListExpanded: any = control.getExpanded();
                    let isNavListItemExpanded: any = this.getExpanded();
                    let text: any = this.getText();
                    let tooltip: any;
                    let ariaProps: any = {
                        level: "1"
                    };
                    if (isListExpanded && this.getItems().length !== 0) {
                        ariaProps.expanded = isNavListItemExpanded;
                    }
                    rm.openStart("div");
                    rm.class("sapTntNavLIItem");
                    rm.class("sapTntNavLIGroup");
                    if (!this.getEnabled()) {
                        rm.class("sapTntNavLIItemDisabled");
                    } else {
                        rm.attr("tabindex", "-1");
                    }
                    if (!isListExpanded || control.hasStyleClass("sapTntNavLIPopup")) {
                        tooltip = this.getTooltip_AsString() || text;
                        if (tooltip) {
                            rm.attr("title", tooltip);
                        }
                        ariaProps.role = "menuitem";
                        if (!control.hasStyleClass("sapTntNavLIPopup")) {
                            ariaProps.haspopup = true;
                        }
                    } else {
                        ariaProps.role = "treeitem";
                    }
                    rm.accessibilityState(ariaProps);
                    if (control.getExpanded()) {
                        tooltip = this.getTooltip_AsString() || text;
                        if (tooltip) {
                            rm.attr("title", tooltip);
                        }
                    }
                    rm.openEnd();
                    if (control.getExpanded()) {
                        this._renderIcon(rm, false);
                    } else {
                        this._renderIcon(rm, true);
                    }
                    if (control.getExpanded()) {
                        let expandIconControl: any = this._getExpandIconControl();
                        expandIconControl.setVisible(this.getItems().length > 0 && this.getHasExpander());
                        expandIconControl.setSrc(this.getExpanded() ? (<any>NavigationListSearchItem).collapseIcon : (<any>NavigationListSearchItem).expandIcon);
                        expandIconControl.setTooltip(this._getExpandIconTooltip(!this.getExpanded()));

                        this._renderText(rm);
                        rm.renderControl(expandIconControl);
                    }
                    rm.close("div");
                },
                _renderIcon(rm: any, show?: boolean): void {
                    let icon: any = this.getIcon();
                    let iconInfo: any = sap.ui.core.IconPool.getIconInfo(icon);
                    if (icon) {
                        rm.openStart("span");
                        rm.class("sapUiIcon");
                        rm.class("sapTntNavLIGroupIcon");
                        if (!ibas.objects.isNull(show) && !show) {
                            rm.style("display", "none");
                        }
                        rm.attr("aria-hidden", true);

                        if (iconInfo && !iconInfo.suppressMirroring) {
                            rm.class("sapUiIconMirrorInRTL");
                        }
                        if (iconInfo) {
                            rm.attr("data-sap-ui-icon-content", iconInfo.content);
                            rm.style("font-family", "'" + iconInfo.fontFamily + "'");
                        }
                        rm.openEnd();
                        rm.close("span");
                    } else {
                        rm.openStart("span");
                        rm.class("sapUiIcon");
                        rm.class("sapTntNavLIGroupIcon");
                        rm.attr("aria-hidden", true);
                        rm.openEnd();
                        rm.close("span");
                    }
                }
            });
        }
    }
}