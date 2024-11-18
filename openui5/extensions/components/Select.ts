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
             * 选择框：清除已选择内容
             * @param this 选择框
             * @param event 事件
             */
            function SelectClearSelection(this: Select, event: KeyboardEvent): void {
                if (event.keyCode === jQuery.sap.KeyCodes.BACKSPACE || event.keyCode === jQuery.sap.KeyCodes.DELETE) {
                    // backspace key
                    if (this instanceof Select && this.getEditable() === true) {
                        if (this.getForceSelection() === false) {
                            this.close();
                            this.setBindingValue(null);
                            this.fireChange({});
                        } else {
                            let item: any = this.getDefaultSelectedItem();
                            if (item instanceof ui.core.Item) {
                                this.close();
                                this.setBindingValue(item.getKey());
                                this.fireChange({});
                            }
                        }
                    }
                }
            }
            /**
             * 选择框：模型变化付默认值
             * @param event 事件
             */
            function DefaultValueModelContextChange(event: sap.ui.base.Event): void {
                let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                if (source instanceof Select) {
                    if (ibas.objects.isNull(source.getBindingValue())
                        || ibas.strings.isEmpty(source.getBindingValue())) {
                        if (source.getForceSelection() === true) {
                            let deItem: any = source.getFirstItem();
                            for (let item of source.getItems()) {
                                if (item instanceof SelectItem) {
                                    if (item.getDefault() === true) {
                                        deItem = item;
                                        break;
                                    }
                                }
                            }
                            if (!ibas.objects.isNull(deItem)) {
                                source.setSelectedItem(deItem);
                            }
                        }
                    }
                }
            }
            sap.ui.core.ListItem.extend("sap.extension.m.SelectItem", {
                metadata: {
                    properties: {
                        default: { type: "boolean" },
                    },
                    events: {}
                },
                /** 是否为默认值 */
                getDefault(): boolean {
                    return this.getProperty("default");
                },
                /** 设置为默认值 */
                setDefault(value: boolean): SelectItem {
                    return this.setProperty("default", value);
                },
            });
            /**
             * 选择框
             */
            sap.m.Select.extend("sap.extension.m.Select", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string", defaultValue: null },
                    },
                    events: {
                        "valuePaste": {
                            parameters: {
                                data: {
                                    type: "any",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: Select): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Select, value: string): Select {
                    sap.m.Select.prototype.setSelectedKey.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /** 重写此方法，设置选中值 */
                setSelection(this: Select, value: sap.ui.core.Item): Select {
                    (<any>sap.m.Select.prototype).setSelection.apply(this, arguments);
                    this.setProperty("bindingValue", this.getSelectedKey());
                    if (value instanceof sap.ui.core.Item) {
                        let tooltip: any = value?.getTooltip();
                        if (tooltip) {
                            this.setTooltip(tooltip);
                        }
                    }
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: Select, sName: string, oBindingInfo: any): Select {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.Select.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                isEmptyValue(value: any): boolean {
                    return ibas.strings.isEmpty(value);
                },
                _isKeyAvailable(this: Select, sKey: string): boolean {
                    let available: boolean = (<any>sap.m.Select.prototype)._isKeyAvailable.apply(this, arguments);
                    if (available === false && this.getForceSelection() === false) {
                        this.addItem(new SelectItem("", {
                            key: sKey,
                            text: sKey,
                            additionalText: sKey,
                        }));
                        return true;
                    }
                    return available;
                },
                getDefaultSelectedItem(): sap.ui.core.Item {
                    for (let item of this.getItems()) {
                        if (item instanceof SelectItem) {
                            if (item.getDefault() === true) {
                                return item;
                            }
                        }
                    }
                    return (<any>sap.m.Select.prototype).getDefaultSelectedItem.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: Select): Select {
                    sap.m.Select.prototype.applySettings.apply(this, arguments);
                    if (typeof this.loadItems === "function" && this.getItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                attachBrowserEvent(this: Select): Select {
                    // 重复注册则跳过
                    if (ibas.arrays.create((<any>this).aBindParameters).contain(c => c.fnHandler === arguments[1])) {
                        return this;
                    }
                    return sap.m.Select.prototype.attachBrowserEvent.apply(this, arguments);
                },
                init(this: Select): void {
                    this.attachBrowserEvent("keydown", SelectClearSelection);
                    (<any>sap.m.Select.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, DefaultValueModelContextChange);
                },
                exit(this: Select): void {
                    this.detachBrowserEvent("keydown", SelectClearSelection);
                    this.detachModelContextChange(DefaultValueModelContextChange);
                    (<any>sap.m.Select.prototype).exit.apply(this, arguments);
                },
                onpaste(this: Input, oEvent: any): void {
                    this.fireValuePaste({ data: (typeof oEvent.originalEvent === "string") ? oEvent.originalEvent : oEvent.originalEvent.clipboardData.getData("text") });
                },
            });
            /**
             * 枚举数据-选择框
             */
            Select.extend("sap.extension.m.EnumSelect", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取枚举类型
                 */
                getEnumType(this: EnumSelect): any {
                    return this.getProperty("enumType");
                },
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(this: EnumSelect, value: any): EnumSelect {
                    return this.setProperty("enumType", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: EnumSelect, value: string): EnumSelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: EnumSelect): EnumSelect {
                    this.destroyItems();
                    let enumType: any = this.getEnumType();
                    if (ibas.objects.isNull(enumType)) {
                        return this;
                    }
                    for (let item in enumType) {
                        if (ibas.objects.isNull(item)) {
                            continue;
                        }
                        let key: any = item;
                        let text: any = enumType[key];
                        if (typeof key !== "string" || typeof text !== "string") {
                            continue;
                        }
                        if (!isNaN(Number(key))) {
                            key = Number(key);
                        }
                        this.addItem(new SelectItem("", {
                            key: key,
                            text: ibas.enums.describe(enumType, key),
                            tooltip: ibas.strings.format("{0} - {1}", key, ibas.enums.describe(enumType, key))
                        }));
                    }
                    return this;
                },
                _isKeyAvailable(this: Select, sKey: string): boolean {
                    return (<any>sap.m.Select.prototype)._isKeyAvailable.apply(this, arguments);
                },
            });
            /**
             * 业务仓库数据-选择框
             */
            Select.extend("sap.extension.m.RepositorySelect", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 查询条件 */
                        criteria: { type: "any" },
                        /** 强制选择 */
                        forceSelection: {
                            type: "boolean",
                            group: "Behavior",
                            defaultValue: false
                        },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositorySelect): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositorySelect, value: ibas.BORepositoryApplication | string): RepositorySelect {
                    return this.setProperty("repository", repositories.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositorySelect): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositorySelect, value: repository.IDataInfo | any): RepositorySelect {
                    return this.setProperty("dataInfo", repositories.dataInfo(value));
                },
                /**
                 * 获取查询
                 */
                getCriteria(this: RepositorySelect): ibas.ICriteria {
                    return this.getProperty("criteria");
                },
                /**
                 * 设置查询
                 * @param value 查询
                 */
                setCriteria(this: RepositorySelect, value: ibas.ICriteria | ibas.ICondition[]): RepositorySelect {
                    return this.setProperty("criteria", repositories.criteria(value));
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: RepositorySelect, value: string): RepositorySelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: RepositorySelect): RepositorySelect {
                    this.destroyItems();
                    repository.fetch(this.getRepository(), this.getDataInfo(), this.getCriteria(),
                        (values) => {
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                for (let item of values) {
                                    let sItem: any = this.getItemByKey(item.key);
                                    if (sItem instanceof ui.core.Item) {
                                        sItem.setText(item.text);
                                        sItem.setTooltip(ibas.strings.format("{0} - {1}", item.key, item.text));
                                    } else {
                                        this.addItem(new SelectItem("", {
                                            key: item.key,
                                            text: item.text,
                                            tooltip: ibas.strings.format("{0} - {1}", item.key, item.text)
                                        }));
                                    }
                                }
                            }
                        }
                    );
                    return this;
                }
            });
            /**
             * 对象属性可选值-选择框
             */
            Select.extend("sap.extension.m.PropertySelect", {
                metadata: {
                    properties: {
                        /** 对象数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性名称 */
                        propertyName: { type: "string" },
                        /** 强制选择 */
                        forceSelection: {
                            type: "boolean",
                            group: "Behavior",
                            defaultValue: false
                        },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: PropertySelect): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertySelect, value: { code: string, name?: string } | string): PropertySelect {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertySelect): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertySelect, value: string): PropertySelect {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: PropertySelect, value: string): PropertySelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: PropertySelect): PropertySelect {
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
                    this.destroyItems();
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
                                                            sItem.setTooltip(ibas.strings.format("{0} - {1}", item.value, item.description));
                                                        }
                                                    } else {
                                                        this.addItem(new SelectItem("", {
                                                            key: item.value,
                                                            text: ibas.strings.isEmpty(item.description) ? item.value : item.description,
                                                            tooltip: ibas.strings.format("{0} - {1}", item.value, item.description),
                                                            default: item.default,
                                                        }));
                                                    }
                                                    if (item.default === true) {
                                                        // 有默认值设置，则强制选择
                                                        if (this.getForceSelection() === false) {
                                                            this.setForceSelection(true);
                                                        }
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
            });
            /**
             * 对象服务系列-选择框
             */
            Select.extend("sap.extension.m.SeriesSelect", {
                metadata: {
                    properties: {
                        /** 对象编码 */
                        objectCode: { type: "string" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取对象编码
                 */
                getObjectCode(this: SeriesSelect): string {
                    return this.getProperty("objectCode");
                },
                /**
                 * 设置对象编码
                 * @param value 对象编码
                 */
                setObjectCode(this: SeriesSelect, value: string): SeriesSelect {
                    return this.setProperty("objectCode", ibas.config.applyVariables(value));
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: SeriesSelect, value: string): SeriesSelect {
                    // 修正-1值
                    if (ibas.strings.equals(value, "-1")) {
                        value = "0";
                    }
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /** 重构设置 */
                applySettings(this: SeriesSelect, mSettings: any, oScope?: any): SeriesSelect {
                    if (mSettings && mSettings.objectCode) {
                        mSettings.objectCode = ibas.config.applyVariables(mSettings.objectCode);
                    }
                    Select.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: SeriesSelect): SeriesSelect {
                    this.destroyItems();
                    let objectCode: string = this.getObjectCode();
                    if (ibas.strings.isEmpty(objectCode)) {
                        return this;
                    }
                    let boRepository: ibas.BORepositoryApplication = ibas.boFactory.create("BORepositoryInitialFantasy");
                    let dataInfo: repository.IDataInfo = {
                        type: "BOSeriesNumbering",
                        key: "Series",
                        text: "SeriesName",
                    };
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "ObjectCode";
                    condition.value = objectCode;
                    condition = criteria.conditions.create();
                    condition.alias = "Locked";
                    condition.value = ibas.emYesNo.NO.toString();
                    let sort: ibas.ISort = criteria.sorts.create();
                    sort.alias = "Series";
                    sort.sortType = ibas.emSortType.DESCENDING;
                    repository.fetch(boRepository, dataInfo, criteria,
                        (values) => {
                            this.addItem(new SelectItem("", {
                                key: 0,
                                text: ibas.i18n.prop("openui5_manual_series")
                            }));
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                for (let item of values) {
                                    let sItem: any = this.getItemByKey(item.key);
                                    if (sItem instanceof ui.core.Item) {
                                        sItem.setText(item.text);
                                    } else {
                                        this.addItem(new SelectItem("", {
                                            key: item.key,
                                            text: item.text,
                                            default: values.lastOrDefault() === item ? true : undefined,
                                        }));
                                    }
                                }
                            }
                        }
                    );
                    return this;
                },
                isEmptyValue(value: any): boolean {
                    return !(value > 0);
                },
            });
            /**
             * 重复字符计数-选择框
             */
            Select.extend("sap.extension.m.RepeatCharSelect", {
                metadata: {
                    properties: {
                        /** 选择内容数量 */
                        maxCount: { type: "int", defaultValue: 0 },
                        /** 重复内容 */
                        repeatText: { type: "string" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 加载可选值
                 */
                loadItems(this: RepeatCharSelect): RepeatCharSelect {
                    let vChar: string = this.getRepeatText();
                    if (ibas.strings.isEmpty(vChar)) {
                        return;
                    }
                    this.destroyItems();
                    let count: number = this.getMaxCount();
                    this.addItem(new SelectItem("", {
                        key: 0,
                        text: "",
                    }));
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    for (let i: number = 1; i < count; i++) {
                        builder.append(vChar);
                        this.addItem(new SelectItem("", {
                            key: i,
                            text: builder.toString(),
                        }));
                    }
                    return this;
                }
            });
            /**
             * 业务对象属性-选择框
             */
            Select.extend("sap.extension.m.BusinessObjectPropertiesSelect", {
                metadata: {
                    properties: {
                        /** 对象数据信息 */
                        dataInfo: { type: "any" },
                        /** 强制选择 */
                        forceSelection: {
                            type: "boolean",
                            group: "Behavior",
                            defaultValue: false
                        },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: PropertySelect): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertySelect, value: { code: string, name?: string } | string): PropertySelect {
                    this.setProperty("dataInfo", value);
                    this.loadItems();
                    return this;
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: PropertySelect, value: string): PropertySelect {
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: PropertySelect): PropertySelect {
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
                    this.destroyItems();
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
                                for (let data of opRslt.resultObjects) {
                                    for (let property of data.properties) {
                                        let sItem: any = this.getItemByKey(property.name);
                                        if (sItem instanceof ui.core.Item) {
                                            sItem.setText(property.description);
                                            sItem.setTooltip(ibas.strings.format("{0} - {1}", property.name, property.description));
                                        } else {
                                            this.addItem(new SelectItem("", {
                                                key: property.name,
                                                text: property.description,
                                                tooltip: ibas.strings.format("{0} - {1}", property.name, property.description),
                                            }));
                                        }
                                    }
                                }
                            } catch (error) {
                                ibas.logger.log(error);
                            }
                        }
                    });
                    return this;
                },
                /** 重构设置 */
                applySettings(this: Select): Select {
                    sap.m.Select.prototype.applySettings.apply(this, arguments);
                    // 设置对象属性时，加载可选值
                    return this;
                },
            });
            /**
             * 货币-选择框
             */
            Select.extend("sap.extension.m.CurrencySelect", {
                metadata: {
                    properties: {
                        /** 比例 */
                        columnRatio: { type: "string", defaultValue: "1:2" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: CurrencySelect, value: string): CurrencySelect {
                    let item: ui.core.Item = this.getItemByKey("value");
                    if (ibas.objects.isNull(item)) {
                        for (let cItem of this.getItems()) {
                            if (cItem instanceof ui.core.ListItem) {
                                if (cItem.getAdditionalText() === value) {
                                    value = cItem.getKey();
                                    break;
                                }
                            }
                        }
                    }
                    return Select.prototype.setBindingValue.apply(this, arguments);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: CurrencySelect): CurrencySelect {
                    this.destroyItems();
                    let boRepository: ibas.BORepositoryApplication = ibas.boFactory.create("BORepositoryAccounting");
                    let dataInfo: repository.IDataInfo = {
                        type: "Currency",
                        key: "Code",
                        text: "Name",
                        note: "ISO"
                    };
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "Activated";
                    condition.value = "YES";
                    repository.fetch(boRepository, dataInfo, criteria,
                        (values) => {
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                let deCurrency: string = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY, "");
                                for (let item of values) {
                                    let sItem: any = this.getItemByKey(item.key);
                                    if (sItem instanceof ui.core.Item) {
                                        sItem.setText(item.text);
                                        if (sItem instanceof ui.core.ListItem) {
                                            sItem.setAdditionalText(item.note);
                                        }
                                    } else {
                                        this.addItem(new SelectItem("", {
                                            key: item.key,
                                            text: item.key,
                                            additionalText: item.text,
                                            tooltip: ibas.strings.format("{0} - {1}", item.key, item.text + (item.note && item.note !== item.key ? ibas.strings.format(" ({0})", item.note) : "")),
                                            default: (deCurrency === item.key || deCurrency === item.note) ? true : undefined,
                                        }));
                                    }
                                }
                            }
                        }
                    );
                    return this;
                },
                applySettings(this: Select, mSettings: any): CurrencySelect {
                    if (ibas.objects.isNull(mSettings?.showSecondaryValues)) {
                        if (!mSettings) {
                            mSettings = {};
                        }
                        mSettings.showSecondaryValues = true;
                    }
                    Select.prototype.applySettings.call(this, mSettings);
                    return this;
                },
            });
            /**
             * 货币和汇率-选择框
             */
            core.EditableControl.extend("sap.extension.m.CurrencyRateSelect", {
                metadata: {
                    properties: {
                        /** 日期 */
                        date: { type: "Date" },
                        /** 汇率 */
                        rate: { type: "float" },
                        /** 币种 */
                        currency: { type: "string" },
                        /** 本位币 */
                        baseCurrency: { type: "string" },
                    },
                    aggregations: {
                        "_currency": { type: "sap.extension.m.CurrencySelect", multiple: false },
                        "_rate": { type: "sap.m.Input", multiple: false },
                    },
                    events: {
                        "currencyChanged": {
                            parameters: {
                                baseCurrency: {
                                    type: "string"
                                },
                                date: {
                                    type: "Date"
                                },
                                currency: {
                                    type: "string"
                                },
                                rate: {
                                    type: "float"
                                },
                            }
                        },
                    }
                },
                renderer: function (this: CurrencyRateSelect, oRm: sap.ui.core.RenderManager, oControl: CurrencyRateSelect): void {
                    oRm.openStart("div", oControl);
                    oRm.style("display", "inline-flex");
                    oRm.style("vertical-align", "bottom");
                    oRm.openEnd();
                    oRm.openStart("div");
                    // oRm.style("width", "5px");
                    oRm.openEnd();
                    oRm.close("div");
                    oRm.openStart("div");
                    oRm.style("width", "50%");
                    oRm.openEnd();
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_rate", undefined));
                    oRm.close("div");
                    oRm.openStart("div");
                    oRm.style("width", "50%");
                    oRm.openEnd();
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_currency", undefined));
                    oRm.close("div");
                    oRm.openStart("div");
                    oRm.style("width", "10px");
                    oRm.openEnd();
                    oRm.close("div");
                    oRm.close("div");
                },
                applySettings(this: CurrencyRateSelect): void {
                    this.setAggregation("_rate", new sap.m.Input("", {
                        type: sap.m.InputType.Number,
                        textAlign: sap.ui.core.TextAlign.Right,
                        change(this: sap.m.Input, event: sap.ui.base.Event): void {
                            let source: any = (<any>event.getSource())?.getParent();
                            if (source instanceof CurrencyRateSelect) {
                                source.setRate(ibas.numbers.valueOf(this.getValue()));
                            }
                        }
                    }));
                    this.setAggregation("_currency", new CurrencySelect("", {
                        width: "100%",
                        change(this: CurrencySelect, event: sap.ui.base.Event): void {
                            let source: any = (<any>event.getSource())?.getParent();
                            if (source instanceof CurrencyRateSelect) {
                                if (!ibas.strings.equals(this.getBindingValue(), source.getCurrency())) {
                                    source.setCurrency(this.getBindingValue());
                                }
                            }
                        }
                    }).addStyleClass("sapUiTinyMarginBegin"));
                    (<any>sap.ui.core.Control.prototype).applySettings.apply(this, arguments);
                },
                getCurrencySelect(): CurrencySelect {
                    return (<CurrencySelect>this.getAggregation("_currency"));
                },
                getRateInput(): sap.m.Input {
                    return (<sap.m.Input>this.getAggregation("_rate"));
                },
                setEditable(this: CurrencyRateSelect, value: boolean): CurrencyRateSelect {
                    this.setProperty("editable", value);
                    this.getRateInput().setEditable(value);
                    this.getCurrencySelect().setEditable(value);
                    return this;
                },
                setRate(this: CurrencyRateSelect, value: any): CurrencyRateSelect {
                    this.setProperty("rate", value);
                    this.getRateInput().setValue(data.formatValue(data.Rate, value, "string"));
                    return this;
                },
                setDate(this: CurrencyRateSelect, value: any, onlyValue: boolean = false): CurrencyRateSelect {
                    this.setProperty("date", value);
                    if (onlyValue === false) {
                        this.fireCurrencyChanged({
                            date: value,
                        });
                    }
                    return this;
                },
                setCurrency(this: CurrencyRateSelect, value: any, onlyValue: boolean = false): CurrencyRateSelect {
                    let oldValue: any = this.getProperty("currency");
                    if (oldValue !== value) {
                        this.setProperty("rate", 0);
                        this.setProperty("currency", value, true);
                        this.getCurrencySelect().setSelectedKey(value);
                        if (onlyValue === false) {
                            this.fireCurrencyChanged({
                                currency: value,
                            });
                        }
                    }
                    return this;
                },
                setBaseCurrency(this: CurrencyRateSelect, value: any, onlyValue: boolean = false): CurrencyRateSelect {
                    this.setProperty("baseCurrency", value);
                    if (onlyValue === false) {
                        this.fireCurrencyChanged({
                            baseCurrency: value,
                        });
                    }
                    return this;
                },
                init(this: CurrencyRateSelect): void {
                    (<any>sap.ui.core.Control.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof CurrencyRateSelect) {
                            if (ibas.objects.isNull(source.getCurrency())) {
                                if (this.getCurrencySelect().getForceSelection() === true) {
                                    for (let item of this.getCurrencySelect().getItems()) {
                                        if (item instanceof SelectItem) {
                                            if (item.getDefault() === true) {
                                                this.getCurrencySelect().setSelectedItem(item);
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                    this.attachCurrencyChanged(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof CurrencyRateSelect) {
                            // 有汇率不触发
                            source.getRateInput().setValueState(undefined);
                            source.getRateInput().setValueStateText(undefined);
                            source.getRateInput().setTooltip(undefined);
                            if (source.getRate() > 0) {
                                return;
                            }
                            let baseCurrency: string = source.getBaseCurrency();
                            // 没有本币
                            if (ibas.strings.isEmpty(source.getBaseCurrency())) {
                                source.getRateInput().setValueState(sap.ui.core.ValueState.Error);
                                source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_no_base_currency"));
                                return;
                            }
                            let currency: string = source.getCurrency();
                            // 未选择货币
                            if (ibas.strings.isEmpty(currency)) {
                                source.getRateInput().setValueState(sap.ui.core.ValueState.Error);
                                source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_no_currency"));
                                return;
                            }
                            // 与本币相同
                            if (currency === baseCurrency) {
                                source.setRate(1);
                                source.getRateInput().setValueState(sap.ui.core.ValueState.Success);
                                source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_rate",
                                    source.getCurrency(), source.getBaseCurrency(), "1.0000"
                                ));
                                source.getRateInput().setTooltip(source.getRateInput().getValueStateText());
                                return;
                            }
                            // 没有日期
                            if (!(source.getDate() instanceof Date)) {
                                source.getRateInput().setValueState(sap.ui.core.ValueState.Error);
                                source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_no_date"));
                                return;
                            }
                            // 查汇率
                            if (source.loadCurrencyRate instanceof Function) {
                                source.setRate(0, true);
                                let done: (result: number | Error) => void = (result) => {
                                    if (result instanceof Error) {
                                        source.getRateInput().setValueState(sap.ui.core.ValueState.Error);
                                        source.getRateInput().setValueStateText(result.message);
                                    } else {
                                        source.setRate(result);
                                        source.getRateInput().setValueState(sap.ui.core.ValueState.Success);
                                        source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_rate",
                                            source.getCurrency(), source.getBaseCurrency(),
                                            data.formatValue(data.Rate, result, "string")
                                        ));
                                        source.getRateInput().setTooltip(source.getRateInput().getValueStateText());
                                    }
                                };
                                source.getRateInput().setValueState(sap.ui.core.ValueState.Warning);
                                source.getRateInput().setValueStateText(ibas.i18n.prop("openui5_currency_rate_settting"));
                                source.getRateInput().setTooltip(source.getRateInput().getValueStateText());
                                source.loadCurrencyRate(done);
                            }
                        }
                    });
                }
            });
        }
    }
}
