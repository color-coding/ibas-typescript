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
             * 视图-控件示例
             */
            export class DemoControlsView extends ibas.View implements app.IDemoControlsView {
                /** 绘制视图 */
                draw(): any {
                    return new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSpacer(),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_reset"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://reset",
                                    press: () => {
                                        this.container.backToTop();
                                    }
                                }),
                            ]
                        }),
                        content: [
                            this.container = new sap.m.NavContainer("", {
                                pages: [
                                    new sap.m.Page("", {
                                        content: [
                                            this.address(),
                                            this.input()
                                        ]
                                    }),
                                ]
                            })
                        ]
                    });
                }
                private container: sap.m.NavContainer;

                private drawTile(
                    info: { header: string, notes?: string, headerImage?: sap.ui.core.URI },
                    draw: () => sap.ui.core.Control | sap.ui.core.Control[]
                ): sap.m.GenericTile {
                    return <sap.m.GenericTile>new sap.m.GenericTile("", {
                        header: info.header,
                        headerImage: info.headerImage,
                        size: sap.m.Size.L,
                        tileContent: [
                            new sap.m.TileContent("", {
                                content: new sap.m.NewsContent("", {
                                    contentText: info.notes,
                                })
                            })
                        ],
                        press: (event: sap.ui.base.Event) => {
                            let page: sap.m.Page = new sap.m.Page("", {
                                showHeader: false,
                            });
                            for (let item of ibas.arrays.create(draw())) {
                                page.addContent(item);
                            }
                            this.container.addPage(page);
                            this.container.to(page.getId());
                        }
                    }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
                }

                private address(): sap.m.GenericTile {
                    return this.drawTile({
                        header: "Address",
                        headerImage: "sap-icon://addresses",
                        notes: "",
                    }, () => {
                        return new sap.ui.layout.form.SimpleForm("", {
                            editable: true,
                            content: [
                                new sap.ui.core.Title("", {}),
                                new sap.m.Label("", { text: ibas.i18n.prop("openui5_address") }),
                                new sap.extension.m.AddressArea("", {
                                    countryVisible: true,
                                    zipCodeVisible: true,
                                    editable: true,
                                    addressChange: (event: sap.ui.base.Event) => {
                                        this.application.viewShower.proceeding(this, ibas.emMessageType.SUCCESS, event.getParameter("address"));
                                    }
                                }),
                                new sap.ui.core.Title("", {}),
                            ]
                        });
                    });



                }
                private input(): sap.m.GenericTile {
                    return this.drawTile({
                        header: "Inputs",
                        headerImage: "sap-icon://shelf",
                        notes: "",
                    }, () => {
                        let onChanged: (event: sap.ui.base.Event) => void = (event) => {
                            let source: any = event.getSource();
                            if (source instanceof sap.m.InputBase) {
                                this.application.viewShower.proceeding(this, ibas.emMessageType.SUCCESS, ibas.strings.format("{0}: {1}", source.getId(), source.getValue()));
                            } else if (source instanceof sap.m.Select) {
                                this.application.viewShower.proceeding(this, ibas.emMessageType.SUCCESS, ibas.strings.format("{0}: {1}", source.getId(), source.getSelectedKey()));
                            }
                        };
                        return new sap.ui.layout.form.SimpleForm("", {
                            editable: true,
                            content: [
                                new sap.ui.core.Title("", {}),
                                new sap.m.Label("", { text: "Time" }),
                                sap.extension.factories.newInput("hh:mm", onChanged),
                                new sap.m.Label("", { text: "Time" }),
                                sap.extension.factories.newInput("hh:mm:ss", onChanged),
                                new sap.m.Label("", { text: "Date" }),
                                sap.extension.factories.newInput("yyyy-MM-dd", onChanged),
                                new sap.m.Label("", { text: "Choose" }),
                                sap.extension.factories.newInput("#{${Company}_SYS_USER}.{Code}", onChanged),
                                new sap.m.Label("", { text: "Choose" }),
                                sap.extension.factories.newInput(`{"type":"Criteria","BusinessObject":"$\{Company\}_MM_SPEC.ObjectKey","Conditions":[]}`, onChanged),
                                new sap.m.Label("", { text: "Array" }),
                                sap.extension.factories.newInput("[1,2,3]", onChanged),
                                new sap.m.Label("", { text: "Array" }),
                                sap.extension.factories.newInput(`[{"key":"Y","value":"YES"},{"key":"N","value":"NO"}]`, onChanged),
                                new sap.ui.core.Title("", {}),
                            ]
                        });
                    });



                }
            }
        }
    }
}