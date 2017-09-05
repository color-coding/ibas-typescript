/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

; (function (root, factory) {
    if (typeof exports === "object") {
        // CommonJS
        module.exports = exports = factory();
    }
    else if (typeof define === "function" && define.amd) {
        // AMD
        define([], factory);
    }
    else {
        // Global (browser)
        root.OpenUI5 = factory();
    }
}(this, function () {
    var OPENUI5_OFFICIAL_URL = "https://openui5.hana.ondemand.com/resources/sap-ui-core.js";
    // 构造
    var OpenUI5 = function () { };
    // 加载库
    OpenUI5.prototype.load = function () {
        var root, callBack;
        if (typeof arguments[0] === "string") {
            root = arguments[0];
        } else if (typeof arguments[0] === "function") {
            callBack = arguments[0];
        }
        if (typeof arguments[1] === "function") {
            callBack = arguments[1];
        }
        if (root === undefined || root === null) {
            root = "";
        }
        // 解决方法缺失
        if (typeof String.prototype.startsWith != 'function') {
            String.prototype.startsWith = function (prefix) {
                return this.slice(0, prefix.length) === prefix;
            };
        }
        if (typeof String.prototype.endsWith != 'function') {
            String.prototype.endsWith = function (suffix) {
                return this.indexOf(suffix, this.length - suffix.length) !== -1;
            };
        }
        if (!root.endsWith("/resources/sap-ui-core.js")) {
            // 没有提供根目录，则判断加载本地还是远程
            if ($ === undefined || $ === null) {
                throw new Error("please import jquery first.");
            }
            if (!root.endsWith("/")) {
                root = root + "/";
            }
            var that = this;
            $.ajax({
                type: 'GET',
                url: root + "./resources/sap-ui-version.json",
                success: function () {
                    // 本地库存在，则加载本地
                    that.load(root + "./resources/sap-ui-core.js", callBack);
                },
                error: function () {
                    // 本地库不存在，则加载远程
                    that.load(OPENUI5_OFFICIAL_URL, callBack);
                }
            });
        } else {
            // 加载opopenui5库
            var domScript = document.createElement('script');
            domScript.src = root;
            domScript.setAttribute("id", "sap-ui-bootstrap");
            domScript.setAttribute("data-sap-ui-bindingSyntax", "complex");
            domScript.setAttribute("data-sap-ui-theme", "sap_belize");
            domScript.setAttribute("data-sap-ui-libs", "sap.m, sap.ui.layout, sap.tnt, sap.uxap ,sap.ui.table");
            domScript.setAttribute("data-sap-ui-preload", "async"); // 异步加载预加载库
            domScript.onload = domScript.onreadystatechange = function () {
                if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                    // openui5初始化完成，
                    sap.ui.getCore().attachInit(callBack);
                }
            }
            document.getElementsByTagName('head')[0].appendChild(domScript);
        }
    }
    return OpenUI5;
}));