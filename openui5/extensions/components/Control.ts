/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace core {
            /**
             * 控件
             */
            sap.ui.core.Control.extend("sap.extension.core.Control", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 可编辑控件
             */
            Control.extend("sap.extension.core.EditableControl", {
                metadata: {
                    properties: {
                        /** 是否可编辑 */
                        editable: { type: "boolean", defaultValue: true },
                    },
                    events: {}
                },
                renderer: {
                },
            });
        }
    }
}
