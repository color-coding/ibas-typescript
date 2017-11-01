/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * 集合
 */
export interface List<T> extends Array<T> {
    /**
     * 添加项目
     * @param item 项目
     */
    add(item: T);
    /**
     * 添加项目
     * @param items 项目数组
     */
    add(items: T[]);
    /**
     * 移出项目
     * @param item 项目
     */
    remove(item: T);
    /**
     * 移出项目
     * @param index 项目索引
     */
    removeAt(index: number);
    /**
     * 第一个或默认
     */
    where(lambda: Function): T[];
    /**
     * 第一个或默认
     */
    firstOrDefault(): T;
    /**
     * 第一个或默认
     */
    firstOrDefault(lambda: Function): T;
    /**
     * 最后一个或默认
     */
    lastOrDefault(): T;
    /**
     * 最后一个或默认
     */
    lastOrDefault(lambda: Function): T;
    /**
     * 是否包含元素
     * @param item 元素
     */
    contain(item: T): boolean;
    /**
     * 清理所有元素
     */
    clear(): void;
}


