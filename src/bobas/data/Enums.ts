/**
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
 * 比较方式
 */
export enum emConditionOperation {
    /** 无 */
    co_NONE,
    /** 等于(=) */
    co_EQUAL,
    /** 大于(>) */
    co_GRATER_THAN,
    /** 小于(<) */
    co_LESS_THAN,
    /** 大于等于(>=) */
    co_GRATER_EQUAL,
    /** 小于等于(<=) */
    co_LESS_EQUAL,
    /** 不等于(<>) */
    co_NOT_EQUAL,
    /** 包含Like (%) */
    co_CONTAIN,
    /** 不包含Not like (%) */
    co_NOT_CONTAIN,
    /** 开始为(...%) */
    co_START,
    /** 结束为(%...) */
    co_END,
    /** 是空 */
    co_IS_NULL,
    /** 非空 */
    co_NOT_NULL
}
/**
 * 条件之间关系
 */
export enum emConditionRelationship {
    /** 没关系 */
    cr_NONE,
    /** 且 */
    cr_AND,
    /** 或 */
    cr_OR
}
/**
 * 排序方式
 */
export enum emSortType {
    /** 降序 */
    st_Descending,
    /** 升序 */
    st_Ascending
}
