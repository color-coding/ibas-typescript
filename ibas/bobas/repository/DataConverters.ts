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
} from "../data/index";
import {
    IBusinessObject, IDataConverter, IBOConverter, BusinessObjectBase, BusinessObjectListBase
} from "../core/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";

/**
 * 数据转换者基类
 */
export class Converter {

    private _enumsMapping: Map<any, Map<any, string>>;
    /**
     * 业务对象映射<名称，类型>
     */
    get enumsMapping(): Map<any, Map<any, string>> {
        if (object.isNull(this._enumsMapping)) {
            this._enumsMapping = new Map<any, Map<any, string>>();
            this.initEnums();
        }
        return this._enumsMapping;
    }
    /**
     * 注册枚举映射
     * @param emType 枚举类型
     * @param source 本地值
     * @param target 目标值
     */
    protected mappingEnums(emType: any, source: any, target: any) {
        let vMap: Map<any, string>;
        if (!this.enumsMapping.has(emType)) {
            vMap = new Map<any, string>();
            this.enumsMapping.set(emType, vMap);
        } else {
            vMap = this.enumsMapping.get(emType);
        }
        vMap.set(source, target);
    }

    private initEnums() {
        /*
        // 已调整服务端定义，以下代码在ibas-v0.1.2中无效。
        // emConditionOperation
        this.mappingEnums(emConditionOperation, emConditionOperation.CONTAIN, "co_CONTAIN");
        this.mappingEnums(emConditionOperation, emConditionOperation.END, "co_END");
        this.mappingEnums(emConditionOperation, emConditionOperation.EQUAL, "co_EQUAL");
        this.mappingEnums(emConditionOperation, emConditionOperation.GRATER_EQUAL, "co_GRATER_EQUAL");
        this.mappingEnums(emConditionOperation, emConditionOperation.GRATER_THAN, "co_GRATER_THAN");
        this.mappingEnums(emConditionOperation, emConditionOperation.IS_NULL, "co_IS_NULL");
        this.mappingEnums(emConditionOperation, emConditionOperation.LESS_EQUAL, "co_LESS_EQUAL");
        this.mappingEnums(emConditionOperation, emConditionOperation.LESS_THAN, "co_LESS_THAN");
        this.mappingEnums(emConditionOperation, emConditionOperation.NONE, "co_NONE");
        this.mappingEnums(emConditionOperation, emConditionOperation.NOT_CONTAIN, "co_NOT_CONTAIN");
        this.mappingEnums(emConditionOperation, emConditionOperation.NOT_EQUAL, "co_NOT_EQUAL");
        this.mappingEnums(emConditionOperation, emConditionOperation.NOT_NULL, "co_NOT_NULL");
        this.mappingEnums(emConditionOperation, emConditionOperation.START, "co_START");
        // emConditionRelationship
        this.mappingEnums(emConditionRelationship, emConditionRelationship.AND, "cr_CONTAIN");
        this.mappingEnums(emConditionRelationship, emConditionRelationship.NONE, "cr_END");
        this.mappingEnums(emConditionRelationship, emConditionRelationship.OR, "cr_NONE");
        // emSortType
        this.mappingEnums(emSortType, emSortType.ASCENDING, "st_DESCENDING");
        this.mappingEnums(emSortType, emSortType.DESCENDING, "st_ASCENDING");
        */
    }

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
     * 转换枚举值
     * @param emType 枚举类型
     * @param value 值
     * @returns 转换的值
     */
    convertEnums(targetType: any, value: any): any {
        if (this.enumsMapping.has(targetType)) {
            // 存在此类型的映射
            let vMap = this.enumsMapping.get(targetType);
            if (vMap.has(value)) {
                return vMap.get(value);
            }
        }
        if (typeof value === "number") {
            // 值是数值类型
            for (let item in targetType) {
                // 遍历枚举的所有属性
                if (targetType[item] === value) {
                    // 当枚举的值与值相同时，返回名称，即值对应的字符串
                    return item;
                }
            }
        }
        return value;
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
     * @param sign 操作标记
     * @returns 转换的数据
     */
    abstract convert(data: any, sign: string): string;
    /**
     * 解析数据
     * @param data 原始数据
     * @param sign 操作标记
     * @returns 当前类型数据
     */
    abstract parsing(data: any, sign: string): any;

}

/**
 * 业务对象转换者
 */
export abstract class BOConverter extends Converter implements IBOConverter {
    /**
     * 属性名称，类型
     */
    static PROPERTY_NAME_TYPE: string = "type";

    private _boMapping: Map<string, any>;
    /**
     * 业务对象映射<名称，类型>
     */
    get boMapping(): Map<string, any> {
        if (object.isNull(this._boMapping)) {
            this._boMapping = new Map<string, any>();
        }
        return this._boMapping;
    }

    /**
     * 注册业务对象映射
     * @param boType 类型名称
     * @param localType 本地类型
     */
    protected mappingBOs(boType: string, localType: any) {
        this.boMapping.set(boType, localType);
    }

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected abstract customParsing(data: any): IBusinessObject;

    /**
     * 转换数据
     * 默认原则是：属性去“_”并首字母改大写
     * @param data 当前类型数据
     * @returns 转换的数据
     */
    convert(data: IBusinessObject): Object {
        let newData = {};
        this.convertProperties(data, newData);
        return newData;
    }

    /**
     * 获取映射的转换属性名称
     * @param name 源名称
     * @param value 值
     * @returns 映射的名称；null时表示没有映射。
     */
    protected mappingConvertProperty(name: string, value: any): string {
        if (BOConverter.PROPERTY_NAME_TYPE === name) {
            // 类型
            return name;
        }
        if (!name.startsWith("_")) {
            // 非“_”开始属性名称，表示不映射属性
            return null;
        }
        // 去除“_”并后面字母改大写
        let newName = name[1].toUpperCase() + name.substring(2);
        if (typeof value === "boolean") {
            // 布尔类型，映射规则是，替换“_”为“is”
            newName = "is" + newName;
        }
        return newName;
    }

    /**
     * 转换属性
     * @param source 源数据（本地类型）
     * @param target 目标数据（远程类型）
     * @returns 目标数据
     */
    protected convertProperties(source: any, target: any): any {
        let sType = source.constructor.name;
        target.type = sType;
        for (let sName in source) {
            if (object.isNull(sName)) {
                continue;
            }
            // 首字母改为小写
            let value = source[sName];
            let name = this.mappingConvertProperty(sName, value);
            if (object.isNull(name)) {
                // 没有解析出映射关系，继续下一个属性
                continue;
            }
            if (Array.isArray(value)) {
                // 此属性是数组
                let newValue = [];
                for (let item of value) {
                    newValue.push(this.convertProperties(item, {}));
                }
                value = newValue;
            } else if (value instanceof Date) {
                // 此属性是字符
                value = this.convertDate(value);
            } else if (value instanceof Object) {
                // 此属性是对象
                value = this.convertProperties(value, {});
            } else {
                let newValue = this.convertData(sType, sName, value);
                if (object.isNull(newValue)) {
                    let msg = sType + " - " + name;
                    logger.log(emMessageLevel.WARN, i18n.prop("msg_not_converted_data", msg));
                } else {
                    value = newValue;
                }
            }
            if (object.isNull(value)) {
                // 无效的值，则不添加此属性
                continue;
            }
            target[name] = value;
        }
        return target;
    }

    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected abstract convertData(boName: string, property: string, value
        : any): any;

    /**
     * 解析远程数据
     * @param datas 远程数据
     * @returns 操作结果数据
     */
    parsing(data: any): IBusinessObject {
        let dType: string = data.type;
        if (dType !== undefined) {
            if (this.boMapping.has(dType)) {
                // 注册了匹配的映射类型
                let tType = this.boMapping.get(dType);// 对象的类型
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
     * 获取映射的解析属性名称
     * @param name 源名称
     * @param value 值
     * @returns 映射的名称；null时表示没有映射。
     */
    protected mappingParsingProperty(name: string, value: any): string {
        if (BOConverter.PROPERTY_NAME_TYPE === name) {
            // 类型
            return name;
        }
        let newName = name;
        if (newName.startsWith("is")) {
            newName = newName.substring(2);
        }
        newName = "_" + newName[0].toLowerCase() + newName.substring(1);
        return newName;
    }

    /**
     * 解析属性
     * @param source 源数据（远程类型）
     * @param target 目标数据（本地类型）
     */
    protected parsingProperties(source: any, target: any) {
        if (target.isLoading !== undefined) {
            // 置为赋值状态
            target.isLoading = true;
        }
        for (let sName in source) {
            if (object.isNull(sName)) {
                continue;
            }
            // 首字母改为小写
            let value = source[sName];
            let name = this.mappingParsingProperty(sName, value);
            if (object.isNull(name)) {
                continue;
            }
            if (Array.isArray(value)) {
                // 此属性是数组
                if (target[name] instanceof BusinessObjectListBase) {
                    // 如果是业务对象列表，则使用默认子项构造器
                    for (let item of value) {
                        // 创建子项实例并添加到集合
                        let newValue = target[name].create();
                        this.parsingProperties(item, newValue);
                    }
                    // 已处理，继续下一个
                    continue;
                }
            } else if (typeof value === "object") {
                // 此属性是对象
                if (target[name] instanceof BusinessObjectBase) {
                    this.parsingProperties(value, target[name]);
                    // 已处理，继续下一个
                    continue;
                }
            } else {
                let boName = target.constructor.name;
                let property = name;
                let newValue = this.parsingData(boName, property, value);
                if (object.isNull(newValue)) {
                    let msg = boName + " - " + property;
                    logger.log(emMessageLevel.WARN, i18n.prop("msg_not_parsed_data", msg));
                } else {
                    value = newValue;
                }
            }
            target[name] = value;
        }
        if (target.isLoading !== undefined) {
            // 取消赋值状态
            target.isLoading = false;
        }
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected abstract parsingData(boName: string, property: string, value
        : any): any;
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
            let converter = new CriteriaConverter();
            remote = converter.convert(data);
        } else {
            let converter = this.createBOConverter();
            remote = converter.convert(data);
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
            "BOCode": "",
            "ChildCriterias": [],
            "Conditions": [],
            "NoChilds": false,
            "Remarks": "",
            "ResultCount": -1,
            "Sorts": []
        };
        newData.BOCode = data.boCode;
        for (let item of data.childCriterias) {
            newData.ChildCriterias.push(this.convertChildCriteria(item));
        }
        for (let item of data.conditions) {
            newData.Conditions.push(this.convertCondition(item));
        }
        newData.NoChilds = data.noChilds;
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
            "BracketClose": 0,
            "BracketOpen": 0,
            "ComparedAlias": "",
            "Value": "",
            "Operation": "",
            "Relationship": "",
            "Remarks": ""
        };
        newData.Alias = data.alias;
        newData.BracketClose = data.bracketClose;
        newData.BracketOpen = data.bracketOpen;
        newData.ComparedAlias = data.comparedAlias;
        newData.Value = data.value;
        newData.Operation = this.convertEnums(emConditionOperation, data.operation);
        newData.Relationship = this.convertEnums(emConditionRelationship, data.relationship);
        newData.Remarks = data.remarks;
        return newData;
    }

    convertSort(data: ISort): any {
        let newData = {
            "Alias": "",
            "SortType": ""
        };
        newData.Alias = data.alias;
        newData.SortType = this.convertEnums(emSortType, data.sortType);
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
        newData.value = data.Value;
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


