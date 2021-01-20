/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace layout {
            /**
             * 窗体
             */
            sap.ui.layout.form.SimpleForm.extend("sap.extension.layout.SimpleForm", {
                metadata: {
                    properties: {
                        /** 无边框 */
                        noPadding: { type: "boolean", defaultValue: false },
                    },
                    events: {}
                },
                renderer: {
                },
                onAfterRendering(this: SimpleForm): void {
                    (<any>sap.ui.layout.form.SimpleForm.prototype).onAfterRendering.apply(this, arguments);
                    if (this.hasStyleClass("sapUiNoContentPadding")) {
                        let dom: JQuery = this.$("-Layout");
                        if (dom) {
                            dom = dom.children();
                            dom.css("padding", 0);
                        }
                    }
                },
            });
        }
    }
}
