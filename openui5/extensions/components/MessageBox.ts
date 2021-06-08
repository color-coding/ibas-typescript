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
            export namespace MessageBox {
                export interface IMessageBoxOptions {
                    /** id */
                    id?: string;
                    /** id */
                    timeOut?: number;
                    /** 类型 */
                    type: ibas.emMessageType;
                    /** 标题 */
                    title?: string;
                    /** 动作 */
                    actions?: ibas.emMessageAction[];
                    /** 调用完成 */
                    onCompleted?(action: ibas.emMessageAction): void;
                    /** 详情 */
                    details?: string;
                    /** 延迟选择时间 */
                    latencyTime?: number;
                    /** 默认项 */
                    initialFocus?: ibas.emMessageAction;
                }
                export function error(vMessage: string, mOptions?: IMessageBoxOptions): void {
                    if (ibas.objects.isNull(mOptions)) {
                        mOptions = {
                            type: ibas.emMessageType.ERROR,
                        };
                    }
                    if (mOptions.type !== ibas.emMessageType.ERROR) {
                        mOptions.type = ibas.emMessageType.ERROR;
                    }
                    show(vMessage, mOptions);
                }
                export function information(vMessage: string, mOptions?: IMessageBoxOptions): void {
                    if (ibas.objects.isNull(mOptions)) {
                        mOptions = {
                            type: ibas.emMessageType.INFORMATION,
                        };
                    }
                    if (mOptions.type !== ibas.emMessageType.INFORMATION) {
                        mOptions.type = ibas.emMessageType.INFORMATION;
                    }
                    show(vMessage, mOptions);
                }
                export function success(vMessage: string, mOptions?: IMessageBoxOptions): void {
                    if (ibas.objects.isNull(mOptions)) {
                        mOptions = {
                            type: ibas.emMessageType.SUCCESS,
                        };
                    }
                    if (mOptions.type !== ibas.emMessageType.SUCCESS) {
                        mOptions.type = ibas.emMessageType.SUCCESS;
                    }
                    show(vMessage, mOptions);
                }
                export function warning(vMessage: string, mOptions?: IMessageBoxOptions): void {
                    if (ibas.objects.isNull(mOptions)) {
                        mOptions = {
                            type: ibas.emMessageType.WARNING,
                        };
                    }
                    if (mOptions.type !== ibas.emMessageType.WARNING) {
                        mOptions.type = ibas.emMessageType.WARNING;
                    }
                    show(vMessage, mOptions);
                }
                export function show(vMessage: string, mOptions?: IMessageBoxOptions): void {
                    if (ibas.objects.isNull(mOptions)) {
                        mOptions = {
                            type: undefined,
                        };
                    }
                    jQuery.sap.require("sap.m.MessageBox");
                    if (!ibas.strings.isEmpty(vMessage)) {
                        let boCode: string;
                        vMessage = vMessage.replace(/\{(.+?)\}/g, function (value: string): string {
                            if (value.startsWith("{[") && value.endsWith("]}")) {
                                let values: string[] = value.substring(2).split("].[");
                                if (values.length === 2) {
                                    boCode = values[0];
                                }
                            }
                            return ibas.businessobjects.describe(value);
                        });
                        if (!ibas.strings.isEmpty(boCode)) {
                            vMessage = vMessage.replace(/\[[0-9a-zA-Z]+.\]/g, function (value: string): string {
                                if (value.startsWith("[") && value.endsWith("]")) {
                                    let boName: string = ibas.businessobjects.name(boCode);
                                    if (!ibas.strings.equals(boCode, boName)) {
                                        return ibas.strings.format("[{0}]", ibas.businessobjects.resource(boName, value.substring(1, value.length - 1)));
                                    }
                                }
                                return value;
                            });
                        }
                    }
                    if (mOptions.latencyTime > 0) {
                        // 超时后自动选择
                        mOptions.id = ibas.strings.format("msgbox-{0}", ibas.dates.now().getTime());
                        if (!mOptions.initialFocus) {
                            mOptions.initialFocus = mOptions.actions[0];
                        }
                    }
                    // 普通显示
                    sap.m.MessageBox.show(vMessage, {
                        id: mOptions.id,
                        title: mOptions.title,
                        icon: toMessageBoxIcon(mOptions.type),
                        actions: toMessageBoxAction(mOptions.actions),
                        details: mOptions.details,
                        onClose(oAction: any): void {
                            if (mOptions.timeOut > 0) {
                                clearTimeout(mOptions.timeOut);
                            }
                            if (mOptions.onCompleted instanceof Function) {
                                mOptions.onCompleted(toMessageAction(oAction));
                            }
                        }
                    });
                    // 自动选择
                    if (mOptions.id) {
                        let footer: any = sap.ui.getCore().byId(ibas.strings.format("{0}-footer", mOptions.id));
                        if (footer instanceof sap.m.Toolbar) {
                            let button: any = footer.getContent()[mOptions.actions.indexOf(mOptions.initialFocus) + 1];
                            if (button instanceof sap.m.Button) {
                                let func: Function = function (): void {
                                    mOptions.latencyTime--;
                                    if (mOptions.latencyTime < 0) {
                                        let element: any = sap.ui.getCore().byId(mOptions.id);
                                        if (element instanceof sap.ui.core.Element) {
                                            element.destroy();
                                        }
                                        if (mOptions.onCompleted instanceof Function) {
                                            mOptions.onCompleted(mOptions.initialFocus);
                                        }
                                    } else {
                                        let text: string = button.getText();
                                        let index: number = text.lastIndexOf("(");
                                        if (index > 0) {
                                            text = text.substring(0, index);
                                        }
                                        button.setText(ibas.strings.format("{0} ({1})", text, mOptions.latencyTime));
                                        mOptions.timeOut = setTimeout(func, 1000);
                                    }
                                };
                                mOptions.timeOut = setTimeout(func, 1000);
                            }
                        }
                    }
                }
                /** 转换消息类型值  */
                function toMessageBoxIcon(data: ibas.emMessageType): any {
                    switch (data) {
                        case ibas.emMessageType.ERROR:
                            return sap.m.MessageBox.Icon.ERROR;
                        case ibas.emMessageType.INFORMATION:
                            return sap.m.MessageBox.Icon.INFORMATION;
                        case ibas.emMessageType.QUESTION:
                            return sap.m.MessageBox.Icon.QUESTION;
                        case ibas.emMessageType.SUCCESS:
                            return sap.m.MessageBox.Icon.SUCCESS;
                        case ibas.emMessageType.WARNING:
                            return sap.m.MessageBox.Icon.WARNING;
                        default:
                            return sap.m.MessageBox.Icon.NONE;
                    }
                }
                /** 转换消息框动作值 */
                function toMessageBoxAction(data: ibas.emMessageAction | ibas.emMessageAction[]): any {
                    let toValue: Function = function (data: ibas.emMessageAction): any {
                        switch (data) {
                            case ibas.emMessageAction.ABORT:
                                return sap.m.MessageBox.Action.ABORT;
                            case ibas.emMessageAction.CANCEL:
                                return sap.m.MessageBox.Action.CANCEL;
                            case ibas.emMessageAction.CLOSE:
                                return sap.m.MessageBox.Action.CLOSE;
                            case ibas.emMessageAction.DELETE:
                                return sap.m.MessageBox.Action.DELETE;
                            case ibas.emMessageAction.IGNORE:
                                return sap.m.MessageBox.Action.IGNORE;
                            case ibas.emMessageAction.NO:
                                return sap.m.MessageBox.Action.NO;
                            case ibas.emMessageAction.RETRY:
                                return sap.m.MessageBox.Action.RETRY;
                            case ibas.emMessageAction.YES:
                                return sap.m.MessageBox.Action.YES;
                            default:
                                return sap.m.MessageBox.Action.OK;
                        }
                    };
                    if (data instanceof Array) {
                        let values: any = [];
                        for (let item of data) {
                            values.push(toValue(item));
                        }
                        return values;
                    } else {
                        return toValue(data);
                    }
                }
                /** 回转消息框值 */
                function toMessageAction(data: any): ibas.emMessageAction {
                    switch (data) {
                        case sap.m.MessageBox.Action.ABORT:
                            return ibas.emMessageAction.ABORT;
                        case sap.m.MessageBox.Action.CANCEL:
                            return ibas.emMessageAction.CANCEL;
                        case sap.m.MessageBox.Action.CLOSE:
                            return ibas.emMessageAction.CLOSE;
                        case sap.m.MessageBox.Action.DELETE:
                            return ibas.emMessageAction.DELETE;
                        case sap.m.MessageBox.Action.IGNORE:
                            return ibas.emMessageAction.IGNORE;
                        case sap.m.MessageBox.Action.NO:
                            return ibas.emMessageAction.NO;
                        case sap.m.MessageBox.Action.RETRY:
                            return ibas.emMessageAction.RETRY;
                        case sap.m.MessageBox.Action.YES:
                            return ibas.emMessageAction.YES;
                        default:
                            return ibas.emMessageAction.OK;
                    }
                }
            }
        }
    }
}
