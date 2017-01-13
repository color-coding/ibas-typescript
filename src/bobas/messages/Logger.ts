import * as msg from './Message';

/**
* 运行消息记录
*/
export class Logger {
    /**
     * 记录消息
     * @param message
     */
    log(message: msg.IMessage);
    /**
     * 记录消息
     * @param level 消息级别
     * @param message 内容
     */
    log(level: msg.emMessageLevel, message: string);
    /**
     * 记录消息
     * @param msgPars 消息参数
     */
    log(msgPars: any) {
        console.debug("fucker...");
    }

}