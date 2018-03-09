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
         * 获取-名称
         */
        name: string;

        /**
         * 获取-内容
         */
        content: string;

        /**
         * 获取-标签
         */
        tag: string;
    }

    /**
     * 操作信息
     */
    export class OperationInformation implements IOperationInformation {
        /**
         * 获取-名称
         */
        private _name: string;

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }
        /**
         * 获取-内容
         */
        private _content: string;

        get content(): string {
            return this._content;
        }

        set content(value: string) {
            this._content = value;
        }

        /**
         * 获取-标签
         */
        private _tag: string;

        get tag(): string {
            return this._tag;
        }

        set tag(value: string) {
            this._tag = value;
        }
    }
    /**
     * 操作消息
     */
    export class OperationMessage implements IOperationMessage {
        constructor() {
            this.resultCode = 0;
            this.message = "success";
        }
        /**
         * 结果标识
         */
        private _signID: string;

        get signID(): string {
            return this._signID;
        }

        set signID(value: string) {
            this._signID = value;
        }

        /**
         * 结果编码
         */
        private _resultCode: number;

        get resultCode(): number {
            return this._resultCode;
        }

        set resultCode(value: number) {
            this._resultCode = value;
        }

        /**
         * 结果描述
         */
        private _message: string;

        get message(): string {
            return this._message;
        }

        set message(value: string) {
            this._message = value;
        }

        /**
         * 结果时间
         */
        private _time: Date;

        get time(): Date {
            if (objects.isNull(this._time)) {
                this._time = new Date();
            }
            return this._time;
        }

        set time(value: Date) {
            this._time = value;
        }

        /**
         * 用户标识
         */
        private _userSign: string;

        get userSign(): string {
            return this._userSign;
        }

        set userSign(value: string) {
            this._userSign = value;
        }
    }
    /**
     * 操作消息结果
     */
    export class OperationResult<P> extends OperationMessage implements IOperationResult<P> {
        /**
         * 返回对象
         */
        private _resultObjects: IList<P>;

        get resultObjects(): IList<P> {
            if (objects.isNull(this._resultObjects)) {
                this._resultObjects = new ArrayList<P>();
            }
            return this._resultObjects;
        }

        set resultObjects(value: IList<P>) {
            this._resultObjects = value;
        }
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

        /**
         * 操作执行信息
         */
        private _informations: IList<IOperationInformation>;

        get informations(): IList<IOperationInformation> {
            if (objects.isNull(this._informations)) {
                this._informations = new ArrayList<IOperationInformation>();
            }
            return this._informations;
        }

        set informations(value: IList<IOperationInformation>) {
            this._informations = value;
        }
    }
}