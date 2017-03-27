/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { emPrivilegeSource, emAuthoriseType } from "../../../../ibas/bsbas/data/index";
import * as sys from "../../../../ibas/bsbas/systems/index";

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
}
/**
 * 用户模块
 */
export class UserModule implements sys.IUserModule {
	/** 唯一标识 */
	id: string;
	/** 名称 */
	name: string;
	/** 类别 */
	category: string;
	/** 地址 */
	address: string;
	/** 仓库地址 */
	repository: string;
}
/**
 * 用户权限
 */
export class UserPrivilege implements sys.IUserPrivilege {
	/** 来源 */
	source: emPrivilegeSource;
	/** 权限目标 */
	target: string;
	/** 权限值 */
	value: emAuthoriseType;
}