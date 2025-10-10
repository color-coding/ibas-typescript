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

            export namespace properties {
                export function linkedObject(linkedObject: string): { property: string, criteria: ibas.ICriteria } {
                    let property: string;
                    let criteria: ibas.ICriteria;

                    if (ibas.strings.isWith(linkedObject, "#{", "}")) {
                        // 对象选择：#{CC_SYS_USER}.{Code}
                        try {
                            let values: string[] = ibas.config.applyVariables(linkedObject).split(".");
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
                    } else if (ibas.strings.isWith(linkedObject, "{", "}")) {
                        // 对象选择：Criteria对象{"businessObject":"CC_SYS_USER", "conditions":[]}
                        try {
                            criteria = ibas.criterias.valueOf(ibas.config.applyVariables(linkedObject));
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
                    }
                    if (ibas.objects.isNull(criteria)) {
                        throw new Error(ibas.i18n.prop("sys_unrecognized_data"));
                    }
                    return {
                        property: ibas.objects.isNull(property) ? "" : property,
                        criteria: criteria,
                    };
                }
                export function fetchLinkedObjects(linked: { property: string, criteria: ibas.ICriteria },
                    sKeyValue: string, onCompleted: (results: ibas.ArrayList<ibas.KeyText> | Error) => void): void {

                    let boType: any = ibas.boFactory.classOf(linked.criteria.businessObject);
                    if (boType instanceof Function) {
                        let dataInfo: any = {
                            type: boType,
                            key: linked.property.split(":")[0],
                            text: linked.property.split(":")[1],
                        };
                        let boRepository: any;
                        if (!BO_REPOSITORIES.has(dataInfo)) {
                            boRepository = ibas.businessobjects.repositories.of(dataInfo.type);
                            if (ibas.objects.isNull(boRepository)) {
                                onCompleted(new Error("repository not found."));
                                return;
                            }
                            BO_REPOSITORIES.set(dataInfo.type, boRepository);
                        }
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        criteria.result = -1;
                        criteria.noChilds = true;
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = dataInfo.text ? dataInfo.text : dataInfo.key;
                        condition.value = sKeyValue;
                        condition.operation = ibas.emConditionOperation.CONTAIN;

                        repository.fetch(repositories.repository(boRepository), dataInfo, criteria,
                            (values) => {
                                onCompleted(values);
                            }
                        );
                    }
                }
            }
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
                    required: property.required,
                    linkedObject: property.linkedObject,
                    valueChooseType: property.valueChooseType,
                    valueInputable: property.valueInputable,
                    triggerByProperty: property.triggerByProperty,
                    width: property.width,
                };
            }
            /**
             * 创建属性组件
             * @param property 属性信息
             * @param mode 视图类型
             */
            export function newComponent(property: shell.bo.IBizPropertyInfo, mode: "Text" | "Input" | "Object" | "Object.2", onChanged?: (event: sap.ui.base.Event) => void): sap.ui.core.Control {
                // 创建绑定信息
                let bindInfo: sap.ui.base.ManagedObject.PropertyBindingInfo = {
                    path: ibas.businessobjects.properties.naming.lowerCamelCase(property.name)
                };
                if (property.name === "DocumentStatus" || property.name === "LineStatus") {
                    bindInfo.type = new sap.extension.data.DocumentStatus(mode === "Text" ? true : false);
                } else if (property.name === "ApprovalStatus") {
                    bindInfo.type = new sap.extension.data.ApprovalStatus(mode === "Text" ? true : false);
                } else if (property.name === "Direction") {
                    bindInfo.type = new sap.extension.data.Direction(mode === "Text" ? true : false);
                } else if (property.name === "Canceled" || property.name === "Referenced"
                    || property.name === "Locked" || property.name === "Transfered"
                    || property.name === "Activated" || property.name === "Deleted"
                    || property.name === "Printed") {
                    bindInfo.type = new sap.extension.data.YesNo(mode === "Text" ? true : false);
                } else if (ibas.strings.equalsIgnoreCase(property.dataType, "Numeric")) {
                    bindInfo.type = new sap.extension.data.Numeric();
                } else if (ibas.strings.equalsIgnoreCase(property.dataType, "Date")) {
                    if (ibas.strings.equalsIgnoreCase(property.editType, "Time")) {
                        bindInfo.type = new sap.extension.data.Time();
                    } else {
                        bindInfo.type = new sap.extension.data.Date();
                    }
                } else if (ibas.strings.equalsIgnoreCase(property.dataType, "Decimal")) {
                    if (ibas.strings.equalsIgnoreCase(property.editType, "Rate")) {
                        bindInfo.type = new sap.extension.data.Rate();
                    } else if (ibas.strings.equalsIgnoreCase(property.editType, "Sum")) {
                        bindInfo.type = new sap.extension.data.Sum();
                    } else if (ibas.strings.equalsIgnoreCase(property.editType, "Price")) {
                        bindInfo.type = new sap.extension.data.Price();
                    } else if (ibas.strings.equalsIgnoreCase(property.editType, "Quantity")) {
                        bindInfo.type = new sap.extension.data.Quantity();
                    } else if (ibas.strings.equalsIgnoreCase(property.editType, "Percentage")) {
                        bindInfo.type = new sap.extension.data.Percentage();
                    } else if (ibas.strings.equalsIgnoreCase(property.editType, "Measurement")) {
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
                    } else if (
                        // 对象选择：#{CC_SYS_USER}.{Code}
                        ibas.strings.isWith(property.linkedObject, "#{", "}")
                        // 对象选择：Criteria对象{"businessObject":"CC_SYS_USER", "conditions":[]}
                        || ibas.strings.isWith(property.linkedObject, "{", "}")
                    ) {
                        try {
                            let linked: {
                                property: string;
                                criteria: ibas.ICriteria;
                            } = properties.linkedObject(property.linkedObject);
                            // 对象描述：Code:Name方式，表示Code显示为Name
                            if (ibas.strings.count(linked.property, ":") > 0) {
                                let boType: any = ibas.boFactory.classOf(linked.criteria.businessObject);
                                if (boType instanceof Function) {
                                    let dataInfo: any = {
                                        type: boType,
                                        key: linked.property.split(":")[0],
                                        text: linked.property.split(":")[1],
                                    };
                                    let boRepository: any;
                                    if (!BO_REPOSITORIES.has(dataInfo)) {
                                        boRepository = ibas.businessobjects.repositories.of(dataInfo.type);
                                        if (ibas.objects.isNull(boRepository)) {
                                            throw new Error(ibas.strings.format("not found {0}'s repository.", ibas.objects.nameOf(dataInfo.type)));
                                        }
                                        BO_REPOSITORIES.set(dataInfo.type, boRepository);
                                    }
                                    return new sap.extension.m.RepositoryText("", {
                                        repository: BO_REPOSITORIES.get(dataInfo.type),
                                        dataInfo: dataInfo
                                    }).bindProperty("bindingValue", bindInfo);
                                }
                            }
                        } catch (error) {
                            ibas.logger.log(error);
                        }
                    }
                    return new sap.extension.m.Text("", {
                        tooltip: property.dataType === "Memo" ? bindInfo : undefined,
                    }).bindProperty("bindingValue", bindInfo);
                } else if (mode === "Input") {
                    if (property.values instanceof Array && property.values.length > 0) {
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
                        if (property.valueChooseType === ibas.emChooseType.MULTIPLE) {
                            return new sap.extension.m.MultiComboBox("", {
                                required: property.required,
                                editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                                items: items,
                            }).bindProperty("bindingValue", bindInfo);
                        } else {
                            return force === true ? new sap.extension.m.Select("", {
                                forceSelection: true,
                                required: property.required,
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
                            }).bindProperty("bindingValue", bindInfo) : new sap.extension.m.ComboBox("", {
                                required: property.required,
                                editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                                items: items,
                                change(this: sap.m.ComboBox, event: sap.ui.base.Event): void {
                                    let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                                    if (source instanceof sap.m.ComboBox) {
                                        let key: any = source.getSelectedKey();
                                        let value: any = source.getValue();
                                        if (!key && value) {
                                            source.setValueState(sap.ui.core.ValueState.Error);
                                        } else {
                                            source.setValueState(sap.ui.core.ValueState.None);
                                        }
                                    }
                                },
                            }).bindProperty("bindingValue", bindInfo);

                        }
                    } else if (ibas.strings.equalsIgnoreCase(property.dataType, "Memo")) {
                        return new sap.extension.m.TextArea("", {
                            rows: 1,
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (!ibas.strings.isEmpty(property.linkedObject)) {
                        let input: sap.m.InputBase = newInput(property.linkedObject, onChanged, property.valueChooseType);
                        input.bindProperty("bindingValue", bindInfo);
                        input.setRequired(property.required);
                        input.setEditable(property.authorised === ibas.emAuthoriseType.ALL ? true : false);
                        // 自动触发选择
                        if (property.valueChooseType === ibas.emChooseType.SINGLE) {
                            if (!ibas.strings.isEmpty(property.triggerByProperty)) {
                                input.attachModelContextChange(undefined, function (event: sap.ui.base.Event): void {
                                    let source: any = event.getSource();
                                    if (source instanceof sap.m.Input) {
                                        let data: any = source.getBindingContext()?.getObject();
                                        if (data instanceof ibas.Bindable) {
                                            data.removeListener(ibas.strings.format("{0}_{1}", data.toString(), property.name));
                                            data.registerListener({
                                                id: ibas.strings.format("{0}_{1}", data.toString(), property.name),
                                                propertyChanged(name: string): void {
                                                    let value: any = data[name];
                                                    if (ibas.strings.isWith(name, "userFields/", undefined)) {
                                                        let index: string = name.substring(name.indexOf("/") + 1);
                                                        if (ibas.numbers.isNumber(index)) {
                                                            let userFields: ibas.IUserFields = data.userFields;
                                                            if (userFields instanceof ibas.UserFields) {
                                                                let userField: ibas.IUserField = userFields.get(ibas.numbers.valueOf(index));
                                                                if (userField instanceof ibas.UserField) {
                                                                    name = userField.name;
                                                                    value = userField.value;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (ibas.strings.equalsIgnoreCase(name, property.triggerByProperty)) {
                                                        source.fireValueHelpRequest({
                                                            resultCount: 1,
                                                            triggerProperty: property.triggerByProperty,
                                                            triggerValue: value,
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                        // 是否可修改
                        if (property.valueInputable === true && input instanceof m.Input) {
                            input.setValueHelpOnly(false);
                        }
                        return input;
                    } else if (bindInfo.type instanceof sap.extension.data.Date) {
                        return new sap.extension.m.DatePicker("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Time) {
                        return new sap.extension.m.TimePicker("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Decimal && !(bindInfo.type instanceof sap.extension.data.Percentage)) {
                        return new sap.extension.m.Input("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    } else if (bindInfo.type instanceof sap.extension.data.Numeric) {
                        return new sap.extension.m.Input("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    } else {
                        return new sap.extension.m.Input("", {
                            editable: property.authorised === ibas.emAuthoriseType.ALL ? true : false,
                            required: property.required,
                        }).bindProperty("bindingValue", bindInfo);
                    }
                } else if (mode === "Object" || mode === "Object.2") {
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
                    } else if (
                        // 对象选择：#{CC_SYS_USER}.{Code}
                        ibas.strings.isWith(property.linkedObject, "#{", "}")
                        // 对象选择：Criteria对象{"businessObject":"CC_SYS_USER", "conditions":[]}
                        || ibas.strings.isWith(property.linkedObject, "{", "}")
                    ) {
                        try {
                            let linked: {
                                property: string;
                                criteria: ibas.ICriteria;
                            } = properties.linkedObject(property.linkedObject);
                            // 对象描述：Code:Name方式，表示Code显示为Name
                            if (ibas.strings.count(linked.property, ":") > 0) {
                                let boType: any = ibas.boFactory.classOf(linked.criteria.businessObject);
                                if (boType instanceof Function) {
                                    let dataInfo: any = {
                                        type: boType,
                                        key: linked.property.split(":")[0],
                                        text: linked.property.split(":")[1],
                                    };
                                    let boRepository: any;
                                    if (!BO_REPOSITORIES.has(dataInfo)) {
                                        boRepository = ibas.businessobjects.repositories.of(dataInfo.type);
                                        if (ibas.objects.isNull(boRepository)) {
                                            throw new Error(ibas.strings.format("not found {0}'s repository.", ibas.objects.nameOf(dataInfo.type)));
                                        }
                                        BO_REPOSITORIES.set(dataInfo.type, boRepository);
                                    }
                                    return new sap.extension.m.RepositoryObjectAttribute("", {
                                        repository: BO_REPOSITORIES.get(dataInfo.type),
                                        dataInfo: dataInfo,
                                        title: property.description,
                                        bindingValue: bindInfo,
                                    });
                                }
                            }
                        } catch (error) {
                            ibas.logger.log(error);
                        }
                    }
                    return new sap.extension.m.ObjectAttribute("", {
                        title: mode === "Object" ? property.description : undefined,
                        bindingValue: bindInfo,
                    });
                }
                return null;
            }
            /** 对象的业务仓库 */
            const BO_REPOSITORIES: Map<any, any> = new Map<any, any>();
            /**
             * 创建输入框
             * 1. #{CC_SYS_USER}.{Code} => Input
             * 2. {"type":"Criteria","BusinessObject":"CC_SYS_USER.Name", "Conditions":[]} => Input
             * 3. [1,2,3] => Input
             * 4. [{"key1","value1"},{"key2","value2"}] => Input
             * 5. yyyy-MM-dd => DatePicker
             * 6. hh:mm or hh:mm:ss => TimePicker
             * @param value 值模板
             */
            export function newInput(value: string, onChanged?: (event: sap.ui.base.Event) => void, chooseType?: ibas.emChooseType): sap.m.InputBase {
                let property: string;
                let input: sap.m.InputBase;
                let criteria: ibas.ICriteria;
                let boRepository: any;
                let dataInfo: { type: any, key: string, text: string };

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
                } else if (
                    // 对象选择：#{CC_SYS_USER}.{Code}
                    ibas.strings.isWith(value, "#{", "}")
                    // 对象选择：Criteria对象{"businessObject":"CC_SYS_USER", "conditions":[]}
                    || ibas.strings.isWith(value, "{", "}")
                ) {
                    try {
                        let linked: {
                            property: string;
                            criteria: ibas.ICriteria;
                        } = properties.linkedObject(value);
                        criteria = linked.criteria;
                        property = linked.property;
                        // 对象描述：Code:Name方式，表示Code显示为Name
                        if (ibas.strings.count(property, ":") > 0) {
                            try {
                                let boType: any = ibas.boFactory.classOf(criteria.businessObject);
                                if (boType instanceof Function) {
                                    dataInfo = {
                                        type: boType,
                                        key: property.split(":")[0],
                                        text: property.split(":")[1],
                                    };
                                }
                                if (!ibas.objects.isNull(dataInfo)) {
                                    if (BO_REPOSITORIES.has(dataInfo)) {
                                        boRepository = BO_REPOSITORIES.get(dataInfo);
                                    } else {
                                        boRepository = ibas.businessobjects.repositories.of(dataInfo.type);
                                        if (ibas.objects.isNull(boRepository)) {
                                            throw new Error(ibas.strings.format("not found {0}'s repository.", ibas.objects.nameOf(dataInfo.type)));
                                        }
                                        BO_REPOSITORIES.set(dataInfo.type, boRepository);
                                    }
                                }
                            } catch (error) {
                                boRepository = null;
                                dataInfo = null;
                            }
                            property = property.split(":")[0];
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
                        input = new sap.extension.m.ComboBox("", {
                            showSecondaryValues: true,
                            items: items,
                            tooltip: value,
                        });
                    }
                }
                if (ibas.objects.isNull(input)) {
                    if (!ibas.objects.isNull(boRepository) && !ibas.objects.isNull(dataInfo)) {
                        input = new sap.extension.m.SelectionInput("", {
                            showValueHelp: true,
                            showValueLink: true,
                            valueLinkRequest: function (event: sap.ui.base.Event): void {
                                ibas.servicesManager.runLinkService({
                                    boCode: ibas.businessobjects.code(dataInfo.type),
                                    linkValue: event.getParameter("value")
                                });
                            },
                            repository: boRepository,
                            dataInfo: dataInfo,
                            criteria: criteria,
                        });
                        // 通过本身事件处理
                        criteria = null;
                    }
                    if (ibas.objects.isNull(input)) {
                        input = new sap.extension.m.Input("", {
                        });
                        input.setPlaceholder(ibas.config.applyVariables(value));
                    }
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
                        // 处理变量
                        for (let item of criteria.conditions) {
                            if (ibas.strings.isWith(item.value, "${", "}")) {
                                item.value = ibas.variablesManager.getValue(item.value);
                            }
                        }
                        let resultCount: number = event.getParameter("resultCount");
                        let triggerProperty: string = event.getParameter("triggerProperty");
                        let triggerValue: string = event.getParameter("triggerValue");
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        ibas.servicesManager.runChooseService<any>({
                            trigger: source.getBindingContext()?.getObject(),
                            boCode: criteria.businessObject,
                            criteria: resultCount > 0 && !ibas.strings.isEmpty(triggerProperty) && !ibas.strings.isEmpty(triggerValue)
                                ? function (): ibas.ICriteria {
                                    // 要求返回默认结果
                                    let nCriteria: ibas.ICriteria = criteria.clone();
                                    nCriteria.result = resultCount;
                                    return nCriteria;
                                }() : criteria,
                            chooseType: chooseType >= 0 ? chooseType : ibas.emChooseType.MULTIPLE,
                            onCompleted: (selecteds) => {
                                if (selecteds instanceof ibas.DataTable) {
                                    selecteds = <any>selecteds.convert({ format: true, nameAs: "index" });
                                    property = "0";
                                }
                                if (source instanceof sap.m.InputBase && selecteds instanceof Array) {
                                    if (selecteds.length === 1) {
                                        for (let item of selecteds) {
                                            if (ibas.strings.isEmpty(property)) {
                                                source.setValue(item);
                                            } else {
                                                source.setValue(item[property]);
                                            }
                                        }
                                    } else {
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
                                        source.setValue(builder.toString());
                                    }
                                    if (onChanged instanceof Function) {
                                        onChanged(new sap.ui.base.Event("changed", source, {
                                            id: source.getId(),
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
                    onChanged(new sap.ui.base.Event("init", input, {
                        id: input.getId(),
                    }));
                }
                return input;
            }
        }
    }
}
