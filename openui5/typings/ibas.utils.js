define(["require", "exports", "../../ibas/bobas/index"], function (require, exports, index_1) {
    "use strict";
    var utils;
    (function (utils) {
        function createComboBoxItems(data) {
            let map = new Map();
            for (let item in data) {
                if (index_1.object.isNull(item)) {
                    continue;
                }
                let key = item;
                let text = data[key];
                if (typeof item !== "string" || typeof text !== "string") {
                    continue;
                }
                if (map.has(text)) {
                    continue;
                }
                map.set(key, text);
            }
            let items = new Array();
            for (let item of map) {
                let key = item[0];
                let text = item[1];
                let tmp = index_1.i18n.prop(index_1.string.format("data_{0}_{1}", data.constructor.name, key));
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
        utils.createComboBoxItems = createComboBoxItems;
    })(utils = exports.utils || (exports.utils = {}));
});
