/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        /** 查看应用-客户主数据 */
        export class CustomerViewApp extends ibas.BOViewService<ICustomerViewView, bo.Customer> {
            /** 应用标识 */
            static APPLICATION_ID: string = "7a03acaa-691e-414a-9a44-d079fbda1fb5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtesting_app_customer_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Customer.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = CustomerViewApp.APPLICATION_ID;
                this.name = CustomerViewApp.APPLICATION_NAME;
                this.boCode = CustomerViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: CustomerEditApp = new CustomerEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.Customer): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.Customer)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.Customer;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    // 添加查询条件
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.Customer.PROPERTY_CODE_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryTrainingTesting = new bo.BORepositoryTrainingTesting();
                boRepository.fetchCustomer({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Customer>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
        }
        /** 视图-客户主数据 */
        export interface ICustomerViewView extends ibas.IBOViewView {

        }
        /** 客户主数据连接服务映射 */
        export class CustomerLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CustomerViewApp.APPLICATION_ID;
                this.name = CustomerViewApp.APPLICATION_NAME;
                this.boCode = CustomerViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new CustomerViewApp();
            }
        }
    }
}
