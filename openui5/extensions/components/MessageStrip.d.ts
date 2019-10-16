/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace m {
            /**
             * 消息条
             */
            class MessageStrip extends sap.m.MessageStrip {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /** 获取-自动关闭时间 */
                getAutoClosing(): number;
                /** 设置-自动关闭时间 */
                setAutoClosing(time: number): this;
                /** 获取-位置方式 */
                getPosition(): string;
                /** 设置-位置方式 */
                setPosition(value: string): this;
                /** 获取-位置左 */
                getPositionLeft(): string;
                /** 设置-位置左 */
                setPositionLeft(value: string): this;
                /** 获取-位置右 */
                getPositionRight(): string;
                /** 设置-位置右 */
                setPositionRight(value: string): this;
                /** 获取-位置上 */
                getPositionTop(): string;
                /** 设置-位置上 */
                setPositionTop(value: string): this;
                /** 获取-位置下 */
                getPositionBottom(): string;
                /** 设置-位置下 */
                setPositionBottom(value: string): this;
                /** 打开 */
                open(): this;
                /** 打开 */
                open(type: sap.ui.core.MessageType, text: string): this;
                /** 打开 */
                open(text: string): this;
            }
        }
    }
}
