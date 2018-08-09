/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    export class TestFileRepository extends ibas.TestCase {
        // 测试动作
        testLoad(): void {
            // 测试文件仓库
            let fileRepository: ibas.FileRepositoryAjax = new ibas.FileRepositoryAjax();
            fileRepository.address = ibas.urls.rootUrl() + "/../repository";
            fileRepository.load("salesorders.json", {
                onCompleted(opRslt: ibas.IOperationResult<any>): void {
                    console.log(opRslt);
                }
            });
        }
    }
}