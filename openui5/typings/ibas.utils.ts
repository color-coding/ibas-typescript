// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./sap.ui.d.ts" />
/// <reference path="../../ibas/index.ts" />
import * as ibas from "ibas/index";

export namespace utils {
    /**
     * 创建下拉框可选项
     * @param data 枚举类型
     */
    export function createComboBoxItems(data: any): sap.ui.core.Item[] {
        // 首先获取枚举内容
        let map = new Map<string, string>();
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
        // 转换枚举内容
        let items = new Array<sap.ui.core.Item>();
        for (let item of map) {
            let key: any = item[0];
            items.push(new sap.ui.core.Item("", {
                key: key,
                text: ibas.enums.describe(data, item[1])
            }));
        }
        return items;
    }
    /** 获取表格选中的对象 */
    export function getTableSelecteds<T>(table: sap.ui.table.Table): ibas.List<T> {
        let selecteds: ibas.List<T> = new ibas.ArrayList<T>();
        var idxs: any[] = table.getSelectedIndices();
        if (idxs.length > 0) {
            for (var i = 0; i < idxs.length; i++) {
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
        }
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
}
