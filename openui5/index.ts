/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./types/index.d.ts" />
/// <reference path="./datatypes.ts" />
/// <reference path="./utils.ts" />
/// <reference path="./extensions/BORepository.ts" />
/// <reference path="./extensions/Common.ts" />
/// <reference path="./extensions/DataType.ts" />
/// <reference path="./extensions/components/Model.d.ts" />
/// <reference path="./extensions/components/Model.ts" />
/// <reference path="./extensions/components/Control.d.ts" />
/// <reference path="./extensions/components/Control.ts" />
/// <reference path="./extensions/components/Input.d.ts" />
/// <reference path="./extensions/components/Input.ts" />
/// <reference path="./extensions/components/Select.d.ts" />
/// <reference path="./extensions/components/Select.ts" />
/// <reference path="./extensions/components/Text.d.ts" />
/// <reference path="./extensions/components/Text.ts" />
/// <reference path="./extensions/components/Link.d.ts" />
/// <reference path="./extensions/components/Link.ts" />
/// <reference path="./extensions/components/List.d.ts" />
/// <reference path="./extensions/components/List.ts" />
/// <reference path="./extensions/components/CheckBox.d.ts" />
/// <reference path="./extensions/components/CheckBox.ts" />
/// <reference path="./extensions/components/ComboBox.d.ts" />
/// <reference path="./extensions/components/ComboBox.ts" />
/// <reference path="./extensions/components/DateTimePicker.d.ts" />
/// <reference path="./extensions/components/DateTimePicker.ts" />
/// <reference path="./extensions/components/SegmentedButton.d.ts" />
/// <reference path="./extensions/components/SegmentedButton.ts" />
/// <reference path="./extensions/components/Switch.d.ts" />
/// <reference path="./extensions/components/Switch.ts" />
/// <reference path="./extensions/components/Table.d.ts" />
/// <reference path="./extensions/components/Table.ts" />
/// <reference path="./extensions/components/Page.d.ts" />
/// <reference path="./extensions/components/Page.ts" />
/// <reference path="./extensions/components/AddressArea.d.ts" />
/// <reference path="./extensions/components/AddressArea.ts" />
/// <reference path="./extensions/components/ObjectPageLayout.d.ts" />
/// <reference path="./extensions/components/ObjectPageLayout.ts" />
/// <reference path="./extensions/components/ObjectIdentifier.d.ts" />
/// <reference path="./extensions/components/ObjectIdentifier.ts" />
/// <reference path="./extensions/components/ObjectAttribute.d.ts" />
/// <reference path="./extensions/components/ObjectAttribute.ts" />
/// <reference path="./extensions/components/ObjectStatus.d.ts" />
/// <reference path="./extensions/components/ObjectStatus.ts" />
/// <reference path="./extensions/components/ObjectNumber.d.ts" />
/// <reference path="./extensions/components/ObjectNumber.ts" />
/// <reference path="./extensions/components/Table.m.d.ts" />
/// <reference path="./extensions/components/Table.m.ts" />
/// <reference path="./extensions/components/HTML.d.ts" />
/// <reference path="./extensions/components/HTML.ts" />
/// <reference path="./extensions/components/MessageBox.ts" />
/// <reference path="./extensions/components/Tokenizer.d.ts" />
/// <reference path="./extensions/components/Tokenizer.ts" />
/// <reference path="./extensions/components/Wizard.d.ts" />
/// <reference path="./extensions/components/Wizard.ts" />
/// <reference path="./extensions/components/Card.d.ts" />
/// <reference path="./extensions/components/Card.ts" />
/// <reference path="./extensions/components/Dialog.d.ts" />
/// <reference path="./extensions/components/Dialog.ts" />
/// <reference path="./extensions/components/MessageStrip.d.ts" />
/// <reference path="./extensions/components/MessageStrip.ts" />
/// <reference path="./extensions/components/Factory.ts" />

namespace openui5 {
    /** 配置项目-紧缩屏幕 */
    export const CONFIG_ITEM_COMPACT_SCREEN: string = "compactScreen";
    // ui 触发错误验证
    sap.ui.getCore().attachValidationError(undefined, (oEvent: sap.ui.base.Event) => {
        let control: any = oEvent.getParameter("element");
        let message: any = oEvent.getParameter("message");
        if (control && control.setValueState) {
            control.setValueState("Error");
            if (message) {
                control.setValueStateText(message);
            }
            control.focus();
        }
    });
    // ui 触发正确验证
    sap.ui.getCore().attachValidationSuccess(undefined, (oEvent: sap.ui.base.Event) => {
        let control: any = oEvent.getParameter("element");
        if (control && control.setValueState) {
            control.setValueState("None");
        }
    });
}