/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 等候的监听者 */
    export interface IWaitingListener<T> {
        /** 完成 */
        onCompleted(result: T): void;
    }
    /** 等待者 */
    export abstract class Waiter {
        private listeners: ibas.IList<IWaitingListener<any>>;
        /** 注册监听 */
        register(listener: IWaitingListener<any>): void {
            if (!(this.listeners instanceof Array)) {
                this.listeners = new ibas.ArrayList<IWaitingListener<any>>();
            }
            this.listeners.add(listener);
        }
        protected fireCompleted(): void;
        protected fireCompleted(result: any): void;
        /** 触发完成 */
        protected fireCompleted(): void {
            if (this.listeners instanceof Array) {
                for (let item of this.listeners) {
                    if (item.onCompleted instanceof Function) {
                        item.onCompleted.apply(item.onCompleted, arguments);
                    }
                }
            }
        }
        /** 开始等待 */
        abstract start(): void;
    }
}