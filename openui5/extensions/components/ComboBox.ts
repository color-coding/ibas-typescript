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
             * 下拉框
             */
            sap.m.ComboBox.extend("sap.extension.m.ComboBox", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string", defaultValue: null },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ComboBox): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: ComboBox, value: string): ComboBox {
                    sap.m.ComboBox.prototype.setSelectedKey.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /** 重写此方法，设置选中值 */
                setSelection(this: ComboBox, value: sap.ui.core.Item): ComboBox {
                    (<any>sap.m.ComboBox.prototype).setSelection.apply(this, arguments);
                    this.setProperty("bindingValue", this.getSelectedKey());
                    return this;
                },
                /**
                 * 销毁可选项
                 */
                destroyItems(this: ComboBox): ComboBox {
                    (<any>sap.m.ComboBox.prototype).destroyItems.apply(this, arguments);
                    this.setValue(undefined);
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: ComboBox, sName: string, oBindingInfo: any): ComboBox {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.ComboBox.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                applySettings(this: ComboBox, mSettings: any, oScope?: any): ComboBox {
                    sap.m.ComboBox.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.fireLoadItems({});
                    }
                    return this;
                },
            });
            /**
             * 多选下拉框（数据分割符）
             */
            sap.m.MultiComboBox.extend("sap.extension.m.MultiComboBox", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string", defaultValue: null },
                        /** 数据分隔符 */
                        dataSeparator: { type: "string", defaultValue: ibas.DATA_SEPARATOR },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: MultiComboBox): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: MultiComboBox, value: string): MultiComboBox {
                    sap.m.MultiComboBox.prototype.setSelectedKeys.apply(this, ibas.objects.isNull(value) ? [value] : [value.split(this.getDataSeparator())]);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 销毁可选项
                 */
                destroyItems(this: MultiComboBox): MultiComboBox {
                    (<any>sap.m.MultiComboBox.prototype).destroyItems.apply(this, arguments);
                    this.setSelectedKeys([]);
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: MultiComboBox, sName: string, oBindingInfo: any): MultiComboBox {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.MultiComboBox.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                /** 初始化 */
                init(this: MultiComboBox): void {
                    // 调用基类构造
                    (<any>sap.m.MultiComboBox.prototype).init.apply(this, arguments);
                    this.attachSelectionFinish(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof MultiComboBox) {
                            let builder: ibas.StringBuilder = new ibas.StringBuilder();
                            builder.map(null, "");
                            builder.map(undefined, "");
                            for (let item of source.getSelectedKeys()) {
                                if (builder.length > 0) {
                                    builder.append(source.getDataSeparator());
                                }
                                builder.append(item);
                            }
                            source.setProperty("bindingValue", builder.toString());
                        }
                    });
                },
                applySettings(this: MultiComboBox, mSettings: any, oScope?: any): MultiComboBox {
                    sap.m.MultiComboBox.prototype.applySettings.apply(this, arguments);
                    if (this.getItems().length === 0) {
                        this.fireLoadItems({});
                    }
                    return this;
                },
            });
            /**
             * 对象属性可选值-多择框
             */
            MultiComboBox.extend("sap.extension.m.PropertyMultiComboBox", {
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
                getDataInfo(this: PropertyMultiComboBox): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertyMultiComboBox, value: { code: string, name?: string } | string): PropertyMultiComboBox {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertyMultiComboBox): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertyMultiComboBox, value: string): PropertyMultiComboBox {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: PropertyMultiComboBox): PropertyMultiComboBox {
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
                    // this.destroyItems(); // 删除后记忆就不对了
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
                                                    let sItem: any = this.getItemByKey(item.value);
                                                    if (sItem instanceof ui.core.Item) {
                                                        sItem.setText(item.description);
                                                        if (sItem instanceof SelectItem) {
                                                            sItem.setDefault(item.default);
                                                        }
                                                    } else {
                                                        this.addItem(new SelectItem("", {
                                                            key: item.value,
                                                            text: ibas.strings.isEmpty(item.description) ? item.value : item.description,
                                                            default: item.default,
                                                        }));
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
                    return this;
                },
                applySettings(this: PropertyMultiComboBox, mSettings: any, oScope?: any): PropertyMultiComboBox {
                    if (typeof mSettings.loadItems !== "function") {
                        mSettings.loadItems = this.loadItems;
                    }
                    MultiComboBox.prototype.applySettings.apply(this, arguments);
                    return this;
                },
            });
        }
    }
}
