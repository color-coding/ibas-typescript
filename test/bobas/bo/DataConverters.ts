/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import { BOConverter, DataConverter4ibas, IBusinessObject } from '../../../src/bobas/bobas';
import { SalesOrder } from './SalesOrder';

/**
 * Test 模块的数据转换者
 */
export class DataConverter4Test extends DataConverter4ibas {

    /**
     * 创建业务对象转换者
     */
    protected createBOConverter(): BOConverter {
        return new TestBOConverter();
    }
}

/**
 * Test 模块的业务对象转换者
 */
class TestBOConverter extends BOConverter {

    constructor() {
        super();
        this.mapping.set("SalesOrder", SalesOrder);
    }


    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): IBusinessObject {
        return data;
    }
}

