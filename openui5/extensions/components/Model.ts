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
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {},
                /**
                 * 设置数据
                 */
                setData(this: JSONModel, oData: any, bMerge?: boolean): void {
                    if (oData instanceof ibas.Bindable) {
                        oData.registerListener({
                            id: this.getId(),
                            propertyChanged: () => {
                                this.refresh(false);
                            }
                        });
                    } else if (oData instanceof Array) {
                        for (let value of oData) {
                            if (value instanceof ibas.Bindable) {
                                value.registerListener({
                                    id: this.getId(),
                                    propertyChanged: () => {
                                        this.refresh(false);
                                    }
                                });
                            }
                        }
                    } else if (oData instanceof Object) {
                        for (let item in oData) {
                            if (!item) {
                                continue;
                            }
                            let values: any = oData[item];
                            if (values instanceof ibas.Bindable) {
                                values.registerListener({
                                    id: this.getId(),
                                    propertyChanged: () => {
                                        this.refresh(false);
                                    }
                                });
                            } else if (values instanceof Array) {
                                for (let value of values) {
                                    if (value instanceof ibas.Bindable) {
                                        value.registerListener({
                                            id: this.getId(),
                                            propertyChanged: () => {
                                                this.refresh(false);
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                    sap.ui.model.json.JSONModel.prototype.setData.apply(this, arguments);
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
                        // 同一个集合时，强行更新
                        this.refresh(false);
                    } else if (sData instanceof Array) {
                        if (oData instanceof Array) {
                            for (let data of oData) {
                                if (data instanceof ibas.Bindable) {
                                    data.registerListener({
                                        id: this.getId(),
                                        propertyChanged: () => {
                                            this.refresh(false);
                                        }
                                    });
                                }
                                sData.push(data);
                            }
                        } else {
                            if (oData instanceof ibas.Bindable) {
                                oData.registerListener({
                                    id: this.getId(),
                                    propertyChanged: () => {
                                        this.refresh(false);
                                    }
                                });
                            }
                            sData.push(oData);
                        }
                    } else {
                        // 非集合
                        this.setData(oData);
                    }
                    this.refresh(false);
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
                }
            });
        }
    }
}
