/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../src/3rdparty/jquery.d.ts" />

import * as bobas from '../../../src/bobas/bobas';
// 测试读取资源文件
console.log(bobas.i18n.prop("msg_hello_world"));
bobas.i18n.load(".../test/resources/languages/test.zh_CN.json");
console.log(bobas.i18n.prop("msg_hello_world"));
// 测试日志
bobas.logger.log(bobas.emMessageLevel.FATAL, "a fatal error", "test");
bobas.logger.log(bobas.emMessageLevel.ERROR, "a error", "test");
bobas.logger.log(bobas.emMessageLevel.WARN, "a warning", "test");
bobas.logger.log(bobas.emMessageLevel.DEBUG, "a debug", "test");
bobas.logger.log(bobas.emMessageLevel.INFO, "a information", "test");
let message = new bobas.Message();
message.level = bobas.emMessageLevel.WARN;
message.content = "a object message";
bobas.logger.log(message);
// 测试字符串操作
console.log(bobas.string.format("I'm {0}.", 100));
console.log(bobas.string.format("I'm {0}.", { "name": "jack" }));
console.log(bobas.string.format("I'm {0}.", "niuren.zhu"));
console.log(bobas.string.format("I'm {0} and good at {1}.", "niuren.zhu", "coding"));
console.log(bobas.string.format("I'm {0} and good at {1}.", "niuren.zhu", "coding", "some one"));
console.log(bobas.string.format("I'm {0}.", "niuren.zhu", "coding", "some one"));
console.log(bobas.string.format("I'm {2}.", "niuren.zhu", "coding", "some one"));
bobas.assert.equals("string.count faild.", bobas.string.count("I'm niuren.zhu.", "zhu"), 1);
bobas.assert.equals("string.count faild.", bobas.string.count("I'm niuren.zhu.", "."), 2);
// 测试配置项
console.log(bobas.string.format("debug enabled is {0}", bobas.config.get(bobas.config.CONFIG_ITEM_DEBUG_MODE, false)));
// 测试jquery
var JQryAjxSetting: JQueryAjaxSettings = {
    url: "http://localhost:8080/demo/services/jersey/hello",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    //dataType: "json",
    async: true,
    error: function (xhr, status, error) {
        console.log(error);
    },
    success: function () {
        console.log("success");
    },
};
jQuery.ajax(JQryAjxSetting);

