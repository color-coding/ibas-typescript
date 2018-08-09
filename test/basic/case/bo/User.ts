/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    /**
     * 用户
     */
    export class User extends ibas.BusinessObject<User> {

        private _userCode: string;

        get userCode(): string {
            return this._userCode;
        }

        set userCode(value: string) {
            this._userCode = value;
        }

        protected init(): void {
            //
        }
        criteria(): ibas.ICriteria {
            let criteria: ibas.ICriteria = new ibas.Criteria();
            let condition: ibas.ICondition = criteria.conditions.create();
            condition.alias = "userCode";
            condition.value = this.userCode;
            return criteria;
        }
        toString(): string {
            return ibas.strings.format("{user: {0}}", this.userCode);
        }
    }
}
