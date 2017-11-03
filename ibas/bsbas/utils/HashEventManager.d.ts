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
export interface IHashChangedListener {
    hashSign: string;
    /** Hash改变，即地址栏#数据改变 */
    onHashChanged(event: HashChangeEvent)
}
/**
 * 哈希代表的信息
 */
export interface IHashInfo {
    id: string;
    /** 类别 */
    category: string;
}
