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
             * Markdown 预览
             */
            HTML.extend("sap.extension.core.Markdown", {
                metadata: {
                    properties: {
                        /** Markdown 内容 */
                        markdown: { type: "string", defaultValue: "" },
                    },
                    events: {}
                },
                renderer: {
                },
                /** 设置 Markdown 内容 */
                setMarkdown(this: Markdown, value: string): Markdown {
                    this.setProperty("markdown", value, true);
                    this.setContent(this.toHtml(value));
                    return this;
                },
                /** Markdown 转 HTML */
                toHtml(this: Markdown, value: string): string {
                    if (ibas.objects.isNull(value) || value.length === 0) {
                        return "";
                    }
                    let escapeHtml: (text: string) => string = (text: string): string => text
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/\"/g, "&quot;");
                    let inline: (text: string) => string = (text: string): string => {
                        text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
                        text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
                        text = text.replace(/\*([^*]+)\*\*/g, "<em>$1</em>");
                        return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                            (match: string, label: string, url: string): string => {
                                let safeUrl: string = /^(https?:|mailto:|\/|#)/i.test(url) ? url : "#";
                                return ibas.strings.format("<a href=\"{0}\" target=\"_blank\">{1}</a>",
                                    escapeHtml(safeUrl), label);
                            });
                    };
                    let lines: string[] = value.replace(/\r\n/g, "\n").split("\n");
                    let result: string[] = [];
                    let listType: string = "";
                    let inCode: boolean = false;
                    let codeLines: string[] = [];
                    let closeList: () => void = (): void => {
                        if (listType.length > 0) {
                            result.push(ibas.strings.format("</{0}>", listType));
                            listType = "";
                        }
                    };
                    for (let line of lines) {
                        if (/^\s*```/.test(line)) {
                            if (inCode) {
                                result.push(ibas.strings.format("<pre><code>{0}</code></pre>",
                                    escapeHtml(codeLines.join("\n"))));
                                codeLines = [];
                            } else {
                                closeList();
                            }
                            inCode = !inCode;
                            continue;
                        }
                        if (inCode) {
                            codeLines.push(line);
                            continue;
                        }
                        let unordered: RegExpMatchArray = line.match(/^\s*[-*]\s+(.+)$/);
                        let ordered: RegExpMatchArray = line.match(/^\s*\d+\.\s+(.+)$/);
                        if (unordered || ordered) {
                            let currentType: string = unordered ? "ul" : "ol";
                            if (listType !== currentType) {
                                closeList();
                                listType = currentType;
                                result.push(ibas.strings.format("<{0}>", listType));
                            }
                            result.push(ibas.strings.format("<li>{0}</li>", inline(escapeHtml(
                                (unordered || ordered)[1]))));
                            continue;
                        }
                        closeList();
                        if (/^\s*$/.test(line)) {
                            continue;
                        }
                        let heading: RegExpMatchArray = line.match(/^\s*(#{1,6})\s+(.+)$/);
                        if (heading) {
                            let level: number = heading[1].length;
                            result.push(ibas.strings.format("<h{0}>{1}</h{0}>", level,
                                inline(escapeHtml(heading[2]))));
                        } else {
                            result.push(ibas.strings.format("<p>{0}</p>", inline(escapeHtml(line))));
                        }
                    }
                    if (inCode) {
                        result.push(ibas.strings.format("<pre><code>{0}</code></pre>",
                            escapeHtml(codeLines.join("\n"))));
                    }
                    closeList();
                    return result.join("");
                }
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
