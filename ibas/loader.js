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
        root.ibas = factory();
    }
}(this, function () {
    "use strict"
    var ibas = function () { };
    var requireError = function (error) {
        alert("应用加载失败，请联系管理员或尝试使用其他浏览器。");
    };
    ibas.prototype.load = function () {
        var root, noCache, require;
        if (typeof arguments[0] === "string") {
            root = arguments[0];
        }
        if (root === undefined || root === null) {
            throw new Error("please provide root url.");
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
        if (!root.endsWith("/")) {
            root = root + "/";
        }
        root = root + "../";
        if (typeof arguments[1] === "boolean") {
            noCache = arguments[1];
        }
        // 加载ibas
        if (noCache) {
            // 不适用js缓存
            window.ibas = {
                runtime: (new Date()).getTime()
            };
            require = requirejs.config({
                baseUrl: root,
                urlArgs: function (id, url) {
                    return (url.indexOf('?') === -1 ? '?' : '&') + "_=" + window.ibas.runtime;
                }
            });
        } else {
            // 使用js缓存
            require = requirejs.config({
                baseUrl: root
            });
        }
        require(["ibas/index"], function (ibas) {
            // 加载成功，创建壳加载
            var sysRequire = ibas.requires.create({
                baseUrl: root,
                map: { "*": { "css": require.toUrl("./ibas/3rdparty/css.min.js") } }
            }, []);
            // 加载应用系统
            sysRequire(["ibas/bsbas/systems/index"], function () {
                // 加载成功
                var shellRequire = ibas.requires.create({
                    context: ibas.requires.naming("shell"),
                    baseUrl: root + "./ibas/shell/",
                    map: { "*": { "css": require.toUrl("./ibas/3rdparty/css.min.js") } },
                }, ["ibas/bsbas/systems"]);
                shellRequire(["index"], function (index) {
                }, requireError);
            }, requireError);
        }, requireError);
    };
    return ibas;
}));