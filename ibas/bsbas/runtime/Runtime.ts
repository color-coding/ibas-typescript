/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类


import { KeyValue, object } from "../../../ibas/bobas/index";
import { IModuleConsole } from "../core/index";

/** 模块控制台管理员 */
export class ConsolesManager {
    /** 运行中的模块控制台 */
    private consoles: Map<string, IModuleConsole>;
    /** 注册模块控制台 */
    register(console: IModuleConsole): void {
        if (object.isNull(this.consoles)) {
            this.consoles = new Map();
        }
        this.consoles.set(console.id, console);
    }
    /** 获取模块控制台 */
    get(id: string): IModuleConsole {
        if (object.isNull(this.consoles)) {
            return null;
        }
        if (this.consoles.has(id)) {
            return this.consoles.get(id);
        }
        return null;
    }
}

/** 变量管理员 */
export class VariablesManager {
    VARIABLE_NAME_USER_ID: string = "sys_user_id";
    VARIABLE_NAME_USER_CODE: string = "sys_user_code";
    VARIABLE_NAME_USER_NAME: string = "sys_user_name";
    /** 运行中的变量 */
    private variables: Map<string, KeyValue>;

    /** 注册变量 */
    register(variable: KeyValue): void;
    /** 注册变量 */
    register(key: string, value: any): void;
    /** 注册变量 */
    register(): void {
        if (object.isNull(this.variables)) {
            this.variables = new Map();
        }
        let variable: KeyValue;
        if (arguments.length === 1) {
            variable = arguments[0];
        } else if (arguments.length === 2) {
            variable = new KeyValue();
            variable.key = arguments[0];
            variable.value = arguments[1];
        }
        this.variables.set(variable.key, variable);
    }
    /** 获取变量 */
    get(key: string): KeyValue {
        if (object.isNull(this.variables)) {
            return null;
        }
        if (this.variables.has(key)) {
            return this.variables.get(key);
        }
        return null;
    }
    /** 获取变量 */
    getValue(key: string): any {
        let value = this.get(key);
        if (object.isNull(value)) {
            return null;
        }
        return value.value;
    }
}