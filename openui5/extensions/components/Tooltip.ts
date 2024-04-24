/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace m {
            sap.ui.core.TooltipBase.extend("sap.extension.m.RichTooltip", {
                metadata: {
                    interfaces: [
                        "sap.ui.core.PopupInterface",
                    ],
                    properties: {
                        "width": {
                            type: "sap.ui.core.CSSSize",
                            defaultValue: "100%",
                        },
                    },
                    aggregations: {
                        "content": {
                            type: "sap.ui.core.Control",
                            multiple: false,
                            bindable: true,
                        },
                    },
                    defaultAggregation: "content",
                },
                renderer: function (this: RichTooltip, renderManager: sap.ui.core.RenderManager, control: RichTooltip): void {
                    let child: any = control.getAggregation("content");
                    if (child && child.isA("sap.ui.core.Control")) {
                        renderManager.openStart("div", control)
                            .accessibilityState(control, { role: "tooltip" })
                            .style("width", control.getWidth())
                            .style("max-width", "24rem")
                            .class("sapMPopup-CTX")
                            .openEnd()
                            .renderControl(child)
                            .close("div");
                    } else {
                        renderManager.openStart("span", control)
                            .accessibilityState(control, { role: "tooltip" })
                            .style("max-width", "24rem")
                            .style("display", "inline-block")
                            .style("word-wrap", "break-word")
                            .style("width", "auto")
                            .style("padding", "0.75rem")
                            .class("sapThemeBaseBG-asBackgroundColor")
                            .class("sapMPopup-CTX")
                            .openEnd()
                            .text(control.getText())
                            .close("span");
                    }
                },
                applySettings(this: RichTooltip): void {
                    (<any>sap.ui.core.TooltipBase.prototype).applySettings.apply(this, arguments);
                },
            });
        }
    }
}
