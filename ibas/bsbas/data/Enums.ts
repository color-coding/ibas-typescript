/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/** 平台 */
export enum emPlantform {
    /** 平板和桌面 */
    COMBINATION,
    /** 桌面 */
    DESKTOP,
    /** 手机 */
    PHONE,
    /** 平板 */
    TABLET
}
/** 消息类型 */
export enum emMessageType {
    /** 消息 */
    INFORMATION,
    /** 成功 */
    SUCCESS,
    /** 错误 */
    ERROR,
    /** 警告 */
    WARNING,
    /** 问询 */
    QUESTION
}
/** 消息动作 */
export enum emMessageAction {
    /** 终止 */
    ABORT,
    /** 取消 */
    CANCEL,
    /** 关闭 */
    CLOSE,
    /** 删除 */
    DELETE,
    /** 忽略 */
    IGNORE,
    /** 否 */
    NO,
    /** 确定 */
    OK,
    /** 重试 */
    RETRY,
    /** 是 */
    YES
}
/** 权限来源 */
export enum emPrivilegeSource {
    /** 应用设置 */
    APPLICATION,
    /** 业务对象设置 */
    BUSINESS_OBJECT
}
/** 权限值 */
export enum emAuthoriseType {
    /** 没权限 */
    ALL,
    /** 读取权限 */
    READ,
    /** 没有权限 */
    NONE
}