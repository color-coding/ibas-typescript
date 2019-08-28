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
            /** 检查绑定信息 */
            export function checkBindingInfo(this: sap.ui.base.ManagedObject, sName: string, oBindingInfo: any): boolean {
                if (ibas.strings.equals(sName, "bindingValue") && !ibas.objects.isNull(oBindingInfo) && !ibas.objects.isNull(oBindingInfo.path)) {
                    if (!oBindingInfo.formatter && !oBindingInfo.type) {
                        ibas.logger.log(ibas.emMessageLevel.WARN, "{0}: [{1} -> {2}] not specify the type of binding.", this.getId(), sName, oBindingInfo.path);
                        return false;
                    }
                }
                return true;
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
                    let binding: any = control.getBinding("bindingValue");
                    if (binding instanceof sap.ui.model.Binding) {
                        let sPath: string = (<any>binding).getPath();
                        for (let item of properties) {
                            if (ibas.strings.equalsIgnoreCase(item, sPath)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            }
            function nonEditable(control: any, properties?: string[]): void {
                if (!(properties instanceof Array)) {
                    properties = [];
                }
                if (control instanceof sap.m.InputBase) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            control.setEditable(false);
                        }
                    } else {
                        control.setEditable(false);
                    }
                } else if (control instanceof sap.m.Select) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            try {
                                control.setEditable(false);
                            } catch (error) {
                                control.setEnabled(false);
                            }
                        }
                    } else {
                        try {
                            control.setEditable(false);
                        } catch (error) {
                            control.setEnabled(false);
                        }
                    }
                } else if (control instanceof sap.m.CheckBox) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            control.setEditable(false);
                        }
                    } else {
                        control.setEditable(false);
                    }
                } else if (control instanceof sap.extension.core.EditableControl) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            control.setEditable(false);
                        }
                    } else {
                        control.setEditable(false);
                    }
                } else if (control instanceof sap.m.Button || control instanceof sap.m.MenuButton) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            control.setEnabled(false);
                        }
                    } else {
                        control.setEnabled(false);
                    }
                } else if (control instanceof sap.ui.table.Table) {
                    if (properties.length > 0) {
                        if (checkBinding(control, properties)) {
                            control.setEditable(false);
                        }
                    } else {
                        control.setEditable(false);
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
                }
            }
        }
        /** 表格操作集 */
        export namespace tables {
            interface IBindingInfo {
                path: string;
                type: sap.extension.data.Type;
            }
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
                        let properties: IBindingInfo[] = new Array<IBindingInfo>(titles.length);
                        for (let i: number = 0; i < titles.length; i++) {
                            let title: string = titles[i];
                            for (let column of table.getColumns()) {
                                let label: any = column.getLabel();
                                if (label instanceof sap.m.Label) {
                                    if (title === label.getText()) {
                                        let template: any = column.getTemplate();
                                        if (template instanceof ui.core.Control) {
                                            let bindingInfo: {
                                                parts: IBindingInfo[]
                                            } = (<any>template).getBindingInfo("bindingValue");
                                            if (bindingInfo && bindingInfo.parts instanceof Array) {
                                                properties[i] = bindingInfo.parts[0];
                                            }
                                        } break;
                                    }
                                }
                            }
                        }
                        for (let i: number = 1; i < datas.length; i++) {
                            let data: any[] = datas[i];
                            if (data instanceof Array && data.length === properties.length) {
                                let json: T = new type;
                                for (let j: number = 0; j < data.length; j++) {
                                    let value: any = data[j];
                                    let property: IBindingInfo = properties[j];
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
    }
}
