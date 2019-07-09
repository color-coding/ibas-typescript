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
            export function newComponent(property: shell.bo.IBOPropertyInfo, mode: "Text" | "Input" | "Object" | "Object.2"): sap.ui.core.Control {
                // 创建绑定信息
                let bindInfo: {
                    path: string,
                    type?: sap.extension.data.Type
                } = {
                    path: property.property[0].toLowerCase() + property.property.substring(1)
                };
                if (property.property === "DocumentStatus" || property.property === "LineStatus") {
                    bindInfo.type = new sap.extension.data.DocumentStatus(mode === "Text" ? true : false);
                } else if (property.property === "ApprovalStatus") {
                    bindInfo.type = new sap.extension.data.ApprovalStatus(mode === "Text" ? true : false);
                } else if (property.property === "Direction") {
                    bindInfo.type = new sap.extension.data.Direction(mode === "Text" ? true : false);
                } else if (property.property === "Canceled" || property.property === "Referenced"
                    || property.property === "Locked" || property.property === "Transfered"
                    || property.property === "Activated" || property.property === "Deleted") {
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
        /** 用户字段相关 */
        export namespace userfields {

            function toDbFieldType(type: sap.extension.data.Type): ibas.emDbFieldType {
                if (type instanceof sap.extension.data.Numeric) {
                    return ibas.emDbFieldType.NUMERIC;
                } else if (type instanceof sap.extension.data.Decimal) {
                    return ibas.emDbFieldType.DECIMAL;
                } else if (type instanceof sap.extension.data.Date) {
                    return ibas.emDbFieldType.DATE;
                } else if (type instanceof sap.extension.data.DateTime) {
                    return ibas.emDbFieldType.DATE;
                } else if (type instanceof sap.extension.data.Time) {
                    return ibas.emDbFieldType.NUMERIC;
                }
                return ibas.emDbFieldType.ALPHANUMERIC;
            }
            /**
             * 检查用户字段（注册或更新绑定信息）
             * @param bindingInfo 绑定信息
             * @param userFields 用户字段
             * @returns 是否更新绑定信息
             */
            export function check(userFields: ibas.IUserFields, bindingInfo: {
                parts: {
                    path: string,
                    type: sap.extension.data.Type,
                }[]
            }): boolean {
                if (bindingInfo && bindingInfo.parts instanceof Array) {
                    for (let item of bindingInfo.parts) {
                        if (ibas.strings.isWith(item.path, "u_", undefined)) {
                            let name: string = item.path;
                            name = name[0].toUpperCase() + name.substring(1);
                            let userField: ibas.IUserField = userFields.register(name, toDbFieldType(item.type));
                            if (!ibas.objects.isNull(userField)) {
                                let index: number = userFields.indexOf(userField);
                                item.path = ibas.strings.format("userFields/{0}/value", index);
                                return true;
                            }
                        }
                    }
                }
                return false;
            }
        }
    }
}
