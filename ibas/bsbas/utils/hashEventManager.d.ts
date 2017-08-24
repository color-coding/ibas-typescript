/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * HashChange监听者
 */
export interface IHashChangeListener {
    hashSign: string;
    /** Hash改变，即地址栏#数据改变 */
    onHashChange(event: HashChangeEvent)
    /** 调用者，this指向 */
    caller: any;
}
/**
 * 哈希类别
 */
export interface IHashCategory {
    Id: string;
    /** 类别 */
    category: string;
}
