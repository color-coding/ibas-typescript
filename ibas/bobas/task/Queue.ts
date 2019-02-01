/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/Configuration.ts" />
namespace ibas {
    /**
     * 队列
     */
    export namespace queues {
        /**
         * 执行队列任务
         * @param data 待处理数据
         * @param task 执行的任务（处理完成后，记得执行next()）
         * @param done 任务完成之后
         */
        export function execute<T>(data: T | T[], task: (data: T, next: (error?: Error) => void) => void, done?: (error: Error) => void): void {
            let datas: IList<T> = arrays.create(data);
            let index: number = 0;
            let next: Function = function (error: Error = undefined): void {
                if (!objects.isNull(error)) {
                    // 出现错误，任务终止
                    ibas.logger.log(error);
                    if (done instanceof Function) {
                        done.apply(done, [error]);
                    }
                    return;
                }
                if (index >= datas.length) {
                    // 处理完成
                    if (done instanceof Function) {
                        done.apply(done);
                    }
                    return;
                }
                try {
                    let data: T = datas[index];
                    index = index + 1;
                    if (!objects.isNull(data)) {
                        // 有效数据进行
                        task.apply(task, [data, next]);
                    }
                } catch (error) {
                    next(error);
                }
            };
            next();
        }
    }
}