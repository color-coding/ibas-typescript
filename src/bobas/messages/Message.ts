/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Message.d.ts" />
/// <reference path="../data/Enums.ts" />

import { emMessageLevel } from "../data/Enums";
import { IMessage } from "./Message.d";

/**
 * 消息
 */
export class Message implements IMessage {

    constructor() {
        this.level = emMessageLevel.INFO;
        this.time = new Date(Date.now());
    }

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
     * 格式化消息
     */
    toString(): string {
        let msg: string = "";
        if (this.tag !== undefined) {
            msg = msg + this.tag + ": ";
        }
        if (this.content !== undefined) {
            msg = msg + this.content;
        }
        return msg;
    }
    /**
     * 格式化消息
     */
    outString(): string {
        let msg: string = "";
        if (this.level !== undefined) {
            msg = msg + "[" + emMessageLevel[this.level] + "]";
        }
        if (this.time !== undefined) {
            msg = msg + " [" + this.time.toLocaleString() + "]";
        }
        if (msg.length > 0) {
            msg = msg + "\r\n";
        }
        if (this.tag !== undefined) {
            msg = msg + this.tag + ": ";
        }
        if (this.content !== undefined) {
            msg = msg + this.content;
        }
        return msg;
    }
}