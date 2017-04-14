/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类

import { KeyValue, object } from "../../bobas/index";

/** 变量管理员 */
export class VariablesManager {
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
        let value: any = this.get(key);
        if (object.isNull(value)) {
            return null;
        }
        return value.value;
    }
}