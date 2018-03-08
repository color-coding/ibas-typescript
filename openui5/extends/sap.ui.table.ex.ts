/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
    sap.ui.table.Table.extend("sap.ui.table.ex.Table", {
        metadata: {
            properties: {
                /** 列表选择模式（单选或多旋） */
                selectionType: { type: "any", group: "Ex", defaultValue: sap.ui.table.SelectionMode.Single },
            },
            events: {}
        },
        getSelectionType(): sap.ui.table.SelectionMode {
            return this.getProperty("selectionType");
        },
        setSelectionType(value: sap.ui.table.SelectionMode): void {
            this.setProperty("selectionType", value);
            this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
            // 当属性为Single或None时为单选，附加行选择改变事件，保证选中行只有一行
            if (value === sap.ui.table.SelectionMode.Single || value === sap.ui.table.SelectionMode.None) {
                this.attachRowSelectionChange(function (oEvent: any): void {
                    this.setSelectedIndex(this.getSelectedIndex());
                });
            }
        },
        renderer: {}
    });
}