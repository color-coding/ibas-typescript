/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace ui {
        export namespace m {
            /**
             * 列表视图-客户主数据
             */
            export class CustomerListView extends ibas.BOListView implements app.ICustomerListView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.Customer;
                }
                /** 编辑数据，参数：目标数据 */
                editDataEvent: Function;
                /** 删除数据事件，参数：删除对象集合 */
                deleteDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.m.List("", {
                        inset: false,
                        growing: false,
                        mode: sap.m.ListMode.None,
                        swipeDirection: sap.m.SwipeDirection.RightToLeft,
                        swipeContent: new sap.m.FlexBox("", {
                            height: "100%",
                            alignItems: sap.m.FlexAlignItems.Start,
                            justifyContent: sap.m.FlexJustifyContent.End,
                            items: [
                                new sap.m.SegmentedButton("", {
                                    width: "9rem",
                                    items: [
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://action",
                                            press: function (event: any): void {
                                                that.page.setShowFooter(true);
                                                ibas.servicesManager.showServices({
                                                    proxy: new ibas.BOServiceProxy({
                                                        data: openui5.utils.getSelecteds(that.list),
                                                        converter: new bo.DataConverter(),
                                                    }),
                                                    displayServices(services: ibas.IServiceAgent[]): void {
                                                        if (ibas.objects.isNull(services) || services.length === 0) {
                                                            return;
                                                        }
                                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                                            showHeader: false,
                                                            placement: sap.m.PlacementType.Bottom,
                                                        });
                                                        for (let service of services) {
                                                            popover.addContent(new sap.m.Button({
                                                                text: ibas.i18n.prop(service.name),
                                                                type: sap.m.ButtonType.Transparent,
                                                                icon: service.icon,
                                                                press: function (): void {
                                                                    service.run();
                                                                    popover.close();
                                                                    that.list.swipeOut(null);
                                                                }
                                                            }));
                                                        }
                                                        popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                        popover.openBy(event.getSource(), true);
                                                    }
                                                });
                                            }
                                        }),
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://delete",
                                            press(oEvent: any): void {
                                                that.page.setShowFooter(true);
                                                that.fireViewEvents(that.deleteDataEvent,
                                                    openui5.utils.getSelecteds<bo.Customer>(that.list)
                                                );
                                            }
                                        }),
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://edit",
                                            press(oEvent: any): void {
                                                that.page.setShowFooter(true);
                                                that.fireViewEvents(that.editDataEvent,
                                                    openui5.utils.getSelecteds<bo.Customer>(that.list).firstOrDefault()
                                                );
                                            }
                                        })
                                    ]
                                }),
                            ]
                        }).addStyleClass("sapUiSmallMarginTop"),
                        swipe: function (event: sap.ui.base.Event): void {
                            that.page.setShowFooter(true);
                        },
                        items: {
                            path: "/rows",
                            template: new sap.m.ObjectListItem("", {
                                title: {
                                    path: "code"
                                },
                                secondStatus: new sap.m.ObjectStatus("", {
                                    text: {
                                        path: "approvalStatus",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(ibas.emApprovalStatus, data);
                                        }
                                    }
                                }),
                                attributes: [
                                    new sap.m.ObjectAttribute("", {
                                        text: {
                                            path: "name"
                                        }
                                    }),
                                ]
                            })
                        }
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        showSubHeader: false,
                        floatingFooter: true,
                        content: [
                            this.list
                        ],
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    width: "100%",
                                    text: ibas.i18n.prop("shell_data_new"),
                                    press: function (): void {
                                        that.fireViewEvents(that.newDataEvent);
                                    }
                                })
                            ]
                        })
                    });
                    // 添加列表自动查询事件
                    openui5.utils.triggerNextResults({
                        listener: this.list,
                        next(data: any): void {
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
                    return this.page;
                }
                private page: sap.m.Page;
                private list: sap.m.List;
                private pullToRefresh: sap.m.PullToRefresh;
                /** 嵌入下拉条 */
                embeddedPuller(view: any): void {
                    if (view instanceof sap.m.PullToRefresh) {
                        if (!ibas.objects.isNull(this.page)) {
                            this.page.insertContent(view, 0);
                            this.pullToRefresh = view;
                        }
                    }
                }
                /** 显示数据 */
                showData(datas: bo.Customer[]): void {
                    if (!ibas.objects.isNull(this.pullToRefresh) && datas.length > 0) {
                        this.pullToRefresh.destroy(true);
                        this.pullToRefresh = undefined;
                    }
                    let done: boolean = false;
                    let model: sap.ui.model.Model = this.list.getModel(undefined);
                    if (!ibas.objects.isNull(model)) {
                        // 已存在绑定数据，添加新的
                        let hDatas: any = (<any>model).getData();
                        if (!ibas.objects.isNull(hDatas) && hDatas.rows instanceof Array) {
                            for (let item of datas) {
                                hDatas.rows.push(item);
                            }
                            model.refresh(false);
                            done = true;
                        }
                    }
                    if (!done) {
                        // 没有显示数据
                        this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    }
                    this.list.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.list.setBusy(true);
                        this.list.setModel(null);
                    }
                }
                /** 手指触控滑动 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    if (direction === ibas.emTouchMoveDirection.UP) {
                        this.page.setShowFooter(false);
                    } else if (direction === ibas.emTouchMoveDirection.DOWN) {
                        this.page.setShowFooter(true);
                    }
                }
            }
        }
    }
}
