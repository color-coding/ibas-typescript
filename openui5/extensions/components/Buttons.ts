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
                        bindingValue: { type: "string", defaultValue: null },
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
                    this.attachSelectionChange(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = event.getSource();
                        if (source instanceof SegmentedButton) {
                            source.setBindingValue(source.getSelectedKey());
                        }
                    });
                },
                /** 重写绑定 */
                bindProperty(this: Input, sName: string, oBindingInfo: any): Input {
                    managedobjects.checkBinding.apply(this, arguments);
                    sap.m.SegmentedButton.prototype.bindProperty.apply(this, arguments);
                    return this;
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
            /**
             * 菜单按钮
             */
            sap.m.MenuButton.extend("sap.extension.m.MenuButton", {
                metadata: {
                    properties: {
                        autoHide: { type: "boolean", defaultValue: false },
                    },
                    events: {}
                },
                renderer: {
                },
                onBeforeRendering(this: MenuButton): void {
                    (<any>sap.m.MenuButton.prototype).onBeforeRendering.apply(this, arguments);
                    if (this.getAutoHide() === true) {
                        let count: number = 0;
                        for (let item of this.getMenu()?.getItems()) {
                            if (item.getVisible()) {
                                count++;
                            }
                        }
                        if (count > 0) {
                            this.setVisible(true);
                        } else {
                            this.setVisible(false);
                        }
                    }
                },
            });
        }
    }
}
