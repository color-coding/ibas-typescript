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
             * 输入框
             */
            sap.m.Input.extend("sap.extension.m.Input", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                        /** 仅值选择，不可输入 */
                        valueHelpOnly: { type: "boolean", defaultValue: true },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: Input): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Input, value: string): Input {
                    sap.m.Input.prototype.setValue.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: Input, value: string): Input {
                    return this.setBindingValue(value);
                },
                /** 重写绑定 */
                bindProperty(this: Input, sName: string, oBindingInfo: any): Input {
                    utils.checkBindingInfo.apply(this, arguments);
                    sap.m.Input.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                /** 重新点击 */
                ontap(oEvent: any): void {
                    let control: any = oEvent ? oEvent.srcControl : null;
                    if (control instanceof sap.ui.core.Control && ibas.strings.isWith(control.getId(), undefined, "-vhi")) {
                        // 仅点击选择图标才调用，值选择
                        (<any>sap.m.Input.prototype).ontap.apply(this, arguments);
                    } else {
                        // 不调用选值窗体
                        (<any>sap.m.InputBase.prototype).ontap.apply(this, arguments);
                    }
                }
            });
            /**
             * 业务仓库数据-输入框
             */
            Input.extend("sap.extension.m.RepositoryInput", {
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
                getRepository(this: RepositoryInput): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryInput, value: ibas.BORepositoryApplication | string): RepositoryInput {
                    return this.setProperty("repository", utils.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryInput): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryInput, value: repository.IDataInfo | any): RepositoryInput {
                    return this.setProperty("dataInfo", utils.dataInfo(value));
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setSelectedKey(this: RepositoryInput, value: string): RepositoryInput {
                    return this.setBindingValue(value);
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setSelectedItem(this: RepositoryInput, value: sap.ui.core.Item): RepositoryInput {
                    sap.m.Input.prototype.setSelectedItem.apply(this, arguments);
                    if (value instanceof sap.ui.core.Item) {
                        this.setProperty("bindingValue", value.getKey());
                    }
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: RepositoryInput, value: string): RepositoryInput {
                    sap.m.Input.prototype.setValue.apply(this, arguments);
                    return this;
                },
                /**
                 * 添加建议项目后，设置为显示建议项目
                 * @param oItem
                 */
                addSuggestionItem(this: RepositoryInput, oItem: sap.ui.core.Item): RepositoryInput {
                    Input.prototype.addSuggestionItem.apply(this, arguments);
                    if (!this.getShowSuggestion()) {
                        this.setShowSuggestion(true);
                    }
                    return this;
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryInput, value: string): RepositoryInput {
                    if (this.getSelectedKey() !== value) {
                        this.setProperty("selectedKey", value);
                        this.setProperty("bindingValue", value);
                        let item: sap.ui.core.Item;
                        if (ibas.strings.isEmpty(value)) {
                            this.updateDomValue("");
                        } else if (!ibas.objects.isNull(item = this.getSuggestionItemByKey(String(value)))) {
                            this.setSelectedItem(item);
                            this.updateDomValue(item.getText());
                        } else if (ibas.objects.isNull(item) && !ibas.strings.isEmpty(value)) {
                            // 没有此建议值
                            let dataInfo: repository.IDataInfo = this.getDataInfo();
                            if (ibas.objects.isNull(dataInfo)) {
                                return this;
                            }
                            let criteria: ibas.ICriteria = new ibas.Criteria();
                            criteria.noChilds = true;
                            for (let item of String(value).split(ibas.DATA_SEPARATOR)) {
                                let condition: ibas.ICondition = criteria.conditions.create();
                                condition.alias = dataInfo.key;
                                condition.value = item;
                                if (criteria.conditions.length > 0) {
                                    condition.relationship = ibas.emConditionRelationship.OR;
                                }
                            }
                            let editable: boolean = false, enabled: boolean = false;
                            !this.getEditable() ? this.setEditable(true) : editable = true;
                            !this.getEnabled() ? this.setEnabled(true) : enabled = true;
                            repository.batchFetch(this.getRepository(), this.getDataInfo(), criteria,
                                (values) => {
                                    if (values instanceof Error) {
                                        ibas.logger.log(values);
                                        let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                                            key: value,
                                            text: value,
                                        });
                                        this.addSuggestionItem(item);
                                        this.setSelectedItem(item);
                                        this.updateDomValue(item.getText());
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
                                        let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                                            key: keyBudilder.toString(),
                                            text: textBudilder.toString(),
                                        });
                                        this.addSuggestionItem(item);
                                        this.setSelectedItem(item);
                                        this.updateDomValue(item.getText());
                                    }
                                    if (this.getEditable() && editable === false) {
                                        this.setEditable(editable);
                                    }
                                    if (this.getEnabled() && enabled === false) {
                                        this.setEnabled(enabled);
                                    }
                                }
                            );
                        }
                    }
                    return this;
                },
            });
            /**
             * 业务仓库数据-选择输入框
             */
            RepositoryInput.extend("sap.extension.m.SelectionInput", {
                metadata: {
                    properties: {
                        /** 选择方式 */
                        chooseType: { type: "int", defaultValue: ibas.emChooseType.SINGLE },
                        /** 查询条件 */
                        criteria: { type: "any" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取选择类型
                 */
                getChooseType(this: SelectionInput): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: SelectionInput, value: ibas.emChooseType): SelectionInput {
                    return this.setProperty("chooseType", value);
                },
                /**
                 * 获取查询
                 */
                getCriteria(this: SelectionInput): ibas.ICriteria {
                    return this.getProperty("criteria");
                },
                /**
                 * 设置查询
                 * @param value 查询
                 */
                setCriteria(this: SelectionInput, value: ibas.ICriteria | ibas.ICondition[]): SelectionInput {
                    return this.setProperty("criteria", utils.criteria(value));
                },
                /** 初始化 */
                init(this: SelectionInput): void {
                    // 调用基类构造
                    (<any>RepositoryInput.prototype).init.apply(this, arguments);
                    // 自身事件监听
                    this.attachValueHelpRequest(null, () => {
                        let boCode: string, dataInfo: any = this.getDataInfo();
                        if (typeof dataInfo.type === "function") {
                            boCode = dataInfo.type.BUSINESS_OBJECT_CODE;
                        } else if (typeof dataInfo.type === "object") {
                            boCode = ibas.objects.typeOf(dataInfo.type).BUSINESS_OBJECT_CODE;
                        } else if (typeof dataInfo.type === "string") {
                            boCode = ibas.config.applyVariables(dataInfo.type);
                        }
                        if (ibas.strings.isEmpty(boCode)) {
                            throw new Error(ibas.i18n.prop("sys_invalid_parameter", "boCode"));
                        }
                        ibas.servicesManager.runChooseService<any>({
                            boCode: boCode,
                            chooseType: this.getChooseType(),
                            criteria: this.getCriteria(),
                            onCompleted: (selecteds: ibas.IList<any>) => {
                                let keyProperty: string = this.getDataInfo().key;
                                let textProperty: string = this.getDataInfo().text;
                                let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                keyBudilder.map(null, "");
                                keyBudilder.map(undefined, "");
                                let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                textBudilder.map(null, "");
                                textBudilder.map(undefined, "");
                                for (let item of selecteds) {
                                    if (keyBudilder.length > 0) {
                                        keyBudilder.append(ibas.DATA_SEPARATOR);
                                    }
                                    if (textBudilder.length > 0) {
                                        textBudilder.append(ibas.DATA_SEPARATOR);
                                        textBudilder.append(" ");
                                    }
                                    keyBudilder.append(item[keyProperty]);
                                    textBudilder.append(item[textProperty]);
                                }
                                let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                                    key: keyBudilder.toString(),
                                    text: textBudilder.toString(),
                                });
                                this.addSuggestionItem(item);
                                this.setSelectedItem(item);
                                this.updateDomValue(item.getText());
                            }
                        });
                    });
                }
            });
            /**
             * 超级文本框
             */
            sap.m.TextArea.extend("sap.extension.m.TextArea", {
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
                getBindingValue(this: TextArea): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: TextArea, value: string): TextArea {
                    sap.m.TextArea.prototype.setValue.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: TextArea, value: string): TextArea {
                    return this.setBindingValue(value);
                },
                /** 重写绑定 */
                bindProperty(this: TextArea, sName: string, oBindingInfo: any): TextArea {
                    utils.checkBindingInfo.apply(this, arguments);
                    sap.m.TextArea.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 用户数据-输入框
             */
            SelectionInput.extend("sap.extension.m.UserInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: UserInput): UserInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(UserInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, UserInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = variables.get(UserInput, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = [
                                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                            ];
                            variables.set(criteria, UserInput, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: UserInput, sName: string, oBindingInfo: any): UserInput {
                    if (ibas.strings.equals(sName, "bindingValue") && !ibas.objects.isNull(oBindingInfo)) {
                        // 构建数据信息，根据绑定的数据类型
                        let dataInfo: repository.IDataInfo = this.getDataInfo();
                        if (ibas.objects.isNull(dataInfo)) {
                            let infoName: string = "dataInfoCode", infoKey: string = "Code";
                            // 允许多选或绑定类型为数值型时，使用DocEntry
                            if (this.getChooseType() === ibas.emChooseType.MULTIPLE
                                || oBindingInfo.type instanceof data.Numeric) {
                                infoName = "dataInfo_DocEntry";
                                infoKey = "DocEntry";
                            }
                            dataInfo = variables.get(UserInput, infoName);
                            if (ibas.objects.isNull(dataInfo)) {
                                dataInfo = {
                                    type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER")),
                                    key: infoKey,
                                    text: "Name",
                                };
                                variables.set(dataInfo, UserInput, infoName);
                            }
                            this.setDataInfo(dataInfo);
                        } else {
                            if (!dataInfo.type) {
                                dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER"));
                            } else if (!dataInfo.key) {
                                dataInfo.key = oBindingInfo.type instanceof data.Numeric ? "DocEntry" : "Code";
                            } else if (!dataInfo.text) {
                                dataInfo.text = "Name";
                            }
                        }
                    }
                    SelectionInput.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 组织数据-输入框
             */
            SelectionInput.extend("sap.extension.m.OrganizationInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: OrganizationInput): OrganizationInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(OrganizationInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, OrganizationInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(OrganizationInput, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_ORGANIZATION")),
                                key: "Code",
                                text: "Name",
                            };
                            variables.set(dataInfo, OrganizationInput, "dataInfo");
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
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = variables.get(OrganizationInput, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = [
                                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                            ];
                            variables.set(criteria, OrganizationInput, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    return this;
                }
            });
            /**
             * 角色数据-输入框
             */
            OrganizationInput.extend("sap.extension.m.RoleInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: RoleInput): RoleInput {
                    // todo:角色非组织实现时
                    (<any>OrganizationInput.prototype).applySettings.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 业务对象数据-输入框
             */
            SelectionInput.extend("sap.extension.m.BusinessObjectInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: BusinessObjectInput): BusinessObjectInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(BusinessObjectInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, BusinessObjectInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(BusinessObjectInput, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_BOINFO")),
                                key: "Code",
                                text: "Description"
                            };
                            variables.set(dataInfo, BusinessObjectInput, "dataInfo");
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
