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
                getDataInfo(this: DataPage): { code: string, name?: string } | string | Function | shell.bo.IBOInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataPage, value: { code: string, name?: string } | string | Function | shell.bo.IBOInfo): DataPage {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性过滤器
                 */
                getPropertyFilter(): Function {
                    return this.getProperty("propertyFilter");
                },
                /**
                 * 设置属性过滤器
                 * @param value 过滤器
                 */
                setPropertyFilter(value: (property: shell.bo.IBOPropertyInfo) => boolean): DataPage {
                    return this.setProperty("propertyFilter", value);
                },
                /** 重构设置 */
                applySettings(this: DataPage): DataPage {
                    Page.prototype.applySettings.apply(this, arguments);
                    // 重新构建区域
                    let content: any[] = this.removeAllContent();
                    this.addContent(new sap.ui.layout.Splitter("", {
                        orientation: sap.ui.core.Orientation.Horizontal,
                        contentAreas: [
                            new sap.ui.layout.Splitter(this.getId() + "_commonSplit", {
                                orientation: sap.ui.core.Orientation.Vertical,
                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                    resizable: true,
                                    size: "100%",
                                }),
                                contentAreas: [
                                    new sap.ui.layout.VerticalLayout(this.getId() + "_contentSplit", {
                                        width: "100%",
                                        content: content
                                    })
                                ]
                            }),
                            new sap.ui.layout.Splitter(this.getId() + "_extendSplit", {
                                orientation: sap.ui.core.Orientation.Vertical,
                                contentAreas: [
                                ]
                            }),
                        ]
                    }));
                    // 设置其他属性
                    let dataInfo: any = this.getDataInfo();
                    if (typeof dataInfo === "string") {
                        dataInfo = {
                            code: dataInfo,
                        };
                    } else if (typeof dataInfo === "function") {
                        dataInfo = {
                            code: dataInfo.BUSINESS_OBJECT_CODE,
                            name: ibas.objects.getName(dataInfo),
                        };
                    }
                    if (typeof dataInfo === "object") {
                        if (dataInfo.properties instanceof Array) {
                            propertyControls.call(this, dataInfo);
                        } else {
                            let info: { code: string, name?: string } = dataInfo;
                            let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                            boRepository.fetchBOInfos({
                                boCode: info.code,
                                boName: info.name,
                                onCompleted: (opRslt) => {
                                    if (opRslt.resultCode !== 0) {
                                        ibas.logger.log(new Error(opRslt.message));
                                    } else {
                                        propertyControls.call(this, opRslt.resultObjects.firstOrDefault());
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
                                if (splitter instanceof sap.ui.layout.Splitter) {
                                    for (let form of splitter.getContentAreas()) {
                                        if (form instanceof sap.ui.layout.form.SimpleForm) {
                                            for (let item of form.getContent()) {
                                                let bindingInfo: any = (<any>item).getBindingInfo("bindingValue");
                                                if (!ibas.objects.isNull(bindingInfo)) {
                                                    userfields.check(userFields, bindingInfo);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return Page.prototype.setModel.apply(this, arguments);
                },
            });
            function propertyControls(this: DataPage, boInfo: shell.bo.IBOInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                // 查询未存在的属性
                let filter: Function = this.getPropertyFilter();
                let properties: ibas.IList<shell.bo.IBOPropertyInfo> = new ibas.ArrayList<shell.bo.IBOPropertyInfo>();
                for (let item of boInfo.properties) {
                    if (item.editSize <= 0) {
                        continue;
                    }
                    if (item.authorised === ibas.emAuthoriseType.NONE) {
                        continue;
                    }
                    if (filter instanceof Function) {
                        if (filter(item) === false) {
                            continue;
                        }
                    }
                    properties.add(item);
                }
                // 只读列表（遍历列，存在输入框则非只读）
                let propertyInfo: shell.bo.IBOPropertyInfo;
                for (let control of this.getContent()) {
                    if (control instanceof sap.ui.core.Control) {
                        let path: string = (<any>control).getBindingPath("bindingValue");
                        if (!ibas.strings.isEmpty(path)) {
                            propertyInfo = properties.firstOrDefault(c => ibas.strings.equalsIgnoreCase(path, c.property));
                        }
                    }
                    if (ibas.objects.isNull(propertyInfo)) {
                        continue;
                    }
                    for (let i: number = properties.length - 1; i >= 0; i--) {
                        let item: shell.bo.IBOPropertyInfo = properties[i];
                        if (item.property === propertyInfo.property) {
                            properties.removeAt(i);
                        }
                    }
                }
                // 创建自定义字段按钮
                if (properties.length > 0) {
                    let shower: any = sap.ui.getCore().byId(this.getId() + "_shower");
                    if (ibas.objects.isNull(shower)) {
                        shower = new sap.m.Button(this.getId() + "_shower", {
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://filter-fields",
                            press: () => {
                                let split: any = sap.ui.getCore().byId(this.getId() + "_commonSplit");
                                if (split instanceof sap.ui.layout.Splitter) {
                                    let splitLayout: any = split.getLayoutData();
                                    if (splitLayout instanceof sap.ui.layout.SplitterLayoutData) {
                                        if (splitLayout.getSize() === "100%") {
                                            splitLayout.setSize("80%");
                                        } else {
                                            splitLayout.setSize("100%");
                                        }
                                    }
                                }
                            }
                        });
                        let bar: sap.m.IBar = this.getSubHeader();
                        if (ibas.objects.isNull(bar)) {
                            this.setSubHeader(bar = new sap.m.Toolbar("", {
                            }));
                        }
                        if (bar instanceof sap.m.Toolbar) {
                            bar.addContent(new sap.m.ToolbarSpacer(""));
                            bar.addContent(shower);
                        } else if (bar instanceof sap.m.Bar) {
                            bar.insertContentRight(shower, bar.getContentRight().length - 1);
                        }
                    }
                }
                // 创建未存在的控件
                let splitter: any = sap.ui.getCore().byId(this.getId() + "_extendSplit");
                if (splitter instanceof sap.ui.layout.Splitter) {
                    let form: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                    });
                    for (let property of properties) {
                        form.addContent(new sap.m.Label("", {
                            text: property.description
                        }));
                        form.addContent(factories.newComponent(property));
                    }
                    splitter.addContentArea(form);
                }
            }
        }
    }
}
