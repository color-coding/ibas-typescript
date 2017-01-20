/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import { BOConverter, DataConverter4ibas, IBusinessObject } from '../../../src/bobas/bobas';

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
    /**
    * 转换数据
    * @param data 当前类型数据
    * @returns 转换的数据
    */
    convert(data: IBusinessObject): Object {
        return data;
    }

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(data: any): IBusinessObject {
        return data;
    }
}

