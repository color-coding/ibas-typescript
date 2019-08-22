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
             * 分词器
             */
            class Tokenizer extends sap.m.Tokenizer {
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 获取绑定值
                 */
                getBindingValue(): string;
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(value: string): this;
            }
            /**
             * 分隔符-分词器
             */
            class TokenizerSeparator extends Tokenizer {
                /**
                 * 获取分隔符
                 */
                getSeparator(): string;
                /**
                 * 设置分隔符
                 * @param value 值
                 */
                setSeparator(value: string): void;
            }
        }
    }
}
