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
            const CLOSE_HANDER: Map<MessageStrip, number> = new Map<MessageStrip, number>();
            /**
             * 消息条
             */
            sap.m.MessageStrip.extend("sap.extension.m.MessageStrip", {
                metadata: {
                    properties: {
                        /** 自动关闭时间 */
                        autoClosing: { type: "int", },
                        /** 位置方式 */
                        position: { type: "string", },
                        /** 位置左 */
                        positionLeft: { type: "string", },
                        /** 位置右 */
                        positionRight: { type: "string", },
                        /** 位置上 */
                        positionTop: { type: "string", },
                        /** 位置下 */
                        positionBottom: { type: "string", },
                    },
                    events: {}
                },
                renderer: {
                },
                onAfterRendering(this: MessageStrip): void {
                    (<any>sap.m.MessageStrip.prototype).onAfterRendering.apply(this, arguments);
                    let dom: JQuery = this.$();
                    if (dom) {
                        let value: string = this.getPosition();
                        if (!ibas.strings.isEmpty(value)) {
                            dom.css("position", value);
                            value = this.getPositionLeft();
                            if (!ibas.strings.isEmpty(value)) {
                                dom.css("left", value);
                            }
                            value = this.getPositionRight();
                            if (!ibas.strings.isEmpty(value)) {
                                dom.css("right", value);
                            }
                            value = this.getPositionTop();
                            if (!ibas.strings.isEmpty(value)) {
                                dom.css("top", value);
                            }
                            value = this.getPositionBottom();
                            if (!ibas.strings.isEmpty(value)) {
                                dom.css("bottom", value);
                            }
                            dom.css("z-index", 99);
                            // dom.css("width", "calc(60%)");
                        }
                    }
                },
                open(this: MessageStrip): MessageStrip {
                    if (this.getVisible() === false) {
                        this.setVisible(true);
                    }
                    let type: sap.ui.core.MessageType;
                    let text: string;
                    if (arguments.length > 1) {
                        type = arguments[0];
                        text = arguments[1];
                    } else if (arguments.length > 0) {
                        text = arguments[0];
                    }
                    let hander: number = CLOSE_HANDER.get(this);
                    if (hander > 0) {
                        clearTimeout(hander);
                    }
                    let autoClosing: number = this.getAutoClosing();
                    if (autoClosing > 0) {
                        CLOSE_HANDER.set(this, setTimeout(() => {
                            this.close();
                        }, autoClosing * 1000));
                    }
                    if (type) {
                        this.setType(type);
                    }
                    if (text) {
                        this.setText(text);
                    }
                    return this;
                },
                exit(this: MessageStrip): void {
                    CLOSE_HANDER.delete(this);
                    (<any>sap.m.MessageStrip.prototype).exit.apply(this, arguments);
                }
            });
        }
    }
}
