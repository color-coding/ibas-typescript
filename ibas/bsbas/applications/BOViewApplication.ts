/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import { objects, ArrayList, Criteria, Condition, ICriteria } from "../../bobas/index";
import { IBOViewView } from "./Applications.d";
import { BOApplicationWithServices } from "./Applications";
import { IBOLinkService, IBOLinkServiceContract } from "../services/index";


/**
 * 业务对象查看应用
 */
export abstract class BOViewApplication<T extends IBOViewView> extends BOApplicationWithServices<T> {

    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
    }
}
/**
 * 业务对象查看应用服务
 */
export abstract class BOViewService<T extends IBOViewView> extends BOViewApplication<T> {
    /** 运行 */
    run(...args: any[]): void {
        if (!objects.isNull(args) && args.length === 1) {
            // 判断是否为选择契约
            let contract: IBOLinkServiceContract = args[0];
            if (!objects.isNull(contract.boCode) && contract.boCode === this.boCode) {
                // 分析查询条件
                let criteria: Criteria | string;
                if (contract.linkValue instanceof Array) {
                    criteria = new Criteria();
                    for (let item of contract.linkValue) {
                        if (item instanceof Condition) {
                            criteria.conditions.add(item);
                        }
                    }
                } else {
                    criteria = <any>contract.linkValue;
                }
                this.fetchData(criteria);
            }
        }
        super.run(args);
    }
    /** 查询数据 */
    protected abstract fetchData(criteria: ICriteria | string): void;
}