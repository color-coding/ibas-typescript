/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/** ibas的java端数据声明 */
declare namespace ibas4j {
    /** 操作消息 */
    export interface IDataDeclaration {
        /** 数据类型 */
        type: string;
    }
    /** 字符串 */
    export interface IString extends IDataDeclaration {
        /** 值 */
        value: string;
    }
    /** 操作消息 */
    export interface IOperationMessage extends IDataDeclaration {
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
    export interface IOperationResult extends IOperationMessage {
        /** 返回对象 */
        ResultObjects: any[];
        /** 操作执行信息 */
        Informations: IOperationInformation[];
    }
    /** 操作消息 */
    export interface IOperationInformation extends IDataDeclaration {
        /** 名称 */
        Name: string;
        /** 标签 */
        Tag: string;
        /** 内容 */
        Content: string;
    }
    /** 查询 */
    export interface ICriteria extends IDataDeclaration {
        /** 业务对象 */
        BusinessObject: string;
        /** 查询结果数量 */
        ResultCount: number;
        /** 不加载子项 */
        NoChilds: boolean;
        /** 备注 */
        Remarks: string;
        /** 查询条件集合 */
        Conditions: ICondition[];
        /** 排序字段集合 */
        Sorts: ISort[];
        /** 子查询集合 */
        ChildCriterias: IChildCriteria[];
    }
    /** 查询条件 */
    export interface ICondition extends IDataDeclaration {
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
    export interface ISort extends IDataDeclaration {
        /** 排序的字段（属性）名 */
        Alias: string;
        /** 排序方式 */
        SortType: string;
    }
    /** 子项查询 */
    export interface IChildCriteria extends ICriteria {
        /** 属性路径  */
        PropertyPath: string;
        /** 仅返回存在子项的 */
        OnlyHasChilds: boolean;
    }
    /** 文件信息 */
    export interface IFileData extends IDataDeclaration {
        /** 文件名称  */
        FileName: string;
        /** 位置 */
        Location: string;
        /** 原始名称 */
        OriginalName: string;
    }
    /** 数据表 */
    export interface IDataTable extends IDataDeclaration {
        /** 名称 */
        Name: string;
        /** 描述 */
        Description: string;
        /** 列 */
        Columns: IDataTableColumn[];
        /** 行 */
        Rows: IDataTableRow[];
    }
    /** 数据表-列 */
    export interface IDataTableColumn extends IDataDeclaration {
        /** 名称 */
        Name: string;
        /** 描述 */
        Description: string;
        /** 数据类型 */
        DataType: string;
    }
    /** 数据表-行 */
    export interface IDataTableRow extends IDataDeclaration {
        /** 值 */
        Cells: string[];
    }
    /** 键值 */
    export interface IKeyValue extends IDataDeclaration {
        /** 键 */
        Key: string;
        /** 值 */
        Value: any;
    }
    /** 键描述 */
    export interface IKeyText extends IDataDeclaration {
        /** 键 */
        Key: string;
        /** 值 */
        Text: string;
    }
    /** 用户字段 */
    export interface IUserField extends IDataDeclaration {
        /** 名称 */
        Name: string;
        /** 数据类型 */
        ValueType: string;
        /** 值 */
        Value: string;
    }
}