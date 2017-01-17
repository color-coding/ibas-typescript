/// <reference path="../../../src/3rdparty/jquery.d.ts" />

import * as bobas from '../../../src/bobas/bobas';

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
// 测试jquery
var JQryAjxSetting: JQueryAjaxSettings = {
    //url: "http://localhost:8080/demo/services/jersey/hello",
    url: "./testUtil.html",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    //dataType: "json",
    async: true,
    error: function (xhr, status, error) {
        alert(error);
    },
    success: function () {
        alert("success");
    },
};
jQuery.ajax(JQryAjxSetting);
