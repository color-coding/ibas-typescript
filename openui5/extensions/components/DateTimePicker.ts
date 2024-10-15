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
            const DEFAULT_FORMAT_DATE: string = "yyyy-MM-dd";
            const DEFAULT_FORMAT_TIME: string = "HH:mm";
            const DEFAULT_FORMAT_DATETIME: string = DEFAULT_FORMAT_DATE + " " + DEFAULT_FORMAT_TIME;
            /**
             * 日期选择框
             */
            sap.m.DatePicker.extend("sap.extension.m.DatePicker", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "Date", defaultValue: null },
                        /** 值模板 */
                        valueFormat: { type: "string", group: "Data", defaultValue: DEFAULT_FORMAT_DATE },
                        /** 显示模板 */
                        displayFormat: { type: "string", group: "Appearance", defaultValue: data.DEFAULT_FORMAT_DATE },
                    },
                    events: {
                        "valuePaste": {
                            parameters: {
                                data: {
                                    type: "any",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: DatePicker): any {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: DatePicker, value: any): DatePicker {
                    if (value instanceof Date) {
                        sap.m.DatePicker.prototype.setDateValue.apply(this, arguments);
                    } else {
                        sap.m.DatePicker.prototype.setValue.apply(this, arguments);
                    }
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setDateValue(this: DatePicker, value: any): DatePicker {
                    return this.setBindingValue(value);
                },
                /** 初始化 */
                init(this: DatePicker): void {
                    (<any>sap.m.DatePicker.prototype).init.apply(this, arguments);
                    this.attachChange(undefined, function (event: sap.ui.base.Event): void {
                        let that: any = event.getSource();
                        if (that instanceof DatePicker) {
                            let oldValue: any = that.getBindingValue();
                            let newValue: any = that.getDateValue();
                            if (oldValue !== newValue) {
                                (<any>that).setProperty("bindingValue", newValue);
                            }
                            that = null;
                        }
                    });
                },
                /** 重写绑定 */
                bindProperty(this: DatePicker, sName: string, oBindingInfo: any): DatePicker {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.DatePicker.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                onpaste(this: Input, oEvent: any): void {
                    this.fireValuePaste({ data: (typeof oEvent.originalEvent === "string") ? oEvent.originalEvent : oEvent.originalEvent.clipboardData.getData("text") });
                },
            });
            /**
             * 时间选择框
             */
            sap.m.TimePicker.extend("sap.extension.m.TimePicker", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "Date", defaultValue: null },
                        /** 值模板 */
                        valueFormat: { type: "string", group: "Data", defaultValue: DEFAULT_FORMAT_TIME },
                        /** 显示模板 */
                        displayFormat: { type: "string", group: "Appearance", defaultValue: data.DEFAULT_FORMAT_TIME },
                    },
                    events: {
                        "valuePaste": {
                            parameters: {
                                data: {
                                    type: "any",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: TimePicker): any {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: TimePicker, value: any): TimePicker {
                    if (value instanceof Date) {
                        sap.m.TimePicker.prototype.setDateValue.apply(this, arguments);
                    } else {
                        sap.m.TimePicker.prototype.setValue.apply(this, arguments);
                    }
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setDateValue(this: DatePicker, value: any): DatePicker {
                    return this.setBindingValue(value);
                },
                /** 初始化 */
                init(this: TimePicker): void {
                    (<any>sap.m.TimePicker.prototype).init.apply(this, arguments);
                    this.attachChange(undefined, function (event: sap.ui.base.Event): void {
                        let that: any = event.getSource();
                        if (that instanceof TimePicker) {
                            let oldValue: any = that.getBindingValue();
                            let newValue: any = that.getDateValue();
                            if (oldValue !== newValue) {
                                (<any>that).setProperty("bindingValue", newValue);
                            }
                            that = null;
                        }
                    });
                },
                /** 重写绑定 */
                bindProperty(this: TimePicker, sName: string, oBindingInfo: any): TimePicker {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.TimePicker.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                /** 重构设置 */
                applySettings(this: TimePicker, mSettings: any): TimePicker {
                    if (!mSettings) { mSettings = {}; }
                    if (!mSettings.valueFormat) {
                        mSettings.valueFormat = data.DEFAULT_FORMAT_TIME;
                    }
                    if (!mSettings.displayFormat) {
                        mSettings.displayFormat = data.DEFAULT_FORMAT_TIME;
                    }
                    sap.m.TimePicker.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                onpaste(this: Input, oEvent: any): void {
                    this.fireValuePaste({ data: (typeof oEvent.originalEvent === "string") ? oEvent.originalEvent : oEvent.originalEvent.clipboardData.getData("text") });
                },
            });
            /**
             * 日期时间选择框
             */
            sap.m.DateTimePicker.extend("sap.extension.m.DateTimePicker", {
                metadata: {
                    properties: {
                        /** 时间 */
                        timePart: { type: "int", defaultValue: 0 },
                        /** 日期 */
                        datePart: { type: "Date", defaultValue: null },
                        /** 值模板 */
                        valueFormat: { type: "string", group: "Data", defaultValue: DEFAULT_FORMAT_DATETIME },
                        /** 显示模板 */
                        displayFormat: { type: "string", group: "Appearance", defaultValue: data.DEFAULT_FORMAT_DATETIME },
                    },
                    events: {
                        "valuePaste": {
                            parameters: {
                                data: {
                                    type: "any",
                                },
                            }
                        },
                    }
                },
                renderer: {
                },
                /**
                 * 设置时间部分
                 * @param value 值
                 */
                setTimePart(this: DateTimePicker, value: any): DateTimePicker {
                    let time: number = value;
                    if (value instanceof Date) {
                        time = value.getHours() * 100 + value.getMinutes();
                    } else {
                        time = ibas.numbers.toInt(value);
                    }
                    this.setProperty("timePart", time);
                    let date: Date = this.getDateValue();
                    if (!(date instanceof Date)) {
                        date = new Date();
                    }
                    let hour: number = Math.floor(time / 100);
                    let minute: number = time - (hour * 100);
                    date.setHours(hour, minute, 0, 0);
                    this.setDateValue(date);
                    return this;
                },
                /**
                 * 设置日期部分
                 * @param value 值
                 */
                setDatePart(this: DateTimePicker, value: any): DateTimePicker {
                    if (value instanceof Date) {
                        let date: Date = this.getDateValue();
                        if (!(date instanceof Date)) {
                            date = new Date(value);
                        }
                        let time: number = this.getTimePart();
                        let hour: number = Math.floor(time / 100);
                        let minute: number = time - (hour * 100);
                        date.setHours(hour, minute, 0, 0);
                        this.setDateValue(date);
                    }
                    this.setProperty("datePart", value);
                    return this;
                },
                /**
                 * 设置值
                 * @param value 值
                 */
                setDateValue(this: DateTimePicker, value: any): DateTimePicker {
                    if (value instanceof Date) {
                        let date: Date = new Date(value);
                        let hour: number = date.getHours();
                        let minute: number = date.getMinutes();
                        date.setHours(hour, minute, 0, 0);
                        this.setProperty("datePart", date);
                        this.setProperty("timePart", hour * 100 + minute);
                    }
                    sap.m.DateTimePicker.prototype.setDateValue.apply(this, arguments);
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: DateTimePicker, sName: string, oBindingInfo: any): DateTimePicker {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.DateTimePicker.prototype.bindProperty.apply(this, arguments);
                    return this;
                },
                onpaste(this: Input, oEvent: any): void {
                    this.fireValuePaste({ data: (typeof oEvent.originalEvent === "string") ? oEvent.originalEvent : oEvent.originalEvent.clipboardData.getData("text") });
                },
            });
        }
    }
}
