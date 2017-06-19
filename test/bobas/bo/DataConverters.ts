/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import * as bobas from "../../../ibas/bobas/index";
import { SalesOrder, SalesOrderItem } from "./SalesOrder";

/**
 * Test 模块的数据转换者
 */
export class DataConverter4Test extends bobas.DataConverter4j {

    /**
     * 创建业务对象转换者
     */
    protected createConverter(): bobas.BOConverter {
        return new TestBOConverter();
    }
}

/**
 * Test 模块的业务对象转换者
 */
export class TestBOConverter extends bobas.BOConverter {

    constructor() {
        super();
    }

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): bobas.IBusinessObject {
        return data;
    }

    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected convertData(boName: string, property: string, value: any): any {

        // 不做处理，原始返回
        return value;
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value: any): any {
        if (1 > 2) {
            // 特殊处理，否则使用默认
            return value;
        } else {
            return super.parsingData(boName, property, value);
        }
    }
}

