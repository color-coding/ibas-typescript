/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />

namespace ibas {
    /** 转换参数 */
    export interface IConvertParam {
        /** 格式化数据 */
        format: boolean;
        /** 使用名称 */
        nameAs: "name" | "index" | "description";
    }
    /** 数据表 */
    export class DataTable {
        /** 名称 */
        name: string;
        /** 描述 */
        description: string;
        /** 列 */
        columns: ArrayList<DataTableColumn> = new ArrayList<DataTableColumn>();
        /** 行 */
        rows: ArrayList<DataTableRow> = new ArrayList<DataTableRow>();
        /** 转为对象 */
        convert(param: IConvertParam = undefined): any[] {
            if (objects.isNull(param)) {
                param = {
                    format: true,
                    nameAs: "name",
                };
            }
            let datas: any = [];
            for (let row of this.rows) {
                let data: any = {};
                for (let index: number = 0; index < this.columns.length; index++) {
                    let col: DataTableColumn = this.columns[index];
                    let value: any = row.cells[index];
                    if (param.format) {
                        // 转换类型
                        value = col.convert(value);
                    }
                    if (param.nameAs === "index") {
                        data[index.toString()] = value;
                    } else if (param.nameAs === "description" && !ibas.strings.isEmpty(col.description)) {
                        data[col.description] = value;
                    } else {
                        data[col.name] = value;
                    }
                }
                datas.push(data);
            }
            return datas;
        }
        /**
         * 克隆
         * @param rows 保留的行索引（未定义为全部）
         */
        clone(rows: number[] = undefined): DataTable {
            let nTable: DataTable = new DataTable();
            nTable.name = this.name;
            nTable.description = this.description;
            for (let item of this.columns) {
                let nItem: DataTableColumn = new DataTableColumn();
                nItem.name = item.name;
                nItem.description = item.description;
                nItem.dataType = item.dataType;
                nTable.columns.push(nItem);
            }
            if (!(rows instanceof Array)) {
                rows = [];
                for (let index: number = 0; index < this.rows.length; index++) {
                    rows.push(index);
                }
            }
            for (let item of rows) {
                let row: DataTableRow = this.rows[item];
                let nRow: DataTableRow = new DataTableRow();
                for (let cell of row.cells) {
                    nRow.cells.add(cell);
                }
                nTable.rows.push(nRow);
            }
            return nTable;
        }
    }
    /** 数据表-列 */
    export class DataTableColumn {
        /** 名称 */
        name: string;
        /** 描述 */
        description: string;
        /** 数据类型 */
        dataType: string;
        /** 获取数据定义类型 */
        definedDataType(): emTableDataType {
            if (this.dataType === "java.lang.String") {
                return emTableDataType.ALPHANUMERIC;
            } else if (this.dataType === "java.sql.Timestamp") {
                return emTableDataType.DATE;
            } else if (this.dataType === "java.lang.Integer"
                || this.dataType === "java.lang.Short") {
                return emTableDataType.NUMERIC;
            } else if (this.dataType === "java.math.BigDecimal") {
                return emTableDataType.DECIMAL;
            }
            return emTableDataType.ALPHANUMERIC;
        }
        /** 转换类型 */
        convert(data: string): any {
            if (this.definedDataType() === emTableDataType.ALPHANUMERIC) {
                return data;
            } else if (this.definedDataType() === emTableDataType.NUMERIC) {
                return numbers.toInt(data);
            } else if (this.definedDataType() === emTableDataType.DECIMAL) {
                return numbers.valueOf(data);
            } else if (this.definedDataType() === emTableDataType.DATE) {
                return dates.valueOf(data);
            } else {
                // 未知的类型
                return data;
            }
        }
    }
    /** 数据表-行 */
    export class DataTableRow {
        /** 值 */
        cells: ArrayList<string> = new ArrayList<string>();
    }
    /** 数据表 */
    export enum emTableDataType {
        /** 字母数字 */
        ALPHANUMERIC,
        /** 数字 */
        NUMERIC,
        /** 日期 */
        DATE,
        /** 小数 */
        DECIMAL,
    }
}