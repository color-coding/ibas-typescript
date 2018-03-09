/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace ui {
        namespace table {
            namespace ex {
                export class Table extends sap.ui.table.Table {
                    getSelectionType(): sap.ui.table.SelectionMode;
                    setSelectionType(value: sap.ui.table.SelectionMode): void;
                }
            }
        }
    }
}