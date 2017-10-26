/**
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
/** 用户 */
export interface User extends DataDeclaration {
    /** id */
    Id: number;
    /** 编码 */
    Code: string;
    /** 名称 */
    Name: string;
    /** 超级用户 */
    Super: boolean;
    /** 密码 */
    Password: string;
    /** 归属 */
    Belong: string;
}
/** 用户应用模块 */
export interface UserModule extends DataDeclaration {
    /** id */
    Id: string;
    /** 名称 */
    Name: string;
    /** 类别 */
    Category: string;
    /** 地址 */
    Address: string;
    /** 仓库地址 */
    Repository: string;
    /** 入口索引 */
    Index: string;
	/** 权限 */
	Authorise: string;
}
/** 操作消息 */
export interface UserPrivilege extends DataDeclaration {
    /** 来源 */
    Source: string;
    /** 目标 */
    Target: string;
    /** 权限值 */
    Value: string;
}
/** 查询 */
export interface UserQuery extends DataDeclaration {
    /** 标记 */
    Id: string;
    /** 名称 */
    Name: string;
    /** 查询 */
    Criteria: string;
    /** 顺序 */
    Order: number;
    /** 用户 */
    User: string;
}
/** 查询条件 */
export interface BOInfo extends DataDeclaration {
    /** 名称 */
    Name: string;
    /** 编码 */
    Code: string;
    /** 类型 */
    Type: string;
    /** 属性集合 */
    Properties: BOPropertyInfo[];
}
/** 排序 */
export interface BOPropertyInfo extends DataDeclaration {
    /** 属性 */
    Property: string;
    /** 描述 */
    Description: string;
    /** 查询 */
    Searched: boolean;
    /** 可编辑 */
    Editable: boolean;
}