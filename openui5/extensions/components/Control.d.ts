/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace core {
            /**
             * 控件
             */
            class Control extends sap.ui.core.Control {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
            }
            /**
             * 可编辑控件
             */
            class EditableControl extends Control {
                /** 获取-是否可编辑 */
                getEditable(): string;
                /** 设置-是否可编辑 */
                setEditable(value: boolean): this;
            }
        }
    }
}
