/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "cbf02ceb-7ffe-4811-9f70-26dde9bf69e2";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "TrainingTesting";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_TRAININGTESTING: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-物料主数据 */
        export const BO_CODE_MATERIAL: string = "CC_TT_MATERIALS";
        /** 业务对象编码-客户主数据 */
        export const BO_CODE_CUSTOMER: string = "CC_TT_CUSTOMER";
        /** 业务对象编码-销售订单 */
        export const BO_CODE_SALESORDER: string = "CC_TT_SALESORDER";
    }

    export namespace app {

    }
}
