﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * 消息级别
 */
export enum emMessageLevel {
    /** 严重错误 */
    FATAL,
    /** 错误 */
    ERROR,
    /** 警告 */
    WARN,
    /** 消息 */
    INFO,
    /** 调试信息 */
    DEBUG,
}
/**
 * 比较方式
 */
export enum emConditionOperation {
    /** 无 */
    NONE,
    /** 等于(=) */
    EQUAL,
    /** 大于(>) */
    GRATER_THAN,
    /** 小于(<) */
    LESS_THAN,
    /** 大于等于(>=) */
    GRATER_EQUAL,
    /** 小于等于(<=) */
    LESS_EQUAL,
    /** 不等于(<>) */
    NOT_EQUAL,
    /** 包含Like (%) */
    CONTAIN,
    /** 不包含Not like (%) */
    NOT_CONTAIN,
    /** 开始为(...%) */
    START,
    /** 结束为(%...) */
    END,
    /** 是空 */
    IS_NULL,
    /** 非空 */
    NOT_NULL
}
/**
 * 条件之间关系
 */
export enum emConditionRelationship {
    /** 没关系 */
    NONE,
    /** 且 */
    AND,
    /** 或 */
    OR
}
/**
 * 排序方式
 */
export enum emSortType {
    /** 降序 */
    DESCENDING,
    /** 升序 */
    ASCENDING
}
/**
 * 是否
 */
export enum emYesNo {
    /** 否 */
    NO,
    /** 是 */
    YES
}
/**
 * 单据状态
 */
export enum emDocumentStatus {
    /** 计划 */
    PLANNED,
    /** 下达 */
    RELEASED,
    /** 完成 */
    FINISHED,
    /** 结算 */
    CLOSED
}
/**
 * 业务对象状态
 */
export enum emBOStatus {
    /** 未清 */
    OPEN,
    /** 已清 */
    CLOSED
}
/**
 * 审批步骤状态
 */
export enum emApprovalStepStatus {
    /** 挂起的 */
    PENDING,
    /** 审批中 */
    PROCESSING,
    /** 已批准 */
    APPROVED,
    /** 已拒绝 */
    REJECTED,
    /** 已跳过 */
    SKIPPED
}
/**
 * 审批状态
 */
export enum emApprovalStatus {
    /** 不影响 */
    UNAFFECTED,
    /** 审批中 */
    PROCESSING,
    /** 已批准 */
    APPROVED,
    /** 已拒绝 */
    REJECTED,
    /** 已取消 */
    CANCELLED
}
/**
 * 审批结果
 */
export enum emApprovalResult {
    /** 已批准 */
    APPROVED,
    /** 拒绝的 */
    REJECTED,
    /** 重置为进行中 */
    PROCESSING
}
/**
 * 方向
 */
export enum emDirection {
    /** 入 */
    IN,
    /** 出 */
    OUT
}