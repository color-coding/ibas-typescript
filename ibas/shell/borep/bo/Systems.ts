/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";

/**
 * 用户
 */
export class User implements sys.IUser {
	/** 编号 */
	id: number;
	/** 编码 */
	code: string;
	/** 名称 */
	name: string;
	/** 超级用户 */
	super: boolean;
	/** 密码 */
	password: string;
	/* 归属 */
	belong: string;
}
/**
 * 用户模块
 */
export class UserModule implements sys.IUserModule {
	/** 唯一标识 */
	id: string;
	/** 名称 */
	name: string;
	/** 索引文件 */
	index: string;
	/** 类别 */
	category: string;
	/** 地址 */
	address: string;
	/** 仓库地址 */
	repository: string;
	/** 权限 */
	authorise:  ibas.emAuthoriseType;
}
/**
 * 用户权限
 */
export class UserPrivilege implements sys.IUserPrivilege {
	/** 来源 */
	source: ibas.emPrivilegeSource;
	/** 权限目标 */
	target: string;
	/** 权限值 */
	value: ibas.emAuthoriseType;
}
/**
 * 用户查询
 */
export class UserQuery implements sys.IUserQuery {
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
export class BOInfo implements sys.IBOInfo {
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
export class BOPropertyInfo implements sys.IBOPropertyInfo {
	/** 属性 */
	property: string;
	/** 描述 */
	description: string;
	/** 查询 */
	searched: boolean;
    /** 编辑 */
    editable: boolean;
}