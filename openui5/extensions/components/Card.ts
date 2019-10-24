/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace f {
            /**
             * 卡片
             */
            sap.f.Card.extend("sap.extension.f.Card", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 卡片-工具条头
             */
            sap.f.cards.Header.extend("sap.extension.f.cards.ToolbarHeader", {
                metadata: {
                    properties: {
                    },
                    aggregations: {
                        "toolbar": { type: "sap.m.Toolbar", multiple: false },
                    },
                    events: {},
                },
                renderer(oRm: sap.ui.core.RenderManager, oControl: any): void {
                    let sStatus: string = oControl.getStatusText();
                    oRm.write("<div");
                    oRm.writeControlData(oControl);
                    //  oRm.writeAttribute("tabindex", "0");
                    oRm.write(">");
                    oRm.write("<div");
                    oRm.addClass("sapFCardHeader");
                    // accessibility state
                    oRm.writeAccessibilityState(oControl, {
                        role: "group",
                        labelledby: { value: oControl._getHeaderAccessibility(), append: true },
                        // roledescription: { value: oRb.getText("ARIA_ROLEDESCRIPTION_CARD_HEADER"), append: true }
                    });
                    oRm.writeClasses();
                    oRm.write(">");
                    if (oControl.getIconSrc() || oControl.getIconInitials()) {
                        oRm.renderControl(oControl._getAvatar());
                    }
                    if (oControl.getTitle()) {
                        oRm.write("<div");
                        oRm.addClass("sapFCardHeaderText");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("<div");
                        oRm.addClass("sapFCardHeaderTextFirstLine");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("<div");
                        oRm.addClass("sapFCardHeaderTitle");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.renderControl(oControl._getTitle());
                        oRm.write("</div>");
                        if (sStatus) {
                            oRm.write("<span");
                            oRm.addClass("sapFCardStatus");
                            oRm.writeClasses();
                            oRm.write(">");
                            oRm.writeEscaped(sStatus, undefined);
                            oRm.write("</span>");
                        }
                        oRm.write("</div>");
                        if (oControl.getSubtitle()) {
                            oRm.renderControl(oControl._getSubtitle());
                        }
                        oRm.write("</div>");
                    }
                    oRm.write("</div>");
                    if (oControl.getToolbar()) {
                        oRm.write("<div");
                        let parent: any = oControl.getParent();
                        if (parent instanceof sap.f.Card && parent.getHeaderPosition() === sap.f.cards.HeaderPosition.Top) {
                            oRm.addStyle("padding", "0 0.75rem 0rem 0.75rem");
                            oRm.addStyle("border-bottom", "1px solid #cccccc;");
                        } else {
                            oRm.addStyle("padding", "0 0.75rem 0.5rem 0.75rem");
                        }
                        oRm.writeStyles();
                        oRm.write(">");
                        oRm.renderControl(oControl.getToolbar());
                        oRm.write("</div>");
                    }
                    oRm.write("</div>");
                },
                /** 重构设置 */
                applySettings(this: cards.ToolbarHeader, mSetting: any): cards.ToolbarHeader {
                    if (mSetting && mSetting.toolbar instanceof sap.m.Toolbar) {
                        let toolbar: sap.m.Toolbar = <sap.m.Toolbar>mSetting.toolbar;
                        toolbar.setStyle(sap.m.ToolbarStyle.Clear);
                        toolbar.setDesign(sap.m.ToolbarDesign.Auto);
                    }
                    sap.f.cards.Header.prototype.applySettings.apply(this, arguments);
                    return this;
                },
            });
        }
    }
}
