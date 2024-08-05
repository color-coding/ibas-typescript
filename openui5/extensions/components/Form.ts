/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace layout {
            /**
             * 窗体布局
             */
            sap.ui.layout.form.SimpleForm.extend("sap.extension.layout.SimpleForm", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(oModel: model.JSONModel, sName?: string): SimpleForm {
                    this.bindObject("/");
                    sap.ui.layout.form.SimpleForm.prototype.setModel.apply(this, arguments);
                    return this;
                },
                /** 退出 */
                exit(this: SimpleForm): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.ui.layout.form.SimpleForm.prototype).exit.apply(this, arguments);
                }
            });
            /**
             * 数据窗体布局
             */
            SimpleForm.extend("sap.extension.layout.DataSimpleForm", {
                metadata: {
                    properties: {
                        /** 用户字段模式 */
                        userFieldsMode: { type: "string" },
                        /** 用户字段标题 */
                        userFieldsTitle: { type: "string" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性过滤器 */
                        propertyFilter: { type: "function" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: DataSimpleForm): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataSimpleForm, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataSimpleForm {
                    return this.setProperty("dataInfo", value);
                },
                /** 重构设置 */
                applySettings(this: DataSimpleForm, mSettings: any, oScope?: any): DataSimpleForm {
                    if (ibas.objects.isNull(mSettings.userFieldsMode)) {
                        mSettings.userFieldsMode = "input";
                    }
                    if (ibas.objects.isNull(mSettings.userFieldsTitle)) {
                        mSettings.userFieldsTitle = ibas.i18n.prop("openui5_bo_extend_properties");
                    }
                    SimpleForm.prototype.applySettings.apply(this, arguments);
                    // 设置其他属性
                    let dataInfo: any = this.getDataInfo();
                    if (typeof dataInfo === "string") {
                        dataInfo = {
                            code: dataInfo,
                        };
                    } else if (typeof dataInfo === "function") {
                        dataInfo = {
                            code: dataInfo.BUSINESS_OBJECT_CODE,
                            name: ibas.objects.nameOf(dataInfo),
                        };
                    }
                    if (typeof dataInfo === "object"
                        && (!ibas.strings.isEmpty(this.getUserFieldsMode()) && !ibas.strings.equalsIgnoreCase(this.getUserFieldsMode(), "none"))) {
                        if (dataInfo.properties instanceof Array) {
                            propertyControls.call(this, dataInfo);
                        } else {
                            let info: { code: string, name?: string } = dataInfo;
                            let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                            boRepository.fetchBizObjectInfo({
                                user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                                boCode: ibas.config.applyVariables(info.code),
                                boName: info.name,
                                onCompleted: (opRslt) => {
                                    if (opRslt.resultCode !== 0) {
                                        ibas.logger.log(new Error(opRslt.message));
                                    } else {
                                        propertyControls.call(this, opRslt.resultObjects.firstOrDefault());
                                        // 已加载数据，则重置
                                        let model: any = this.getModel();
                                        if (model !== undefined) {
                                            this.setModel(undefined);
                                            this.setModel(model);
                                        }
                                    }
                                }
                            });
                        }
                    }
                    return this;
                },
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(this: DataSimpleForm, oModel: model.JSONModel, sName?: string): DataSimpleForm {
                    let model: model.JSONModel = this.getModel();
                    // 没有设置过模型，则更新控件绑定信息
                    if (ibas.objects.isNull(model) && !ibas.objects.isNull(oModel)) {
                        // 获取对象信息
                        let data: any = oModel.getData();
                        if (data instanceof Array) {
                            data = data[0];
                        } else if (data.rows instanceof Array) {
                            data = data.rows[0];
                        }
                        if (!ibas.objects.isNull(data)) {
                            let userFields: ibas.IUserFields = data.userFields;
                            if (!ibas.objects.isNull(userFields)) {
                                if (this.getUserFieldsMode() === "input" || this.getUserFieldsMode() === "text") {
                                    for (let sItem of this.getContent()) {
                                        let bindingInfo: any = managedobjects.bindingInfo(sItem, "bindingValue");
                                        if (!ibas.objects.isNull(bindingInfo)) {
                                            userfields.check(userFields, bindingInfo);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return SimpleForm.prototype.setModel.apply(this, arguments);
                },
            });
            function propertyControls(this: DataSimpleForm, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                // 查询未存在的属性
                let properties: shell.bo.IBizPropertyInfo[] = Object.assign([], boInfo.properties);
                let authorising: (control: sap.ui.core.Control) => void = (control) => {
                    if (control instanceof sap.m.Table
                        || control instanceof sap.m.ListBase) {
                        return;
                    }
                    if (!(control instanceof sap.ui.core.Control)) {
                        return;
                    }
                    if (control instanceof sap.ui.layout.VerticalLayout) {
                        let hide: boolean = true;
                        for (let item of control.getContent()) {
                            authorising(item);
                            if (item.getVisible() === true) {
                                hide = false;
                            }
                        }
                        if (hide) {
                            control.setVisible(false);
                        } else {
                            control.setVisible(true);
                        }
                        return;
                    }
                    if (control instanceof sap.m.FlexBox) {
                        for (let item of control.getItems()) {
                            authorising(item);
                            if (item instanceof sap.m.InputBase && item.getRequired()) {
                                let iparent: any = item.getParent().getParent();
                                if (iparent instanceof sap.ui.layout.form.FormElement) {
                                    let label: any = iparent.getLabel();
                                    if (label instanceof sap.m.Label) {
                                        label.setRequired(true);
                                    }
                                }
                            }
                        }
                        return;
                    }
                    if (control instanceof sap.uxap.ObjectPageSection) {
                        for (let item of control.getSubSections()) {
                            for (let sItem of item.getBlocks()) {
                                authorising(sItem);
                            }
                            for (let sItem of item.getActions()) {
                                authorising(sItem);
                            }
                            for (let sItem of item.getMoreBlocks()) {
                                authorising(sItem);
                            }
                        } return;
                    }
                    let bindingPath: string = managedobjects.bindingPath(control);
                    let index: number = properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                    if (index < 0) {
                        return;
                    }
                    let propertyInfo: shell.bo.IBizPropertyInfo = properties[index];
                    if (!ibas.objects.isNull(propertyInfo)) {
                        if (propertyInfo.authorised === ibas.emAuthoriseType.NONE) {
                            control.setVisible(false);
                        } else if (propertyInfo.authorised === ibas.emAuthoriseType.READ) {
                            controls.nonEditable(control);
                        } else if (propertyInfo.authorised === ibas.emAuthoriseType.ALL) {
                            if (control.getVisible() === false) {
                                control.setVisible(true);
                            }
                        }
                        if (propertyInfo.required === true) {
                            if (control instanceof sap.m.InputBase || control instanceof sap.m.Select) {
                                control.setRequired(true);
                            }
                        }
                        properties[index] = null;
                    }
                };
                for (let item of this.getContent()) {
                    if (item instanceof sap.ui.core.Control) {
                        authorising(item);
                    }
                }
                if (!ibas.strings.isEmpty(this.getUserFieldsTitle())) {
                    this.addContent(new sap.ui.core.Title("", {
                        text: this.getUserFieldsTitle()
                    }));
                }
                if (this.getUserFieldsMode() === "input") {
                    for (let property of properties) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        property = factories.newProperty(property, boInfo);
                        this.addContent(new sap.m.Label("", {
                            text: property.systemed === true
                                ? ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                                : property.description
                        }));
                        this.addContent(factories.newComponent(property, "Input"));
                    }
                } else if (this.getUserFieldsMode() === "text") {
                    for (let property of properties) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        property = factories.newProperty(property, boInfo);
                        this.addContent(new sap.m.Label("", {
                            text: property.systemed === true
                                ? ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                                : property.description
                        }));
                        this.addContent(factories.newComponent(property, "Text"));
                    }
                }
            }
        }
    }
}