/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "../../../../../ibas/bsbas/bsbas";

/**
 * 系统入口应用
 */
export class LoginView extends sys.View implements sys.ILoginView {
    /** 用户 */
    get user(): string {
        return null;
    }
    set user(value: string) {
    }
    /** 密码 */
    get password(): string {
        return null;
    }
    set password(value: string) {
    }
    /** 登陆 */
    loginEvent(): void { 

    }
    /** 绘制视图 */
    darw(): any {
        return "";
    }

}