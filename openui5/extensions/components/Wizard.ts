/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace m {
            /**
             * 导航控件
             */
            sap.m.Wizard.extend("sap.extension.m.Wizard", {
                metadata: {
                    properties: {},
                    events: {
                        // 导航跳转时触发事件，step参数为跳转的步骤
                        "toStep": {
                            parameters: {
                                items: {
                                    step: sap.m.WizardStep
                                }
                            }
                        }
                    }
                },
                renderer: {
                },
                _handleStepChanged: function (event: any): void {
                    let previousStepIndex: any = ((typeof event === "number") ? event : event.getParameter("current")) - 2;
                    if (ibas.objects.isNull(this._aStepPath)) {
                        return;
                    }
                    let previousStep: any = this._aStepPath[previousStepIndex];
                    if (ibas.objects.isNull(this._getNextStep)) {
                        return;
                    }
                    let subsequentStep: any = this._getNextStep(previousStep, previousStepIndex);
                    let focusFirstElement: any = sap.ui.Device.system.desktop ? true : false;
                    this.goToStep(subsequentStep, focusFirstElement);
                    // 从标签点击步骤时，event类型为标签的object类型，只有标签点击时触发自定义事件
                    if (typeof event !== "number") {
                        this.fireToStep({ step: subsequentStep });
                    }
                },
            });
        }
    }
}
