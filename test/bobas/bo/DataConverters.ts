/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import * as bobas from "../../../ibas/bobas/bobas";
import { SalesOrder } from "./SalesOrder";

/**
 * Test 模块的数据转换者
 */
export class DataConverter4Test extends bobas.DataConverter4ibas {

    /**
     * 创建业务对象转换者
     */
    protected createBOConverter(): bobas.BOConverter {
        return new TestBOConverter();
    }
}

/**
 * Test 模块的业务对象转换者
 */
class TestBOConverter extends bobas.BOConverter {

    constructor() {
        super();
        this.init();
    }

    private init() {
        // 注册业务对象映射
        this.mappingBOs("SalesOrder", SalesOrder);

        // 注册枚举映射
        
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
    protected convertData(boName: string, property: string, value
        : any): any {

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
    protected parsingData(boName: string, property: string, value
        : any): any {
        if (typeof value === "string") {
            // 日期类型，直接转换
            if (value.indexOf("T") > 0 && value.indexOf("-") > 0 && value.indexOf(":") > 0) {
                // 字符格式为日期，yyyy-MM-ddThh:mm:ss
                return this.parsingDate(value);
            }
            if (boName.startsWith(SalesOrder.name)) {
                // 销售订单类型
                if (property === "_documentStatus" || property === "_lineStatus") {
                    return this.parsingEnums(bobas.emDocumentStatus, value);
                } else if (property === "_canceled") {
                    return this.parsingEnums(bobas.emYesNo, value);
                }
            }
        }
        // 不做处理，原始返回
        return value;
    }
}

