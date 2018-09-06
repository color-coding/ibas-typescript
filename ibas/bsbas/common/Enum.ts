/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
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
        /** 模块设置 */
        MODULE,
        /** 应用设置 */
        APPLICATION,
        /** 业务对象设置 */
        BUSINESS_OBJECT
    }
    /** 权限值 */
    export enum emAuthoriseType {
        /** 全部权限 */
        ALL,
        /** 只取权限 */
        READ,
        /** 没有权限 */
        NONE
    }
    /** 选择类型 */
    export enum emChooseType {
        /** 单选 */
        SINGLE,
        /** 多选 */
        MULTIPLE
    }
    /** 视图模式 */
    export enum emViewMode {
        /** 一般 */
        COMMON,
        /** 查看 */
        VIEW
    }
    /** 手指触控移动方向 */
    export enum emTouchMoveDirection {
        /** 上 */
        UP,
        /** 下 */
        DOWN,
        /** 左 */
        LEFT,
        /** 右 */
        RIGHT,
        /** 无 */
        NONE
    }
}