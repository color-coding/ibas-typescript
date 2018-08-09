/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    class Action extends ibas.Action {
        constructor() {
            super();
            this.id = ibas.uuids.random();
            //  this.name = TestAction.name;
        }
        protected run(): boolean {
            this.log(ibas.emMessageLevel.WARN, "I'm Niuren.Zhu.");
            return true;
        }
    }
    export class TestAction extends ibas.TestCase {
        // 测试动作
        testAction(): void {
            let action: Action = new Action();
            action.do();
        }
    }
}
