/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace table {
            /** 改变表格选择风格 */
            function changeSelectionStyle(this: Table): void {
                if (this instanceof sap.ui.table.Table) {
                    this.setSelectedIndex(this.getSelectedIndex());
                }
            }
            /**
             * 获取可视行数
             * @param defalutCount 默认值（未配置返回）
             */
            export function visibleRowCount(count: number): number {
                if (count > 8) {
                    return ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, count);
                }
                return ibas.config.get(openui5.utils.CONFIG_ITEM_ITEM_TABLE_VISIBLE_ROW_COUNT, count);
            }
            // 表格的选择插件
            const ID_TABLE_PLUGIN_CHOOSE: string = function (): string {
                let version: any = sap.ui.getCore().getConfiguration().getVersion();
                if (version && version.getMajor() >= 1 && version.getMinor() >= 67) {
                    return "{0}_plg_chs";
                }
                return undefined;
            }();
            /**
             * 表格
             */
            sap.ui.table.Table.extend("sap.extension.table.Table", {
                metadata: {
                    properties: {
                        /** 行选择 */
                        selectionBehavior: { type: "string", defaultValue: sap.ui.table.SelectionBehavior.Row },
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
                        },
                        "rowDoubleClick": {
                            parameters: {
                                row: {
                                    type: sap.ui.table.Row,
                                },
                            }
                        },
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
                    this.detachRowSelectionChange(changeSelectionStyle);
                    this.setProperty("chooseType", value);
                    if (value === ibas.emChooseType.SINGLE) {
                        this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                        this.setEnableSelectAll(false);
                        this.attachRowSelectionChange(undefined, changeSelectionStyle);
                    } else if (value === ibas.emChooseType.MULTIPLE) {
                        this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                        this.setEnableSelectAll(true);
                    } else {
                        this.setSelectionMode(sap.ui.table.SelectionMode.None);
                        this.setEnableSelectAll(false);
                    }
                    return this;
                },
                /**
                 * 重写设置是否全选
                 */
                setEnableSelectAll(this: Table, value: boolean): Table {
                    if (!ibas.strings.isEmpty(ID_TABLE_PLUGIN_CHOOSE)) {
                        this.removePlugin(ibas.strings.format(ID_TABLE_PLUGIN_CHOOSE, this.getId()));
                        if (this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                            if (value === false) {
                                this.addPlugin(new sap.ui.table.plugins.MultiSelectionPlugin(
                                    ibas.strings.format(ID_TABLE_PLUGIN_CHOOSE, this.getId()), {
                                    showHeaderSelector: true,
                                }));
                                return this.setProperty("enableSelectAll", value);
                            }
                        }
                    }
                    return sap.ui.table.Table.prototype.setEnableSelectAll.apply(this, arguments);
                },
                /**
                 * 选中索引（兼容方法），-1 表示未选中
                 * @returns number
                 */
                getSelectedIndex(this: Table): number {
                    if ((<any>sap.ui.table.Table).prototype.getSelectedIndex) {
                        return (<any>sap.ui.table.Table).prototype.getSelectedIndex.apply(this, arguments);
                    }
                    let selecteds: number[] = this.getSelectedIndices();
                    if (selecteds && selecteds.length > 0) {
                        return selecteds[0];
                    }
                    return -1;
                },
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(this: Table): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    for (let item of this.getSelectedIndices()) {
                        let object: any = this.getContextByIndex(item)?.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.push(object);
                        }
                    }
                    return selecteds;
                },
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(this: Table): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    let index: number = 0;
                    let context: sap.ui.model.Context = this.getContextByIndex(index);
                    while (!ibas.objects.isNull(context)) {
                        let object: any = context.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.push(object);
                        }
                        context = this.getContextByIndex(++index);
                    }
                    for (let item of this.getSelectedIndices()) {
                        let object: any = this.getContextByIndex(item)?.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.remove(object);
                        }
                    }
                    return selecteds;
                },
                /**
                 * 导出内容
                 */
                toDataTable(this: Table, onlySelected?: boolean): ibas.DataTable {
                    let groupColumn: string = this.getGroupBy();
                    let dataTable: ibas.DataTable = new ibas.DataTable();
                    for (let column of this.getColumns()) {
                        // 组跳过
                        if (groupColumn === column.getId()) {
                            continue;
                        }
                        // 隐藏的跳过
                        if (false === column.getVisible()) {
                            continue;
                        }
                        let dtColumn: ibas.DataTableColumn = new ibas.DataTableColumn();
                        dtColumn.name = column.getId();
                        if (column.getLabel() instanceof sap.m.Label) {
                            dtColumn.description = (<sap.m.Label>column.getLabel()).getText();
                        } else if (typeof column.getLabel() === "string") {
                            dtColumn.description = String(column.getLabel());
                        }
                        if (column.getVisible() !== true || ibas.strings.isEmpty(dtColumn.description)) {
                            dtColumn.name = "." + dtColumn.name;
                        }
                        dataTable.columns.add(dtColumn);
                    }
                    for (let row of this.getRows()) {
                        if (onlySelected === true && this.isIndexSelected(this.indexOfRow(row)) === false) {
                            continue;
                        }
                        let dtRow: ibas.DataTableRow = new ibas.DataTableRow();
                        for (let i: number = 0; i < dataTable.columns.length; i++) {
                            let cell: any = row.getCells()[i];
                            if (cell instanceof sap.m.InputBase) {
                                dtRow.cells[i] = cell.getValue();
                            } else if (cell instanceof sap.m.Text) {
                                dtRow.cells[i] = cell.getText(true);
                            } else if (cell instanceof sap.m.Link) {
                                dtRow.cells[i] = cell.getText();
                            } else if (cell instanceof sap.m.Avatar) {
                                dtRow.cells[i] = cell.getSrc();
                                if (ibas.strings.isEmpty(dataTable.columns[i].dataType)) {
                                    dataTable.columns[i].dataType = "Image";
                                }
                            } else if (cell instanceof sap.ui.core.Icon) {
                                dtRow.cells[i] = cell.getSrc();
                                if (ibas.strings.isEmpty(dataTable.columns[i].dataType)) {
                                    dataTable.columns[i].dataType = "Image";
                                }
                            } else if (cell instanceof sap.m.Select) {
                                dtRow.cells[i] = cell.getSelectedItem()?.getText();
                                if (ibas.objects.isNull(dtRow.cells[i])) {
                                    dtRow.cells[i] = "";
                                }
                            } else if (cell instanceof sap.m.ObjectAttribute
                                || cell instanceof sap.m.ObjectIdentifier
                                || cell instanceof sap.m.ObjectStatus) {
                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                builder.map(undefined, "");
                                builder.map(null, "");
                                builder.append(cell.getTitle());
                                builder.append("\t");
                                builder.append(cell.getText());
                                dtRow.cells[i] = builder.toString();
                            } else if (cell instanceof sap.m.ObjectNumber) {
                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                builder.map(undefined, "");
                                builder.map(null, "");
                                builder.append(cell.getNumber());
                                builder.append(" ");
                                builder.append(cell.getUnit());
                                dtRow.cells[i] = builder.toString();
                            } else if (cell instanceof sap.m.FlexBox) {
                                for (let item of cell.getItems()) {
                                    dtRow.cells[i] = (<any>item).getText();
                                    if (!ibas.strings.isEmpty(dtRow.cells[i])) {
                                        break;
                                    }
                                }
                                if (ibas.objects.isNull(dtRow.cells[i])) {
                                    dtRow.cells[i] = "";
                                }
                            } else {
                                dtRow.cells[i] = "";
                            }
                        }
                        dataTable.rows.add(dtRow);
                    }
                    return dataTable;
                },
                init(this: Table): void {
                    // 基类初始化
                    (<any>sap.ui.table.Table.prototype).init.apply(this, arguments);
                    // 监听行变化事件
                    this.attachEvent("_rowsUpdated", undefined, (event: sap.ui.base.Event) => {
                        if (!this.hasListeners("nextDataSet")) {
                            // 没有下个数据集监听
                            return;
                        }
                        if (this.getBusy()) {
                            // 忙状态不监听
                            return;
                        }
                        if (event.getParameter("reason") !== "VerticalScroll") {
                            // 非滚动条原因，不触发
                            return;
                        }
                        let model: any = this.getModel(undefined);
                        if (!ibas.objects.isNull(model)) {
                            let data: any = model.getData();
                            if (!ibas.objects.isNull(data)) {
                                let dataCount: number = data.length;
                                if (dataCount === undefined) {
                                    // 存在绑定的对象路径问题
                                    dataCount = data.rows?.length;
                                    if (dataCount !== undefined) {
                                        // 此路径存在数据
                                        data = data.rows;
                                    }
                                }
                                let visibleRow: number = this.getVisibleRowCount();
                                if (dataCount > 0 && dataCount > visibleRow) {
                                    let firstRow: number = this.getFirstVisibleRow(); // 当前页的第一行
                                    if (firstRow === (dataCount - visibleRow)) {
                                        // 调用事件
                                        this.setBusy(true);
                                        this.fireNextDataSet({ data: data[data.length - 1] });
                                    }
                                }
                            }
                        }
                    });
                    // 表格多选, selectionBehavior = Row 时
                    // 点击表格行非第一列为单选，选择框为多选
                    this.attachEvent("cellClick", undefined, (event: sap.ui.base.Event) => {
                        let source: any = event.getSource();
                        if (source instanceof Table) {
                            if (source.getChooseType() === ibas.emChooseType.MULTIPLE
                                && source.getSelectionBehavior() === sap.ui.table.SelectionBehavior.Row) {
                                let rowIndex: number = event.getParameter("rowIndex");
                                if (rowIndex >= 0 && rowIndex < (<any>source)._getTotalRowCount()) {
                                    if (this.isIndexSelected(rowIndex)) {
                                        this.removeSelectionInterval(rowIndex, rowIndex);
                                        event.preventDefault();
                                    } else {
                                        this.setSelectionInterval(rowIndex, rowIndex);
                                        event.preventDefault();
                                    }
                                }
                            }
                        }
                    });
                    // 浏览器双击事件
                    this.attachBrowserEvent("dblclick", (event: any) => {
                        let index: number = event.target?.parentElement?.offsetParent?.rowIndex;
                        if (index > 0) {
                            this.fireRowDoubleClick({ row: this.getRows()[index - 1] });
                        }
                    });
                },
                /** 退出 */
                exit(this: Table): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.ui.table.Table.prototype).exit.apply(this, arguments);
                },
                _findAndfireCellEvent(this: Table, fnFire: Function, oEvent: any, fnContextMenu: any): boolean {
                    // 回车事件，跳过cellClick事件
                    if (oEvent.type === "sapenter") {
                        // sap/ui/table/extensions/KeyboardDelegate-dbg.js #501
                        let bEnterActionMode: boolean = !this.hasListeners("cellClick");
                        // 原代码不执行，改为执行
                        if (!bEnterActionMode) {
                            let $InteractiveElements: any = (<any>sap.ui.table).utils.TableUtils.getInteractiveElements(oEvent.target);
                            if ($InteractiveElements) {
                                (<any>this)._getKeyboardExtension().setActionMode(true);
                            }
                        }
                        return true;
                    }
                    return (<any>sap.ui.table.Table.prototype)._findAndfireCellEvent.apply(this, arguments);
                },
                // 1.80以上兼容问题
                setModel(this: Table, oModel: model.JSONModel, sName?: string): Table {
                    let version: any = sap.ui.getCore().getConfiguration().getVersion();
                    if (version && version.getMajor() >= 1 && version.getMinor() >= 80) {
                        if (!ibas.objects.isNull(this.getModel(sName))) {
                            this.clearSelection();
                            // 清除过滤值
                            this.getColumns().forEach(c => {
                                c.setFilterValue();
                                c.setFiltered(false);
                            });
                        }
                    }
                    return sap.ui.table.Table.prototype.setModel.apply(this, arguments);
                },
                // 1.70以上兼容问题
                _hasSelectionPlugin(): boolean {
                    if ((<any>sap.ui.table.Table.prototype)._hasSelectionPlugin) {
                        return (<any>sap.ui.table.Table.prototype)._hasSelectionPlugin.apply(this, arguments);
                    } else if ((<any>sap.ui.table.plugins.SelectionPlugin).findOn) {
                        return (<any>sap.ui.table.plugins.SelectionPlugin).findOn(this) ? true : false;
                    }
                    return undefined;
                },
                setSelectionMode(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if ((this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true)) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionMode.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectionMode.apply(this, arguments);
                },
                setSelectedIndex(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectedIndex.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectedIndex.apply(this, arguments);
                },
                clearSelection(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.clearSelection.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.clearSelection.apply(this, arguments);
                },
                selectAll(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.selectAll.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.selectAll.apply(this, arguments);
                },
                getSelectedIndices(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.getSelectedIndices.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.getSelectedIndices.apply(this, arguments);
                },
                addSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.addSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.addSelectionInterval.apply(this, arguments);
                },
                setSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectionInterval.apply(this, arguments);
                },
                removeSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.removeSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.removeSelectionInterval.apply(this, arguments);
                },
                isIndexSelected(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.isIndexSelected.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.isIndexSelected.apply(this, arguments);
                },
            });
            /**
             * 表格列
             */
            sap.ui.table.Column.extend("sap.extension.table.Column", {
                metadata: {
                    properties: {
                        /** 列宽 */
                        width: { type: "sap.ui.core.CSSSize", group: "Dimension", defaultValue: "10rem" },
                    },
                    events: {}
                },
                setTemplate(this: Column, value: sap.ui.core.Control | string): Column {
                    if (value instanceof sap.m.Select) {
                        value.setWidth("100%");
                    } else if (value instanceof sap.m.ComboBox) {
                        value.setWidth("100%");
                    }
                    sap.ui.table.Column.prototype.setTemplate.apply(this, arguments);
                    return this;
                },
                /** 重构设置 */
                applySettings(this: Column, mSettings: any, oScope?: any): Column {
                    if (!mSettings.autoResizable) {
                        mSettings.autoResizable = true;
                    }
                    if (!mSettings.width) {
                        let template: any = mSettings.template;
                        if (template instanceof sap.ui.core.Control) {
                            let path: string = managedobjects.bindingPath(template, "bindingValue");
                            if (path) {
                                if (path === ibas.BO_PROPERTY_NAME_DOCENTRY
                                    || path === ibas.BO_PROPERTY_NAME_LINEID
                                    || path === ibas.BO_PROPERTY_NAME_OBJECTKEY) {
                                    mSettings.width = "6rem";
                                } else if (path === ibas.BO_PROPERTY_NAME_APPROVALSTATUS
                                    || path === ibas.BO_PROPERTY_NAME_DOCUMENTSTATUS
                                    || path === ibas.BO_PROPERTY_NAME_LINESTATUS
                                    || path === ibas.BO_PROPERTY_NAME_STATUS) {
                                    mSettings.width = "8rem";
                                } else if (path === ibas.BO_PROPERTY_NAME_CANCELED
                                    || path === ibas.BO_PROPERTY_NAME_DELETED
                                    || path === "printed"
                                    || path === "activated") {
                                    mSettings.width = "7rem";
                                }
                            }
                        }
                    }
                    return sap.ui.table.Column.prototype.applySettings.apply(this, arguments);
                }
            });
            (<any>Column).ofCell = function (oCell: any): any {
                return (<any>sap.ui.table.Column).ofCell.apply(this, arguments);
            };

            function createRowSettings(type: "Document" | "DocumentLine"): sap.ui.table.RowSettings {
                if (type === "Document") {
                    return new sap.ui.table.RowSettings("", {
                        highlight: {
                            parts: [
                                {
                                    path: "documentStatus",
                                    type: new data.DocumentStatus()
                                },
                                {
                                    path: "approvalStatus",
                                    type: new data.ApprovalStatus(),
                                },
                                {
                                    path: "canceled",
                                    type: new data.YesNo(),
                                },
                                {
                                    path: "deleted",
                                    type: new data.YesNo(),
                                }
                            ],
                            formatter(documentStatus: ibas.emDocumentStatus, approvalStatus: ibas.emApprovalStatus, canceled: ibas.emYesNo, deleted: ibas.emYesNo): sap.ui.core.ValueState {
                                return data.status(documentStatus, approvalStatus, canceled, deleted);
                            }
                        }
                    });
                } else if (type === "DocumentLine") {
                    return new sap.ui.table.RowSettings("", {
                        highlight: {
                            parts: [
                                {
                                    path: "lineStatus",
                                    type: new data.DocumentStatus()
                                },
                                {
                                    path: "canceled",
                                    type: new data.YesNo(),
                                },
                                {
                                    path: "deleted",
                                    type: new data.YesNo(),
                                }
                            ],
                            formatter(lineStatus: ibas.emDocumentStatus, canceled: ibas.emYesNo, deleted: ibas.emYesNo): sap.ui.core.ValueState {
                                return data.status(lineStatus, undefined, canceled, deleted);
                            }
                        }
                    });
                }
                return undefined;
            }
            /**
             * 数据表格
             */
            Table.extend("sap.extension.table.DataTable", {
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
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (typeof mSettings?.dataInfo === "function") {
                        if (mSettings.rowSettingsTemplate === undefined) {
                            if (mSettings.dataInfo.prototype instanceof ibas.BODocument) {
                                mSettings.rowSettingsTemplate = createRowSettings("Document");
                            } else if (mSettings.dataInfo.prototype instanceof ibas.BODocumentLine) {
                                mSettings.rowSettingsTemplate = createRowSettings("DocumentLine");
                            }
                        }
                    }
                    // 添加表格显示排序相关设置
                    if (!ibas.strings.isEmpty(mSettings?.sortProperty)) {
                        if (typeof mSettings.rows === "string") {
                            let path: string = mSettings.rows;
                            if (ibas.strings.isWith(path, "{", "}")) {
                                path = path.substring(1, path.length - 1);
                            }
                            mSettings.rows = {
                                path: path
                            };
                        }
                        if (typeof mSettings.rows === "object" && !ibas.strings.isEmpty(mSettings.rows.path) && ibas.objects.isNull(mSettings.rows.sorter)) {
                            mSettings.rows.sorter = [
                                new sap.ui.model.Sorter(mSettings.sortProperty, false)
                            ];
                            if (mSettings.sortIntervalStep > 0) {
                                // 步长为0，不支持拖动
                                if (ibas.objects.isNull(mSettings.dragDropConfig)) {
                                    mSettings.dragDropConfig = [];
                                }
                                if (mSettings.dragDropConfig instanceof Array) {
                                    mSettings.dragDropConfig.push(new sap.ui.core.dnd.DragDropInfo("", {
                                        sourceAggregation: "rows",
                                        targetAggregation: "rows",
                                        dropPosition: sap.ui.core.dnd.DropPosition.Between,
                                        dropLayout: sap.ui.core.dnd.DropLayout.Vertical,
                                        drop(event: sap.ui.base.Event): void {
                                            let dragged: any = event.getParameter("draggedControl")?.getBindingContext();
                                            let dropped: any = event.getParameter("droppedControl")?.getBindingContext();
                                            let dropPosition: string = event.getParameter("dropPosition");
                                            let table: any = (<any>event.getSource())?.getDropTarget();
                                            if (table instanceof DataTable) {
                                                let index: number = 1;
                                                let step: number = table.getSortIntervalStep();
                                                if (step <= 0) {
                                                    step = 1;
                                                }
                                                for (let row of (<any>table).getBinding().getContexts()) {
                                                    if (ibas.objects.isNull(row)) {
                                                        continue;
                                                    }
                                                    if (dragged === row) {
                                                        continue;
                                                    } else if (dropped === row) {
                                                        if (dropPosition === "Before") {
                                                            dragged.getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                            dropped.getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                        } else if (dropPosition === "After") {
                                                            dropped.getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                            dragged.getObject()[mSettings.sortProperty] = index * step;
                                                            index++;
                                                        }
                                                    } else {
                                                        row.getObject()[mSettings.sortProperty] = index * step;
                                                        index++;
                                                    }
                                                }
                                                if (index > 1) {
                                                    table.getModel().refresh(true);
                                                }
                                            }
                                        },
                                    }));
                                }
                            }
                        }
                    }
                    if (ibas.objects.isNull(mSettings?.enableColumnFreeze)) {
                        mSettings.enableColumnFreeze = true;
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
                                        let boInfo: shell.bo.IBizObjectInfo = opRslt.resultObjects.firstOrDefault();
                                        if (!ibas.objects.isNull(boInfo)) {
                                            if (typeof mSettings?.dataInfo === "object") {
                                                if (ibas.objects.isNull(this.getRowSettingsTemplate())) {
                                                    if (boInfo.type === "Document") {
                                                        this.setRowSettingsTemplate(createRowSettings("Document"));
                                                    } else if (boInfo.type === "DocumentLine") {
                                                        this.setRowSettingsTemplate(createRowSettings("DocumentLine"));
                                                    }
                                                }
                                            }
                                            propertyColumns.call(this, boInfo);
                                            // 已加载数据，则重置
                                            let model: any = this.getModel();
                                            if (model !== undefined) {
                                                this.setModel(undefined);
                                                this.setModel(model);
                                            }
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
                                for (let column of this.getColumns()) {
                                    if (column instanceof DataColumn) {
                                        let template: sap.ui.core.Control | string = column.getTemplate();
                                        if (template instanceof sap.ui.core.Control) {
                                            let bindingInfo: any = managedobjects.bindingInfo(template, "bindingValue");
                                            if (!ibas.objects.isNull(bindingInfo)) {
                                                userfields.check(userFields, bindingInfo);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return Table.prototype.setModel.apply(this, arguments);
                },
            });
            function propertyColumns(this: DataTable, boInfo: shell.bo.IBizObjectInfo): void {
                if (!boInfo || !(boInfo.properties instanceof Array)) {
                    return;
                }
                // 查询未存在的属性
                let properties: shell.bo.IBizPropertyInfo[] = Object.assign([], boInfo.properties);
                // 只读列表（遍历列，存在输入框则非只读）
                let readonly: boolean = true;
                for (let column of this.getColumns()) {
                    if (column instanceof DataColumn) {
                        let template: sap.ui.core.Control | string = column.getTemplate();
                        if (template instanceof sap.ui.core.Control) {
                            let bindingPath: string = managedobjects.bindingPath(template);
                            let index: number = properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, bindingPath));
                            if (index < 0 && ibas.strings.isWith(bindingPath, "userFields/", undefined)) {
                                if (column.getPropertyInfo instanceof Function) {
                                    index = properties.findIndex(c => c && ibas.strings.equalsIgnoreCase(c.name, (<any>column).getPropertyInfo()?.name));
                                }
                            }
                            if (index < 0) {
                                continue;
                            }
                            let propertyInfo: shell.bo.IBizPropertyInfo = properties[index];
                            if (!ibas.objects.isNull(propertyInfo)) {
                                column.setPropertyInfo(propertyInfo);
                                if (propertyInfo.authorised === ibas.emAuthoriseType.NONE) {
                                    column.setVisible(false);
                                } else if (propertyInfo.authorised === ibas.emAuthoriseType.READ) {
                                    controls.nonEditable(template);
                                    // 已被应用，则重新设置
                                    if (this.hasModel()) {
                                        column.setTemplate(template);
                                    }
                                } else if (propertyInfo.authorised === ibas.emAuthoriseType.ALL) {
                                    if (column.getVisible() === false) {
                                        column.setVisible(true);
                                    }
                                }
                                if (propertyInfo.searched === true) {
                                    column.setSortProperty(propertyInfo.name);
                                    column.setFilterProperty(propertyInfo.name);
                                    if (ibas.strings.equalsIgnoreCase(propertyInfo.dataType, "NUMERIC")) {
                                        if ((<any>column.getTemplate()).getDataInfo instanceof Function && (<any>column.getTemplate()).getDataInfo()) {
                                            column.setFilterType(new sap.extension.data.Alphanumeric());
                                        } else {
                                            column.setFilterType(new sap.ui.model.type.Integer());
                                        }
                                    } else if (ibas.strings.equalsIgnoreCase(propertyInfo.dataType, "DECIMAL")) {
                                        column.setFilterType(new sap.ui.model.type.Float());
                                    } else if (ibas.strings.equalsIgnoreCase(propertyInfo.dataType, "DATE")) {
                                        if (ibas.strings.equalsIgnoreCase(propertyInfo.editType, "TIME")) {
                                            column.setFilterType(new sap.ui.model.type.Integer());
                                        } else {
                                            column.setFilterType(new sap.ui.model.type.Date());
                                        }
                                    } else if (ibas.strings.equalsIgnoreCase(propertyInfo.dataType, "ALPHANUMERIC")) {
                                        if (column.getTemplate() instanceof sap.ui.core.Control) {
                                            let bind: any = (<any>column.getTemplate()).getBindingInfo("bindingValue");
                                            if (!ibas.objects.isNull(bind) && bind.parts instanceof Array && bind.parts.length === 1) {
                                                let type: any = bind.parts[0].type;
                                                if (type instanceof sap.extension.data.Enum && !ibas.objects.isNull(type.enumType)) {
                                                    column.setFilterType(function (value: any): any {
                                                        for (let key in type.enumType) {
                                                            if (ibas.enums.describe(type.enumType, type.enumType[key]).indexOf(value) !== -1) {
                                                                return key.toString();
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                                if (template instanceof sap.m.InputBase) {
                                    readonly = false;
                                    if (propertyInfo.required === true) {
                                        let label: any = column.getLabel();
                                        if (label instanceof sap.m.Label) {
                                            label.setRequired(true);
                                        }
                                    }
                                }
                                if (!ibas.strings.isEmpty(propertyInfo.width)) {
                                    let value: string = propertyInfo.width;
                                    if (!(value.endsWith("px") || value.endsWith("rem"))) {
                                        value += "rem";
                                    }
                                    column.setWidth(value);
                                }
                                properties[index] = null;
                            }
                        }
                    }
                }
                // 自定义字段排序集合
                let boUserFields: any = boInfo.properties.filter(c => c.systemed === false).sort((a, b) => a.name.localeCompare(b.name));
                // 创建未存在的列
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
                    let fieldPosition: number = 0;
                    // 获取字段位置
                    if (property.systemed === false) {
                        fieldPosition = boUserFields.indexOf(boUserFields.filter(c => c.name === property.name)[0]);
                    }
                    let column: DataColumn = new DataColumn("", {
                        propertyInfo: property,
                        label: new sap.m.Label("", {
                            text: property.systemed !== true ? property.description :
                                ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()),
                            required: readonly ? false : property.required,
                        }),
                        template: factories.newComponent(property, readonly ? "Text" : "Input", readonly ? undefined : (event) => {
                            let source: any = sap.ui.getCore().byId(event.getParameter("id"));
                            if (source instanceof sap.m.Input && event.getId() === "changed") {
                                let chsInfo: string = source.getTooltip_AsString();
                                if (ibas.strings.isEmpty(chsInfo)) {
                                    return;
                                }
                                let criteria: ibas.ICriteria = ibas.criterias.valueOf(chsInfo);
                                if (ibas.strings.isEmpty(criteria.remarks)) {
                                    return;
                                }
                                let selecteds: any[] = event.getParameter("selecteds");
                                if (!(selecteds instanceof Array)) {
                                    return;
                                }
                                let boData: any = source.getBindingContext()?.getObject();
                                if (!(boData instanceof ibas.BusinessObject)) {
                                    return;
                                }
                                for (let pItem of criteria.remarks.split(";")) {
                                    if (pItem.indexOf("=") <= 0) {
                                        continue;
                                    }
                                    let value: any;
                                    let tarName: string = ibas.strings.trim(pItem.split("=")[0]);
                                    let surName: string = ibas.strings.trim(pItem.split("=")[1]);
                                    if (selecteds.length === 1) {
                                        for (let item of selecteds) {
                                            if (item instanceof ibas.BusinessObject
                                                && ibas.strings.isWith(surName, "U_", undefined)) {
                                                let userField: ibas.IUserField = item?.userFields?.get(surName);
                                                if (!ibas.objects.isNull(userField)) {
                                                    value = userField.value;
                                                }
                                            } else if (item instanceof Object) {
                                                value = item[surName];
                                            } else {
                                                value = item;
                                            }
                                        }
                                    } else {
                                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                        builder.map(null, "");
                                        builder.map(undefined, "");
                                        for (let item of selecteds) {
                                            if (builder.length > 0) {
                                                builder.append(ibas.DATA_SEPARATOR);
                                            }
                                            if (item instanceof ibas.BusinessObject
                                                && ibas.strings.isWith(surName, "U_", undefined)) {
                                                let userField: ibas.IUserField = item?.userFields?.get(surName);
                                                if (!ibas.objects.isNull(userField)) {
                                                    builder.append(userField.value);
                                                }
                                            } else if (item instanceof Object) {
                                                builder.append(item[surName]);
                                            } else {
                                                builder.append(item);
                                            }
                                        }
                                        value = builder.toString();
                                    }
                                    // 通过主对象赋值
                                    if (ibas.strings.isWith(tarName, "U_", undefined)) {
                                        let userField: ibas.IUserField = boData?.userFields.get(tarName);
                                        if (!ibas.objects.isNull(userField)) {
                                            userField.value = value;
                                        }
                                    } else {
                                        boData[tarName] = value;
                                    }
                                }
                            }
                        }),
                        sortProperty: property.systemed === true ? property.searched === true ? property.name : undefined :
                            property.searched === true ? "userFields/" + fieldPosition + "/value" : undefined,
                        filterProperty: property.systemed === true ? property.searched === true ? property.name : undefined :
                            property.searched === true ? "userFields/" + fieldPosition + "/value" : undefined,
                        filterType: ibas.strings.equalsIgnoreCase(property.dataType, "NUMERIC") ? new sap.ui.model.type.Integer() :
                            ibas.strings.equalsIgnoreCase(property.dataType, "DECIMAL") ? new sap.ui.model.type.Float() :
                                ibas.strings.equalsIgnoreCase(property.dataType, "DATE") ?
                                    ibas.strings.equalsIgnoreCase(property.editType, "TIME") ? new sap.ui.model.type.Integer() : new sap.ui.model.type.Date()
                                    : new sap.ui.model.type.String()
                    });
                    if (column.getTemplate() instanceof sap.ui.core.Control) {
                        let type: any = (<any>column.getTemplate()).getBindingInfo("bindingValue").type;
                        if (type instanceof sap.extension.data.Enum) {
                            column.setFilterType(function (value: any): any {
                                for (let key in type.enumType) {
                                    if (ibas.enums.describe(type.enumType, type.enumType[key]).indexOf(value) !== -1) {
                                        return key.toString();
                                    }
                                }
                            });
                        } else if ((<any>column.getTemplate()).getDataInfo instanceof Function && (<any>column.getTemplate()).getDataInfo()) {
                            column.setFilterType(new sap.ui.model.type.String());
                        }
                    }
                    if (!ibas.strings.isEmpty(property.width)) {
                        let value: string = property.width;
                        if (!(value.endsWith("px") || value.endsWith("rem"))) {
                            value += "rem";
                        }
                        column.setWidth(value);
                    }
                    this.addColumn(column);
                }
                // 位置修正
                let showedColumns: ibas.ArrayList<sap.extension.table.DataColumn> = new ibas.ArrayList<sap.extension.table.DataColumn>();
                for (let column of this.getColumns()) {
                    if (!(column instanceof sap.extension.table.DataColumn)) {
                        continue;
                    }
                    let info: shell.bo.BizPropertyInfo = (<any>column)?.getPropertyInfo();
                    if (!ibas.objects.isNull(info)) {
                        // 有位置信息的列重新移除并重新排序，没有的按原有位置显示
                        if (!ibas.objects.isNull(info.position)) {
                            showedColumns.add(column);
                            this.removeColumn(column);
                        }
                    }
                }
                // 列按位置信息排序
                let sortedColumns: ibas.ArrayList<sap.extension.table.DataColumn> = showedColumns.sort((a: sap.extension.table.DataColumn, b: sap.extension.table.DataColumn) => {
                    let aInfo: shell.bo.IBizPropertyInfo = a.getPropertyInfo();
                    let bInfo: shell.bo.IBizPropertyInfo = b.getPropertyInfo();
                    return aInfo.position - bInfo.position;
                });
                // 增强列过滤
                (<any>DataColumn).prototype.filter = function (sValue: any): Promise<any> {
                    let oTable: any = this.getParent();
                    if (oTable && oTable.isBound("rows")) {
                        // notify the event listeners
                        let bExecuteDefault: boolean = oTable.fireFilter({
                            column: this,
                            value: sValue
                        });
                        if (bExecuteDefault) {
                            this.setProperty("filtered", !!sValue, true);
                            this.setProperty("filterValue", sValue, true);

                            let oMenu: any = this.getMenu();
                            if (this._bMenuIsColumnMenu) {
                                // update column menu input field
                                oMenu._setFilterValue(sValue);
                            }

                            let aFilters: any[] = [];
                            let aCols: any[] = oTable.getColumns();
                            // 异步的过滤器
                            let asyncFilters: Map<sap.ui.model.Filter, shell.bo.IBizPropertyInfo> = new Map<any, any>();

                            for (let i: number = 0, l: number = aCols.length; i < l; i++) {
                                let oCol: any = aCols[i],
                                    oFilter: sap.ui.model.Filter;
                                oMenu = oCol.getMenu();
                                try {
                                    oFilter = oCol._getFilter();
                                    if (oCol._bMenuIsColumnMenu) {
                                        oMenu._setFilterState(sap.ui.core.ValueState.None);
                                    }
                                } catch (e) {
                                    if (oCol._bMenuIsColumnMenu) {
                                        oMenu._setFilterState(sap.ui.core.ValueState.Error);
                                    }
                                    continue;
                                }
                                if (oFilter) {
                                    let propertyInfo: shell.bo.IBizPropertyInfo = aCols[i].getPropertyInfo();
                                    if (!ibas.objects.isNull(propertyInfo)) {
                                        if (oFilter.getOperator() === sap.ui.model.FilterOperator.Contains
                                            || oFilter.getOperator() === sap.ui.model.FilterOperator.EQ) {
                                            if (propertyInfo.values.length > 0) {
                                                asyncFilters.set(oFilter, ibas.objects.clone(propertyInfo));
                                            } else if (!ibas.strings.isEmpty(propertyInfo.linkedObject)) {
                                                asyncFilters.set(oFilter, ibas.objects.clone(propertyInfo));
                                            } else if ((<any>oCol.getTemplate()).getDataInfo instanceof Function && (<any>oCol.getTemplate()).getDataInfo()) {
                                                let dataInfo: repository.IDataInfo = (<any>oCol.getTemplate()).getDataInfo();
                                                if (dataInfo && dataInfo?.key && dataInfo?.text && !ibas.strings.equalsIgnoreCase(dataInfo.key, dataInfo.text)) {
                                                    // {"type":"Criteria","BusinessObject":"CC_AC_ACCOUNT.Code:Name"}
                                                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                                    builder.append("{");
                                                    builder.append("\"type\": ");
                                                    builder.append("\"");
                                                    builder.append("Criteria");
                                                    builder.append("\"");
                                                    builder.append(",");
                                                    builder.append("\"BusinessObject\": ");
                                                    builder.append("\"");
                                                    builder.append(ibas.businessobjects.code(<any>dataInfo.type));
                                                    builder.append(".");
                                                    builder.append(dataInfo.key);
                                                    builder.append(":");
                                                    builder.append(dataInfo.text);
                                                    builder.append("\"");
                                                    builder.append("}");
                                                    propertyInfo = ibas.objects.clone(propertyInfo);
                                                    propertyInfo.linkedObject = builder.toString();
                                                    asyncFilters.set(oFilter, propertyInfo);
                                                }
                                            }
                                        }
                                    }
                                    aFilters.push(oFilter);
                                }
                            }
                            if (asyncFilters.size > 0) {
                                // 查询对象的可选值
                                ibas.queues.execute(ibas.arrays.create(asyncFilters.keys()),
                                    (oFilter, next) => {
                                        let propertyInfo: shell.bo.IBizPropertyInfo = asyncFilters.get(oFilter);
                                        try {
                                            let linkedInfo: { property: string, criteria: ibas.ICriteria } = factories.properties.linkedObject(propertyInfo.linkedObject);
                                            if (linkedInfo && !ibas.strings.isWith(linkedInfo.criteria?.businessObject, undefined, "_RA_RPTRESULT")
                                                && linkedInfo.property?.indexOf(":") > 0) {
                                                let filterValue: string = oFilter.getValue1();
                                                factories.properties.fetchLinkedObjects(linkedInfo, filterValue,
                                                    (results) => {
                                                        if (results instanceof Array) {
                                                            for (let item of results) {
                                                                propertyInfo.values.push({
                                                                    value: String(item.key),
                                                                    description: String(item.text),
                                                                    default: undefined,
                                                                });
                                                            }
                                                        }
                                                        next();
                                                    }
                                                );
                                            } else {
                                                next();
                                            }
                                        } catch (error) {
                                            next();
                                        }
                                    },
                                    (error) => {
                                        if (!(error instanceof Error)) {
                                            for (let i: number = 0; i < aFilters.length; i++) {
                                                let oFilter: sap.ui.model.Filter = aFilters[i];
                                                let filterValue: string = oFilter.getValue1();
                                                let propertyInfo: shell.bo.IBizPropertyInfo = asyncFilters.get(oFilter);
                                                if (!ibas.objects.isNull(propertyInfo)) {
                                                    if (propertyInfo.values.length > 0) {
                                                        oFilter = new sap.ui.model.Filter({
                                                            path: oFilter.getPath(),
                                                            operator: oFilter.getOperator(),
                                                            value1: filterValue,
                                                            test: (sKeyValue: any) => {
                                                                let ptyValue: shell.bo.IBizPropertyValue = propertyInfo.values.find(c =>
                                                                    (oFilter.isCaseSensitive() !== false && ibas.strings.equalsIgnoreCase(c.value, sKeyValue))
                                                                    || (oFilter.isCaseSensitive() === false && ibas.strings.equals(c.value, sKeyValue))
                                                                );
                                                                if (!ibas.strings.isEmpty(ptyValue?.description)) {
                                                                    if (oFilter.getOperator() === sap.ui.model.FilterOperator.Contains) {
                                                                        return ptyValue.description.includes(filterValue);
                                                                    } else if (oFilter.getOperator() === sap.ui.model.FilterOperator.EQ) {
                                                                        return ptyValue.description === filterValue;
                                                                    }
                                                                }
                                                                return false;
                                                            }
                                                        });
                                                    } else if (ibas.strings.equalsIgnoreCase(propertyInfo.dataType, "NUMERIC") && !ibas.strings.isEmpty(propertyInfo.linkedObject)) {
                                                        if (oFilter.getOperator() === sap.ui.model.FilterOperator.Contains) {
                                                            oFilter = new sap.ui.model.Filter({
                                                                path: oFilter.getPath(),
                                                                operator: sap.ui.model.FilterOperator.EQ,
                                                                value1: filterValue,
                                                            });
                                                        }
                                                    }
                                                    // 替换原过滤器
                                                    aFilters[i] = oFilter;
                                                }
                                            }
                                        }
                                        oTable.getBinding().filter(aFilters, sap.ui.model.FilterType.Control);
                                        this._updateIcons();
                                    }
                                );
                            } else {
                                oTable.getBinding().filter(aFilters, sap.ui.model.FilterType.Control);
                                this._updateIcons();
                            }
                        }
                    }
                    return this;
                };
                for (let column of sortedColumns) {
                    this.insertColumn(column, column.getPropertyInfo().position);
                }
            }
            /**
             * 数据表格列
             */
            Column.extend("sap.extension.table.DataColumn", {
                metadata: {
                    properties: {
                        /** 属性信息 */
                        propertyInfo: { type: "any" },
                    },
                    events: {}
                },
                /**
                 * 获取属性信息
                 */
                getPropertyInfo(this: Column): shell.bo.IBizPropertyInfo {
                    return this.getProperty("propertyInfo");
                },
                /**
                 * 设置属性信息
                 * @param value 值
                 */
                setPropertyInfo(this: Column, value: shell.bo.IBizPropertyInfo): Column {
                    return this.setProperty("propertyInfo", value);
                },
                /** 重构设置 */
                applySettings(this: DataColumn, mSettings: any): DataColumn {
                    if (mSettings.template instanceof m.Input
                        || mSettings.template instanceof m.Select
                        || mSettings.template instanceof m.DatePicker
                        || mSettings.template instanceof m.DateTimePicker) {
                        if (mSettings.template.hasListeners("valuePaste") === false) {
                            mSettings.template.attachValuePaste(undefined, function (event: sap.ui.base.Event): void {
                                let source: any = <any>event.getSource();
                                let data: any = event.getParameter("data");
                                if (typeof data === "string" && data?.indexOf("\n") > 0) {
                                    sap.extension.tables.fillingCellsData(source, data);
                                    // 不执行后续事件
                                    event.preventDefault();
                                    event.cancelBubble();
                                }
                            });
                        }
                    }
                    Column.prototype.applySettings.apply(this, arguments);
                    return this;
                }
            });
            (<any>DataColumn).ofCell = function (oCell: any): any {
                return (<any>sap.ui.table.Column).ofCell.apply(this, arguments);
            };
            /**
             * 表格树
             */
            sap.ui.table.TreeTable.extend("sap.extension.table.TreeTable", {
                metadata: {
                    properties: {
                        /** 行选择 */
                        selectionBehavior: { type: "string", defaultValue: sap.ui.table.SelectionBehavior.Row },
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
                getChooseType(this: TreeTable): ibas.emChooseType {
                    return this.getProperty("chooseType");
                },
                /**
                 * 设置选择类型
                 * @param value 选择类型
                 */
                setChooseType(this: TreeTable, value: ibas.emChooseType): TreeTable {
                    this.detachRowSelectionChange(changeSelectionStyle);
                    this.setProperty("chooseType", value);
                    if (value === ibas.emChooseType.SINGLE) {
                        this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                        this.setEnableSelectAll(false);
                        this.attachRowSelectionChange(undefined, changeSelectionStyle);
                    } else if (value === ibas.emChooseType.MULTIPLE) {
                        this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                        this.setEnableSelectAll(true);
                    } else {
                        this.setSelectionMode(sap.ui.table.SelectionMode.None);
                        this.setEnableSelectAll(false);
                    }
                    return this;
                },
                /**
                 * 重写设置是否全选
                 */
                setEnableSelectAll(this: TreeTable, value: boolean): TreeTable {
                    if (!ibas.strings.isEmpty(ID_TABLE_PLUGIN_CHOOSE)) {
                        this.removePlugin(ibas.strings.format(ID_TABLE_PLUGIN_CHOOSE, this.getId()));
                        if (this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                            if (value === false) {
                                this.addPlugin(new sap.ui.table.plugins.MultiSelectionPlugin(
                                    ibas.strings.format(ID_TABLE_PLUGIN_CHOOSE, this.getId()), {
                                    showHeaderSelector: true,
                                }));
                                return this.setProperty("enableSelectAll", value);
                            }
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.setEnableSelectAll.apply(this, arguments);
                },
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(this: TreeTable): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    for (let item of this.getSelectedIndices()) {
                        let object: any = this.getContextByIndex(item)?.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.push(object);
                        }
                    }
                    return selecteds;
                },
                /**
                 * 获取未选择的数据
                 */
                getUnSelecteds<T>(this: TreeTable): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    let index: number = 0;
                    let context: sap.ui.model.Context = this.getContextByIndex(index);
                    while (!ibas.objects.isNull(context)) {
                        let object: any = context.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.push(object);
                        }
                        context = this.getContextByIndex(++index);
                    }
                    for (let item of this.getSelectedIndices()) {
                        let object: any = this.getContextByIndex(item)?.getObject();
                        if (!ibas.objects.isNull(object)) {
                            selecteds.remove(object);
                        }
                    }
                    return selecteds;
                },
                /**
                 * 导出内容
                 */
                toDataTable(this: TreeTable, onlySelected?: boolean): ibas.DataTable {
                    let groupColumn: string = this.getGroupBy();
                    let dataTable: ibas.DataTable = new ibas.DataTable();
                    let dtColumn: ibas.DataTableColumn = new ibas.DataTableColumn();
                    dtColumn.name = "$LEVEL";
                    dtColumn.description = ibas.i18n.prop("openui5_level");
                    dataTable.columns.add(dtColumn);
                    for (let column of this.getColumns()) {
                        // 组跳过
                        if (groupColumn === column.getId()) {
                            continue;
                        }
                        // 隐藏的跳过
                        if (false === column.getVisible()) {
                            continue;
                        }
                        let dtColumn: ibas.DataTableColumn = new ibas.DataTableColumn();
                        dtColumn.name = column.getId();
                        if (column.getLabel() instanceof sap.m.Label) {
                            dtColumn.description = (<sap.m.Label>column.getLabel()).getText();
                        } else if (typeof column.getLabel() === "string") {
                            dtColumn.description = String(column.getLabel());
                        }
                        if (column.getVisible() !== true || ibas.strings.isEmpty(dtColumn.description)) {
                            dtColumn.name = "." + dtColumn.name;
                        }
                        dataTable.columns.add(dtColumn);
                    }
                    for (let row of this.getRows()) {
                        if (onlySelected === true && this.isIndexSelected(this.indexOfRow(row)) === false) {
                            continue;
                        }
                        let dtRow: ibas.DataTableRow = new ibas.DataTableRow();
                        dtRow.cells[0] = (<any>row).getLevel();
                        for (let i: number = 1; i <= dataTable.columns.length; i++) {
                            let cell: any = row.getCells()[i - 1];
                            if (cell instanceof sap.m.InputBase) {
                                dtRow.cells[i] = cell.getValue();
                            } else if (cell instanceof sap.m.Text) {
                                dtRow.cells[i] = cell.getText(true);
                            } else if (cell instanceof sap.m.Link) {
                                dtRow.cells[i] = cell.getText();
                            } else if (cell instanceof sap.m.ObjectAttribute
                                || cell instanceof sap.m.ObjectIdentifier
                                || cell instanceof sap.m.ObjectStatus) {
                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                builder.map(undefined, "");
                                builder.map(null, "");
                                builder.append(cell.getTitle());
                                builder.append("\t");
                                builder.append(cell.getText());
                                dtRow.cells[i] = builder.toString();
                            } else if (cell instanceof sap.m.ObjectNumber) {
                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                builder.map(undefined, "");
                                builder.map(null, "");
                                builder.append(cell.getNumber());
                                builder.append(" ");
                                builder.append(cell.getUnit());
                                dtRow.cells[i] = builder.toString();
                            } else if (cell instanceof sap.m.Select) {
                                dtRow.cells[i] = cell.getSelectedItem()?.getText();
                                if (ibas.objects.isNull(dtRow.cells[i])) {
                                    dtRow.cells[i] = "";
                                }
                            } else if (cell instanceof sap.m.FlexBox) {
                                for (let item of cell.getItems()) {
                                    dtRow.cells[i] = (<any>item).getText();
                                    if (!ibas.strings.isEmpty(dtRow.cells[i])) {
                                        break;
                                    }
                                }
                                if (ibas.objects.isNull(dtRow.cells[i])) {
                                    dtRow.cells[i] = "";
                                }
                            } else {
                                dtRow.cells[i] = "";
                            }
                        }
                        dataTable.rows.add(dtRow);
                    }
                    return dataTable;
                },
                init(this: TreeTable): void {
                    // 基类初始化
                    (<any>sap.ui.table.TreeTable.prototype).init.apply(this, arguments);
                    // 监听行变化事件
                    this.attachEvent("_rowsUpdated", undefined, () => {
                        if (!this.hasListeners("nextDataSet")) {
                            // 没有下个数据集监听
                            return;
                        }
                        if (this.getBusy()) {
                            // 忙状态不监听
                            return;
                        }
                        let model: any = this.getModel(undefined);
                        if (!ibas.objects.isNull(model)) {
                            let data: any = model.getData();
                            if (!ibas.objects.isNull(data)) {
                                let dataCount: number = data.length;
                                if (dataCount === undefined) {
                                    // 存在绑定的对象路径问题
                                    dataCount = data.rows?.length;
                                    if (dataCount !== undefined) {
                                        // 此路径存在数据
                                        data = data.rows;
                                    }
                                }
                                let visibleRow: number = this.getVisibleRowCount();
                                if (dataCount > 0 && dataCount > visibleRow) {
                                    let firstRow: number = this.getFirstVisibleRow(); // 当前页的第一行
                                    if (firstRow === (dataCount - visibleRow)) {
                                        // 调用事件
                                        this.setBusy(true);
                                        this.fireNextDataSet({ data: data[data.length - 1] });
                                    }
                                }
                            }
                        }
                    });
                    // 表格多选, selectionBehavior = Row 时
                    // 点击表格行非第一列为单选，选择框为多选
                    this.attachEvent("cellClick", undefined, (event: sap.ui.base.Event) => {
                        let source: any = event.getSource();
                        if (source instanceof TreeTable) {
                            if (source.getChooseType() === ibas.emChooseType.MULTIPLE
                                && source.getSelectionBehavior() === sap.ui.table.SelectionBehavior.Row) {
                                let rowIndex: number = event.getParameter("rowIndex");
                                if (rowIndex >= 0 && rowIndex < (<any>source)._getTotalRowCount()) {
                                    if (this.isIndexSelected(rowIndex)) {
                                        this.removeSelectionInterval(rowIndex, rowIndex);
                                        event.preventDefault();
                                    } else {
                                        this.setSelectionInterval(rowIndex, rowIndex);
                                        event.preventDefault();
                                    }
                                }
                            }
                        }
                    });
                },
                /** 退出 */
                exit(this: TreeTable): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.ui.table.TreeTable.prototype).exit.apply(this, arguments);
                },
                // 1.70以上兼容问题
                setSelectionMode(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionMode.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.setSelectionMode.apply(this, arguments);
                },
                setSelectedIndex(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectedIndex.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.setSelectedIndex.apply(this, arguments);
                },
                clearSelection(this: Table): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.clearSelection.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.clearSelection.apply(this, arguments);
                },
                selectAll(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.selectAll.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.selectAll.apply(this, arguments);
                },
                /**
                 * 选中索引（兼容方法），-1 表示未选中
                 * @returns number
                 */
                getSelectedIndex(this: TreeTable): number {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let selecteds: number[] = this.getSelectedIndices();
                        if (selecteds && selecteds.length > 0) {
                            return selecteds[0];
                        }
                        return -1;
                    }
                    return (<any>sap.ui.table.TreeTable).prototype.getSelectedIndex.apply(this, arguments);
                },
                getSelectedIndices(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.getSelectedIndices.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.getSelectedIndices.apply(this, arguments);
                },
                addSelectionInterval(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.addSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.addSelectionInterval.apply(this, arguments);
                },
                setSelectionInterval(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.setSelectionInterval.apply(this, arguments);
                },
                removeSelectionInterval(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.removeSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.removeSelectionInterval.apply(this, arguments);
                },
                isIndexSelected(this: TreeTable): TreeTable {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.isIndexSelected.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.TreeTable.prototype.isIndexSelected.apply(this, arguments);
                },
            });

            /**
             * 数据树表格
             */
            TreeTable.extend("sap.extension.table.DataTreeTable", {
                metadata: {
                    properties: {
                        /** 数据信息 */
                        dataInfo: { type: "any" },
                        /** 属性过滤器 */
                        propertyFilter: { type: "function" },
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 获取数据信息
                 */
                getDataInfo(this: DataTreeTable): { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo {
                    return this.getProperty("dataInfo");
                },
                /**
                 * 设置数据信息
                 * @param value 数据信息
                 */
                setDataInfo(this: DataTreeTable, value: { code: string, name?: string } | string | Function | shell.bo.IBizObjectInfo): DataTreeTable {
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
                setPropertyFilter(value: (property: shell.bo.IBizPropertyInfo) => boolean): DataTreeTable {
                    return this.setProperty("propertyFilter", value);
                },
                /** 重构设置 */
                applySettings(this: DataTreeTable, mSettings: any): DataTreeTable {
                    TreeTable.prototype.applySettings.apply(this, arguments);
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
                setModel(this: DataTreeTable, oModel: model.JSONModel, sName?: string): DataTreeTable {
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
                                for (let column of this.getColumns()) {
                                    if (column instanceof DataColumn) {
                                        let template: sap.ui.core.Control | string = column.getTemplate();
                                        if (template instanceof sap.ui.core.Control) {
                                            let bindingInfo: any = managedobjects.bindingInfo(template, "bindingValue");
                                            if (!ibas.objects.isNull(bindingInfo)) {
                                                userfields.check(userFields, bindingInfo);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return TreeTable.prototype.setModel.apply(this, arguments);
                },
            });
        }
    }
}
