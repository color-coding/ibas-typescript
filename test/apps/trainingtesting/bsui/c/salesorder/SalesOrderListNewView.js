define(["require", "exports", "ibas/index", "openui5/typings/ibas.utils", "../../../borep/bo/index"], function (require, exports, ibas, ibas_utils_1, bo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SalesOrderListNewView extends ibas.BOListView {
        get queryTarget() {
            return bo.SalesOrder;
        }
        darw() {
            let that = this;
            this.form = new sap.ui.layout.VerticalLayout("");
            this.table = new sap.m.Table("", {
                inset: false,
                growing: true,
                growingThreshold: ibas.config.get(ibas_utils_1.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
                growingScrollToLoad: true,
                visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
                mode: sap.m.ListMode.SingleSelectMaster,
                selectionMode: sap.ui.table.SelectionMode.MultiToggle,
                columns: [
                    new sap.m.Column("", {
                        demandPopin: true,
                        header: new sap.m.Label("", {
                            width: "12em",
                            text: ibas.i18n.prop("bo_salesorder_docentry")
                        })
                    }),
                    new sap.m.Column("", {
                        demandPopin: true,
                        minScreenWidth: "Tablet",
                        header: new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_salesorder_customercode")
                        })
                    }),
                    new sap.m.Column("", {
                        demandPopin: true,
                        minScreenWidth: "Tablet",
                        header: new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_salesorder_customername")
                        })
                    }),
                    new sap.m.Column("", {
                        demandPopin: true,
                        minScreenWidth: "Tablet",
                        header: new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_salesorder_documentstatus")
                        })
                    }),
                    new sap.m.Column("", {
                        demandPopin: true,
                        minScreenWidth: "Tablet",
                        header: new sap.m.Label("", {
                            text: ibas.i18n.prop("bo_salesorder_canceled")
                        })
                    }),
                ],
                swipe: function (oEvent) {
                },
                swipeContent: new sap.m.Toolbar("", {
                    content: [
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_view"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://display",
                            press: function (oEvent) {
                                let parentControl = oEvent.getSource().getParent().getParent();
                                let selecteds = new ibas.ArrayList();
                                selecteds.push(parentControl.getSwipedItem().getBindingContext().getObject());
                                that.fireViewEvents(that.viewDataEvent, selecteds);
                                parentControl.swipeOut();
                            }
                        }),
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_edit"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://edit",
                            press: function (oEvent) {
                                let parentControl = oEvent.getSource().getParent().getParent();
                                var editBo = parentControl.getSwipedItem().getBindingContext().getObject();
                                that.fireViewEvents(that.editDataEvent, editBo);
                                parentControl.swipeOut();
                            }
                        }),
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_delete"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://delete",
                            press: function (oEvent) {
                                let parentControl = oEvent.getSource().getParent().getParent();
                                let selecteds = new ibas.ArrayList();
                                selecteds.push(parentControl.getSwipedItem().getBindingContext().getObject());
                                that.fireViewEvents(that.deleteDataEvent, selecteds);
                                parentControl.swipeOut();
                            }
                        }),
                    ]
                }),
                delete: function (oEvent) {
                    var oItem = oEvent.getParameter("listItem");
                    var deleteBo = oItem.getBindingContext().getObject();
                    let selecteds = new ibas.ArrayList();
                    selecteds.push(deleteBo);
                    that.fireViewEvents(that.deleteDataEvent, selecteds);
                }
            });
            var list_item = new sap.m.ColumnListItem("", {
                type: sap.m.ListType.DetailAndActive,
                cells: [
                    new sap.m.Text("", {
                        text: "{docEntry}"
                    }),
                    new sap.m.Link("", {
                        wrapping: false,
                        press(event) {
                            ibas.servicesManager.runLinkService({
                                boCode: bo.Customer.BUSINESS_OBJECT_CODE,
                                linkValue: event.getSource().getText()
                            });
                        }
                    }).bindProperty("text", {
                        path: "customerCode"
                    }),
                    new sap.m.Label("", {
                        text: "{customerName}"
                    }),
                    new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "documentStatus",
                        formatter(data) {
                            return ibas.enums.describe(ibas.emDocumentStatus, data);
                        }
                    }),
                    new sap.m.Text("", {
                        wrapping: false
                    }).bindProperty("text", {
                        path: "canceled",
                        formatter(data) {
                            return ibas.enums.describe(ibas.emYesNo, data);
                        }
                    })
                ],
                detailPress: function (oEvent) {
                    that.fireViewEvents(that.editDataEvent, oEvent.getSource().getBindingContext().getObject());
                }
            });
            this.table.bindItems({
                path: "/rows",
                template: list_item,
            });
            this.form.addContent(this.table);
            this.page = new sap.m.Page("", {
                showHeader: false,
                subHeader: new sap.m.Toolbar("", {
                    content: [
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_new"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://create",
                            press: function () {
                                that.fireViewEvents(that.newDataEvent);
                            }
                        }),
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_view"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://display",
                            press: function () {
                                let selecteds = new ibas.ArrayList();
                                selecteds.push(that.table.getSelectedItem().getBindingContext().getObject());
                                that.fireViewEvents(that.viewDataEvent, selecteds);
                            }
                        }),
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_edit"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://edit",
                            press: function () {
                                that.fireViewEvents(that.editDataEvent, that.table.getSelectedItem().getBindingContext().getObject());
                            }
                        }),
                        new sap.m.Button("", {
                            text: ibas.i18n.prop("sys_shell_data_delete"),
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://delete",
                            press: function () {
                                let selecteds = new ibas.ArrayList();
                                selecteds.push(that.table.getSelectedItem().getBindingContext().getObject());
                                that.fireViewEvents(that.deleteDataEvent, selecteds);
                            }
                        }),
                        new sap.m.Button("", {
                            text: '行删除',
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://delete",
                            press: function () {
                                if (that.table.getMode() === sap.m.ListMode.Delete)
                                    that.table.setMode(sap.m.ListMode.SingleSelectMaster);
                                else
                                    that.table.setMode(sap.m.ListMode.Delete);
                            }
                        }),
                        new sap.m.ToolbarSpacer(""),
                        new sap.m.ToolbarSeparator(""),
                        new sap.m.Button("", {
                            type: sap.m.ButtonType.Transparent,
                            icon: "sap-icon://action",
                            press: function (event) {
                                that.fireViewEvents(that.callServicesEvent, {
                                    displayServices(services) {
                                        if (ibas.objects.isNull(services) || services.length === 0) {
                                            return;
                                        }
                                        let popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            placement: sap.m.PlacementType.Bottom,
                                        });
                                        for (let service of services) {
                                            popover.addContent(new sap.m.Button({
                                                text: ibas.i18n.prop(service.name),
                                                type: sap.m.ButtonType.Transparent,
                                                icon: service.icon,
                                                press: function () {
                                                    service.run();
                                                    popover.close();
                                                }
                                            }));
                                        }
                                        popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                        popover.openBy(event.getSource(), true);
                                    }
                                });
                            }
                        })
                    ],
                }),
                content: [this.form]
            });
            this.id = this.page.getId();
            ibas_utils_1.utils.triggerNextResults({
                listener: this.table,
                next(data) {
                    if (ibas.objects.isNull(that.lastCriteria)) {
                        return;
                    }
                    let criteria = that.lastCriteria.next(data);
                    if (ibas.objects.isNull(criteria)) {
                        return;
                    }
                    ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                    that.fireViewEvents(that.fetchDataEvent, criteria);
                }
            });
            return this.page;
        }
        embedded(view) {
            this.page.addHeaderContent(view);
            this.page.setShowHeader(true);
        }
        showData(datas) {
            let done = false;
            let model = this.table.getModel(undefined);
            if (!ibas.objects.isNull(model)) {
                let hDatas = model.getData();
                if (!ibas.objects.isNull(hDatas) && hDatas instanceof Array) {
                    for (let item of datas) {
                        hDatas.push(item);
                    }
                    model.refresh(false);
                    done = true;
                }
            }
            if (!done) {
                this.table.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
            }
            this.table.setBusy(false);
        }
        query(criteria) {
            super.query(criteria);
            this.lastCriteria = criteria;
            this.table.setBusy(true);
            this.table.setSelectedItemById("0", true);
            this.table.setModel(null);
        }
        getSelecteds() {
            return null;
        }
    }
    exports.SalesOrderListNewView = SalesOrderListNewView;
});
