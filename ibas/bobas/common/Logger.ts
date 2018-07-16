/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />
/// <reference path="./Configuration.ts" />

namespace ibas {
    /**
     * 消息记录员
     */
    export interface ILogger {
        /**
         * 消息输出的级别
         */
        level: emMessageLevel;
        /**
         * 记录消息
         * @param message
         */
        log(message: IMessage): void;
        /**
         * 记录消息
         * @param level 消息级别
         * @param message 消息格式
         * @param pars 格式内容
         */
        log(level: emMessageLevel, message: string, ...pars: any[]): void;
        /**
         * 记录消息
         * @param message 内容
         * @param pars 格式内容
         */
        log(message: string, ...pars: any[]): void;
    }

    /** 配置项目-消息输出级别 */
    export const CONFIG_ITEM_MESSAGES_LEVEL: string = "msgLevel";
    const PROPERTY_LEVEL: symbol = Symbol("level");
    /**
     * 运行消息记录
     */
    export class Logger implements ILogger {
        /**
         * 消息输出的级别
         */
        get level(): emMessageLevel {
            if (strings.isEmpty(this[PROPERTY_LEVEL])) {
                // 没有设置则每次都从配置取
                let level: emMessageLevel = config.get(CONFIG_ITEM_MESSAGES_LEVEL, emMessageLevel.ERROR, emMessageLevel);
                if (config.get(CONFIG_ITEM_DEBUG_MODE, false)) {
                    level = emMessageLevel.DEBUG;
                }
                return level;
            }
            return this[PROPERTY_LEVEL];
        }
        set level(value: emMessageLevel) {
            this[PROPERTY_LEVEL] = value;
        }
        /**
         * 记录消息
         * @param message
         */
        log(message: IMessage): void;
        /**
         * 记录消息
         * @param level 消息级别
         * @param message 消息格式
         * @param pars 格式内容
         */
        log(level: emMessageLevel, message: string, ...pars: any[]): void;
        /**
         * 记录消息
         * @param message 内容
         * @param pars 格式内容
         */
        log(message: string, ...pars: any[]): void;
        /**
         * 记录消息
         * @param msgPars 消息参数
         */
        log(): void {
            // edge不开启调试模式,不能输出消息
            if ((<any>window).Debug !== undefined && (<any>window).Debug !== null) {
                if ((<any>window).Debug.debuggerEnabled !== true) {
                    return;
                }
            }
            let message: Message;
            let useCount: number = 0;// 使用的参数
            if (arguments[0] instanceof Message) {
                message = arguments[0];
                useCount++;
            } else if (typeof (arguments[0]) === "number") {
                message = new Message();
                message.level = arguments[0];
                useCount++;
                message.content = arguments[1];
                useCount++;
            } else if (typeof (arguments[0]) === "string") {
                message = new Message();
                message.content = arguments[0];
                useCount++;
            } else {
                throw new Error("invalid parameters.");
            }
            // 如果参数未用完，则认为是模板输出的字符串
            if (arguments.length > useCount) {
                let tmpArgs: Array<any> = new Array();
                for (let index: number = useCount; index < arguments.length; index++) {
                    tmpArgs.push(arguments[index]);
                }
                message.content = strings.format(message.content, tmpArgs);
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
            }
            if (putter === undefined || putter === null) {
                putter = console.log;
            }
            putter(message.outString());
        }
    }

    /** 记录实例 */
    export const logger: Logger = new Logger();
}