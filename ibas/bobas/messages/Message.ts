/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { StringBuilder,emMessageLevel } from "../data/index";
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
        let builder: StringBuilder = new StringBuilder();
        if (this.tag !== undefined) {
           builder.append(this.tag);
           builder.append(": ");
        }
        if (this.content !== undefined) {
           builder.append(this.content);
        }
        return builder.toString();
    }
    /**
     * 格式化消息
     */
    outString(): string {
        let builder: StringBuilder = new StringBuilder();
        if (this.level !== undefined) {
            builder.append("[");
            builder.append(emMessageLevel[this.level]);
            builder.append("]");
        }
        if (this.time !== undefined) {
            builder.append(" ");
            builder.append("[");
            builder.append(this.time.toLocaleString());
            builder.append("]");
        }
        if (builder.length > 0) {
           builder.append("\r\n");
        }
        if (this.tag !== undefined) {
           builder.append(this.tag);
           builder.append(": ");
        }
        if (this.content !== undefined) {
           builder.append(this.content);
        }
        return builder.toString();
    }
}