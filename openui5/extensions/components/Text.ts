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
             * 文本框
             */
            sap.m.Text.extend("sap.extension.m.Text", {
                metadata: {
                    properties: {
                        /** 是否换行 */
                        wrapping: { type: "boolean", defaultValue: false },
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
                getBindingValue(this: Text): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Text, value: string): Text {
                    sap.m.Text.prototype.setText.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setText(this: Text, value: string): Text {
                    return sap.m.Text.prototype.setText.apply(this, arguments);
                },
            });
            /**
             * 业务仓库数据-文本框
             */
            Text.extend("sap.extension.m.RepositoryText", {
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
                getRepository(this: RepositoryText): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryText, value: ibas.BORepositoryApplication | string): RepositoryText {
                    return this.setProperty("repository", utils.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryText): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryText, value: repository.IDataInfo | any): RepositoryText {
                    return this.setProperty("dataInfo", utils.dataInfo(value));
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryText, value: string): RepositoryText {
                    if (this.getBindingValue() !== value) {
                        Text.prototype.setBindingValue.apply(this, arguments);
                        if (!ibas.strings.isEmpty(value)) {
                            let dataInfo: repository.IDataInfo = this.getDataInfo();
                            if (ibas.objects.isNull(dataInfo)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = new ibas.Criteria();
                            for (let item of String(value).split(ibas.DATA_SEPARATOR)) {
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
            /**
             * 数据转换-文本框
             */
            Text.extend("sap.extension.m.ConversionText", {
                metadata: {
                    properties: {
                    },
                    events: {
                        "convert": {
                            parameters: {
                                value: {
                                    type: "string",
                                },
                                done: {
                                    type: "function",
                                },
                                bindingData: {
                                    type: "any",
                                }
                            }
                        },
                    },
                },
                renderer: {
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: ConversionText, value: string): ConversionText {
                    if (this.getBindingValue() !== value) {
                        Text.prototype.setBindingValue.apply(this, arguments);
                        if (!ibas.strings.isEmpty(value)) {
                            let done: (newValue: string) => void = (newValue) => {
                                this.setText(newValue);
                            };
                            let bindingData: any = this.getBindingContext().getObject();
                            this.fireConvert({
                                value: value,
                                done: done,
                                bindingData: bindingData,
                            });
                        }
                    }
                    return this;
                }
            });
        }
    }
}
