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
                    if (mSettings) {
                        if (ibas.objects.isNull(mSettings.sticky)) {
                            mSettings.sticky = [
                                sap.m.Sticky.ColumnHeaders
                            ];
                        }
                        if (ibas.objects.isNull(mSettings.includeItemInSelection)) {
                            mSettings.includeItemInSelection = true;
                        }
                        /* false默认全加载
                        if (ibas.objects.isNull(mSettings.growing)) {
                            mSettings.growing = true;
                        }
                        if (ibas.objects.isNull(mSettings.growingScrollToLoad)) {
                            mSettings.growingScrollToLoad = true;
                        }
                        */
                    }
                    return sap.m.Table.prototype.applySettings.apply(this, arguments);
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
                        sortIntervalStep: { type: "int", defaultValue: 1 },
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
                            if (!(mSettings.sortIntervalStep <= 0)) {
                                // 步长为0，不支持拖动
                                if (ibas.objects.isNull(mSettings.dragDropConfig)) {
                                    mSettings.dragDropConfig = [];
                                }
                                if (mSettings.dragDropConfig instanceof Array) {
                                    mSettings.dragDropConfig.push(new sap.ui.core.dnd.DragDropInfo("", {
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
                                                            dragged.getBindingContext().getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                            dropped.getBindingContext().getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                        } else if (dropPosition === "After") {
                                                            dropped.getBindingContext().getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                            dragged.getBindingContext().getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                        }
                                                    } else {
                                                        row.getBindingContext().getObject()[mSettings.sortProperty] = index * step;
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
                /**
                 * 设置模型
                 * @param oModel 数据模型
                 * @param sName 名称
                 */
                setModel(this: DataTable, oModel: model.JSONModel, sName?: string): DataTable {
                    let model: model.JSONModel = this.getModel();
                    // 判断是否有有效模型
                    if (model && model.getData()) {
                        let data: any = model.getData();
                        if (!(data?.rows instanceof Array && data.rows.length > 0)) {
                            model = undefined;
                        }
                    }
                    // 没有设置过模型，则更新控件绑定信息
                    if (ibas.objects.isNull(model) && !ibas.objects.isNull(oModel)) {
                        // 获取对象信息
                        let data: any = oModel.getData();
                        if (data instanceof Array) {
                            data = data[0];
                        } else if (data.rows instanceof Array) {
                            data = data.rows[0];
                        }
                        if (!ibas.objects.isNull(data)) {
                            let userFields: ibas.IUserFields = data.userFields;
                            if (!ibas.objects.isNull(userFields)) {
                                let bindingInfo: any = this.getBindingInfo("items");
                                if (bindingInfo && bindingInfo.template instanceof sap.m.ColumnListItem) {
                                    let template: sap.m.ColumnListItem = bindingInfo.template;
                                    for (let item of template.getCells()) {
                                        let bindingInfo: any = managedobjects.bindingInfo(item, "bindingValue");
                                        if (!ibas.objects.isNull(bindingInfo)) {
                                            userfields.check(userFields, bindingInfo);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return Table.prototype.setModel.apply(this, arguments);
                }
            });
            function propertyColumns(this: DataTable, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                // 查询未存在的属性
                let properties: shell.bo.IBizPropertyInfo[] = Object.assign([], boInfo.properties);
                // 创建未存在的列
                let bindingInfo: any = this.getBindingInfo("items");
                if (bindingInfo && bindingInfo.template instanceof sap.m.ColumnListItem) {
                    let template: sap.m.ColumnListItem = bindingInfo.template;
                    for (let item of template.getCells()) {
                        let bindingPath: string = managedobjects.bindingPath(item);
                        let index: number = properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                        if (index < 0) {
                            continue;
                        }
                        let column: sap.m.Column;
                        let propertyInfo: shell.bo.IBizPropertyInfo = properties[index];
                        if (!ibas.objects.isNull(propertyInfo)) {
                            column = null;
                            properties[index] = null;
                            index = template.indexOfCell(item);
                            if (index > 0 && index < this.getColumns().length) {
                                column = this.getColumns()[index];
                            }
                            if (propertyInfo.authorised === ibas.emAuthoriseType.NONE) {
                                item.setVisible(false);
                                if (!ibas.objects.isNull(column)) {
                                    column.setVisible(false);
                                }
                            }
                            // 修正位置
                            if (propertyInfo.position > 0) {
                                let position: number = propertyInfo.position - 1;
                                if (position < index) {
                                    this.removeColumn(column);
                                    this.insertColumn(column, position);
                                    template.removeCell(item);
                                    template.insertCell(item, position);
                                } else if (position > index) {
                                    this.removeColumn(column);
                                    this.insertColumn(column, position - 1);
                                    template.removeCell(item);
                                    template.insertCell(item, position - 1);
                                }
                            }
                        }
                    }
                    for (let property of properties) {
                        if (ibas.objects.isNull(property)) {
                            continue;
                        }
                        if (ibas.objects.isNull(property.authorised)) {
                            continue;
                        }
                        if (property.authorised === ibas.emAuthoriseType.NONE) {
                            continue;
                        }
                        property = factories.newProperty(property, boInfo);
                        let column: any = new Column("", {
                            header: property.systemed !== true ? property.description :
                                ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase())
                        });
                        let component: any = factories.newComponent(property, "Object.2");
                        if (property.position > 0) {
                            this.insertColumn(column, property.position);
                            template.insertCell(component, property.position);
                        } else {
                            this.addColumn(column);
                            template.addCell(component);
                        }
                    }
                    properties = Object.assign([], boInfo.properties);
                    let sortedInfos: shell.bo.IBizPropertyInfo[] = properties.filter(c => !ibas.objects.isNull(c))
                        .filter(c => !ibas.objects.isNull(c.position)).sort((a: any, b: any) => {
                            return a.position - b.position;
                        });

                    for (let info of sortedInfos) {
                        for (let item of template.getCells()) {
                            let bindingPath: string = managedobjects.bindingPath(item);
                            if (ibas.strings.equalsIgnoreCase(info.name, bindingPath)) {
                                let column: sap.m.Column = null;
                                let index: number = template.indexOfCell(item);
                                if (index > 0 && index < this.getColumns().length) {
                                    column = this.getColumns()[index];
                                }
                                // 修正位置
                                if (info.position > 0) {
                                    let position: number = info.position;
                                    this.removeColumn(column);
                                    this.insertColumn(column, position - 1);
                                    template.removeCell(item);
                                    template.insertCell(item, position - 1);
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}
