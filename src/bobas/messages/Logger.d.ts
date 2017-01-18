/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Message.d.ts" />

import { emMessageLevel } from '../data/Enums';
import { IMessage } from './Message.d';

/**
* 消息记录员
*/
export interface ILogger {

    /**
     * 记录消息
     * @param message
     */
    log(message: IMessage);
    /**
     * 记录消息
     * @param level 消息级别
     * @param message 内容
     */
    log(level: emMessageLevel, message: string);
    /**
     * 记录消息
     * @param level 消息级别
     * @param format 消息格式
     * @param pars 格式内容
     */
    log(level: emMessageLevel, format: string, ...pars: any[]);
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
}
