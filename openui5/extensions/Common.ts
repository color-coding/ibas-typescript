﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        /**
         * 仓库集
         */
        export namespace repositories {
            /**
             * 解析业务仓库
             * @param value 值
             */
            export function repository(value: ibas.BORepositoryApplication | string | any): ibas.BORepositoryApplication {
                let boRepository: ibas.BORepositoryApplication;
                if (typeof value === "string") {
                    boRepository = ibas.boFactory.create(value);
                } else if (value instanceof ibas.BORepositoryApplication) {
                    boRepository = value;
                } else if (value instanceof Function) {
                    boRepository = new value;
                }
                return boRepository;
            }
            /**
             * 解析数据信息
             * @param value 值
             */
            export function dataInfo(value: repository.IDataInfo): repository.IDataInfo {
                let dataInfo: repository.IDataInfo = { type: undefined, key: undefined, text: undefined };
                if (typeof value === "string") {
                    dataInfo.type = ibas.boFactory.classOf(ibas.config.applyVariables(value));
                } else if (typeof value === "function") {
                    dataInfo.type = value;
                } else if (typeof value === "object") {
                    for (let item in dataInfo) {
                        if (!item) {
                            continue;
                        }
                        dataInfo[item] = value[item];
                    }
                }
                if (dataInfo.type && (!dataInfo.key || !dataInfo.text)) {
                    if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BOMasterData)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_CODE;
                        }
                        if (!dataInfo.text) {
                            dataInfo.text = ibas.BO_PROPERTY_NAME_NAME;
                        }
                    } else if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BODocument)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_DOCENTRY;
                        }
                    } else if (ibas.objects.isAssignableFrom(dataInfo.type, ibas.BOSimple)) {
                        if (!dataInfo.key) {
                            dataInfo.key = ibas.BO_PROPERTY_NAME_OBJECTKEY;
                        }
                    }
                }
                return dataInfo;
            }
            /**
             * 解析查询
             * @param value 值
             */
            export function criteria(value: ibas.ICriteria | ibas.ICondition[]): ibas.ICriteria {
                let criteria: ibas.Criteria;
                if (value instanceof ibas.Criteria) {
                    criteria = value;
                } else if (value instanceof Array) {
                    criteria = new ibas.Criteria();
                    criteria.noChilds = true;
                    for (let item of value) {
                        if (item instanceof ibas.Condition) {
                            criteria.conditions.add(item);
                        }
                    }
                }
                return criteria;
            }

            const hasViewServiceMap: Map<any, boolean> = new Map<any, boolean>();
            // 是否存在查看服务
            export function hasViewService(boType: Function): boolean {
                if (!hasViewServiceMap.has(boType)) {
                    if (ibas.servicesManager.getServices({
                        proxy: new ibas.BOLinkServiceProxy({
                            boCode: ibas.businessobjects.code(boType),
                            linkValue: undefined

                        }),
                        category: ibas.businessobjects.code(boType),
                    }).length > 0) {
                        hasViewServiceMap.set(boType, true);
                    } else {
                        hasViewServiceMap.set(boType, false);
                    }
                }
                return hasViewServiceMap.get(boType);
            }
        }
        /**
         * 变量
         */
        export namespace variables {
            /**
             * 值
             */
            const VALUES: Map<any, any> = new Map<any, any>();
            /**
             * 获取值
             * @param keys 键，可以多个
             */
            export function get<T>(...keys: any[]): T {
                if (!keys || keys.length < 1) {
                    throw new RangeError("keys count.");
                }
                let key: any;
                let values: Map<any, any> = VALUES;
                for (let i: number = 0; i < keys.length; i++) {
                    key = keys[i];
                    if ((i + 1) < keys.length) {
                        let tValues: any = values.get(key);
                        if (!(tValues instanceof Map)) {
                            return undefined;
                        }
                        values = tValues;
                    } else {
                        break;
                    }
                }
                return values.get(key);
            }
            /**
             * 设置值
             * @param value 值
             * @param keys  键，可以多个
             */
            export function set<T>(value: T, ...keys: any[]): void {
                if (!keys || keys.length < 1) {
                    throw new RangeError("keys count.");
                }
                let key: any;
                let values: Map<any, any> = VALUES;
                for (let i: number = 0; i < keys.length; i++) {
                    key = keys[i];
                    if ((i + 1) < keys.length) {
                        let tValues: any = values.get(key);
                        if (ibas.objects.isNull(tValues)) {
                            tValues = new Map<any, any>();
                            values.set(key, tValues);
                        }
                        if (!(tValues instanceof Map)) {
                            throw new TypeError("key values.");
                        }
                        values = tValues;
                    } else {
                        break;
                    }
                }
                values.set(key, value);
            }
        }
        /** 用户字段相关 */
        export namespace userfields {
            function toDbFieldType(type: sap.ui.model.SimpleType): ibas.emDbFieldType {
                if (type instanceof sap.extension.data.Numeric) {
                    return ibas.emDbFieldType.NUMERIC;
                } else if (type instanceof sap.extension.data.Decimal) {
                    return ibas.emDbFieldType.DECIMAL;
                } else if (type instanceof sap.extension.data.Date) {
                    return ibas.emDbFieldType.DATE;
                } else if (type instanceof sap.extension.data.DateTime) {
                    return ibas.emDbFieldType.DATE;
                } else if (type instanceof sap.extension.data.Time) {
                    return ibas.emDbFieldType.NUMERIC;
                }
                return ibas.emDbFieldType.ALPHANUMERIC;
            }
            /**
             * 检查用户字段（注册或更新绑定信息）
             * @param bindingInfo 绑定信息
             * @param userFields 用户字段
             * @returns 是否更新绑定信息
             */
            export function check(userFields: ibas.IUserFields, bindingInfo: managedobjects.IBindingInfo | managedobjects.IBindingInfo[]): boolean {
                for (let item of ibas.arrays.create(bindingInfo)) {
                    if (ibas.strings.isWith(item.path, "u_", undefined)) {
                        let name: string = item.path;
                        name = name[0].toUpperCase() + name.substring(1);
                        let userField: ibas.IUserField = userFields.register(name, toDbFieldType(item.type instanceof sap.ui.model.SimpleType ? item.type : undefined));
                        if (!ibas.objects.isNull(userField)) {
                            let index: number = userFields.indexOf(userField);
                            item.path = ibas.strings.format("userFields/{0}/value", index);
                            return true;
                        }
                    }
                }
                return false;
            }
        }
        /** 管理对象 */
        export namespace managedobjects {
            /** 绑定信息 */
            export interface IBindingInfo {
                path: string;
                type?: sap.ui.model.Type | string;
            }
            /**
             * 检查绑定信息
             * @param mObject 对象
             * @param path 路径
             * @param bindingInfo 绑定信息
             */
            export function checkBinding(mObject: sap.ui.base.ManagedObject, path: string, bindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): boolean {
                if (this instanceof sap.ui.base.ManagedObject) {
                    mObject = this;
                    path = arguments[0];
                    bindingInfo = arguments[1];
                }
                return function (this: sap.ui.base.ManagedObject): boolean {
                    if (!(this instanceof sap.ui.base.ManagedObject)) {
                        return undefined;
                    }
                    if (ibas.strings.equals(path, "bindingValue") && !ibas.objects.isNull(bindingInfo) && !ibas.objects.isNull(bindingInfo.path)) {
                        if (!bindingInfo.formatter && !bindingInfo.type) {
                            ibas.logger.log(ibas.emMessageLevel.WARN, "{0}: [{1} -> {2}] not specify the type of binding.", this.getId(), path, bindingInfo.path);
                            return false;
                        }
                    }
                    return true;
                }.call(mObject);
            }
            /**
             * 绑定信息
             * @param mObject 对象
             * @param property 绑定的属性
             */
            export function bindingInfo(mObject: sap.ui.base.ManagedObject, property: string): IBindingInfo | IBindingInfo[] {
                if (this instanceof sap.ui.base.ManagedObject) {
                    mObject = this;
                    property = arguments[0];
                }
                return function (this: sap.ui.base.ManagedObject): IBindingInfo | IBindingInfo[] {
                    if (!(this instanceof sap.ui.base.ManagedObject)) {
                        return undefined;
                    }
                    let bindings: IBindingInfo[] = [];
                    let bindingInfo: {
                        parts: IBindingInfo[]
                    } = this.getBindingInfo(property);
                    if (bindingInfo) {
                        if (bindingInfo.parts instanceof Array) {
                            for (let item of bindingInfo.parts) {
                                bindings.push(item);
                            }
                        } else {
                            bindings.push(<IBindingInfo><any>bindingInfo);
                        }
                    }
                    return bindings;
                }.call(mObject);
            }
            export function bindingPath(mObject: sap.ui.base.ManagedObject, property: string = undefined): string {
                if (this instanceof sap.ui.base.ManagedObject) {
                    mObject = this;
                    property = arguments[0];
                }

                if (ibas.objects.isNull(property)) {
                    let metadata: any = (<any>mObject).getMetadata();
                    if (metadata instanceof sap.ui.base.ManagedObjectMetadata) {
                        if (metadata.hasProperty("bindingValue")) {
                            property = "bindingValue";
                        } else if (metadata.hasProperty("value")) {
                            property = "value";
                        } else if (metadata.hasProperty("dataValue")) {
                            property = "dataValue";
                        } else if (metadata.hasProperty("number")) {
                            property = "number";
                        } else if (metadata.hasProperty("text")) {
                            property = "text";
                        } else if (metadata.hasProperty("selectedKey")) {
                            property = "selectedKey";
                        } else if (metadata.hasProperty("selected")) {
                            property = "selected";
                        } else if (metadata.hasProperty("country")) {
                            property = "country";
                        } else if (metadata.hasProperty("city")) {
                            property = "city";
                        } else if (metadata.hasProperty("province")) {
                            property = "province";
                        } else if (metadata.hasProperty("district")) {
                            property = "district";
                        } else if (metadata.hasProperty("street")) {
                            property = "street";
                        } else if (metadata.hasProperty("src")) {
                            property = "src";
                        } else if (metadata.hasProperty("height")) {
                            property = "height";
                        } else if (metadata.hasProperty("width")) {
                            property = "width";
                        }
                    }
                }
                return function (this: sap.ui.base.ManagedObject): string {
                    if (!(this instanceof sap.ui.base.ManagedObject)) {
                        return undefined;
                    }
                    return this.getBindingPath(property);
                }.call(mObject);
            }
        }
        export namespace controls {
            /**
             * 设置控件不可编辑
             * @param contorl 控件
             */
            export function nonEditable(control: sap.ui.core.Control): void {
                editable(control, false);
            }
            /**
             * 设置控件编辑状态
             * @param control 控件
             * @param editable 编辑状态
             */
            export function editable(control: sap.ui.core.Control, editable: boolean): void {
                if (control instanceof sap.m.InputBase) {
                    control.unbindProperty("editable", false);
                    control.setEditable(editable);
                } else if (control instanceof sap.m.Select) {
                    control.unbindProperty("editable", false);
                    control.setEditable(editable);
                } else if (control instanceof sap.m.CheckBox) {
                    control.unbindProperty("editable", false);
                    control.setEditable(editable);
                } else if (control instanceof sap.extension.core.EditableControl) {
                    control.unbindProperty("editable", false);
                    control.setEditable(editable);
                } else if (control instanceof sap.m.Button || control instanceof sap.m.MenuButton) {
                    control.unbindProperty("enabled", false);
                    control.setEnabled(editable);
                } else if (control instanceof sap.ui.table.Table) {
                    control.setEditable(editable);
                }
                if (control?.getVisible() === false) {
                    if (ibas.objects.isNull(control.getBinding("visible"))) {
                        control.setVisible(true);
                    }
                }
            }
        }
        /** 页面操作集 */
        export namespace pages {
            /** 配置项目-完成的单据不可编辑 */
            export const CONFIG_ITEM_FINISHED_DOCUMENT_NON_EDITABLE: string = "nonEditable|FinishedDocument";
            /** 配置项目-关闭的单据不可编辑（BOStatus） */
            export const CONFIG_ITEM_CLOSED_DOCUMENT_NON_EDITABLE: string = "nonEditable|ClosedDocument";
            /** 配置项目-不能撤销单据非计划状态 */
            export const CONFIG_ITEM_NOT_REVOKE_UNPLANNED_DOCUMENT: string = "notRevokeUnplannedDocument";
            /**
             * 改变页面控件状态（异步）
             */
            export function changeStatus(page: sap.m.Page | sap.uxap.ObjectPageLayout, timeout: number = 300): void {
                if (timeout > 0) {
                    setTimeout(() => {
                        changeStatusSync(page);
                    }, timeout);
                } else {
                    changeStatusSync(page);
                }
            }
            /**
             * 改变页面控件状态（同步）
             */
            export function changeStatusSync(page: sap.m.Page | sap.uxap.ObjectPageLayout): void {
                let model: any = page && page.getModel() ? (<any>page.getModel()).getData() : null;
                if (page instanceof sap.m.Page) {
                    if (model instanceof ibas.BOMasterData || model instanceof ibas.BOMasterDataLine) {
                        // tslint:disable-next-line: no-string-literal
                        if (!(model["series"] > 0)) {
                            if (model.isNew === true) {
                                for (let item of page.getContent()) {
                                    editable(item, true, ["Code"]);
                                }
                            } else {
                                editable(page.getSubHeader(), true);
                                for (let item of page.getContent()) {
                                    nonEditable(item, ["Code"]);
                                }
                            }
                        }
                    } else if (model instanceof ibas.BODocument) {
                        if (model.getProperty("DocumentStatus") === ibas.emDocumentStatus.CLOSED
                            || (model.getProperty("DocumentStatus") === ibas.emDocumentStatus.FINISHED
                                && ibas.config.get<boolean>(CONFIG_ITEM_FINISHED_DOCUMENT_NON_EDITABLE, false) === true)
                            || model.getProperty("Deleted") === ibas.emYesNo.YES
                            || model.getProperty("Canceled") === ibas.emYesNo.YES
                            || (model.getProperty("Status") === ibas.emBOStatus.CLOSED
                                && ibas.config.get<boolean>(CONFIG_ITEM_CLOSED_DOCUMENT_NON_EDITABLE, false) === true)) {
                            nonEditable(page.getSubHeader(), ["sap-icon://save", "sap-icon://delete", "sap-icon://create", "sap-icon://duplicate"]);
                            for (let item of page.getContent()) {
                                nonEditable(item, []);
                            }
                        }
                        if (ibas.config.get<boolean>(CONFIG_ITEM_NOT_REVOKE_UNPLANNED_DOCUMENT, false) === true) {
                            let ePage: HTMLElement = (<any>page).getDomRef();
                            if (ePage instanceof HTMLElement) {
                                let divs: any = ePage.querySelectorAll("div[id*=\"select\"]");
                                if (divs instanceof NodeList) {
                                    for (let div of divs) {
                                        if (div instanceof HTMLDivElement) {
                                            if (ibas.strings.count(ibas.strings.replace(div.id, "-__", ""), "-") > 0) {
                                                continue;
                                            }
                                            let select: any = sap.ui.getCore().byId(div.id);
                                            if (select instanceof sap.m.Select) {
                                                if (!ibas.strings.equalsIgnoreCase(managedobjects.bindingPath(select), "DocumentStatus")
                                                    && !ibas.strings.equalsIgnoreCase(managedobjects.bindingPath(select), "LineStatus")) {
                                                    continue;
                                                }
                                                for (let item of select.getItems()) {
                                                    if (item.getKey() === <any>ibas.emDocumentStatus.PLANNED ||
                                                        item.getKey() === <any>ibas.emDocumentStatus.PLANNED.toString()) {
                                                        if (model.isNew !== true && model.getProperty("DocumentStatus") > ibas.emDocumentStatus.PLANNED) {
                                                            item.setEnabled(false);
                                                        } else {
                                                            item.setEnabled(true);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (model instanceof ibas.BODocumentLine) {
                        if (model.getProperty("LineStatus") === ibas.emDocumentStatus.CLOSED
                            || (model.getProperty("LineStatus") === ibas.emDocumentStatus.FINISHED
                                && ibas.config.get<boolean>(CONFIG_ITEM_FINISHED_DOCUMENT_NON_EDITABLE, false) === true)
                            || model.getProperty("Deleted") === ibas.emYesNo.YES
                            || model.getProperty("Canceled") === ibas.emYesNo.YES
                            || (model.getProperty("Status") === ibas.emBOStatus.CLOSED
                                && ibas.config.get<boolean>(CONFIG_ITEM_CLOSED_DOCUMENT_NON_EDITABLE, false) === true)) {
                            nonEditable(page.getSubHeader(), ["sap-icon://save", "sap-icon://delete", "sap-icon://create", "sap-icon://duplicate"]);
                            for (let item of page.getContent()) {
                                nonEditable(item, []);
                            }
                        }
                        if (ibas.config.get<boolean>(CONFIG_ITEM_NOT_REVOKE_UNPLANNED_DOCUMENT, false) === true) {
                            let ePage: HTMLElement = (<any>page).getDomRef();
                            if (ePage instanceof HTMLElement) {
                                let divs: any = ePage.querySelectorAll("div[id*=\"select\"]");
                                if (divs instanceof NodeList) {
                                    for (let div of divs) {
                                        if (div instanceof HTMLDivElement) {
                                            if (ibas.strings.count(ibas.strings.replace(div.id, "-__", ""), "-") > 0) {
                                                continue;
                                            }
                                            let select: any = sap.ui.getCore().byId(div.id);
                                            if (select instanceof sap.m.Select) {
                                                if (!ibas.strings.equalsIgnoreCase(managedobjects.bindingPath(select), "DocumentStatus")
                                                    && !ibas.strings.equalsIgnoreCase(managedobjects.bindingPath(select), "LineStatus")) {
                                                    continue;
                                                }
                                                for (let item of select.getItems()) {
                                                    if (item.getKey() === <any>ibas.emDocumentStatus.PLANNED ||
                                                        item.getKey() === <any>ibas.emDocumentStatus.PLANNED.toString()) {
                                                        if (model.isNew !== true && model.getProperty("LineStatus") > ibas.emDocumentStatus.PLANNED) {
                                                            item.setEnabled(false);
                                                        } else {
                                                            item.setEnabled(true);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (model.isNew === true) {
                        nonEditable(page.getSubHeader(), ["sap-icon://delete", "sap-icon://generate-shortcut"]);
                    } else {
                        editable(page.getSubHeader(), true, ["sap-icon://delete", "sap-icon://generate-shortcut"]);
                    }
                }
            }
            function checkBinding(control: sap.ui.core.Control, properties: string[]): boolean {
                if (control instanceof sap.m.Button || control instanceof sap.m.MenuButton) {
                    let binding: any = control.getIcon();
                    for (let item of properties) {
                        if (ibas.strings.equalsIgnoreCase(item, binding)) {
                            return true;
                        }
                    }
                } else if (!ibas.objects.isNull(control)) {
                    let sPath: string = managedobjects.bindingPath(control);
                    for (let item of properties) {
                        if (ibas.strings.equalsIgnoreCase(item, sPath)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            function nonEditable(control: any, properties?: string[]): void {
                editable(control, false, properties);
            }
            function editable(control: any, status: boolean, properties?: string[]): void {
                if (!(properties instanceof Array)) {
                    properties = [];
                }
                if (control instanceof sap.ui.table.Table) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            controls.editable(control, status);
                        }
                    } else {
                        controls.editable(control, status);
                    }
                    if (control.getEditable() === false) {
                        for (let row of control.getRows()) {
                            for (let cell of row.getCells()) {
                                editable(cell, status, properties);
                            }
                        }
                        for (let col of control.getColumns()) {
                            editable(col.getTemplate(), status, properties);
                        }
                        properties = Array.from(properties);
                        properties.push("sap-icon://add");
                        properties.push("sap-icon://less");
                        if (control.getExtension instanceof Function) {
                            for (let item of control.getExtension()) {
                                editable(item, status, properties);
                            }
                        }
                        if ((<any>control).getToolbar instanceof Function) {
                            editable((<any>control).getToolbar(), status, properties);
                        }
                    }
                } else if (control instanceof sap.m.Page) {
                    for (let item of control.getContent()) {
                        editable(item, status, properties);
                    }
                } else if (control instanceof sap.ui.layout.form.SimpleForm) {
                    for (let item of control.getContent()) {
                        editable(item, status, properties);
                    }
                } else if (control instanceof sap.ui.layout.VerticalLayout) {
                    for (let item of control.getContent()) {
                        editable(item, status, properties);
                    }
                } else if (control instanceof sap.ui.layout.DynamicSideContent) {
                    for (let item of control.getMainContent()) {
                        editable(item, status, properties);
                    }
                    for (let item of control.getSideContent()) {
                        editable(item, status, properties);
                    }
                } else if (control instanceof sap.m.Toolbar) {
                    for (let item of control.getContent()) {
                        editable(item, status, properties);
                    }
                } else if (control instanceof sap.m.IconTabBar) {
                    for (let item of control.getItems()) {
                        if (item instanceof sap.m.IconTabFilter) {
                            for (let cItem of item.getContent()) {
                                editable(cItem, status, properties);
                            }
                        }
                    }
                } else if (control instanceof sap.m.FlexBox) {
                    for (let item of control.getItems()) {
                        editable(item, status, properties);
                    }
                } else {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            controls.editable(control, status);
                        }
                    } else {
                        controls.editable(control, status);
                    }
                }

            }
        }
        /** 表格操作集 */
        export namespace tables {
            /**
             * 参照table列绑定，创建对象
             * @param table 参照表格
             * @param data 数据（csv转换数组）
             * @param type 返回对象类型
             */
            export function parseObject<T>(table: table.Table, datas: any[], type: any = {}): T[] {
                let jsons: ibas.IList<T> = new ibas.ArrayList<T>();
                if (datas instanceof Array && datas.length > 1) {
                    let titles: any[] = datas[0];
                    if (titles instanceof Array && titles.length > 0) {
                        let properties: managedobjects.IBindingInfo[] = new Array<managedobjects.IBindingInfo>(titles.length);
                        for (let i: number = 0; i < titles.length; i++) {
                            let title: string = titles[i];
                            for (let column of table.getColumns()) {
                                let label: any = column.getLabel();
                                if (label instanceof sap.m.Label) {
                                    if (title === label.getText()) {
                                        let template: any = column.getTemplate();
                                        if (template instanceof ui.core.Control) {
                                            let bindingInfo: any = managedobjects.bindingInfo(template, "bindingValue");
                                            if (bindingInfo instanceof Array && bindingInfo.length > 0) {
                                                properties[i] = bindingInfo[0];
                                            }
                                        } break;
                                    }
                                }
                            }
                        }
                        for (let i: number = 1; i < datas.length; i++) {
                            let data: any[] = datas[i];
                            if (data instanceof Array && data.length >= properties.length) {
                                let json: T = new type;
                                for (let j: number = 0; j < properties.length; j++) {
                                    let value: any = data[j];
                                    let property: managedobjects.IBindingInfo = properties[j];
                                    if (!ibas.strings.isEmpty(property)) {
                                        if (property.type instanceof sap.ui.model.SimpleType) {
                                            json[property.path] = property.type.parseValue(value, property.type.getName().toLowerCase());
                                        } else {
                                            json[property.path] = value;
                                        }
                                    }
                                }
                                jsons.add(json);
                            }
                        }

                    }
                }
                return jsons;
            }
            /**
             * 填充列数据
             * @param focus 开始单元格
             * @param values 填充值
             * @param onOverRows 超过数量时处理（返回：true，继续；false，退出）
             * @param setValue 控件赋值后
             */
            export function fillingCellsData(focus: sap.m.InputBase, values: string | string[] | number[],
                onOverRows?: (overCount: number) => boolean,
                setValue?: (cell: sap.ui.core.Control, value: string | number) => void
            ): void {
                let row: sap.ui.table.Row = <any>focus?.getParent();
                let table: sap.ui.table.Table = <any>row?.getParent();
                let column: sap.ui.table.Column = <any>sap.ui.getCore().byId(focus.getAriaLabelledBy()[0]);
                if (!(table instanceof sap.ui.table.Table)
                    || !(row instanceof sap.ui.table.Row)
                    || !(column instanceof sap.ui.table.Column)) {
                    return;
                }
                if (typeof values === "string") {
                    values = ibas.strings.replace(values, "\r\n", "\n");
                    values = values.split("\n");
                    // 移除后部空白值
                    for (let i: number = values.length - 1; i >= 0; i--) {
                        if (ibas.strings.isEmpty(values[i])) {
                            values.pop();
                        } else {
                            break;
                        }
                    }
                }
                if (!(values instanceof Array)) {
                    return;
                }
                let colIndex: number = -1;
                for (let col of table.getColumns()) {
                    if (col.getVisible() === false) {
                        continue;
                    }
                    colIndex++;
                    if (col === column) {
                        break;
                    }
                }
                let rowIndex: number = row.getIndex();
                if (colIndex >= 0 && rowIndex >= 0) {
                    if (values.length > 0) {
                        let rowCount: number = table.hasModel() ?
                            values.length - (ibas.numbers.valueOf((<any>table)._getTotalRowCount()) - rowIndex) :
                            values.length;
                        if (rowCount > 0 && onOverRows instanceof Function) {
                            if (onOverRows(rowCount) === false) {
                                // 退出
                                return;
                            }
                        }
                        table.setBusy(true);
                        setTimeout(() => {
                            if (!(setValue instanceof Function)) {
                                setValue = function (control: sap.ui.core.Control, value: any): void {
                                    if (control instanceof sap.m.Input) {
                                        control.setValue(value);
                                    } else if (control instanceof sap.m.Select) {
                                        control.setSelectedKey(value);
                                    } else if (control instanceof sap.m.ComboBox) {
                                        control.setSelectedKey(value);
                                    } else if (control instanceof sap.m.InputBase) {
                                        control.setValue(value);
                                    }
                                };
                            }
                            let fRowCount: number = 0;
                            let vRowCount: number = table.getVisibleRowCount();
                            rowCount = (<any>table)._getMaxFirstVisibleRowIndex();
                            let setRowValue: Function = function (value: string, next: Function): void {
                                for (let tmpRow of table.getRows()) {
                                    if (tmpRow.getIndex() === rowIndex) {
                                        let cell: any = tmpRow.getCells()[colIndex];
                                        setValue(cell, value);
                                        setTimeout(() => {
                                            next();
                                        }, 300);
                                        rowIndex += 1;
                                        return;
                                    }
                                }
                                // 没处理则下一个
                                next();
                            };
                            ibas.queues.execute(<any>values, (value, next) => {
                                fRowCount = table.getFirstVisibleRow();
                                if (fRowCount !== rowCount && rowIndex > (fRowCount + vRowCount - 1)) {
                                    setTimeout(() => {
                                        if (rowIndex > rowCount) {
                                            table.setFirstVisibleRow(rowCount);
                                        } else {
                                            table.setFirstVisibleRow(rowIndex);
                                        }
                                        setTimeout(() => {
                                            setRowValue(value, next);
                                        }, 15);
                                    }, table.getBusyIndicatorDelay() + (table.getVisibleRowCount() * 3));
                                } else {
                                    setRowValue(value, next);
                                }
                            }, () => {
                                table.setBusy(false);
                            });
                        }, table.getBusyIndicatorDelay() + (table.getVisibleRowCount() * 5));
                    }
                }
            }
        }
        /** 数据操作集 */
        export namespace datas {
            /** 默认检查的属性 */
            const CHECK_PROPERTIES: string[] = ["value", "dataValue", "selectedKey", "bindingValue"];
            /**
             * 验证数据
             * @param element 被验证元素
             * @returns 是否通过
             */
            export function validate(element: sap.ui.core.Control | sap.ui.core.Control[], chkProperies?: string[]): boolean {
                return new data.Validator(
                    ibas.arrays.create(element),
                    ibas.arrays.create(CHECK_PROPERTIES, chkProperies)
                ).valid();
            }

        }
        /** 自定义数据 */
        export namespace customdatas {
            export const UI_DATA_KEY_VIEW: string = "__UI_DATA_KEY_VIEW";
            export const UI_DATA_KEY_HASH: string = "__UI_DATA_KEY_HASH";
            /**
             * 获取控件自定义数据
             * @param control 控件或控件数组
             * @param key 数据名称
             */
            export function where<T>(element: sap.ui.core.Element | sap.ui.core.Element[], key: string): ibas.IList<T> {
                let values: ibas.ArrayList<T> = new ibas.ArrayList<T>();
                for (let eItem of ibas.arrays.create(element)) {
                    for (let dItem of eItem.getCustomData()) {
                        if (ibas.strings.equals(dItem.getKey(), key)) {
                            values.add(dItem.getValue());
                        }
                    }
                }
                return values;
            }
            /**
             * 设置控件数据
             * @param control 控件
             * @param key 名称
             * @param value 数据
             */
            export function set<C>(element: C, key: string, value: any): C {
                if (element instanceof sap.ui.core.Element) {
                    element.addCustomData(new sap.ui.core.CustomData("", {
                        key: key,
                        value: value,
                        writeToDom: false,
                    }));
                }
                return element;
            }
            /**
             * 获取Hash值
             * @param element 元素
             */
            export function getHash(element: sap.ui.core.Element): string {
                return where<string>(element, UI_DATA_KEY_HASH).firstOrDefault();
            }
            /**
             * 获取View值
             * @param element 元素
             */
            export function getView<T extends ibas.IView>(element: sap.ui.core.Element): T {
                return where<T>(element, UI_DATA_KEY_VIEW).firstOrDefault();
            }
            /**
             * 设置Hash值
             * @param element 元素
             * @param value hash值
             */
            export function setHash<C>(element: C, value: string): C {
                return set(element, UI_DATA_KEY_HASH, value);
            }
            /**
             * 设置View值
             * @param element 元素
             * @param value view值
             */
            export function setView<C>(element: C, value: ibas.IView): C {
                return set(element, UI_DATA_KEY_VIEW, value);
            }
        }
    }
}