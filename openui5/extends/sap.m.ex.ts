/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../types/sap.m.ex.d.ts" />

import * as ibas from "ibas/index";
import { utils } from "utils";
import { ArrayList } from "ibas/index";

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
        },
        events: {}
    },
    setEnumValue(value: any): void {
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
    getBlank(): Boolean {
        return this.getProperty("blank");
    },
    setBlank(value: Boolean): void {
        this.setProperty("blank", value);
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
    loadItems(selecteds: ArrayList<sapEX.KeyText>): void {
        if (selecteds === null) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
            return;
        }
        // 如果属性为true,添加"请选择"项
        if (this.getBlank()) {
            this.addItem(new sap.ui.core.ListItem("", {
                key: "",
                text: ibas.i18n.prop("shell_please_chooose_data", ""),
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
    },
    /**
     * 查询业务对象
     */
    async seachBO(): Promise<void> {
        let that: any = this;
        let bokey: string = this.getBoKey();
        let selectedkey: string = this.getSelectedKey();
        let boCode: string = this.getBoCode();
        if (ibas.strings.isEmpty(boCode)) {
            console.log(ibas.i18n.prop("sap_m_ex_bocode_null"));
            return;
        }
        let boType: any = ibas.boFactory.classOf(boCode);
        if (ibas.objects.isNull(boType)) {
            console.log(ibas.i18n.prop("sap_m_ex_boType_null"));
            return;
        }
        let boName: string = ibas.objects.getName(boType);
        let boText: string = that.getBoText();
        let borep: any = ibas.boFactory.create(this.getRepositoryName());
        let criteria: ibas.Criteria = this.getCriteria();
        if (!ibas.objects.instanceOf(borep, ibas.BORepositoryApplication)) {
            console.log(ibas.i18n.prop("sap_m_ex_repository_type_error"));
            return;
        }
        if (ibas.strings.isEmpty(bokey)) {
            console.log(ibas.i18n.prop("sap_m_ex_bokey_null"));
            return;
        }
        if (ibas.strings.isEmpty(boText)) {
            console.log(ibas.i18n.prop("sap_m_ex_botext_null"));
            return;
        }
        if (ibas.objects.isNull(criteria)) {
            console.log(ibas.i18n.prop("sap_m_ex_criteria_null"));
            return;
        }
        if (ibas.strings.isEmpty(boName)) {
            console.log(ibas.i18n.prop("sap_m_ex_criteria_null"));
            return;
        }
        let BORep: sapEX.BORepsitory = new sapEX.BORepsitory();
        BORep.boName = boName;
        BORep.keyAttribute = bokey;
        BORep.textAttribute = boText;
        BORep.selectedkey = selectedkey;
        BORep.repositoryName = this.getRepositoryName();
        BORep.criteria = criteria;
        let keyTextList: ArrayList<sapEX.KeyText> = await BORep.getKeyTextList();
        if (ibas.objects.isNull(keyTextList)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
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
    getCriteria(): any {
        return this.getProperty("criteria");
    },
    setCriteria(value: any): void {
        this.setProperty("criteria", value);
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
        },
        events: {
        },
    },
    /**
     * 添加KeyText项
     * @param selected
     */
    addKeyTextItem(selected: sapEX.KeyText): void {
        if (selected === null) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
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
        let bokey: string = this.getBoKey();
        let selectedkey: string = this.getSelectedKey();
        let boCode: string = this.getBoCode();
        if (ibas.strings.isEmpty(boCode)) {
            console.log(ibas.i18n.prop("sap_m_ex_bocode_null"));
            return;
        }
        let boType: any = ibas.boFactory.classOf(boCode);
        if (ibas.objects.isNull(boType)) {
            console.log(ibas.i18n.prop("sap_m_ex_boType_null"));
            return;
        }
        let boName: string = ibas.objects.getName(boType);
        let boText: string = that.getBoText();
        let borep: any = ibas.boFactory.create(this.getRepositoryName());
        if (!ibas.objects.instanceOf(borep, ibas.BORepositoryApplication)) {
            console.log(ibas.i18n.prop("sap_m_ex_repository_type_error"));
            return;
        }
        if (ibas.strings.isEmpty(bokey)) {
            console.log(ibas.i18n.prop("sap_m_ex_bokey_null"));
            return;
        }
        if (ibas.strings.isEmpty(boText)) {
            console.log(ibas.i18n.prop("sap_m_ex_botext_null"));
            return;
        }
        if (ibas.objects.isNull(selectedkey)) {
            return;
        }
        if (ibas.strings.isEmpty(boName)) {
            console.log(ibas.i18n.prop("sap_m_ex_criteria_null"));
            return;
        }
        let BORep: sapEX.BORepsitory = new sapEX.BORepsitory();
        BORep.boName = boName;
        BORep.keyAttribute = bokey;
        BORep.textAttribute = boText;
        BORep.selectedkey = selectedkey;
        BORep.repositoryName = this.getRepositoryName();
        let criteria: ibas.ICriteria = new ibas.Criteria();
        let cond: ibas.ICondition = criteria.conditions.create();
        cond.alias = bokey;
        cond.value = selectedkey;
        BORep.criteria = criteria;
        let keyTextList: ArrayList<sapEX.KeyText> = await BORep.getKeyTextList();
        if (ibas.objects.isNull(keyTextList)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
            return;
        }
        let keyText: sapEX.KeyText = keyTextList.firstOrDefault();
        if (ibas.objects.isNull(keyText)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
            return;
        }
        this.removeAllSuggestionItems();
        this.addKeyTextItem(keyText);
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
    setSelectedKey(value: string): void {
        // this.setValueHelpOnly(true);
        this.setShowSuggestion(true);
        this.setShowValueHelp(true);
        this.setProperty("selectedKey", value);
        if (!ibas.strings.isEmpty(value) && !ibas.objects.isNull(value)) {
            this.seachBO();
        }
    },
    renderer: {
    }
});
/**
 * 数据所有者Input
 */
sap.m.ex.BOInput.extend("sap.m.ex.DataOwnerInput", {
    /**
     * 点击选择按钮默认触发事件,打开用户选择页面
     */
    fireChooseList: function (): void {
        let that: any = this;
        let boData: any = this.getBindingContext().getModel().getData();
        ibas.servicesManager.runChooseService<any>({
            boCode: "${Company}_SYS_USER",
            chooseType: that.getChooseType(),
            criteria: [
                new ibas.Condition("Activated", ibas.emConditionOperation.EQUAL, "Y")
            ],
            onCompleted(selecteds: ibas.List<any>): void {
                that.chooseCompleted(selecteds);
            }
        });
    },
    metadata: {
        properties: {
            chooseType: { type: "any", group: "Ex" },
        },
        events: {
        },
    },
    /**
     * 选择用户后回调事件
     */
    chooseCompleted: function (selecteds: ibas.List<any>): void {
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
        writeValueHelpIcon: function (oRm: any, Control: any): void {
            if (Control.getShowValueHelp() && Control.getEnabled() && Control.getEditable()) {
                oRm.write("<div class='sapMInputValHelp' tabindex='-1'>");
                oRm.renderControl(Control._getValueHelpIcon(Control));
                oRm.write("</div>");
            }
        },
    },
    _getValueHelpIcon: function (Control: any): void {
        var that: any = this;
        var IconPool: any = sap.ui.require("sap/ui/core/IconPool");
        if (!this._oValueHelpIcon) {
            var sURI: any = IconPool.getIconURI("value-help");
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
    chooseCompleted: function (selecteds: ibas.List<any>): void {
        if (selecteds === null) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
            return;
        }
        let key: string = "";
        for (let item of selecteds) {
            key += item.DocEntry + ibas.DATA_SEPARATOR;
        }
        this.setSelectedKey(key);
    },
    addKeyTextItem(keyText: sapEX.KeyText): void {
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
        let bokey: string = this.getBoKey();
        let selectedkey: string = this.getSelectedKey();
        let boCode: string = this.getBoCode();
        let boType: any = ibas.boFactory.classOf(boCode);
        let boName: string = ibas.objects.getName(boType);
        let boText: string = that.getBoText();
        let borep: any = ibas.boFactory.create(this.getRepositoryName());
        if (!ibas.objects.instanceOf(borep, ibas.BORepositoryApplication)) {
            console.log(ibas.i18n.prop("sap_m_ex_repository_type_error"));
            return;
        }
        if (ibas.strings.isEmpty(bokey) || ibas.strings.isEmpty(selectedkey) ||
            ibas.strings.isEmpty(boName) || ibas.strings.isEmpty(boText)) {
            return;
        }
        let BORep: sapEX.BORepsitory = new sapEX.BORepsitory();
        BORep.boName = boName;
        BORep.keyAttribute = bokey;
        BORep.textAttribute = boText;
        let cri: ibas.Criteria = new ibas.Criteria();
        let cond: ibas.ICondition;
        for (let item of selectedkey.split(ibas.DATA_SEPARATOR)) {
            if (!ibas.strings.isEmpty(item)) {
                cond = cri.conditions.create();
                cond.alias = bokey;
                cond.value = item;
                cond.relationship = ibas.emConditionRelationship.OR;
            }
        }
        BORep.criteria = cri;
        BORep.repositoryName = this.getRepositoryName();
        let keyTextList: ArrayList<sapEX.KeyText> = await BORep.getKeyTextList();
        let keyText: sapEX.KeyText = new sapEX.KeyText();
        if (ibas.objects.isNull(keyTextList)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
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
        },
        events: {}
    },
    setEnumValue(value: any): void {
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
            boDescription: { type: "any", group: "Ex" },
        },
        events: {}
    },
    /**
     * 查询业务对象
     */
    async seachBO(): Promise<void> {
        let that: any = this;
        let boDesc: string = this.getBoDescription();
        let bokey: string = this.getBoKey();
        let boCode: string = this.getBoCode();
        if (ibas.strings.isEmpty(boCode)) {
            console.log(ibas.i18n.prop("sap_m_ex_bocode_null"));
            return;
        }
        let boType: any = ibas.boFactory.classOf(boCode);
        if (ibas.objects.isNull(boType)) {
            console.log(ibas.i18n.prop("sap_m_ex_boType_null"));
            return;
        }
        let boName: string = ibas.objects.getName(boType);
        let boText: string = that.getBoText();
        let borep: any = ibas.boFactory.create(this.getRepositoryName());
        if (!ibas.objects.instanceOf(borep, ibas.BORepositoryApplication)) {
            console.log(ibas.i18n.prop("sap_m_ex_repository_type_error"));
            return;
        }
        if (ibas.strings.isEmpty(bokey)) {
            console.log(ibas.i18n.prop("sap_m_ex_bokey_null"));
            return;
        }
        if (ibas.strings.isEmpty(boText)) {
            console.log(ibas.i18n.prop("sap_m_ex_botext_null"));
            return;
        }
        if (ibas.objects.isNull(boDesc)) {
            return;
        }
        if (ibas.strings.isEmpty(boName)) {
            console.log(ibas.i18n.prop("sap_m_ex_criteria_null"));
            return;
        }
        let BORep: sapEX.BORepsitory = new sapEX.BORepsitory();
        BORep.boName = boName;
        BORep.keyAttribute = bokey;
        BORep.textAttribute = boText;
        BORep.selectedkey = boDesc;
        BORep.repositoryName = this.getRepositoryName();
        let criteria: ibas.ICriteria = new ibas.Criteria();
        let cond: ibas.ICondition = criteria.conditions.create();
        cond.alias = bokey;
        cond.value = boDesc;
        BORep.criteria = criteria;
        let keyTextList: ArrayList<sapEX.KeyText> = await BORep.getKeyTextList();
        if (ibas.objects.isNull(keyTextList)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
            return;
        }
        let keyText: sapEX.KeyText = keyTextList.firstOrDefault();
        if (ibas.objects.isNull(keyText)) {
            console.log(ibas.i18n.prop("sap_m_ex_fetch_bos_null"));
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
    getBoDescription(): string {
        return this.getProperty("boDescription");
    },
    setBoDescription(value: string): void {
        this.setProperty("boDescription", value);
        if (!ibas.strings.isEmpty(value)) {
            this.seachBO();
        }
    },
    renderer: {}
});

namespace sapEX {
    export class KeyText {
        key: string;
        text: string;
        constructor() {
            this.key = "";
            this.text = "";
        }
    }
    export class BORepsitory {
        keyAttribute: string;
        textAttribute: string;
        boName: string;
        repositoryName: string;
        selectedkey: string;
        criteria: ibas.ICriteria;
        constructor(repositoryName?: string, boName?: string, keyAttribute?: string, textAttribute?: string, criteria?: ibas.Criteria) {
            this.repositoryName = repositoryName;
            this.boName = boName;
            this.keyAttribute = keyAttribute;
            this.textAttribute = textAttribute;
            this.criteria = criteria;
        }
        async getKeyTextList(): Promise<ArrayList<sapEX.KeyText>> {
            let that: this = this;
            let promise: Promise<ArrayList<sapEX.KeyText>> = new Promise<ArrayList<sapEX.KeyText>>(resolve => {
                if (ibas.strings.isEmpty(that.repositoryName) || ibas.strings.isEmpty(that.boName)
                    || ibas.strings.isEmpty(that.keyAttribute) || ibas.strings.isEmpty(that.textAttribute)
                    || !that.criteria) {
                    resolve(null);
                }
                let borep: any = ibas.boFactory.create(this.repositoryName);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria = that.criteria;
                borep[ibas.strings.format("fetch{0}", this.boName)]({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<any>): void {
                        if (opRslt.resultCode === 0) {
                            let keyTextList: ArrayList<sapEX.KeyText> = new ArrayList<sapEX.KeyText>();
                            for (let data of opRslt.resultObjects) {
                                let keyText: sapEX.KeyText = new sapEX.KeyText();
                                keyText.key = data.getProperty(that.keyAttribute);
                                keyText.text = data.getProperty(that.textAttribute);
                                keyTextList.push(keyText);
                            }
                            resolve(keyTextList);
                        } else {
                            resolve(null);
                        }
                    }
                });
            });
            return promise;
        }
    }
}


// 命名空间输出,不可删除
export default sap.m.ex;