/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    export class TestLogger extends ibas.TestCase {

        testLogger(): void {
            // 测试唯一标记uuid
            console.log(ibas.uuids.random());
            // 测试配置项
            console.log(ibas.strings.format("debug enabled is {0}",
                ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE, false)));
            console.log(ibas.strings.format("message level is {0}",
                ibas.config.get(ibas.CONFIG_ITEM_MESSAGES_LEVEL, ibas.emMessageLevel.FATAL, ibas.emMessageLevel)));
            // 测试读取资源文件
            console.log(ibas.i18n.prop("sys_hello_world"));
            ibas.i18n.load(ibas.urls.rootUrl() + "/resources/languages/test.json");
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
        }
    }
}