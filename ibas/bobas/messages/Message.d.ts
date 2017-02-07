/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="../data/Enums.ts" />

import { emMessageLevel } from "../data/Enums";

/**
 * 消息
 */
export interface IMessage {
    /**
     * 消息级别
     */
    level: emMessageLevel;
    /**
     * 时间
     */
    time: Date;
    /**
     * 内容
     */
    content: string;
    /**
     * 标签
     */
    tag: string;
    /**
     * 消息
     */
    toString(): string;
    /**
     * 内容输出
     */
    outString(): string;
}