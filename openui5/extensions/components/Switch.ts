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
             * 开关框
             */
            sap.m.Switch.extend("sap.extension.m.Switch", {
                metadata: {
                    properties: {
                        /** 绑定值 */
                        bindingValue: { type: "boolean", defaultValue: false },
                    },
                    events: {}
                },
                renderer: {
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: Switch): boolean {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: Switch, value: boolean): Switch {
                    sap.m.Switch.prototype.setState.apply(this, arguments);
                    this.setProperty("bindingValue", value);
                    return this;
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setState(this: Switch, value: boolean): Switch {
                    return this.setBindingValue(value);
                },
                /** 重写绑定 */
                bindProperty(this: Switch, sName: string, oBindingInfo: any): Switch {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.Switch.prototype.bindProperty.apply(this, arguments);
                    return this;
                }
            });
        }
    }
}
