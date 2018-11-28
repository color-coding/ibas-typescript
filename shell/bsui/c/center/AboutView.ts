/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace ui {
        export namespace c {
            /**
             * 视图-关于
             */
            export class AboutView extends ibas.BOView implements app.IAboutView {
                /** 绘制视图 */
                draw(): any {
                    this.form = new sap.m.Page("", {
                        showHeader: false,
                        enableScrolling: true,
                        content: [this.form]
                    });
                    return this.form;
                }
                private form: sap.m.Page;

                private text(...values: string[]): string {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    for (let item of values) {
                        if (ibas.strings.isEmpty(item)) {
                            continue;
                        }
                        if (builder.length > 0) {
                            builder.append(", ");
                        }
                        builder.append(item);
                    }
                    return builder.toString();
                }
                /** 显示库信息 */
                showLibraries(components: ibas.IList<app.Component>): void {
                    let list: sap.m.List = new sap.m.List("", {
                        headerText: "Libraries",
                    });
                    // 添加UI组件
                    components.add(new app.Component("openui5",
                        (<any>sap.ui.getVersionInfo()).version,
                        "© SAP SE, made available under Apache License 2.0.",
                        "sap-icon://sap-ui5"));
                    for (let item of components) {
                        list.addItem(new sap.m.FeedListItem("", {
                            icon: item.icon ? item.icon : "sap-icon://technical-object",
                            text: this.text(item.name, item.copyright),
                            info: item.version,
                        }));
                    }
                    this.form.addContent(list);
                }
                /** 显示应用信息 */
                showApplications(components: ibas.IList<app.Component>): void {
                    let list: sap.m.List = new sap.m.List("", {
                        headerText: "Applications",
                    });
                    for (let item of components) {
                        list.addItem(new sap.m.FeedListItem("", {
                            icon: item.icon ? item.icon : ibas.config.get("defalutModuleIcon"),
                            text: this.text(item.name, item.copyright),
                            info: item.version,
                            iconPress(oControlEvent: sap.ui.base.Event): void {
                                // 按钮按下，查询此模块资源消耗
                                let feedListItem: sap.m.FeedListItem = <sap.m.FeedListItem>oControlEvent.getSource();
                                if (feedListItem.getBusy()) {
                                    return;
                                }
                                feedListItem.setBusy(true);
                                let monitor: app.ModuleMonitor = new app.ModuleMonitor();
                                monitor.monitor({
                                    name: item.name,
                                    onCompleted(opRslt: ibas.IOperationResult<any>): void {
                                        feedListItem.setBusy(false);
                                        if (opRslt.resultCode !== 0 || opRslt.informations.length === 0) {
                                            return;
                                        }
                                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                        builder.append("memory: ");
                                        builder.append("used ");
                                        builder.append(opRslt.informations.firstOrDefault(
                                            c => app.ModuleMonitor.RUNTIME_INFORMATION_USED_MEMORY === c.name).content.toLowerCase());
                                        builder.append(", total ");
                                        builder.append(opRslt.informations.firstOrDefault(
                                            c => app.ModuleMonitor.RUNTIME_INFORMATION_TOTAL_MEMORY === c.name).content.toLowerCase());
                                        builder.append(", max ");
                                        builder.append(opRslt.informations.firstOrDefault(
                                            c => app.ModuleMonitor.RUNTIME_INFORMATION_MAX_MEMORY === c.name).content.toLowerCase());
                                        builder.append(".");
                                        feedListItem.setTimestamp(builder.toString());
                                    }
                                });
                            }
                        }));
                    }
                    this.form.insertContent(list, 0);
                }
            }
        }
    }
}