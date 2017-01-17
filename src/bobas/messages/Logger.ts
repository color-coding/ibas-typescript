import * as msg from './Message';
import { string } from '../data/Data';
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
     * @param level 消息级别
     * @param format 消息格式
     * @param pars 格式内容
     */
    log(level: msg.emMessageLevel, format: string, ...pars: any[]);
    /**
     * 记录消息
     * @param message 内容
     */
    log(format: string);
    /**
     * 记录消息
     * @param message 内容
     * @param pars 格式内容
     */
    log(format: string, ...pars: any[]);
    /**
     * 记录消息
     * @param msgPars 消息参数
     */
    log(...msgPars: any[]) {
        let message: msg.Message;
        let useCount: number = 0;// 使用的参数
        if (msgPars[0] instanceof msg.Message) {
            message = msgPars[0];
            useCount++;
        } else if (typeof (msgPars[0]) == "number") {
            message = new msg.Message();
            message.level = msgPars[0];
            useCount++;
            message.content = msgPars[1];
            useCount++;
        } else if (typeof (msgPars[0]) == "string") {
            message = new msg.Message();
            message.content = msgPars[0];
            useCount++;
        } else {
            throw new Error("invalid parameters.");
        }
        // 如果参数未用完，则认为是模板输出的字符串
        if (msgPars.length > useCount) {
            message.content = string.format(message.content, msgPars.slice(useCount, msgPars.length));
        }
        // 根据消息级别，定义使用的输出方法
        let putter: any;
        if (message.level == msg.emMessageLevel.ERROR) {
            putter = console.error;
        } else if (message.level == msg.emMessageLevel.FATAL) {
            putter = console.error;
        } else if (message.level == msg.emMessageLevel.WARN) {
            putter = console.warn;
        } else if (message.level == msg.emMessageLevel.DEBUG) {
            putter = console.debug;
        } else {
            putter = console.log;
        }
        putter(message.outString());
    }

}