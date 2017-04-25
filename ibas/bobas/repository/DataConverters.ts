/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emMessageLevel, emConditionOperation, emConditionRelationship, emSortType, objects,
    ICriteria, Criteria, ICondition, Condition, ISort, Sort, IChildCriteria, ChildCriteria,
    IOperationResult, OperationResult, OperationInformation, dates, enums,
    emApprovalStatus, emBOStatus, emDocumentStatus, emYesNo
} from "../data/index";
import {
    IBusinessObject, IDataConverter, BusinessObjectBase, BusinessObjectListBase,
    boFactory, IBOConverter,
} from "../core/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";

/**
 * 数据转换者基类
 */
export abstract class BOConverter implements IBOConverter<IBusinessObject, any> {
    /** 远程对象，类型属性名称 */
    static REMOTE_OBJECT_TYPE_PROPERTY_NAME: string = "type";
    /** 获取对象类型 */
    protected getTypeName(data: any): string {
        return data[BOConverter.REMOTE_OBJECT_TYPE_PROPERTY_NAME];
    }
    /** 设置对象类型 */
    protected setTypeName(data: any, type: string): void {
        data[BOConverter.REMOTE_OBJECT_TYPE_PROPERTY_NAME] = type;
    }

    /**
     * 解析远程数据
     * @param datas 远程数据
     * @returns 操作结果数据
     */
    parsing(data: any): IBusinessObject {
        let dType: string = this.getTypeName(data);
        if (dType !== undefined) {
            // 创建对象实例
            let tType: any = boFactory.classOf(dType);
            if (objects.isNull(tType)) {
                throw new Error(i18n.prop("msg_invaild_mapping_type", dType));
            }
            let newData: any = new tType;
            if (objects.isNull(newData)) {
                throw new Error(i18n.prop("msg_cannot_create_mapping_type_instance", dType));
            }
            logger.log(emMessageLevel.DEBUG, "converter: {0} mapped {1}.", dType, tType.name);
            this.parsingProperties(data, newData);
            return newData;
        } else {
            dType = "unknown";
        }
        // 没有匹配的映射类型
        logger.log(emMessageLevel.DEBUG, "converter: {0} using custom parsing.", dType);
        let newData: IBusinessObject = this.customParsing(data);
        if (!objects.isNull(newData)) {
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
    protected parsingProperties(source: any, target: any): void {
        for (let sName in source) {
            if (objects.isNull(sName)) {
                continue;
            }
            // 首字母改为小写
            let sValue: any = source[sName];
            let tName: string = sName;
            if (objects.isNull(tName)) {
                continue;
            }
            if (sValue instanceof Array) {
                // 此属性是数组
                if (objects.instanceOf(target[tName], BusinessObjectListBase)) {
                    // 如果是业务对象列表，则使用默认子项构造器
                    for (let item of sValue) {
                        // 创建子项实例并添加到集合
                        this.parsingProperties(item, target[tName].create());
                    }
                    // 已处理，继续下一个
                    continue;
                }
            } else if (typeof sValue === "object") {
                // 此属性是对象
                if (objects.isNull(target[tName])) {
                    // 解析对象
                    target[tName] = this.parsing(sValue);
                    // 已处理，继续下一个
                    continue;
                } else if (objects.instanceOf(target[tName], BusinessObjectBase)) {
                    // 对象属性赋值
                    this.parsingProperties(sValue, target[tName]);
                    // 已处理，继续下一个
                    continue;
                }
            } else {
                let boName: string = target.constructor.name;
                let newValue: string = this.parsingData(boName, tName, sValue);
                if (objects.isNull(newValue)) {
                    let msg: string = boName + " - " + tName;
                    logger.log(emMessageLevel.WARN, i18n.prop("msg_not_parsed_data", msg));
                } else {
                    sValue = newValue;
                }
            }
            target[tName] = sValue;
        }
    }

    /**
     * 转换数据
     * @param data 当前类型数据
     * @returns 转换的数据
     */
    convert(data: IBusinessObject): Object {
        let newData: any = {};
        this.convertProperties(data, newData);
        return newData;
    }

    /**
     * 转换属性
     * @param source 源数据（本地类型）
     * @param target 目标数据（远程类型）
     * @returns 目标数据
     */
    protected convertProperties(source: any, target: any): any {
        this.setTypeName(target, source.constructor.name);
        for (let sName in source) {
            if (objects.isNull(sName)) {
                continue;
            }
            let value: any = source[sName];
            let name: string = sName;
            if (objects.isNull(name)) {
                // 没有解析出映射关系，继续下一个属性
                continue;
            }
            if (value instanceof Array) {
                // 此属性是数组
                let newValue = [];
                for (let item of value) {
                    newValue.push(this.convertProperties(item, {}));
                }
                value = newValue;
            } else if (value instanceof Date) {
                // 此属性是字符
                value = dates.toString(value);
            } else if (value instanceof Object) {
                // 此属性是对象
                value = this.convertProperties(value, {});
            } else {
                let newValue: any = this.convertData(source.constructor.name, sName, value);
                if (objects.isNull(newValue)) {
                    let msg: string = source.constructor.name + " - " + name;
                    logger.log(emMessageLevel.WARN, i18n.prop("msg_not_converted_data", msg));
                } else {
                    value = newValue;
                }
            }
            if (objects.isNull(value)) {
                // 无效的值，则不添加此属性
                continue;
            }
            target[name] = value;
        }
        return target;
    }
    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value: any): any {
        if (typeof value === "string") {
            // 日期类型，直接转换
            if (value.length < 20 && value.indexOf("T") > 0 && value.indexOf("-") > 0 && value.indexOf(":") > 0) {
                // 字符格式为日期，yyyy-MM-ddThh:mm:ss
                return dates.valueOf(value);
            } else if (property === "DocumentStatus" || property === "LineStatus") {
                return enums.valueOf(emDocumentStatus, value);
            } else if (property === "Canceled" || property === "Referenced"
                || property === "Transfered" || property === "Activated" || property === "Deleted") {
                return enums.valueOf(emYesNo, value);
            } else if (property === "Status") {
                return enums.valueOf(emBOStatus, value);
            } else if (property === "ApprovalStatus") {
                return enums.valueOf(emApprovalStatus, value);
            }
        }
        // 不做处理，原始返回
        return value;
    }
    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected abstract convertData(boName: string, property: string, value: any): any;
    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected abstract customParsing(data: any): IBusinessObject;
}

/**
 * 数据转换，ibas-java-后台服务
 */
export abstract class DataConverter4ibas implements IDataConverter {

    /**
     * 转为远程数据
     * @param data
     */
    convert(data: any): string {
        let remote: any = null;
        if (objects.instanceOf(data, Criteria)) {
            remote = (new CriteriaConverter()).convert(data);
        } else {
            remote = this.createConverter().convert(data);
        }
        return JSON.stringify(remote);
    }

    /**
     * 解析远程数据
     * @param datas 远程数据
     * @returns 操作结果数据
     */
    parsing(data: any): IOperationResult<any> {
        return (new OperationResultConverter(this.createConverter())).parsing(data);
    }

    /**
     * 创建业务对象转换者
     */
    protected abstract createConverter(): BOConverter;
}

/**
 * 查询转换者
 */
class CriteriaConverter implements IBOConverter<ICriteria, any> {

    /**
     * 转为目标对象
     * @param data 本地对象
     */
    convert(data: Criteria): any {
        if (!(objects.instanceOf(data, Criteria))) {
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
        let newData: any = {
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
        newData.Operation = enums.toString(emConditionOperation, data.operation);
        newData.Relationship = enums.toString(emConditionRelationship, data.relationship);
        newData.Remarks = data.remarks;
        return newData;
    }

    convertSort(data: ISort): any {
        let newData = {
            "Alias": "",
            "SortType": ""
        };
        newData.Alias = data.alias;
        newData.SortType = enums.toString(emSortType, data.sortType);
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
        newData.operation = enums.valueOf(emConditionOperation, data.Operation);
        newData.relationship = enums.valueOf(emConditionRelationship, data.Relationship);
        newData.remarks = data.Remarks;
        return newData;
    }

    parsingSort(data: any): ISort {
        let newData = new Sort();
        newData.alias = data.Alias;
        newData.sortType = enums.valueOf(emSortType, data.SortType);
        return newData;
    }

}

/**
 * 操作结果转换者
 */
class OperationResultConverter implements IBOConverter<IOperationResult<any>, any> {

    constructor(converter: BOConverter) {
        this.boConverter = converter;
    }

    protected boConverter: BOConverter;

    /**
     * 转换数据
     * @param data 当前类型数据
     * @returns 转换的数据
     */
    convert(data: IOperationResult<any>): string {
        let opRslt: any = {
            "type": "",
            "Message": "",
            "ResultCode": 0,
            "SignID": "",
            "UserSign": "",
            "Time": "",
            "Informations": [],
            "ResultObjects": []
        }
        opRslt.type = "OperationResult";
        opRslt.SignID = data.signID;
        opRslt.Time = dates.toString(data.time);
        opRslt.UserSign = data.userSign;
        opRslt.ResultCode = data.resultCode;
        opRslt.Message = data.message;
        for (let item of data.resultObjects) {
            opRslt.ResultObjects.push(this.boConverter.convert(item));
        }
        for (let item of data.informations) {
            let info: any = {
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
        let opRslt: IOperationResult<any> = new OperationResult();
        if (data.type !== undefined && data.type === "OperationResult") {
            // 可识别的类型
            opRslt.signID = data.SignID;
            opRslt.time = dates.valueOf(data.Time);
            opRslt.userSign = data.UserSign;
            opRslt.resultCode = data.ResultCode;
            opRslt.message = data.Message;
            for (let item of data.ResultObjects) {
                opRslt.resultObjects.add(this.boConverter.parsing(item));
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


