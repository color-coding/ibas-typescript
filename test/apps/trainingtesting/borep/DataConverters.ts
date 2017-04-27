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
export class DataConverterOnline extends ibas.DataConverter4j {

    /** 创建业务对象转换者 */
    protected createConverter(): ibas.BOConverter {
        return new TrainingTestingBOConverter();
    }
}

/** TrainingTesting 模块的业务对象转换者 */
class TrainingTestingBOConverter extends ibas.BOConverter {

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
        return super.parsingData(boName, property, value);
    }
}
/** TrainingTesting 模块的离线数据转换者 */
export class DataConverterOffline implements ibas.IDataConverter {

    private boConverter = new TrainingTestingBOConverter();
    /**
     * 转换业务对象数据
     * @param data 本地类型
     * @param sign 特殊标记
     * @returns 目标类型
     */
    convert(data: any, sign: string): any {
        return data;
    }
    /**
     * 解析业务对象数据
     * @param data 目标类型
     * @param sign 特殊标记
     * @returns 本地类型
     */
    parsing(data: any, sign: string): any {
        if (sign === ibas.strings.format("{0}s.json", bo.SalesOrder.name.toLowerCase())) {
            data[ibas.BOConverter.REMOTE_OBJECT_TYPE_PROPERTY_NAME] = bo.SalesOrder.name;
            return this.boConverter.parsing(data);
        } else if (sign === ibas.strings.format("{0}s.json", bo.Material.name.toLowerCase())) {
            data[ibas.BOConverter.REMOTE_OBJECT_TYPE_PROPERTY_NAME] = bo.Material.name;
            return this.boConverter.parsing(data);
        } else if (sign === ibas.strings.format("{0}s.json", bo.Customer.name.toLowerCase())) {
            data[ibas.BOConverter.REMOTE_OBJECT_TYPE_PROPERTY_NAME] = bo.Customer.name;
            return this.boConverter.parsing(data);
        }
        return data;
    }
}
