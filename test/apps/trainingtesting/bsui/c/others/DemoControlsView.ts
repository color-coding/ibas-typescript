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
                                            this.input(),
                                            this.chart()
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
                                sap.extension.factories.newInput("#{CC_TT_MATERIALS}.{Code}", onChanged),
                                new sap.m.Label("", { text: "Choose" }),
                                sap.extension.factories.newInput(`{"type":"Criteria","BusinessObject":"CC_TT_SALESORDER.DocEntry","Conditions":[]}`, onChanged),
                                new sap.m.Label("", { text: "Array" }),
                                sap.extension.factories.newInput("[1,2,3]", onChanged),
                                new sap.m.Label("", { text: "Array" }),
                                sap.extension.factories.newInput(`[{"key":"Y","value":"YES"},{"key":"N","value":"NO"}]`, onChanged),
                                new sap.ui.core.Title("", {}),
                            ]
                        });
                    });
                }

                private chart(): sap.m.GenericTile {
                    return this.drawTile({
                        header: "Chart",
                        headerImage: "sap-icon://line-charts",
                        notes: "",
                    }, () => {
                        return new sap.m.Page("", {
                            showHeader: false,
                            content: [
                                new sap.extension.f.GridList("", {
                                    customLayout: new sap.ui.layout.cssgrid.GridBasicLayout("", {
                                        gridTemplateColumns: "repeat(auto-fill, minmax(16rem,auto))",
                                        gridGap: "0.5rem 0.5rem",
                                    }),
                                    items: [
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Active,
                                            content: [
                                                new sap.extension.chart.BarChart("", {
                                                    data: {
                                                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                            ],
                                                            backgroundColor: [
                                                                "rgba(255, 99, 132, 0.2)",
                                                                "rgba(255, 159, 64, 0.2)",
                                                                "rgba(255, 205, 86, 0.2)",
                                                                "rgba(75, 192, 192, 0.2)",
                                                                "rgba(54, 162, 235, 0.2)",
                                                                "rgba(153, 102, 255, 0.2)",
                                                                "rgba(201, 203, 207, 0.2)"
                                                            ],
                                                            borderColor: [
                                                                "rgb(255, 99, 132)",
                                                                "rgb(255, 159, 64)",
                                                                "rgb(255, 205, 86)",
                                                                "rgb(75, 192, 192)",
                                                                "rgb(54, 162, 235)",
                                                                "rgb(153, 102, 255)",
                                                                "rgb(201, 203, 207)"
                                                            ],
                                                            borderWidth: 1
                                                        }]
                                                    }
                                                }),
                                            ],
                                            press(this: sap.f.GridListItem): void {
                                                let chart: any = this.getContent()[0];
                                                if (chart instanceof sap.extension.chart.BarChart) {
                                                    let data: any = chart.getData();
                                                    data.datasets[0].data = [
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                    ];
                                                    chart.draw();
                                                }
                                            }
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Active,
                                            content: [
                                                new sap.extension.chart.LineChart("", {
                                                    data: {
                                                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                            ],
                                                            fill: false,
                                                            borderColor: "rgb(75, 192, 192)",
                                                            tension: 0.1
                                                        }]
                                                    }
                                                }),
                                            ],
                                            press(this: sap.f.GridListItem): void {
                                                let chart: any = this.getContent()[0];
                                                if (chart instanceof sap.extension.chart.LineChart) {
                                                    let data: any = chart.getData();
                                                    data.datasets[0].data = [
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                    ];
                                                    chart.update();
                                                }
                                            }
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Inactive,
                                            content: [
                                                new sap.extension.chart.PieChart("", {
                                                    data: {
                                                        labels: [
                                                            "Red",
                                                            "Blue",
                                                            "Yellow"
                                                        ],
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                            ],
                                                            backgroundColor: [
                                                                "rgb(255, 99, 132)",
                                                                "rgb(54, 162, 235)",
                                                                "rgb(255, 205, 86)"
                                                            ],
                                                            hoverOffset: 4
                                                        }]
                                                    }
                                                }),
                                            ]
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Inactive,
                                            content: [
                                                new sap.extension.chart.BubbleChart("", {
                                                    data: {
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [{
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }, {
                                                                x: Math.random() * 100,
                                                                y: Math.random() * 100,
                                                                r: Math.random() * 10,
                                                            }],
                                                            backgroundColor: "rgb(255, 99, 132)"
                                                        }]
                                                    }
                                                }),
                                            ]
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Inactive,
                                            content: [
                                                new sap.extension.chart.RadarChart("", {
                                                    data: {
                                                        labels: [
                                                            "Eating",
                                                            "Drinking",
                                                            "Sleeping",
                                                            "Designing",
                                                            "Coding",
                                                            "Cycling",
                                                            "Running"
                                                        ],
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                            ],
                                                            fill: true,
                                                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                                                            borderColor: "rgb(255, 99, 132)",
                                                            pointBackgroundColor: "rgb(255, 99, 132)",
                                                            pointBorderColor: "#fff",
                                                            pointHoverBackgroundColor: "#fff",
                                                            pointHoverBorderColor: "rgb(255, 99, 132)"
                                                        }, {
                                                            label: "My Second Dataset",
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                            ],
                                                            fill: true,
                                                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                                                            borderColor: "rgb(54, 162, 235)",
                                                            pointBackgroundColor: "rgb(54, 162, 235)",
                                                            pointBorderColor: "#fff",
                                                            pointHoverBackgroundColor: "#fff",
                                                            pointHoverBorderColor: "rgb(54, 162, 235)"
                                                        }]
                                                    }
                                                }),
                                            ]
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Inactive,
                                            content: [
                                                new sap.extension.chart.ScatterChart("", {
                                                    data: {
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [{
                                                                x: Math.random() * 10,
                                                                y: Math.random() * 10
                                                            }, {
                                                                x: Math.random() * 10,
                                                                y: Math.random() * 10
                                                            }, {
                                                                x: Math.random() * 10,
                                                                y: Math.random() * 10
                                                            }, {
                                                                x: Math.random() * 10,
                                                                y: Math.random() * 10
                                                            }],
                                                            backgroundColor: "rgb(255, 99, 132)"
                                                        }],
                                                    }
                                                }),
                                            ]
                                        }),
                                        new sap.f.GridListItem("", {
                                            type: sap.m.ListType.Inactive,
                                            content: [
                                                new sap.extension.chart.DonutChart("", {
                                                    data: {
                                                        labels: [
                                                            "Red",
                                                            "Blue",
                                                            "Yellow"
                                                        ],
                                                        datasets: [{
                                                            label: "My First Dataset",
                                                            data: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
                                                            backgroundColor: [
                                                                "rgb(255, 99, 132)",
                                                                "rgb(54, 162, 235)",
                                                                "rgb(255, 205, 86)"
                                                            ],
                                                            // hoverOffset: 4
                                                        }]
                                                    }
                                                }),
                                            ]
                                        }),
                                    ]
                                }).addStyleClass("sapUiTinyMargin"),
                            ]
                        });
                    });
                }
            }
        }
    }
}