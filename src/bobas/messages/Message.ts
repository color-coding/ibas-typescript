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

}

/**
* 消息
*/
export class Message implements IMessage {

}