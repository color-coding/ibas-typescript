/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../ibas/index.d.ts" />

// 测试唯一标记uuid
console.log(ibas.uuids.random());
// 测试配置项
console.log(ibas.strings.format("debug enabled is {0}",
    ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)));
console.log(ibas.strings.format("message level is {0}",
    ibas.config.get(ibas.CONFIG_ITEM_MESSAGES_LEVEL, ibas.emMessageLevel.FATAL, ibas.emMessageLevel)));
// 测试读取资源文件
console.log(ibas.i18n.prop("sys_hello_world"));
ibas.i18n.load(ibas.urls.rootUrl(undefined) + "/../resources/languages/test.json");
console.log(ibas.i18n.prop("sys_hello_world"));
// 测试日志
ibas.logger.log(ibas.emMessageLevel.FATAL, "a fatal error", "test");
ibas.logger.log(ibas.emMessageLevel.ERROR, "a error", "test");
ibas.logger.log(ibas.emMessageLevel.WARN, "a warning", "test");
ibas.logger.log(ibas.emMessageLevel.DEBUG, "a debug", "test");
ibas.logger.log(ibas.emMessageLevel.INFO, "a information", "test");
let message: ibas.Message = new ibas.Message();
message.level = ibas.emMessageLevel.WARN;
message.content = "a object message";
ibas.logger.log(message);
// 枚举值操作
console.log(ibas.strings.format("Enum string {0}.", ibas.emMessageLevel[ibas.emMessageLevel.DEBUG]));
let eValue: number = ibas.enums.valueOf(ibas.emYesNo, "yes");
ibas.assert.equals("converter parsingEnums faild.", ibas.emYesNo.YES, eValue);
eValue = ibas.enums.valueOf(ibas.emConditionOperation, "NOT_EQUAL");
ibas.assert.equals("converter parsingEnums faild.", ibas.emConditionOperation.NOT_EQUAL, eValue);
// 测试日期类型
let dValue: Date = ibas.dates.valueOf("2017-03-14'T'23:59:59");
ibas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
dValue = ibas.dates.valueOf("2017/3/14'T'23:59:59");
ibas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
dValue = ibas.dates.valueOf("2017/3/14");
ibas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 2, 14));
dValue = ibas.dates.valueOf("2017-3-14");
ibas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 2, 14));
let sValue: string = ibas.dates.toString(new Date(2017, 2, 14, 23, 59, 59));
ibas.assert.equals("converter convertDate faild.", sValue, "2017-03-14T23:59:59");
dValue = ibas.dates.valueOf("2017/3/14T23:59:59");
ibas.assert.equals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
// 测试字符串操作
console.log(ibas.strings.format("I'm {0}.", 100));
console.log(ibas.strings.format("I'm {0}.", { "name": "jack" }));
console.log(ibas.strings.format("I'm {0}.", "niuren.zhu"));
console.log(ibas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding"));
console.log(ibas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding", "some one"));
console.log(ibas.strings.format("I'm {0}.", "niuren.zhu", "coding", "some one"));
console.log(ibas.strings.format("I'm {2}.", "niuren.zhu", "coding", "some one"));
ibas.assert.equals("string.count faild.", ibas.strings.count("I'm niuren.zhu.", "zhu"), 1);
ibas.assert.equals("string.count faild.", ibas.strings.count("I'm niuren.zhu.", "."), 2);
// 测试地址处理
ibas.assert.equals("string.count faild.", ibas.urls.normalize(".../test/util/.././../testUtil.html"), document.location.href);
// 测试字符串构造器
let builder: ibas.StringBuilder = new ibas.StringBuilder();
builder.append("I");
builder.append("'");
builder.append("m");
builder.append(" ");
builder.append(ibas.strings.format("{1}.{0}", "zhu", "niuren"));
builder.append(".");
console.log(builder.toString());
// 测试文件仓库
let fileRepository: ibas.FileRepositoryAjax = new ibas.FileRepositoryAjax();
fileRepository.address = ibas.urls.rootUrl(undefined) + "/../../repository";
fileRepository.load("salesorders.json", {
    onCompleted(opRslt: ibas.IOperationResult<any>): void {
        console.log(opRslt.message);
    }
});
// 测试动作
class TestAction extends ibas.Action {
    constructor() {
        super();
        this.id = ibas.uuids.random();
        //  this.name = TestAction.name;
    }
    protected run(): boolean {
        this.log(ibas.emMessageLevel.WARN, "I'm Niuren.Zhu.");
        return true;
    }
}
let action: TestAction = new TestAction();
action.do();