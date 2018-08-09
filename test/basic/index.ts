/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../ibas/index.d.ts" />

/// <reference path="./case/TestAction.ts" />
/// <reference path="./case/TestBusinessObject.ts" />
/// <reference path="./case/TestData.ts" />
/// <reference path="./case/TestLogger.ts" />
/// <reference path="./case/TestRepository.ts" />

namespace test {
    export function run(): void {
        let cases: ibas.TestCase[] = ibas.test.cases(test);
        for (let item of cases) {
            item.run();
        }
    }
}