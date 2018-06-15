/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./Data.ts" />

namespace ibas {
    /**
     * 操作消息
     */
    export interface IOperationMessage {
        /**
         * 结果标识
         */
        signID: string;

        /**
         * 结果编码
         */
        resultCode: number;

        /**
         * 结果描述
         */
        message: string;

        /**
         * 结果时间
         */
        time: Date;

        /**
         * 用户标识
         */
        userSign: string;

    }
    /**
     * 操作结果
     */
    export interface IOperationResult<P> extends IOperationMessage {
        /**
         * 返回对象
         */
        resultObjects: IList<P>;
        /**
         * 操作执行信息
         */
        informations: IList<IOperationInformation>;
    }
    /**
     * 操作信息
     */
    export interface IOperationInformation {
        /**
         * 名称
         */
        name: string;
        /**
         * 内容
         */
        content: string;
        /**
         * 标签
         */
        tag: string;
    }

    /**
     * 操作信息
     */
    export class OperationInformation implements IOperationInformation {

        constructor();
        constructor(name: string);
        constructor(name: string, content: string);
        constructor(name: string, content: string, tag: string);
        constructor() {
            this.name = arguments[0];
            this.content = arguments[1];
            this.tag = arguments[2];
        }
        /** 名称 */
        name: string;
        /** 内容 */
        content: string;
        /** 标签 */
        tag: string;
    }
    /**
     * 操作消息
     */
    export class OperationMessage implements IOperationMessage {
        constructor();
        constructor(error: Error);
        constructor() {
            if (arguments[0] instanceof Error) {
                this.resultCode = -1;
                this.message = arguments[0].message;
            } else {
                this.resultCode = 0;
                this.message = "";
            }
            this.time = new Date();
        }
        /** 结果标识 */
        signID: string;
        /** 结果编码 */
        resultCode: number;
        /** 结果描述 */
        message: string;
        /** 结果时间 */
        time: Date;
        /** 用户标识 */
        userSign: string;
    }
    /**
     * 操作消息结果
     */
    export class OperationResult<P> extends OperationMessage implements IOperationResult<P> {
        constructor();
        constructor(error: Error);
        constructor() {
            super(arguments[0]);
            this.resultObjects = new ArrayList<P>();
            this.informations = new ArrayList<IOperationInformation>();
        }
        /**
         * 返回对象
         */
        resultObjects: IList<P>;
        /**
         * 操作执行信息
         */
        informations: IList<IOperationInformation>;
        /** 添加结果 */
        addResults(value: P): void;
        /** 添加结果 */
        addResults(value: P[]): void;
        addResults(): void {
            if (objects.isNull(arguments[0])) {
                return;
            }
            if (arguments[0] instanceof Array) {
                for (let item of arguments[0]) {
                    this.resultObjects.add(item);
                }
            } else {
                this.resultObjects.add(arguments[0]);
            }
        }
    }
}