/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, OperationMessages, OperationResult,
    IDataConverter, BORepositoryApplication,
    IOperationResult, RemoteListener, i18n
} from "../../../../ibas/bsbas/bsbas";
import { DataConverter4Module } from "./DataConverters";

/**
 * 业务仓库-壳-远程
 */
export class BORepositoryModule extends BORepositoryApplication {

    private converter: DataConverter4Module;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): IDataConverter {
        if (object.isNull(this.converter)) {
            this.converter = new DataConverter4Module();
        }
        return this.converter;
    }
}