/**
* 消息级别
*/
export enum emMessageLevel {
    /**
     * 严重错误
    */
    FATAL,
    /**
     * 错误
     */
    ERROR,
    /**
     * 警告
     */
    WARN,
    /**
     * 消息
     */
    INFO,
    /**
     * 调试信息
     */
    DEBUG,
}

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
        if (this.time !== undefined) {
            msg = msg + this.time.toLocaleString();
        }
        if (this.level !== undefined) {
            msg = msg + " " + emMessageLevel[this.level];
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