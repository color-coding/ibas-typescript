/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IUser } from "../../../../ibas/bsbas/systems/Systems.d";

/**
 * 用户
 */
export class User implements IUser {
    /** 编号 */
    id: number;
    /** 编码 */
    userCode: string;
    /** 名称 */
    userName: string;
}