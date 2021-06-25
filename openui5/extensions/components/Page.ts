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
             * 页
             */
            sap.m.Page.extend("sap.extension.m.Page", {
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
                setModel(oModel: model.JSONModel, sName?: string): Page {
                    this.bindObject("/");
                    sap.m.Page.prototype.setModel.apply(this, arguments);
                    return this;
                },
                /** 退出 */
                exit(this: Page): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.m.Page.prototype).exit.apply(this, arguments);
                }
            });
            /**
             * 数据页
             */
            Page.extend("sap.extension.m.DataPage", {
                metadata: {
                    properties: {
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
                getDataInfo(this: DataPage): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataPage, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataPage {
                    return this.setProperty("dataInfo", value);
                },
                /** 重构设置 */
                applySettings(this: DataPage, mSettings: any, oScope?: any): DataPage {
                    if (mSettings.content) {
                        // 给区域套一层，以处理自定义字段
                        let content: any = mSettings.content;
                        mSettings.content = [
                            new sap.ui.layout.DynamicSideContent(this.getId() + "_contentSplit", {
                                showMainContent: true,
                                showSideContent: false,
                                mainContent: [
                                    new Page(this.getId() + "_commonSplit", {
                                        showHeader: false,
                                        content: content
                                    })
                                ],
                                sideContent: [
                                    new sap.ui.layout.form.SimpleForm(this.getId() + "_extendSplit", {
                                        width: "100%",
                                        editable: true,
                                    }),
                                ]
                            })

                        ];
                    }
                    Page.prototype.applySettings.apply(this, arguments);
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
                    if (typeof dataInfo === "object") {
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
                setModel(this: DataPage, oModel: model.JSONModel, sName?: string): DataPage {
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
                                let splitter: any = sap.ui.getCore().byId(this.getId() + "_extendSplit");
                                if (splitter instanceof sap.ui.layout.form.SimpleForm) {
                                    for (let item of splitter.getContent()) {
                                        let bindingInfo: any = managedobjects.bindingInfo(item, "bindingValue");
                                        if (!ibas.objects.isNull(bindingInfo)) {
                                            userfields.check(userFields, bindingInfo);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return Page.prototype.setModel.apply(this, arguments);
                },
            });
            function checkFormContent(control: sap.ui.core.Control, properties: shell.bo.IBizPropertyInfo[]): void {
                if (control instanceof sap.ui.layout.VerticalLayout) {
                    for (let item of control.getContent()) {
                        checkFormContent(item, properties);
                    }
                } else if (control instanceof sap.m.FlexBox) {
                    for (let item of control.getItems()) {
                        checkFormContent(item, properties);
                    }
                } else if (control instanceof sap.ui.layout.Splitter) {
                    for (let item of control.getContentAreas()) {
                        checkFormContent(item, properties);
                    }
                } else if (control instanceof sap.m.ScrollContainer) {
                    for (let item of control.getContent()) {
                        checkFormContent(item, properties);
                    }
                } else if (control instanceof sap.ui.layout.form.SimpleForm) {
                    for (let fmItem of control.getContent()) {
                        if (fmItem instanceof sap.m.Label) {
                            continue;
                        }
                        if (fmItem instanceof sap.m.Title) {
                            continue;
                        }
                        if (fmItem instanceof sap.m.Button) {
                            continue;
                        }
                        if (fmItem instanceof sap.m.ListBase) {
                            continue;
                        }
                        if (fmItem instanceof sap.ui.table.Table) {
                            continue;
                        }
                        if (fmItem instanceof sap.ui.core.Control) {
                            let bindingPath: string = managedobjects.bindingPath(fmItem);
                            let index: number = properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                            if (index < 0) {
                                continue;
                            }
                            let propertyInfo: shell.bo.IBizPropertyInfo = properties[index];
                            if (!ibas.objects.isNull(propertyInfo)) {
                                if (propertyInfo.authorised === ibas.emAuthoriseType.NONE) {
                                    fmItem.setVisible(false);
                                    let label: any = sap.ui.getCore().byId(fmItem.getIdForLabel());
                                    if (label instanceof sap.ui.core.Control) {
                                        label.setVisible(false);
                                    }
                                } else if (propertyInfo.authorised === ibas.emAuthoriseType.READ) {
                                    controls.nonEditable(fmItem);
                                }
                                properties[index] = null;
                            }
                        }
                    }
                }
            }
            function propertyControls(this: DataPage, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                // 查询未存在的属性
                let properties: shell.bo.IBizPropertyInfo[] = Object.assign([], boInfo.properties);
                let layout: any = sap.ui.getCore().byId(this.getId() + "_commonSplit");
                if (layout instanceof sap.m.Page) {
                    checkFormContent(layout, properties);
                }
                let splitter: any;
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
                    if (ibas.objects.isNull(splitter)) {
                        // 创建自定义字段按钮
                        let shower: any = sap.ui.getCore().byId(this.getId() + "_shower");
                        if (ibas.objects.isNull(shower)) {
                            shower = new sap.m.Button(this.getId() + "_shower", {
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://filter-fields",
                                press: () => {
                                    let split: any = sap.ui.getCore().byId(this.getId() + "_contentSplit");
                                    if (split instanceof sap.ui.layout.DynamicSideContent) {
                                        split.setShowSideContent(!split.getShowSideContent(), false);
                                    }
                                }
                            });
                            let bar: sap.m.IBar = this.getSubHeader();
                            if (ibas.objects.isNull(bar)) {
                                this.setSubHeader(bar = new sap.m.Toolbar("", {
                                }));
                            }
                            if (bar instanceof sap.m.Toolbar) {
                                let done: boolean = false;
                                for (let item of bar.getContent()) {
                                    if (item instanceof sap.m.ToolbarSpacer) {
                                        done = true;
                                        break;
                                    }
                                }
                                if (done === false) {
                                    bar.addContent(new sap.m.ToolbarSpacer(""));
                                }
                                bar.addContent(shower);
                            } else if (bar instanceof sap.m.Bar) {
                                bar.insertContentRight(shower, bar.getContentRight().length - 1);
                            }
                        }
                        splitter = sap.ui.getCore().byId(this.getId() + "_extendSplit");
                    }
                    // 创建未存在的控件
                    if (splitter instanceof sap.ui.layout.form.SimpleForm) {
                        property = factories.newProperty(property, boInfo);
                        splitter.addContent(new sap.m.Label("", {
                            text: property.systemed !== true ? property.description :
                                ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                        }));
                        splitter.addContent(factories.newComponent(property, "Input"));
                    }
                }
            }
        }
    }
}
