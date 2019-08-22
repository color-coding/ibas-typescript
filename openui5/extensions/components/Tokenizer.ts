/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace m {
            /**
             * 分词器
             */
            sap.m.Tokenizer.extend("sap.extension.m.Tokenizer", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 业务对象Tokenizer
             * 字符串以separator分隔,显示token
             */
            Tokenizer.extend("sap.extension.m.TokenizerSeparator", {
                metadata: {
                    properties: {
                        /** 分隔符 */
                        separator: { type: "string", defaultValue: "," },
                    },
                    events: {
                        "deleteToken": {
                            parameters: {
                            }
                        }
                    },
                },
                renderer: {
                },
                /**
                 * 加载业务对象集合
                 * @param selecteds 业务对象KeyText集合
                 */
                loadTokens(items: ibas.KeyText[]): void {
                    this.removeAllTokens();
                    if (items instanceof Array) {
                        let that: any = this;
                        for (let item of items) {
                            if (!(item instanceof ibas.KeyText)) {
                                continue;
                            }
                            this.addToken(new sap.m.Token("", {
                                key: item.key,
                                text: item.text,
                                deselect: function (): void {
                                    that.setBindingValue(that.getBindingValue());
                                },
                                delete: function (event: sap.ui.base.Event): void {
                                    let token: any = event.getSource();
                                    if (token instanceof sap.m.Token) {
                                        let tokens: string[] = that.getBindingValue().split(that.getSeparator());
                                        let separator: string = that.getSeparator();
                                        let key: string = token.getKey();
                                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                        builder.map(undefined, "");
                                        builder.map(null, "");
                                        for (let item of tokens) {
                                            if (item === key) {
                                                continue;
                                            }
                                            if (builder.length > 0) {
                                                builder.append(separator);
                                            }
                                            builder.append(item);
                                        }
                                        that.setBindingValue(builder.toString());
                                        that.fireDeleteToken();
                                    }
                                }
                            }));
                        }
                    }
                },
                setBindingValue(value: string): void {
                    if (!ibas.strings.isEmpty(value)) {
                        let values: ibas.IList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                        for (let text of value.split(this.getSeparator())) {
                            if (ibas.strings.isEmpty(text)) {
                                continue;
                            }
                            values.add(new ibas.KeyText(text));
                        }
                        this.loadTokens(values);
                    } else {
                        this.removeAllTokens();
                    }
                    this.setProperty("bindingValue", value);
                },
            });
        }
    }
}
