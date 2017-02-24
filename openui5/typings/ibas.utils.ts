// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./sap.ui.d.ts" />
import { i18n, string, object, List, ArrayList } from "../../ibas/bobas/index";

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
            let text: any = item[1];
            // 存在语言资源则使用
            let tmp = i18n.prop(string.format("data_{0}_{1}", data.constructor.name, key));
            if (!tmp.startsWith("[") && !tmp.endsWith("]")) {
                text = tmp;
            }
            items.push(new sap.ui.core.Item("", {
                key: key,
                text: text
            }));
        }
        return items;
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
}
