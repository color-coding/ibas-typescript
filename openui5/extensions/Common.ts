/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        /**
         * 工具集
         */
        export namespace utils {
            /**
             * 解析业务仓库
             * @param value 值
             */
            export function repository(value: ibas.BORepositoryApplication | string | any): ibas.BORepositoryApplication {
                let boRepository: ibas.BORepositoryApplication;
                if (typeof value === "string") {
                    boRepository = ibas.boFactory.create(value);
                } else if (value instanceof ibas.BORepositoryApplication) {
                    boRepository = value;
                } else if (value instanceof Function) {
                    boRepository = new value;
                }
                return boRepository;
            }
            /**
             * 解析数据信息
             * @param value 值
             */
            export function dataInfo(value: repository.IDataInfo): repository.IDataInfo {
                let dataInfo: repository.IDataInfo = { type: undefined, key: undefined, text: undefined };
                if (typeof value === "string") {
                    dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables(value));
                } else if (typeof value === "function") {
                    dataInfo.type = value;
                } else if (typeof value === "object") {
                    for (let item in dataInfo) {
                        if (!item) {
                            continue;
                        }
                        dataInfo[item] = value[item];
                    }
                }
                if (dataInfo.type && (!dataInfo.key || !dataInfo.text)) {
                    if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BOMasterData)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_CODE;
                        }
                        if (!dataInfo.text) {
                            dataInfo.text = ibas.BO_PROPERTY_NAME_NAME;
                        }
                    } else if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BODocument)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_DOCENTRY;
                        }
                    } else if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BOSimple)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_OBJECTKEY;
                        }
                    }
                }
                return dataInfo;
            }
            /**
             * 解析查询
             * @param value 值
             */
            export function criteria(value: ibas.ICriteria | ibas.ICondition[]): ibas.ICriteria {
                let criteria: ibas.Criteria;
                if (value instanceof ibas.Criteria) {
                    criteria = value;
                } else if (value instanceof Array) {
                    criteria = new ibas.Criteria();
                    for (let item of value) {
                        if (item instanceof ibas.Condition) {
                            criteria.conditions.add(item);
                        }
                    }
                }
                return criteria;
            }
        }
        /**
         * 变量
         */
        export namespace variables {
            /**
             * 值
             */
            const VALUES: Map<any, any> = new Map<any, any>();
            /**
             * 获取值
             * @param keys 键，可以多个
             */
            export function get<T>(...keys: any[]): T {
                if (!keys || keys.length < 1) {
                    throw new RangeError("keys count.");
                }
                let key: any;
                let values: Map<any, any> = VALUES;
                for (let i: number = 0; i < keys.length; i++) {
                    key = keys[i];
                    if ((i + 1) < keys.length) {
                        let tValues: any = values.get(key);
                        if (!(tValues instanceof Map)) {
                            return undefined;
                        }
                        values = tValues;
                    } else {
                        break;
                    }
                }
                return values.get(key);
            }
            /**
             * 设置值
             * @param value 值
             * @param keys  键，可以多个
             */
            export function set<T>(value: T, ...keys: any[]): void {
                if (!keys || keys.length < 1) {
                    throw new RangeError("keys count.");
                }
                let key: any;
                let values: Map<any, any> = VALUES;
                for (let i: number = 0; i < keys.length; i++) {
                    key = keys[i];
                    if ((i + 1) < keys.length) {
                        let tValues: any = values.get(key);
                        if (ibas.objects.isNull(tValues)) {
                            tValues = new Map<any, any>();
                            values.set(key, tValues);
                        }
                        if (!(tValues instanceof Map)) {
                            throw new TypeError("key values.");
                        }
                        values = tValues;
                    } else {
                        break;
                    }
                }
                values.set(key, value);
            }
        }
    }
}
