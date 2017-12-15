/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    ICriteria, objects, Criteria, Condition, criterias, boFactory, logger, strings, ICondition
} from "../../bobas/index";
import { IBOListView } from "./Applications.d";
import { BOApplicationWithServices } from "./Applications";


/**
 * 业务对象列表应用
 */
export abstract class BOListApplication<T extends IBOListView, D> extends BOApplicationWithServices<T> {
    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
        this.view.newDataEvent = this.newData;
        this.view.viewDataEvent = this.viewData;
        this.view.fetchDataEvent = this.fetchData;
    }
    /** 运行 */
    run(): void;
    /**
     * 运行
     * @param criteria 查询或查询条件
     */
    run(criteria: ICriteria | ICondition[]): void;
    /** 运行 */
    run(): void {
        if (arguments.length === 1) {
            // 分析查询条件
            let criteria: Criteria;
            if (objects.instanceOf(arguments[0], Criteria)) {
                criteria = arguments[0];
            } else if (arguments[0] instanceof Array) {
                criteria = new Criteria();
                for (let item of arguments[0]) {
                    if (objects.instanceOf(item, Condition)) {
                        // 过滤无效查询条件
                        if (strings.isEmpty(item.alias)) {
                            continue;
                        }
                        criteria.conditions.add(item);
                    }
                }
            }
            if (!objects.isNull(criteria)) {
                if (this.view.query instanceof Function) {
                    // 视图存在查询方法，则调用此方法
                    this.view.query(criteria);
                } else {
                    this.fetchData(criteria);
                }
                // 进入查询，不在执行后部分
                return;
            }
        }
        // 保持参数原样传递
        super.run.apply(this, arguments);
    }
    /** 查询数据 */
    protected abstract fetchData(criteria: ICriteria): void;
    /** 新建数据 */
    protected abstract newData(): void;
    /** 查看数据，参数：目标数据 */
    protected abstract viewData(data: D): void;
}
