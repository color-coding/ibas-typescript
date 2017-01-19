/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emMessageLevel, emConditionOperation, emConditionRelationship, object,
    ICriteria, Criteria, ICondition, Condition, ISort, Sort, IChildCriteria, ChildCriteria,
    IOperationResult, OperationResult, OperationInformation
} from '../data/Data';
import { IBusinessObject, IDataConverter } from '../core/Core';
import { i18n } from '../i18n/I18N';
import { logger } from '../messages/Messages';

/**
 * 数据转换，ibas-java-后台服务
 */
export class DataConverter4ibas implements IDataConverter {
    /**
    * 转换查询为远程数据
    * @param criteria 查询
    * @returns 符合远程数据的字符串
    */
    convert(criteria: ICriteria): string;
    /**
    * 转换业务对象为远程数据
    * @param bo 业务对象
    * @returns 符合远程数据的字符串
    */
    convert(bo: IBusinessObject): string;
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
        let converter = new OperationResultConverter();
        return converter.parsing(data);
    }

}

/**
 * 查询转换者
 */
class CriteriaConverter {

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
            "Alias": "ItemCode",
            "BracketCloseNum": 0,
            "BracketOpenNum": 0,
            "ComparedAlias": "",
            "CondVal": "T000",
            "Operation": "co_CONTAIN",
            "Relationship": "cr_AND",
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
}
/**
 * 操作结果转换者
 */
class OperationResultConverter {

    parsing(data: any): IOperationResult<any> {
        let opRslt = new OperationResult();
        if (data.type !== undefined && data.type === "OperationResult") {
            // 可识别的类型
            for (let sName in data) {
                // 遍历当前属性
                let value = data[sName]; // 属性值
                if (value === null || value === undefined) {
                    // 无效的值，不做处理
                    continue;
                }
                sName = sName.toLowerCase(); // 名称转小写，便于比较
                let names = Object.getOwnPropertySymbols(opRslt);
                for (let tName in names) {
                    if (sName === tName.toLowerCase()) {
                        // 属性相同时
                        opRslt[tName] = value;
                        value = null;// 值置为null，表示被使用
                        break;
                    }
                }
                if (value !== null) {
                    // 没有找到对应的属性
                    logger.log(emMessageLevel.WARN, "converter: [{0}] no match property in [OperationResult].", sName);
                }
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

/**
 * 业务对象转换者
 */
class BOConverter {
}

