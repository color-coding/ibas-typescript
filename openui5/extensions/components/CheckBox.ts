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
             * 复选框
             */
            sap.m.CheckBox.extend("sap.extension.m.CheckBox", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "boolean" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: CheckBox): boolean {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: CheckBox, value: boolean): CheckBox {
                    sap.m.CheckBox.prototype.setSelected.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setSelected(this: CheckBox, value: boolean): CheckBox {
                    return this.setBindingValue(value);
                },
                /** 重写绑定 */
                bindProperty(this: CheckBox, sName: string, oBindingInfo: any): CheckBox {
                    utils.checkBindingInfo.apply(this, arguments);
                    sap.m.CheckBox.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
        }
    }
}
