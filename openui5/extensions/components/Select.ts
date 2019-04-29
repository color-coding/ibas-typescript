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
             * 选择框
             */
            sap.m.Select.extend("sap.extension.m.Select", {
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
                getBindingValue(this: Select): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Select, value: string): Select {
                    sap.m.Select.prototype.setSelectedKey.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /** 重写此方法，设置选中值 */
                setSelection(this: Select, value: sap.ui.core.Item): Select {
                    (<any>sap.m.Select.prototype).setSelection.apply(this, arguments);
                    this.setProperty("bindingValue", this.getSelectedKey());
                    return this;
                }
            });
            /**
             * 枚举数据-选择框
             */
            Select.extend("sap.extension.m.EnumSelect", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取枚举类型
                 */
                getEnumType(this: EnumSelect): any {
                    return this.getProperty("enumType");
                },
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(this: EnumSelect, value: any): EnumSelect {
                    return this.setProperty("enumType", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: EnumSelect, value: string): EnumSelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: EnumSelect): EnumSelect {
                    Select.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: EnumSelect): EnumSelect {
                    this.destroyItems();
                    let enumType: any = this.getEnumType();
                    if (ibas.objects.isNull(enumType)) {
                        return this;
                    }
                    for (let item in enumType) {
                        if (ibas.objects.isNull(item)) {
                            continue;
                        }
                        let key: any = item;
                        let text: any = enumType[key];
                        if (typeof key !== "string" || typeof text !== "string") {
                            continue;
                        }
                        if (!isNaN(Number(key))) {
                            key = Number(key);
                        }
                        this.addItem(new sap.ui.core.ListItem("", {
                            key: key,
                            text: ibas.enums.describe(enumType, key),
                            additionalText: text
                        }));
                    }
                    return this;
                }
            });
            /**
             * 业务仓库数据-选择框
             */
            Select.extend("sap.extension.m.RepositorySelect", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 查询条件 */
                        criteria: { type: "any" },
                        /** 空白数据 */
                        blankData: { type: "any", defaultValue: {} },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositorySelect): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositorySelect, value: ibas.BORepositoryApplication | string): RepositorySelect {
                    return this.setProperty("repository", utils.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositorySelect): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositorySelect, value: repository.IDataInfo | any): RepositorySelect {
                    return this.setProperty("dataInfo", utils.dataInfo(value));
                },
                /**
                 * 获取查询
                 */
                getCriteria(this: RepositorySelect): ibas.ICriteria {
                    return this.getProperty("criteria");
                },
                /**
                 * 设置查询
                 * @param value 查询
                 */
                setCriteria(this: RepositorySelect, value: ibas.ICriteria | ibas.ICondition[]): RepositorySelect {
                    return this.setProperty("criteria", utils.criteria(value));
                },
                /**
                 * 获取空白数据
                 */
                getBlankData(this: RepositorySelect): { key: string, text: string } {
                    return this.getProperty("blankData");
                },
                /**
                 * 设置空白数据（未设置使用默认，无效值则为不使用）
                 * @param value 空白数据；undefined表示不使用
                 */
                setBlankData(this: RepositorySelect, value: { key: string, text: string }): RepositorySelect {
                    return this.setProperty("blankData", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: RepositorySelect, value: string): RepositorySelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: EnumSelect): EnumSelect {
                    Select.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: RepositorySelect): RepositorySelect {
                    this.destroyItems();
                    repository.fetch(this.getRepository(), this.getDataInfo(), this.getCriteria(),
                        (values) => {
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                let blankData: any = this.getBlankData();
                                if (blankData !== false && !ibas.objects.isNull(blankData)) {
                                    if (!blankData.key) {
                                        blankData.key = "";
                                    }
                                    if (!blankData.text) {
                                        blankData.text = ibas.i18n.prop("openui5_please_select_data");
                                    }
                                    this.addItem(new sap.ui.core.ListItem("", {
                                        key: blankData.key,
                                        text: blankData.text
                                    }));
                                }
                                for (let item of values) {
                                    this.addItem(new sap.ui.core.ListItem("", {
                                        key: item.key,
                                        text: item.text
                                    }));
                                }
                                if (this.getItems().length > 0) {
                                    if (!ibas.strings.isEmpty(this.getSelectedKey())) {
                                    } else {
                                        this.setSelectedItem(this.getFirstItem());
                                    }
                                }
                            }
                        }
                    );
                    return this;
                }
            });
            /**
             * 对象属性可选值-选择框
             */
            Select.extend("sap.extension.m.PropertySelect", {
                metadata: {
                    properties: {
                        /** 对象编码 */
                        objectCode: { type: "string" },
                        /** 属性名称 */
                        propertyName: { type: "string" },
                        /** 空白数据 */
                        blankData: { type: "any", defaultValue: { key: "", text: ibas.i18n.prop("openui5_please_select_data") } },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取对象编码
                 */
                getObjectCode(this: PropertySelect): string {
                    return this.getProperty("objectCode");
                },
                /**
                 * 设置对象编码
                 * @param value 对象编码
                 */
                setObjectCode(this: PropertySelect, value: string): PropertySelect {
                    return this.setProperty("objectCode", ibas.config.applyVariables(value));
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertySelect): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertySelect, value: string): PropertySelect {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: PropertySelect, value: string): PropertySelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: EnumSelect): EnumSelect {
                    Select.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: PropertySelect): PropertySelect {
                    let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                    boRepository.fetchBOInfos({
                        boCode: this.getObjectCode(),
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                let boName: string;
                                let propertyName: string = this.getPropertyName();
                                if (propertyName && propertyName.indexOf(".") > 0) {
                                    // 属性带路径，则取名称
                                    boName = propertyName.split(".")[0];
                                }
                                for (let data of opRslt.resultObjects) {
                                    if (boName && !ibas.strings.equalsIgnoreCase(data.name, boName)) {
                                        continue;
                                    }
                                    for (let property of data.properties) {
                                        if (ibas.strings.equalsIgnoreCase(propertyName, property.property)) {
                                            if (property.values instanceof Array) {
                                                for (let item of property.values) {
                                                    this.addItem(new sap.ui.core.ListItem("", {
                                                        key: item.value,
                                                        text: item.description
                                                    }));
                                                }
                                            }
                                        }
                                    }
                                }
                            } catch (error) {
                                ibas.logger.log(error);
                            }
                        }
                    });
                    return this;
                }
            });
            /**
             * 对象服务系列-选择框
             */
            Select.extend("sap.extension.m.SeriesSelect", {
                metadata: {
                    properties: {
                        /** 对象编码 */
                        objectCode: { type: "string" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取对象编码
                 */
                getObjectCode(this: SeriesSelect): string {
                    return this.getProperty("objectCode");
                },
                /**
                 * 设置对象编码
                 * @param value 对象编码
                 */
                setObjectCode(this: SeriesSelect, value: string): SeriesSelect {
                    return this.setProperty("objectCode", ibas.config.applyVariables(value));
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: SeriesSelect, value: string): SeriesSelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: EnumSelect): EnumSelect {
                    Select.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: SeriesSelect): SeriesSelect {
                    this.destroyItems();
                    let objectCode: string = this.getObjectCode();
                    if (ibas.strings.isEmpty(objectCode)) {
                        return this;
                    }
                    let boRepository: ibas.BORepositoryApplication = ibas.boFactory.create("BORepositoryInitialFantasy");
                    let dataInfo: repository.IDataInfo = {
                        type: "BOSeriesNumbering",
                        key: "Series",
                        text: "SeriesName",
                    };
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "ObjectCode";
                    condition.value = objectCode;
                    condition = criteria.conditions.create();
                    condition.alias = "Locked";
                    condition.value = ibas.emYesNo.NO.toString();
                    let sort: ibas.ISort = criteria.sorts.create();
                    sort.alias = "Series";
                    sort.sortType = ibas.emSortType.DESCENDING;
                    repository.fetch(boRepository, dataInfo, criteria,
                        (values) => {
                            this.addItem(new sap.ui.core.ListItem("", {
                                key: 0,
                                text: ibas.i18n.prop("openui5_manual_series")
                            }));
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                for (let item of values) {
                                    this.addItem(new sap.ui.core.ListItem("", {
                                        key: item.key,
                                        text: item.text
                                    }));
                                }
                                if (this.getItems().length > 0) {
                                    if (!ibas.strings.isEmpty(this.getSelectedKey())) {
                                    } else {
                                        this.setSelectedItem(this.getFirstItem());
                                    }
                                }
                            }
                        }
                    );
                    return this;
                }
            });
        }
    }
}
