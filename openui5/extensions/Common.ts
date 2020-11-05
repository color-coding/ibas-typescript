/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        /**
         * 工具集
         */
        export namespace utils {
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
                    for (let item of value) {
                        if (item instanceof ibas.Condition) {
                            criteria.conditions.add(item);
                        }
                    }
                }
                return criteria;
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
            function toDbFieldType(type: sap.extension.data.Type): ibas.emDbFieldType {
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
                        let userField: ibas.IUserField = userFields.register(name, toDbFieldType(item.type instanceof sap.extension.data.Type ? item.type : undefined));
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
            export function checkBinding(mObject: sap.ui.base.ManagedObject, path: string, bindingInfo: any): boolean {
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
                if (control instanceof sap.m.InputBase) {
                    control.setEditable(false);
                    if (control instanceof sap.m.Input) {
                        control.setShowValueHelp(false);
                    }
                } else if (control instanceof sap.m.Select) {
                    try {
                        control.setEditable(false);
                    } catch (error) {
                        control.setEnabled(false);
                    }
                } else if (control instanceof sap.m.CheckBox) {
                    control.setEditable(false);
                } else if (control instanceof sap.extension.core.EditableControl) {
                    control.setEditable(false);
                } else if (control instanceof sap.m.Button || control instanceof sap.m.MenuButton) {
                    control.setEnabled(false);
                } else if (control instanceof sap.ui.table.Table) {
                    control.setEditable(false);
                }
            }
        }
        /** 页面操作集 */
        export namespace pages {
            /**
             * 改变页面控件状态
             */
            export function changeStatus(page: sap.m.Page): void {
                let model: any = page && page.getModel() ? (<any>page.getModel()).getData() : null;
                if (model instanceof ibas.BOMasterData || model instanceof ibas.BOMasterDataLine) {
                    if (!model.isNew) {
                        nonEditable(page.getSubHeader(), ["!"]);
                        for (let item of page.getContent()) {
                            nonEditable(item, ["Code"]);
                        }
                    }
                } else if (model instanceof ibas.BODocument) {
                    if (model.getProperty("DocumentStatus") === ibas.emDocumentStatus.CLOSED) {
                        nonEditable(page.getSubHeader(), ["sap-icon://save", "sap-icon://delete", "sap-icon://create"]);
                        for (let item of page.getContent()) {
                            nonEditable(item, []);
                        }
                    }
                } else if (model instanceof ibas.BODocumentLine) {
                    if (model.getProperty("LineStatus") === ibas.emDocumentStatus.CLOSED) {
                        nonEditable(page.getSubHeader(), ["sap-icon://save", "sap-icon://delete", "sap-icon://create"]);
                        for (let item of page.getContent()) {
                            nonEditable(item, []);
                        }
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
                } else {
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
                if (!(properties instanceof Array)) {
                    properties = [];
                }
                if (control instanceof sap.ui.table.Table) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            controls.nonEditable(control);
                        }
                    } else {
                        controls.nonEditable(control);
                    }
                    if (control.getEditable() === false) {
                        for (let row of control.getRows()) {
                            for (let cell of row.getCells()) {
                                nonEditable(cell, properties);
                            }
                        }
                        properties = Array.from(properties);
                        properties.push("sap-icon://add");
                        properties.push("sap-icon://less");
                        if (control.getExtension instanceof Function) {
                            for (let item of control.getExtension()) {
                                nonEditable(item, properties);
                            }
                        }
                        if ((<any>control).getToolbar instanceof Function) {
                            nonEditable((<any>control).getToolbar(), properties);
                        }
                    }
                } else if (control instanceof sap.m.Page) {
                    for (let item of control.getContent()) {
                        nonEditable(item, properties);
                    }
                } else if (control instanceof sap.ui.layout.form.SimpleForm) {
                    for (let item of control.getContent()) {
                        nonEditable(item, properties);
                    }
                } else if (control instanceof sap.ui.layout.VerticalLayout) {
                    for (let item of control.getContent()) {
                        nonEditable(item, properties);
                    }
                } else if (control instanceof sap.ui.layout.DynamicSideContent) {
                    for (let item of control.getMainContent()) {
                        nonEditable(item, properties);
                    }
                    for (let item of control.getSideContent()) {
                        nonEditable(item, properties);
                    }
                } else if (control instanceof sap.m.Toolbar) {
                    for (let item of control.getContent()) {
                        nonEditable(item, properties);
                    }
                } else {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            controls.nonEditable(control);
                        }
                    } else {
                        controls.nonEditable(control);
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
                                        if (property.type instanceof sap.extension.data.Type) {
                                            json[property.path] = property.type.parseValue(value, typeof value);
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
