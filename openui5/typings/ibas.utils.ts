// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./sap.ui.d.ts" />
/// <reference path="../../ibas/index.ts" />
import {
    i18n, string, object, List, ArrayList, emMessageAction, emMessageType,
    enums
} from "ibas/index";

export namespace utils {
    export function createComboBoxItems(data: any): sap.ui.core.Item[] {
        // 首先获取枚举内容
        let map = new Map<string, string>();
        for (let item in data) {
            if (object.isNull(item)) {
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
                text: enums.describe(data, item[1])
            }));
        }
        return items;
    }
    /** 获取表格选中的对象 */
    export function resizeTable<T>(table: sap.ui.table.Table): void {
        if (object.isNull(table)) {
            return;
        }
        for (let i: number = 1; i < table.getColumns().length; i++) {

        }
    }
    /** 获取表格选中的对象 */
    export function getTableSelecteds<T>(table: sap.ui.table.Table): List<T> {
        let selecteds: List<T> = new ArrayList<T>();
        var idxs: any[] = table.getSelectedIndices();
        if (idxs.length > 0) {
            for (var i = 0; i < idxs.length; i++) {
                selecteds.push(table.getContextByIndex(idxs[i]).getObject());
            }
        }
        return selecteds;
    }
    /** 回转消息框值 */
    export function toMessageAction(data: any): emMessageAction {
        switch (data) {
            case sap.m.MessageBox.Action.ABORT:
                return emMessageAction.ABORT;
            case sap.m.MessageBox.Action.CANCEL:
                return emMessageAction.CANCEL;
            case sap.m.MessageBox.Action.CLOSE:
                return emMessageAction.CLOSE;
            case sap.m.MessageBox.Action.DELETE:
                return emMessageAction.DELETE;
            case sap.m.MessageBox.Action.IGNORE:
                return emMessageAction.IGNORE;
            case sap.m.MessageBox.Action.NO:
                return emMessageAction.NO;
            case sap.m.MessageBox.Action.RETRY:
                return emMessageAction.RETRY;
            case sap.m.MessageBox.Action.YES:
                return emMessageAction.YES;
            default:
                return emMessageAction.OK;
        }
    }
    /** 转换消息框动作值 */
    export function toMessageBoxAction(data: emMessageAction): any;
    /** 转换消息框动作值 */
    export function toMessageBoxAction(datas: emMessageAction[]): any;
    /** 转换消息框动作值 */
    export function toMessageBoxAction(): any {
        let data: any = arguments[0];
        if (object.isNull(data)) {
            return undefined;
        }
        var toValue: Function = function (data: emMessageAction): any {
            switch (data) {
                case emMessageAction.ABORT:
                    return sap.m.MessageBox.Action.ABORT;
                case emMessageAction.CANCEL:
                    return sap.m.MessageBox.Action.CANCEL;
                case emMessageAction.CLOSE:
                    return sap.m.MessageBox.Action.CLOSE;
                case emMessageAction.DELETE:
                    return sap.m.MessageBox.Action.DELETE;
                case emMessageAction.IGNORE:
                    return sap.m.MessageBox.Action.IGNORE;
                case emMessageAction.NO:
                    return sap.m.MessageBox.Action.NO;
                case emMessageAction.RETRY:
                    return sap.m.MessageBox.Action.RETRY;
                case emMessageAction.YES:
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
    export function toMessageBoxIcon(data: emMessageType): any {
        switch (data) {
            case emMessageType.ERROR:
                return sap.m.MessageBox.Icon.ERROR;
            case emMessageType.INFORMATION:
                return sap.m.MessageBox.Icon.INFORMATION;
            case emMessageType.QUESTION:
                return sap.m.MessageBox.Icon.QUESTION;
            case emMessageType.SUCCESS:
                return sap.m.MessageBox.Icon.SUCCESS;
            case emMessageType.WARNING:
                return sap.m.MessageBox.Icon.WARNING;
            default:
                return sap.m.MessageBox.Icon.NONE;
        }
    }
}
