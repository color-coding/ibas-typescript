/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List } from "./Common.d";

/**
 * 操作消息
 */
export interface IOperationMessage {
    /**
     * 结果标识
     */
    signID: string;

    /**
     * 结果编码
     */
    resultCode: number;

    /**
     * 结果描述
     */
    message: string;

    /**
     * 结果时间
     */
    time: Date;

    /**
     * 用户标识
     */
    userSign: string;

}
/**
 * 操作结果
 */
export interface IOperationResult<P> extends IOperationMessage {
    /**
     * 返回对象
     * 
     */
    resultObjects: List<P>;

    /**
     * 操作执行信息
     * 
     */
    informations: List<IOperationInformation>;
}
/**
 * 操作信息
 */
export interface IOperationInformation {
    /**
     * 获取-名称
     */
    name: string;

    /**
     * 获取-内容
     */
    contents: string;

    /**
     * 获取-标签
     */
    tag: string;
}
