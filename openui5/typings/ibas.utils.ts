/**
 * Type definitions for OpenUI5 1.40
 * Project: http://openui5.org/
 * Definitions by: niuren.zhu <niuren.zhu@icloud.com>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

/// <reference path="./index.d.ts" />
/// <reference path="../../ibas/index.ts" />
import * as ibas from "ibas/index";

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
            map.set("", ibas.i18n.prop("sys_shell_please_chooose_data", ""));
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
    export function getSelecteds<T>(container: sap.m.List | sap.ui.table.Table): ibas.List<T> {
        let selecteds: ibas.List<T> = new ibas.ArrayList<T>();
        if (container instanceof (sap.m.List)) {
            let Contexts: any[] = container.getSelectedContexts(undefined);
            if (Contexts.length > 0) {
                for (let i: number = 0; i < Contexts.length; i++) {
                    selecteds.push(Contexts[i].getObject());
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
    export function getTableSelecteds<T>(table: sap.ui.table.Table): ibas.List<T> {
        let selecteds: ibas.List<T> = new ibas.ArrayList<T>();
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
                    }
                });
            }
        }
    }
    /** 结果集触发者 */
    export interface IResultsTrigger {
        /** 监听对象 */
        listener: sap.ui.table.Table | sap.m.List;
        /** 触发方法 */
        next(data: any): void;
    }
    /** 自动触发下一个结果集查询 */
    export function triggerNextResults(trigger: IResultsTrigger): void {
        // 离线模式下不支持
        if (ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false)) {
            return;
        }
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
                    if (!ibas.objects.isNull(data)) {
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
    export function toSelectionMode(data: ibas.emChooseType): any {
        switch (data) {
            case ibas.emChooseType.SINGLE:
                return sap.ui.table.SelectionMode.Single;
            case ibas.emChooseType.MULTIPLE:
                return sap.ui.table.SelectionMode.MultiToggle;
            default:
                return sap.ui.table.SelectionMode.None;
        }
    }
}