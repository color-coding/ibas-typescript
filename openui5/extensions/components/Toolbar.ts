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
             * 可拖动工具条
             */
            sap.m.Toolbar.extend("sap.extension.m.Toolbar", {
                metadata: {
                    dnd: true,
                    aggregations: {
                        content: {
                            type: "sap.ui.core.Control",
                            multiple: true,
                            singularName: "content",
                            dnd: {
                                draggable: true, droppable: true, layout: "Horizontal"
                            }
                        }
                    }
                },
                renderer: {}
            });
        }
    }
}
