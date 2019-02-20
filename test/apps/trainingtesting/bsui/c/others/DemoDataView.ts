/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace c {
            /**
             * 视图-demo
             */
            export class DemoDataView extends ibas.View implements app.IDemoDataView {
                /** 显示数据串 */
                stringDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", {}),
                            new sap.m.Label("", { text: "Alphanumeric" }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "/alphanumeric",
                                type: new openui5.data.Alphanumeric({
                                    notEmpty: true,
                                    maxLength: 20,
                                    minLength: 3,
                                    regExp: /^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(14\d{9})|(15\d{9})|(16\d{9})|(17\d{9})|(18\d{9}))$/,
                                    onValidated: (error) => {
                                        if (error instanceof Error) {
                                            error.message = "Alphanumeric " + error.message;
                                        }
                                    }
                                }),
                            }),
                            new sap.m.Label("", { text: "Numeric" }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/numeric",
                                type: new openui5.data.Numeric({
                                    maxValue: 999,
                                    minValue: 0
                                }),
                            }),
                            new sap.m.Label("", { text: "Decimal" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/decimal",
                                type: new openui5.data.Decimal(),
                            }).bindProperty("description", {
                                path: "/decimal",
                            }),
                            new sap.m.Label("", { text: "Price" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_PRICE) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/price",
                                type: new openui5.data.Price(),
                            }).bindProperty("description", {
                                path: "/price",
                            }),
                            new sap.m.Label("", { text: "Quantity" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/quantity",
                                type: new openui5.data.Quantity(),
                            }).bindProperty("description", {
                                path: "/quantity",
                            }),
                            new sap.m.Label("", { text: "Rate" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_RATE) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/rate",
                                type: new openui5.data.Rate(),
                            }).bindProperty("description", {
                                path: "/rate",
                            }),
                            new sap.m.Label("", { text: "Sum" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_SUM) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/sum",
                                type: new openui5.data.Sum(),
                            }).bindProperty("description", {
                                path: "/sum",
                            }),
                            new sap.m.Label("", { text: "Measurement" + " ." + ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_MEASUREMENT) }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("value", {
                                path: "/measurement",
                                type: new openui5.data.Measurement(),
                            }).bindProperty("description", {
                                path: "/measurement",
                            }),
                            new sap.m.Label("", { text: "Percentage" }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "/percentage",
                                type: new openui5.data.Percentage(),
                            }).bindProperty("description", {
                                path: "/percentage",
                            }),
                            new sap.m.Label("", { text: "DateTime" }),
                            new sap.m.DatePicker("", {
                            }).bindProperty("value", {
                                path: "/dateTime",
                                type: new openui5.data.DateTime(),
                            }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/dateTime",
                                type: new openui5.data.DateTime(),
                            }),
                            new sap.m.Label("", { text: "Time" }),
                            new sap.m.TimePicker("", {
                                valueFormat: openui5.data.Time.DEFAULT_FORMAT,
                            }).bindProperty("value", {
                                path: "/time",
                                type: new openui5.data.Time(),
                            }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/time",
                                type: new openui5.data.Time(),
                            }),
                            new sap.m.Label("", { text: "emYesNo" }),
                            new sap.m.CheckBox("", {
                                text: "type: Unknown"
                            }).bindProperty("selected", {
                                path: "/canceled",
                                type: new openui5.data.Unknown({
                                    formatValue(oValue: any, sInternalType: string): any {
                                        if (sInternalType === "boolean") {
                                            return oValue === ibas.emYesNo.YES ? true : false;
                                        } else if (sInternalType === "string") {
                                            return ibas.enums.toString(ibas.emYesNo, oValue);
                                        }
                                        return oValue;
                                    },
                                    parseValue(oValue: boolean, sInternalType: string): any {
                                        if (sInternalType === "boolean") {
                                            return oValue === true ? ibas.emYesNo.YES : ibas.emYesNo.NO;
                                        } else if (sInternalType === "string") {
                                            return ibas.enums.valueOf(ibas.emYesNo, oValue);
                                        }
                                        return oValue;
                                    }
                                }),
                            }),
                            new sap.m.CheckBox("", {
                                text: "type: YesNo"
                            }).bindProperty("selected", {
                                path: "/canceled",
                                type: new openui5.data.YesNo(),
                            }),
                            new sap.m.Label("", { text: "emDocumentStatus" }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                            }).bindProperty("selectedKey", {
                                path: "/documentStatus",
                                type: new openui5.data.DocumentStatus(),
                            }),
                            new sap.m.Text("", {
                            }).bindProperty("text", {
                                path: "/documentStatus",
                                type: new openui5.data.DocumentStatus({
                                    describe: true,
                                }),
                            }),
                            new sap.m.Label("", { text: "MessageType" }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(sap.ui.core.Popup.Dock),
                            }).bindProperty("selectedKey", {
                                path: "/messageType",
                                type: new openui5.data.Enum({
                                    enumType: sap.ui.core.Popup.Dock,
                                }),
                            }),
                            new sap.ui.core.Title("", {}),
                            new sap.m.Label("", { text: "Stringify" }),
                            this.textArea = new sap.m.TextArea("", {
                                rows: 20,
                            }),
                        ]
                    });
                    return this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_check"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://stethoscope",
                                    press: function (): void {
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_refresh"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://attachment-html",
                                    press: function (): void {
                                        that.fireViewEvents(that.stringDataEvent);
                                    }
                                }),
                            ]
                        }),
                        content: [
                            formTop
                        ]
                    });
                }
                private page: sap.m.Page;
                private textArea: sap.m.TextArea;
                showData(data: app.DemoData): void {
                    this.page.setModel(new sap.ui.model.json.JSONModel(data));
                }
                showDataString(data: string): void {
                    this.textArea.setValue(data);
                }
            }
        }
    }
}