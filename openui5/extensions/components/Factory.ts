/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        /** 组件工厂 */
        export namespace factories {
            /**
             * 创建属性组件
             * @param property 属性信息
             * @param textView 文本视图
             */
            export function newComponent(property: shell.bo.IBizPropertyInfo, mode: "Text" | "Input" | "Object" | "Object.2"): sap.ui.core.Control {
                // 创建绑定信息
                let bindInfo: {
                    path: string,
                    type?: sap.extension.data.Type
                } = {
                    path: property.name[0].toLowerCase() + property.name.substring(1)
                };
                if (property.name === "DocumentStatus" || property.name === "LineStatus") {
                    bindInfo.type = new sap.extension.data.DocumentStatus(mode === "Text" ? true : false);
                } else if (property.name === "ApprovalStatus") {
                    bindInfo.type = new sap.extension.data.ApprovalStatus(mode === "Text" ? true : false);
                } else if (property.name === "Direction") {
                    bindInfo.type = new sap.extension.data.Direction(mode === "Text" ? true : false);
                } else if (property.name === "Canceled" || property.name === "Referenced"
                    || property.name === "Locked" || property.name === "Transfered"
                    || property.name === "Activated" || property.name === "Deleted") {
                    bindInfo.type = new sap.extension.data.YesNo(mode === "Text" ? true : false);
                } else if (property.dataType === "Numeric") {
                    bindInfo.type = new sap.extension.data.Numeric();
                } else if (property.dataType === "Date") {
                    if (property.editType === "Time") {
                        bindInfo.type = new sap.extension.data.Time();
                    } else {
                        bindInfo.type = new sap.extension.data.Date();
                    }
                } else if (property.dataType === "Decimal") {
                    if (property.editType === "Rate") {
                        bindInfo.type = new sap.extension.data.Rate();
                    } else if (property.editType === "Sum") {
                        bindInfo.type = new sap.extension.data.Sum();
                    } else if (property.editType === "Price") {
                        bindInfo.type = new sap.extension.data.Price();
                    } else if (property.editType === "Quantity") {
                        bindInfo.type = new sap.extension.data.Quantity();
                    } else if (property.editType === "Percentage") {
                        bindInfo.type = new sap.extension.data.Percentage();
                    } else if (property.editType === "Measurement") {
                        bindInfo.type = new sap.extension.data.Measurement();
                    } else {
                        bindInfo.type = new sap.extension.data.Decimal();
                    }
                } else {
                    bindInfo.type = new sap.extension.data.Alphanumeric();
                }
                if (mode === "Text") {
                    if (property.values instanceof Array && property.values.length > 0) {
                        // 可选值
                        bindInfo.type = new sap.extension.data.Unknown({
                            formatValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.value === oValue) {
                                            return item.description;
                                        }
                                    }
                                }
                                return oValue;
                            },
                            parseValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.description === oValue) {
                                            return item.value;
                                        }
                                    }
                                }
                                return oValue;
                            }
                        });
                    }
                    return new sap.extension.m.Text("", {
                    }).bindProperty("bindingValue", bindInfo);
                } else if (mode === "Input") {
                    if (bindInfo.type instanceof sap.extension.data.Date) {
                        return new sap.extension.m.DatePicker("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Time) {
                        return new sap.extension.m.TimePicker("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Decimal) {
                        return new sap.extension.m.Input("", {
                            type: sap.m.InputType.Number,
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Numeric) {
                        return new sap.extension.m.Input("", {
                            type: sap.m.InputType.Number,
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (property.values instanceof Array && property.values.length > 0) {
                        let items: ibas.IList<sap.ui.core.Item> = new ibas.ArrayList<sap.ui.core.Item>();
                        items.add(new sap.ui.core.ListItem("", {
                            key: "",
                            text: ibas.i18n.prop("openui5_please_select_data")
                        }));
                        for (let item of property.values) {
                            items.add(new sap.ui.core.ListItem("", {
                                key: item.value,
                                text: item.description
                            }));
                        }
                        return new sap.extension.m.Select("", {
                            enabled: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            items: items
                        }).bindProperty("bindingValue", bindInfo);
                    } else {
                        return new sap.extension.m.Input("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                        }).bindProperty("bindingValue", bindInfo);
                    }
                } else if (mode === "Object") {
                    if (property.values instanceof Array && property.values.length > 0) {
                        // 可选值
                        bindInfo.type = new sap.extension.data.Unknown({
                            formatValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.value === oValue) {
                                            return item.description;
                                        }
                                    }
                                }
                                return oValue;
                            },
                            parseValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.description === oValue) {
                                            return item.value;
                                        }
                                    }
                                }
                                return oValue;
                            }
                        });
                    }
                    return new sap.extension.m.ObjectAttribute("", {
                        title: property.description,
                        text: bindInfo,
                    });
                } else if (mode === "Object.2") {
                    if (property.values instanceof Array && property.values.length > 0) {
                        // 可选值
                        bindInfo.type = new sap.extension.data.Unknown({
                            formatValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.value === oValue) {
                                            return item.description;
                                        }
                                    }
                                }
                                return oValue;
                            },
                            parseValue(oValue: any, sInternalType: string): any {
                                if (sInternalType === "string") {
                                    for (let item of property.values) {
                                        if (item.description === oValue) {
                                            return item.value;
                                        }
                                    }
                                }
                                return oValue;
                            }
                        });
                    }
                    return new sap.extension.m.ObjectAttribute("", {
                        text: bindInfo,
                    });
                } else {
                    return null;
                }
            }
        }
    }
}
