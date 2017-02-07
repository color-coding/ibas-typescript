/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object,
    IDataConverter,
    BORepositoryApplication
} from "../../../ibas/bobas/bobas";
import { DataConverter4Test } from "./DataConverters";

/**
 * 业务仓库应用
 */
export class BORepositoryTest extends BORepositoryApplication {

    private converter: DataConverter4Test;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): IDataConverter {
        if (object.isNull(this.converter)) {
            this.converter = new DataConverter4Test();
        }
        return this.converter;
    }

}


