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
             * 日期选择框
             */
            sap.m.DatePicker.extend("sap.extension.m.DatePicker", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "Date" },
                        /** 值模板 */
                        valueFormat: { type: "string", group: "Data", defaultValue: data.Date.DEFAULT_FORMAT },
                        /** 显示模板 */
                        displayFormat: { type: "string", group: "Appearance", defaultValue: data.Date.DEFAULT_FORMAT },
                    },
                    events: {}
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
                    sap.m.DatePicker.prototype.setDateValue.apply(this, arguments);
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
                    this.attachChange(undefined, () => {
                        let oldValue: any = this.getBindingValue();
                        let newValue: any = this.getDateValue();
                        if (oldValue !== newValue) {
                            this.setProperty("bindingValue", newValue);
                        }
                    });
                }
            });
            /**
             * 时间选择框
             */
            sap.m.TimePicker.extend("sap.extension.m.TimePicker", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "Date" },
                        /** 值模板 */
                        valueFormat: { type: "string", group: "Data", defaultValue: data.Time.DEFAULT_FORMAT },
                        /** 显示模板 */
                        displayFormat: { type: "string", group: "Appearance", defaultValue: data.Time.DEFAULT_FORMAT },
                    },
                    events: {}
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
                    sap.m.TimePicker.prototype.setDateValue.apply(this, arguments);
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
                    this.attachChange(undefined, () => {
                        let oldValue: any = this.getBindingValue();
                        let newValue: any = this.getDateValue();
                        if (oldValue !== newValue) {
                            this.setProperty("bindingValue", newValue);
                        }
                    });
                },
                /** 重构设置 */
                applySettings(this: TimePicker, mSettings: any): TimePicker {
                    if (!mSettings.valueFormat) {
                        mSettings.valueFormat = data.Time.DEFAULT_FORMAT;
                    }
                    if (!mSettings.displayFormat) {
                        mSettings.displayFormat = data.Time.DEFAULT_FORMAT;
                    }
                    sap.m.TimePicker.prototype.applySettings.apply(this, arguments);
                    return this;
                }
            });
        }
    }
}
