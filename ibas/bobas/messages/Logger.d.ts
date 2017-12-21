/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { emMessageLevel } from "../data/index";
import { IMessage } from "./Message.d";

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
    log(message: IMessage);
    /**
     * 记录消息
     * @param level 消息级别
     * @param message 消息格式
     * @param pars 格式内容
     */
    log(level: emMessageLevel, message: string, ...pars: any[]);
    /**
     * 记录消息
     * @param message 内容
     * @param pars 格式内容
     */
    log(message: string, ...pars: any[]);
}
