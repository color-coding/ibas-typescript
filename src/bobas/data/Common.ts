/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Common.d.ts" />

import { List } from './Common.d';


/**
 * 数组集合
 */
export class ArrayList<T> extends Array<T> implements List<T> {
    /**
     * 添加项目
     * @param item 项目
     */
    add(item: T) {
        // 无效值不做处理
        if (item === null || item === undefined) {
            return;
        }
        this.push(item);
        this.afterAdd(item);
    }

    /**
     * 添加项目后
     * @param item 项目
     */
    protected afterAdd(item: T) {

    }

    /**
     * 移出项目
     * @param item 项目
     */
    remove(item: T) {
        // 无效值不做处理
        if (item === null || item === undefined) {
            return;
        }
        let keeps = new Array();// 临时数组
        for (let tmp of this) {
            if (item === tmp) {
                // 被移出的数组，不保留
                break;
            }
            keeps.push(item);
        }
        // 重新插入被保存的
        for (let tmp of keeps) {
            this.push(tmp);
        }
        this.afterRemove(item);
    }

    /**
     * 移出项目后
     * @param item 项目
     */
    protected afterRemove(item: T) {

    }

    /**
     * 移出项目
     * @param index 项目索引
     */
    removeAt(index: number) {
        if (index >= 0 && index < super.length) {
            this.remove(this[index]);
        }
    }
}

