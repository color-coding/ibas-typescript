﻿/**
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
                    oRm.openStart("div", oControl);
                    //  oRm.writeAttribute("tabindex", "0");
                    oRm.openEnd();
                    oRm.openStart("div");
                    oRm.class("sapFCardHeader");
                    oRm.openEnd();
                    if (oControl.getIconSrc() || oControl.getIconInitials()) {
                        oRm.renderControl(oControl._getAvatar());
                    }
                    if (oControl.getTitle()) {
                        oRm.openStart("div");
                        oRm.class("sapFCardHeaderText");
                        oRm.openEnd();
                        oRm.openStart("div");
                        oRm.class("sapFCardHeaderTextFirstLine");
                        oRm.openEnd();
                        oRm.openStart("div");
                        oRm.class("sapFCardHeaderTitle");
                        oRm.openEnd();
                        oRm.renderControl(oControl._getTitle());
                        oRm.close("div");
                        if (sStatus) {
                            oRm.openStart("span");
                            oRm.class("sapFCardStatus");
                            oRm.openEnd();
                            oRm.text(sStatus);
                            oRm.close("span");
                        }
                        oRm.close("div");
                        if (oControl.getSubtitle()) {
                            oRm.renderControl(oControl._getSubtitle());
                        }
                        oRm.close("div");
                    }
                    oRm.close("div");
                    if (oControl.getToolbar()) {
                        oRm.openStart("div");
                        let parent: any = oControl.getParent();
                        if (parent instanceof sap.f.Card && parent.getHeaderPosition() === sap.f.cards.HeaderPosition.Top) {
                            oRm.style("padding", "0 0.75rem 0rem 0.75rem");
                            oRm.style("border-bottom", "1px solid #cccccc;");
                        } else {
                            oRm.style("padding", "0 0.75rem 0.5rem 0.75rem");
                        }
                        oRm.openEnd();
                        oRm.renderControl(oControl.getToolbar());
                        oRm.close("div");
                    }
                    oRm.close("div");
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
