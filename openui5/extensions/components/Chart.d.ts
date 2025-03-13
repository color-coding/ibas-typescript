/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace chart {
            /**
             * 图表控件
             */
            class Chart extends core.Control {
                constructor(sId?: string, mSettings?: Chart.ChartConfiguration);

                /** 获取画布 */
                protected getCanvas(): HTMLElement;
                /** 获取图表实例 */
                protected getChart(): Chart;

                /** 获取-宽度 */
                getWidth(): sap.ui.core.CSSSize;
                /** 设置-宽度 */
                setWidth(sWidth?: sap.ui.core.CSSSize): this;
                /** 获取-高度 */
                getHeight(): sap.ui.core.CSSSize;
                /** 设置-高度 */
                seHeight(sWidth?: sap.ui.core.CSSSize): this;

                /** 获取-图表类型 */
                getChartType(): Chart.ChartType;
                /** 设置-图表类型 */
                setChartType(chartType: Chart.ChartType): this;

                /** 获取-图表设置 */
                getOptions(): Chart.ChartOptions;
                /** 设置-图表设置 */
                setOptions(options: Chart.ChartOptions): this;

                /** 获取-图表插件 */
                getPlugins(): Chart.PluginServiceRegistrationOptions[];
                /** 添加图表插件 */
                addPlugin(plugin: Chart.PluginServiceRegistrationOptions): this;

                /** 获取-图表数据 */
                getData(): any;
                /** 设置-图表数据 */
                setData(data: any): this;

                /** 监听绘制完成事件 */
                attachRenderComplete(oData: any, fnFunction: Function, oListener?: any): this;
                /** 取消监听绘制完成事件 */
                detachRenderComplete(fnFunction: Function, oListener?: any): this;
                /** 触发绘制完成事件 */
                protected fireRenderComplete(param: {}): this;
            }
            /**
             * 饼图
             */
            class PieChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 线图
             */
            class LineChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 柱图
             */
            class BarChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 气泡图
             */
            class BubbleChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 环形图
             */
            class DonutChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 雷达图
             */
            class RadarChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
            /**
             * 散点图
             */
            class ScatterChart extends Chart {
                constructor(sId?: string, mSettings?: {
                    data?: Chart.ChartData;
                    options?: Chart.ChartOptions;
                    plugins?: Chart.PluginServiceRegistrationOptions[];
                });
            }
        }
    }
}
