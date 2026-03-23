/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace uxap {
            /**
             * 对象页
             */
            sap.uxap.ObjectPageLayout.extend("sap.extension.uxap.ObjectPageLayout", {
                metadata: {
                    properties: {
                        /** 显示子区菜单 */
                        showAnchorBarPopover: { type: "boolean", defaultValue: false },
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
                setModel(oModel: model.JSONModel, sName?: string): ObjectPageLayout {
                    this.bindObject("/");
                    sap.uxap.ObjectPageLayout.prototype.setModel.apply(this, arguments);
                    return this;
                },
                /** 设置头 */
                setHeaderTitle(this: ObjectPageLayout, oHeaderTitle: sap.uxap.IHeaderTitle): ObjectPageLayout {
                    sap.uxap.ObjectPageLayout.prototype.setHeaderTitle.apply(this, arguments);
                    if (oHeaderTitle instanceof sap.uxap.ObjectPageHeader) {
                        if (oHeaderTitle.getNavigationBar() instanceof sap.ui.core.Control) {
                            oHeaderTitle.getNavigationBar().addStyleClass("sapMTBStandard");
                        }
                        if (oHeaderTitle.hasStyleClass("sapUiNoContentPadding")) {
                            (<any>oHeaderTitle).onAfterRendering = function (): void {
                                (<any>sap.uxap.ObjectPageHeader.prototype).onAfterRendering.apply(this, arguments);
                                let dom: JQuery = this.$("identifierLine");
                                if (dom) {
                                    dom.css("padding-top", "0rem");
                                    dom.css("padding-bottom", "0rem");
                                }
                                dom = this.$("identifierLineContainer");
                                if (dom) {
                                    dom.css("padding-top", "0.5rem");
                                    dom.css("padding-bottom", "0.5rem");
                                }
                                dom = this.$("actions");
                                if (dom) {
                                    dom.css("padding-top", "0rem");
                                    dom.css("padding-bottom", "0rem");
                                }
                            };
                        }
                    }
                    return this;
                },
                /** 退出 */
                exit(this: ObjectPageLayout): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.uxap.ObjectPageLayout.prototype).exit.apply(this, arguments);
                }
            });
            /**
             * 数据页
             */
            ObjectPageLayout.extend("sap.extension.uxap.DataObjectPageLayout", {
                metadata: {
                    properties: {
                        /** 用户字段模式 */
                        userFieldsMode: { type: "string" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性过滤器 */
                        propertyFilter: { type: "function" },
                    },
                    events: {
                        "updatePropertyControls": {
                            parameters: {
                                boInfo: {
                                    type: "any",
                                }
                            }
                        },
                    }
                },
                renderer: {
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: DataObjectPageLayout): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataObjectPageLayout, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataObjectPageLayout {
                    return this.setProperty("dataInfo", value);
                },
                /** 重构设置 */
                applySettings(this: DataObjectPageLayout, mSettings: any, oScope?: any): DataObjectPageLayout {
                    if (ibas.objects.isNull(mSettings.userFieldsMode)) {
                        mSettings.userFieldsMode = "attribute";
                    }
                    ObjectPageLayout.prototype.applySettings.apply(this, arguments);
                    // 根据绑定对象刷新列
                    if (mSettings?.dataInfo) {
                        this.updatePropertyControls();
                    }
                    return this;
                },
                updatePropertyControls(this: DataObjectPageLayout, boInfo: shell.bo.IBizObjectInfo): void {
                    if (ibas.objects.isNull(boInfo)) {
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
                                this.updatePropertyControls(dataInfo);
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
                                        } else if (opRslt.resultObjects.length > 0) {
                                            this.updatePropertyControls(opRslt.resultObjects.firstOrDefault());
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
                    } else {
                        propertyControls.call(this, boInfo);
                    }
                },
            });
            function propertyControls(this: DataObjectPageLayout, boInfo: shell.bo.IBizObjectInfo): void {
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
                        } return;
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
                    if (control instanceof sap.ui.layout.form.SimpleForm) {
                        for (let item of control.getContent()) {
                            if (item instanceof sap.ui.core.Control) {
                                authorising(item);
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
                let title: any = this.getHeaderTitle();
                if (title instanceof sap.uxap.ObjectPageHeader) {
                    for (let item of title.getActions()) {
                        authorising(item);
                    }
                }
                for (let item of this.getHeaderContent()) {
                    authorising(item);
                }
                for (let item of this.getSections()) {
                    authorising(item);
                }
                let section: sap.uxap.ObjectPageSubSection;
                if (this.getUserFieldsMode() === "input") {
                    let form: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        width: "auto",
                    }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent");
                    for (let property of properties.filter(c => !ibas.objects.isNull(c)).sort((a, b) => a.position - b.position)) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        if (ibas.objects.isNull(section)) {
                            section = new sap.uxap.ObjectPageSubSection(this.getId() + "_extendSection", {
                                blocks: [
                                    form
                                ],
                            });
                        }
                        property = factories.newProperty(property, boInfo);
                        form.addContent(new sap.m.Label("", {
                            text: property.systemed === true ? ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()) : property.description
                        }));
                        form.addContent(factories.newComponent(property, "Input"));
                    }
                } else if (this.getUserFieldsMode() === "text") {
                    let form: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: false,
                        width: "auto",
                    }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent");
                    for (let property of properties.filter(c => !ibas.objects.isNull(c)).sort((a, b) => a.position - b.position)) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        if (ibas.objects.isNull(section)) {
                            section = new sap.uxap.ObjectPageSubSection(this.getId() + "_extendSection", {
                                blocks: [
                                    form
                                ],
                            });
                        }
                        property = factories.newProperty(property, boInfo);
                        form.addContent(new sap.m.Label("", {
                            text: property.systemed === true ? ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()) : property.description
                        }));
                        form.addContent(factories.newComponent(property, "Text"));
                    }
                } else {
                    for (let property of properties.filter(c => !ibas.objects.isNull(c)).sort((a, b) => a.position - b.position)) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        if (ibas.objects.isNull(section)) {
                            section = new sap.uxap.ObjectPageSubSection(this.getId() + "_extendSection", {
                                blocks: [
                                ],
                            });
                        }
                        property = factories.newProperty(property, boInfo);
                        let element: any = factories.newComponent(property, "Object");
                        if (property.systemed === true && element instanceof sap.m.ObjectAttribute) {
                            element.setTitle(ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()));
                        } else if (ibas.strings.equalsIgnoreCase(property.dataType, "Memo") && element instanceof sap.extension.m.ObjectAttribute) {
                            element.setWrapping(false);
                        }
                        section.addBlock(element);
                    }
                }
                if (!ibas.objects.isNull(section)) {
                    if (this.getSections()[0]?.getShowTitle() === false && this.getSections().length === 1) {
                        // 不显示标题时，且仅唯一区，则作为子区加入
                        this.getSections()[0].addSubSection(section);
                    } else {
                        this.addSection(new sap.uxap.ObjectPageSection("", {
                            title: ibas.i18n.prop("openui5_bo_extend_properties"),
                            subSections: [
                                section
                            ]
                        }));
                    }
                }
                // 触发事件
                this.fireUpdatePropertyControls({ boInfo: boInfo });
            }
        }
    }
}
