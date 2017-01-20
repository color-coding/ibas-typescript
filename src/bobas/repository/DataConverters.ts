/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emMessageLevel, emConditionOperation, emConditionRelationship, emSortType, object,
    ICriteria, Criteria, ICondition, Condition, ISort, Sort, IChildCriteria, ChildCriteria,
    IOperationResult, OperationResult, OperationInformation
} from '../data/Data';
import { IBusinessObject, IDataConverter, IBOConverter } from '../core/Core';
import { i18n } from '../i18n/I18N';
import { logger } from '../messages/Messages';

/**
 * 数据转换者基类
 */
export class Converter {

    /**
     * 解析枚举值
     * @param targetType 目标类型
     * @param value 当前值（字符串）
     * @returns 对应枚举类型的值索引
     */
    parsingEnums(targetType: any, value: any): number {
        if (typeof value === "number") {
            // 枚举索引直接返回值
            return value;
        } else if (typeof value === "string" && !object.isNull(targetType)) {
            // 枚举索引直接返回值
            value = value.toUpperCase();
            let tmpName = null;
            // 枚举的字符在值中
            // 枚举字符去了前缀，所以需要全部比较取最短的（匹配度最高）
            for (let name in targetType) {
                if (typeof name !== "string") {
                    continue;
                }
                let tValue = name.toUpperCase();
                if (value.endsWith(tValue)) {
                    if (!object.isNull(tmpName)) {
                        // 已存在匹配的，看看是否字符最短
                        if (name.length > tmpName.length) {
                            tmpName = name;
                        }
                    } else {
                        tmpName = name;
                    }
                }
            }
            if (!object.isNull(tmpName)) {
                return targetType[tmpName];
            }
        }
        throw new Error(i18n.prop("msg_cannot_converted_to_type", targetType, value));
    }

    /**
     * 解析日期，支持以下格式
     * yyyy/MM/dd'T'HH:mm:ss
     * yyyy-MM-dd'T'HH:mm:ss
     * @param value 日期字符
     * @returns 日期
     */
    parsingDate(value: string): Date {
        let spTime = "T";
        if (value.indexOf("'T'") > 0) {
            spTime = "'T'";
        }
        let tmps = value.split(spTime);
        let date = tmps[0];
        let time = tmps[1];
        let year: number = 0, month: number = 0, day: number = 0, hour: number = 0, minute: number = 0, second: number = 0;
        if (!object.isNull(date)) {
            let spChar = "-";
            if (date.indexOf("/") > 0) {
                spChar = "/";
            }
            tmps = date.split(spChar);
            if (!object.isNull(tmps[0])) {
                year = Number.parseInt(tmps[0]);
            }
            if (!object.isNull(tmps[1])) {
                month = Number.parseInt(tmps[1]);
            }
            if (!object.isNull(tmps[2])) {
                day = Number.parseInt(tmps[2]);
            }
        }
        if (!object.isNull(time)) {
            let spChar = ":";
            tmps = time.split(spChar);
            if (!object.isNull(tmps[0])) {
                hour = Number.parseInt(tmps[0]);
            }
            if (!object.isNull(tmps[1])) {
                minute = Number.parseInt(tmps[1]);
            }
            if (!object.isNull(tmps[2])) {
                second = Number.parseInt(tmps[2]);
            }
        }
        return new Date(year, month, day, hour, minute, second);
    }

    /**
    * 转换日期
    * @param value 日期
    * @returns 日期字符串
    */
    convertDate(value: Date): string {
        let year: number = value.getFullYear(),
            month: number = value.getMonth(),
            day: number = value.getDate(),
            hour: number = value.getHours(),
            minute: number = value.getMinutes(),
            second: number = value.getSeconds();
        return year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second;
    }
}

/**
 * 数据转换者基类
 */
export abstract class DataConverter extends Converter implements IDataConverter {

    /**
    * 转换数据
    * @param data 当前类型数据
    * @returns 转换的数据
    */
    abstract convert(data: any): string;

    /**
    * 解析数据
    * @param data 原始数据
    * @returns 当前类型数据
    */
    abstract parsing(data: any): any;

}

/**
 * 业务对象转换者
 */
export abstract class BOConverter extends Converter implements IBOConverter {

    private _mapping: Map<string, any>;
    /**
    * 业务对象映射<名称，类型>
    */
    get mapping(): Map<string, any> {
        if (object.isNull(this._mapping)) {
            this._mapping = new Map<string, any>();
        }
        return this._mapping;
    }
    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected abstract customParsing(data: any): IBusinessObject;

    /**
    * 转换数据
    * @param data 当前类型数据
    * @returns 转换的数据
    */
    abstract convert(data: IBusinessObject): Object;

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(data: any): IBusinessObject {
        let dType: string = data.type;
        if (dType !== undefined) {
            if (this.mapping.has(dType)) {
                // 注册了匹配的映射类型
                let tType = this.mapping.get(dType);//对象的类型
                if (object.isNull(tType)) {
                    throw new Error(i18n.prop("msg_invaild_mapping_type", dType));
                }
                let newData: any = new tType;
                if (object.isNull(newData)) {
                    throw new Error(i18n.prop("msg_cannot_create_mapping_type_instance", dType));
                }
                logger.log(emMessageLevel.DEBUG, "converter: {0} mapped {1}.", dType, tType.name);
                this.parsingProperties(data, newData);
                return newData;
            }
        } else {
            dType = "unknown";
        }
        // 没有匹配的映射类型
        logger.log(emMessageLevel.DEBUG, "converter: {0} using custom parsing.", dType);
        let newData = this.customParsing(data);
        if (!object.isNull(newData)) {
            return newData;
        }
        // 没处理，直接返回
        logger.log(emMessageLevel.WARN, i18n.prop("msg_not_parsed_data", dType));
        return data;
    }

    /**
     * 解析属性
     * @param source 源数据（远程类型）
     * @param target 目标数据（本地类型）
     */
    protected parsingProperties(source: any, target: any) {
        for (let sName in source) {
            // 首字母改为小写
            let value = source[sName];
            let name = sName[0].toLowerCase() + sName.substring(1);
            if (Array.isArray(value)) {
                // 此属性是数组

                continue;
            } else if (value instanceof Object) {
                // 此属性是对象


                continue;
            } else if (value instanceof String) {
                // 此属性是字符

                continue;
            }
            //Object.apply(target, name, value);
            let tmp = Object.prototype.propertyIsEnumerable(name);
            for (let sName in target) {
                if (typeof target[sName] == "function") { // Is it a function?

                }
            }
        }
    }
}

/**
 * 数据转换，ibas-java-后台服务
 */
export abstract class DataConverter4ibas extends DataConverter {

    /**
     * 转为远程数据
     * @param data
     */
    convert(data: any): string {
        let remote: any = null;
        if (data instanceof Criteria) {
            let converter: CriteriaConverter = new CriteriaConverter();
            remote = converter.convert(data);
        } else {
            remote = data;
        }
        return JSON.stringify(remote);
    }

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(data: any): IOperationResult<any> {
        let converter = new OperationResultConverter(this.createBOConverter());
        return converter.parsing(data);
    }

    /**
     * 创建业务对象转换者
     */
    protected abstract createBOConverter(): BOConverter;
}

/**
 * 查询转换者
 */
class CriteriaConverter extends DataConverter {

    /**
     * 转为目标对象
     * @param data 本地对象
     */
    convert(data: Criteria): any {
        if (!(data instanceof Criteria)) {
            return data;
        }
        return this.convertCriteria(data);
    }

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(data: any): ICriteria {
        return this.parsingCriteria(data);
    }

    convertCriteria(data: ICriteria): any {
        let newData = {
            "BusinessObjectCode": "",
            "ChildCriterias": [],
            "Conditions": [],
            "NotLoadedChildren": false,
            "Remarks": "",
            "ResultCount": -1,
            "Sorts": []
        };
        newData.BusinessObjectCode = data.boCode;
        for (let item of data.childCriterias) {
            newData.ChildCriterias.push(this.convertChildCriteria(item));
        }
        for (let item of data.conditions) {
            newData.Conditions.push(this.convertCondition(item));
        }
        newData.NotLoadedChildren = data.noChilds;
        newData.Remarks = data.remarks;
        newData.ResultCount = data.result;
        for (let item of data.sorts) {
            newData.Sorts.push(this.convertSort(item));
        }
        return newData;
    }

    convertChildCriteria(data: IChildCriteria): any {
        let newData = this.convertCriteria(data);
        newData.FatherMustHasResluts = data.onlyHasChilds;
        newData.PropertyPath = data.propertyPath;
        return newData;
    }

    convertCondition(data: ICondition): any {
        let newData = {
            "Alias": "",
            "BracketCloseNum": 0,
            "BracketOpenNum": 0,
            "ComparedAlias": "",
            "CondVal": "",
            "Operation": "",
            "Relationship": "",
            "Remarks": ""
        };
        newData.Alias = data.alias;
        newData.BracketCloseNum = data.bracketClose;
        newData.BracketOpenNum = data.bracketOpen;
        newData.ComparedAlias = data.comparedAlias;
        newData.CondVal = data.condVal;
        newData.Operation = data.operation.toString();
        newData.Relationship = data.relationship.toString();
        newData.Remarks = data.remarks;
        return newData;
    }

    convertSort(data: ISort): any {
        let newData = {
            "Alias": "",
            "SortType": ""
        };
        newData.Alias = data.alias;
        newData.SortType = data.sortType.toString();
        return newData;
    }

    parsingCriteria(data: any): ICriteria {
        let newData = new Criteria();
        this.setCriteriaValues(newData, data);
        return newData;
    }

    private setCriteriaValues(criteria: ICriteria, data: any) {
        criteria.boCode = data.BusinessObjectCode;
        for (let item of data.ChildCriterias) {
            criteria.childCriterias.add(this.parsingChildCriteria(item));
        }
        for (let item of data.Conditions) {
            criteria.conditions.add(this.parsingCondition(item));
        }
        criteria.noChilds = data.NotLoadedChildren;
        criteria.remarks = data.Remarks;
        criteria.result = data.ResultCount;
        for (let item of data.Sorts) {
            criteria.sorts.add(this.parsingSort(item));
        }
    }

    parsingChildCriteria(data: any): IChildCriteria {
        let newData = new ChildCriteria();
        this.setCriteriaValues(newData, data);
        newData.onlyHasChilds = data.FatherMustHasResluts;
        newData.propertyPath = data.PropertyPath;
        return newData;
    }

    parsingCondition(data: any): ICondition {
        let newData = new Condition();
        newData.alias = data.Alias;
        newData.bracketClose = data.BracketCloseNum;
        newData.bracketOpen = data.BracketOpenNum;
        newData.comparedAlias = data.ComparedAlias;
        newData.condVal = data.CondVal;
        newData.operation = this.parsingEnums(emConditionOperation, data.Operation);
        newData.relationship = this.parsingEnums(emConditionRelationship, data.Relationship);
        newData.remarks = data.Remarks;
        return newData;
    }

    parsingSort(data: any): ISort {
        let newData = new Sort();
        newData.alias = data.Alias;
        newData.sortType = this.parsingEnums(emSortType, data.SortType);
        return newData;
    }

}

/**
 * 操作结果转换者
 */
class OperationResultConverter extends DataConverter {

    constructor(converter: BOConverter) {
        super();
        this.boConverter = converter;
    }

    protected boConverter: BOConverter;

    /**
    * 转换数据
    * @param data 当前类型数据
    * @returns 转换的数据
    */
    convert(data: IOperationResult<any>): string {
        let opRslt = {
            "type": "",
            "Message": "",
            "ResultCode": 0,
            "SignID": "",
            "UserSign": "",
            "Time": "",
            "Informations": [],
            "ResultObjects": []
        }
        var converter = this.boConverter;
        opRslt.type = "OperationResult";
        opRslt.SignID = data.signID;
        opRslt.Time = this.convertDate(data.time);
        opRslt.UserSign = data.userSign;
        opRslt.ResultCode = data.resultCode;
        opRslt.Message = data.message;
        for (let item of data.resultObjects) {
            opRslt.ResultObjects.push(converter.convert(item));
        }
        for (let item of data.informations) {
            let info = {
                "Name": "",
                "Tag": "",
                "Contents": ""
            }
            info.Name = item.name;
            info.Tag = item.tag;
            info.Contents = item.contents;
            opRslt.Informations.push(info);
        }
        return JSON.stringify(opRslt);
    }

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(data: any): IOperationResult<any> {
        let opRslt = new OperationResult();
        if (data.type !== undefined && data.type === "OperationResult") {
            // 可识别的类型
            var converter = this.boConverter;
            opRslt.signID = data.SignID;
            opRslt.time = this.parsingDate(data.Time);
            opRslt.userSign = data.UserSign;
            opRslt.resultCode = data.ResultCode;
            opRslt.message = data.Message;
            for (let item of data.ResultObjects) {
                opRslt.resultObjects.add(converter.parsing(item));
            }
            for (let item of data.Informations) {
                let info = new OperationInformation();
                info.name = item.Name;
                info.tag = item.Tag;
                info.contents = item.Contents;
                opRslt.informations.add(info);
            }
        } else {
            // 不可识别的类型，直接返回
            opRslt.resultCode = 0;
            opRslt.message = i18n.prop("msg_unrecognized_data");
            opRslt.resultObjects.add(data);
        }
        return opRslt;
    }
}


