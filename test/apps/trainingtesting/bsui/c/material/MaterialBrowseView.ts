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
            try {
                if (!sap.ui.layout.cssgrid.GridBasicLayout) {
                    (<any>sap.ui).requireSync("sap/ui/layout/cssgrid/GridBasicLayout");
                }
            } catch (error) {
            }


            /**
             * 物料浏览
             */
            export class MaterialBrowseView extends ibas.BOListView implements app.IMaterialListView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.Material;
                }
                /** 编辑数据，参数：目标数据 */
                editDataEvent: Function;
                /** 删除数据事件，参数：删除对象集合 */
                deleteDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.grid = new sap.extension.f.GridList("", {
                        chooseType: ibas.emChooseType.SINGLE,
                        growingThreshold: sap.extension.table.visibleRowCount(15),
                        growingScrollToLoad: true,
                        mode: sap.m.ListMode.None,
                        showNoData: false,
                        customLayout: new sap.ui.layout.cssgrid.GridBasicLayout("", {
                            gridTemplateColumns: "repeat(auto-fit, minmax(30rem,max-content))",
                            gridGap: "0.25rem 0.25rem",
                        }),
                        items: {
                            path: "/rows",
                            template: new sap.extension.f.GridListItem("", {
                                content: [
                                    new sap.extension.f.Card("", {
                                        width: "100%",
                                        height: "100%",
                                        headerPosition: sap.f.cards.HeaderPosition.Bottom,
                                        header: new sap.extension.f.cards.ToolbarHeader("", {
                                            title: "{name}",
                                            subtitle: "{code}",
                                            statusText: {
                                                path: "activated",
                                                formatter(data: any): any {
                                                    if (data === ibas.emYesNo.YES) {
                                                        return "√";
                                                    }
                                                    return "×";
                                                }
                                            },
                                            toolbar: new sap.m.Toolbar("", {
                                                style: sap.m.ToolbarStyle.Clear,
                                                design: sap.m.ToolbarDesign.Auto,
                                                content: [
                                                    new sap.m.Button("", {
                                                        type: sap.m.ButtonType.Emphasized,
                                                        icon: "sap-icon://cart-4",
                                                        press: function (): void {
                                                        }
                                                    }),
                                                    new sap.m.ToolbarSeparator(""),
                                                    new sap.m.Button("", {
                                                        type: sap.m.ButtonType.Transparent,
                                                        icon: "sap-icon://unfavorite",
                                                        press: function (): void {
                                                        }
                                                    }),
                                                    new sap.m.ToolbarSpacer(""),
                                                    new sap.m.ObjectNumber("", {
                                                        number: {
                                                            path: "onOrder",
                                                            type: new sap.extension.data.Price()
                                                        },
                                                        unit: {
                                                            path: "uom",
                                                            formatter(data: any): any {
                                                                if (!data) {
                                                                    return "pics";
                                                                }
                                                                return data;
                                                            }
                                                        },
                                                        state: {
                                                            path: "onOrder",
                                                            formatter(data: any): any {
                                                                if (data > 0) {
                                                                    return sap.ui.core.ValueState.Success;
                                                                }
                                                                return sap.ui.core.ValueState.Error;
                                                            }
                                                        },
                                                    }).addStyleClass("sapMObjectNumberLarge"),
                                                ]
                                            })
                                        }),
                                        content: [
                                            new sap.m.Carousel("", {
                                                width: "100%",
                                                height: "100%",
                                                loop: true,
                                                pages: [
                                                    new sap.m.Image("", {
                                                        src: ibas.strings.format("{0}/../encourager.gif", ibas.urls.rootUrl("ibas/index")),
                                                    }),
                                                    new sap.m.Image("", {
                                                        src: ibas.strings.format("{0}/../encourager.gif", ibas.urls.rootUrl("ibas/index")),
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        },
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        }
                    });
                    return new sap.m.Page("", {
                        showHeader: false,
                        content: [
                            this.grid,
                        ]
                    });
                }
                private grid: sap.extension.f.GridList;
                /** 显示数据 */
                showData(datas: bo.Material[]): void {
                    let model: sap.ui.model.Model = this.grid.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.grid.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.grid.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.grid.setBusy(true);
                        this.grid.setModel(null);
                    }
                }
            }
        }
    }
}
