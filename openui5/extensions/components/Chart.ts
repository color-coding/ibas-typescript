/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace chart {
            /**
             * 图表
             */
            core.Control.extend("sap.extension.chart.Chart", {
                metadata: {
                    properties: {
                        "width": {
                            type: "any",
                            defaultValue: "200",
                        },
                        "height": {
                            type: "any",
                            defaultValue: "100",
                        },
                        "chartType": {
                            type: "string",
                            defaultValue: "line",
                        },
                        "data": {
                            type: "any",
                        },
                        "options": {
                            type: "any",
                        },
                        "plugins": {
                            type: "any", multiple: true,
                        },
                    },
                    aggregations: {
                    },
                    events: {
                        "renderComplete": {
                            parameters: {
                            }
                        },
                    },
                },
                renderer: function (this: Chart, oRm: sap.ui.core.RenderManager, oControl: Chart): void {
                    oRm.openStart("div", oControl).openEnd();
                    // <canvas id="myChart" width="400" height="400"></canvas>
                    oRm.openStart("canvas");
                    oRm.attr("id", ibas.strings.format("{0}-canvas", oControl.getId()));
                    // oRm.attr("width", oControl.getWidth());
                    // oRm.attr("height", oControl.getHeight());
                    oRm.openEnd();

                    oRm.close("canvas");
                    oRm.close("div");
                },
                getCanvas(this: Chart): HTMLElement {
                    return document.getElementById(ibas.strings.format("{0}-canvas", this.getId()));
                },
                onAfterRendering(this: Chart): void {
                    ibas.requires.create({
                        context: "_",
                        paths: {
                            chartjs: ["openui5/3rdparty/chartjs/index"]
                        }
                    })(["chartjs"], (Chart: any) => {
                        let ctx: any = this.getCanvas();
                        let chart: Chart = new Chart(ctx, {
                            type: this.getChartType(),
                            data: this.getData(),
                            options: this.getOptions(),
                            plugins: this.getPlugins(),
                        });
                        // tslint:disable-next-line: no-string-literal
                        this["_chart"] = chart;
                    });
                },
                exit(this: Chart): void {
                    // 释放图表
                    // tslint:disable-next-line: no-string-literal
                    let chart: any = this["_chart"];
                    if (chart instanceof globalThis.Chart) {
                        chart.destroy();
                    }
                    // tslint:disable-next-line: no-string-literal
                    delete this["_chart"];
                    (<any>core.Control.prototype).exit.apply(this, arguments);
                },
            });
            /**
             * 饼图
             */
            Chart.extend("sap.extension.chart.PieChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: PieChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("pie");
                }
            });
            /**
             * 线图
             */
            Chart.extend("sap.extension.chart.LineChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: LineChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("line");
                }
            });
            /**
             * 柱图
             */
            Chart.extend("sap.extension.chart.BarChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: BarChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("bar");
                }
            });
            /**
             * 气泡图
             */
            Chart.extend("sap.extension.chart.BubbleChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: BarChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("bubble");
                }
            });
            /**
             * 环形图
             */
            Chart.extend("sap.extension.chart.DonutChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: BarChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("doughnut");
                }
            });
            /**
             * 雷达图
             */
            Chart.extend("sap.extension.chart.RadarChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: BarChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("radar");
                }
            });
            /**
             * 散点图
             */
            Chart.extend("sap.extension.chart.ScatterChart", {
                metadata: {
                    properties: {
                    },
                    events: {}
                },
                renderer: {
                },
                init(this: BarChart): void {
                    (<any>Chart.prototype).init.apply(this, arguments);
                    this.setChartType("scatter");
                }
            });
        }
    }
}
