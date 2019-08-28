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
            /** 下拉框-行政地区 */
            ComboBox.extend("sap.extension.m.RegionComboBox", {
                metadata: {
                    properties: {
                        /** 语言 */
                        language: { type: "string", defaultValue: ibas.config.get(ibas.CONFIG_ITEM_LANGUAGE_CODE, "zh_CN") },
                        /** 数据地址 */
                        dataUrl: { type: "string", },
                        /** 过滤器（属性名称或方法） */
                        filter: { type: "any", defaultValue: undefined },
                    },
                    events: {}
                },
                renderer: {
                },
                setSelectedItem(this: RegionComboBox, value: sap.ui.core.Item): RegionComboBox {
                    ComboBox.prototype.setSelectedItem.apply(this, arguments);
                    this.fireSelectionChange({
                        selectedItem: value
                    });
                    this.fireChange({
                        value: value.getText()
                    });
                    return this;
                },
                initItems(this: RegionComboBox, group?: string, selector?: (combobox: RegionComboBox) => void): RegionComboBox {
                    this.destroyItems();
                    let url: string = this.getDataUrl();
                    if (ibas.strings.isEmpty(url)) {
                        return this;
                    }
                    if (!ibas.strings.isWith(url, "http", undefined)) {
                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                        builder.map(null, "");
                        builder.map(undefined, "");
                        builder.append(ibas.urls.rootUrl("/openui5/index"));
                        builder.append("/");
                        builder.append("datas");
                        builder.append("/");
                        builder.append(this.getLanguage());
                        builder.append("/");
                        builder.append(url);
                        url = builder.toString();
                    }
                    let that: RegionComboBox = this;
                    jQuery.ajax({
                        url: url,
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: true,
                        cache: true,
                        success: function (data: any): void {
                            if (data instanceof Array) {
                                let property: string = <string>that.getFilter();
                                let filter: any = typeof property === "function" ? property
                                    : typeof property === "string" ? (data: any): boolean => {
                                        return data[property] === group;
                                    } : undefined;
                                for (let item of data) {
                                    if (ibas.objects.isNull(item)) {
                                        continue;
                                    }
                                    if (!ibas.strings.isEmpty(group)) {
                                        if (filter instanceof Function && !filter(item)) {
                                            continue;
                                        }
                                    }
                                    that.newItem(item);
                                }
                            }
                            if (selector instanceof Function) {
                                selector(that);
                            } else {
                                let text: string = that.getValue();
                                if (!ibas.strings.isEmpty(text)) {
                                    for (let item of that.getItems()) {
                                        if (ibas.strings.equals(item.getText(), text)) {
                                            that.setSelectedItem(item);
                                            break;
                                        }
                                    }
                                }
                            }
                            that = null;
                        },
                    });
                    return this;
                },
                newItem(this: RegionComboBox, data: { code: string, name: string }): RegionComboBox {
                    if (data && data.code && data.name) {
                        this.addItem(new sap.ui.core.ListItem("", {
                            key: data.code,
                            text: data.name,
                        }));
                    }
                    return this;
                }
            });
            /** 下拉框-地区-国家 */
            RegionComboBox.extend("sap.extension.m.CountryComboBox", {
                metadata: {
                    properties: {
                        /** 数据地址 */
                        dataUrl: { type: "string", defaultValue: "country.json" },
                        /** 过滤器（属性名称或方法） */
                        filter: { type: "any", defaultValue: undefined },
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /** 下拉框-地区-省 */
            RegionComboBox.extend("sap.extension.m.ProvinceComboBox", {
                metadata: {
                    properties: {
                        /** 数据地址 */
                        dataUrl: { type: "string", defaultValue: "province.json" },
                        /** 过滤器（属性名称或方法） */
                        filter: { type: "any", defaultValue: undefined },
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /** 下拉框-地区-市 */
            RegionComboBox.extend("sap.extension.m.CityComboBox", {
                metadata: {
                    properties: {
                        /** 数据地址 */
                        dataUrl: { type: "string", defaultValue: "city.json" },
                        /** 过滤器（属性名称或方法） */
                        filter: { type: "any", defaultValue: "provinceCode" },
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /** 下拉框-地区-区 */
            RegionComboBox.extend("sap.extension.m.DistrictComboBox", {
                metadata: {
                    properties: {
                        /** 数据地址 */
                        dataUrl: { type: "string", defaultValue: "district.json" },
                        /** 过滤器（属性名称或方法） */
                        filter: { type: "any", defaultValue: "cityCode" },
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 地址区
             */
            core.EditableControl.extend("sap.extension.m.AddressArea", {
                metadata: {
                    properties: {
                        /** 语言 */
                        language: { type: "string", defaultValue: ibas.config.get(ibas.CONFIG_ITEM_LANGUAGE_CODE, "zh_CN") },
                        /** 国家 */
                        country: { type: "string" },
                        /** 省 */
                        province: { type: "string" },
                        /** 市 */
                        city: { type: "string" },
                        /** 区 */
                        district: { type: "string" },
                        /** 街道 */
                        street: { type: "string" },
                        /** 邮编 */
                        zipCode: { type: "string" },
                        /** 全地址（省市区街道） */
                        address: { type: "string" },
                        /** 国家-是否可见 */
                        countryVisible: { type: "boolean", defaultValue: false },
                        /** 省-是否可见 */
                        provinceVisible: { type: "boolean", defaultValue: true },
                        /** 市-是否可见 */
                        cityVisible: { type: "boolean", defaultValue: true },
                        /** 区-是否可见 */
                        districtVisible: { type: "boolean", defaultValue: true },
                        /** 街道-是否可见 */
                        streetVisible: { type: "boolean", defaultValue: true },
                        /** 邮编-是否可见 */
                        zipCodeVisible: { type: "boolean", defaultValue: false },
                    },
                    aggregations: {
                        "_country": { type: "sap.extension.m.CountryComboBox", multiple: false },
                        "_province": { type: "sap.extension.m.ProvinceComboBox", multiple: false },
                        "_city": { type: "sap.extension.m.CityComboBox", multiple: false },
                        "_district": { type: "sap.extension.m.DistrictComboBox", multiple: false },
                        "_street": { type: "sap.extension.m.Input", multiple: false },
                        "_zipcode": { type: "sap.extension.m.Input", multiple: false },
                    },
                    events: {
                        "addressChange": {
                            parameters: {
                                trigger: {
                                    type: "string",
                                },
                                address: {
                                    type: "string",
                                }
                            }
                        },
                    },
                },
                renderer: function (this: AddressArea, oRm: sap.ui.core.RenderManager, oControl: AddressArea): void {
                    oRm.write("<div");
                    oRm.writeControlData(oControl);
                    oRm.write(">");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_country", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_province", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_city", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_district", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_street", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_zipcode", undefined));
                    oRm.write("</div>");
                    oRm.write("</div>");
                },
                init(this: AddressArea): void {
                    (<any>sap.ui.core.Control.prototype).init.apply(this, arguments);
                    this.setAggregation("_country", new CountryComboBox("", {
                        visible: this.getCountryVisible(),
                        language: this.getLanguage(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_country"),
                        selectionChange: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            let country: string = combobox.getSelectedKey();
                            if (ibas.objects.isNull(country)) {
                                country = "";
                            }
                            (<RegionComboBox>this.getAggregation("_province", undefined))
                                .setDataUrl(ibas.strings.format("{0}/{1}", country, "province.json"))
                                .initItems(undefined, (combobox) => {
                                    let text: string = this.getProvince();
                                    if (!ibas.strings.isEmpty(text)) {
                                        for (let item of combobox.getItems()) {
                                            if (ibas.strings.equals(item.getText(), text)) {
                                                combobox.setSelectedItem(item);
                                                return;
                                            }
                                        }
                                        combobox.setValue(text);
                                    }
                                });
                            (<RegionComboBox>this.getAggregation("_city", undefined))
                                .setDataUrl(ibas.strings.format("{0}/{1}", country, "city.json"))
                                .destroyItems();
                            (<RegionComboBox>this.getAggregation("_district", undefined))
                                .setDataUrl(ibas.strings.format("{0}/{1}", country, "district.json"))
                                .destroyItems();
                            (<Input>this.getAggregation("_zipcode", undefined)).setValue(undefined);
                            this.setBusy(false);
                        },
                        change: (event: sap.ui.base.Event) => {
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            this.setProperty("country", combobox.getValue());
                            this.setAddress();
                        }
                    }).initItems(undefined, (combobox) => {
                        let text: string = this.getCountry();
                        if (!ibas.strings.isEmpty(text)) {
                            for (let item of combobox.getItems()) {
                                if (ibas.strings.equals(item.getText(), text)) {
                                    combobox.setSelectedItem(item);
                                    break;
                                }
                            }
                        } else if (this.getCountryVisible() === false) {
                            if (combobox.getItems().length > 0) {
                                combobox.setSelectedItem(combobox.getFirstItem());
                            }
                        }
                    }));
                    this.setAggregation("_province", new ProvinceComboBox("", {
                        visible: this.getProvinceVisible(),
                        language: this.getLanguage(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_province"),
                        selectionChange: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            (<RegionComboBox>this.getAggregation("_city", undefined)).initItems(combobox.getSelectedKey(), (combobox) => {
                                let text: string = this.getCity();
                                if (!ibas.strings.isEmpty(text)) {
                                    for (let item of combobox.getItems()) {
                                        if (ibas.strings.equals(item.getText(), text)) {
                                            combobox.setSelectedItem(item);
                                            return;
                                        }
                                    }
                                    combobox.setValue(text);
                                }
                            });
                            (<RegionComboBox>this.getAggregation("_district", undefined)).destroyItems();
                            (<Input>this.getAggregation("_zipcode", undefined)).setValue(undefined);
                            this.setBusy(false);
                        },
                        change: (event: sap.ui.base.Event) => {
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            this.setProperty("province", combobox.getValue());
                            this.setAddress();
                        }
                    }));
                    this.setAggregation("_city", new CityComboBox("", {
                        visible: this.getCityVisible(),
                        language: this.getLanguage(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_city"),
                        selectionChange: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            (<RegionComboBox>this.getAggregation("_district", undefined)).initItems(combobox.getSelectedKey(), (combobox) => {
                                let text: string = this.getDistrict();
                                if (!ibas.strings.isEmpty(text)) {
                                    for (let item of combobox.getItems()) {
                                        if (ibas.strings.equals(item.getText(), text)) {
                                            combobox.setSelectedItem(item);
                                            return;
                                        }
                                    }
                                    combobox.setValue(text);
                                }
                            });
                            (<Input>this.getAggregation("_zipcode", undefined)).setValue(undefined);
                            this.setBusy(false);
                        },
                        change: (event: sap.ui.base.Event) => {
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            this.setProperty("city", combobox.getValue());
                            this.setAddress();
                        }
                    }));
                    this.setAggregation("_district", new DistrictComboBox("", {
                        visible: this.getDistrictVisible(),
                        language: this.getLanguage(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_district"),
                        selectionChange: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            this.setZipCode(combobox.getSelectedKey());
                            // 不显示街道时，触发地址变化
                            if (this.getStreetVisible() !== true) {
                                this.setAddress();
                            }
                            this.setBusy(false);
                        },
                        change: (event: sap.ui.base.Event) => {
                            let combobox: RegionComboBox = <RegionComboBox>event.getSource();
                            this.setProperty("district", combobox.getValue());
                            this.setAddress();
                        }
                    }));
                    this.setAggregation("_street", new Input("", {
                        visible: this.getStreetVisible(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_street"),
                        change: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let input: Input = <Input>event.getSource();
                            this.setProperty("street", input.getValue());
                            // 显示街道时，触发地址变化
                            if (this.getStreetVisible() === true) {
                                this.setAddress();
                            }
                            this.setBusy(false);
                        }
                    }));
                    this.setAggregation("_zipcode", new Input("", {
                        visible: this.getZipCodeVisible(),
                        width: "100%",
                        placeholder: ibas.i18n.prop("openui5_zipcode"),
                        change: (event: sap.ui.base.Event) => {
                            this.setBusy(true);
                            let input: Input = <Input>event.getSource();
                            this.setProperty("zipcode", input.getValue());
                            this.setBusy(false);
                        }
                    }));
                },
                /** 是否可编辑 */
                getLanguage(this: AddressArea): string {
                    return this.getProperty("language");
                },
                /** 是否可编辑 */
                getEditable(this: AddressArea): string {
                    return this.getProperty("editable");
                },
                /** 国家 */
                getCountry(this: AddressArea): string {
                    return this.getProperty("country");
                },
                /** 省 */
                getProvince(this: AddressArea): string {
                    return this.getProperty("province");
                },
                /** 市 */
                getCity(this: AddressArea): string {
                    return this.getProperty("city");
                },
                /** 区 */
                getDistrict(this: AddressArea): string {
                    return this.getProperty("district");
                },
                /** 街道 */
                getStreet(this: AddressArea): string {
                    return this.getProperty("street");
                },
                /** 邮编 */
                getZipCode(this: AddressArea): string {
                    return this.getProperty("zipCode");
                },
                /** 国家 */
                getCountryVisible(this: AddressArea): boolean {
                    return this.getProperty("countryVisible");
                },
                /** 省 */
                getProvinceVisible(this: AddressArea): boolean {
                    return this.getProperty("provinceVisible");
                },
                /** 市 */
                getCityVisible(this: AddressArea): boolean {
                    return this.getProperty("cityVisible");
                },
                /** 区 */
                getDistrictVisible(this: AddressArea): boolean {
                    return this.getProperty("districtVisible");
                },
                /** 街道 */
                getStreetVisible(this: AddressArea): boolean {
                    return this.getProperty("streetVisible");
                },
                /** 邮编 */
                getZipCodeVisible(this: AddressArea): boolean {
                    return this.getProperty("zipCodeVisible");
                },
                /** 全地址 */
                getAddress(this: AddressArea): string {
                    return this.getProperty("address");
                },
                /** 语言 */
                setLanguage(this: AddressArea, value: string): AddressArea {
                    this.setProperty("language", value);
                    return this;
                },
                /** 是否可编辑 */
                setEditable(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("editable", value);
                    (<RegionComboBox>this.getAggregation("_country", undefined)).setEditable(value);
                    (<RegionComboBox>this.getAggregation("_province", undefined)).setEditable(value);
                    (<RegionComboBox>this.getAggregation("_city", undefined)).setEditable(value);
                    (<RegionComboBox>this.getAggregation("_district", undefined)).setEditable(value);
                    (<RegionComboBox>this.getAggregation("_street", undefined)).setEditable(value);
                    (<RegionComboBox>this.getAggregation("_zipcode", undefined)).setEditable(value);
                    return this;
                },
                /** 国家 */
                setCountry(this: AddressArea, value: string): AddressArea {
                    this.setProperty("country", value);
                    (<RegionComboBox>this.getAggregation("_country", undefined)).setValue(value);
                    return this;
                },
                /** 省 */
                setProvince(this: AddressArea, value: string): AddressArea {
                    this.setProperty("province", value);
                    (<RegionComboBox>this.getAggregation("_province", undefined)).setValue(value);
                    return this;
                },
                /** 市 */
                setCity(this: AddressArea, value: string): AddressArea {
                    this.setProperty("city", value);
                    (<RegionComboBox>this.getAggregation("_city", undefined)).setValue(value);
                    return this;
                },
                /** 区 */
                setDistrict(this: AddressArea, value: string): AddressArea {
                    this.setProperty("district", value);
                    (<RegionComboBox>this.getAggregation("_district", undefined)).setValue(value);
                    return this;
                },
                /** 街道 */
                setStreet(this: AddressArea, value: string): AddressArea {
                    this.setProperty("street", value);
                    (<RegionComboBox>this.getAggregation("_street", undefined)).setValue(value);
                    return this;
                },
                /** 邮编 */
                setZipCode(this: AddressArea, value: string): AddressArea {
                    this.setProperty("zipCode", value);
                    (<RegionComboBox>this.getAggregation("_zipcode", undefined)).setValue(value);
                    return this;
                },
                /** 全地址 */
                setAddress(this: AddressArea): AddressArea {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    builder.map(undefined, "");
                    builder.map(null, "");
                    let contorl: sap.m.InputBase = (<sap.m.InputBase>this.getAggregation("_country", undefined));
                    if (contorl.getVisible() === true) {
                        builder.append(contorl.getValue());
                    }
                    contorl = (<sap.m.InputBase>this.getAggregation("_province", undefined));
                    if (contorl.getVisible() === true) {
                        builder.append(contorl.getValue());
                    }
                    contorl = (<sap.m.InputBase>this.getAggregation("_city", undefined));
                    if (contorl.getVisible() === true) {
                        builder.append(contorl.getValue());
                    }
                    contorl = (<sap.m.InputBase>this.getAggregation("_district", undefined));
                    if (contorl.getVisible() === true) {
                        builder.append(contorl.getValue());
                    }
                    contorl = (<sap.m.InputBase>this.getAggregation("_street", undefined));
                    if (contorl.getVisible() === true) {
                        builder.append(contorl.getValue());
                    }

                    let value: string = builder.toString();
                    this.setProperty("address", value);
                    this.fireAddressChange({ address: value });
                    return this;
                },
                /** 国家 */
                setCountryVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("countryVisible", value);
                    (<RegionComboBox>this.getAggregation("_country", undefined)).setVisible(value);
                    return this;
                },
                /** 省 */
                setProvinceVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("provinceVisible", value);
                    (<RegionComboBox>this.getAggregation("_province", undefined)).setVisible(value);
                    return this;
                },
                /** 市 */
                setCityVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("cityVisible", value);
                    (<RegionComboBox>this.getAggregation("_city", undefined)).setVisible(value);
                    return this;
                },
                /** 区 */
                setDistrictVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("districtVisible", value);
                    (<RegionComboBox>this.getAggregation("_district", undefined)).setVisible(value);
                    return this;
                },
                /** 街道 */
                setStreetVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("streetVisible", value);
                    (<Input>this.getAggregation("_street", undefined)).setVisible(value);
                    return this;
                },
                /** 邮编 */
                setZipCodeVisible(this: AddressArea, value: boolean): AddressArea {
                    this.setProperty("zipCodeVisible", value);
                    (<Input>this.getAggregation("_zipcode", undefined)).setVisible(value);
                    return this;
                },
                /** 设置监听地址改变事件 */
                attachAddressChange(this: AddressArea, oData: any, fnFunction: Function, oListener?: any): AddressArea {
                    this.attachEvent("addressChange", oData, fnFunction, oListener);
                    return this;
                },
                /** 取消监听地址改变事件 */
                detachAddressChange(this: AddressArea, fnFunction: Function, oListener?: any): AddressArea {
                    this.detachEvent("addressChange", fnFunction, oListener);
                    return this;
                },
            });
        }
    }
}
