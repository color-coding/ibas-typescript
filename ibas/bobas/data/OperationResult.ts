/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { objects } from "./Datas";
import { List } from "./Common.d";
import { ArrayList } from "./Common";
import { IOperationInformation, IOperationMessage, IOperationResult } from "./OperationResult.d";

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
    private _contents: string;

    get contents(): string {
        return this._contents;
    }

    set contents(value: string) {
        this._contents = value;
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
    private _resultObjects: List<P>;

    get resultObjects(): List<P> {
        if (objects.isNull(this._resultObjects)) {
            this._resultObjects = new ArrayList<P>();
        }
        return this._resultObjects;
    }

    set resultObjects(value: List<P>) {
        this._resultObjects = value;
    }

    /**
     * 操作执行信息
     */
    private _informations: List<IOperationInformation>;

    get informations(): List<IOperationInformation> {
        if (objects.isNull(this._informations)) {
            this._informations = new ArrayList<IOperationInformation>();
        }
        return this._informations;
    }

    set informations(value: List<IOperationInformation>) {
        this._informations = value;
    }
}
