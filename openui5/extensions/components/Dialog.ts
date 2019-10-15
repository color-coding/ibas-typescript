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
            /**
             * 对话框
             */
            sap.m.Dialog.extend("sap.extension.m.Dialog", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                onAfterRendering(this: Dialog): void {
                    (<any>sap.m.Dialog.prototype).onAfterRendering.apply(this, arguments);
                    let dom: JQuery = this.$("scrollCont");
                    if (dom) {
                        dom.css("padding", "0rem");
                    }
                }
            });
        }
    }
}
