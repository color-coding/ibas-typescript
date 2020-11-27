﻿/**
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
                return ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, count);
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
                        selecteds.push(this.getContextByIndex(item).getObject());
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
                        selecteds.push(context.getObject());
                        context = this.getContextByIndex(++index);
                    }
                    for (let item of this.getSelectedIndices()) {
                        selecteds.remove(this.getContextByIndex(item).getObject());
                    }
                    return selecteds;
                },
                init(this: Table): void {
                    // 基类初始化
                    (<any>sap.ui.table.Table.prototype).init.apply(this, arguments);
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
                                    dataCount = data.rows.length;
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
                },
                /** 退出 */
                exit(this: Table): void {
                    let model: any = this.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.destroy();
                    }
                    (<any>sap.ui.table.Table.prototype).exit.apply(this, arguments);
                },
                // 1.80以上兼容问题
                setModel(this: Table, oModel: model.JSONModel, sName?: string): Table {
                    let version: any = sap.ui.getCore().getConfiguration().getVersion();
                    if (version && version.getMajor() >= 1 && version.getMinor() >= 80) {
                        if (!ibas.objects.isNull(this.getModel(sName))) {
                            this.clearSelection();
                        }
                    }
                    return sap.ui.table.Table.prototype.setModel.apply(this, arguments);
                },
                // 1.70以上兼容问题
                setSelectionMode(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionMode.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectionMode.apply(this, arguments);
                },
                setSelectedIndex(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectedIndex.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectedIndex.apply(this, arguments);
                },
                clearSelection(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.clearSelection.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.clearSelection.apply(this, arguments);
                },
                selectAll(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.selectAll.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.selectAll.apply(this, arguments);
                },
                getSelectedIndices(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.getSelectedIndices.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.getSelectedIndices.apply(this, arguments);
                },
                addSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.addSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.addSelectionInterval.apply(this, arguments);
                },
                setSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.setSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.setSelectionInterval.apply(this, arguments);
                },
                removeSelectionInterval(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
                        let plugin: any = this.getPlugins()[0];
                        if (plugin instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                            return plugin.removeSelectionInterval.apply(plugin, arguments);
                        }
                    }
                    return sap.ui.table.Table.prototype.removeSelectionInterval.apply(this, arguments);
                },
                isIndexSelected(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this.getChooseType() === ibas.emChooseType.MULTIPLE) {
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
                                    || path === ibas.BO_PROPERTY_NAME_LINESTATUS) {
                                    mSettings.width = "8rem";
                                } else if (path === ibas.BO_PROPERTY_NAME_CANCELED
                                    || path === ibas.BO_PROPERTY_NAME_DELETED) {
                                    mSettings.width = "6rem";
                                }
                            }
                        }
                    }
                    return sap.ui.table.Column.prototype.applySettings.apply(this, arguments);
                }
            });
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
                applySettings(this: DataTable): DataTable {
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
                        if (!(data.rows instanceof Array && data.rows.length > 0)) {
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
                init(this: DataTable): void {
                    (<any>Table.prototype).init.apply(this, arguments);
                    this.attachPaste(undefined, function (event: sap.ui.base.Event): void {
                        let table: any = event.getSource();
                        if (table instanceof DataTable) {

                        }
                    });
                }
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
                                }
                                if (propertyInfo.searched === true) {
                                    column.setSortProperty(propertyInfo.name);
                                    column.setFilterProperty(propertyInfo.name);
                                }
                                // 修正位置
                                if (propertyInfo.position > 0) {
                                    let index: number = this.indexOfColumn(column);
                                    let position: number = propertyInfo.position - 1;
                                    if (position < index) {
                                        this.removeColumn(column);
                                        this.insertColumn(column, position);
                                    } else if (position > index) {
                                        this.removeColumn(column);
                                        this.insertColumn(column, position - 1);
                                    }
                                }
                                if (template instanceof sap.m.InputBase) {
                                    readonly = false;
                                }
                                properties[index] = null;
                            }
                        }
                    }
                }
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
                    let column: DataColumn = new DataColumn("", {
                        propertyInfo: property,
                        label: property.systemed !== true ? property.description :
                            ibas.i18n.prop(ibas.strings.format("bo_{0}_{1}", boInfo.name, property.name).toLowerCase()),
                        template: factories.newComponent(property, readonly ? "Text" : "Input"),
                        sortProperty: property.searched === true ? property.name : undefined,
                        filterProperty: property.searched === true ? property.name : undefined,
                    });
                    if (property.position > 0) {
                        this.insertColumn(column, property.position);
                    } else {
                        this.addColumn(column);
                    }
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
                }
            });
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
                    this.setProperty("chooseType", value);
                    if (value === ibas.emChooseType.SINGLE) {
                        this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
                        this.setEnableSelectAll(false);
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
                        if (this.getPlugins().length === 0) {
                            if (this.getChooseType() === ibas.emChooseType.SINGLE) {
                                this.addPlugin(new sap.ui.table.plugins.MultiSelectionPlugin(
                                    ibas.strings.format(ID_TABLE_PLUGIN_CHOOSE, this.getId()), {
                                    showHeaderSelector: value,
                                    selectionChange: (event: sap.ui.base.Event) => {
                                        let source: any = event.getSource();
                                        if (source instanceof sap.ui.table.plugins.MultiSelectionPlugin) {
                                            let indices: number[] = source.getSelectedIndices();
                                            if (indices instanceof Array && indices.length > 1) {
                                                if (this.getChooseType() === ibas.emChooseType.SINGLE) {
                                                    let index: number = event.getParameter("rowIndices")[0];
                                                    this.clearSelection();
                                                    this.setSelectedIndex(index);
                                                }
                                            }
                                        }
                                    },
                                }));
                            }
                        }
                    }
                    return sap.ui.table.Table.prototype.setEnableSelectAll.apply(this, arguments);
                },
                /**
                 * 获取选择的数据
                 */
                getSelecteds<T>(this: TreeTable): ibas.IList<T> {
                    let selecteds: ibas.IList<T> = new ibas.ArrayList<T>();
                    for (let item of this.getSelectedIndices()) {
                        selecteds.push(this.getContextByIndex(item).getObject());
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
                        selecteds.push(context.getObject());
                        context = this.getContextByIndex(++index);
                    }
                    for (let item of this.getSelectedIndices()) {
                        selecteds.remove(this.getContextByIndex(item).getObject());
                    }
                    return selecteds;
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
                setSelectionMode(this: Table): Table {
                    // tslint:disable-next-line: no-string-literal
                    if (this["_hasSelectionPlugin"] && this["_hasSelectionPlugin"]() === true) {
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
        }
    }
}
