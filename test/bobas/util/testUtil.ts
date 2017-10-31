/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../../../ibas/3rdparty/index.d.ts" />
import * as bobas from "../../../ibas/bobas/index";

// 测试唯一标记uuid
console.log(bobas.uuids.random());
// 测试配置项
console.log(bobas.strings.format("debug enabled is {0}",
    bobas.config.get(bobas.CONFIG_ITEM_DEBUG_MODE, false)));
console.log(bobas.strings.format("message level is {0}",
    bobas.config.get(bobas.CONFIG_ITEM_MESSAGES_LEVEL, bobas.emMessageLevel.FATAL, bobas.emMessageLevel)));
// 测试读取资源文件
console.log(bobas.i18n.prop("sys_hello_world"));
bobas.i18n.load(bobas.urls.rootUrl(undefined) + "/../resources/languages/test.zh_CN.json");
console.log(bobas.i18n.prop("sys_hello_world"));
// 测试日志
bobas.logger.log(bobas.emMessageLevel.FATAL, "a fatal error", "test");
bobas.logger.log(bobas.emMessageLevel.ERROR, "a error", "test");
bobas.logger.log(bobas.emMessageLevel.WARN, "a warning", "test");
bobas.logger.log(bobas.emMessageLevel.DEBUG, "a debug", "test");
bobas.logger.log(bobas.emMessageLevel.INFO, "a information", "test");
let message: bobas.Message = new bobas.Message();
message.level = bobas.emMessageLevel.WARN;
message.content = "a object message";
bobas.logger.log(message);
// 枚举值操作
console.log(bobas.strings.format("Enum string {0}.", bobas.emMessageLevel[bobas.emMessageLevel.DEBUG]));
let eValue: number = bobas.enums.valueOf(bobas.emYesNo, "yes");
bobas.assert.equals("converter parsingEnums faild.", bobas.emYesNo.YES, eValue);
eValue = bobas.enums.valueOf(bobas.emConditionOperation, "NOT_EQUAL");
bobas.assert.equals("converter parsingEnums faild.", bobas.emConditionOperation.NOT_EQUAL, eValue);
// 测试日期类型
let dValue: Date = bobas.dates.valueOf("2017-03-14'T'23:59:59");
bobas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 3, 14, 23, 59, 59));
dValue = bobas.dates.valueOf("2017/3/14'T'23:59:59");
bobas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 3, 14, 23, 59, 59));
dValue = bobas.dates.valueOf("2017/3/14");
bobas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 3, 14));
dValue = bobas.dates.valueOf("2017-3-14");
bobas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 3, 14));
let sValue: string = bobas.dates.toString(new Date(2017, 3, 14, 23, 59, 59));
bobas.assert.equals("converter convertDate faild.", sValue, "2017-3-14T23:59:59");
dValue = bobas.dates.valueOf("2017/3/14T23:59:59");
bobas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 3, 14, 23, 59, 59))
// 测试字符串操作
console.log(bobas.strings.format("I'm {0}.", 100));
console.log(bobas.strings.format("I'm {0}.", { "name": "jack" }));
console.log(bobas.strings.format("I'm {0}.", "niuren.zhu"));
console.log(bobas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding"));
console.log(bobas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding", "some one"));
console.log(bobas.strings.format("I'm {0}.", "niuren.zhu", "coding", "some one"));
console.log(bobas.strings.format("I'm {2}.", "niuren.zhu", "coding", "some one"));
bobas.assert.equals("string.count faild.", bobas.strings.count("I'm niuren.zhu.", "zhu"), 1);
bobas.assert.equals("string.count faild.", bobas.strings.count("I'm niuren.zhu.", "."), 2);
// 测试地址处理
bobas.assert.equals("string.count faild.", bobas.urls.normalize(".../test/util/.././../testUtil.html"), document.location.href);
// 测试字符串构造器
let builder: bobas.StringBuilder = new bobas.StringBuilder();
builder.append("I");
builder.append("'");
builder.append("m");
builder.append(" ");
builder.appendFormat("{1}.{0}", "zhu", "niuren");
builder.append(".");
console.log(builder.toString());
// 测试文件仓库
let fileRepository: bobas.FileRepositoryAjax = new bobas.FileRepositoryAjax();
fileRepository.address = bobas.urls.rootUrl(undefined) + "/../../repository";
fileRepository.load("salesorders.json", {
    onCompleted(opRslt: bobas.IOperationResult<any>): void {
        console.log(opRslt.message);
    }
});
