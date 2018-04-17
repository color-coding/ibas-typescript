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
        var mapLanguage: Map<string, string> = new Map();
        /** 转换语言编码 */
        export function toLanguageCode(data: string): string {
            if (ibas.objects.isNull(data)) {
                return data;
            }
            if (mapLanguage.size === 0) {
                // 正反
                mapLanguage.set("zh_CN", "zh-CN");
                mapLanguage.set("en_US", "en");
                mapLanguage.set("zh-CN", "zh_CN");
                mapLanguage.set("en", "en_US");
            }
            if (mapLanguage.has(data)) {
                return mapLanguage.get(data);
            }
            return data;
        }
        /**
         * 获取枚举类型map
         * @param data 枚举类型
         */
        export function getEnumMap(data: any): Map<string, string>;
        /** 获取枚举类型map */
        export function getEnumMap(): Map<string, string> {
            // 首先获取枚举内容
            let data: any = arguments[0];
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
         */
        export function createComboBoxItems(data: any): sap.ui.core.ListItem[];
        /**
         * 创建下拉框可选项
         * @param data 枚举类型
         * @param blank 是否创建空白项
         */
        export function createComboBoxItems(data: any, blank: boolean): sap.ui.core.ListItem[];
        /** 创建下拉框可选项 */
        export function createComboBoxItems(): sap.ui.core.ListItem[] {
            // 首先获取枚举内容
            let data: any = arguments[0];
            let blank: boolean = arguments[1];
            let map: Map<string, string> = new Map<string, string>();
            if (blank) {
                map.set("", ibas.i18n.prop("shell_please_chooose_data", ""));
            }
            map = getEnumMap(data);
            // 转换枚举内容
            let items: Array<sap.ui.core.ListItem> = new Array<sap.ui.core.ListItem>();
            for (let item of map) {
                let key: any = item[0];
                items.push(new sap.ui.core.ListItem("", {
                    key: key,
                    text: ibas.enums.describe(data, item[1]),
                    additionalText: key
                }));
            }
            return items;
        }
        /**
         * 创建SegmentedButtonItem
         * @param data 枚举类型
         */
        export function createSegmentedButtonItems(data: any): sap.m.SegmentedButtonItem[];
        /** 创建SegmentedButtonItem */
        export function createSegmentedButtonItems(): sap.m.SegmentedButtonItem[] {
            // 首先获取枚举内容
            let data: any = arguments[0];
            let map: Map<string, string> = new Map<string, string>();
            map = getEnumMap(data);
            // 转换枚举内容
            let items: Array<sap.m.SegmentedButtonItem> = new Array<sap.m.SegmentedButtonItem>();
            for (let item of map) {
                let key: any = item[0];
                items.push(new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    key: key,
                    text: ibas.enums.describe(data, item[1]),
                }));
            }
            return items;
        }
        /** 获取表格或者列表选中的对象 */
        export function getSelecteds<T>(container: sap.m.List | sap.ui.table.Table): ibas.IList<T> {
            let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
            if (container instanceof (sap.m.List)) {
                if (container.getMode() === sap.m.ListMode.None) {
                    if (!ibas.objects.isNull(container.getSwipedItem())) {
                        selecteds.push(container.getSwipedItem().getBindingContext().getObject());
                    }
                } else {
                    let Contexts: any[] = container.getSelectedContexts(undefined);
                    if (Contexts.length > 0) {
                        for (let i: number = 0; i < Contexts.length; i++) {
                            selecteds.push(Contexts[i].getObject());
                        }
                    }
                }
            } else if (container instanceof (sap.ui.table.Table)) {
                let idxs: any[] = container.getSelectedIndices();
                if (idxs.length > 0) {
                    for (let i: number = 0; i < idxs.length; i++) {
                        selecteds.push(container.getContextByIndex(idxs[i]).getObject());
                    }
                }
            }
            return selecteds;
        }
        /** 获取表格选中的对象 */
        export function getTableSelecteds<T>(table: sap.ui.table.Table): ibas.IList<T> {
            let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
            var idxs: any[] = table.getSelectedIndices();
            if (idxs.length > 0) {
                for (var i: number = 0; i < idxs.length; i++) {
                    selecteds.push(table.getContextByIndex(idxs[i]).getObject());
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
        export function toMessageBoxAction(data: ibas.emMessageAction): any;
        /** 转换消息框动作值 */
        export function toMessageBoxAction(datas: ibas.emMessageAction[]): any;
        /** 转换消息框动作值 */
        export function toMessageBoxAction(): any {
            let data: any = arguments[0];
            if (ibas.objects.isNull(data)) {
                return undefined;
            }
            var toValue: Function = function (data: ibas.emMessageAction): any {
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
        export function refreshModelChanged(managedObject: sap.ui.base.ManagedObject, data: ibas.IBindable): void;
        /** 监听模型变化，并刷新控件 */
        export function refreshModelChanged(managedObject: sap.ui.base.ManagedObject, data: ibas.IBindable[]): void;
        /** 监听模型变化，并刷新控件 */
        export function refreshModelChanged(): void {
            let managedObject: sap.ui.base.ManagedObject, data: ibas.IBindable[];
            managedObject = arguments[0];
            data = arguments[1];
            if (ibas.objects.isNull(managedObject) || ibas.objects.isNull(data)) {
                return;
            }
            let datas: Array<ibas.IBindable> = [];
            if (data instanceof Array) {
                datas = data;
            } else {
                datas.push(data);
            }
            for (let item of datas) {
                if (item.registerListener !== undefined) {
                    item.registerListener({
                        id: managedObject.getId(),
                        propertyChanged(property: string): void {
                            let model: sap.ui.model.Model = managedObject.getModel(undefined);
                            if (!ibas.objects.isNull(model)) {
                                model.refresh(false);
                            }
                            validateControlBoundProperty(managedObject);
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
            if (trigger.listener instanceof (sap.m.List)) {
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
                                if (data !== undefined && data !== null) {
                                    let modelData: any = data.rows; // 与绑定对象的路径有关
                                    let dataCount: number = modelData.length;
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
                                let lastPageCount: number = dataCount % visibleRow; // 最后一页行数
                                if ((lastPageCount > 0 && firstRow === (dataCount - lastPageCount))
                                    || (lastPageCount === 0 && firstRow === (dataCount - visibleRow))) {
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
            }
        }
        /** 改变窗体内控件编辑状态 */
        export function changeFormEditable(form: sap.ui.layout.form.SimpleForm, editable: boolean): void;
        /** 改变窗体内控件编辑状态 */
        export function changeFormEditable(form: sap.ui.layout.VerticalLayout, editable: boolean): void;
        /** 改变窗体内控件编辑状态 */
        export function changeFormEditable(form: sap.m.Page, editable: boolean): void;
        /** 改变窗体内控件编辑状态 */
        export function changeFormEditable(): void {
            let form: any = arguments[0];
            if (ibas.objects.isNull(form)) {
                return;
            }
            let editable: boolean = arguments[1];
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
            if (chooseType === ibas.emChooseType.SINGLE) {
                if (!ibas.objects.isNull(table) && ibas.objects.instanceOf(table, sap.ui.table.Table)) {
                    table.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                    table.attachRowSelectionChange(function (oEvent: any): void {
                        this.setSelectedIndex(this.getSelectedIndex());
                    });
                }
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
         * 验证控件绑定属性是否合法
         * @param managedObjects
         */
        export function validateControlBoundProperty(managedObjects: sap.ui.base.ManagedObject[]): datatype.ValidateResult;
        /**
         * 验证控件绑定属性是否合法
         * @param managedObject
         */
        export function validateControlBoundProperty(managedObject: sap.ui.base.ManagedObject): datatype.ValidateResult;
        /**
         * 验证控件绑定属性是否合法
         */
        export function validateControlBoundProperty(): datatype.ValidateResult {
            function traverseContents(managedObject: sap.ui.base.ManagedObject): sap.ui.base.ManagedObject[];
            function traverseContents(managedObject: sap.ui.base.ManagedObject): sap.ui.base.ManagedObject;
            /** 遍历展开控件内容 */
            function traverseContents(): any {
                let managedObject: any = arguments[0];
                let managedObjects: sap.ui.base.ManagedObject[] = [];
                if (ibas.objects.isNull(managedObject)) {
                    return null;
                }
                if (managedObject instanceof sap.m.Panel) {
                    managedObjects.push(managedObject.getHeaderToolbar());
                }
                if (managedObject.getContent instanceof Function) {
                    for (let content of managedObject.getContent().reverse()) {
                        managedObjects.push(content);
                    }
                } else if (managedObject instanceof sap.ui.table.Table) {
                    for (let row of managedObject.getRows().reverse()) {
                        for (let cell of row.getCells()) {
                            managedObjects.push(cell);
                        }
                    }
                } else if (managedObject instanceof sap.m.Wizard) {
                    for (let step of managedObject.getSteps().reverse()) {
                        managedObjects.push(step);
                    }
                } else if (managedObject instanceof sap.m.ListBase) {
                    for (let listItem of managedObject.getItems().reverse()) {
                        managedObjects.push(listItem);
                    }
                } else if (managedObject instanceof sap.m.ColumnListItem) {
                    for (let cell of managedObject.getCells().reverse()) {
                        managedObjects.push(cell);
                    }
                } else if (managedObject instanceof sap.m.FlexBox) {
                    for (let item of managedObject.getItems().reverse()) {
                        managedObjects.push(item);
                    }
                } else {
                    return managedObject;
                }
                return managedObjects;
            }
            /** 获取控件验证值 */
            function getValidationValue(managedObject: sap.ui.base.ManagedObject): any {
                if (managedObject instanceof sap.m.InputBase || managedObject instanceof sap.m.DatePicker) {
                    return managedObject.getValue();
                }
                if (managedObject instanceof sap.m.Select) {
                    return managedObject.getSelectedKey();
                }
                if (managedObject instanceof sap.m.DateRangeSelection || managedObject instanceof sap.m.TimePicker) {
                    return managedObject.getDateValue();
                }
                return null;
            }
            /** 检查控件验证类型 */
            function checkControlBindingInfoType(managedObject: sap.ui.base.ManagedObject): datatype.DataType {
                let bindingInfo: any = null;
                if (!!managedObject && typeof managedObject.getBindingContext === "function") {
                    /** 控件当前有绑定内容才判断绑定类型 */
                    if (!!managedObject.getBindingContext()) {
                        /** 获取值类型,根据不同控件的绑定值添加 */
                        let bindingTypes: Array<string> = ["value", "dateValue", "secondDateValue", "selectedKey"];
                        for (let type of bindingTypes) {
                            let info: any = managedObject.getBindingInfo(type);
                            if (!!info && !!info.type && info.type.validate instanceof Function) {
                                bindingInfo = info;
                                break;
                            }
                        }
                    }
                }
                return !!bindingInfo ? bindingInfo.type : null;
            }
            let validateResult: datatype.ValidateResult = new datatype.ValidateResult();
            validateResult.status = true;
            let argument: any = arguments[0];
            let managedObjects: sap.ui.base.ManagedObject[] = [];
            if (ibas.objects.isNull(argument)) {
                return validateResult;
            }
            if (argument instanceof Array) {
                managedObjects = argument;
            } else {
                managedObjects = [argument];
            }
            for (let managedObject of managedObjects) {
                let content: any = traverseContents(managedObject);
                if (ibas.objects.isNull(content)) {
                } else if (content instanceof Array) {
                    let stepResult: datatype.ValidateResult = validateControlBoundProperty(content);
                    if (!stepResult.status) {
                        validateResult.message = stepResult.message;
                        validateResult.status = stepResult.status;
                    }
                } else {
                    let bindingInfoType: datatype.DataType = checkControlBindingInfoType(content);
                    if (!!bindingInfoType) {
                        let validationValue: any = getValidationValue(content);  // 界面值
                        validationValue = bindingInfoType.parseValue(validationValue); // 转为BO中属性值
                        let vResult: datatype.ValidateResult = bindingInfoType.validate(validationValue, managedObject);
                        if (!vResult.status) {
                            validateResult.message = vResult.message;
                            validateResult.status = vResult.status;
                            bindingInfoType.fireValidationError(managedObject, validateResult.message);
                        } else {
                            if (managedObject instanceof sap.ui.core.Element) {
                                sap.ui.getCore().fireValidationSuccess({
                                    element: managedObject
                                });
                            }
                        }
                    }
                }
            }
            return validateResult;
        }
        /**
         * 桌面消息参数
         */
        export interface INotificationOptions {
            /* 提示主体内容。字符串。会在标题的下面显示 */
            body: string;
            /* 标题 */
            title?: string;
            /* 默认值是auto, 可以是ltr或rtl，有点类似direction属性。表示提示主体内容的水平书写顺序 */
            dir?: NotificationDirection;
            /* 字符串。通知面板左侧那个图标地址 */
            icon?: string;
            /* 提示的语言 */
            lang?: string;
            /* 字符串。标记当前通知的标签 */
            tag?: string;
            /* 自动关闭通知时间（秒） */
            autoCloseTime?: number;
            /* 点击通知事件 */
            onClick?: (oEvent?: Event) => any;
            /* 关闭通知后触发事件 */
            onClose?: (oEvent?: Event) => any;
            /* 通知出错后触发事件 */
            onError?: (oEvent?: Event) => any;
            /* 通知显示后触发事件 */
            onShow?: (oEvent?: Event) => any;
        }
        /**
         * 发送桌面通知
         */
        export function sendDesktopNotification(notificationOptions: INotificationOptions): void {
            let isNotificationSupported: Function = function (): boolean {
                return !!Notification;
            };
            if (!isNotificationSupported) {
                console.log(ibas.i18n.prop("ui5_utils_desktop_notification_not_supported", ""));
                return;
            }
            Notification.requestPermission(function (permission: NotificationPermission): void {
                // 在回掉函数中判断用户的选择,在这里不用为“拒绝”选项编写代码，因为既然拒绝，就什么都不做了，也不用为默认状态编写代码，因为既然已经弹出让用户选择的选项了，就没有所谓的默认状态了。所以只需要处理用户允许的状态就可以了
                if (permission === "granted") {
                    if (!notificationOptions.lang) {
                        notificationOptions.lang = "utf-8";
                    }
                    if (!notificationOptions.icon) {
                        notificationOptions.lang = "sap-icon://customer";
                    }
                    if (!notificationOptions.dir) {
                        notificationOptions.lang = "auto";
                    }
                    if (!notificationOptions.title) {
                        notificationOptions.title = ibas.i18n.prop("ui5_utils_desktop_notification_title", "");
                    }
                    let notification: Notification = new Notification(notificationOptions.title, {
                        lang: notificationOptions.lang,
                        icon: notificationOptions.icon,
                        body: notificationOptions.body,
                        tag: notificationOptions.tag,
                        dir: notificationOptions.dir,
                    });
                    // 自动关闭
                    if (notificationOptions.autoCloseTime > 0) {
                        setTimeout(function (): void {
                            notification.close();
                        }, notificationOptions.autoCloseTime * 1000);
                    }
                    notification.onclick = notificationOptions.onClick;
                    notification.onclose = notificationOptions.onClose;
                    notification.onshow = notificationOptions.onShow;
                    notification.onerror = function (oEvent?: Event): any {
                        ibas.logger.log(ibas.i18n.prop("ui5_utils_desktop_notification_send_error", ""));
                        if (!!notificationOptions.onError) {
                            notificationOptions.onError(oEvent);
                        }
                    };
                }
            });
        }
    }
}