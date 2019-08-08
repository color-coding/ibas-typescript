/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace core {
            /**
             * HTML
             */
            sap.ui.core.HTML.extend("sap.extension.core.HTML", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * HTML
             */
            HTML.extend("sap.extension.core.FrameHTML", {
                metadata: {
                    properties: {
                        /** 框架源 */
                        frameSrc: { type: "string" },
                        /** 框架宽 */
                        frameWidth: { type: "string", defaultValue: "100%" },
                        /** 框架高 */
                        frameHeight: { type: "string", defaultValue: "100%" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取框架标识
                 */
                getFrameId(): string {
                    return ibas.strings.format("{0}_frame", this.getId());
                },
                /**
                 * 设置框架源
                 * @param value 值
                 */
                setFrameSrc(this: FrameHTML, value: string | Blob): FrameHTML {
                    let url: string = this.getFrameSrc();
                    if (!ibas.strings.isEmpty(url)) {
                        URL.revokeObjectURL(url);
                    }
                    if (value instanceof Blob) {
                        url = URL.createObjectURL(value);
                    } else {
                        url = value;
                    }
                    if (!ibas.strings.isEmpty(url)) {
                        let iframe: ibas.StringBuilder = new ibas.StringBuilder();
                        iframe.append("<iframe");
                        iframe.append(" id=\"");
                        iframe.append(this.getFrameId());
                        iframe.append("\"");
                        iframe.append(" width=\"");
                        iframe.append(this.getFrameWidth());
                        iframe.append("\"");
                        iframe.append(" height=\"");
                        iframe.append(this.getFrameHeight());
                        iframe.append("\"");
                        iframe.append(" src=\"");
                        iframe.append(url);
                        iframe.append("\"");
                        iframe.append(" frameborder=\"no\"");
                        iframe.append(" border=\"0\"");
                        // iframe.append(" scrolling=\"no\"");
                        iframe.append(">");
                        iframe.append("</iframe>");
                        this.setContent(iframe.toString());
                    }
                    this.setProperty("frameSrc", url);
                    return this;
                },
                setContent(this: FrameHTML, value: string): FrameHTML {
                    let url: string = this.getFrameSrc();
                    if (!ibas.strings.isEmpty(url)) {
                        URL.revokeObjectURL(url);
                    }
                    return (<any>HTML.prototype).setContent.apply(this, arguments);
                },
                /** 退出 */
                exit(this: FrameHTML): void {
                    let url: string = this.getFrameSrc();
                    if (!ibas.strings.isEmpty(url)) {
                        URL.revokeObjectURL(url);
                    }
                    (<any>HTML.prototype).exit.apply(this, arguments);
                }
            });
        }
    }
}
