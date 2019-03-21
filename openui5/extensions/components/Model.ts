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
                    } else if (oData instanceof Object) {
                        for (let item in oData) {
                            if (!item) {
                                continue;
                            }
                            let value: any = oData[item];
                            if (value instanceof ibas.Bindable) {
                                value.registerListener({
                                    id: this.getId(),
                                    propertyChanged: () => {
                                        this.refresh(false);
                                    }
                                });
                            } else if (value instanceof Array) {
                                for (let data of value) {
                                    data.registerListener({
                                        id: this.getId(),
                                        propertyChanged: () => {
                                            this.refresh(false);
                                        }
                                    });
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
                addData(this: JSONModel, oData: any | any[], path: string = DATA_ROWS): void {
                    let sData: any = this.getData();
                    if (sData[DATA_ROWS] instanceof Array) {
                        sData = sData[DATA_ROWS];
                        if (oData instanceof ibas.Bindable) {
                            oData.registerListener({
                                id: this.getId(),
                                propertyChanged: () => {
                                    this.refresh(false);
                                }
                            });
                            sData.push(oData);
                        } else if (oData instanceof Array) {
                            for (let data of oData) {
                                data.registerListener({
                                    id: this.getId(),
                                    propertyChanged: () => {
                                        this.refresh(false);
                                    }
                                });
                                sData.push(data);
                            }
                        }
                    } else {
                        this.setData(oData);
                    }
                    this.refresh(false);
                }
            });
        }
    }
}
