﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /**
     * 集合
     */
    export interface IList<T> extends Array<T> {
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
        /**
         * 移出项目
         * @param item 项目
         */
        remove(item: T): void;
        /**
         * 移出项目
         * @param index 项目索引
         */
        removeAt(index: number): void;
        /**
         * 插入项目
         * @param index 插入位置
         * @param item 项目
         */
        insert(index: number, item: T): void;
        /**
         * 插入项目
         * @param index 插入位置
         * @param items 项目数组
         */
        insert(index: number, items: T[]): void;
        /**
         * 第一个或默认
         */
        where(lambda: (value: T) => boolean): T[];
        /**
         * 第一个或默认
         */
        firstOrDefault(): T;
        /**
         * 第一个或默认
         */
        firstOrDefault(lambda: (value: T) => boolean): T;
        /**
         * 最后一个或默认
         */
        lastOrDefault(): T;
        /**
         * 最后一个或默认
         */
        lastOrDefault(lambda: (value: T) => boolean): T;
        /**
         * 是否包含元素
         * @param item 元素
         */
        contain(item: T): boolean;
        /**
         * 是否包含元素
         * @param item 元素表达式
         */
        contain(lambda: (item: T) => boolean): boolean;
        /**
         * 清理所有元素
         */
        clear(): void;
    }
    /**
     * 集合
     */
    export class ArrayList<T> extends Array<T> implements IList<T> {
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
         * 插入项目
         * @param index 插入位置
         * @param item 项目
         */
        insert(index: number, item: T): void;
        /**
         * 插入项目
         * @param index 插入位置
         * @param items 项目数组
         */
        insert(index: number, items: T[]): void;

        insert(): void {
            // 无效值不做处理
            if (arguments === null || arguments === undefined || arguments.length !== 2) {
                return;
            }
            let index: number = arguments[0];
            let value: T | T[] = arguments[1];
            if (value instanceof Array) {
                for (let item of value) {
                    this.splice(index + 1, 0, item);
                }
            } else {
                this.splice(index, 0, value);
            }
        }
        /**
         * 移出项目
         * @param item 项目
         */
        remove(item: T): void {
            this.removeAt(this.indexOf(item));
        }

        /**
         * 移出项目
         * @param index 项目索引
         */
        removeAt(index: number): void {
            if (index >= 0 && index < this.length) {
                this.splice(index, 1);
            }
        }
        /**
         * 返回符合条件的数组
         */
        where(lambda: (value: T) => boolean): T[] {
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
        firstOrDefault(lambda: (value: T) => boolean): T;
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
        lastOrDefault(lambda: (value: T) => boolean): T;
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
         * 是否包含元素
         * @param item 元素
         */
        contain(item: T): boolean;
        /**
         * 是否包含元素
         * @param item 元素表达式
         */
        contain(lambda: (item: T) => boolean): boolean;
        contain(): boolean {
            let value: any = arguments[0];
            let test: (item: T) => boolean;
            if (value instanceof Function) {
                test = value;
            } else {
                test = function (item: T): boolean {
                    if (item === value) {
                        return true;
                    }
                };
            }
            for (let tmp of this) {
                if (test(tmp)) {
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
    /** 文件项目 */
    export class FileItem {
        /** 文件名 */
        name: string;
        /** 文件路径 */
        path: string;
        /** 是文件夹 */
        isFolder: boolean;
        /** 是文件 */
        isFile: boolean;
        /** 修改时间 */
        modifyTime: Date;
    }
    /**
     * 消息
     */
    export interface IMessage {
        /**
         * 消息级别
         */
        level: emMessageLevel;
        /**
         * 时间
         */
        time: Date;
        /**
         * 内容
         */
        content: string;
        /**
         * 标签
         */
        tag: string;
        /**
         * 消息
         */
        toString(): string;
        /**
         * 内容输出
         */
        outString(): string;
    }
    /**
     * 消息
     */
    export class Message implements IMessage {

        constructor() {
            this.level = emMessageLevel.INFO;
            this.time = new Date(Date.now());
        }

        /**
         * 消息级别
         */
        level: emMessageLevel;
        /**
         * 时间
         */
        time: Date;
        /**
         * 内容
         */
        content: string;
        /**
         * 标签
         */
        tag: string;
        /**
         * 格式化消息
         */
        toString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.map(undefined, "");
            builder.map(null, "");
            if (this.tag !== undefined) {
                builder.append(this.tag);
                builder.append(": ");
            }
            if (this.content !== undefined) {
                builder.append(this.content);
            }
            return builder.toString();
        }
        /**
         * 格式化消息
         */
        outString(): string {
            let builder: StringBuilder = new StringBuilder();
            builder.map(undefined, "");
            builder.map(null, "");
            if (this.level !== undefined) {
                builder.append("[");
                builder.append(emMessageLevel[this.level]);
                builder.append("]");
            }
            if (this.time !== undefined) {
                builder.append(" ");
                builder.append("[");
                builder.append(this.time.toLocaleString());
                builder.append("]");
            }
            if (builder.length > 0) {
                builder.append("\r\n");
            }
            if (this.tag !== undefined) {
                builder.append(this.tag);
                builder.append(": ");
            }
            if (this.content !== undefined) {
                builder.append(this.content);
            }
            return builder.toString();
        }
    }
    /** 数据分隔符（,） */
    export const DATA_SEPARATOR: string = ",";
    /** 最小库标记 */
    export const SIGN_MIN_LIBRARY: string = ".min";
    /** 配置项目-默认货币 */
    export const CONFIG_ITEM_DEFAULT_CURRENCY: string = "defaultCurrency";
}