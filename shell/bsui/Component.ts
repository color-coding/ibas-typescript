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
                        showSwitch: { type: "boolean", defaultValue: true },
                    },
                    events: {
                        "search": {
                            parameters: {
                                searchValue: {
                                    type: "string",
                                }
                            }
                        },
                        "switch": {
                            parameters: {
                                status: {
                                    type: "string",
                                }
                            }
                        },
                    },
                    aggregations: {
                        "_searchField": { type: "sap.m.SearchField", multiple: false },
                        "_switchButton": { type: "sap.m.Button", multiple: false },
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
                    this.setAggregation("_switchButton", new sap.m.Button("", {
                        icon: "sap-icon://switch-views",
                        tooltip: ibas.i18n.prop(["shell_all", "shell_apply"]),
                        visible: this.getShowSwitch(),
                        press: (oEvent: sap.ui.base.Event) => {
                            let source: any = oEvent.getSource();
                            if (source instanceof sap.m.Button) {
                                if (source.getIcon() === "sap-icon://switch-views") {
                                    source.setIcon("sap-icon://switch-classes");
                                    source.setTooltip(ibas.i18n.prop(["shell_my", "shell_apply"]));
                                    this.fireSwitch({ status: source.getIcon() });
                                } else {
                                    source.setIcon("sap-icon://switch-views");
                                    source.setTooltip(ibas.i18n.prop(["shell_all", "shell_apply"]));
                                    this.fireSwitch({ status: source.getIcon() });
                                }
                            }
                        },
                    }));
                },
                setShowSwitch(this: NavigationListSearchItem, value: boolean): NavigationListSearchItem {
                    let button: any = this.getAggregation("_switchButton");
                    if (button instanceof sap.m.Button) {
                        button.setVisible(value);
                    }
                    this.setProperty("showSwitch", value);
                    return this;
                },
                renderGroupItem(rm: any, control: any): void {
                    let isListExpanded: any = this._isListExpanded(),
                        isNavListItemExpanded: any = this.getExpanded(),
                        items: any = this._getVisibleItems(this),
                        childrenLength: any = items.length,
                        text: any = this.getText(),
                        href: any = this.getHref(),
                        target: any = this.getTarget(),
                        tooltip: any,
                        ariaProps: any = {
                            level: "1",
                            role: "treeitem",
                            selected: false,
                            roledescription: this._resourceBundleTNTLib.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_TREE_ITEM")
                        };
                    rm.openStart("div");
                    rm.class("sapTntNavLIItem");
                    rm.class("sapTntNavLIGroup");
                    if (control._selectedItem === this) {
                        ariaProps.selected = true;
                        rm.class("sapTntNavLIItemSelected");
                    }

                    if (!this.getEnabled()) {
                        rm.class("sapTntNavLIItemDisabled");
                    }

                    if (!isListExpanded && this._hasSelectedChild(control._selectedItem)) {
                        rm.class("sapTntNavLIItemSelected");
                    }

                    // checking if there are items level 2 in the NavigationListItem
                    // if yes - there is need of aria-expanded property
                    if (isListExpanded) {
                        tooltip = this.getTooltip_AsString() || text;
                        if (tooltip) {
                            rm.attr("title", tooltip);
                        }

                        if (this.getEnabled()) {
                            rm.attr("tabindex", "-1");
                        }

                        if (childrenLength > 0) {
                            ariaProps.expanded = isNavListItemExpanded;
                        }

                        rm.accessibilityState(ariaProps);
                    }

                    rm.openEnd();

                    rm.openStart("a", this.getId() + "-a");
                    rm.attr("tabindex", "-1");
                    rm.accessibilityState({ role: "link" });

                    if (!isListExpanded) {
                        rm.accessibilityState({ hidden: true });
                    }

                    if (href) {
                        rm.attr("href", href);
                    }

                    if (target) {
                        rm.attr("target", target);
                        rm.attr("rel", (<any>sap.ui).util.defaultLinkTypes("", target));
                    }
                    rm.openEnd();
                    if (!control.getExpanded()) {
                        this._renderIcon(rm);
                    }
                    if (control.getExpanded()) {
                        let expandIconControl: any = this._getExpandIconControl();
                        expandIconControl.setVisible(this.getItems().length > 0 && this.getHasExpander());
                        expandIconControl.setSrc(this.getExpanded() ? (<any>NavigationListSearchItem).collapseIcon : (<any>NavigationListSearchItem).expandIcon);
                        expandIconControl.setTooltip(this._getExpandIconTooltip(!this.getExpanded()));

                        rm.renderControl(this.getAggregation("_searchField", null));
                        if (this.getShowSwitch()) {
                            rm.renderControl(this.getAggregation("_switchButton", null));
                        }

                        rm.renderControl(expandIconControl);
                    }

                    rm.close("a");

                    rm.close("div");
                },
                /** 改变状态 */
                chanageStatus(this: NavigationListSearchItem, status: "sap-icon://switch-views" | "sap-icon://switch-classes"): NavigationListSearchItem {
                    let button: any = this.getAggregation("_switchButton");
                    if (button instanceof sap.m.Button) {
                        button.setIcon(status);
                        if (button.getIcon() === "sap-icon://switch-views") {
                            button.setTooltip(ibas.i18n.prop(["shell_my", "shell_apply"]));
                        } else if (button.getIcon() === "sap-icon://switch-classes") {
                            button.setTooltip(ibas.i18n.prop(["shell_all", "shell_apply"]));
                        }
                        this.fireSwitch({ status: button.getIcon() });
                    }
                    return this;
                }

            });
        }
    }
}