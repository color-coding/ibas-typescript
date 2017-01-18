/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./BORepository.d.ts" />

import { } from './BORepository.d';
import { object, ICriteria, IOperationResult, OperationResult, OperationInformation } from '../data/Data';
import { IBusinessObject, IDataConverter, BORemoteRepositoryJQuery } from '../core/Core';
import { i18n } from '../i18n/I18N';

/**
 * 业务仓库应用
 */
class DataConverter implements IDataConverter {
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

    convert(data: any): string {
        return JSON.stringify(data);
    }

    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(...datas: any[]): IOperationResult<any> {
        if (datas.length === 1) {
            let data = datas[0];
            let opRslt = new OperationResult();
            if (data.type !== undefined && data.type === "OperationResult") {
                // 可识别的类型
                let names = Object.getOwnPropertyNames(data);
                // 遍历当前属性
                for (let newName in opRslt) {
                    for (let name of names) {
                        if (name.toLowerCase() === newName) {
                            // 属性相同时
                            if (name === "") {
                                // 属性是结果集合（ResultObjects）
                                // 转换bo

                            }
                            else {
                                opRslt[newName] = data[name];
                            }
                        }
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
        return null;
    }

}

/**
 * 业务仓库应用
 */
export class BORepositoryApplication extends BORemoteRepositoryJQuery {

    private converter: DataConverter;

    createDataConverter(): IDataConverter {
        if (object.isNull(this.converter)) {
            this.converter = new DataConverter();
        }
        return this.converter;
    }
}


