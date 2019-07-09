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
             * 对象状态
             */
            sap.m.ObjectStatus.extend("sap.extension.m.ObjectStatus", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
            });
            /**
             * 对象枚举状态
             */
            ObjectStatus.extend("sap.extension.m.ObjectEnumStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取枚举类型
                 */
                getEnumType(this: ObjectEnumStatus): any {
                    return this.getProperty("enumType");
                },
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(this: ObjectEnumStatus, value: any): ObjectEnumStatus {
                    return this.setProperty("enumType", value);
                },
                /**
                 * 设置文本，并修改状态及图标值
                 * @param value 值
                 */
                setText(this: ObjectEnumStatus, value: string): ObjectEnumStatus {
                    ObjectStatus.prototype.setText.apply(this, arguments);
                    let context: any = this.getBindingContext();
                    if (context instanceof sap.ui.model.Context) {
                        let value: any = ibas.objects.propertyValue(context.getObject(), this.getBindingPath("text"));
                        if (!ibas.objects.isNull(value)) {
                            if (this.toState instanceof Function) {
                                this.setState(this.toState(value));
                            }
                            if (this.toIcon instanceof Function) {
                                this.setIcon(this.toIcon(value));
                            }
                        }
                    }
                    return this;
                },
                /** 重构设置 */
                applySettings(this: ObjectEnumStatus, mSetting: any): ObjectEnumStatus {
                    if (mSetting) {
                        if (mSetting.toState instanceof Function) {
                            this.toState = mSetting.toState;
                            delete (mSetting.toState);
                        }
                        if (mSetting.toIcon instanceof Function) {
                            this.toIcon = mSetting.toIcon;
                            delete (mSetting.toIcon);
                        }
                    }
                    ObjectStatus.prototype.applySettings.apply(this, arguments);
                    return this;
                },
            });
            /**
             * 对象单据状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectDocumentStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any", defalut: ibas.emDocumentStatus },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emDocumentStatus.RELEASED) {
                        return sap.ui.core.ValueState.Information;
                    } else if (data === ibas.emDocumentStatus.FINISHED) {
                        return sap.ui.core.ValueState.Success;
                    } else if (data === ibas.emDocumentStatus.CLOSED) {
                        return sap.ui.core.ValueState.Success;
                    } else {
                        return sap.ui.core.ValueState.None;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emDocumentStatus.RELEASED) {
                        return "sap-icon://status-in-process";
                    } else if (data === ibas.emDocumentStatus.FINISHED) {
                        return "sap-icon://status-completed";
                    } else if (data === ibas.emDocumentStatus.CLOSED) {
                        return "sap-icon://status-critical";
                    } else {
                        return "sap-icon://status-inactive";
                    }
                }
            });
            function negative(this: ObjectYesNoStatus, value: ibas.emYesNo): ibas.emYesNo {
                if (this.getNegative() === true) {
                    if (value === ibas.emYesNo.NO) {
                        return ibas.emYesNo.YES;
                    } else {
                        return ibas.emYesNo.NO;
                    }
                }
                return value;
            }
            /**
             * 对象是否状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectYesNoStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any", defalut: ibas.emYesNo },
                        /** 相反的 */
                        negative: { type: "boolean", defalut: false },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(this: ObjectYesNoStatus, data: any): sap.ui.core.ValueState {
                    if (negative.call(this, data) === ibas.emYesNo.NO) {
                        return sap.ui.core.ValueState.Error;
                    } else {
                        return sap.ui.core.ValueState.Success;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(this: ObjectYesNoStatus, data: any): string {
                    if (negative.call(this, data) === ibas.emYesNo.NO) {
                        return "sap-icon://sys-cancel";
                    } else {
                        return "sap-icon://sys-enter";
                    }
                }
            });
            /**
             * 对象审批状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectApprovalStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any", defalut: ibas.emApprovalStatus },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emApprovalStatus.APPROVED) {
                        return sap.ui.core.ValueState.Success;
                    } else if (data === ibas.emApprovalStatus.CANCELLED) {
                        return sap.ui.core.ValueState.Error;
                    } else if (data === ibas.emApprovalStatus.PROCESSING) {
                        return sap.ui.core.ValueState.Information;
                    } else if (data === ibas.emApprovalStatus.REJECTED) {
                        return sap.ui.core.ValueState.Error;
                    } else {
                        return sap.ui.core.ValueState.None;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emApprovalStatus.APPROVED) {
                        return "sap-icon://accept";
                    } else if (data === ibas.emApprovalStatus.CANCELLED) {
                        return "sap-icon://cancel";
                    } else if (data === ibas.emApprovalStatus.PROCESSING) {
                        return "sap-icon://status-in-process";
                    } else if (data === ibas.emApprovalStatus.REJECTED) {
                        return "sap-icon://decline";
                    } else {
                        return "sap-icon://status-positive";
                    }
                }
            });
            /**
             * 对象状态
             */
            ObjectEnumStatus.extend("sap.extension.m.ObjectBOStatus", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any", defalut: ibas.emBOStatus },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 转为状态值
                 * @param data 枚举值
                 */
                toState(data: any): sap.ui.core.ValueState {
                    if (data === ibas.emBOStatus.OPEN) {
                        return sap.ui.core.ValueState.Information;
                    } else {
                        return sap.ui.core.ValueState.Success;
                    }
                },
                /**
                 * 转为图标值
                 * @param data 枚举值
                 */
                toIcon(data: any): string {
                    if (data === ibas.emBOStatus.OPEN) {
                        return "sap-icon://status-in-process";
                    } else {
                        return "sap-icon://status-critical";
                    }
                }
            });
        }
    }
}
