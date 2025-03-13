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
            const PROPERTY_CHART: symbol = Symbol("chart");
            /**
             * 图表
             */
            core.Control.extend("sap.extension.chart.Chart", {
                metadata: {
                    properties: {
                        width: { type: "sap.ui.core.CSSSize", group: "Dimension", defaultValue: "" },
                        height: { type: "sap.ui.core.CSSSize", group: "Dimension", defaultValue: "" },
                        chartType: {
                            type: "string",
                            group: "Data",
                            defaultValue: "line",
                        },
                        data: {
                            type: "any",
                            group: "Data",
                        },
                        options: {
                            type: "any",
                            group: "Behavior",
                        },
                        plugins: {
                            type: "any",
                            group: "Misc",
                            multiple: true,
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
                    oRm.openStart("div", oControl);
                    oRm.style("width", oControl.getWidth());
                    oRm.style("height", oControl.getHeight());
                    oRm.openEnd();

                    oRm.openStart("canvas");
                    oRm.attr("id", ibas.strings.format("{0}-canvas", oControl.getId()));
                    oRm.openEnd();

                    oRm.close("canvas");
                    oRm.close("div");
                },
                applySettings(this: Chart, mSettings: any, oScope?: any): Chart {
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (!mSettings.options) {
                        mSettings.options = {};
                    }
                    // 启动响应式
                    if (!mSettings?.options?.responsive) {
                        mSettings.options.responsive = true;
                    }
                    // 不保持宽高比
                    if (!mSettings?.options?.maintainAspectRatio) {
                        mSettings.options.maintainAspectRatio = false;
                    }
                    if (!mSettings.options.layout) {
                        mSettings.options.layout = {};
                    }
                    // 四周留空
                    if (!mSettings?.options?.layout?.padding) {
                        mSettings.options.layout.padding = 10;
                    }
                    if (!mSettings?.plugins) {
                        mSettings.plugins = [];
                    }
                    if (mSettings.plugins instanceof Array) {
                        // 绘制完成事件
                        let has: boolean = false;
                        for (let item of mSettings.plugins) {
                            if (item.afterDraw) {
                                has = true;
                            }
                        }
                        if (has === false) {
                            mSettings.plugins.push({
                                afterDraw(this: Chart, chart: globalThis.Chart, options: any): void {
                                    let id: string = chart.canvas.id.split("-canvas")[0];
                                    let control: any = sap.ui.getCore().byId(id);
                                    if (control instanceof Chart) {
                                        control.fireRenderComplete({});
                                    }
                                }
                            });
                        }
                    }
                    core.Control.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                getCanvas(this: Chart): HTMLElement {
                    return document.getElementById(ibas.strings.format("{0}-canvas", this.getId()));
                },
                getChart(): globalThis.Chart {
                    return this[PROPERTY_CHART];
                },
                onAfterRendering(this: Chart): void {
                    let chart: any = this.getChart();
                    if (chart !== undefined && globalThis?.Chart !== undefined
                        && chart instanceof globalThis.Chart) {
                        chart.update();
                    } else {
                        this.draw();
                    }
                },
                update(this: Chart, mode?: any): Chart {
                    let chart: any = this.getChart();
                    if (chart !== undefined && globalThis?.Chart !== undefined
                        && chart instanceof globalThis.Chart) {
                        chart.update(mode);
                        return this;
                    } else {
                        this.draw();
                    }
                },
                draw(this: Chart): Chart {
                    let chart: any = this.getChart();
                    if (chart !== undefined && globalThis?.Chart !== undefined
                        && chart instanceof globalThis.Chart) {
                        chart.destroy();
                        delete this[PROPERTY_CHART];
                    }
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
                        this[PROPERTY_CHART] = chart;
                    });
                    return this;
                },
                exit(this: Chart): void {
                    // 释放图表
                    let chart: any = this.getChart();
                    if (chart instanceof globalThis.Chart) {
                        chart.destroy();
                    }
                    delete this[PROPERTY_CHART];
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
                },
                applySettings(this: Chart, mSettings: any, oScope?: any): Chart {
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (!mSettings.options) {
                        mSettings.options = {};
                    }
                    // 插件-颜色
                    if (!mSettings?.options?.plugins) {
                        mSettings.options.plugins = {};
                    }
                    if (!mSettings?.options?.plugins?.autocolors) {
                        mSettings.options.plugins.autocolors = {};
                    }
                    if (!mSettings?.options?.plugins?.autocolors?.mode) {
                        mSettings.options.plugins.autocolors.mode = "data";
                    }
                    Chart.prototype.applySettings.apply(this, arguments);
                    return this;
                },
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
                },
                applySettings(this: Chart, mSettings: any, oScope?: any): Chart {
                    if (!mSettings) {
                        mSettings = {};
                    }
                    if (!mSettings.options) {
                        mSettings.options = {};
                    }
                    // 插件-颜色
                    if (!mSettings?.options?.plugins) {
                        mSettings.options.plugins = {};
                    }
                    if (!mSettings?.options?.plugins?.autocolors) {
                        mSettings.options.plugins.autocolors = {};
                    }
                    if (!mSettings?.options?.plugins?.autocolors?.mode) {
                        mSettings.options.plugins.autocolors.mode = "data";
                    }
                    Chart.prototype.applySettings.apply(this, arguments);
                    return this;
                },
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
