/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "00000000-ibas-cc01-00000000000000000";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "shell";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.2.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_SHELL: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 登录仓库名称 */
        export const BO_REPOSITORY_CONNECT: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, "Connect");
    }
}