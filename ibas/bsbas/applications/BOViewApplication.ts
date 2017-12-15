/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


import { objects, strings, ArrayList, Criteria, Condition, ICriteria } from "../../bobas/index";
import { IBOViewView } from "./Applications.d";
import { BOApplicationWithServices } from "./Applications";
import { IBOLinkService, IBOLinkServiceContract, IBOLinkServiceCaller, BOLinkServiceProxy } from "../services/index";


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
    run(): void;
    /**
     * 运行
     * @param criteria 查询或查询条件
     */
    run(caller: IBOLinkServiceCaller): void;
    /** 运行 */
    run(): void {
        if (arguments.length === 1) {
            // 判断是否为选择契约
            let caller: IBOLinkServiceCaller = arguments[0];
            if (objects.instanceOf(caller.proxy, BOLinkServiceProxy)) {
                // 链接服务代理或其子类
                if (caller.boCode === this.boCode) {
                    // 分析查询条件
                    let criteria: Criteria | string;
                    if (objects.instanceOf(caller.linkValue, Criteria)) {
                        criteria = <Criteria>caller.linkValue;
                    } else if (caller.linkValue instanceof String) {
                        criteria = caller.linkValue;
                    } else if (caller.linkValue instanceof Array) {
                        criteria = new Criteria();
                        for (let item of caller.linkValue) {
                            if (objects.instanceOf(item, Condition)) {
                                // 过滤无效查询条件
                                if (strings.isEmpty(item.alias)) {
                                    continue;
                                }
                                criteria.conditions.add(item);
                            }
                        }
                    }
                    this.fetchData(criteria);
                }
            }
        }
        // 保持参数原样传递
        super.run.apply(this, arguments);
    }
    /** 查询数据 */
    protected abstract fetchData(criteria: ICriteria | string): void;
}