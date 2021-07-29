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
             * 下拉框
             */
            sap.m.ComboBox.extend("sap.extension.m.ComboBox", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "string" },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ComboBox): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: ComboBox, value: string): ComboBox {
                    sap.m.ComboBox.prototype.setSelectedKey.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /** 重写此方法，设置选中值 */
                setSelection(this: ComboBox, value: sap.ui.core.Item): ComboBox {
                    (<any>sap.m.ComboBox.prototype).setSelection.apply(this, arguments);
                    this.setProperty("bindingValue", this.getSelectedKey());
                    return this;
                },
                /**
                 * 销毁可选项
                 */
                destroyItems(this: ComboBox): ComboBox {
                    (<any>sap.m.ComboBox.prototype).destroyItems.apply(this, arguments);
                    this.setValue(undefined);
                    return this;
                },
                /** 重写绑定 */
                bindProperty(this: ComboBox, sName: string, oBindingInfo: any): ComboBox {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.ComboBox.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
        }
    }
}
