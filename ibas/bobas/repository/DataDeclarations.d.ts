﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/** ibas的java端数据声明 */

/** 操作消息 */
export interface DataDeclaration {
    /** 数据类型 */
    type: string;
}
/** 字符串 */
export interface String extends DataDeclaration {
    /** 值 */
    value: string
}
/** 操作消息 */
export interface OperationMessage extends DataDeclaration {
    /** 结果标识 */
    SignID: string;
    /** 结果编码 */
    ResultCode: number;
    /** 结果描述 */
    Message: string;
    /** 结果时间 */
    Time: string;
    /** 用户标识 */
    UserSign: string;
}
/** 操作结果 */
export interface OperationResult extends OperationMessage {
    /** 返回对象 */
    ResultObjects: any[];
    /** 操作执行信息 */
    Informations: OperationInformation[];
}
/** 操作消息 */
export interface OperationInformation extends DataDeclaration {
    /** 名称 */
    Name: string;
    /** 标签 */
    Tag: string;
    /** 内容 */
    Content: string;
}
/** 查询 */
export interface Criteria extends DataDeclaration {
    /** 业务对象 */
    BusinessObject: string;
    /** 查询结果数量 */
    ResultCount: number;
    /** 不加载子项 */
    NoChilds: boolean;
    /** 备注 */
    Remarks: string;
    /** 查询条件集合 */
    Conditions: Condition[];
    /** 排序字段集合 */
    Sorts: Sort[];
    /** 子查询集合 */
    ChildCriterias: ChildCriteria[];
}
/** 查询条件 */
export interface Condition extends DataDeclaration {
    /** 条件字段（属性）名 */
    Alias: string;
    /** 几个闭括号"）" */
    BracketClose: number;
    /** 几个开括号"（" */
    BracketOpen: number;
    /** 比较的字段（属性）名 */
    ComparedAlias: string;
    /** 比较的值 */
    Value: string;
    /** 比较方法 */
    Operation: string;
    /** 和后续条件关系 */
    Relationship: string;
    /** 备注 */
    Remarks: string;
}
/** 排序 */
export interface Sort extends DataDeclaration {
    /** 排序的字段（属性）名 */
    Alias: string;
    /**排序方式 */
    SortType: string;
}
/** 子项查询 */
export interface ChildCriteria extends Criteria {
    /** 属性路径  */
    PropertyPath: string;
    /** 仅返回存在子项的 */
    OnlyHasChilds: boolean;
}
/** 文件信息 */
export interface FileData extends DataDeclaration {
    /** 文件名称  */
    FileName: string;
    /** 位置 */
    Location: string;
    /** 原始名称 */
    OriginalName: string;
}
/** 数据表 */
export interface DataTable extends DataDeclaration {
    /** 名称 */
    Name: string;
    /** 描述 */
    Description: string;
    /** 列 */
    Columns: DataTableColumn[];
    /** 行 */
    Rows: DataTableRow[];
}
/** 数据表-列 */
export interface DataTableColumn extends DataDeclaration {
    /** 名称 */
    Name: string;
    /** 描述 */
    Description: string;
    /** 数据类型 */
    DataType: string;
}
/** 数据表-行 */
export interface DataTableRow extends DataDeclaration {
    /** 值 */
    Cells: string[];
}
/** 键值 */
export interface KeyValue extends DataDeclaration {
    /** 键 */
    Key: string;
    /** 值 */
    Value: any;
}
/** 键描述 */
export interface KeyText extends DataDeclaration {
    /** 键 */
    Key: string;
    /** 值 */
    Text: string;
}