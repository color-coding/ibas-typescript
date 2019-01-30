/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace bo {
        /**
         * 用户
         */
        export class User implements IUser {
            /** 编号 */
            id: number;
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 超级用户 */
            super: boolean;
            /** 口令 */
            token: string;
            /* 归属 */
            belong: string;
            /* 身份 */
            identities: ibas.IList<string>;
        }
        /**
         * 用户模块
         */
        export class UserModule implements IUserModule {
            /** 唯一标识 */
            id: string;
            /** 名称 */
            name: string;
            /** 索引文件 */
            index: string;
            /** 控制台名称 */
            console: string;
            /** 类别 */
            category: string;
            /** 地址 */
            address: string;
            /** 仓库地址 */
            repository: string;
            /** 权限 */
            authorise: ibas.emAuthoriseType;
            /** 运行时 */
            runtime: string;
        }
        /**
         * 用户权限
         */
        export class UserPrivilege implements IUserPrivilege {
            /** 来源 */
            source: ibas.emPrivilegeSource;
            /** 权限目标 */
            target: string;
            /** 权限值 */
            value: ibas.emAuthoriseType;
            /** 自动运行 */
            automatic: boolean;
        }
        /**
         * 用户查询
         */
        export class UserQuery implements IUserQuery {
            /** 标记 */
            id: string;
            /** 名称 */
            name: string;
            /** 查询 */
            criteria: ibas.ICriteria;
            /** 顺序 */
            order: number;
            /** 查询目标 */
            target: string;
            /** 用户 */
            user: string;
        }
        /** 业务对象信息 */
        export class BOInfo implements IBOInfo {
            /** 名称 */
            name: string;
            /** 编码 */
            code: string;
            /** 类型 */
            type: string;
            /** 属性集合 */
            properties: Array<BOPropertyInfo>;
        }
        /** 业务对象属性信息 */
        export class BOPropertyInfo implements IBOPropertyInfo {
            /** 属性 */
            property: string;
            /** 描述 */
            description: string;
            /** 数据类型 */
            dataType: string;
            /** 编辑类型 */
            editType: string;
            /** 长度 */
            editSize: number;
            /** 查询 */
            searched: boolean;
            /** 系统的 */
            systemed: boolean;
            /** 授权的 */
            authorised: ibas.emAuthoriseType;
            /** 属性值集合 */
            values: Array<BOPropertyValue>;
        }
        /** 业务对象属性值 */
        export class BOPropertyValue implements IBOPropertyValue {
            /** 值 */
            value: string;
            /** 描述 */
            description: string;
        }
    }
}