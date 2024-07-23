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
             * 输入框
             */
            sap.m.Input.extend("sap.extension.m.Input", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string", defaultValue: null },
                        /** 仅值选择，不可输入 */
                        valueHelpOnly: { type: "boolean", defaultValue: true },
                        /** 显示值链接钮 */
                        showValueLink: { type: "boolean", defaultValue: false },
                    },
                    events: {
                        "valueLinkRequest": {
                            parameters: {
                                value: {
                                    type: "string",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                onAfterRendering(this: Input): void {
                    (<any>sap.m.Input.prototype).onAfterRendering.apply(this, arguments);
                    if (this.getShowValueLink()) {
                        let icons: any = this.getAggregation("_beginIcon", null);
                        if (!ibas.objects.isNull(icons)) {
                            for (let item of ibas.arrays.create(icons)) {
                                let element: any = document.getElementById(item.getId());
                                if (!ibas.objects.isNull(element)) {
                                    element.removeAttribute("tabindex");
                                    element = element.parentElement;
                                    if (!ibas.objects.isNull(element)) {
                                        element.style.cssText = "height: auto;";
                                    }
                                }
                            }
                        }
                    }
                },
                /**
                 * 设置显示值链接钮
                 * @param value 数据信息
                 */
                setShowValueLink(this: Input, value: boolean): Input {
                    this.setProperty("showValueLink", value);
                    if (value === true) {
                        this.addBeginIcon({
                            src: "sap-icon://shortcut",
                            press(event: sap.ui.base.Event): void {
                                let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                                if (source instanceof sap.ui.core.Icon) {
                                    let parent: any = source.getParent();
                                    if (parent instanceof Input) {
                                        let value: any = parent.getBindingValue();
                                        if (!ibas.objects.isNull(value)) {
                                            (<any>parent).fireValueLinkRequest({ value: value });
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        this.removeAggregation("_beginIcon", undefined, false);
                    }
                    return this;
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: Input): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Input, value: string): Input {
                    sap.m.Input.prototype.setValue.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    if (this.getShowValueLink() === true) {
                        let icons: any = this.getAggregation("_beginIcon", null);
                        if (!ibas.objects.isNull(icons)) {
                            if (ibas.objects.isNull(value)) {
                                for (let item of ibas.arrays.create(icons)) {
                                    if (item instanceof sap.ui.core.Icon) {
                                        item.setVisible(false);
                                    }
                                }
                            } else {
                                for (let item of ibas.arrays.create(icons)) {
                                    if (item instanceof sap.ui.core.Icon) {
                                        item.setVisible(true);
                                    }
                                }
                            }
                        }
                    }
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: Input, value: string): Input {
                    this.setBindingValue(value);
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: Input, sName: string, oBindingInfo: any): Input {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.Input.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                /** 重新点击 */
                ontap(oEvent: any): void {
                    let control: any = oEvent ? oEvent.srcControl : null;
                    if (control instanceof sap.ui.core.Control && ibas.strings.isWith(control.getId(), undefined, "-vhi")) {
                        // 仅点击选择图标才调用，值选择
                        (<any>sap.m.Input.prototype).ontap.apply(this, arguments);
                    } else {
                        // 不调用选值窗体
                        (<any>sap.m.InputBase.prototype).ontap.apply(this, arguments);
                    }
                },
                attachBrowserEvent(this: Input): Input {
                    // 重复注册则跳过
                    if (ibas.arrays.create((<any>this).aBindParameters).contain(c => c.fnHandler === arguments[1])) {
                        return this;
                    }
                    return sap.m.Input.prototype.attachBrowserEvent.apply(this, arguments);
                },
                /** 初始化 */
                init(this: Input): void {
                    (<any>sap.m.Input.prototype).init.apply(this, arguments);
                    this.attachBrowserEvent("keydown", function (this: Input, event: KeyboardEvent): void {
                        // 但仅选择数据时，清除已选择值
                        if (event.keyCode === 8 || event.keyCode === 46) {
                            // backspace key
                            if (this instanceof Input && this.getEditable() === true) {
                                if (this.getShowValueHelp() && this.getValueHelpOnly()) {
                                    this.setBindingValue(null);
                                    this.fireChange({});
                                }
                            }
                        }
                    });
                    this.attachBrowserEvent("paste", function (this: Input, event: ClipboardEvent): void {
                        // 粘贴事件，激活sugest事件
                        setTimeout(() => {
                            (<any>this)._triggerSuggest(this.getValue());
                        }, 0);
                    });

                },
            });
            /**
             * 业务仓库数据-输入框
             */
            Input.extend("sap.extension.m.RepositoryInput", {
                metadata: {
                    properties: {
                        /** 业务仓库 */
                        repository: { type: "any" },
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 查询条件 */
                        criteria: { type: "any" },
                        /** 描述值 */
                        describeValue: { type: "boolean", defaultValue: true },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取业务仓库实例
                 */
                getRepository(this: RepositoryInput): ibas.BORepositoryApplication {
                    return this.getProperty("repository");
                },
                /**
                 * 设置业务仓库
                 * @param value 业务仓库实例；业务仓库名称
                 */
                setRepository(this: RepositoryInput, value: ibas.BORepositoryApplication | string): RepositoryInput {
                    return this.setProperty("repository", repositories.repository(value));
                },
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: RepositoryInput): repository.IDataInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: RepositoryInput, value: repository.IDataInfo | any): RepositoryInput {
                    return this.setProperty("dataInfo", repositories.dataInfo(value));
                },
                /**
                 * 获取查询
                 */
                getCriteria(this: RepositoryInput): ibas.ICriteria {
                    return this.getProperty("criteria");
                },
                /**
                 * 设置查询
                 * @param value 查询
                 */
                setCriteria(this: RepositoryInput, value: ibas.ICriteria | ibas.ICondition[]): RepositoryInput {
                    return this.setProperty("criteria", repositories.criteria(value));
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setSelectedKey(this: RepositoryInput, value: string): RepositoryInput {
                    return this.setBindingValue(value);
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setSelectedItem(this: RepositoryInput, value: sap.ui.core.Item): RepositoryInput {
                    sap.m.Input.prototype.setSelectedItem.apply(this, arguments);
                    if (value instanceof sap.ui.core.Item) {
                        this.setProperty("bindingValue", value.getKey());
                        this.setTooltip(ibas.strings.format("{0} - {1}", value.getKey(), value.getText()));
                    } else {
                        this.destroyTooltip();
                    }
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: RepositoryInput, value: string): RepositoryInput {
                    sap.m.Input.prototype.setValue.apply(this, arguments);
                    if (this.getValueHelpOnly() === false && this.getSelectedItem() === null) {
                        this.setProperty("bindingValue", value);
                    }
                    return this;
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setBindingValue(this: RepositoryInput, value: string): RepositoryInput {
                    if (this.getDescribeValue() === true) {
                        if (this.getSelectedKey() !== value) {
                            this.setProperty("selectedKey", value);
                            this.setProperty("bindingValue", value);
                            if (ibas.strings.isEmpty(value)) {
                                this.updateDomValue("");
                            } else {
                                let item: sap.ui.core.Item = this.getSuggestionItemByKey(String(value));
                                if (!ibas.objects.isNull(item)) {
                                    this.setSelectedItem(item);
                                    this.updateDomValue(item.getText());
                                } else if (!ibas.strings.isEmpty(value)) {
                                    // 没有此建议值
                                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                                    if (ibas.objects.isNull(dataInfo) || dataInfo.key === dataInfo.text) {
                                        // 值与描述一样，不再查询
                                        this.setSelectedItem(new sap.ui.core.Item("", {
                                            key: value,
                                            text: value,
                                        }));
                                    } else {
                                        this.describeValue(value);
                                    }
                                }
                            }
                        }
                        if (this.getShowValueLink() === true) {
                            let icons: any = this.getAggregation("_beginIcon", null);
                            if (!ibas.objects.isNull(icons)) {
                                if (ibas.objects.isNull(value)) {
                                    for (let item of ibas.arrays.create(icons)) {
                                        if (item instanceof sap.ui.core.Icon) {
                                            item.setVisible(false);
                                        }
                                    }
                                } else {
                                    for (let item of ibas.arrays.create(icons)) {
                                        if (item instanceof sap.ui.core.Icon) {
                                            item.setVisible(true);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        Input.prototype.setBindingValue.apply(this, arguments);
                    }
                    return this;
                },
                describeValue(this: RepositoryInput, value: string): void {
                    let condition: ibas.ICondition;
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    criteria.noChilds = true;
                    for (let item of String(value).split(ibas.DATA_SEPARATOR)) {
                        if (ibas.strings.isEmpty(item)) {
                            continue;
                        }
                        condition = criteria.conditions.create();
                        condition.alias = dataInfo.key;
                        condition.value = item;
                        if (criteria.conditions.length > 0) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                    }
                    repository.batchFetch(this.getRepository(), this.getDataInfo(), criteria,
                        (values) => {
                            let item: sap.ui.core.ListItem = null;
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                                item = new sap.ui.core.ListItem("", {
                                    key: value,
                                    text: value,
                                });
                            } else {
                                let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                keyBudilder.map(null, "");
                                keyBudilder.map(undefined, "");
                                let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                textBudilder.map(null, "");
                                textBudilder.map(undefined, "");
                                for (let value of values) {
                                    if (keyBudilder.length > 0) {
                                        keyBudilder.append(ibas.DATA_SEPARATOR);
                                    }
                                    if (textBudilder.length > 0) {
                                        textBudilder.append(ibas.DATA_SEPARATOR);
                                        textBudilder.append(" ");
                                    }
                                    keyBudilder.append(value.key);
                                    textBudilder.append(value.text);
                                }
                                item = new sap.ui.core.ListItem("", {
                                    key: keyBudilder.toString(),
                                    text: textBudilder.toString(),
                                });
                            }
                            this.setSelectedItem(item);
                            this.updateDomValue(item.getText());
                        }
                    );
                },
                applySettings(this: RepositoryInput, mSettings: any, oScope?: any): RepositoryInput {
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (mSettings?.dataInfo?.type) {
                        if (ibas.objects.isNull(mSettings?.showValueLink)) {
                            mSettings.showValueLink = repositories.hasViewService(mSettings.dataInfo.type);
                        }
                    }
                    if (mSettings?.showSuggestion === undefined) {
                        if (mSettings?.suggestionItems?.length > 0) {
                            mSettings.showSuggestion = true;
                        }
                    }
                    (<any>Input.prototype).applySettings.apply(this, arguments);
                    // 对象仓库建议
                    if (this.getShowSuggestion() === true && this.getRepository() && this.getDataInfo()) {
                        this.setValueHelpOnly(false);
                        this.setFilterSuggests(false);
                        this.setAutocomplete(false);
                        // 建议框大小
                        this.setMaxSuggestionWidth("auto");
                        /*
                        this.setFilterFunction(function (sTerm: any, oItem: any): void {
                            return oItem.getText().match(new RegExp(sTerm, "i")) || oItem.getKey().match(new RegExp(sTerm, "i"));
                        });
                        */
                    }
                    return this;
                },
                itemConditions(this: RepositoryInput, item: sap.ui.core.Item | sap.ui.core.ListItem): ibas.ICondition[] {
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", "dataInfo"));
                    }
                    if (this.indexOfSuggestionItem(item) < 0) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", "item"));
                    }
                    let condition: ibas.ICondition = new ibas.Condition();
                    condition.alias = dataInfo.key;
                    condition.value = item.getKey();
                    conditions.add(condition);
                    if (dataInfo.key !== dataInfo.text && item instanceof sap.ui.core.ListItem) {
                        condition = new ibas.Condition();
                        condition.alias = dataInfo.text;
                        condition.value = item.getAdditionalText();
                        conditions.add(condition);
                    }
                    if (conditions.length > 1) {
                        conditions.firstOrDefault().bracketOpen++;
                        conditions.lastOrDefault().bracketClose++;
                    }
                    return conditions;
                },
                /** 初始化 */
                init(this: RepositoryInput): void {
                    (<any>Input.prototype).init.apply(this, arguments);
                    // 对象链接
                    this.attachValueLinkRequest(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof RepositoryInput) {
                            let boCode: string = ibas.businessobjects.code(<any>source.getDataInfo()?.type);
                            if (!ibas.strings.isEmpty(boCode)) {
                                ibas.servicesManager.runLinkService({
                                    boCode: boCode,
                                    linkValue: event.getParameter("value")
                                });
                            }
                        }
                    });
                    // 对象建议
                    this.attachSuggest(undefined, (event: sap.ui.base.Event) => {
                        let source: RepositoryInput = <any>sap.ui.getCore().byId(event.getParameter("id"));
                        let value: string = event.getParameter("suggestValue");
                        let dataInfo: repository.IDataInfo = source.getDataInfo();
                        if (source instanceof RepositoryInput && source.getShowSuggestion() === true && dataInfo) {
                            value = ibas.strings.replace(value, " ", "%");
                            let criteria: ibas.ICriteria = source.getCriteria();
                            if (ibas.objects.isNull(criteria)) {
                                criteria = new ibas.Criteria();
                            } else {
                                criteria = criteria.clone();
                            }
                            if (ibas.objects.isNull(criteria.noChilds)) {
                                criteria.noChilds = true;
                            }
                            if (!(criteria.result > 0)) {
                                criteria.result = Math.round(ibas.config.get(ibas.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30) / 3);
                                if (!(criteria.result > 0)) {
                                    criteria.result = 10;
                                }
                            }
                            if (criteria.conditions.length > 1) {
                                criteria.conditions.firstOrDefault().bracketOpen++;
                                criteria.conditions.lastOrDefault().bracketClose++;
                            }
                            let condition: ibas.ICondition = criteria.conditions.create();
                            condition.alias = dataInfo.key;
                            condition.value = value;
                            condition.operation = ibas.emConditionOperation.CONTAIN;
                            if (dataInfo.key !== dataInfo.text) {
                                condition.bracketOpen++;
                                condition = criteria.conditions.create();
                                condition.alias = dataInfo.text;
                                condition.value = value;
                                condition.operation = ibas.emConditionOperation.CONTAIN;
                                condition.relationship = ibas.emConditionRelationship.OR;
                                condition.bracketClose++;
                            }

                            repository.fetch(source.getRepository(), dataInfo, criteria,
                                (items) => {
                                    if (!(items instanceof Error)) {
                                        let sugItems: sap.ui.core.Item[] = source.getSuggestionItems();
                                        if (sugItems.length > items.length) {
                                            for (let i: number = sugItems.length - 1; i >= items.length; i--) {
                                                source.removeSuggestionItem(sugItems[i]);
                                            }
                                        }
                                        for (let i: number = 0; i < items.length; i++) {
                                            if (i >= sugItems.length) {
                                                source.addSuggestionItem(new sap.ui.core.ListItem("", {
                                                    key: items[i].key,
                                                    text: items[i].key,
                                                    // 键值名字相同，则不显示，否则值
                                                    additionalText: dataInfo.key === dataInfo.text ? undefined : items[i].text,
                                                }));
                                            } else {
                                                let sugItem: sap.ui.core.Item = sugItems[i];
                                                if (sugItem.getKey() !== items[i].key) {
                                                    sugItem.setKey(items[i].key);
                                                    sugItem.setText(items[i].key);
                                                    if (dataInfo.key !== dataInfo.text && sugItem instanceof sap.ui.core.ListItem) {
                                                        sugItem.setAdditionalText(items[i].text);
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        source.removeAllSuggestionItems();
                                    }
                                }
                            );
                        }
                    });
                },
            });
            /**
             * 业务仓库数据-选择输入框
             */
            RepositoryInput.extend("sap.extension.m.SelectionInput", {
                metadata: {
                    properties: {
                        /** 选择方式 */
                        chooseType: { type: "int", defaultValue: ibas.emChooseType.SINGLE },
                    },
                    events: {
                        "afterSelection": {
                            parameters: {
                                selecteds: {
                                    type: "array",
                                },
                            }
                        },
                    },
                },
                renderer: {},
                /**
                 * 获取选择类型
                 */
                getChooseType(this: SelectionInput): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: SelectionInput, value: ibas.emChooseType): SelectionInput {
                    return this.setProperty("chooseType", value);
                },
                applySettings(this: SelectionInput, mSettings: any, oScope?: any): SelectionInput {
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (mSettings?.chooseType === ibas.emChooseType.MULTIPLE) {
                        mSettings.showValueLink = false;
                    }
                    return (<any>RepositoryInput.prototype).applySettings.apply(this, arguments);
                },
                /** 初始化 */
                init(this: SelectionInput): void {
                    // 调用基类构造
                    (<any>RepositoryInput.prototype).init.apply(this, arguments);
                    // 自身事件监听
                    this.attachValueHelpRequest(null, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof SelectionInput) {
                            let boCode: string, dataInfo: any = source.getDataInfo();
                            if (typeof dataInfo.type === "function") {
                                boCode = dataInfo.type.BUSINESS_OBJECT_CODE;
                            } else if (typeof dataInfo.type === "object") {
                                boCode = ibas.objects.typeOf(dataInfo.type).BUSINESS_OBJECT_CODE;
                            } else if (typeof dataInfo.type === "string") {
                                boCode = ibas.config.applyVariables(dataInfo.type);
                            }
                            if (ibas.strings.isEmpty(boCode)) {
                                throw new Error(ibas.i18n.prop("sys_invalid_parameter", "boCode"));
                            }
                            ibas.servicesManager.runChooseService<any>({
                                boCode: boCode,
                                chooseType: source.getChooseType(),
                                criteria: source.getCriteria(),
                                onCompleted: (selecteds: ibas.IList<any>) => {
                                    let keyProperty: string = source.getDataInfo().key;
                                    let textProperty: string = source.getDataInfo().text;
                                    let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                    keyBudilder.map(null, "");
                                    keyBudilder.map(undefined, "");
                                    let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                    textBudilder.map(null, "");
                                    textBudilder.map(undefined, "");
                                    for (let item of selecteds) {
                                        if (keyBudilder.length > 0) {
                                            keyBudilder.append(ibas.DATA_SEPARATOR);
                                        }
                                        if (textBudilder.length > 0) {
                                            textBudilder.append(ibas.DATA_SEPARATOR);
                                            textBudilder.append(" ");
                                        }
                                        keyBudilder.append(item[keyProperty]);
                                        textBudilder.append(item[textProperty]);
                                    }
                                    let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                                        key: keyBudilder.toString(),
                                        text: textBudilder.toString(),
                                    });
                                    source.setSelectedItem(item);
                                    source.updateDomValue(item.getText());
                                    source.fireAfterSelection({ selecteds: selecteds, });
                                }
                            });
                        }
                    });
                }
            });
            /**
             * 超级文本框
             */
            sap.m.TextArea.extend("sap.extension.m.TextArea", {
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
                getBindingValue(this: TextArea): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: TextArea, value: string): TextArea {
                    sap.m.TextArea.prototype.setValue.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: TextArea, value: string): TextArea {
                    return this.setBindingValue(value);
                },
                /** 重写绑定 */
                bindProperty(this: TextArea, sName: string, oBindingInfo: any): TextArea {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.TextArea.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 用户数据-输入框
             */
            SelectionInput.extend("sap.extension.m.UserInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: UserInput, mSettings: any, oScope?: any): UserInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(UserInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, UserInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = variables.get(UserInput, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = [
                                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                            ];
                            variables.set(criteria, UserInput, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    if (ibas.objects.isNull(mSettings?.showValueLink)) {
                        this.setShowValueLink(true);
                    }
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: UserInput, sName: string, oBindingInfo: any): UserInput {
                    if (ibas.strings.equals(sName, "bindingValue") && !ibas.objects.isNull(oBindingInfo)) {
                        // 构建数据信息，根据绑定的数据类型
                        let dataInfo: repository.IDataInfo = this.getDataInfo();
                        if (ibas.objects.isNull(dataInfo)) {
                            let infoName: string = "dataInfoCode", infoKey: string = "Code";
                            // 允许多选或绑定类型为数值型时，使用DocEntry
                            if (this.getChooseType() === ibas.emChooseType.MULTIPLE
                                || oBindingInfo.type instanceof data.Numeric) {
                                infoName = "dataInfo_DocEntry";
                                infoKey = "DocEntry";
                            }
                            dataInfo = variables.get(UserInput, infoName);
                            if (ibas.objects.isNull(dataInfo)) {
                                dataInfo = {
                                    type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER")),
                                    key: infoKey,
                                    text: "Name",
                                };
                                variables.set(dataInfo, UserInput, infoName);
                            }
                            this.setDataInfo(dataInfo);
                        } else {
                            if (!dataInfo.type) {
                                dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_USER"));
                            } else if (!dataInfo.key) {
                                dataInfo.key = oBindingInfo.type instanceof data.Numeric ? "DocEntry" : "Code";
                            } else if (!dataInfo.text) {
                                dataInfo.text = "Name";
                            }
                        }
                    }
                    SelectionInput.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 组织数据-输入框
             */
            SelectionInput.extend("sap.extension.m.OrganizationInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: OrganizationInput, mSettings: any, oScope?: any): OrganizationInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(OrganizationInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, OrganizationInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(OrganizationInput, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_ORGANIZATION")),
                                key: "Code",
                                text: "Name",
                            };
                            variables.set(dataInfo, OrganizationInput, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_ORGANIZATION"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Name";
                        }
                    }
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = variables.get(OrganizationInput, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = [
                                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                            ];
                            variables.set(criteria, OrganizationInput, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    if (ibas.objects.isNull(mSettings?.showValueLink)) {
                        this.setShowValueLink(true);
                    }
                    return this;
                }
            });
            /**
             * 角色数据-输入框
             */
            OrganizationInput.extend("sap.extension.m.RoleInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: RoleInput): RoleInput {
                    // todo:角色非组织实现时
                    (<any>OrganizationInput.prototype).applySettings.apply(this, arguments);
                    return this;
                }
            });
            /**
             * 业务对象数据-输入框
             */
            SelectionInput.extend("sap.extension.m.BusinessObjectInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: BusinessObjectInput): BusinessObjectInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(BusinessObjectInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryInitialFantasy");
                            variables.set(boRepository, BusinessObjectInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(BusinessObjectInput, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_BOINFO")),
                                key: "Code",
                                text: "Description"
                            };
                            variables.set(dataInfo, BusinessObjectInput, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_SYS_BOINFO"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Description";
                        }
                    }
                    return this;
                }
            });
            /**
             * 图标-输入框
             */
            Input.extend("sap.extension.m.IconInput", {
                metadata: {
                    properties: {
                        /** 显示选择钮 */
                        showValueHelp: { type: "boolean", defaultValue: true },
                    },
                    aggregations: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 初始化 */
                init(this: IconInput): void {
                    // 调用基类构造
                    (<any>Input.prototype).init.apply(this, arguments);
                    // 自身事件监听
                    this.attachValueHelpRequest(null, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof IconInput) {
                            let selectDialog: sap.m.SelectDialog = new sap.m.SelectDialog("", {
                                title: ibas.i18n.prop("openui5_please_select_icon"),
                                items: {
                                    path: "/",
                                    template: new sap.m.StandardListItem("", {
                                        title: {
                                            path: "name",
                                        },
                                        icon: {
                                            path: "name",
                                        }
                                    })
                                },
                                search: function (event: sap.ui.base.Event): void {
                                    let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                                    if (source instanceof sap.m.SelectDialog) {
                                        let oBinding: any = source.getBinding("items");
                                        if (oBinding instanceof sap.ui.model.json.JSONListBinding) {
                                            let value: string = event.getParameter("value");
                                            oBinding.filter([
                                                new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, value)
                                            ]);
                                        }
                                    }
                                },
                                confirm(event: sap.ui.base.Event): void {
                                    let value: string = event.getParameter("selectedItem").getTitle();
                                    source.setBindingValue(value);
                                    setTimeout(() => {
                                        selectDialog.destroy();
                                        selectDialog = undefined;
                                    }, 5);
                                },
                                cancel(): void {
                                    setTimeout(() => {
                                        selectDialog.destroy();
                                        selectDialog = undefined;
                                    }, 5);
                                }
                            });
                            let icons: ibas.ArrayList<{ name: string }> = new ibas.ArrayList<{ name: string }>();
                            for (let item of sap.ui.core.IconPool.getIconNames(undefined)) {
                                icons.add({
                                    name: ibas.strings.format("sap-icon://{0}", item)
                                });
                            }
                            selectDialog.setModel(new sap.ui.model.json.JSONModel(icons));
                            selectDialog.open(undefined);
                        }
                    });
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Input, value: string): IconInput {
                    Input.prototype.setBindingValue.apply(this, arguments);
                    if (ibas.strings.isWith(value, "sap-icon://", undefined)) {
                        let icon: any = this.getAggregation("_beginIcon", undefined);
                        if (icon instanceof Array && icon.length > 0) {
                            icon = icon[0];
                            if (icon instanceof sap.ui.core.Icon) {
                                icon.setSrc(value);
                            }
                        } else {
                            icon = this.addBeginIcon(value);
                        }
                    }
                    return this;
                },
            });
            /**
             * 图标-输入框
             */
            Input.extend("sap.extension.m.ColorInput", {
                metadata: {
                    properties: {
                        /** 显示选择钮 */
                        showValueHelp: { type: "boolean", defaultValue: true },
                        /** 可输入 */
                        valueHelpOnly: { type: "boolean", defaultValue: true },
                    },
                    aggregations: {
                    },
                    events: {}
                },
                renderer: {
                },
                /** 初始化 */
                init(this: ColorInput): void {
                    // 调用基类构造
                    (<any>Input.prototype).init.apply(this, arguments);
                    // 自身事件监听
                    this.attachValueHelpRequest(null, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof ColorInput) {
                            let dialog: sap.m.ColorPalettePopover = new sap.m.ColorPalettePopover("", {
                                displayMode: sap.ui.unified.ColorPickerDisplayMode.Simplified,
                                defaultColor: source.getBindingValue(),
                                colorSelect(this: sap.m.ColorPalettePopover, event: sap.ui.base.Event): void {
                                    let value: string = event.getParameter("value");
                                    let palette: any = sap.ui.getCore().byId(this.getId() + "-palette");
                                    if (palette instanceof sap.m.ColorPalette) {
                                        if (ibas.strings.isWith(value, "#", undefined)) {
                                            value = value;
                                        } else if (ibas.strings.isWith(value, "rgb(", ")")) {
                                            value = (<any>palette)?._oMoreColorsDialog?._oColorPicker?.Color?.hex;
                                        } else {
                                            value = (<any>palette)._ColorsHelper.NAME_COLORS_TO_RGB_MAP[value]?.toLocaleLowerCase();
                                        }
                                    }
                                    source.setBindingValue(value);
                                }
                            });
                            dialog.openBy(source);
                        }
                    });
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Input, value: string): ColorInput {
                    Input.prototype.setBindingValue.apply(this, arguments);
                    let icon: any = this.getAggregation("_beginIcon", undefined);
                    if (icon instanceof Array && icon.length > 0) {
                        icon = icon[0];
                        if (icon instanceof sap.ui.core.Icon) {
                            icon.setBackgroundColor(value);
                        }
                    } else {
                        icon = this.addBeginIcon("sap-icon://marquee");
                        icon.setBackgroundColor(value);
                    }
                    return this;
                },
            });
            /**
             * 数据所有者-输入框
             */
            UserInput.extend("sap.extension.m.DataOwnerInput", {
                metadata: {
                    properties: {
                        /** 用户组织 */
                        organization: { type: "string" },
                    },
                    events: {}
                },
                renderer: {},
                init(this: DataOwnerInput): void {
                    (<any>UserInput.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof UserInput) {
                            let content: any = source.getBindingContext();
                            if (content instanceof sap.ui.model.Context) {
                                let data: any = content.getObject();
                                if (data instanceof ibas.BusinessObject) {
                                    if (data.isNew === true) {
                                        let binding: any = source.getBinding("bindingValue");
                                        if (binding instanceof sap.ui.model.PropertyBinding) {
                                            let value: any = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_ID);
                                            if (!ibas.objects.isNull(value)) {
                                                binding.setValue(value);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                    this.attachAfterSelection(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof DataOwnerInput) {
                            let selecteds: any = event.getParameter("selecteds");
                            if (selecteds instanceof Array) {
                                for (let selected of selecteds) {
                                    source.setOrganization(ibas.objects.propertyValue(selected, "Organization"));
                                }
                            }
                        }
                    });
                }
            });
            /**
             * 数据所属组织-输入框
             */
            OrganizationInput.extend("sap.extension.m.DataOrganizationInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                init(this: DataOrganizationInput): void {
                    (<any>OrganizationInput.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof OrganizationInput) {
                            let content: any = source.getBindingContext();
                            if (content instanceof sap.ui.model.Context) {
                                let data: any = content.getObject();
                                if (data instanceof ibas.BusinessObject) {
                                    if (data.isNew === true) {
                                        let binding: any = source.getBinding("bindingValue");
                                        if (binding instanceof sap.ui.model.PropertyBinding) {
                                            let value: any = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_BELONG);
                                            if (!ibas.objects.isNull(value)) {
                                                binding.setValue(value);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            });

            /**
             * 对象属性可选值-输入框
             */
            Input.extend("sap.extension.m.PropertyInput", {
                metadata: {
                    properties: {
                        /** 对象数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性名称 */
                        propertyName: { type: "string" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: PropertyInput): { code: string, name?: string } | string {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: PropertyInput, value: { code: string, name?: string } | string): PropertyInput {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性名称
                 */
                getPropertyName(this: PropertyInput): string {
                    return this.getProperty("propertyName");
                },
                /**
                 * 设置属性名称
                 * @param value 属性名称
                 */
                setPropertyName(this: PropertyInput, value: string): PropertyInput {
                    return this.setProperty("propertyName", value);
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Input, value: string): Input {
                    if (this.getSuggestionItems().length > 0) {
                        sap.m.Input.prototype.setSelectedKey.apply(this, arguments);
                    } else {
                        sap.m.Input.prototype.setValue.apply(this, arguments);
                    }
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /** 重写此方法，设置选中值 */
                setSelectionItem(this: Input, value: sap.ui.core.Item): Input {
                    (<any>sap.m.Input.prototype).setSelectionItem.apply(this, arguments);
                    this.setProperty("bindingValue", this.getSelectedKey());
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setValue(this: Input, value: string): Input {
                    if (this.getSuggestionItems().length > 0) {
                        sap.m.Input.prototype.setValue.apply(this, arguments);
                    } else {
                        return this.setBindingValue(value);
                    }
                    return this;
                },
                /** 重构设置 */
                applySettings(this: PropertyInput, mSettings: any, oScope?: any): PropertyInput {
                    if (mSettings) {
                        if (!mSettings.valueHelpIconSrc) {
                            mSettings.valueHelpIconSrc = "sap-icon://slim-arrow-down";
                        }
                        if (!mSettings.valueHelpRequest) {
                            mSettings.valueHelpRequest = (event: sap.ui.base.Event) => {
                                let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                                if (source instanceof Input) {
                                    source.showItems(null);
                                }
                            };
                        }
                    }
                    Input.prototype.applySettings.apply(this, arguments);
                    if (this.getSuggestionItems().length === 0) {
                        this.loadItems();
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: PropertyInput): PropertyInput {
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
                    this.destroySuggestionItems();
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
                                                    this.addSuggestionItem(new SelectItem("", {
                                                        key: item.value,
                                                        text: ibas.strings.isEmpty(item.description) ? item.value : item.description,
                                                        default: item.default,
                                                    }));
                                                }
                                            }
                                        }
                                    }
                                    if (this.getSuggestionItems().length > 0) {
                                        this.setShowValueHelp(true);
                                    } else {
                                        this.setShowValueHelp(false);
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
                init(this: Input): void {
                    (<any>Input.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, (event: sap.ui.base.Event) => {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof Input) {
                            if (ibas.objects.isNull(source.getBindingValue())) {
                                for (let item of source.getSuggestionItems()) {
                                    if (item instanceof SelectItem) {
                                        if (item.getDefault() === true) {
                                            source.setSelectedItem(item); return;
                                        }
                                    }
                                }
                            }
                        }
                    });
                },
            });
            /**
             * 分支-输入框
             */
            SelectionInput.extend("sap.extension.m.BranchInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /** 重构设置 */
                applySettings(this: BranchInput, mSettings: any, oScope?: any): BranchInput {
                    SelectionInput.prototype.applySettings.apply(this, arguments);
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = variables.get(BranchInput, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = ibas.boFactory.create("BORepositoryAccounting");
                            variables.set(boRepository, BranchInput, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = variables.get(BranchInput, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_AC_BRANCH")),
                                key: "Code",
                                text: "Name",
                            };
                            variables.set(dataInfo, BranchInput, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables("${Company}_AC_BRANCH"));
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Name";
                        }
                    }
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = variables.get(BranchInput, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = [
                                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                            ];
                            variables.set(criteria, BranchInput, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    if (ibas.objects.isNull(mSettings?.showValueLink)) {
                        this.setShowValueLink(true);
                    }
                    return this;
                }
            });
            /**
             * 数据分支-输入框
             */
            BranchInput.extend("sap.extension.m.DataBranchInput", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                init(this: DataBranchInput): void {
                    (<any>BranchInput.prototype).init.apply(this, arguments);
                    this.attachModelContextChange(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                        if (source instanceof BranchInput) {
                            let content: any = source.getBindingContext();
                            if (content instanceof sap.ui.model.Context) {
                                let data: any = content.getObject();
                                if (data instanceof ibas.BusinessObject) {
                                    if (data.isNew === true) {
                                        let binding: any = source.getBinding("bindingValue");
                                        if (binding instanceof sap.ui.model.PropertyBinding) {
                                            let value: any = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_BRANCH);
                                            if (!ibas.objects.isNull(value)) {
                                                binding.setValue(value);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            });
        }
    }
}
