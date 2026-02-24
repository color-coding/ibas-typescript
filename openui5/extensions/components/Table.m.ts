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
             * 表格
             */
            sap.m.Table.extend("sap.extension.m.Table", {
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
                getChooseType(this: Table): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: Table, value: ibas.emChooseType): Table {
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
                getSelecteds<T>(this: Table): ibas.IList<T> {
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
                getUnSelecteds<T>(this: Table): ibas.IList<T> {
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
                applySettings(this: Table, mSettings: any, oScope?: any): Table {
                    if (ibas.objects.isNull(mSettings)) {
                        mSettings = {};
                    }
                    if (ibas.objects.isNull(mSettings.sticky)) {
                        mSettings.sticky = [
                            sap.m.Sticky.ColumnHeaders
                        ];
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
                    return sap.m.Table.prototype.applySettings.apply(this, arguments);
                },
                init(this: Table): void {
                    // 基类初始化
                    (<any>sap.m.Table.prototype).init.apply(this, arguments);
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
                exit(this: Table): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.m.Table.prototype).exit.apply(this, arguments);
                }
            });
            /**
             * 表格列
             */
            sap.m.Column.extend("sap.extension.m.Column", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                /** 重构设置 */
                applySettings(this: Column, mSettings: any, oScope?: any): Column {
                    if (mSettings) {
                        if (typeof mSettings.header === "string") {
                            mSettings.header = new sap.m.Text("", {
                                text: mSettings.header
                            });
                        }
                    }
                    return sap.m.Column.prototype.applySettings.apply(this, arguments);
                }
            });
            /**
             * 数据表格
             */
            Table.extend("sap.extension.m.DataTable", {
                metadata: {
                    properties: {
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性过滤器 */
                        propertyFilter: { type: "function" },
                        /** 排序属性 */
                        sortProperty: { type: "string" },
                        /** 排序间隔步长，0:不支持调整 */
                        sortIntervalStep: { type: "int", defaultValue: 0 },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: DataTable): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataTable, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataTable {
                    return this.setProperty("dataInfo", value);
                },
                /**
                 * 获取属性过滤器
                 */
                getPropertyFilter(): Function {
                    return this.getProperty("propertyFilter");
                },
                /**
                 * 设置属性过滤器
                 * @param value 过滤器
                 */
                setPropertyFilter(value: (property: shell.bo.IBizPropertyInfo) => boolean): DataTable {
                    return this.setProperty("propertyFilter", value);
                },
                /** 重构设置 */
                applySettings(this: DataTable, mSettings: any): DataTable {
                    // 添加表格显示排序相关设置
                    if (!ibas.strings.isEmpty(mSettings?.sortProperty)) {
                        if (typeof mSettings.items === "string") {
                            let path: string = mSettings.items;
                            if (ibas.strings.isWith(path, "{", "}")) {
                                path = path.substring(1, path.length - 1);
                            }
                            mSettings.items = {
                                path: path
                            };
                        }
                        if (typeof mSettings.items === "object" && !ibas.strings.isEmpty(mSettings.items.path) && ibas.objects.isNull(mSettings.items.sorter)) {
                            mSettings.items.sorter = [
                                new sap.ui.model.Sorter(mSettings.sortProperty, false)
                            ];
                        }
                    }
                    if (ibas.objects.isNull(mSettings.growing)) {
                        mSettings.growing = true;
                    }
                    if (ibas.objects.isNull(mSettings.growingThreshold)) {
                        mSettings.growingThreshold = table.visibleRowCount(15) * 4;
                    }
                    Table.prototype.applySettings.apply(this, arguments);
                    let dataInfo: any = this.getDataInfo();
                    if (typeof dataInfo === "string") {
                        dataInfo = {
                            code: dataInfo,
                        };
                    } else if (typeof dataInfo === "function") {
                        dataInfo = {
                            code: dataInfo.BUSINESS_OBJECT_CODE,
                            name: ibas.objects.nameOf(dataInfo),
                        };
                    }
                    if (typeof dataInfo === "object") {
                        if (dataInfo.properties instanceof Array) {
                            propertyColumns.call(this, dataInfo);
                        } else {
                            let info: { code: string, name?: string } = dataInfo;
                            let boRepository: shell.bo.IBORepositoryShell = ibas.boFactory.create(shell.bo.BO_REPOSITORY_SHELL);
                            boRepository.fetchBizObjectInfo({
                                user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                                boCode: ibas.config.applyVariables(info.code),
                                boName: info.name,
                                onCompleted: (opRslt) => {
                                    if (opRslt.resultCode !== 0) {
                                        ibas.logger.log(new Error(opRslt.message));
                                    } else {
                                        propertyColumns.call(this, opRslt.resultObjects.firstOrDefault());
                                        // 已加载数据，则重置
                                        let model: any = this.getModel();
                                        if (model !== undefined) {
                                            this.setModel(undefined);
                                            this.setModel(model);
                                        }
                                    }
                                }
                            });
                        }
                    }
                    return this;
                },
            });
            function propertyColumns(this: DataTable, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                let itemsBindingInfo: any = this.getBindingInfo("items");
                if (!(itemsBindingInfo?.template instanceof sap.m.ColumnListItem)) {
                    return;
                }
                // 补充列绑定属性信息
                let ptyColumnMap: Map<shell.bo.IBizPropertyInfo,
                    { column: sap.m.Column, cell: any } | { column: sap.m.Column, cell: any }[]> = new Map<any, any>();
                let template: sap.m.ColumnListItem = itemsBindingInfo.template;
                for (let item of template.getCells()) {
                    let bindingPath: string = managedobjects.bindingPath(item);
                    let index: number = boInfo.properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                    if (index < 0) {
                        continue;
                    }
                    let property: shell.bo.IBizPropertyInfo = boInfo.properties[index];
                    if (!ibas.objects.isNull(property)) {
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        index = template.indexOfCell(item);
                        if (index >= 0 && index < this.getColumns().length) {
                            if (ptyColumnMap.has(property)) {
                                ptyColumnMap.set(property, ibas.arrays.create(ptyColumnMap.get(property), { column: this.getColumns()[index], cell: item }));
                            } else {
                                ptyColumnMap.set(property, { column: this.getColumns()[index], cell: item });
                            }
                        } else {
                            if (ptyColumnMap.has(property)) {
                                ptyColumnMap.set(property, ibas.arrays.create(ptyColumnMap.get(property), { column: undefined, cell: item }));
                            } else {
                                ptyColumnMap.set(property, { column: undefined, cell: item });
                            }
                        }
                    } else {
                        index = template.indexOfCell(item);
                        if (index >= 0 && index < this.getColumns().length) {
                            property = <any>{ position: index };
                            ptyColumnMap.set(property, { column: this.getColumns()[index], cell: item });
                        } else {
                            property = <any>{ position: 999 };
                            ptyColumnMap.set(property, { column: undefined, cell: item });
                        }
                    }
                }
                // 创建不存在的列
                for (let property of boInfo.properties) {
                    if (ibas.objects.isNull(property)) {
                        continue;
                    }
                    if (ibas.objects.isNull(property.authorised)) {
                        continue;
                    }
                    if (property.authorised === ibas.emAuthoriseType.NONE) {
                        continue;
                    }
                    if (ptyColumnMap.has(property)) {
                        continue;
                    }
                    ptyColumnMap.set(property, {
                        column: new Column("", {
                            header: property.systemed !== true ? property.description :
                                ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                        }),
                        cell: factories.newComponent(property, "Object.2")
                    });
                }
                // 列排序并添加
                for (let item of ibas.arrays.create(this.getColumns()).reverse()) {
                    this.removeColumn(item);
                }
                for (let item of ibas.arrays.create(template.getCells()).reverse()) {
                    template.removeCell(item);
                }
                for (let property of ibas.arrays.create(ptyColumnMap.keys()).sort((a, b) => a.position - b.position)) {
                    for (let item of ibas.arrays.create(ptyColumnMap.get(property))) {
                        let column: any = item.column;
                        let cell: any = item.cell;
                        if (property.position > 0) {
                            if (!ibas.objects.isNull(column)) {
                                this.insertColumn(column, property.position);
                            }
                            if (!ibas.objects.isNull(cell)) {
                                template.insertCell(cell, property.position);
                            }
                        } else {
                            if (!ibas.objects.isNull(column)) {
                                this.addColumn(column);
                            }
                            if (!ibas.objects.isNull(cell)) {
                                template.addCell(cell);
                            }
                        }
                    }
                }
                // 拖动排序，步长为0，不支持拖动
                if (this.getSortIntervalStep instanceof Function && this.getSortIntervalStep() > 0
                    && !(this.getDragDropConfig()?.length > 0)) {
                    // 可拖拽排序（仅当排序列显示时）
                    let dragable: boolean = false;
                    let sortProperty: string = this.getSortProperty();
                    if (!ibas.strings.isEmpty(sortProperty)) {
                        for (let property of ptyColumnMap.keys()) {
                            if (ibas.strings.equalsIgnoreCase(sortProperty, property.name)) {
                                dragable = true;
                                break;
                            }
                        }
                    }
                    if (dragable === true) {
                        this.addDragDropConfig(new sap.ui.core.dnd.DragDropInfo("", {
                            sourceAggregation: "items",
                            targetAggregation: "items",
                            dropPosition: sap.ui.core.dnd.DropPosition.Between,
                            dropLayout: sap.ui.core.dnd.DropLayout.Vertical,
                            drop(event: sap.ui.base.Event): void {
                                let dragged: any = event.getParameter("draggedControl");
                                let dropped: any = event.getParameter("droppedControl");
                                let dropPosition: string = event.getParameter("dropPosition");
                                let table: any = (<any>event.getSource())?.getDropTarget();
                                if (table instanceof DataTable) {
                                    let index: number = 1;
                                    let step: number = table.getSortIntervalStep();
                                    if (step <= 0) {
                                        step = 1;
                                    }
                                    for (let row of table.getItems()) {
                                        if (ibas.objects.isNull(row.getBindingContext())) {
                                            continue;
                                        }
                                        if (dragged === row) {
                                            continue;
                                        } else if (dropped === row) {
                                            if (dropPosition === "Before") {
                                                dragged.getBindingContext().getObject()[sortProperty] = index * step;
                                                index++;
                                                dropped.getBindingContext().getObject()[sortProperty] = index * step;
                                                index++;
                                            } else if (dropPosition === "After") {
                                                dropped.getBindingContext().getObject()[sortProperty] = index * step;
                                                index++;
                                                dragged.getBindingContext().getObject()[sortProperty] = index * step;
                                                index++;
                                            }
                                        } else {
                                            row.getBindingContext().getObject()[sortProperty] = index * step;
                                            index++;
                                        }
                                    }
                                    if (index > 1) {
                                        // table.getModel().refresh(true);
                                        // 刷新不好使，需要重新绑定
                                        let model: any = table.getModel();
                                        table.setModel(undefined);
                                        table.setModel(model);
                                    }
                                }
                            },
                        }));
                    }
                }

            }
        }
    }
}
