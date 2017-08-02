/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ISalesOrderEditNewView } from "../../../bsapp/salesorder/index";

/**
 * 视图-SalesOrder
 */
export class SalesOrderEditNewView extends ibas.BOEditView implements ISalesOrderEditNewView {
    private page: sap.m.Page;
    private mainLayout: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tableSalesOrderItem: sap.m.Table;
    private segmentedButton: sap.m.SegmentedButton;
    private progressIndicator: sap.m.ProgressIndicator;
    private testLayout: sap.ui.layout.VerticalLayout;
    private testWizardLayout: sap.ui.layout.VerticalLayout;
    private wizard: sap.m.Wizard;
    private popover: sap.m.Popover;

    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加销售订单-行事件 */
    addSalesOrderItemEvent: Function;
    /** 删除销售订单-行事件 */
    removeSalesOrderItemEvent: Function;
    /** 选择销售订单客户事件 */
    chooseSalesOrderCustomerEvent: Function;
    /** 选择销售订单行物料事件 */
    chooseSalesOrderItemMaterialEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customercode") }),
                new sap.m.Input("", {
                    placeholder:ibas.i18n.prop("bo_salesorder_customercode"),
                    tooltip:ibas.i18n.prop("bo_salesorder_customercode"),
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                    }
                }).bindProperty("value", {
                    path: "customerCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: "yyyy-MM-dd",
                }).bindProperty("dateValue", {
                    path: "documentDate"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_docentry") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "docEntry",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                new sap.m.Select("", {
                    showSecondaryValues: true,
                    items: utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "documentStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                new sap.m.Select("", {
                    showSecondaryValues: true,
                    items: utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "canceled",
                    type: "sap.ui.model.type.Integer"
                })
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorder_remarks") }),
                new sap.m.TextArea("", {
                    rows: 5,
                }).bindProperty("value", {
                    path: "/remarks"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_salesorder_documenttotal") }),
                new sap.m.Input("", {
                    width: "100px",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "/DocumentTotal"
                })
            ]
        });
        let addButton: sap.m.Button = new sap.m.Button("", {
            text: ibas.i18n.prop("sys_shell_data_add"),
            type: sap.m.ButtonType.Transparent,
            icon: "sap-icon://add",
            visible: false,
            press: function (): void {
                that.fireViewEvents(that.addSalesOrderItemEvent);
            }
        });
        let editButton: sap.m.Button = new sap.m.Button("", {
            text: '编辑',
            type: sap.m.ButtonType.Transparent,
            icon: "sap-icon://edit",
            press: function (): void {
                rebindTable(list_item_edit);
                completeButton.setVisible(true);
                addButton.setVisible(true);
                editButton.setVisible(false);
                that.tableSalesOrderItem.setMode(sap.m.ListMode.None);
            }
        });
        let completeButton: sap.m.Button = new sap.m.Button("", {
            text: '完成',
            type: sap.m.ButtonType.Transparent,
            visible: false,
            icon: "sap-icon://complete",
            press: function (): void {
                rebindTable(list_item_read);
                completeButton.setVisible(false);
                addButton.setVisible(false);
                editButton.setVisible(true);
                that.tableSalesOrderItem.setMode(sap.m.ListMode.Delete);
            }
        });
        this.tableSalesOrderItem = new sap.m.Table("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.Delete,
            selectionMode: sap.ui.table.SelectionMode.None,
            headerToolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Title("", {
                        text: '单据行',
                        level: 'H2'
                    }),
                    new sap.m.ToolbarSpacer(""),
                    addButton,
                    editButton,
                    completeButton
                ]
            }),
            columns: [
                new sap.m.Column("", {
                    demandPopin: true,
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_linestatus")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_itemcode")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_price")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_quantity")
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: ibas.i18n.prop("bo_salesorderitem_linetotal")
                    })
                }),
            ],
            delete: function (oEvent): void {
                var oItem = oEvent.getParameter("listItem");
                var deleteBo = oItem.getBindingContext().getObject();
                that.fireViewEvents(that.removeSalesOrderItemEvent,
                    deleteBo
                );
            }
        });
        let list_item_read: sap.m.ColumnListItem = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.DetailAndActive,
            //highlight:sap.ui.core.MessageType.Information,
            cells: [
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "lineStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "itemCode",
                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "price",
                    type: "sap.ui.model.type.Integer",

                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "quantity",
                    type: "sap.ui.model.type.Integer",

                }),
                new sap.m.Text("", {
                    wrapping: false
                }).bindProperty("text", {
                    path: "lineTotal",
                    type: "sap.ui.model.type.Integer",

                }),
            ],
            detailPress: function (oEvent): void {

            }
        });
        let list_item_edit: sap.m.ColumnListItem = new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            cells: [
                new sap.m.Select("", {
                    width: "100%",
                    items: utils.createComboBoxItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "lineStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSalesOrderItemMaterialEvent,
                            // 获取当前对象
                            this.getBindingContext().getObject()
                        );
                    }
                }).bindProperty("value", {
                    path: "itemCode"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "price"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "quantity"
                }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "lineTotal"
                })
            ],
            detailPress: function (oEvent): void {
                that.fireViewEvents(that.editDataEvent,
                    oEvent.getSource().getBindingContext().getObject()
                );
            }
        });
        //绑定table模版
        let rebindTable: Function = function (oTemplate) {
            that.tableSalesOrderItem.bindItems({
                path: "/rows",
                template: oTemplate,
            })
        };
        rebindTable(list_item_read);
        //salesorde层----------------------------------------------------------------------------------------
        this.mainLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                this.viewTopForm,
                this.tableSalesOrderItem,
                this.viewBottomForm,
            ]
        });

        //segmentedButton事例--------------------------------------------------------------------------------
        that.segmentedButton = new sap.m.SegmentedButton("", {
            select: function (oEvent) {
                alert(this.getSelectedKey());
                alert(maskInput.getValue());
            },
        });
        let segmentedButtonItem: sap.m.SegmentedButtonItem = new sap.m.SegmentedButtonItem("", {
            width: "auto",
            text: "{itemCode}|{itemDescription}",
            key: "{itemCode}"
        });
        that.segmentedButton.bindItems({
            path: "/rows",
            template: segmentedButtonItem,
        });
        //---------------------------------------------------------------------------------------------------
        //启止日期事例----------------------------------------------------------------------------------------
        let dateRangeSelection: sap.m.DateRangeSelection = new sap.m.DateRangeSelection("", {
            dateValue: "{DeliveryDate}",
            secondDateValue: "{PostingDate}"
        });
        //---------------------------------------------------------------------------------------------------
        //输入格式事例----------------------------------------------------------------------------------------
        let maskInput: sap.m.MaskInput = new sap.m.MaskInput("", {
            mask: "Phone:___-____-____",
            placeholderSymbol: "-",
            rules: [
                new sap.m.MaskInputRule("", {
                    maskFormatSymbol: "_",
                    regex: "[0-9]"
                })
            ],
            value: "{Phone}"
        });
        //---------------------------------------------------------------------------------------------------
        //进度条事例------------------------------------------------------------------------------------------
        that.progressIndicator = new sap.m.ProgressIndicator("", {
            percentValue: "0",
            displayValue: "0%",
            showValue: true,
            state: sap.ui.core.ValueState.Success,
        });
        let runProgressbtn: sap.m.Button = new sap.m.Button("", {
            text: "start progress indicator",
            press: function (oEvent) {
                that.progressIndicator.setPercentValue(0);
                let intervalFunc = function () {
                    let value: number = that.progressIndicator.getPercentValue();
                    that.progressIndicator.setPercentValue(value + 1);
                    that.progressIndicator.setDisplayValue(ibas.strings.format("{0}%", that.progressIndicator.getPercentValue()));
                    if (that.progressIndicator.getPercentValue() === 100) {
                        clearInterval(interval);
                    }
                };
                let interval: any = setInterval(intervalFunc, 100);
            }
        });
        //---------------------------------------------------------------------------------------------------
        //Popover弹出层------------------------------------------------------------------------------------------
        that.popover = new sap.m.Popover("", {
            title: "{DocEntry}",
            contentWidth: "300px",
            contentHeight: "500px",
            content: [
                new sap.ui.layout.form.SimpleForm("", {
                    editable: true,
                    layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
                    singleContainerFullSize: false,
                    adjustLabelSpan: false,
                    labelSpanL: 2,
                    labelSpanM: 2,
                    labelSpanS: 12,
                    columnsXL: 2,
                    columnsL: 2,
                    columnsM: 1,
                    columnsS: 1,
                    content: [
                        new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_basis_information") }),
                        new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_customercode") }),
                        new sap.m.Input("", {
                            showValueHelp: true,
                            valueHelpRequest: function (): void {
                                that.fireViewEvents(that.chooseSalesOrderCustomerEvent);
                            }
                        }).bindProperty("value", {
                            path: "customerCode"
                        }),
                        new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentdate") }),
                        new sap.m.DatePicker("", {
                            valueFormat: "yyyy-MM-dd",
                        }).bindProperty("dateValue", {
                            path: "documentDate"
                        }),
                        new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_other_information") }),
                        new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_docentry") }),
                        new sap.m.Input("", {
                            type: sap.m.InputType.Number
                        }).bindProperty("value", {
                            path: "docEntry",
                        }),
                        new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_documentstatus") }),
                        new sap.m.Select("", {
                            showSecondaryValues: true,
                            items: utils.createComboBoxItems(ibas.emDocumentStatus)
                        }).bindProperty("selectedKey", {
                            path: "documentStatus",
                            type: "sap.ui.model.type.Integer"
                        }),
                        new sap.m.Label("", { text: ibas.i18n.prop("bo_salesorder_canceled") }),
                        new sap.m.Select("", {
                            showSecondaryValues: true,
                            items: utils.createComboBoxItems(ibas.emYesNo)
                        }).bindProperty("selectedKey", {
                            path: "canceled",
                            type: "sap.ui.model.type.Integer"
                        })
                    ]
                })
            ],
            footer: new sap.m.Toolbar({
                content: [
                    new sap.m.ToolbarSpacer(""),
                    new sap.m.Button("", {
                        text: "退出",
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://close",
                        press: function (): void {
                            that.popover.close();
                        }
                    }),
                ]
            })
        });
        let popoverBtn: sap.m.Button = new sap.m.Button({
            text: "订单详情",
            press: function (oEvent) {
                that.popover.openBy(this, true);
            }
        });
        //demo层---------------------------------------------------------------------------------------------
        this.testLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                that.segmentedButton,
                dateRangeSelection,
                maskInput,
                that.progressIndicator,
                runProgressbtn,
                popoverBtn,
            ]
        });

        this.wizard = new sap.m.Wizard("", {
            showNextButton: false,
            //enableBranching:true,//此属性设置未true，用户可以根据条件确认下一步骤，未选择条件之前不显示下一步骤流程
            height: "100%",
        });

        let testTabContainer: sap.m.TabContainer = new sap.m.TabContainer("", {
            items: [
                new sap.m.TabContainerItem("", {
                    name: "salesOrder",
                    content: this.mainLayout,
                    modified: true
                }),
                new sap.m.TabContainerItem("", {
                    name: "Demo",
                    content: this.testLayout
                }),
                new sap.m.TabContainerItem("", {
                    name: "wizardDemo",
                    content: this.wizard
                }),
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_clone"),
                                    icon: "sap-icon://copy"
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
                        })
                    }),
                ]
            }),
            content: [testTabContainer]
        });
        this.id = this.page.getId();
        return this.page;
    }

    /** 改变视图状态 */
    private changeViewStatus(data: bo.SalesOrder): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED
            || data.documentStatus === ibas.emDocumentStatus.CLOSED
            || data.canceled === ibas.emYesNo.YES) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            utils.changeFormEditable(this.mainLayout, false);
        }
    }
    /** 显示数据 */
    showSalesOrder(data: bo.SalesOrder): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
        this.mainLayout.bindObject("/");
        this.testLayout.setModel(new sap.ui.model.json.JSONModel(data));
        this.testLayout.bindObject("/");
        this.popover.setModel(new sap.ui.model.json.JSONModel(data));
        this.popover.bindObject("/");

        this.showWizard(data);

        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.mainLayout, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showSalesOrderItems(datas: bo.SalesOrderItem[]): void {
        this.tableSalesOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        this.segmentedButton.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.tableSalesOrderItem, datas);
    }
    showWizard(datas: bo.SalesOrder): void {
        let that: this = this;
        //stepone选择促销类型步骤
        let typeButton: sap.m.SegmentedButton = new sap.m.SegmentedButton("", {
            items: [
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "满减",
                    key: "1",
                    press: function (oEvent) {
                        stepTwoButtonLayout.removeAllContent();
                        stepTwoButtonLayout.addContent(reductionButton);
                        that.wizard.nextStep();
                    }
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "买赠",
                    key: "2"
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "折扣",
                    key: "3"
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "其它",
                    key: "4"
                }),
            ],
            select: function (oEvent) {
                //alert(this.getSelectedKey());
                switch (this.getSelectedKey()) {
                    case "1":
                        stepTwoButtonLayout.removeAllContent();
                        stepTwoButtonLayout.addContent(reductionButton);
                        break;
                    case "2":
                        stepTwoButtonLayout.removeAllContent();
                        stepTwoButtonLayout.addContent(buyButton);
                        break;
                    case "3":
                        stepTwoButtonLayout.removeAllContent();
                        stepTwoButtonLayout.addContent(buyButton);
                        break;
                    case "4":
                        stepTwoButtonLayout.removeAllContent();
                        stepTwoButtonLayout.addContent(buyButton);
                        break;
                    default:
                        break;
                }
                that.wizard.nextStep();
            }
        });
        let stepOne: sap.m.WizardStep = new sap.m.WizardStep("", {
            title: "选择促销类型",
            width: "100%",
            height: "100%",
            content: [
                typeButton
            ]
        });
        this.wizard.addStep(stepOne);
        //满减促销类型
        let reductionButton: sap.m.SegmentedButton = new sap.m.SegmentedButton("", {
            items: [
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "单一产品满减",
                    key: "5",
                     press: function (oEvent) {
                        that.wizard.nextStep();
                    }
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "多产品满减",
                    key: "6"
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "同一类型产品满减",
                    key: "7"
                }),
            ],
            select: function (oEvent) {
                //alert(this.getSelectedKey());
                that.wizard.nextStep();
            }
        });
        let buyButton: sap.m.SegmentedButton = new sap.m.SegmentedButton("", {
            items: [
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "单一产品买赠",
                    key: "8"
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "多产品买赠",
                    key: "9"
                }),
                new sap.m.SegmentedButtonItem("", {
                    width: "auto",
                    text: "同类型产品买赠",
                    key: "10"
                }),
            ],
            select: function (oEvent) {
                that.wizard.nextStep();
            }
        });

        let stepTwoButtonLayout: sap.ui.layout.VerticalLayout = new sap.ui.layout.VerticalLayout("", {
            content: [

            ]
        });
        let stepTwoLayout: sap.ui.layout.VerticalLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                stepTwoButtonLayout,
                new sap.m.Button({
                    text: "上一步",
                    press: function (oEvent) {
                        that.wizard.previousStep();
                    }
                })
            ]
        });
        let stepTwo: sap.m.WizardStep = new sap.m.WizardStep("", {
            title: "选择细分促销类型",
            width: "100%",
            height: "100%",
            content: [
                stepTwoLayout
            ]
        });
        this.wizard.addStep(stepTwo);
        let setRules = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.m.Label("", { text: "选择产品" }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {

                    }
                }),
                new sap.m.Label("", { text: "够买数量" }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number
                }),
                new sap.m.Label("", { text: "赠送数量" }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number
                }),
            ]
        });
        let stepThree: sap.m.WizardStep = new sap.m.WizardStep("", {
            title: "设置活动规则",
            width: "100%",
            height: "100%",
            content: [
                setRules,
                new sap.m.Button({
                    text: "上一步",
                    press: function (oEvent) {
                        that.wizard.previousStep();
                    }
                }),
                new sap.m.Button({
                    text: "下一步",
                    press: function (oEvent) {
                        that.application.viewShower.messages({
                            type: ibas.emMessageType.QUESTION,
                            title: "提示",
                            message: "是否继续添加规则？",
                            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                            onCompleted(action: ibas.emMessageAction): void {
                                if (action === ibas.emMessageAction.YES) {
                                    try {
                                        for (var i = 0; i < that.wizard.getSteps().length; i++) {
                                            that.wizard.previousStep();
                                        }
                                    } catch (error) {

                                    }
                                } else {
                                    that.wizard.nextStep();
                                }
                            }
                        });
                    }
                }),
            ]
        });

        this.wizard.addStep(stepThree);

        let conditionTable = new sap.m.Table("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.Delete,
            selectionMode: sap.ui.table.SelectionMode.None,
            columns: [
                new sap.m.Column("", {
                    demandPopin: true,
                    header: new sap.m.Label("", {
                        width: "12em",
                        text: "产品"
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: "条件"
                    })
                }),
                new sap.m.Column("", {
                    demandPopin: true,
                    minScreenWidth: "Tablet",
                    header: new sap.m.Label("", {
                        text: "值"
                    })
                }),
            ],
            delete: function (oEvent): void {

            }
        });

        conditionTable.addItem(new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            cells: [
                new sap.m.Label("", {
                    wrapping: false,
                    text: "产品编码"
                }),
                new sap.m.Label("", {
                    wrapping: false,
                    text: "等于"
                }),
                new sap.m.Label("", {
                    wrapping: false,
                    text: "P00001"
                })
            ]
        }));
        conditionTable.addItem(new sap.m.ColumnListItem("", {
            type: sap.m.ListType.Active,
            cells: [
                new sap.m.Label("", {
                    wrapping: false,
                    text: "产品名称",
                }),
                new sap.m.Label("", {
                    wrapping: false,
                    text: "等于"
                }),
                new sap.m.Label("", {
                    wrapping: false,
                    text: "海尔"
                })
            ]
        }));

        let setConditions = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: "编辑条件" }),
                new sap.m.Label("", { text: "产品" }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {

                    }
                }),
                new sap.m.Label("", { text: "条件" }),
                new sap.m.Select("", {
                }),
                new sap.m.Label("", { text: "值" }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number
                }),
                new sap.m.Label("", {}),
                new sap.m.Button({
                    text: "添加",
                    press: function (oEvent) {

                    }
                }),
                new sap.ui.core.Title("", { text: "已有条件" }),
                conditionTable
            ]
        });

        let stepFour: sap.m.WizardStep = new sap.m.WizardStep("", {
            title: "设置活动条件",
            width: "100%",
            height: "100%",
            content: [
                setConditions,
                new sap.m.Button({
                    text: "上一步",
                    press: function (oEvent) {
                        that.wizard.previousStep();
                    }
                }),
                new sap.m.Button({
                    text: "下一步",
                    press: function (oEvent) {
                        that.wizard.nextStep();
                    }
                }),
            ]
        });

        this.wizard.addStep(stepFour);

        let setBaseUp = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.m.Label("", { text: "活动编码" }),
                new sap.m.Input("", {
                }),
                new sap.m.Label("", { text: "活动名称" }),
                new sap.m.Input("", {
                }),
                new sap.m.Label("", { text: "起止日期" }),
                new sap.m.DateRangeSelection("", {

                }),
                new sap.m.Label("", { text: "是否可用" }),
                new sap.m.Switch("", {
                    customTextOn: "是",
                    customTextOff: "否"
                })
            ]
        });

        let stepFive: sap.m.WizardStep = new sap.m.WizardStep("", {
            title: "当前活动基础设置",
            width: "100%",
            height: "100%",
            content: [
                setBaseUp,
                new sap.m.Button({
                    text: "上一步",
                    press: function (oEvent) {
                        that.wizard.previousStep();
                    }
                }),
                new sap.m.Button({
                    text: "完成",
                    press: function (oEvent) {
                        for (var i = 0; i < that.wizard.getSteps().length; i++) {
                            that.wizard.previousStep();
                        }
                    }
                }),
            ]
        });

        this.wizard.addStep(stepFive);
    }
}
