/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
    sap.ui.table.Table.extend("sap.ui.table.ex.Table", {
        metadata: {
            properties: {
                /** 列表选择模式（单选或多选,默认为单选） */
                selectionType: { type: "any", group: "Ex", defaultValue: sap.ui.table.SelectionMode.Single },
            },
            events: {}
        },
        getSelectionType(): sap.ui.table.SelectionMode {
            return this.getProperty("selectionType");
        },
        setSelectionType(value: sap.ui.table.SelectionMode): void {
            this.setProperty("selectionType", value);
            this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
        },
        selectionChange: function (oEvent: any): void {
            this.setSelectedIndex(this.getSelectedIndex());
        },
        _getSelectionTypeIcon: function (Control: any): void {
            let that: any = this;
            let IconPool: any = sap.ui.require("sap/ui/core/IconPool");
            if (!this._selectionTypeIcon) {
                this._selectionTypeIcon = IconPool.createControlByURI({
                    src: IconPool.getIconURI("bullet-text"),
                    useIconTooltip: false,
                    noTabStop: true,
                });
                this._selectionTypeIcon.addStyleClass("sapMInputValHelpInner");
                if (Control.getSelectionType() === sap.ui.table.SelectionMode.Single) {
                    that._selectionTypeIcon.setTooltip(ibas.i18n.prop("sap_ui_table_ex_selection_type_single_tooltip"));
                    that._selectionTypeIcon.setSrc(IconPool.getIconURI("bullet-text"));
                    Control.attachRowSelectionChange(Control.selectionChange);
                } else {
                    that._selectionTypeIcon.setTooltip(ibas.i18n.prop("sap_ui_table_ex_selection_type_multi_tooltip"));
                    that._selectionTypeIcon.setSrc(IconPool.getIconURI("multi-select"));
                    Control.detachRowSelectionChange(Control.selectionChange);
                }
                this._selectionTypeIcon.attachPress(function (oEvent: any): void {
                    if (Control.getSelectionType() === sap.ui.table.SelectionMode.Single) {
                        that._selectionTypeIcon.setSrc(IconPool.getIconURI("multi-select"));
                        that._selectionTypeIcon.setTooltip(ibas.i18n.prop("sap_ui_table_ex_selection_type_multi_tooltip"));
                        Control.setSelectionType(sap.ui.table.SelectionMode.MultiToggle);
                        Control.detachRowSelectionChange(Control.selectionChange);
                    } else {
                        that._selectionTypeIcon.setSrc(IconPool.getIconURI("bullet-text"));
                        that._selectionTypeIcon.setTooltip(ibas.i18n.prop("sap_ui_table_ex_selection_type_single_tooltip"));
                        Control.setSelectionType(sap.ui.table.SelectionMode.Single);
                        Control.attachRowSelectionChange(Control.selectionChange);
                    }
                });
            }
            return this._selectionTypeIcon;
        },
        renderer: {
            renderColRowHdr: function (rm: any, oTable: any): void {
                let bEnabled: boolean = false;
                let bSelAll: boolean = false;
                rm.write("<div");
                rm.writeAttribute("id", oTable.getId() + "-selall");
                rm.addClass("sapUiTableSelAllDisabled");
                rm.addClass("sapUiTableColRowHdr");
                rm.writeClasses();
                rm.writeAttribute("tabindex", "-1");
                oTable._getAccRenderExtension().writeAriaAttributesFor(rm, oTable, "COLUMNROWHEADER", { enabled: bEnabled, checked: bSelAll });
                rm.write(">");
                if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.Single) {
                    rm.write("<div");
                    rm.addClass("sapUiTableColRowHdrIco");
                    rm.writeClasses();
                    if (oTable.getColumnHeaderHeight() > 0) {
                        rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
                    }
                    rm.write(">");
                    rm.write("</div>");
                }
                rm.write("<div class='sapMInputValHelp' tabindex='-1'>");
                rm.renderControl(oTable._getSelectionTypeIcon(oTable));
                rm.write("</div>");
                rm.write("</div>");
            }
        }
    });
}