﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/** ibas的java端数据声明 */
namespace shell {
    export namespace bo4j {
        /** 操作消息 */
        export interface IDataDeclaration {
            /** 数据类型 */
            type: string;
        }
        /** 用户 */
        export interface IUser extends IDataDeclaration {
            /** id */
            Id: number;
            /** 编码 */
            Code: string;
            /** 名称 */
            Name: string;
            /** 超级用户 */
            Super: boolean;
            /** 口令 */
            Token: string;
            /** 归属 */
            Belong: string;
            /** 密码 */
            Password?: string;
            /* 身份 */
            Identities: string;
        }
        /** 用户应用模块 */
        export interface IUserModule extends IDataDeclaration {
            /** id */
            Id: string;
            /** 名称 */
            Name: string;
            /** 类别 */
            Category: string;
            /** 控制台 */
            Console: string;
            /** 地址 */
            Address: string;
            /** 仓库地址 */
            Repository: string;
            /** 入口索引 */
            Index: string;
            /** 权限 */
            Authorise: string;
            /** 运行时 */
            Runtime: string;
        }
        /** 用户权限 */
        export interface IUserPrivilege extends IDataDeclaration {
            /** 来源 */
            Source: string;
            /** 目标 */
            Target: string;
            /** 权限值 */
            Value: string;
            /** 自动运行 */
            Automatic: string;
        }
        /** 用户配置 */
        export interface IUserConfig extends IDataDeclaration {
            /** 组 */
            Group: string;
            /** 键 */
            Key: string;
            /** 值 */
            Value: string;
        }
        /** 用户查询 */
        export interface IUserQuery extends IDataDeclaration {
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
        /** 业务对象 */
        export interface IBizObjectInfo extends IDataDeclaration {
            /** 名称 */
            Name: string;
            /** 编码 */
            Code: string;
            /** 类型 */
            Type: string;
            /** 属性集合 */
            Properties: IBizPropertyInfo[];
        }
        /** 业务对象属性 */
        export interface IBizPropertyInfo extends IDataDeclaration {
            /** 属性 */
            Name: string;
            /** 描述 */
            Description: string;
            /** 别名 */
            Alias: string;
            /** 位置 */
            Position: number;
            /** 数据类型 */
            DataType: string;
            /** 编辑类型 */
            EditType: string;
            /** 长度 */
            EditSize: number;
            /** 查询 */
            Searched: boolean;
            /** 系统的 */
            Systemed: boolean;
            /** 授权的 */
            Authorised: string;
            /** 必填的 */
            Required: boolean;
            /** 链接的对象 */
            LinkedObject: string;
            /** 值集合 */
            Values: IBizPropertyValue[];
        }
        /** 业务对象属性值 */
        export interface IBizPropertyValue extends IDataDeclaration {
            /** 值 */
            Value: string;
            /** 描述 */
            Description: string;
            /** 默认值 */
            Default: boolean;
        }
        /** 用户功能 */
        export interface IUserFunction extends IDataDeclaration {
            Id: string;
            Description: string;
            Icon: string;
            Items: IUserFunction[];
        }
    }
}