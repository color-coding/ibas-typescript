/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../../bobas/common/Utils.ts" />
/// <reference path="../common/Data.ts" />
/// <reference path="./Architecture.ts" />

namespace ibas {
    /** 变量-用户ID */
    export const VARIABLE_NAME_USER_ID: string = "${USER_ID}";
    /** 变量-用户编码 */
    export const VARIABLE_NAME_USER_CODE: string = "${USER_CODE}";
    /** 变量-用户名称 */
    export const VARIABLE_NAME_USER_NAME: string = "${USER_NAME}";
    /** 变量-是否超级用户 */
    export const VARIABLE_NAME_USER_SUPER: string = "${USER_SUPER}";
    /** 变量-用户归属 */
    export const VARIABLE_NAME_USER_BELONG: string = "${USER_BELONG}";
    /** 变量-用户口令 */
    export const VARIABLE_NAME_USER_TOKEN: string = "${USER_TOKEN}";
    /** 运行中的变量 */
    const _variables: Map<string, KeyValue> = new Map<string, KeyValue>();
    /** 变量管理员 */
    export class VariablesManager {
        /** 注册变量 */
        register(variable: KeyValue): void;
        /** 注册变量 */
        register(key: string, value: any): void;
        /** 注册变量 */
        register(): void {
            let variable: KeyValue;
            if (arguments.length === 1) {
                if (objects.instanceOf(arguments[0], KeyValue)) {
                    variable = arguments[0];
                }
            } else if (arguments.length === 2) {
                variable = new KeyValue();
                variable.key = arguments[0];
                variable.value = arguments[1];
            }
            if (!objects.isNull(variable)) {
                _variables.set(variable.key, variable);
            }
        }
        /** 获取所有变量 */
        all(): KeyValue[] {
            let values: Array<KeyValue> = new Array<KeyValue>();
            for (let item of _variables.values()) {
                values.push(item);
            }
            return values;
        }
        /** 获取变量 */
        get(key: string): KeyValue {
            if (objects.isNull(_variables)) {
                return null;
            }
            if (_variables.has(key)) {
                return _variables.get(key);
            }
            return null;
        }
        /** 获取变量 */
        getValue(key: string): any {
            let value: any = this.get(key);
            if (objects.isNull(value)) {
                return null;
            }
            return value.value;
        }
    }
    /** 变量管理员实例 */
    export const variablesManager: VariablesManager = new VariablesManager();
}