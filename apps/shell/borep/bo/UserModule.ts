/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IUserModule } from "../../../../ibas/bsbas/systems/Systems.d";

/**
 * 用户模块
 */
export class UserModule implements IUserModule {
	/** 唯一标识 */
	id: string;
	/** 名称 */
	name: string;
	/** 类别 */
	category: string;
	/** 描述 */
	description: string;
	/** 地址 */
	address: string;
	/** 控制台名称 */
	console: string;
}