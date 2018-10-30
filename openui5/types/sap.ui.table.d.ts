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
                constructor(sId: string, mSettings?: any)
                getEnableSelectAll(): boolean;
                getSelectedIndices(): any[];
                getContextByIndex(iIndex: any): any;
                getColumns(): sap.ui.table.Column[];
                getVisibleRowCount(): number;
                getFirstVisibleRow(): number;
                setFirstVisibleRow(row: number): sap.ui.table.Table;
                setEditable(bEditable: boolean): sap.ui.table.Table;
                setEnableSelectAll(bEditable: boolean): sap.ui.table.Table;
                getExtension(): sap.ui.core.Control[];
                getRows(): sap.ui.table.Row[];
                addColumn(oColumn: Column): sap.ui.table.Table;
                setRowActionCount(iVisibleRowCount?: number): sap.ui.table.Table;
                setRowActionTemplate(oRowActionTemplate): sap.ui.table.Table;
                getTitle(): sap.ui.core.Control | string;
                setTitle(title: sap.ui.core.Control | string): sap.ui.table.Table;
                getFooter(): sap.ui.core.Control | string;
                setFooter(footer: sap.ui.core.Control | string): sap.ui.table.Table;
                attachRowSelectionChange(oData?, fnFunction?, oListener?): sap.ui.table.Table;
                setSelectionMode(sSelectionMode: sap.ui.table.SelectionMode);
                setSelectedIndex(iSelectedIndex): sap.ui.table.Table;
                addSelectionInterval(iIndexFrom, iIndexTo): sap.ui.table.Table;
                setVisibleRowCount(iVisibleRowCount): sap.ui.table.Table;
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
                collapse(iRowIndex: number): sap.ui.table.TreeTable;
                collapseAll(): sap.ui.table.TreeTable;
                expandToLevel(iLevel: number): sap.ui.table.TreeTable;
                getRowActionCount(): number;
                setRowActionCount(iRowActionCount: number): sap.ui.table.TreeTable;
                getSelectedIndex(): number;
            }
            export class RowAction extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class RowActionItem extends sap.ui.core.Element {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
            export class RowSettings extends sap.ui.core.Element {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
            }
        }
    }
}