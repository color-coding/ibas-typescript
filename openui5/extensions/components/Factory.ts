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
             * 创建对象属性
             * @param property 属性
             * @param bo 对象
             */
            export function newProperty(property: shell.bo.IBizPropertyInfo, bo: shell.bo.IBizObjectInfo): shell.bo.IBizPropertyInfo {
                let description: string = ibas.businessobjects.resource(bo.name, property.name);
                if (description === property.name) {
                    description = property.description;
                }
                return {
                    name: property.name,
                    description: description,
                    alias: property.alias,
                    position: property.position,
                    dataType: property.dataType,
                    editType: property.editType,
                    editSize: property.editSize,
                    searched: property.searched,
                    systemed: property.systemed,
                    authorised: property.authorised,
                    values: property.values,
                    linkedObject: property.linkedObject
                };
            }
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
                    } else if (bindInfo.type instanceof sap.extension.data.Decimal && !(bindInfo.type instanceof sap.extension.data.Percentage)) {
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
                        let force: boolean = false;
                        let items: ibas.IList<sap.ui.core.Item> = new ibas.ArrayList<sap.ui.core.Item>();
                        for (let item of property.values) {
                            items.add(new sap.extension.m.SelectItem("", {
                                key: item.value,
                                text: item.description,
                                default: item.default,
                            }));
                            if (item.default === true) {
                                // 有默认值设置，则强制选择
                                force = true;
                            }
                        }

                        return force === true
                            ? new sap.extension.m.Select("", {
                                forceSelection: true,
                                editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                                items: items,
                                modelContextChange(this: sap.m.Select, event: sap.ui.base.Event): void {
                                    let data: any = this.getBindingContext()?.getObject();
                                    if (!ibas.objects.isNull(data)) {
                                        let binding: any = this.getBinding("bindingValue");
                                        if (binding instanceof sap.ui.model.PropertyBinding) {
                                            if (binding.getValue() === undefined) {
                                                binding.setValue(this.getSelectedKey());
                                            }
                                        }
                                    }
                                }
                            }).bindProperty("bindingValue", bindInfo)
                            : new sap.extension.m.Select("", {
                                forceSelection: false,
                                editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                                items: items,
                            }).bindProperty("bindingValue", bindInfo);
                    } else if (!ibas.strings.isEmpty(property.linkedObject)) {
                        return <sap.ui.core.Control>newInput(property.linkedObject).bindProperty("bindingValue", bindInfo);
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
            /**
             * 创建输入框
             * 1. #{CC_SYS_USER}.{Code} => Input
             * 2. {"type":"Criteria","BusinessObject":"CC_SYS_USER.Name", "Conditions":[]} => Input
             * 3. [1,2,3] => Input
             * 4. [{"key1","value1"},{"key2","value2"}] => Input
             * 5. yyyy-MM-dd => DatePicker
             * 5. hh:mm or hh:mm:ss => TimePicker
             * @param value 值模板
             */
            export function newInput(value: string, onChanged?: (event: sap.ui.base.Event) => void): sap.m.InputBase {
                let property: string;
                let input: sap.m.InputBase;
                let criteria: ibas.ICriteria;
                if (!ibas.strings.isEmpty(value) && (
                    (value.length === 5 && value.indexOf(":") === 2) ||
                    (value.length === 8 && value.indexOf(":") === 2 && value.lastIndexOf(":") === 5)
                )) {
                    // 时间类型
                    input = new sap.extension.m.TimePicker("", {
                        valueFormat: value,
                        displayFormat: value,
                        tooltip: value,
                    });
                } else if (!ibas.strings.isEmpty(value) && (
                    (value.length === 10 && value.indexOf("-") === 4 && value.lastIndexOf("-") === 7) ||
                    (value.length === 10 && value.indexOf("/") === 4 && value.lastIndexOf("/") === 7)
                )) {
                    // 日期类型
                    input = new sap.extension.m.DatePicker("", {
                        valueFormat: value,
                        displayFormat: value,
                        tooltip: value,
                    });
                } else if (ibas.strings.isWith(value, "#{", "}")) {
                    // 对象选择：#{CC_SYS_USER}.{Code}
                    try {
                        let values: string[] = ibas.config.applyVariables(value).split(".");
                        if (values.length > 1) {
                            criteria = new ibas.Criteria();
                            if (!ibas.strings.isEmpty(values[0])) {
                                criteria.businessObject = ibas.strings.remove(values[0], "#", "{", "}");
                            }
                            if (!ibas.strings.isEmpty(values[1])) {
                                property = ibas.strings.remove(values[1], "#", "{", "}");
                            }
                        }
                    } catch (error) {
                        criteria = null;
                        property = null;
                    }
                } else if (ibas.strings.isWith(value, "{", "}")) {
                    // 对象选择：Criteria对象{"businessObject":"CC_SYS_USER", "conditions":[]}
                    try {
                        criteria = ibas.criterias.valueOf(ibas.config.applyVariables(value));
                        if (ibas.strings.isEmpty(criteria.businessObject)) {
                            criteria = null;
                        }
                        if (criteria.businessObject.indexOf(".") > 0) {
                            property = criteria.businessObject.split(".")[1];
                            criteria.businessObject = criteria.businessObject.split(".")[0];
                        }
                    } catch (error) {
                        criteria = null;
                        property = null;
                    }
                } else if (ibas.strings.isWith(value, "[", "]")) {
                    // 数组
                    let oValue: any;
                    try {
                        oValue = JSON.parse(value);
                    } catch (error) {
                        oValue = [];
                    }
                    if (oValue instanceof Array) {
                        let items: ibas.IList<sap.ui.core.Item> = new ibas.ArrayList<sap.ui.core.Item>();
                        for (let item of oValue) {
                            if (item instanceof Object) {
                                let properties: string[] = [];
                                for (let pItem in item) {
                                    if (pItem) {
                                        properties.push(pItem);
                                    }
                                }
                                if (properties.length > 1) {
                                    items.add(new sap.ui.core.ListItem("", {
                                        key: item[properties[0]],
                                        text: item[properties[1]],
                                        additionalText: item[properties[0]],
                                    }));
                                } else if (properties.length > 0) {
                                    items.add(new sap.ui.core.ListItem("", {
                                        key: item[properties[0]],
                                        text: item[properties[0]],
                                    }));
                                } else {
                                    items.add(new sap.ui.core.ListItem("", {
                                        key: item,
                                        text: item,
                                    }));
                                }
                            } else {
                                items.add(new sap.ui.core.ListItem("", {
                                    key: item,
                                    text: item,
                                }));
                            }
                        }
                        input = new sap.extension.m.Input("", {
                            showValueHelp: true,
                            valueHelpRequest(event: sap.ui.base.Event): void {
                                let source: any = event.getSource();
                                if (source instanceof sap.m.Input) {
                                    source.showItems(undefined);
                                }
                            },
                            tooltip: value,
                            suggestionItems: items,
                            selectedItem: items.length > 0 ? items.firstOrDefault() : undefined,
                        });
                    }
                }
                if (ibas.objects.isNull(input)) {
                    input = new sap.extension.m.Input("", {
                    });
                    input.setPlaceholder(ibas.config.applyVariables(value));
                }
                // 对象选择
                if (input instanceof sap.m.Input && criteria instanceof ibas.Criteria) {
                    input.setTooltip(input.getPlaceholder());
                    input.setPlaceholder(undefined);
                    input.setShowValueHelp(true);
                    input.attachValueHelpRequest(undefined, function (event: sap.ui.base.Event): void {
                        if (ibas.objects.isNull(criteria)
                            || ibas.strings.isEmpty(criteria.businessObject)) {
                            return;
                        }
                        let source: any = event.getSource();
                        ibas.servicesManager.runChooseService<any>({
                            boCode: criteria.businessObject,
                            criteria: criteria,
                            chooseType: ibas.emChooseType.MULTIPLE,
                            onCompleted: (selecteds) => {
                                if (selecteds instanceof ibas.DataTable) {
                                    selecteds = <any>selecteds.convert({ format: false, nameAs: "index" });
                                    property = "0";
                                }
                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                for (let item of selecteds) {
                                    if (builder.length > 0) {
                                        builder.append(ibas.DATA_SEPARATOR);
                                    }
                                    if (ibas.strings.isEmpty(property)) {
                                        builder.append(item);
                                    } else {
                                        builder.append(item[property]);
                                    }
                                }
                                if (source instanceof sap.m.InputBase) {
                                    source.setValue(builder.toString());
                                    if (onChanged instanceof Function) {
                                        onChanged(new sap.ui.base.Event("changed", source, {
                                            selecteds: selecteds
                                        }));
                                    }
                                }
                            }
                        });
                    });
                }
                if (onChanged instanceof Function) {
                    input.attachChange(undefined, onChanged);
                    // 初始化数据
                    onChanged(new sap.ui.base.Event("init", input, undefined));
                }
                return input;
            }
        }
    }
}
