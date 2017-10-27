/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, Criteria, Condition, Sort, ChildCriteria, OperationResult,
    dates, enums, OperationMessage, FileData, OperationInformation, List,
    emApprovalStatus, emBOStatus, emDocumentStatus, emYesNo, ArrayList,
    emMessageLevel, emConditionOperation, emConditionRelationship, emSortType,
    DataTable, DataTableColumn, DataTableRow, KeyText, KeyValue
} from "../data/index";
import {
    IBusinessObject, IDataConverter, BusinessObjectBase, BusinessObjectListBase,
    boFactory, IBOConverter,
} from "../core/index";
import { i18n } from "../i18n/index";
import { logger } from "../messages/index";
import * as ibas4j from "./DataDeclarations.d";

/** 数据转换，ibas4java */
export abstract class DataConverter4j implements IDataConverter {
    /**
     * 转换业务对象数据
     * @param data 本地类型
     * @param sign 特殊标记
     * @returns 目标类型
     */
    convert(data: any, sign: string): any {
        if (objects.instanceOf(data, OperationResult)) {
            let newData: OperationResult<any> = data;
            let resultObjects: any[] = [];
            for (let item of newData.resultObjects) {
                resultObjects.push(this.convert(item, null));
            }
            let informations: ibas4j.OperationInformation[] = [];
            for (let item of newData.informations) {
                informations.push(this.convert(item, null));
            }
            let remote: ibas4j.OperationResult = {
                type: data.constructor.name,
                SignID: newData.signID,
                Time: dates.toString(newData.time),
                UserSign: newData.userSign,
                ResultCode: newData.resultCode,
                Message: newData.message,
                ResultObjects: resultObjects,
                Informations: informations
            };
            return remote;
        } else if (objects.instanceOf(data, OperationInformation)) {
            let newData: OperationInformation = data;
            let remote: ibas4j.OperationInformation = {
                type: data.constructor.name,
                Name: newData.name,
                Tag: newData.tag,
                Contents: newData.contents,
            };
            return remote;
        } else if (objects.instanceOf(data, OperationMessage)) {
            let newData: OperationMessage = data;
            let remote: ibas4j.OperationMessage = {
                type: data.constructor.name,
                SignID: newData.signID,
                UserSign: newData.userSign,
                Time: dates.toString(newData.time),
                ResultCode: newData.resultCode,
                Message: newData.message,
            };
            return remote;
        } else if (objects.instanceOf(data, Criteria)) {
            let newData: Criteria = data;
            let conditions: ibas4j.Condition[] = [];
            for (let item of newData.conditions) {
                conditions.push(this.convert(item, null));
            }
            let sorts: ibas4j.Sort[] = [];
            for (let item of newData.sorts) {
                sorts.push(this.convert(item, null));
            }
            let childCriteria: ibas4j.ChildCriteria[] = [];
            for (let item of newData.childCriterias) {
                childCriteria.push(this.convert(item, null));
            }
            let remote: ibas4j.Criteria = {
                type: data.constructor.name,
                BusinessObject: newData.businessObject,
                ResultCount: newData.result,
                NoChilds: newData.noChilds,
                Remarks: newData.remarks,
                Conditions: conditions,
                ChildCriterias: childCriteria,
                Sorts: sorts
            };
            return remote;
        } else if (objects.instanceOf(data, ChildCriteria)) {
            let newData: ChildCriteria = data;
            let conditions: ibas4j.Condition[] = [];
            for (let item of newData.conditions) {
                conditions.push(this.convert(item, null));
            }
            let sorts: ibas4j.Sort[] = [];
            for (let item of newData.sorts) {
                sorts.push(this.convert(item, null));
            }
            let childCriteria: ibas4j.ChildCriteria[] = [];
            for (let item of newData.childCriterias) {
                childCriteria.push(this.convert(item, null));
            }
            let remote: ibas4j.ChildCriteria = {
                type: data.constructor.name,
                BusinessObject: newData.businessObject,
                ResultCount: newData.result,
                NoChilds: newData.noChilds,
                Remarks: newData.remarks,
                PropertyPath: newData.propertyPath,
                OnlyHasChilds: newData.onlyHasChilds,
                Conditions: conditions,
                ChildCriterias: childCriteria,
                Sorts: sorts
            };
            return remote;
        } else if (objects.instanceOf(data, Condition)) {
            let newData: Condition = data;
            let remote: ibas4j.Condition = {
                type: data.constructor.name,
                Alias: newData.alias,
                BracketClose: newData.bracketClose,
                BracketOpen: newData.bracketOpen,
                ComparedAlias: newData.comparedAlias,
                Value: newData.value,
                Operation: enums.toString(emConditionOperation, newData.operation),
                Relationship: enums.toString(emConditionRelationship, newData.relationship),
                Remarks: newData.remarks,
            };
            return remote;
        } else if (objects.instanceOf(data, Sort)) {
            let newData: Sort = data;
            let remote: ibas4j.Sort = {
                type: data.constructor.name,
                Alias: newData.alias,
                SortType: enums.toString(emSortType, newData.sortType),
            };
            return remote;
        } else if (objects.instanceOf(data, FileData)) {
            let newData: FileData = data;
            let remote: ibas4j.FileData = {
                type: data.constructor.name,
                FileName: newData.fileName,
                Location: newData.location,
                OriginalName: newData.originalName
            };
            return remote;
        } else if (objects.instanceOf(data, KeyText)) {
            let newData: KeyText = data;
            let remote: ibas4j.KeyText = {
                type: data.constructor.name,
                Key: newData.key,
                Text: newData.text,
            };
            return remote;
        } else if (objects.instanceOf(data, KeyValue)) {
            let newData: KeyValue = data;
            let remote: ibas4j.KeyValue = {
                type: data.constructor.name,
                Key: newData.key,
                Value: newData.value,
            };
            return remote;
        } else if (!objects.isNull(this.boConverter)) {
            // 尝试业务对象转换
            return this.boConverter.convert(data);
        } else {
            throw new Error(i18n.prop("sys_unable_to_convert_data", objects.getName(objects.getType(data))));
        }
    }
    /**
     * 解析业务对象数据
     * @param data 目标类型
     * @param sign 特殊标记
     * @returns 本地类型
     */
    parsing(data: any, sign: string): any {
        if (data.type === "string") {
            let remote: ibas4j.String = data;
            return remote.value;
        } else if (data.type === OperationResult.name) {
            let remote: ibas4j.OperationResult = data;
            let newData: OperationResult<any> = new OperationResult();
            newData.signID = remote.SignID;
            newData.time = dates.valueOf(remote.Time);
            newData.userSign = remote.UserSign;
            newData.resultCode = remote.ResultCode;
            newData.message = remote.Message;
            for (let item of remote.ResultObjects) {
                newData.resultObjects.add(this.parsing(item, null));
            }
            for (let item of remote.Informations) {
                item.type = OperationInformation.name;
                newData.informations.add(this.parsing(item, null));
            }
            return newData;
        } else if (data.type === OperationInformation.name) {
            let remote: ibas4j.OperationInformation = data;
            let newData: OperationInformation = new OperationInformation();
            newData.name = remote.Name;
            newData.tag = remote.Tag;
            newData.contents = remote.Contents;
            return newData;
        } else if (data.type === OperationMessage.name) {
            let remote: ibas4j.OperationMessage = data;
            let newData: OperationMessage = new OperationMessage();
            newData.signID = remote.SignID;
            newData.userSign = remote.UserSign;
            newData.time = dates.valueOf(remote.Time);
            newData.resultCode = remote.ResultCode;
            newData.message = remote.Message;
            return newData;
        } else if (data.type === Criteria.name) {
            let remote: ibas4j.Criteria = data;
            let newData: Criteria = new Criteria();
            newData.businessObject = remote.BusinessObject;
            newData.result = remote.ResultCount;
            newData.noChilds = remote.NoChilds;
            newData.remarks = remote.Remarks;
            for (let item of remote.Conditions) {
                item.type = Condition.name;
                newData.conditions.add(this.parsing(item, null));
            }
            for (let item of remote.ChildCriterias) {
                item.type = ChildCriteria.name;
                newData.childCriterias.add(this.parsing(item, null));
            }
            for (let item of remote.Sorts) {
                item.type = Sort.name;
                newData.sorts.add(this.parsing(item, null));
            }
            return newData;
        } else if (data.type === ChildCriteria.name) {
            let remote: ibas4j.ChildCriteria = data;
            let newData: ChildCriteria = new ChildCriteria();
            newData.businessObject = remote.BusinessObject;
            newData.result = remote.ResultCount;
            newData.noChilds = remote.NoChilds;
            newData.remarks = remote.Remarks;
            newData.onlyHasChilds = remote.OnlyHasChilds;
            newData.propertyPath = remote.PropertyPath;
            for (let item of remote.Conditions) {
                item.type = Condition.name;
                newData.conditions.add(this.parsing(item, null));
            }
            for (let item of remote.ChildCriterias) {
                item.type = ChildCriteria.name;
                newData.childCriterias.add(this.parsing(item, null));
            }
            for (let item of remote.Sorts) {
                item.type = Sort.name;
                newData.sorts.add(this.parsing(item, null));
            }
            return newData;
        } else if (data.type === Condition.name) {
            let remote: ibas4j.Condition = data;
            let newData: Condition = new Condition();
            newData.alias = remote.Alias;
            newData.bracketClose = remote.BracketClose;
            newData.bracketOpen = remote.BracketOpen;
            newData.comparedAlias = remote.ComparedAlias;
            newData.value = remote.Value;
            newData.operation = enums.valueOf(emConditionOperation, remote.Operation);
            newData.relationship = enums.valueOf(emConditionRelationship, remote.Relationship);
            newData.remarks = remote.Remarks;
            return newData;
        } else if (data.type === Sort.name) {
            let remote: ibas4j.Sort = data;
            let newData: Sort = new Sort();
            newData.alias = remote.Alias;
            newData.sortType = enums.valueOf(emSortType, remote.SortType);
            return newData;
        } else if (data.type === FileData.name) {
            let remote: ibas4j.FileData = data;
            let newData: FileData = new FileData();
            newData.fileName = remote.FileName;
            newData.location = remote.Location;
            newData.originalName = remote.OriginalName;
            return newData;
        } else if (data.type === DataTable.name) {
            let remote: ibas4j.DataTable = data;
            let newData: DataTable = new DataTable();
            newData.name = remote.Name;
            newData.description = remote.Description;
            for (let item of remote.Columns) {
                item.type = DataTableColumn.name;
                newData.columns.add(this.parsing(item, null));
            }
            for (let item of remote.Rows) {
                item.type = DataTableRow.name;
                newData.rows.add(this.parsing(item, null));
            }
            return newData;
        } else if (data.type === DataTableColumn.name) {
            let remote: ibas4j.DataTableColumn = data;
            let newData: DataTableColumn = new DataTableColumn();
            newData.name = remote.Name;
            newData.description = remote.Description;
            newData.dataType = remote.DataType;
            return newData;
        } else if (data.type === DataTableRow.name) {
            let remote: ibas4j.DataTableRow = data;
            let newData: DataTableRow = new DataTableRow();
            for (let item of remote.Cells) {
                newData.cells.add(item);
            }
            return newData;
        } else if (data.type === KeyText.name) {
            let remote: ibas4j.KeyText = data;
            let newData: KeyText = new KeyText();
            newData.key = remote.Key;
            newData.text = remote.Text;
            return newData;
        } else if (data.type === KeyValue.name) {
            let remote: ibas4j.KeyValue = data;
            let newData: KeyValue = new KeyValue();
            newData.key = remote.Key;
            newData.value = remote.Value;
            return newData;
        } else if (!objects.isNull(this.boConverter)) {
            // 尝试业务对象解析
            return this.boConverter.parsing(data);
        } else {
            throw new Error(i18n.prop("sys_unable_to_parse_data", objects.isNull(data.type) ? "unknown" : data.type));
        }
    }

    private _boConverter: IBOConverter<IBusinessObject, any>;
    protected get boConverter(): IBOConverter<IBusinessObject, any> {
        if (objects.isNull(this._boConverter)) {
            this._boConverter = this.createConverter();
        }
        return this._boConverter;
    }
    /** 创建业务对象转换者 */
    protected abstract createConverter(): IBOConverter<IBusinessObject, any>;
}
/** 属性映射 */
export class PropertyMap {
    constructor(local: string, remote: string) {
        this.localProperty = local;
        this.remoteProperty = remote;
    }
    /** 本地属性 */
    localProperty: string;
    /** 远程属性 */
    remoteProperty: string;
}
/** 属性映射 */
export class PropertyMaps extends ArrayList<PropertyMap> {
    localProperty(property: string): string {
        for (let item of this) {
            if (item.remoteProperty === property) {
                return item.localProperty;
            }
        }
        return property;
    }
    remoteProperty(property: string): string {
        for (let item of this) {
            if (item.localProperty === property) {
                return item.remoteProperty;
            }
        }
        return property;
    }
}
/** 远程对象，类型属性名称 */
export const REMOTE_OBJECT_TYPE_PROPERTY_NAME: string = "type";
/** 业务对象的数据转换 */
export abstract class BOConverter implements IBOConverter<IBusinessObject, any> {
    /** 获取对象类型 */
    protected getTypeName(data: any): string {
        return data[REMOTE_OBJECT_TYPE_PROPERTY_NAME];
    }
    /** 设置对象类型 */
    protected setTypeName(data: any, type: string): void {
        data[REMOTE_OBJECT_TYPE_PROPERTY_NAME] = type;
    }

    private _propertyMaps: PropertyMaps;

    protected get propertyMaps(): PropertyMaps {
        if (objects.isNull(this._propertyMaps)) {
            this._propertyMaps = new PropertyMaps;
            this._propertyMaps.add(new PropertyMap("_new", "isNew"));
            this._propertyMaps.add(new PropertyMap("_dirty", "isDirty"));
            this._propertyMaps.add(new PropertyMap("_deleted", "isDeleted"));
            this._propertyMaps.add(new PropertyMap("_loading", undefined));// 忽略属性
            this._propertyMaps.add(new PropertyMap("_listeners", undefined));// 忽略属性
        }
        return this._propertyMaps;
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
                throw new Error(i18n.prop("sys_invaild_mapping_type", dType));
            }
            let newData: any = new tType;
            if (objects.isNull(newData)) {
                throw new Error(i18n.prop("sys_cannot_create_mapping_type_instance", dType));
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
        logger.log(emMessageLevel.WARN, i18n.prop("sys_not_parsed_data", dType));
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
            let tName: string = this.propertyMaps.localProperty(sName);
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
                    logger.log(emMessageLevel.WARN, i18n.prop("sys_not_parsed_data", msg));
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
            let name: string = this.propertyMaps.remoteProperty(sName);
            if (objects.isNull(name)) {
                // 没有解析出映射关系，继续下一个属性
                continue;
            }
            if (value instanceof Array) {
                // 此属性是数组
                let newValue: Array<any> = [];
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
                    logger.log(emMessageLevel.WARN, i18n.prop("sys_not_converted_data", msg));
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
    protected convertData(boName: string, property: string, value: any): any {
        if (typeof value === "number") {
            // 枚举类型
            if (property === "DocumentStatus" || property === "LineStatus") {
                return enums.toString(emDocumentStatus, value);
            } else if (property === "Canceled" || property === "Referenced"
                || property === "Transfered" || property === "Activated" || property === "Deleted") {
                return enums.toString(emYesNo, value);
            } else if (property === "Status") {
                return enums.toString(emBOStatus, value);
            } else if (property === "ApprovalStatus") {
                return enums.toString(emApprovalStatus, value);
            }
        } else if (value instanceof Date) {
            // 日期类型
            return dates.toString(value);
        }
        // 不做处理，原始返回
        return value;
    }
    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected abstract customParsing(data: any): IBusinessObject;
}