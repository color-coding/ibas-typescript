/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />

namespace ibas {
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
        convert(conversion: boolean): any[];
        /** 转为对象 */
        convert(): any[];
        /** 转为对象 */
        convert(): any[] {
            let conversionType: boolean = true;
            if (arguments.length > 0) {
                conversionType = arguments[0];
            }
            let datas: any = [];
            let data: any;
            for (let row of this.rows) {
                data = {};
                for (var index: number = 0; index < this.columns.length; index++) {
                    var col: DataTableColumn = this.columns[index];
                    if (conversionType) {
                        // 转换类型
                        data[col.name] = col.convert(row.cells[index]);
                    } else {
                        // 不转换类型
                        data[col.name] = row.cells[index];
                    }
                }
                datas.push(data);
            }
            return datas;
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
                return numbers.toFloat(data);
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