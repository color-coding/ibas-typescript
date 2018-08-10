/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
    /**
     * 枚举Select
     */
    sap.m.Select.extend("sap.m.ex.EnumSelect", {
        metadata: {
            properties: {
                /** 是否添加空项 */
                blank: { type: "Boolean", group: "Ex", defaultValue: false },
                /** 枚举值 */
                enumValue: { type: "any", group: "Ex" },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {}
        },
        setEnumValue(value: Enumerator): void {
            let map: Map<string, string> = new Map<string, string>();
            // 如果属性为true,添加"请选择"项
            if (this.getBlank()) {
                map.set("", ibas.i18n.prop("shell_please_chooose_data", ""));
            }
            map = utils.getEnumMap(value);
            for (let item of map) {
                let key: any = item[0];
                this.addItem(new sap.ui.core.ListItem("", {
                    key: key,
                    text: ibas.enums.describe(value, item[1]),
                    additionalText: key
                }));
            }
        },
        getEnumValue(): Enumerator {
            return this.getProperty("enumValue");
        },
        getBlank(): Boolean {
            return this.getProperty("blank");
        },
        setBlank(value: Boolean): void {
            this.setProperty("blank", value);
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            this.bindProperty("selectedKey", this.getBindingInfo("bindingValue"));
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {}
    });
    /**
     * 业务对象Select
     */
    sap.m.Select.extend("sap.m.ex.BOSelect", {
        metadata: {
            properties: {
                /** 显示值属性名称 */
                boText: { type: "string", group: "Ex" },
                /** 存储值属性名称 */
                boKey: { type: "string", group: "Ex" },
                /** 业务对象编码 */
                boCode: { type: "string", group: "Ex" },
                /** 业务对象仓库名称 */
                repositoryName: { type: "string", group: "Ex" },
                /** 查询业务对象条件 */
                criteria: { type: "any", group: "Ex" },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
                /** 是否添加空项 */
                blank: { type: "Boolean", group: "Ex", defaultValue: false },
            },
            events: {
                "onLoadItemsCompleted": {
                    parameters: {
                        items: {
                            type: Array
                        }
                    }
                }
            },
        },
        /**
         * 加载业务对象集合
         * @param selecteds 业务对象KeyText集合
         */
        loadItems(selecteds: ibas.ArrayList<ibas.KeyText>): void {
            if (selecteds === null) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            // 如果属性为true,添加"请选择"项
            if (this.getBlank()) {
                this.addItem(new sap.ui.core.ListItem("", {
                    key: "",
                    text: ibas.i18n.prop("sap_m_ex_select_please_select", ""),
                    additionalText: ""
                }));
            }
            for (let item of selecteds) {
                let selectItem: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                    key: item.key,
                    text: item.text,
                    additionalText: item.key
                });
                this.addItem(selectItem);
            }
            this.fireOnLoadItemsCompleted({ items: selecteds });
        },
        /**
         * 查询业务对象
         */
        async seachBO(): Promise<void> {
            let that: any = this;
            let boKey: string = this.getBoKey();
            let selectedKey: string = this.getSelectedKey();
            let boCode: string = this.getBoCode();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            let boType: any = ibas.boFactory.classOf(boCode);
            if (ibas.objects.isNull(boType)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boType_null"));
                return;
            }
            let boName: string = ibas.objects.getName(boType);
            let boText: string = that.getBoText();
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.strings.isEmpty(boName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boname_null"));
                return;
            }
            let criteria: ibas.Criteria = this.getCriteria();
            if (ibas.objects.isNull(criteria)) {
                criteria = new ibas.Criteria();
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.boName = boName;
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            boRepEx.selectedKey = selectedKey;
            boRepEx.repositoryName = this.getRepositoryName();
            boRepEx.criteria = criteria;
            let keyTextList: ibas.ArrayList<ibas.KeyText> = await boRepEx.getKeyTextList();
            if (ibas.objects.isNull(keyTextList)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            this.removeAllItems();
            this.loadItems(keyTextList);
        },
        getBlank(): Boolean {
            return this.getProperty("blank");
        },
        setBlank(value: Boolean): void {
            this.setProperty("blank", value);
        },
        getCriteria(): ibas.Criteria {
            return this.getProperty("criteria");
        },
        setCriteria(value: ibas.Criteria): void {
            let criteria: ibas.Criteria;
            if (ibas.objects.instanceOf(value, ibas.Criteria)) {
                criteria = value;
            } else if (value instanceof Array) {
                criteria = new ibas.Criteria();
                for (let item of value) {
                    if (ibas.objects.instanceOf(item, ibas.Condition)) {
                        // 过滤无效查询条件
                        criteria.conditions.add(item);
                    }
                }
            }
            this.setProperty("criteria", criteria);
            if (!ibas.objects.isNull(value)) {
                this.seachBO();
            }
        },
        getBoText(): string {
            return this.getProperty("boText");
        },
        setBoText(value: string): void {
            this.setProperty("boText", value);
        },
        getBoKey(): string {
            return this.getProperty("boKey");
        },
        setBoKey(value: string): void {
            this.setProperty("boKey", value);
        },
        getBoCode(): string {
            return this.getProperty("boCode");
        },
        setBoCode(value: string): void {
            this.setProperty("boCode", value);
        },
        getRepositoryName(): string {
            return this.getProperty("repositoryName");
        },
        setRepositoryName(value: string): void {
            this.setProperty("repositoryName", value);
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            this.bindProperty("selectedKey", this.getBindingInfo("bindingValue"));

        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {
        }
    });
    /**
     * 业务对象子对象Select
     */
    sap.m.ex.BOSelect.extend("sap.m.ex.BOChildSelect", {
        metadata: {
            properties: {
                /** 显示值属性名称 */
                boText: { type: "string", group: "Ex" },
                /** 存储值属性名称 */
                boKey: { type: "string", group: "Ex" },
                /** 子对象属性名 */
                childPropertyName: { type: "string", group: "Ex" },
                /** 业务对象编码 */
                boCode: { type: "string", group: "Ex" },
                /** 业务对象仓库名称 */
                repositoryName: { type: "string", group: "Ex" },
                /** 查询业务对象条件 */
                criteria: { type: "any", group: "Ex" },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
                /** 是否添加空项 */
                blank: { type: "Boolean", group: "Ex", defaultValue: false },
            },
            events: {
            },
        },
        /**
         * 加载业务对象集合
         * @param selecteds 业务对象KeyText集合
         */
        loadItems(selecteds: ibas.ArrayList<ibas.KeyText>): void {
            if (selecteds === null) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            // 如果属性为true,添加"请选择"项
            if (this.getBlank()) {
                this.addItem(new sap.ui.core.ListItem("", {
                    key: "",
                    text: ibas.i18n.prop("sap_m_ex_select_please_select", ""),
                    additionalText: ""
                }));
            }
            for (let item of selecteds) {
                let selectItem: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                    key: item.key,
                    text: item.text,
                    additionalText: item.key
                });
                this.addItem(selectItem);
            }
            this.fireOnLoadItemsCompleted({ items: selecteds });
        },
        /**
         * 查询业务对象
         */
        async seachBO(): Promise<void> {
            let that: any = this;
            let boKey: string = this.getBoKey();
            let selectedKey: string = this.getSelectedKey();
            let boCode: string = this.getBoCode();
            let childPropertyName: string = this.getChildPropertyName();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            if (ibas.strings.isEmpty(childPropertyName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_childpropertyname_null"));
                return;
            }
            let boType: any = ibas.boFactory.classOf(boCode);
            if (ibas.objects.isNull(boType)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boType_null"));
                return;
            }
            let boName: string = ibas.objects.getName(boType);
            let boText: string = that.getBoText();
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.strings.isEmpty(boName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boname_null"));
                return;
            }
            let criteria: ibas.Criteria = this.getCriteria();
            if (ibas.objects.isNull(criteria)) {
                criteria = new ibas.Criteria();
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.boName = boName;
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            boRepEx.selectedKey = selectedKey;
            boRepEx.childPropertyName = childPropertyName;
            boRepEx.repositoryName = this.getRepositoryName();
            boRepEx.criteria = criteria;
            let keyTextList: ibas.ArrayList<ibas.KeyText> = await boRepEx.getChildBoKeyTextList();
            if (ibas.objects.isNull(keyTextList)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            this.removeAllItems();
            this.loadItems(keyTextList);
        },
        getChildPropertyName(): string {
            return this.getProperty("childPropertyName");
        },
        setChildPropertyName(value: string): void {
            this.setProperty("childPropertyName", value);
        },
        renderer: {
        }
    });
    /**
     * 业务对象编码Select
     */
    sap.m.ex.BOSelect.extend("sap.m.ex.SeriesSelect", {
        metadata: {
            properties: {
                /** 业务对象编码 */
                objectCode: { type: "string", group: "Ex" },
            },
            events: {
            },
        },
        async seachBO(): Promise<void> {
            let that: any = this;
            let boKey: string = this.getBoKey();
            let selectedKey: string = this.getSelectedKey();
            let boText: string = that.getBoText();
            let objectCode: string = this.getObjectCode();
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.objects.isNull(selectedKey)) {
                return;
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.boName = "BOSeriesNumbering";
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            boRepEx.selectedKey = selectedKey;
            boRepEx.repositoryName = this.getRepositoryName();

            let criteria: ibas.ICriteria = new ibas.Criteria();
            let condition: ibas.ICondition = criteria.conditions.create();
            condition.alias = "objectCode";
            condition.value = objectCode;
            condition = criteria.conditions.create();
            condition.alias = "Locked";
            condition.value = "N";
            let sort: ibas.ISort = criteria.sorts.create();
            sort.alias = "Series";
            sort.sortType = ibas.emSortType.DESCENDING;

            boRepEx.criteria = criteria;
            let keyTexts: ibas.ArrayList<ibas.KeyText> = await boRepEx.getKeyTextList();
            let keyTextList: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
            let keyText: ibas.KeyText = new ibas.KeyText();
            keyText.key = "-1";
            keyText.text = ibas.i18n.prop("sap_m_ex_seriesselect_manual");
            keyTextList.add(keyText);
            for (let item of keyTexts) {
                keyTextList.add(item);
            }
            this.removeAllItems();
            this.loadItems(keyTextList);
        },
        getBoKey(): string {
            return "series";
        },
        getBoText(): string {
            return "seriesName";
        },
        getRepositoryName(): string {
            return "BORepositoryInitialFantasy";
        },
        getBlank(): Boolean {
            return false;
        },
        getObjectCode(): string {
            return this.getProperty("objectCode");
        },
        setObjectCode(value: string): void {
            this.setProperty("objectCode", value);
            if (!ibas.objects.isNull(value)) {
                this.seachBO();
            }
        },
        renderer: {
        }
    });
    /**
     * 业务对象Input
     */
    sap.m.Input.extend("sap.m.ex.BOInput", {
        metadata: {
            properties: {
                /** 显示值属性名称 */
                boText: { type: "string", group: "Ex" },
                /** 存储值属性名称 */
                boKey: { type: "string", group: "Ex" },
                /** 业务对象编码 */
                boCode: { type: "string", group: "Ex" },
                /** 业务对象仓库名称 */
                repositoryName: { type: "string", group: "Ex" },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
                /** 是否只读 */
                readOnly: { type: "boolean", group: "Ex", defaultValue: true },
            },
            events: {
            },
        },
        /**
         * 添加KeyText项
         * @param selected
         */
        addKeyTextItem(selected: ibas.KeyText): void {
            if (selected === null) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            if (!!selected) {
                let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                    key: selected.key,
                    text: selected.text
                });
                this.addSuggestionItem(item);
                this.setSelectedItem(item);
            }
        },
        /**
         * 查询选中的业务对象
         */
        async seachBO(): Promise<void> {
            let that: any = this;
            let boKey: string = this.getBoKey();
            let selectedKey: string = this.getSelectedKey();
            let boCode: string = this.getBoCode();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            let boType: any = ibas.boFactory.classOf(boCode);
            if (ibas.objects.isNull(boType)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boType_null"));
                return;
            }
            let boName: string = ibas.objects.getName(boType);
            let boText: string = that.getBoText();
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.objects.isNull(selectedKey)) {
                return;
            }
            if (ibas.strings.isEmpty(boName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boname_null"));
                return;
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.cache = true;
            boRepEx.boCode = boCode;
            boRepEx.boName = boName;
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            boRepEx.selectedKey = selectedKey;
            boRepEx.repositoryName = this.getRepositoryName();
            let criteria: ibas.ICriteria = new ibas.Criteria();
            let condition: ibas.ICondition = criteria.conditions.create();
            condition.alias = boKey;
            condition.value = selectedKey;
            boRepEx.criteria = criteria;
            let keyTextList: ibas.ArrayList<ibas.KeyText> = await boRepEx.getKeyTextList();
            if (ibas.objects.isNull(keyTextList)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            let keyText: ibas.KeyText = keyTextList.firstOrDefault();
            this.removeAllSuggestionItems();
            if (ibas.objects.isNull(keyText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            this.addKeyTextItem(keyText);
        },
        getReadOnly(): Boolean {
            return this.getProperty("readOnly");
        },
        setReadOnly(value: Boolean): void {
            this.setProperty("readOnly", value);
        },
        getBoText(): string {
            return this.getProperty("boText");
        },
        setBoText(value: string): void {
            this.setProperty("boText", value);
        },
        getBoKey(): string {
            return this.getProperty("boKey");
        },
        setBoKey(value: string): void {
            this.setProperty("boKey", value);
        },
        getBoCode(): string {
            return this.getProperty("boCode");
        },
        setBoCode(value: string): void {
            this.setProperty("boCode", value);
        },
        getRepositoryName(): string {
            return this.getProperty("repositoryName");
        },
        setRepositoryName(value: string): void {
            this.setProperty("repositoryName", value);
        },
        setBindingValue(value: string): void {
            this.setShowSuggestion(true);
            this.setShowValueHelp(true);
            this.setProperty("bindingValue", value);
            this.bindProperty("selectedKey", this.getBindingInfo("bindingValue"));
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        setSelectedKey(value: string): void {
            // 值为空时返回
            if (ibas.objects.isNull(value) || ibas.strings.isEmpty(value)) {
                this.setSelectedItem(null);
                return;
            }
            // 此次赋值与当前值相同不重新查询
            if (this.getProperty("selectedKey") === value.toString()) {
                return;
            }
            this.setProperty("selectedKey", value);
            if (!ibas.strings.isEmpty(value) && !ibas.objects.isNull(value)) {
                this.seachBO();
            }
        },
        renderer: {
            writeInnerAttributes: function (oRm: any, oControl: any): void {
                oRm.writeAttribute("type", oControl.getType().toLowerCase());
                if (oControl.getType() === sap.m.InputType.Number && sap.ui.getCore().getConfiguration().getRTL()) {
                    oRm.writeAttribute("dir", "ltr");
                    oRm.addStyle("text-align", "right");
                }

                if (oControl.getShowSuggestion()) {
                    oRm.writeAttribute("autocomplete", "off");
                }

                if ((!oControl.getEnabled() && oControl.getType() === "Password")
                    || (oControl.getShowSuggestion() && oControl._bUseDialog)
                    || (oControl.getValueHelpOnly() && oControl.getEnabled() || oControl.getReadOnly()
                        && oControl.getEditable() && oControl.getShowValueHelp())) {
                    // required for JAWS reader on password fields on desktop and in other cases:
                    oRm.writeAttribute("readonly", "readonly");
                }
            }
        }
    });
    /**
     * 自动选择业务对象Input 继承sap.m.ex.BOInput
     */
    sap.m.ex.BOInput.extend("sap.m.ex.BOChooseInput", {
        metadata: {
            properties: {
                /** 选择类型 */
                chooseType: { type: "any", group: "Ex", default: ibas.emChooseType.SINGLE },
                /** 查询业务对象条件 */
                criteria: { type: "any", group: "Ex" },
            },
            events: {
            },
        },
        fireChooseList: function (): void {
            let that: any = this;
            let boCode: string = this.getBoCode();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            let boType: any = ibas.boFactory.classOf(boCode);
            if (ibas.objects.isNull(boType)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boType_null"));
                return;
            }
            let criteria: ibas.Criteria;
            if (ibas.objects.isNull(this.getCriteria())) {
                criteria = new ibas.Criteria();
            } else {
                criteria = this.getCriteria().clone();
                for (let item of criteria.conditions) {
                    if (item.value.toString().startsWith("{") && item.value.toString().endsWith("}")) {
                        if (!ibas.objects.isNull(this.getBindingContext()) &&
                            !ibas.objects.isNull(this.getBindingContext().getModel()) &&
                            !ibas.objects.isNull(this.getBindingContext().getModel().getData())) {
                            item.value = this.getBindingContext().getModel().getData().
                                getProperty(item.value.toString().replace("{", "").replace("}", ""));
                        }
                    }
                }
            }

            let boData: any = this.getBindingContext().getModel().getData();
            ibas.servicesManager.runChooseService<any>({
                boCode: ibas.config.applyVariables(boType.BUSINESS_OBJECT_CODE),
                chooseType: that.getChooseType(),
                criteria: criteria,
                onCompleted(selecteds: ibas.IList<any>): void {
                    that.chooseCompleted(selecteds);
                }
            });
        },
        chooseCompleted: function (selecteds: ibas.IList<any>): void {
            if (selecteds !== null && !!selecteds.firstOrDefault()) {
                this.setSelectedKey(selecteds.firstOrDefault()[this.getBoKey()]);
            }
        },
        getCriteria(): ibas.Criteria {
            return this.getProperty("criteria");
        },
        setCriteria(value: ibas.Criteria): void {
            let criteria: ibas.Criteria;
            if (ibas.objects.instanceOf(value, ibas.Criteria)) {
                criteria = value;
            } else if (value instanceof Array) {
                criteria = new ibas.Criteria();
                for (let item of value) {
                    if (ibas.objects.instanceOf(item, ibas.Condition)) {
                        // 过滤无效查询条件
                        criteria.conditions.add(item);
                    }
                }
            }
            this.setProperty("criteria", criteria);
        },
        getChooseType(): ibas.emChooseType {
            if (ibas.objects.isNull(this.getProperty("chooseType"))) {
                return ibas.emChooseType.SINGLE;
            }
            return this.getProperty("chooseType");
        },
        setChooseType(value: ibas.emChooseType): void {
            this.setProperty("chooseType", value);
        },
        _getValueHelpIcon: function (Control: any): void {
            let that: any = this;
            let IconPool: any = sap.ui.require("sap/ui/core/IconPool");
            if (!this._oValueHelpIcon) {
                let sURI: any = IconPool.getIconURI("value-help");
                this._oValueHelpIcon = IconPool.createControlByURI({
                    src: sURI,
                    useIconTooltip: false,
                    noTabStop: true
                });
                this._oValueHelpIcon.addStyleClass("sapMInputValHelpInner");
                this._oValueHelpIcon.attachPress(function (oEvent: any): void {
                    // if the property valueHelpOnly is set to true, the event is triggered in the ontap function
                    Control.fireChooseList();
                });
            }
            return this._oValueHelpIcon;
        },
        renderer: {
            writeValueHelpIcon: function (oRm: any, Control: any): void {
                if (Control.getShowValueHelp() && Control.getEnabled()) {
                    oRm.write("<div class='sapMInputValHelp' tabindex='-1'>");
                    oRm.renderControl(Control._getValueHelpIcon(Control));
                    oRm.write("</div>");
                }
            },
        }
    });
    /**
     * 数据所有者Input 继承sap.m.ex.AutoBOInput
     */
    sap.m.ex.BOChooseInput.extend("sap.m.ex.DataOwnerInput", {
        metadata: {
            properties: {
            },
            events: {
            },
        },
        /**
         * 点击选择按钮默认触发事件,打开用户选择页面
         */
        fireChooseList: function (): void {
            let that: any = this;
            let boData: any = this.getBindingContext().getModel().getData();
            let criteria: ibas.Criteria = this.getCriteria();
            if (ibas.objects.isNull(criteria)) {
                criteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "Activated";
                condition.value = "Y";
            }
            ibas.servicesManager.runChooseService<any>({
                boCode: "${Company}_SYS_USER",
                chooseType: that.getChooseType(),
                criteria: criteria,
                onCompleted(selecteds: ibas.IList<any>): void {
                    that.chooseCompleted(selecteds);
                }
            });
        },
        /**
         * 选择用户后回调事件
         */
        chooseCompleted: function (selecteds: ibas.IList<any>): void {
            if (selecteds !== null && !!selecteds.firstOrDefault()) {
                this.setSelectedKey(selecteds.firstOrDefault().DocEntry);
            }
        },
        getChooseType(): ibas.emChooseType {
            return ibas.emChooseType.SINGLE;
        },
        getBoKey(): string {
            return "docEntry";
        },
        getBoText(): string {
            return "name";
        },
        getBoCode(): string {
            return ibas.config.applyVariables("${Company}_SYS_USER");
        },
        getRepositoryName(): string {
            return "BORepositoryInitialFantasy";
        },
        renderer: {
        },
    });
    /**
     * 团队成员Input,继承sap.m.ex.DataOwnerInput
     */
    sap.m.ex.DataOwnerInput.extend("sap.m.ex.TeamMembersInput", {
        metadata: {
            properties: {
            },
            events: {
            },
        },
        /**
         * 选择用户后回调事件
         */
        chooseCompleted: function (selecteds: ibas.IList<any>): void {
            if (selecteds === null) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            let key: string = "";
            for (let item of selecteds) {
                key += item.DocEntry + ibas.DATA_SEPARATOR;
            }
            this.setSelectedKey(key);
        },
        addKeyTextItem(keyText: ibas.KeyText): void {
            if (!!keyText) {
                let item: sap.ui.core.ListItem = new sap.ui.core.ListItem("", {
                    key: keyText.key,
                    text: keyText.text
                });
                this.addSuggestionItem(item);
                this.setSelectedItem(item);
            }
        },
        async seachBO(): Promise<void> {
            let that: any = this;
            let boKey: string = this.getBoKey();
            let selectedKey: string = this.getSelectedKey();
            let boCode: string = this.getBoCode();
            let boType: any = ibas.boFactory.classOf(boCode);
            let boName: string = ibas.objects.getName(boType);
            let boText: string = that.getBoText();
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.objects.isNull(selectedKey)) {
                return;
            }
            if (ibas.strings.isEmpty(boName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boname_null"));
                return;
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.boName = boName;
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            let criteria: ibas.Criteria = new ibas.Criteria();
            let condition: ibas.ICondition;
            for (let item of selectedKey.split(ibas.DATA_SEPARATOR)) {
                if (!ibas.strings.isEmpty(item)) {
                    condition = criteria.conditions.create();
                    condition.alias = boKey;
                    condition.value = item;
                    condition.relationship = ibas.emConditionRelationship.OR;
                }
            }
            boRepEx.criteria = criteria;
            boRepEx.repositoryName = this.getRepositoryName();
            let keyTextList: ibas.ArrayList<ibas.KeyText> = await boRepEx.getKeyTextList();
            let keyText: ibas.KeyText = new ibas.KeyText();
            keyText.key = "";
            keyText.text = "";
            if (ibas.objects.isNull(keyTextList)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            for (let item of keyTextList) {
                keyText.key += item.key + ibas.DATA_SEPARATOR;
                keyText.text += item.text + ibas.DATA_SEPARATOR;
            }
            this.removeAllSuggestionItems();
            this.addKeyTextItem(keyText);
        },
        getChooseType(): ibas.emChooseType {
            return ibas.emChooseType.MULTIPLE;
        },
        renderer: {
        }
    });
    /**
     * 枚举SegmentedButton
     */
    sap.m.SegmentedButton.extend("sap.m.ex.EnumSegmentedButton", {
        metadata: {
            properties: {
                enumValue: { type: "any", group: "Ex" },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {}
        },
        setEnumValue(value: Enumerator): void {
            let map: Map<string, string> = new Map<string, string>();
            map = utils.getEnumMap(value);
            for (let item of map) {
                let key: any = item[0];
                this.addItem(new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    key: key,
                    text: ibas.enums.describe(value, item[1]),
                }));
            }
        },
        getEnumValue(): Enumerator {
            return this.getProperty("enumValue");
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            this.bindProperty("selectedKey", this.getBindingInfo("bindingValue"));
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {}
    });
    /**
     * 业务对象Text
     */
    sap.m.Text.extend("sap.m.ex.BOText", {
        metadata: {
            properties: {
                /** 显示值属性名称 */
                boText: { type: "string", group: "Ex" },
                /** 存储值属性名称 */
                boKey: { type: "string", group: "Ex" },
                /** 业务对象编码 */
                boCode: { type: "string", group: "Ex" },
                /** 业务对象仓库名称 */
                repositoryName: { type: "string", group: "Ex" },
                /** 描述字段,绑定后触发查询对象事件（seachBO()） */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {}
        },
        /**
         * 查询业务对象
         */
        async seachBO(): Promise<void> {
            let that: any = this;
            let boDesc: string = this.getBindingValue();
            let boKey: string = this.getBoKey();
            let boCode: string = this.getBoCode();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            let boType: any = ibas.boFactory.classOf(boCode);
            if (ibas.objects.isNull(boType)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_boType_null"));
                return;
            }
            let boName: string = ibas.objects.getName(boType);
            let boText: string = that.getBoText();
            let boRep: any = ibas.boFactory.create(this.getRepositoryName());
            if (!ibas.objects.instanceOf(boRep, ibas.BORepositoryApplication)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_repository_type_error"));
                return;
            }
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            if (ibas.strings.isEmpty(boText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_botext_null"));
                return;
            }
            if (ibas.objects.isNull(boDesc)) {
                return;
            }
            if (ibas.strings.isEmpty(boName)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_criteria_null"));
                return;
            }
            let boRepEx: BORepsitory = new BORepsitory();
            boRepEx.cache = true;
            boRepEx.boCode = boCode;
            boRepEx.boName = boName;
            boRepEx.keyAttribute = boKey;
            boRepEx.textAttribute = boText;
            boRepEx.selectedKey = boDesc;
            boRepEx.repositoryName = this.getRepositoryName();
            let criteria: ibas.ICriteria = new ibas.Criteria();
            let condition: ibas.ICondition = criteria.conditions.create();
            condition.alias = boKey;
            condition.value = boDesc;
            boRepEx.criteria = criteria;
            let keyTextList: ibas.ArrayList<ibas.KeyText> = await boRepEx.getKeyTextList();
            if (ibas.objects.isNull(keyTextList)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            let keyText: ibas.KeyText = keyTextList.firstOrDefault();
            if (ibas.objects.isNull(keyText)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
                return;
            }
            this.setText(keyText.text);
        },
        getBoKey(): string {
            return this.getProperty("boKey");
        },
        setBoKey(value: string): void {
            this.setProperty("boKey", value);
        },
        getBoText(): any {
            return this.getProperty("boText");
        },
        setBoText(value: any): void {
            this.setProperty("boText", value);
        },
        getBoCode(): string {
            return this.getProperty("boCode");
        },
        setBoCode(value: string): void {
            this.setProperty("boCode", value);
        },
        getRepositoryName(): string {
            return this.getProperty("repositoryName");
        },
        setRepositoryName(value: string): void {
            this.setProperty("repositoryName", value);
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            if (!ibas.strings.isEmpty(value)) {
                this.seachBO();
            }
        },
        renderer: {}
    });
    /**
     * 显示数据集描述Text
     */
    sap.m.Text.extend("sap.m.ex.DescText", {
        metadata: {
            properties: {
                /** 描述数据集 */
                descList: { type: "object", group: "Ex" },
                /** 描述字段,绑定后触发查询对象事件 */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {}
        },
        getDescList(): ibas.ArrayList<ibas.KeyText> {
            return this.getProperty("descList");
        },
        setDescList(value: ibas.ArrayList<ibas.KeyText>): void {
            this.setProperty("descList", value);
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            let keytextList: ibas.ArrayList<ibas.KeyText> = this.getDescList();
            if (!ibas.strings.isEmpty(keytextList)) {
                for (let item of keytextList) {
                    if (value === item.key) {
                        this.setText(item.text);
                    }
                }
            }
        },
        renderer: {}
    });
    /**
     * 省市区三级联动
     */
    sap.m.FlexBox.extend("sap.m.ex.ProvincesCityDistrict", {
        init(): void {
            this.draw();
        },
        metadata: {
            properties: {
                /** 省 */
                provinces: { type: "string", group: "Ex" },
                /** 市 */
                city: { type: "string", group: "Ex" },
                /** 区 */
                district: { type: "string", group: "Ex" },
            },
            events: {}
        },
        async draw(): Promise<void> {
            let that: any = this;
            let boRepEx: BORepsitory = new BORepsitory();
            let provincesSelect: sap.m.Select;
            let citySelect: sap.m.Select;
            let districtSelect: sap.m.Select;
            // 省改变时触发
            let provincesChange: Function = function (): void {
                let selectedKey: string = provincesSelect.getSelectedKey();
                if (!!districtSelect) {
                    districtSelect.removeAllItems();
                }
                if (!!citySelect) {
                    citySelect.removeAllItems();
                    for (let item of boRepEx.citys[selectedKey]) {
                        citySelect.addItem(
                            new sap.ui.core.ListItem("", {
                                key: item.id,
                                text: item.name
                            })
                        );
                    }
                    citySelect.bindProperty("selectedKey", that.getBindingInfo("city"));
                }
            };
            // 市改变时触发
            let cityChange: Function = function (): void {
                let selectedKey: string = citySelect.getSelectedKey();
                if (!!districtSelect) {
                    districtSelect.removeAllItems();
                    for (let item of boRepEx.districts[selectedKey]) {
                        districtSelect.addItem(
                            new sap.ui.core.ListItem("", {
                                key: item.id,
                                text: item.name
                            })
                        );
                    }
                    districtSelect.bindProperty("selectedKey", that.getBindingInfo("district"));
                }
            };
            // 获取省级数据
            let provincesLoadStatus: boolean = await boRepEx.getProvinces();
            if (provincesLoadStatus) {
                provincesSelect = new sap.m.Select(this.getId() + "-Provinces", {
                    change: function (oEvent: any): void {
                        provincesChange();
                    }
                });
                provincesSelect.removeAllItems();
                for (let item of boRepEx.provinces) {
                    provincesSelect.addItem(
                        new sap.ui.core.ListItem("", {
                            key: item.id,
                            text: item.name
                        })
                    );
                }
                this.addItem(provincesSelect);
                if (this.getBindingInfo("provinces") != null && this.getBindingInfo("provinces") !== undefined) {
                    provincesSelect.bindProperty("selectedKey", this.getBindingInfo("provinces"));
                } else {
                    return;
                }
            }
            if (this.getBindingInfo("city") != null && this.getBindingInfo("city") !== undefined) {
                // 获取市级数据
                let citysLoadStatus: boolean = await boRepEx.getCitys();
                if (citysLoadStatus) {
                    citySelect = new sap.m.Select(this.getId() + "-City", {
                        change: function (oEvent: any): void {
                            cityChange();
                        }
                    });
                    this.addItem(citySelect);
                    citySelect.bindProperty("selectedKey", this.getBindingInfo("city"));
                }
            }
            // 获取区级数据
            if (this.getBindingInfo("district") != null && this.getBindingInfo("district") !== undefined) {
                let districtsLoadStatus: boolean = await boRepEx.getDistricts();
                if (districtsLoadStatus) {
                    districtSelect = new sap.m.Select(this.getId() + "-District");
                    this.addItem(districtSelect);
                    districtSelect.bindProperty("selectedKey", this.getBindingInfo("district"));
                }
            }
            if (this.getBindingInfo("city") != null && this.getBindingInfo("city") !== undefined) {
                provincesChange();
            }
            if (this.getBindingInfo("district") != null && this.getBindingInfo("district") !== undefined) {
                cityChange();
            }
            if (!ibas.strings.isEmpty(this.getWidth())) {
                provincesSelect.setWidth(this.getWidth());
                citySelect.setWidth(this.getWidth());
                districtSelect.setWidth(this.getWidth());
            }
        },
        setProvinces(value: string): void {
            this.setProperty("provinces", value);
        },
        getProvinces(): string {
            return this.getProperty("provinces");
        },
        setCity(value: string): void {
            this.setProperty("city", value);
        },
        getCity(): string {
            return this.getProperty("city");
        },
        setDistrict(value: string): void {
            this.setProperty("district", value);
        },
        getDistrict(): string {
            return this.getProperty("district");
        },
        renderer: {}
    });
    /**
     * 对象查看Link
     */
    sap.m.Link.extend("sap.m.ex.BOLink", {
        metadata: {
            properties: {
                /** 业务对象编码 */
                boCode: { type: "string", group: "Ex" },
                /** 对象查询属性名称 */
                boKey: { type: "string", group: "Ex" },
                /** 绑定字段 */
                bindingValue: { type: "string", group: "Ex" },
                /** 绑定字段 */
                consistent: { type: "boolean", group: "Ex", defaultValue: true },
            },
            events: {}
        },
        showBOView(oEvent: any): void {
            let that: any = this;
            let boCode: string = this.getBoCode();
            let boKey: string = this.getBoKey();
            if (ibas.strings.isEmpty(boCode)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bocode_null"));
                return;
            }
            if (ibas.strings.isEmpty(boKey)) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_m_ex_bokey_null"));
                return;
            }
            let value: string = "";
            if (this.getConsistent()) {
                value = oEvent.getSource().getText();
            } else {
                value = oEvent.getSource().getBindingValue();
            }
            ibas.servicesManager.runLinkService({
                boCode: boCode,
                linkValue: [
                    new ibas.Condition(boKey, ibas.emConditionOperation.EQUAL, value)
                ],
            });
        },
        getBoKey(): string {
            return this.getProperty("boKey");
        },
        setBoKey(value: string): void {
            let that: any = this;
            this.attachPress(function (oEvent: any): void {
                that.showBOView(oEvent);
            });
            this.setProperty("boKey", value);
        },
        getBoCode(): string {
            return this.getProperty("boCode");
        },
        setBoCode(value: string): void {
            this.setProperty("boCode", value);
        },
        getConsistent(): boolean {
            return this.getProperty("consistent");
        },
        setConsistent(value: boolean): void {
            this.setProperty("consistent", value);
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            if (this.getConsistent()) {
                this.bindProperty("text", this.getBindingInfo("bindingValue"));
            }
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {}
    });
    /**
     * 业务对象Tokenizer
     * 字符串以separator分隔,显示token
     */
    sap.m.Tokenizer.extend("sap.m.ex.TokenizerSeparator", {
        metadata: {
            properties: {
                /** 分隔符 */
                separator: { type: "string", group: "Ex", defaultValue: "," },
                /** 绑定值 */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {
                "deleteToken": {
                    parameters: {}
                }
            },
        },
        /**
         * 加载业务对象集合
         * @param selecteds 业务对象KeyText集合
         */
        loadTokens(items: ibas.ArrayList<ibas.KeyText>): void {
            let that: any = this;
            this.removeAllTokens();
            if (ibas.objects.isNull(items)) {
                return;
            }
            for (let item of items) {
                let token: sap.m.Token = new sap.m.Token("", {
                    key: item.key,
                    text: item.text,
                    deselect: function (oEvent: sap.ui.base.Event): void {
                        that.setBindingValue(that.getBindingValue());
                    },
                    delete: function (oEvent: any): void {
                        let tokens: [string] = that.getBindingValue().split(that.getSeparator());
                        let deleteKey: string = oEvent.getSource().getKey();
                        let tokenString: string = "";
                        for (let item of tokens) {
                            if (item !== deleteKey) {
                                tokenString += item + that.getSeparator();
                            }
                        }
                        that.setBindingValue(tokenString);
                        that.fireDeleteToken();
                    }
                });
                this.addToken(token);
            }
        },
        setBindingValue(value: string): void {
            if (!ibas.strings.isEmpty(value)) {
                // 最后一位如果与分隔符一致则去除
                if (value.charAt(value.length - 1) === this.getSeparator()) {
                    value = value.substring(0, value.length - 1);
                }
                let items: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                for (let text of value.split(this.getSeparator())) {
                    let item: ibas.KeyText = new ibas.KeyText();
                    item.key = text;
                    item.text = text;
                    items.add(item);
                }
                this.loadTokens(items);
            } else {
                this.removeAllTokens();
            }
            this.setProperty("bindingValue", value);
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        setSeparator(value: string): void {
            this.setProperty("separator", value);
        },
        getSeparator(): string {
            return this.getProperty("separator");
        },
        renderer: {
        }
    });
    /**
     * 业务对象编码组合控件
     */
    sap.m.FlexBox.extend("sap.m.ex.Series", {
        init(): void {
            this.draw();
        },
        seriesInput: sap.m.Input,
        seriesSelect: sap.m.ex.SeriesSelect,
        metadata: {
            properties: {
                /** 绑定字段 */
                bindingValue: { type: "string", group: "Ex" },
                /** 服务系列属性 */
                seriesValue: { type: "string", group: "Ex" },
                /** 业务对象编码 */
                objectCode: { type: "string", group: "Ex" },
                /** 是否新建 */
                isNew: { type: "boolean", group: "Ex" },
            },
            events: {}
        },
        draw(): void {
            let that: any = this;
            that.seriesInput = new sap.m.Input("", {
                width: "100%",
                type: sap.m.InputType.Text,
                layoutData: new sap.m.FlexItemData("", {
                    growFactor: 0.7
                })
            });
            that.seriesSelect = new sap.m.ex.SeriesSelect("", {
                width: "100%",
                objectCode: this.getObjectCode(),
                bindingValue: {
                    path: "series",
                    type: "sap.ui.model.type.Integer",
                },
                change: function (oEvent: sap.ui.base.Event): void {
                    let selected: any = this.getSelectedItem().getKey();
                    if (selected !== "-1") {
                        that.seriesInput.setValue("");
                        that.seriesInput.setEditable(false);
                        let bindingInfo: any = new Object();
                        // 复制控件bindingInfo,去除验证
                        $.extend(bindingInfo, that.getBindingInfo("bindingValue"));
                        if (!ibas.objects.isNull(bindingInfo)) {
                            bindingInfo.type = null;
                            that.seriesInput.bindProperty("value", bindingInfo);
                        }
                    } else {
                        // 恢复验证
                        that.seriesInput.setEditable(true);
                        that.seriesInput.bindProperty("value", that.getBindingInfo("bindingValue"));
                    }
                },
                layoutData: new sap.m.FlexItemData("", {
                    growFactor: 0.3
                })
            });
            this.addItem(that.seriesInput);
            this.addItem(new sap.m.Text("", {
                width: "3px"
            }));
            this.addItem(that.seriesSelect);
        },
        setIsNew(value: boolean): void {
            this.setProperty("isNew", value);
            this.seriesInput.setEditable(value);
            this.seriesSelect.setEnabled(value);
        },
        getIsNew(): boolean {
            return this.getProperty("isNew");
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            this.seriesInput.bindProperty("value", this.getBindingInfo("bindingValue"));
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        setSeriesValue(value: string): void {
            this.setProperty("seriesValue", value);
            this.seriesSelect.bindProperty("bindingValue", this.getBindingInfo("seriesValue"));
        },
        getSeriesValue(): string {
            return this.getProperty("seriesValue");
        },
        setObjectCode(value: string): void {
            this.seriesSelect.setObjectCode(value);
            this.setProperty("objectCode", value);
        },
        getObjectCode(): string {
            return this.getProperty("objectCode");
        },
        renderer: {}
    });

    /**
     * 智能字段控件
     */
    sap.m.FlexBox.extend("sap.m.ex.SmartField", {
        metadata: {
            properties: {
                /** 绑定字段 */
                bindingValue: { type: "string", group: "Ex" },
                /** 业务对象类型 */
                boType: { type: "string", group: "Ex" },
                /** 自定义字段属性名称 */
                propertyName: { type: "string", group: "Ex" },
            },
            events: {}
        },
        loadControl(): void {
            let that: any = this;
            let completed: Function = function (boPropertyInformations: ibas.ArrayList<any>): void {
                if (!ibas.objects.isNull(boPropertyInformations)) {
                    let property: any = boPropertyInformations.firstOrDefault();
                    if (!ibas.objects.isNull(property)) {
                        that.removeAllItems();
                        if (!ibas.objects.isNull(that.getBindingInfo("bindingValue"))) {
                            let bingingPath: string = that.getBindingInfo("bindingValue").binding.sPath;
                            let control: any = openui5.utils.getUserFieldControl(property, bingingPath);
                            if (!ibas.objects.isNull(control)) {
                                control.setWidth(that.getWidth());
                                control.setLayoutData(new sap.m.FlexItemData("", {
                                    growFactor: 12
                                }));
                                that.addItem(control);
                            }
                        }
                    }
                } else {
                    that.setVisible(false);
                }
            };
            openui5.utils.getUserFieldInformations(this.getBoType(), completed, this.getPropertyName());
        },
        setBoType(value: string): void {
            this.setProperty("boType", value);
        },
        getBoType(): string {
            return this.getProperty("boType");
        },
        setPropertyName(value: string): void {
            this.setProperty("propertyName", value);
        },
        getPropertyName(): string {
            return this.getProperty("propertyName");
        },
        setBindingValue(value: string): void {
            this.setProperty("bindingValue", value);
            if (!ibas.objects.isNull(this.getBindingInfo("bindingValue")) && value === null) {
                this.loadControl();
            }
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {}
    });

    /**
     * sap.m.ex.Wizard控件
     */
    sap.m.Wizard.extend("sap.m.ex.Wizard", {
        metadata: {
            properties: {},
            events: {
                // 导航跳转时触发事件，step参数为跳转的步骤
                "toStep": {
                    parameters: {
                        items: {
                            step: sap.m.WizardStep
                        }
                    }
                }
            }
        },
        _handleStepChanged: function (event: any): void {
            let previousStepIndex: any = ((typeof event === "number") ? event : event.getParameter("current")) - 2;
            let previousStep: any = this._stepPath[previousStepIndex];
            let subsequentStep: any = this._getNextStep(previousStep, previousStepIndex);
            let focusFirstElement: any = sap.ui.Device.system.desktop ? true : false;
            this.goToStep(subsequentStep, focusFirstElement);
            // 从标签点击步骤时，event类型为标签的object类型，只有标签点击时触发自定义事件
            if (typeof event !== "number") {
                this.fireToStep({ step: subsequentStep });
            }
        },
        renderer: {

        }
    });
    /**
     * sap.m.ex.ChooseIcon控件,选择ui5图标
     */
    sap.m.Button.extend("sap.m.ex.ChooseIcon", {
        init(): void {
            this.draw();
        },
        metadata: {
            properties: {
                /** 绑定字段 */
                bindingValue: { type: "string", group: "Ex" },
            },
            events: {}
        },
        draw(): void {
            let that: any = this;
            let seachValue: string = "";
            let selectDialog: sap.m.SelectDialog = new sap.m.SelectDialog("", {
                title: ibas.i18n.prop("sap_m_ex_chooseicon_text"),
                search: function (oEvent: any): void {
                    seachValue = oEvent.getParameter("value");
                    let oFilter: sap.ui.model.Filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, seachValue);
                    let oBinding: any = oEvent.getSource().getBinding("items");
                    if (ibas.objects.isNull(oBinding)) {
                        return;
                    }
                    oBinding.filter([oFilter]);
                },
                confirm: function (oEvent: sap.ui.base.Event): void {
                    let selectedIconName: string = oEvent.getParameter("selectedItem").getTitle();
                    that.setBindingValue(selectedIconName);
                },
            });
            let listItemTemp: sap.m.StandardListItem = new sap.m.StandardListItem("", {
                title: {
                    path: "name"
                },
                icon: {
                    path: "name",
                    formatter(data: any): any {
                        return ibas.strings.format("{0}{1}", "sap-icon://", data);
                    }
                }
            });
            selectDialog.bindAggregation("items", {
                path: "/",
                templateShareable: true,
                template: listItemTemp
            });
            let icons: ibas.ArrayList<{name:string}> = that.getIcons();
            selectDialog.setModel(new sap.ui.model.json.JSONModel(icons));
            selectDialog.bindObject("/");
            this.attachPress(async function (oEvent: sap.ui.base.Event): Promise<void> {
                selectDialog.open(seachValue);
            });
        },
        getIcons(): ibas.ArrayList<any> {
            let iconArray: Array<string> = sap.ui.core.IconPool.getIconNames(undefined);
            let icons: ibas.ArrayList<{name:string}>=new ibas.ArrayList<{name:string}>();
            for (let iconName of iconArray) {
                icons.add({
                    name: iconName
                });
            }
            return icons;
        },
        setBindingValue(value: string): void {
            if (ibas.strings.isEmpty(value)) {
                this.setText(ibas.i18n.prop("sap_m_ex_chooseicon_text"));
                return;
            }
            this.setProperty("bindingValue", value);
            this.setIcon(ibas.strings.format("{0}{1}", "sap-icon://", value));
        },
        getBindingValue(): string {
            return this.getProperty("bindingValue");
        },
        renderer: {

        }
    });
}