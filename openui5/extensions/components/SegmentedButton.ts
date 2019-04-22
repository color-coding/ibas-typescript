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
             * 分段按钮
             */
            sap.m.SegmentedButton.extend("sap.extension.m.SegmentedButton", {
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
                getBindingValue(this: SegmentedButton): string {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: SegmentedButton, value: string): SegmentedButton {
                    if (value !== this.getSelectedKey()) {
                        sap.m.SegmentedButton.prototype.setSelectedKey.apply(this, arguments);
                    }
                    return this.setProperty("bindingValue", value);
                },
                init(this: SegmentedButton): void {
                    // 调用基类构造
                    (<any>sap.m.SegmentedButton.prototype).init.apply(this, arguments);
                    // 监听事件
                    this.attachSelectionChange(undefined, () => {
                        this.setBindingValue(this.getSelectedKey());
                    });
                }
            });
            /**
             * 分段按钮-枚举
             */
            SegmentedButton.extend("sap.extension.m.EnumSegmentedButton", {
                metadata: {
                    properties: {
                        /** 枚举类型 */
                        enumType: { type: "any" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取枚举类型
                 */
                getEnumType(this: EnumSegmentedButton): any {
                    return this.getProperty("enumType");
                },
                /**
                 * 设置枚举类型
                 * @param value 枚举类型
                 */
                setEnumType(this: EnumSegmentedButton, value: any): EnumSegmentedButton {
                    return this.setProperty("enumType", value);
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: EnumSegmentedButton): EnumSegmentedButton {
                    this.destroyItems();
                    let enumType: any = this.getEnumType();
                    if (ibas.objects.isNull(enumType)) {
                        return this;
                    }
                    for (let item in enumType) {
                        if (ibas.objects.isNull(item)) {
                            continue;
                        }
                        let key: any = item;
                        let text: any = enumType[key];
                        if (typeof key !== "string" || typeof text !== "string") {
                            continue;
                        }
                        if (!isNaN(Number(key))) {
                            key = Number(key);
                        }
                        this.addItem(new sap.m.SegmentedButtonItem("", {
                            key: key,
                            text: ibas.enums.describe(enumType, key),
                        }));
                    }
                    return this;
                },
                /** 渲染之后 */
                onAfterRendering(): void {
                    if (this.getItems().length === 0) {
                        this.loadItems();
                    }
                }
            });
        }
    }
}
