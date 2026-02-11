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
             * 对象项目
             */
            sap.m.ObjectListItem.extend("sap.extension.m.ObjectListItem", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 数据对象项目
             */
            ObjectListItem.extend("sap.extension.m.DataObjectListItem", {
                metadata: {
                    properties: {
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 用户字段模式 */
                        userFieldsMode: { type: "string" },
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
                getDataInfo(this: DataObjectListItem): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataObjectListItem, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataObjectListItem {
                    return this.setProperty("dataInfo", value);
                },
                /** 重构设置 */
                applySettings(this: DataObjectListItem, mSettings: any, oScope?: any): DataObjectListItem {
                    if (ibas.objects.isNull(mSettings.userFieldsMode)) {
                        mSettings.userFieldsMode = "attribute";
                    }
                    ObjectListItem.prototype.applySettings.apply(this, arguments);
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
                                    }
                                }
                            });
                        }
                    }
                    return this;
                },
            });
            function propertyControls(this: DataObjectListItem, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                let ptyColumnMap: Map<shell.bo.IBizPropertyInfo, sap.m.ObjectAttribute> = new Map<any, any>();
                for (let i: number = 0; i < this.getAttributes().length; i++) {
                    let item: sap.m.ObjectAttribute = this.getAttributes()[i];
                    let bindingPath: string = managedobjects.bindingPath(item);
                    let index: number = boInfo.properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                    if (index < 0) {
                        return;
                    }
                    let property: shell.bo.IBizPropertyInfo = boInfo.properties[index];
                    if (!ibas.objects.isNull(property)) {
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        ptyColumnMap.set(property, item);
                    } else {
                        property = <any>{ position: i };
                        ptyColumnMap.set(property, item);
                    }
                }
                if (this.getUserFieldsMode() === "attribute") {
                    for (let property of boInfo.properties.sort((a, b) => a.position - b.position)) {
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
                        let element: any = factories.newComponent(property, "Object");
                        if (property.systemed === true && element instanceof sap.m.ObjectAttribute) {
                            element.setTitle(ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()));
                        }
                        ptyColumnMap.set(property, element);
                    }
                }
                // 排序并添加
                for (let item of ibas.arrays.create(this.getAttributes()).reverse()) {
                    this.removeAttribute(item);
                }
                for (let property of ibas.arrays.create(ptyColumnMap.keys()).sort((a, b) => a.position - b.position)) {
                    if (property.position > 0) {
                        this.insertAttribute(ptyColumnMap.get(property), property.position);
                    } else {
                        this.addAttribute(ptyColumnMap.get(property));
                    }
                }
            }
        }
    }
}
