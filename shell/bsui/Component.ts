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
            const NavigationListItemDesign: any = (<any>sap.tnt).NavigationListItemDesign;
            const AriaHasPopup: any = sap.ui.core.aria.HasPopup;
            const EXPAND_ICON_SRC: string = "sap-icon://navigation-right-arrow";
            const COLLAPSE_ICON_SRC: string = "sap-icon://navigation-down-arrow";

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
                    }).addStyleClass("sapMText sapTntNLIText sapMTextNoWrap"));
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
                /** 1.108 */
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
                    this._renderIcon(rm);

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
                /** 1.120 */
                onkeydown(): void { },
                onkeyup(): void { },
                renderMainElement(oRM: any, oNavigationList: any, sSubtreeId: any): void {
                    const bListExpanded: any = this._isListExpanded(),
                        aItems: any = this._getVisibleItems(this),
                        bDisabled: any = !this.getEnabled() || !this.getAllParentsEnabled(),
                        bExpanded: any = this.getExpanded(),
                        bSelectable: any = this.getSelectable(),
                        sDesign: any = this.getDesign(),
                        bExpanderVisible: any = !!aItems.length && this.getHasExpander(),
                        bExternalLink: any = this.getHref() && this.getTarget() === "_blank";

                    oRM.openStart("div")
                        .class("sapTntNLI")
                        .class("sapTntNLIFirstLevel");

                    if (bDisabled) {
                        oRM.class("sapTntNLIDisabled");
                    }

                    if (bExternalLink) {
                        oRM.class("sapTntNLIExternalLink");
                    }

                    let bSelected: boolean = false;
                    if (bSelectable && oNavigationList._selectedItem === this) {
                        oRM.class("sapTntNLISelected");
                        bSelected = true;
                    }

                    if ((!bListExpanded || !bExpanded) && aItems.includes(oNavigationList._selectedItem)) {
                        oRM.class("sapTntNLISelected");
                        bSelected = true;
                    }

                    if (bExpanderVisible) {
                        oRM.class("sapTntNLIWithExpander");
                    }

                    if (bSelectable && aItems.length) {
                        oRM.class("sapTntNLITwoClickAreas");
                    }

                    const oLinkAriaProps: any = {};

                    if (this.getAriaHasPopup() !== AriaHasPopup.None) {
                        oLinkAriaProps.haspopup = this.getAriaHasPopup();
                    }

                    if (sDesign === NavigationListItemDesign.Action) {
                        oRM.class("sapTntNLIAction");
                    }

                    if (!bSelectable) {
                        oRM.class("sapTntNLIUnselectable");
                    }

                    if (this._isInsidePopover()) {
                        oRM.class("sapTntNLIInPopover");
                    }

                    if (!bListExpanded) {
                        oLinkAriaProps.role = bSelectable ? "menuitemradio" : "menuitem";

                        if (aItems.length) {
                            oLinkAriaProps.haspopup = "tree";
                        }

                        if (this._isOverflow) {
                            oLinkAriaProps.haspopup = "menu";
                            oLinkAriaProps.label = this._resourceBundleTnt.getText("NAVIGATION_LIST_OVERFLOW_ITEM_LABEL");
                        }

                        if (bSelectable) {
                            oLinkAriaProps.checked = oNavigationList._selectedItem === this;
                            oLinkAriaProps.selected = bSelected;
                        } else {
                            oLinkAriaProps.selected = false;
                        }

                        oLinkAriaProps.roledescription = this._resourceBundleTnt.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_MENUITEM");
                    } else {
                        if (this.getSelectable() && this.getItems().length) {
                            oLinkAriaProps.description = this._resourceBundleTnt.getText("NAVIGATION_LIST_KEYBOARD_NAVIGATION") + " " + this.getText();
                        }

                        oLinkAriaProps.role = "treeitem";

                        if (bSelectable) {
                            oLinkAriaProps.selected = bSelected;
                        } else {
                            oLinkAriaProps.selected = false;
                        }

                        if (bSelected) {
                            oLinkAriaProps.current = "page";
                        }

                        if (aItems.length) {
                            oLinkAriaProps.owns = sSubtreeId;
                            oLinkAriaProps.expanded = bExpanded;
                        }
                    }

                    oRM.openEnd();

                    this._renderStartLink(oRM, oLinkAriaProps, bDisabled);

                    this._renderIcon(oRM);

                    // 不输出文字
                    if (!bListExpanded) {
                        this._renderText(oRM);
                    }

                    if (bExternalLink) {
                        this._renderExternalLinkIcon(oRM);
                    }

                    if (bListExpanded) {
                        const oIcon: any = this._getExpandIconControl();
                        oIcon.setVisible(bExpanderVisible)
                            .setSrc(bExpanded ? COLLAPSE_ICON_SRC : EXPAND_ICON_SRC)
                            .setTooltip(this._getExpandIconTooltip(!bExpanded));

                        // 输出查询控件
                        oRM.renderControl(this.getAggregation("_searchField", null));
                        if (this.getShowSwitch()) {
                            oRM.renderControl(this.getAggregation("_switchButton", null));
                        }

                        oRM.renderControl(oIcon);
                    }

                    if (!bListExpanded && this.getItems().length) {
                        const oIcon: any = this._getExpandIconControl().setSrc(EXPAND_ICON_SRC);
                        oRM.renderControl(oIcon);
                    }

                    this._renderCloseLink(oRM);

                    oRM.close("div");
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

            sap.m.NavContainer.extend("shell.ui.component.NavContainer", {
                metadata: {
                    properties: {
                    },
                    events: {
                    },
                    aggregations: {
                    },
                },
                renderer: {
                },
            });

            sap.m.TabContainer.extend("shell.ui.component.TabContainer", {
                metadata: {
                    properties: {
                    },
                    events: {
                        "afterNavigate": {
                            parameters: {
                                from: {
                                    type: sap.ui.core.Control
                                },
                                to: {
                                    type: sap.ui.core.Control
                                },
                            }
                        },
                    },
                    aggregations: {
                    },
                },
                renderer: {
                },
                onBeforeRendering(this: TabContainer): void {
                    let button: any = (<any>this).getAddButton();
                    if (button instanceof sap.m.Button) {
                        if (button.getIcon() !== "sap-icon://inspect-down") {
                            button.setIcon("sap-icon://inspect-down");
                            button.setTooltip(ibas.i18n.prop("shell_close_all_views"));
                        }
                    }
                },
                onAfterRendering(this: TabContainer): void {
                },
                addPage(this: TabContainer, container: any): TabContainer {
                    return this.addItem(container);
                },
                getPage(this: TabContainer, id: string): sap.ui.core.Control {
                    let items: sap.m.TabContainerItem[] = this.getItems();
                    for (let item of items) {
                        if (item.getId() === id) {
                            return item.getContent()[0];
                        }
                    }
                    return null;
                },
                getPages(this: TabContainer): sap.ui.core.Control[] {
                    let items: sap.m.TabContainerItem[] = this.getItems();
                    let pages: sap.ui.core.Control[] = [];
                    for (let item of items) {
                        for (let pItem of item.getContent()) {
                            if (pItem instanceof sap.ui.core.Control) {
                                pages.push(pItem);
                            }
                        }
                    }
                    return pages;
                },
                getCurrentPage(this: TabContainer): sap.ui.core.Control {
                    let items: sap.m.TabContainerItem[] = this.getItems();
                    for (let item of items) {
                        if (item.getId() !== this.getSelectedItem()) {
                            continue;
                        }
                        for (let pItem of item.getContent()) {
                            if (pItem instanceof sap.ui.core.Control) {
                                return pItem;
                            }
                        }
                    }
                    return null;
                },
                to(this: TabContainer, id: string): TabContainer {
                    let items: sap.m.TabContainerItem[] = this.getItems();
                    if (ibas.objects.isNull(id)) {
                        if (items.length > 0) {
                            this.setSelectedItem(items[0]);
                            return this;
                        }
                    }
                    for (let item of items) {
                        for (let pItem of item.getContent()) {
                            if (pItem.getId() === id) {
                                this.setSelectedItem(item);
                            }
                        }
                    }
                    return this;
                },
                back(this: TabContainer, id: string): TabContainer {
                    return this.to(id);
                },
                init(this: TabContainer): void {
                    // 基类初始化
                    (<any>sap.m.TabContainer.prototype).init.apply(this, arguments);
                    // 监听选择事件
                    this.attachItemSelect(undefined, (event: sap.ui.base.Event) => {
                        let source: any = event.getSource();
                        if (source instanceof TabContainer) {
                            setTimeout(() => {
                                // 延迟触发事件（等绘制完成）
                                source.fireAfterNavigate({ toId: source.getSelectedItem() });
                            }, 100);
                        }
                    });
                }
            });
        }
    }
}