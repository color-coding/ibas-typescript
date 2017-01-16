import * as bobas from '../../../src/bobas/bobas';


// 测试日志
bobas.logger.log(bobas.emMessageLevel.FATAL,"a fatal error","test");
bobas.logger.log(bobas.emMessageLevel.ERROR, "a error", "test");
bobas.logger.log(bobas.emMessageLevel.WARN, "a warning", "test");
bobas.logger.log(bobas.emMessageLevel.DEBUG, "a debug", "test");
bobas.logger.log(bobas.emMessageLevel.INFO, "a information", "test");
let message = new bobas.Message();
message.level = bobas.emMessageLevel.WARN;
message.content = "a object message";
bobas.logger.log(message);


