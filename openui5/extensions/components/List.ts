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
            /** 改变表格选择风格 */
            function changeSelectionStyle(this: sap.m.ListBase, event: sap.ui.base.Event): void {
                if (!(this instanceof sap.m.ListBase)) {
                    return;
                }
                let selected: boolean = event.getParameter("selected");
                let item: any = event.getParameter("listItem");
                if (selected === true) {
                    this.removeSelections(true);
                    this.setSelectedItem(item, true);
                }
            }
            /**
             * 获取可视行数
             * @param defalutCount 默认值（未配置返回）
             */
            export function visibleRowCount(count: number): number {
                return ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, count);
            }
            /**
             * 列表
             */
            sap.m.List.extend("sap.extension.m.List", {
                metadata: {
                    properties: {
                        /** 选择方式 */
                        chooseType: { type: "int", defaultValue: ibas.emChooseType.MULTIPLE },
                    },
                    events: {
                        "nextDataSet": {
                            parameters: {
                                data: {
                                    type: "any",
                                }
                            }
                        }
                    }
                },
                renderer: {},
                /**
                 * 获取选择类型
                 */
                getChooseType(this: List): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: List, value: ibas.emChooseType): List {
                    this.detachSelectionChange(changeSelectionStyle);
                    if (value === ibas.emChooseType.SINGLE) {
                        this.setMode(sap.m.ListMode.MultiSelect);
                        this.attachSelectionChange(undefined, changeSelectionStyle);
                    } else if (value === ibas.emChooseType.MULTIPLE) {
                        this.setMode(sap.m.ListMode.MultiSelect);
                    } else {
                        this.setMode(sap.m.ListMode.None);
                    }
                    return this.setProperty("chooseType", value);
                },
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(this: List): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    if (this.getMode() === sap.m.ListMode.None) {
                        let item: sap.m.ListItemBase = this.getSwipedItem();
                        if (!ibas.objects.isNull(item)) {
                            selecteds.push(item.getBindingContext().getObject());
                        }
                    } else {
                        for (let item of this.getSelectedContexts(undefined)) {
                            selecteds.push((<any>item).getObject());
                        }
                    }
                    return selecteds;
                },
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(this: List): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    for (let item of this.getItems()) {
                        selecteds.push(item.getBindingContext().getObject());
                    }
                    if (this.getMode() === sap.m.ListMode.None) {
                        if (!ibas.objects.isNull(this.getSwipedItem())) {
                            selecteds.remove(this.getSwipedItem().getBindingContext().getObject());
                        }
                    } else {
                        for (let item of this.getSelectedContexts(undefined)) {
                            selecteds.remove((<any>item).getObject());
                        }
                    }
                    return selecteds;
                },
                /** 重构设置 */
                applySettings(this: List, mSettings: any, oScope?: any): List {
                    if (!mSettings.includeItemInSelection) {
                        mSettings.includeItemInSelection = true;
                    }
                    if (!mSettings.growing) {
                        mSettings.growing = true;
                    }
                    if (!mSettings.growingScrollToLoad) {
                        mSettings.growingScrollToLoad = true;
                    }
                    sap.m.List.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                init(this: List): void {
                    // 基类初始化
                    (<any>sap.m.List.prototype).init.apply(this, arguments);
                    // 监听行变化事件
                    this.attachEvent("updateFinished", undefined, () => {
                        if (this.getBusy()) {
                            // 忙状态不监听
                            return;
                        }
                        let model: any = this.getModel(undefined);
                        if (!ibas.objects.isNull(model)) {
                            let data: any = model.getData();
                            if (!ibas.objects.isNull(data) && !ibas.objects.isNull(this.getGrowingInfo())) {
                                if (this.getGrowingInfo().total === this.getGrowingInfo().actual) {
                                    if (!ibas.objects.isNull(data)) {
                                        let modelData: any = data.rows; // 与绑定对象的路径有关
                                        let dataCount: number = modelData instanceof Array ? modelData.length : 0;
                                        let visibleRow: number = this.getGrowingThreshold(); // 当前显示条数
                                        if (dataCount <= 0 || dataCount < visibleRow) {
                                            return;
                                        }
                                        // 调用事件
                                        this.setBusy(true);
                                        this.fireNextDataSet({ data: modelData[modelData.length - 1] });
                                    }
                                }
                            }
                        }
                    });
                },
                /** 退出 */
                exit(this: List): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.m.List.prototype).exit.apply(this, arguments);
                }
            });
        }
    }
}
