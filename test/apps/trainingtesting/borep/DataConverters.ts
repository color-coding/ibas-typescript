/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import {
} from "../api/index";

/** TrainingTesting 模块的数据转换者 */
export class DataConverter4TT extends ibas.DataConverter4j {

    /** 创建业务对象转换者 */
    protected createConverter(): ibas.BOConverter {
        return new BOConverter4TT();
    }
}

/** TrainingTesting 模块的业务对象转换者 */
class BOConverter4TT extends ibas.BOConverter {

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): ibas.IBusinessObject {
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
        if (boName === bo.Customer.name) {
            if (property === bo.Customer.PROPERTY_ACTIVATED_NAME) {
                return ibas.enums.toString(ibas.emYesNo, value);
            }
        }
        return super.convertData(boName, property, value);
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value: any): any {
        if (boName === bo.Customer.name) {
            if (property === bo.Customer.PROPERTY_ACTIVATED_NAME) {
                return ibas.enums.valueOf(ibas.emYesNo, value);
            }
        }
        return super.parsingData(boName, property, value);
    }
}