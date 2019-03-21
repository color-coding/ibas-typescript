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
                 * 增加数据
                 * @param oData 数据
                 * @param sPath 路径
                 */
                addData(oData: any | any[], sPath?: string): void;
            }
        }
    }
}
