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
             * 对象属性
             */
            sap.m.ObjectAttribute.extend("sap.extension.m.ObjectAttribute", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string", defaultValue: null },
                        /** 是否换行 */
                        wrapping: { type: "boolean", defaultValue: true },
                        /** 显示值链接钮 */
                        showValueLink: { type: "boolean", defaultValue: false },
                    },
                    events: {
                        "valueLinkRequest": {
                            parameters: {
                                value: {
                                    type: "string",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                onAfterRendering(this: ObjectAttribute): void {
                    (<any>sap.m.ObjectAttribute.prototype).onAfterRendering.apply(this, arguments);
                    if (this.getWrapping() === true) {
                        if (!ibas.objects.isNull(document.getElementById(this.getId()))) {
                            if (!ibas.objects.isNull((<any>document.getElementById(this.getId())).lastChild)) {
                                (<any>(<any>document.getElementById(this.getId()).lastChild).style).cssText = "white-space: normal !important;";
                            }
                        }
                    }
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ObjectAttribute): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: ObjectAttribute, value: string): ObjectAttribute {
                    sap.m.ObjectAttribute.prototype.setText.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setText(this: ObjectAttribute, value: string): Text {
                    return sap.m.ObjectAttribute.prototype.setText.apply(this, arguments);
                },
                /** 重写绑定 */
                bindProperty(this: ObjectAttribute, sName: string, oBindingInfo: any): ObjectAttribute {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.ObjectAttribute.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                /**
                 * 获取绑定值
                 */
                getShowValueLink(this: ObjectAttribute): boolean {
                    return this.getActive();
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setShowValueLink(this: ObjectAttribute, value: boolean): ObjectAttribute {
                    return this.setActive(value);
                },
                setActive(this: ObjectAttribute, value: boolean): ObjectAttribute {
                    this.setProperty("showValueLink", value);
                    return sap.m.ObjectAttribute.prototype.setActive.apply(this, arguments);
                },
                /** 初始化 */
                init(this: ObjectAttribute): void {
                    this.attachPress(undefined, function (event: sap.ui.base.Event): void {
                        let value: any = (<ObjectAttribute>event.getSource()).getBindingValue();
                        if (!ibas.objects.isNull(value)) {
                            this.fireValueLinkRequest({ value: value });
                        }
                    });
                    (<any>sap.m.ObjectAttribute.prototype).init.apply(this, arguments);
                },
            });
            /**
             * 业务仓库数据-对象属性
             */
            ObjectAttribute.extend("sap.extension.m.RepositoryObjectAttribute", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 值描述条件 */
                        describeCriteria: { type: "any" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositoryObjectAttribute): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryObjectAttribute, value: ibas.BORepositoryApplication | string): RepositoryObjectAttribute {
                    return this.setProperty("repository", repositories.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryObjectAttribute): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryObjectAttribute, value: repository.IDataInfo | any): RepositoryObjectAttribute {
                    return this.setProperty("dataInfo", repositories.dataInfo(value));
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryObjectAttribute, value: string): RepositoryObjectAttribute {
                    if (this.getBindingValue() !== value) {
                        ObjectAttribute.prototype.setBindingValue.apply(this, arguments);
                        if (!ibas.strings.isEmpty(value)) {
                            let dataInfo: repository.IDataInfo = this.getDataInfo();
                            if (ibas.objects.isNull(dataInfo)) {
                                return this;
                            }
                            this.describeValue(value);
                        }
                    }
                    return this;
                },
                describeValue(this: RepositoryObjectAttribute, value: string): void {
                    let criteria: ibas.ICriteria;
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (this.getDescribeCriteria() instanceof Function) {
                        criteria = this.getDescribeCriteria()(value);
                    }
                    if (!(criteria instanceof ibas.Criteria)) {
                        criteria = new ibas.Criteria();
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
                                // tslint:disable-next-line: triple-equals
                                if (value === this.getProperty("bindingValue") || value == this.getProperty("bindingValue")) {
                                    this.setText(textBudilder.toString());
                                    this.setTooltip(ibas.strings.format("{0} - {1}", keyBudilder.toString(), textBudilder.toString()));
                                }
                            }
                        }
                    );
                },
                applySettings(this: RepositoryObjectAttribute, mSettings: any, oScope?: any): RepositoryObjectAttribute {
                    if (mSettings?.dataInfo?.type) {
                        if (ibas.objects.isNull(mSettings?.showValueLink)) {
                            if (!mSettings) {
                                mSettings = {};
                            }
                            mSettings.showValueLink = repositories.hasViewService(mSettings.dataInfo.type);
                        }
                    }
                    (<any>ObjectAttribute.prototype).applySettings.apply(this, arguments);
                    return this;
                },
                /** 初始化 */
                init(this: RepositoryObjectAttribute): void {
                    (<any>ObjectAttribute.prototype).init.apply(this, arguments);
                    this.attachValueLinkRequest(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof RepositoryObjectAttribute) {
                            let boCode: string = ibas.businessobjects.code(<any>source.getDataInfo()?.type);
                            if (!ibas.strings.isEmpty(boCode)) {
                                ibas.servicesManager.runLinkService({
                                    boCode: boCode,
                                    linkValue: event.getParameter("value")
                                });
                            }
                        }
                    });
                }
            });
            /**
             * 对象属性可选值-对象属性
             */
            ObjectAttribute.extend("sap.extension.m.PropertyObjectAttribute", {
                metadata: {
                    properties: {
                        /** 对象数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性名称 */
                        propertyName: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: PropertyObjectAttribute): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertyObjectAttribute, value: { code: string, name?: string } | string): PropertyObjectAttribute {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertyObjectAttribute): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertyObjectAttribute, value: string): PropertyObjectAttribute {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: PropertyObjectAttribute, value: string): PropertyObjectAttribute {
                    if (this.getBindingValue() !== value) {
                        ObjectAttribute.prototype.setBindingValue.apply(this, arguments);
                        if (ibas.strings.isEmpty(value)) {
                            return this;
                        }
                        let boInfo: { code: string, name?: string } | string | Function = this.getDataInfo();
                        if (typeof boInfo === "string") {
                            boInfo = {
                                code: boInfo,
                                name: undefined,
                            };
                        } else if (typeof boInfo === "function") {
                            boInfo = {
                                code: ibas.objects.typeOf(boInfo).BUSINESS_OBJECT_CODE,
                                name: undefined,
                            };
                        }
                        if (!boInfo || !boInfo.code) {
                            return this;
                        }
                        this.setDataInfo(boInfo);
                        let propertyName: string = this.getPropertyName();
                        if (ibas.strings.isEmpty(propertyName)) {
                            // 未设置属性则使用绑定的
                            propertyName = this.getBindingPath("bindingValue");
                        }
                        if (ibas.strings.isEmpty(propertyName)) {
                            return this;
                        }
                        this.setPropertyName(propertyName);
                        // 描述
                        this.describeValue(value);
                    }
                },
                describeValue(this: PropertyObjectAttribute, value: string): void {
                    let boInfo: any = this.getDataInfo();
                    let propertyName: string = this.getPropertyName();
                    let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                    boRepository.fetchBizObjectInfo({
                        user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                        boCode: ibas.config.applyVariables(boInfo.code),
                        boName: boInfo.name,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                let boName: string;
                                if (propertyName.indexOf(".") > 0) {
                                    // 属性带路径，则取名称
                                    boName = propertyName.split(".")[0];
                                }
                                for (let data of opRslt.resultObjects) {
                                    if (boName && !ibas.strings.equalsIgnoreCase(data.name, boName)) {
                                        continue;
                                    }
                                    for (let property of data.properties) {
                                        if (ibas.strings.equalsIgnoreCase(propertyName, property.name)) {
                                            if (property.values instanceof Array) {
                                                let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                                keyBudilder.map(null, "");
                                                keyBudilder.map(undefined, "");
                                                let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                                textBudilder.map(null, "");
                                                textBudilder.map(undefined, "");
                                                for (let item of property.values) {
                                                    if (ibas.strings.equals(item.value, value)) {
                                                        keyBudilder.append(item.value);
                                                        textBudilder.append(item.description);
                                                        break;
                                                    } else if (value.startsWith(item.value + ",")
                                                        || value.indexOf("," + item.value + ",") > 0
                                                        || value.endsWith("," + item.value)) {
                                                        if (keyBudilder.length > 0) {
                                                            keyBudilder.append(ibas.DATA_SEPARATOR);
                                                        }
                                                        if (textBudilder.length > 0) {
                                                            textBudilder.append(ibas.DATA_SEPARATOR);
                                                            textBudilder.append(" ");
                                                        }
                                                        keyBudilder.append(item.value);
                                                        textBudilder.append(item.description);
                                                        continue;
                                                    }
                                                }
                                                // tslint:disable-next-line: triple-equals
                                                if (value === this.getProperty("bindingValue") || value == this.getProperty("bindingValue")) {
                                                    this.setText(textBudilder.toString());
                                                    this.setTooltip(ibas.strings.format("{0} - {1}", keyBudilder.toString(), textBudilder.toString()));
                                                }
                                            }
                                        }
                                    }
                                    return;
                                }
                            } catch (error) {
                                ibas.logger.log(error);
                            }
                        }
                    });

                }
            });
            /**
             * 数据转换-对象属性
             */
            ObjectAttribute.extend("sap.extension.m.ConversionObjectAttribute", {
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
                setBindingValue(this: ConversionObjectAttribute, value: string): ConversionObjectAttribute {
                    if (this.getBindingValue() !== value) {
                        ObjectAttribute.prototype.setBindingValue.apply(this, arguments);
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
            /**
             * 用户数据-对象属性
             */
            RepositoryObjectAttribute.extend("sap.extension.m.UserObjectAttribute", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: UserObjectAttribute): UserObjectAttribute {
                    RepositoryObjectAttribute.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(UserObjectAttribute, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, UserObjectAttribute, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(UserObjectAttribute, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER")),
                                key: "DocEntry",
                                text: "Name",
                            };
                            variables.set(dataInfo, UserObjectAttribute, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "DocEntry";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Name";
                        }
                    }
                    this.setShowValueLink(true);
                    return this;
                }
            });
            /**
             * 组织数据-对象属性
             */
            RepositoryObjectAttribute.extend("sap.extension.m.OrganizationObjectAttribute", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: OrganizationObjectAttribute): OrganizationObjectAttribute {
                    RepositoryObjectAttribute.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(OrganizationObjectAttribute, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, OrganizationObjectAttribute, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(OrganizationObjectAttribute, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_ORGANIZATION")),
                                key: "Code",
                                text: "Name",
                            };
                            variables.set(dataInfo, OrganizationObjectAttribute, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_ORGANIZATION"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Name";
                        }
                    }
                    this.setShowValueLink(true);
                    return this;
                }
            });
            /**
             * 角色数据-对象属性
             */
            OrganizationObjectAttribute.extend("sap.extension.m.RoleObjectAttribute", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: RoleObjectAttribute): RoleObjectAttribute {
                    OrganizationObjectAttribute.prototype.applySettings.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 业务对象数据-对象属性
             */
            RepositoryObjectAttribute.extend("sap.extension.m.BusinessObjectObjectAttribute", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: BusinessObjectObjectAttribute): BusinessObjectObjectAttribute {
                    RepositoryObjectAttribute.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(BusinessObjectObjectAttribute, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, BusinessObjectObjectAttribute, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(BusinessObjectObjectAttribute, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_BOINFO")),
                                key: "Code",
                                text: "Description",
                            };
                            variables.set(dataInfo, BusinessObjectObjectAttribute, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_BOINFO"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Description";
                        }
                    }
                    return this;
                }
            });
        }
    }
}
