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
             * 对象状态
             */
            sap.m.ObjectStatus.extend("sap.extension.m.ObjectStatus", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 对象枚举状态
             */
            ObjectStatus.extend("sap.extension.m.ObjectEnumStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any" },
                        /** 枚举值 */
                        enumValue: { type: "any" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 设置枚举值
                 * @param value 枚举类型
                 */
                setEnumValue(this: ObjectEnumStatus, value: any): ObjectEnumStatus {
                    this.setProperty("enumValue", value);
                    this.setState(this.toState(this.getEnumValue()));
                    this.setIcon(this.toIcon(this.getEnumValue()));
                    this.setText(this.toText(this.getEnumValue()));
                    return this;
                },
                /**
                 * 转为描述值
                 * @param data 枚举值
                 */
                toText(this: ObjectEnumStatus, enumValue: any): string {
                    return ibas.enums.describe(this.getEnumType(), enumValue);
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (mSetting) {
                        if (mSetting.toState instanceof Function) {
                            this.toState = mSetting.toState;
                            delete (mSetting.toState);
                        }
                        if (mSetting.toIcon instanceof Function) {
                            this.toIcon = mSetting.toIcon;
                            delete (mSetting.toIcon);
                        }
                        if (mSetting.toText instanceof Function) {
                            this.toText = mSetting.toText;
                            delete (mSetting.toText);
                        }
                    }
                    ObjectStatus.prototype.applySettings.apply(this, arguments);
                    return this;
                },
            });
            /**
             * 对象单据状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectDocumentStatus", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emDocumentStatus.RELEASED) {
                        return sap.ui.core.ValueState.Information;
                    } else if (data === ibas.emDocumentStatus.FINISHED) {
                        return sap.ui.core.ValueState.Success;
                    } else if (data === ibas.emDocumentStatus.CLOSED) {
                        return sap.ui.core.ValueState.Success;
                    } else if (data === ibas.emDocumentStatus.PLANNED) {
                        return sap.ui.core.ValueState.Warning;
                    } else {
                        return sap.ui.core.ValueState.None;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emDocumentStatus.RELEASED) {
                        return "sap-icon://status-in-process";
                    } else if (data === ibas.emDocumentStatus.FINISHED) {
                        return "sap-icon://status-completed";
                    } else if (data === ibas.emDocumentStatus.CLOSED) {
                        return "sap-icon://complete";
                    } else {
                        return "sap-icon://status-inactive";
                    }
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (!mSetting) {
                        mSetting = {};
                    }
                    if (!mSetting.enumType) {
                        mSetting.enumType = ibas.emDocumentStatus;
                    }
                    return ObjectEnumStatus.prototype.applySettings.apply(this, arguments);
                },
            });
            function negative(this: ObjectYesNoStatus, value: ibas.emYesNo): ibas.emYesNo {
                if (this.getNegative() === true) {
                    if (value === ibas.emYesNo.NO) {
                        return ibas.emYesNo.YES;
                    } else {
                        return ibas.emYesNo.NO;
                    }
                }
                return value;
            }
            /**
             * 对象是否状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectYesNoStatus", {
                metadata: {
                    properties: {
                        /** 相反的 */
                        negative: { type: "boolean", defalut: false },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(this: ObjectYesNoStatus, data: any): sap.ui.core.ValueState {
                    if (negative.call(this, data) === ibas.emYesNo.NO) {
                        return sap.ui.core.ValueState.Error;
                    } else {
                        return sap.ui.core.ValueState.Success;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(this: ObjectYesNoStatus, data: any): string {
                    if (negative.call(this, data) === ibas.emYesNo.NO) {
                        return "sap-icon://sys-cancel";
                    } else {
                        return "sap-icon://sys-enter";
                    }
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (!mSetting) {
                        mSetting = {};
                    }
                    if (!mSetting.enumType) {
                        mSetting.enumType = ibas.emYesNo;
                    }
                    return ObjectEnumStatus.prototype.applySettings.apply(this, arguments);
                },
            });
            /**
             * 对象审批状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectApprovalStatus", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emApprovalStatus.APPROVED) {
                        return sap.ui.core.ValueState.Success;
                    } else if (data === ibas.emApprovalStatus.CANCELLED) {
                        return sap.ui.core.ValueState.Error;
                    } else if (data === ibas.emApprovalStatus.PROCESSING) {
                        return sap.ui.core.ValueState.Warning;
                    } else if (data === ibas.emApprovalStatus.REJECTED) {
                        return sap.ui.core.ValueState.Error;
                    } else {
                        return sap.ui.core.ValueState.None;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emApprovalStatus.APPROVED) {
                        return "sap-icon://sys-enter";
                    } else if (data === ibas.emApprovalStatus.CANCELLED) {
                        return "sap-icon://cancel";
                    } else if (data === ibas.emApprovalStatus.PROCESSING) {
                        return "sap-icon://initiative";
                    } else if (data === ibas.emApprovalStatus.REJECTED) {
                        return "sap-icon://sys-cancel";
                    } else {
                        return "sap-icon://sys-minus";
                    }
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (!mSetting) {
                        mSetting = {};
                    }
                    if (!mSetting.enumType) {
                        mSetting.enumType = ibas.emApprovalStatus;
                    }
                    return ObjectEnumStatus.prototype.applySettings.apply(this, arguments);
                },
            });
            /**
             * 对象状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectBOStatus", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emBOStatus.OPEN) {
                        return sap.ui.core.ValueState.Information;
                    } else {
                        return sap.ui.core.ValueState.Success;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emBOStatus.OPEN) {
                        return "sap-icon://status-in-process";
                    } else {
                        return "sap-icon://status-critical";
                    }
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (!mSetting) {
                        mSetting = {};
                    }
                    if (!mSetting.enumType) {
                        mSetting.enumType = ibas.emBOStatus;
                    }
                    return ObjectEnumStatus.prototype.applySettings.apply(this, arguments);
                },
            });
            /**
             * 业务仓库数据-对象状态
             */
            ObjectStatus.extend("sap.extension.m.RepositoryObjectStatus", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositoryObjectStatus): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryObjectStatus, value: ibas.BORepositoryApplication | string): RepositoryObjectStatus {
                    return this.setProperty("repository", repositories.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryObjectStatus): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryObjectStatus, value: repository.IDataInfo | any): RepositoryObjectStatus {
                    return this.setProperty("dataInfo", repositories.dataInfo(value));
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ObjectAttribute): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryObjectStatus, value: string): RepositoryObjectStatus {
                    if (this.getBindingValue() !== value) {
                        this.setProperty("bindingValue", value);
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
            /**
             * 对象状态可选值-对象状态
             */
            ObjectStatus.extend("sap.extension.m.PropertyObjectStatus", {
                metadata: {
                    properties: {
                        /** 对象数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性名称 */
                        propertyName: { type: "string" },
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: PropertyObjectStatus): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertyObjectStatus, value: { code: string, name?: string } | string): PropertyObjectStatus {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertyObjectStatus): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertyObjectStatus, value: string): PropertyObjectStatus {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ObjectAttribute): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: PropertyObjectStatus, value: string): PropertyObjectStatus {
                    if (this.getBindingValue() !== value) {
                        this.setProperty("bindingValue", value);
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
                        let propertyName: string = this.getPropertyName();
                        if (ibas.strings.isEmpty(propertyName)) {
                            // 未设置属性则使用绑定的
                            propertyName = this.getBindingPath("bindingValue");
                        }
                        if (ibas.strings.isEmpty(propertyName)) {
                            return this;
                        }
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
                                                    for (let item of property.values) {
                                                        if (ibas.strings.equals(item.value, value)) {
                                                            this.setText(item.description);
                                                            return;
                                                        }
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
                },
            });
            /**
             * 对象状态-单据状态和取消状态
             */
            ObjectStatus.extend("sap.extension.m.ObjectDocumentCanceledStatus", {
                metadata: {
                    properties: {
                        /** 取消状态 */
                        canceledStatus: { type: "int", defalut: ibas.emYesNo.NO },
                        /** 单据状态 */
                        documentStatus: { type: "int", defalut: ibas.emDocumentStatus.PLANNED },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 设置属性值-取消状态
                 * @param value 值
                 */
                setCanceledStatus(this: ObjectDocumentCanceledStatus, value: ibas.emYesNo): ObjectDocumentCanceledStatus {
                    this.setProperty("canceledStatus", value, true);
                    this.setState(this.toState(this.getCanceledStatus(), this.getDocumentStatus()));
                    this.setIcon(this.toIcon(this.getCanceledStatus(), this.getDocumentStatus()));
                    this.setText(this.toText(this.getCanceledStatus(), this.getDocumentStatus()));
                    return this;
                },
                /**
                 * 设置属性值-取消状态
                 * @param value 值
                 */
                setDocumentStatus(this: ObjectDocumentCanceledStatus, value: ibas.emDocumentStatus): ObjectDocumentCanceledStatus {
                    this.setProperty("documentStatus", value, true);
                    this.setState(this.toState(this.getCanceledStatus(), this.getDocumentStatus()));
                    this.setIcon(this.toIcon(this.getCanceledStatus(), this.getDocumentStatus()));
                    this.setText(this.toText(this.getCanceledStatus(), this.getDocumentStatus()));
                    return this;
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(this: ObjectDocumentCanceledStatus, canceledStatus: ibas.emYesNo, documentStatus: ibas.emDocumentStatus): sap.ui.core.ValueState {
                    if (canceledStatus === ibas.emYesNo.YES) {
                        return sap.ui.core.ValueState.Error;
                    }
                    return ObjectDocumentStatus.prototype.toState(documentStatus);
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(this: ObjectDocumentCanceledStatus, canceledStatus: ibas.emYesNo, documentStatus: ibas.emDocumentStatus): string {
                    if (canceledStatus === ibas.emYesNo.YES) {
                        return "sap-icon://sys-cancel";
                    }
                    return ObjectDocumentStatus.prototype.toIcon(documentStatus);
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toText(this: ObjectDocumentCanceledStatus, canceledStatus: ibas.emYesNo, documentStatus: ibas.emDocumentStatus): string {
                    if (canceledStatus === ibas.emYesNo.YES) {
                        return ibas.i18n.prop("em_documentstatus_canceled");
                    }
                    return ibas.enums.describe(ibas.emDocumentStatus, documentStatus);
                },
                /** 重构设置 */
                applySettings(this: ObjectDocumentCanceledStatus, mSetting: any): ObjectDocumentCanceledStatus {
                    if (mSetting) {
                        if (mSetting.toState instanceof Function) {
                            this.toState = mSetting.toState;
                            delete (mSetting.toState);
                        }
                        if (mSetting.toIcon instanceof Function) {
                            this.toIcon = mSetting.toIcon;
                            delete (mSetting.toIcon);
                        }
                        if (mSetting.toText instanceof Function) {
                            this.toText = mSetting.toText;
                            delete (mSetting.toText);
                        }
                    }
                    ObjectStatus.prototype.applySettings.apply(this, arguments);
                    return this;
                },
            });
        }
    }
}
