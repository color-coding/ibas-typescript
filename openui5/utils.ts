/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
    /** 工具集 */
    export namespace utils {
        /** 配置项目-列表表格可视行数 */
        export const CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT: string = "tableRow|List";
        /** 配置项目-子项表格可视行数 */
        export const CONFIG_ITEM_ITEM_TABLE_VISIBLE_ROW_COUNT: string = "tableRow|Item";
        /**
         * 获取枚举类型map
         * @param data 枚举类型
         */
        export function getEnumMap(data: any): Map<string, string> {
            let map: Map<string, string> = new Map<string, string>();
            for (let item in data) {
                if (ibas.objects.isNull(item)) {
                    continue;
                }
                let key: any = item;
                let text: any = data[key];
                if (typeof item !== "string" || typeof text !== "string") {
                    continue;
                }
                if (map.has(text)) {
                    continue;
                }
                map.set(key, text);
            }
            return map;
        }
        /**
         * 创建下拉框可选项
         * @param data 枚举类型
         * @param blank 是否创建空白项
         */
        export function createComboBoxItems(data: any, blank: boolean = false): sap.ui.core.ListItem[] {
            let items: Array<sap.ui.core.ListItem> = new Array<sap.ui.core.ListItem>();
            if (blank === true) {
                items.push(new sap.ui.core.ListItem("", {
                    key: "",
                    text: ibas.i18n.prop("shell_please_chooose_data", ""),
                    additionalText: ""
                }));
            }
            for (let item of getEnumMap(data)) {
                items.push(new sap.ui.core.ListItem("", {
                    key: item[0],
                    text: ibas.enums.describe(data, item[1]),
                    additionalText: item[1]
                }));
            }
            return items;
        }
        /** 获取表格或者列表选中的对象 */
        export function getSelecteds<T>(container: sap.m.List | sap.ui.table.Table): ibas.IList<T> {
            let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
            if (container instanceof sap.m.List) {
                if (container.getMode() === sap.m.ListMode.None) {
                    let item: sap.m.ListItemBase = container.getSwipedItem();
                    if (!ibas.objects.isNull(item)) {
                        selecteds.push(item.getBindingContext().getObject());
                    }
                } else {
                    for (let item of container.getSelectedContexts(undefined)) {
                        selecteds.push((<any>item).getObject());
                    }
                }
            } else if (container instanceof sap.ui.table.Table) {
                for (let item of container.getSelectedIndices()) {
                    selecteds.push(container.getContextByIndex(item).getObject());
                }
            }
            return selecteds;
        }
        /** 获取表格或者列表未选中的对象 */
        export function getUnSelecteds<T>(container: sap.m.List | sap.ui.table.Table): ibas.IList<T> {
            let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
            if (container instanceof sap.m.List) {
                for (let item of container.getItems()) {
                    selecteds.push(item.getBindingContext().getObject());
                }
                if (container.getMode() === sap.m.ListMode.None) {
                    if (!ibas.objects.isNull(container.getSwipedItem())) {
                        selecteds.remove(container.getSwipedItem().getBindingContext().getObject());
                    }
                } else {
                    for (let item of container.getSelectedContexts(undefined)) {
                        selecteds.remove((<any>item).getObject());
                    }
                }
            } else if (container instanceof sap.ui.table.Table) {
                let index: number = 0;
                let context: sap.ui.model.Context = container.getContextByIndex(index);
                while (!ibas.objects.isNull(context)) {
                    selecteds.push(context.getObject());
                    context = container.getContextByIndex(++index);
                }
                for (let item of container.getSelectedIndices()) {
                    selecteds.remove(container.getContextByIndex(item).getObject());
                }
            }
            return selecteds;
        }
        /** 回转消息框值 */
        export function toMessageAction(data: any): ibas.emMessageAction {
            switch (data) {
                case sap.m.MessageBox.Action.ABORT:
                    return ibas.emMessageAction.ABORT;
                case sap.m.MessageBox.Action.CANCEL:
                    return ibas.emMessageAction.CANCEL;
                case sap.m.MessageBox.Action.CLOSE:
                    return ibas.emMessageAction.CLOSE;
                case sap.m.MessageBox.Action.DELETE:
                    return ibas.emMessageAction.DELETE;
                case sap.m.MessageBox.Action.IGNORE:
                    return ibas.emMessageAction.IGNORE;
                case sap.m.MessageBox.Action.NO:
                    return ibas.emMessageAction.NO;
                case sap.m.MessageBox.Action.RETRY:
                    return ibas.emMessageAction.RETRY;
                case sap.m.MessageBox.Action.YES:
                    return ibas.emMessageAction.YES;
                default:
                    return ibas.emMessageAction.OK;
            }
        }
        /** 转换消息框动作值 */
        export function toMessageBoxAction(data: ibas.emMessageAction | ibas.emMessageAction[]): any {
            let toValue: Function = function (data: ibas.emMessageAction): any {
                switch (data) {
                    case ibas.emMessageAction.ABORT:
                        return sap.m.MessageBox.Action.ABORT;
                    case ibas.emMessageAction.CANCEL:
                        return sap.m.MessageBox.Action.CANCEL;
                    case ibas.emMessageAction.CLOSE:
                        return sap.m.MessageBox.Action.CLOSE;
                    case ibas.emMessageAction.DELETE:
                        return sap.m.MessageBox.Action.DELETE;
                    case ibas.emMessageAction.IGNORE:
                        return sap.m.MessageBox.Action.IGNORE;
                    case ibas.emMessageAction.NO:
                        return sap.m.MessageBox.Action.NO;
                    case ibas.emMessageAction.RETRY:
                        return sap.m.MessageBox.Action.RETRY;
                    case ibas.emMessageAction.YES:
                        return sap.m.MessageBox.Action.YES;
                    default:
                        return sap.m.MessageBox.Action.OK;
                }
            };
            if (data instanceof Array) {
                let values: any = [];
                for (let item of data) {
                    values.push(toValue(item));
                }
                return values;
            } else {
                return toValue(data);
            }
        }
        /** 转换消息类型值  */
        export function toMessageBoxIcon(data: ibas.emMessageType): any {
            switch (data) {
                case ibas.emMessageType.ERROR:
                    return sap.m.MessageBox.Icon.ERROR;
                case ibas.emMessageType.INFORMATION:
                    return sap.m.MessageBox.Icon.INFORMATION;
                case ibas.emMessageType.QUESTION:
                    return sap.m.MessageBox.Icon.QUESTION;
                case ibas.emMessageType.SUCCESS:
                    return sap.m.MessageBox.Icon.SUCCESS;
                case ibas.emMessageType.WARNING:
                    return sap.m.MessageBox.Icon.WARNING;
                default:
                    return sap.m.MessageBox.Icon.NONE;
            }
        }
        /** 转换消息类型值 */
        export function toMessageType(type: ibas.emMessageType): sap.ui.core.MessageType {
            let uiType: sap.ui.core.MessageType = sap.ui.core.MessageType.None;
            if (type === ibas.emMessageType.ERROR) {
                uiType = sap.ui.core.MessageType.Error;
            } else if (type === ibas.emMessageType.QUESTION) {
                uiType = sap.ui.core.MessageType.Warning;
            } else if (type === ibas.emMessageType.SUCCESS) {
                uiType = sap.ui.core.MessageType.Success;
            } else if (type === ibas.emMessageType.WARNING) {
                uiType = sap.ui.core.MessageType.Warning;
            } else if (type === ibas.emMessageType.INFORMATION) {
                uiType = sap.ui.core.MessageType.Information;
            }
            return uiType;
        }
        /** 监听模型变化，并刷新控件 */
        export function refreshModelChanged(managedObject: sap.ui.base.ManagedObject, data: ibas.IBindable | ibas.IBindable[]): void {
            if (ibas.objects.isNull(managedObject) || ibas.objects.isNull(data)) {
                return;
            }
            let datas: ibas.IList<ibas.IBindable> = ibas.arrays.create(data);
            for (let item of datas) {
                if (item.registerListener !== undefined) {
                    item.registerListener({
                        id: managedObject.getId(),
                        propertyChanged(property: string): void {
                            let model: sap.ui.model.Model = managedObject.getModel(undefined);
                            if (!ibas.objects.isNull(model)) {
                                model.refresh(false);
                            }
                        }
                    });
                }
            }
        }
        /** 结果集触发者 */
        export interface IResultsTrigger {
            /** 监听对象 */
            listener: sap.ui.table.Table | sap.m.ListBase;
            /** 触发方法 */
            next(data: any): void;
        }
        /** 自动触发下一个结果集查询 */
        export function triggerNextResults(trigger: IResultsTrigger): void {
            if (ibas.objects.isNull(trigger) || ibas.objects.isNull(trigger.listener)) {
                return;
            }
            if (trigger.listener instanceof (sap.m.ListBase)) {
                // 绑定触发一次的事件
                trigger.listener.attachEvent("updateFinished", undefined, function (oEvent: any): void {
                    if (this.getBusy()) {
                        // 忙状态不监听
                        return;
                    }
                    let model: any = this.getModel(undefined);
                    if (!ibas.objects.isNull(model)) {
                        let data: any = model.getData();
                        if (!ibas.objects.isNull(data) && !ibas.objects.isNull(this.getGrowingInfo())) {
                            if (this.getGrowingInfo().total === this.getGrowingInfo().actual) {
                                if (!ibas.objects.isNull(data)) {
                                    let modelData: any = data.rows; // 与绑定对象的路径有关
                                    let dataCount: number = modelData instanceof Array ? modelData.length : 0;
                                    let visibleRow: number = this.getGrowingThreshold(); // 当前显示条数
                                    if (dataCount <= 0 || dataCount < visibleRow) {
                                        return;
                                    }
                                    // 调用事件
                                    this.setBusy(true);
                                    trigger.next.call(trigger.next, modelData[modelData.length - 1]);
                                }
                            }
                        }
                    }
                });
            } else if (trigger.listener instanceof (sap.ui.table.Table)) {
                trigger.listener.attachEvent("_rowsUpdated", undefined, function (oEvent: any): void {
                    if (this.getBusy()) {
                        // 忙状态不监听
                        return;
                    }
                    let model: any = this.getModel(undefined);
                    if (!ibas.objects.isNull(model)) {
                        let data: any = model.getData();
                        if (!ibas.objects.isNull(data)) {
                            let dataCount: number = data.length;
                            if (dataCount === undefined) {
                                // 存在绑定的对象路径问题
                                dataCount = data.rows.length;
                                if (dataCount !== undefined) {
                                    // 此路径存在数据
                                    data = data.rows;
                                }
                            }
                            let visibleRow: number = this.getVisibleRowCount();
                            if (dataCount > 0 && dataCount > visibleRow) {
                                let firstRow: number = this.getFirstVisibleRow(); // 当前页的第一行
                                if (firstRow === (dataCount - visibleRow)) {
                                    // 调用事件
                                    this.setBusy(true);
                                    trigger.next.call(trigger.next, data[data.length - 1]);
                                }
                            }
                        }
                    }
                });
            }
            // 绑定触发一次的事件
        }
        /** 改变控件编辑状态 */
        export function changeControlEditable(ctrl: sap.ui.core.Control, editable: boolean): void {
            if (ctrl instanceof sap.m.InputBase) {
                ctrl.setEditable(editable);
            } else if (ctrl instanceof sap.m.Select) {
                ctrl.setEnabled(editable);
            } else if (ctrl instanceof sap.m.Button) {
                ctrl.setEnabled(editable);
            } else if (ctrl instanceof sap.m.CheckBox) {
                ctrl.setEnabled(editable);
            } else if (ctrl instanceof sap.ui.table.Table) {
                ctrl.setEditable(editable);
                for (let row of ctrl.getRows()) {
                    for (let cell of row.getCells()) {
                        this.changeControlEditable(cell, editable);
                    }
                }
                for (let item of ctrl.getExtension()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (ctrl instanceof sap.m.Toolbar || ctrl instanceof sap.m.OverflowToolbar) {
                for (let item of ctrl.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (ctrl instanceof sap.ui.layout.form.SimpleForm) {
                for (let item of ctrl.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (ctrl instanceof sap.ui.layout.VerticalLayout) {
                for (let item of ctrl.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (ctrl instanceof sap.m.Page) {
                for (let item of ctrl.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (ctrl instanceof sap.m.FlexBox) {
                for (let item of ctrl.getItems()) {
                    this.changeControlEditable(item, editable);
                }
            }
        }
        /** 改变窗体内控件编辑状态 */
        export function changeFormEditable(form: sap.m.Page | sap.ui.layout.VerticalLayout | sap.ui.layout.form.SimpleForm, editable: boolean): void {
            if (form instanceof sap.ui.layout.form.SimpleForm) {
                for (let item of form.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (form instanceof sap.ui.layout.VerticalLayout) {
                for (let item of form.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            } else if (form instanceof sap.m.Page) {
                for (let item of form.getContent()) {
                    this.changeControlEditable(item, editable);
                }
            }
        }
        /** 改变工具条保存状态 */
        export function changeToolbarSavable(toolbar: sap.m.Toolbar, savable: boolean): void {
            for (let item of toolbar.getContent()) {
                if (item instanceof sap.m.Button) {
                    if (item.getIcon() === "sap-icon://save") {
                        item.setEnabled(savable);
                    }
                }
            }
        }
        /** 改变工具条删除状态 */
        export function changeToolbarDeletable(toolbar: sap.m.Toolbar, deletable: boolean): void {
            for (let item of toolbar.getContent()) {
                if (item instanceof sap.m.Button) {
                    if (item.getIcon() === "sap-icon://delete") {
                        item.setEnabled(deletable);
                    }
                }
            }
        }
        /** 转换选择类型  */
        export function toSelectionMode(data: ibas.emChooseType): sap.ui.table.SelectionMode {
            switch (data) {
                case ibas.emChooseType.SINGLE:
                    return sap.ui.table.SelectionMode.Single;
                case ibas.emChooseType.MULTIPLE:
                    return sap.ui.table.SelectionMode.MultiToggle;
                default:
                    return sap.ui.table.SelectionMode.None;
            }
        }
        /** 改变表格选择方式（复选框单选）  */
        export function changeSelectionStyle(table: sap.ui.table.Table, chooseType: ibas.emChooseType): void {
            if (!(table instanceof sap.ui.table.Table)) {
                return;
            }
            if (chooseType === ibas.emChooseType.SINGLE) {
                table.setEnableSelectAll(false);
                table.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                table.attachRowSelectionChange(undefined, function (oEvent: any): void {
                    this.setSelectedIndex(this.getSelectedIndex());
                });
            }
            if (chooseType === ibas.emChooseType.MULTIPLE) {
                table.setEnableSelectAll(true);
            }
        }
        /** 转换选择类型  */
        export function toListMode(data: ibas.emChooseType): sap.m.ListMode {
            switch (data) {
                case ibas.emChooseType.SINGLE:
                    return sap.m.ListMode.SingleSelectMaster;
                case ibas.emChooseType.MULTIPLE:
                    return sap.m.ListMode.MultiSelect;
                default:
                    return sap.m.ListMode.None;
            }
        }
        /**
         * 初始化自定义字段UI
         * @param page 页面page
         * @param mainLayout 页面主布局
         */
        export function drawUserFieldPage(page: sap.m.Page, mainLayout: sap.ui.core.Control): void {
            let split: sap.ui.unified.SplitContainer = new sap.ui.unified.SplitContainer("", {
                showSecondaryContent: true,
                secondaryContentWidth: "100%",
                content: [
                    new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                    })
                ],
                secondaryContent: [
                    mainLayout
                ]
            });
            let subHeader: any = page.getSubHeader();
            if (ibas.objects.isNull(subHeader)) {
                subHeader = new sap.m.Toolbar("");
                page.setSubHeader(subHeader);
            }
            if (ibas.objects.instanceOf(subHeader, sap.m.Toolbar)) {
                subHeader.addContent(new sap.m.ToolbarSpacer(""));
                subHeader.addContent(new sap.m.Button("", {
                    type: sap.m.ButtonType.Transparent,
                    icon: "sap-icon://filter-fields",
                    press: function (): void {
                        if (split.getSecondaryContentSize() === "100%") {
                            split.setSecondaryContentSize("80%");
                        } else {
                            split.setSecondaryContentSize("100%");
                        }
                    }
                }));
            }
            page.removeAllContent();
            page.addContent(split);
        }
        /**
         * 加载列表自定义字段
         * @param container 容器
         * @param boCode 对象类型
         * @param boName 对象类型
         * @param readOnly 是否只读
         */
        export function loadUserFields(container: sap.m.Page | sap.ui.table.Table | sap.ui.layout.form.SimpleForm, boCode: string, readOnly?: boolean): void;
        export function loadUserFields(container: sap.m.Page | sap.ui.table.Table | sap.ui.layout.form.SimpleForm, boCode: string, boName: string, readOnly?: boolean): void;
        export function loadUserFields(): void {
            let container: any = arguments[0];
            let boCode: string = ibas.config.applyVariables(arguments[1]);
            let boName: string = ibas.config.applyVariables(arguments[2]);
            let readOnly: boolean = arguments[3];
            if (typeof boName === "boolean") {
                readOnly = Boolean(boName);
                boName = undefined;
            }
            if (ibas.objects.isNull(readOnly)) {
                readOnly = false;
            }
            if (ibas.objects.isNull(container) || ibas.objects.isNull(boCode)) {
                return;
            }
            let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
            boRepository.fetchBizObjectInfo({
                user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                boCode: boCode,
                boName: boName,
                onCompleted(opRslt: ibas.IOperationResult<shell.bo.IBizObjectInfo>): void {
                    let boInfo: shell.bo.IBizObjectInfo = opRslt.resultObjects.firstOrDefault();
                    if (ibas.objects.isNull(boInfo)) {
                        return;
                    }
                    if (ibas.objects.isNull(boInfo.properties)) {
                        return;
                    }
                    let properties: ibas.IList<shell.bo.IBizPropertyInfo> = new ibas.ArrayList();
                    for (let item of boInfo.properties) {
                        if (item.systemed) {
                            continue;
                        }
                        properties.add(item);
                    }
                    properties = properties.sort((n1, n2) => {
                        if (n1.name > n2.name) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                    let bo: ibas.BusinessObject<any>;
                    if (container instanceof sap.m.Page) {
                        container.attachModelContextChange(null, function (oEvent: any): void {
                            if (!ibas.objects.isNull(oEvent.getSource()) && !ibas.objects.isNull(oEvent.getSource().getModel())) {
                                bo = oEvent.getSource().getModel().getData();
                                if (!ibas.objects.isNull(bo)) {
                                    registerUserField(bo, properties);
                                }
                            }
                        });
                        let split: any = container.getContent()[0];
                        if (split instanceof sap.ui.unified.SplitContainer) {
                            let userFieldForm: any = split.getContent()[0];
                            if (userFieldForm instanceof sap.ui.layout.form.SimpleForm) {
                                userFieldForm.removeAllContent();
                                if (properties.length <= 0) {
                                    // 如果对象没有自定义字段，打开自定义字段层按钮不显示
                                    let toolbar: any = container.getSubHeader();
                                    if (toolbar instanceof sap.m.Toolbar) {
                                        let controls: Array<sap.ui.core.Control> = toolbar.getContent();
                                        let userFieldButton: sap.ui.core.Control = controls[controls.length - 1];
                                        if (!ibas.objects.isNull(userFieldButton) && userFieldButton instanceof sap.m.Button) {
                                            userFieldButton.setVisible(false);
                                        }
                                    }
                                } else {
                                    for (let index: number = 0; index < properties.length; index++) {
                                        let property: shell.bo.IBizPropertyInfo = properties[index];
                                        userFieldForm.addContent(new sap.m.Label("", {
                                            text: property.systemed !== true ? property.description :
                                                ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                                        }));
                                        let control: sap.ui.core.Control = createUserFieldControl(property, ibas.strings.format("userFields/{0}/value", index), readOnly);
                                        if (!ibas.objects.isNull(control)) {
                                            userFieldForm.addContent(control);
                                        }
                                    }
                                    if (!ibas.objects.isNull(container.getBindingContext())) {
                                        if (!ibas.objects.isNull(container.getBindingContext().getObject())) {
                                            bo = container.getBindingContext().getObject();
                                            registerUserField(bo, properties);
                                        }
                                    }
                                }
                            }
                        }
                    } else if (container instanceof sap.ui.table.Table) {
                        container.attachModelContextChange(null, function (oEvent: any): void {
                            if (!ibas.objects.isNull(oEvent.getSource()) && !ibas.objects.isNull(oEvent.getSource().getModel())) {
                                if (!ibas.objects.isNull(oEvent.getSource().getModel().getData().rows)) {
                                    bo = oEvent.getSource().getModel().getData().rows[0];
                                    if (!ibas.objects.isNull(properties)) {
                                        registerUserField(bo, properties);
                                    }
                                }
                            }
                        });
                        // 查询属性信息回调函数
                        registerUserField(bo, properties);
                        for (let index: number = 0; index < properties.length; index++) {
                            let property: shell.bo.IBizPropertyInfo = properties[index];
                            let column: sap.ui.table.Column = new sap.ui.table.Column("", {
                                label: property.systemed !== true ? property.description :
                                    ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                            });
                            let control: any = createUserFieldControl(property, ibas.strings.format("userFields/{0}/value", index), readOnly);
                            if (!ibas.objects.isNull(control)) {
                                column.setTemplate(control);
                                container.addColumn(column);
                            }
                        }
                    } else if (container instanceof sap.ui.layout.form.SimpleForm) {
                        container.attachModelContextChange(null, function (oEvent: any): void {
                            if (!ibas.objects.isNull(oEvent.getSource()) && !ibas.objects.isNull(oEvent.getSource().getModel())) {
                                bo = oEvent.getSource().getModel().getData();
                                if (!ibas.objects.isNull(bo)) {
                                    registerUserField(bo, properties);
                                }
                            }
                        });
                        // 如果对象没有自定义字段并且容器中无内容则容器不显示
                        if (properties.length <= 0) {
                            let formContent: sap.ui.core.Element[] = container.getContent();
                            if (ibas.objects.isNull(formContent) || formContent.length <= 0) {
                                container.setVisible(false);
                            }
                        } else {
                            for (let index: number = 0; index < properties.length; index++) {
                                let property: shell.bo.IBizPropertyInfo = properties[index];
                                container.addContent(new sap.m.Label("", {
                                    text: property.systemed !== true ? property.description :
                                        ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                                }));
                                let control: any = createUserFieldControl(property, ibas.strings.format("userFields/{0}/value", index), readOnly);
                                if (!ibas.objects.isNull(control)) {
                                    container.addContent(control);
                                }
                            }
                            if (!ibas.objects.isNull(container.getBindingContext())) {
                                if (!ibas.objects.isNull(container.getBindingContext().getObject())) {
                                    bo = container.getBindingContext().getObject();
                                    registerUserField(bo, properties);
                                }
                            }
                        }
                    }
                }
            });
        }
        /**
         * 注册对象自定义字段
         * @param bo 对象实例
         * @param properties 对象自定义字段信息
         */
        export function registerUserField(bo: any, properties?: Array<shell.bo.IBizPropertyInfo>): void {
            if (ibas.objects.isNull(bo)) {
                return;
            }
            let boType: any = bo;
            if (boType instanceof ibas.BusinessObject) {
                // 对象实例
                if (ibas.objects.isNull(properties)) {
                    return;
                }
                for (let item of properties) {
                    bo.userFields.register(item.name, ibas.enums.valueOf(ibas.emDbFieldType, item.dataType));
                }
            } else if (boType instanceof Function) {
                // 对象类型
                let boCode: string;
                if (!ibas.objects.isNull((<any>bo).BUSINESS_OBJECT_CODE)) {
                    // 如果目标是对象，则尝试使用其编码
                    boCode = ibas.config.applyVariables((<any>bo).BUSINESS_OBJECT_CODE);
                } else if (!ibas.objects.isNull((<any>bo).name)) {
                    // 如果目标是对象，则尝试使用其名称
                    boCode = (<any>bo).name;
                }
                let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                boRepository.fetchBizObjectInfo({
                    user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                    boCode: boCode,
                    onCompleted(opRslt: ibas.IOperationResult<shell.bo.IBizObjectInfo>): void {
                        let register: Function = function (data: any): void {
                            if (!(data instanceof ibas.BusinessObject)) {
                                return;
                            }
                            let boInfo: shell.bo.IBizObjectInfo = opRslt.resultObjects.firstOrDefault(
                                c => c.name === ibas.objects.nameOf(data));
                            if (!ibas.objects.isNull(boInfo)) {
                                for (let item of boInfo.properties) {
                                    data.userFields.register(item.name, ibas.enums.valueOf(ibas.emDbFieldType, item.dataType));
                                }
                            }
                            for (let item in data) {
                                if (ibas.objects.isNull(item)) {
                                    continue;
                                }
                                let itemData: any = data[item];
                                if (itemData instanceof ibas.BusinessObject) {
                                    register(itemData);
                                } else if (itemData instanceof ibas.BusinessObjects) {
                                    register(itemData.create());
                                }
                            }
                        };
                        register(new boType);
                    }
                });
            }
        }
        /**
         * 获取显示自定义字段控件
         * @param userFieldInfo BOPropertyInformation属性信息
         * @param bindingPath 属性绑定路径 bindProperty("dateValue", { path: bindingPath});
         * @param readOnly 是否只读
         */
        export function createUserFieldControl(userFieldInfo: shell.bo.IBizPropertyInfo, bindingPath?: string, readOnly: boolean = false): sap.ui.core.Control {
            if (ibas.strings.isEmpty(bindingPath) || userFieldInfo.authorised === ibas.emAuthoriseType.NONE) {
                return null;
            }
            if (userFieldInfo.authorised === ibas.emAuthoriseType.READ) {
                readOnly = true;
            }
            let control: any = sap.extension.factories.newComponent(userFieldInfo, readOnly === true ? "Text" : "Input", !ibas.strings.isEmpty(userFieldInfo.linkedObject) ? (event) => {
                let source: any = event.getSource();
                if (source instanceof sap.m.Input && event.getId() === "changed") {
                    let chsInfo: string = source.getTooltip_AsString();
                    if (ibas.strings.isEmpty(chsInfo)) {
                        return;
                    }
                    let criteria: ibas.ICriteria = ibas.criterias.valueOf(chsInfo);
                    if (ibas.strings.isEmpty(criteria.remarks)) {
                        return;
                    }
                    let selecteds: any[] = event.getParameter("selecteds");
                    if (!(selecteds instanceof Array)) {
                        return;
                    }
                    let boData: any = source.getParent()?.getBindingContext()?.getObject();
                    if (!(boData instanceof ibas.BusinessObject)) {
                        return;
                    }
                    for (let pItem of criteria.remarks.split(";")) {
                        if (pItem.indexOf("=") <= 0) {
                            continue;
                        }
                        let value: any;
                        let tarName: string = ibas.strings.trim(pItem.split("=")[0]);
                        let surName: string = ibas.strings.trim(pItem.split("=")[1]);
                        if (selecteds.length === 1) {
                            for (let item of selecteds) {
                                if (item instanceof ibas.BusinessObject
                                    && ibas.strings.isWith(surName, "U_", undefined)) {
                                    let userField: ibas.IUserField = item?.userFields?.get(surName);
                                    if (!ibas.objects.isNull(userField)) {
                                        value = userField.value;
                                    }
                                } else if (item instanceof Object) {
                                    value = item[surName];
                                } else {
                                    value = item;
                                }
                            }
                        } else {
                            let builder: ibas.StringBuilder = new ibas.StringBuilder();
                            builder.map(null, "");
                            builder.map(undefined, "");
                            for (let item of selecteds) {
                                if (builder.length > 0) {
                                    builder.append(ibas.DATA_SEPARATOR);
                                }
                                if (item instanceof ibas.BusinessObject
                                    && ibas.strings.isWith(surName, "U_", undefined)) {
                                    let userField: ibas.IUserField = item?.userFields?.get(surName);
                                    if (!ibas.objects.isNull(userField)) {
                                        builder.append(userField.value);
                                    }
                                } else if (item instanceof Object) {
                                    builder.append(item[surName]);
                                } else {
                                    builder.append(item);
                                }
                            }
                            value = builder.toString();
                        }
                        // 通过主对象赋值
                        if (ibas.strings.isWith(tarName, "U_", undefined)) {
                            let userField: ibas.IUserField = boData?.userFields.get(tarName);
                            if (!ibas.objects.isNull(userField)) {
                                userField.value = value;
                            }
                        } else {
                            boData[tarName] = value;
                        }
                    }
                }
            } : undefined);
            if (!ibas.strings.isEmpty(bindingPath)) {
                if (control instanceof sap.ui.core.Control) {
                    let bindingInfo: {
                        parts: {
                            path: string,
                            type: sap.ui.model.SimpleType,
                        }[]
                    } = (<any>control).getBindingInfo("bindingValue");
                    if (bindingInfo && bindingInfo.parts instanceof Array) {
                        for (let item of bindingInfo.parts) {
                            item.path = bindingPath;
                        }
                    }
                }
            }
            return control;
        }
    }

    export namespace datatype {
        /**
         * 验证结果
         */
        export class ValidateResult {
            status: boolean;
            message: string;
        }

        export function fireValidationError(managedObject: sap.ui.base.ManagedObject, message?: string): sap.ui.core.Core {
            if (managedObject !== null && managedObject !== undefined
                && managedObject instanceof sap.ui.core.Element) {
                let arg: any = {
                    element: managedObject,
                    message: message,
                };
                return (<any>sap.ui.getCore()).fireValidationError(arg);
            }
        }
    }
}