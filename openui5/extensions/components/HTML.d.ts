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
             * HTML
             */
            class HTML extends sap.ui.core.HTML {
                /**
                 * 构造
                 * @param {string} sId 唯一标记，不要赋值
                 * @param {any} mSettings
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 绑定属性
                 * @param sName 属性名称
                 * @param oBindingInfo 绑定信息
                 */
                bindProperty(sName: string, oBindingInfo: any): this;
            }
            /**
             * Frame HTML
             */
            class FrameHTML extends HTML {
                /**
                * 获取框架标识
                */
                getFrameId(): string;
                /**
                * 获取框架源
                */
                getFrameSrc(): string;
                /**
                 * 设置框架源
                 * @param value 值
                 */
                setFrameSrc(value: string | Blob): this;
                /**
                * 获取框架宽
                */
                getFrameWidth(): string;
                /**
                 * 设置框架宽
                 * @param value 值
                 */
                setFrameWidth(value: string): this;
                /**
                * 获取框架高
                */
                getFrameHeight(): string;
                /**
                 * 设置框架高
                 * @param value 值
                 */
                setFrameHeight(value: string): this;
            }
        }
    }
}