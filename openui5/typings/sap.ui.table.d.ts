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
            export enum SelectionMode {
                MultiToggle,
                None,
                Single
            }
            export enum SelectionBehavior {
                Row,
                RowOnly,
                RowSelector
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
                addColumn(oColumn: Column): sap.ui.table.Table;
                setRowActionCount(iVisibleRowCount?: number): void;
            }
            export class Column extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
                setTemplate(oTemplate: sap.ui.core.Control): Column;
            }
            export class Row extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
                getCells(): sap.ui.core.Control[];
            }
            export class AnalyticalTable extends Table {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class TreeTable extends Table {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class RowAction extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class RowActionItem extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
        }
    }
}