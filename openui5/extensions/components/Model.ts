/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace model {
            export const DATA_ROWS: string = "rows";
            /**
             * json模型
             */
            sap.ui.model.json.JSONModel.extend("sap.extension.model.JSONModel", {
                constructor: function (): void {
                    sap.ui.model.json.JSONModel.apply(this, arguments);
                    this.forcedRefresh = false;
                },
                metadata: {
                },
                /**
                 * 获取-强制刷新
                 */
                getForcedRefresh(): boolean {
                    return this.forcedRefresh;
                },
                /**
                 * 设置-强制刷新
                 */
                setForcedRefresh(value: boolean): JSONModel {
                    this.forcedRefresh = value;
                    return this;
                },
                /**
                 * 设置数据
                 */
                setData(this: JSONModel, oData: any, bMerge?: boolean): void {
                    if (oData instanceof ibas.Bindable) {
                        this.registerPropertyChanged(oData);
                    } else if (oData instanceof Array) {
                        for (let value of oData) {
                            if (value instanceof ibas.Bindable) {
                                this.registerPropertyChanged(value);
                            }
                        }
                    } else if (oData instanceof Object) {
                        for (let item in oData) {
                            if (!item) {
                                continue;
                            }
                            let values: any = oData[item];
                            if (values instanceof ibas.Bindable) {
                                this.registerPropertyChanged(values);
                            } else if (values instanceof Array) {
                                for (let value of values) {
                                    if (value instanceof ibas.Bindable) {
                                        this.registerPropertyChanged(value);
                                    }
                                }
                            }
                        }
                    }
                    sap.ui.model.json.JSONModel.prototype.setData.apply(this, arguments);
                },
                /**
                 * 获取数据
                 * @param sPath 路径
                 */
                getData(this: JSONModel, path?: string): void {
                    let data: any = sap.ui.model.json.JSONModel.prototype.getData.apply(this, arguments);
                    if (typeof path === "string" && path.length > 0) {
                        if (data) {
                            return data[path];
                        }
                    }
                    return data;
                },
                /**
                 * 增加数据
                 * @param oData 数据
                 */
                addData(this: JSONModel, oData: any | any[], path?: string): void {
                    let sData: any = this.getData();
                    if (ibas.strings.isEmpty(path)) {
                        // 空路径，默认使用row
                        if (!(sData instanceof Array)) {
                            sData = sData[DATA_ROWS];
                        }
                    } else if (!ibas.strings.equals("/", path)) {
                        sData = sData[path];
                    }
                    if (sData === oData) {
                        this.refresh(true);
                    } else if (sData instanceof Array) {
                        if (oData instanceof Array) {
                            for (let data of oData) {
                                if (data instanceof ibas.Bindable) {
                                    this.registerPropertyChanged(data);
                                }
                                sData.push(data);
                            }
                        } else {
                            if (oData instanceof ibas.Bindable) {
                                this.registerPropertyChanged(oData);
                            }
                            sData.push(oData);
                        }
                        this.refresh(false);
                    } else {
                        // 非集合
                        this.setData(oData);
                        this.refresh(true);
                    }
                },
                /** 自动刷新 */
                fireAutoRefresh(this: JSONModel): void {
                    if (typeof this.getForcedRefresh() === "boolean") {
                        if (this.getForcedRefresh() === true) {
                            this.refresh(true);
                        } else {
                            this.refresh(false);
                        }
                    }
                },
                size(this: JSONModel): number {
                    let sData: any = this.getData();
                    if (sData instanceof Array) {
                        return sData.length;
                    } else if (sData[DATA_ROWS] instanceof Array) {
                        return sData[DATA_ROWS].length;
                    } else if (!ibas.objects.isNull(sData)) {
                        return 1;
                    }
                    return 0;
                },
                /** 退出 */
                destroy(this: JSONModel): void {
                    let data: any = this.getData();
                    if (data instanceof ibas.Bindable) {
                        data.removeListener(this.getId());
                    } else if (data instanceof Array) {
                        for (let item of data) {
                            if (item instanceof ibas.Bindable) {
                                item.removeListener(this.getId());
                            }
                        }
                    } else if (data instanceof Object) {
                        for (let item in data) {
                            if (!item) {
                                continue;
                            }
                            let values: any = data[item];
                            if (values instanceof ibas.Bindable) {
                                values.removeListener(this.getId());
                            } else if (values instanceof Array) {
                                for (let value of values) {
                                    if (value instanceof ibas.Bindable) {
                                        value.removeListener(this.getId());
                                    }
                                }
                            }
                        }
                    }
                    sap.ui.model.json.JSONModel.prototype.destroy.apply(this, arguments);
                },
                registerPropertyChanged(data: ibas.Bindable): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    data.registerListener({
                        id: this.getId(),
                        propertyChanged: () => {
                            this.fireAutoRefresh();
                        }
                    });
                }
            });
        }
    }
}
