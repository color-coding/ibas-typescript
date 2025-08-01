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
            export function changeSelectionStyle(this: sap.m.ListBase, event: sap.ui.base.Event): void {
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
                    if (ibas.objects.isNull(mSettings)) {
                        mSettings = {};
                    }
                    if (ibas.objects.isNull(mSettings.includeItemInSelection)) {
                        mSettings.includeItemInSelection = true;
                    }
                    if (mSettings.nextDataSet instanceof Function) {
                        // 启用数据分页加载
                        if (ibas.objects.isNull(mSettings.growing)) {
                            mSettings.growing = true;
                        }
                        if (ibas.objects.isNull(mSettings.growingScrollToLoad)) {
                            mSettings.growingScrollToLoad = true;
                        }
                    }
                    return sap.m.List.prototype.applySettings.apply(this, arguments);
                },
                init(this: List): void {
                    // 基类初始化
                    (<any>sap.m.List.prototype).init.apply(this, arguments);
                    // 监听行变化事件
                    this.attachEvent("updateFinished", undefined, (event: sap.ui.base.Event) => {
                        if (!this.hasListeners("nextDataSet")) {
                            // 没有注册事件，则退出
                            return;
                        }
                        if (this.getBusy()) {
                            // 忙状态不监听
                            return;
                        }
                        if (event.getParameter("reason") !== "Growing") {
                            // 非滚动条原因，不触发
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

            /**
             * 树列表
             */
            sap.m.Tree.extend("sap.extension.m.Tree", {
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
                getChooseType(this: Tree): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: Tree, value: ibas.emChooseType): Tree {
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
                getSelecteds<T>(this: Tree): ibas.IList<T> {
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
                getUnSelecteds<T>(this: Tree): ibas.IList<T> {
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
                applySettings(this: Tree, mSettings: any, oScope?: any): Tree {
                    if (ibas.objects.isNull(mSettings.includeItemInSelection)) {
                        mSettings.includeItemInSelection = true;
                    }
                    /*
                    // 不支持
                    if (ibas.objects.isNull(mSettings.growing)) {
                        mSettings.growing = true;
                    }
                    if (ibas.objects.isNull(mSettings.growingScrollToLoad)) {
                        mSettings.growingScrollToLoad = true;
                    }
                    */
                    sap.m.Tree.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                init(this: Tree): void {
                    // 基类初始化
                    (<any>sap.m.Tree.prototype).init.apply(this, arguments);
                },
                /** 退出 */
                exit(this: Tree): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.m.Tree.prototype).exit.apply(this, arguments);
                }
            });
            /**
             * 自定义列表项目
             */
            sap.m.CustomListItem.extend("sap.extension.m.CustomListItem", {
                metadata: {
                    properties: {
                        detailIcon: { type: "string" },
                        detailTooltip: { type: "string" },
                    },
                    events: {
                    },
                },
                renderer: {
                },
                onAfterRendering(this: CustomListItem): void {
                    (<any>sap.m.CustomListItem.prototype).onAfterRendering.apply(this, arguments);
                    let typeCtrl: any = (<any>this).getTypeControl();
                    if (typeCtrl instanceof sap.m.Button) {
                        let value: string = this.getDetailIcon();
                        if (!ibas.strings.isEmpty(value)) {
                            typeCtrl.setIcon(value);
                        }
                        value = this.getDetailTooltip();
                        if (!ibas.strings.isEmpty(value)) {
                            typeCtrl.setTooltip(value);
                        }
                    }
                }
            });
            /**
             * 列表项目
             */
            sap.m.ColumnListItem.extend("sap.extension.m.ColumnListItem", {
                metadata: {
                    properties: {
                        detailIcon: { type: "string" },
                        detailTooltip: { type: "string" },
                    },
                    events: {
                    },
                },
                renderer: {
                },
                onAfterRendering(this: ColumnListItem): void {
                    (<any>sap.m.ColumnListItem.prototype).onAfterRendering.apply(this, arguments);
                    let typeCtrl: any = (<any>this).getTypeControl();
                    if (typeCtrl instanceof sap.m.Button) {
                        let value: string = this.getDetailIcon();
                        if (!ibas.strings.isEmpty(value)) {
                            typeCtrl.setIcon(value);
                        }
                        value = this.getDetailTooltip();
                        if (!ibas.strings.isEmpty(value)) {
                            typeCtrl.setTooltip(value);
                        }
                    }
                }
            });
        }
        export namespace f {
            /**
             * 列表
             */
            sap.f.GridList.extend("sap.extension.f.GridList", {
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
                getChooseType(this: GridList): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: GridList, value: ibas.emChooseType): GridList {
                    this.detachSelectionChange(m.changeSelectionStyle);
                    if (value === ibas.emChooseType.SINGLE) {
                        this.setMode(sap.m.ListMode.MultiSelect);
                        this.attachSelectionChange(undefined, m.changeSelectionStyle);
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
                getSelecteds<T>(this: GridList): ibas.IList<T> {
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
                getUnSelecteds<T>(this: GridList): ibas.IList<T> {
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
                applySettings(this: GridList, mSettings: any, oScope?: any): GridList {
                    if (!mSettings.includeItemInSelection) {
                        mSettings.includeItemInSelection = true;
                    }
                    if (!mSettings.growing) {
                        mSettings.growing = true;
                    }
                    if (!mSettings.growingScrollToLoad) {
                        mSettings.growingScrollToLoad = true;
                    }
                    sap.f.GridList.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                init(this: GridList): void {
                    // 基类初始化
                    (<any>sap.f.GridList.prototype).init.apply(this, arguments);
                    // 监听行变化事件
                    this.attachEvent("updateFinished", undefined, () => {
                        if (!this.hasListeners("nextDataSet")) {
                            // 没有注册事件，则退出
                            return;
                        }
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
                exit(this: GridList): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.f.GridList.prototype).exit.apply(this, arguments);
                }
            });
        }
    }
}
