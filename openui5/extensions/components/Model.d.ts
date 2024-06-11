/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace model {
            /**
             * Json模型
             */
            class JSONModel extends sap.ui.model.json.JSONModel {
                /**
                 * 构造方法
                 * @param {any | string} oData 数组时形式：{ rows: datas }
                 * @param {boolean} bObserve 是否监听数据变化
                 */
                constructor(oData: any | string, bObserve?: boolean);
                /**
                 * 构造方法
                 * @param {any | string} oData 数组时形式：{ rows: datas }
                 * @param {function} onPropertyChanged 数据属性变化
                 */
                constructor(oData: any | string, onPropertyChanged?: () => {});
                /**
                 * 增加数据
                 * @param oData 数据
                 * @param sPath 路径
                 */
                addData(oData: any | any[], sPath?: string): void;
                /**
                 * 获取数据
                 */
                getData<T>(): T;
                /**
                 * 获取数据
                 * @param sPath 路径
                 */
                getData<T>(sPath: string): T;
                /**
                 * 数据大小
                 */
                size(): number;
                /**
                 * 获取-强制刷新
                 */
                getForcedRefresh(): boolean;
                /**
                 * 设置-强制刷新
                 */
                setForcedRefresh(value: boolean): JSONModel;
                /** 
                 * 自动刷新
                 */
                protected fireAutoRefresh(): void;
                /** 
                 * 注册属性改变事件
                 */
                protected registerPropertyChanged(data: ibas.Bindable): void;
            }
        }
    }
}
