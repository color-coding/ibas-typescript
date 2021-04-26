/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace m {
            /**
             * 通用标签
             */
            sap.m.GenericTag.extend("sap.extension.m.GenericTag", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: GenericTag): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: GenericTag, value: string): GenericTag {
                    sap.m.GenericTag.prototype.setText.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setText(this: GenericTag, value: string): GenericTag {
                    return sap.m.GenericTag.prototype.setText.apply(this, arguments);
                },
                /** 重写绑定 */
                bindProperty(this: GenericTag, sName: string, oBindingInfo: any): GenericTag {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.GenericTag.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 通用标签-输入框
             */
            GenericTag.extend("sap.extension.m.RepositoryGenericTag", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositoryGenericTag): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryGenericTag, value: ibas.BORepositoryApplication | string): RepositoryGenericTag {
                    return this.setProperty("repository", utils.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryGenericTag): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryGenericTag, value: repository.IDataInfo | any): RepositoryGenericTag {
                    return this.setProperty("dataInfo", utils.dataInfo(value));
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryGenericTag, value: string): RepositoryGenericTag {
                    if (this.getBindingValue() !== value) {
                        Text.prototype.setBindingValue.apply(this, arguments);
                        if (!ibas.strings.isEmpty(value)) {
                            let dataInfo: repository.IDataInfo = this.getDataInfo();
                            if (ibas.objects.isNull(dataInfo)) {
                                return this;
                            }
                            let criteria: ibas.ICriteria = new ibas.Criteria();
                            criteria.noChilds = true;
                            for (let item of String(value).split(ibas.DATA_SEPARATOR)) {
                                if (ibas.strings.isEmpty(item)) {
                                    continue;
                                }
                                let condition: ibas.ICondition = criteria.conditions.create();
                                condition.alias = dataInfo.key;
                                condition.value = item;
                                if (criteria.conditions.length > 0) {
                                    condition.relationship = ibas.emConditionRelationship.OR;
                                }
                            }
                            repository.batchFetch(this.getRepository(), this.getDataInfo(), criteria,
                                (values) => {
                                    if (values instanceof Error) {
                                        ibas.logger.log(values);
                                    } else {
                                        let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                        keyBudilder.map(null, "");
                                        keyBudilder.map(undefined, "");
                                        let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                        textBudilder.map(null, "");
                                        textBudilder.map(undefined, "");
                                        for (let item of values) {
                                            if (keyBudilder.length > 0) {
                                                keyBudilder.append(ibas.DATA_SEPARATOR);
                                            }
                                            if (textBudilder.length > 0) {
                                                textBudilder.append(ibas.DATA_SEPARATOR);
                                                textBudilder.append(" ");
                                            }
                                            keyBudilder.append(item.key);
                                            textBudilder.append(item.text);
                                        }
                                        this.setText(textBudilder.toString());
                                    }
                                }
                            );
                        }
                    }
                    return this;
                },
            });
        }
    }
}
