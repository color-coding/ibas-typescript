/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { string, emMessageLevel } from "../data/index";
import { config } from "../configuration/index";
import { IMessage } from "./Message.d";
import { Message } from "./Message";
import { ILogger } from "./Logger.d";

/**
 * 运行消息记录
 */
export class Logger implements ILogger {

    private _level: emMessageLevel;
    /**
     * 消息输出的级别
     */
    get level(): emMessageLevel {
        if (string.isEmpty(this._level)) {
            // 没有设置则每次都从配置取
            let level = config.get(config.CONFIG_ITEM_MESSAGES_LEVEL, emMessageLevel.ERROR, emMessageLevel);
            if (config.get(config.CONFIG_ITEM_DEBUG_MODE, false)) {
                level = emMessageLevel.DEBUG;
            }
            return level;
        }
        return this._level;
    }
    set language(value: emMessageLevel) {
        this._level = value;
    }

    /**
     * 记录消息
     * @param message
     */
    log(message: IMessage): void;
    /**
     * 记录消息
     * @param level 消息级别
     * @param message 内容
     */
    log(level: emMessageLevel, message: string): void;
    /**
     * 记录消息
     * @param level 消息级别
     * @param format 消息格式
     * @param pars 格式内容
     */
    log(level: emMessageLevel, format: string, ...pars: any[]): void;
    /**
     * 记录消息
     * @param message 内容
     */
    log(format: string): void;
    /**
     * 记录消息
     * @param message 内容
     * @param pars 格式内容
     */
    log(format: string, ...pars: any[]): void;
    /**
     * 记录消息
     * @param msgPars 消息参数
     */
    log(...msgPars: any[]): void {
        // edge不开启调试模式,不能输出消息
        if ((<any>window).Debug !== undefined && (<any>window).Debug !== null) {
            if ((<any>window).Debug.debuggerEnabled !== true) {
                return;
            }
        }
        let message: Message;
        let useCount: number = 0;// 使用的参数
        if (msgPars[0] instanceof Message) {
            message = msgPars[0];
            useCount++;
        } else if (typeof (msgPars[0]) === "number") {
            message = new Message();
            message.level = msgPars[0];
            useCount++;
            message.content = msgPars[1];
            useCount++;
        } else if (typeof (msgPars[0]) === "string") {
            message = new Message();
            message.content = msgPars[0];
            useCount++;
        } else {
            throw new Error("invalid parameters.");
        }
        // 如果参数未用完，则认为是模板输出的字符串
        if (msgPars.length > useCount) {
            message.content = string.format(message.content, msgPars.slice(useCount, msgPars.length));
        }
        if (this.level < message.level) {
            // 超过日志输出的级别
            return;
        }
        // 根据消息级别，定义使用的输出方法
        let putter: any;
        if (message.level === emMessageLevel.ERROR) {
            putter = console.error;
        } else if (message.level === emMessageLevel.FATAL) {
            putter = console.error;
        } else if (message.level === emMessageLevel.WARN) {
            putter = console.warn;
        } else if (message.level === emMessageLevel.DEBUG) {
            putter = console.debug;
        }
        if (putter === undefined || putter === null) {
            putter = console.log;
        }
        putter(message.outString());
    }

}