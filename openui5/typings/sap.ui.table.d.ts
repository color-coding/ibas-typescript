// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace sap {
    namespace ui {
        namespace table {
            export enum VisibleRowCountMode {
                Auto,
                Fixed,
                Interactive
            }
            export class Table extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
                /** 获取选中的项目 */
                getSelectedIndices(): any[];
                getContextByIndex(iIndex: any): any;
                getColumns(): sap.ui.table.Column[];
                getVisibleRowCount(): number;
                getFirstVisibleRow(): number;
                setFirstVisibleRow(row: number): sap.ui.table.Table;
                setEditable(bEditable: boolean): sap.ui.table.Table;
                getExtension(): sap.ui.core.Control[];
                getRows(): sap.ui.table.Row[];
            }
            export class Column extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class Row extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
                getCells(): sap.ui.core.Control[];
            }
        }
    }
}