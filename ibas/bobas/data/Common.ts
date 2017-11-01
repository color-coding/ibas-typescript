/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { List } from "./Common.d";
import { strings } from "./Strings";

/**
 * 数组集合
 */
export class ArrayList<T> extends Array<T> implements List<T> {
    /** 创建集合，仅值 */
    static create<P>(map: Map<any, P>): ArrayList<P> {
        let list: ArrayList<P> = new ArrayList<P>();
        for (let item of map.values()) {
            list.add(item);
        }
        return list;
    }

    /**
     * 添加项目
     * @param item 项目
     */
    add(item: T): void;
    /**
     * 添加项目
     * @param items 项目数组
     */
    add(items: T[]): void;

    add(): void {
        // 无效值不做处理
        if (arguments === null || arguments === undefined) {
            return;
        }
        for (let arg of arguments) {
            if (arg instanceof Array) {
                for (let item of arg) {
                    this.push(item);
                }
            } else {
                this.push(arg);
            }
        }
    }

    /**
     * 移出项目
     * @param item 项目
     */
    remove(item: T): void {
        // 无效值不做处理
        if (item === null || item === undefined) {
            return;
        }
        let keeps: Array<T> = new Array();// 临时数组
        for (let tmp of this) {
            if (item === tmp) {
                // 被移出的数组，不保留
                continue;
            }
            keeps.push(tmp);
        }
        // 清除数组
        while (this.length > 0) {
            this.pop();
        }
        // 重新插入被保存的
        for (let tmp of keeps) {
            this.push(tmp);
        }
    }

    /**
     * 移出项目
     * @param index 项目索引
     */
    removeAt(index: number): void {
        if (index >= 0 && index < super.length) {
            this.remove(this[index]);
        }
    }
    /**
     * 返回符合条件的数组
     */
    where(lambda: Function): T[] {
        let values: Array<T> = new Array<T>();
        if (lambda instanceof Function) {
            for (let item of this) {
                if (lambda(item)) {
                    values.push(item);
                }
            }
        }
        return values;
    }
    /**
     * 第一个或默认
     */
    firstOrDefault(): T;
    /**
     * 第一个或默认
     */
    firstOrDefault(lambda: Function): T;
    /**
     * 第一个或默认
     */
    firstOrDefault(): T {
        let lambda: Function = arguments[0];
        if (lambda instanceof Function) {
            for (let index: number = 0; index < this.length; index++) {
                let item: T = this[index];
                if (lambda(item)) {
                    return item;
                }
            }
        } else {
            if (this.length > 0) {
                return this[0];
            }
        }
        return null;
    }
    /**
     * 最后一个或默认
     */
    lastOrDefault(): T;
    /**
     * 最后一个或默认
     */
    lastOrDefault(lambda: Function): T;
    /**
     * 最后一个或默认
     */
    lastOrDefault(): T {
        let lambda: Function = arguments[0];
        if (lambda instanceof Function) {
            for (let index: number = this.length - 1; index >= 0; index--) {
                let item: T = this[index];
                if (lambda(item)) {
                    return item;
                }
            }
        } else {
            if (this.length > 0) {
                return this[this.length - 1];
            }
        }
        return null;
    }
    /**
     * 是否包含
     */
    contain(value: T): boolean {
        for (let tmp of this) {
            if (value === tmp) {
                return true;
            }
        }
        return false;
    }
    /**
     * 清除所有元素
     */
    clear(): void {
        // 清除数组
        while (this.length > 0) {
            this.pop();
        }
    }
}
/**
 * 字符串构建器
 */
export class StringBuilder {

    private values: string[] = new Array<string>();

    /**
     * 获取当前长度
     */
    get length(): number {
        return this.values.length;
    }

    /**
     * 添加字符
     */
    append(str: any): void {
        if (str === undefined) {
            this.values.push("undefined");
        } else if (str === null) {
            this.values.push("null");
        } else {
            this.values.push(str.toString());
        }
    }

    /**
     * 添加格式化字符
     * @param format 字符格式
     * @param args 替换字符
     */
    appendFormat(format: string, ...args: any[]): void {
        this.append(strings.format(format, args));
    }
    /**
     * 生成字符串
     */
    toString(): string {
        let str: string = "";
        for (let item of this.values) {
            str += item;
        }
        return str;
    }
}
/**
 * 键值
 */
export class KeyValue {
    constructor();
    constructor(value: string);
    constructor(key: string, value: any);
    constructor() {
        if (arguments[0] !== undefined) {
            this.key = arguments[0];
            this.value = arguments[0];
        }
        if (arguments[1] !== undefined) {
            this.value = arguments[1];
        }
    }
    /** 键 */
    key: string;
    /** 值 */
    value: any;
}
/**
 * 键描述
 */
export class KeyText {
    constructor();
    constructor(value: string);
    constructor(key: string, text: string);
    constructor() {
        if (arguments[0] !== undefined) {
            this.key = arguments[0];
            this.text = arguments[0];
        }
        if (arguments[1] !== undefined) {
            this.text = arguments[1];
        }
    }
    /** 键 */
    key: string;
    /** 描述 */
    text: string;
}
/**
 * 文件数据
 */
export class FileData {
    private FileName: string;
    /** 文件名称 */
    get fileName(): string {
        return this.FileName;
    }
    set fileName(value: string) {
        this.FileName = value;
    }
    private Location: string;
    /** 位置 */
    get location(): string {
        return this.Location;
    }
    set location(value: string) {
        this.Location = value;
    }
    private OriginalName: string;
    /** 原始名 */
    get originalName(): string {
        return this.OriginalName;
    }
    set originalName(value: string) {
        this.OriginalName = value;
    }
}