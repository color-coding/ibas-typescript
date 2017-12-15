/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, ArrayList, Criteria, Condition, emConditionOperation,
    criterias, boFactory, emMessageLevel, logger, strings,
} from "../../bobas/index";
import { IBOChooseView } from "./Applications.d";
import { BOQueryApplication } from "./Applications";
import { IBOChooseService, IBOChooseServiceContract, IBOChooseServiceCaller, BOChooseServiceProxy } from "../services/index";
import { emChooseType, } from "../data/index";

/**
 * 业务对象选择应用
 */
export abstract class BOChooseApplication<T extends IBOChooseView, D> extends BOQueryApplication<T> {

    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
        this.view.chooseDataEvent = this.chooseData;
        this.view.newDataEvent = this.newData;
    }
    /** 选择数据，参数：数据 */
    protected abstract chooseData(datas: D[]): void;
    /** 新建数据 */
    protected abstract newData(): void;
}
/** 配置项目-自动选择数据 */
export const CONFIG_ITEM_AUTO_CHOOSE_DATA: string = "autoChooseData";
/**
 * 业务对象选择服务
 * 类型参数：视图，选择数据
 */
export abstract class BOChooseService<T extends IBOChooseView, D> extends BOChooseApplication<T, D>
    implements IBOChooseService<D> {
    /** 运行 */
    run(): void;
    /**
     * 运行
     * @param caller 服务调用者
     */
    run(caller: IBOChooseServiceCaller<D>): void;
    /** 运行 */
    run(): void {
        if (arguments.length === 1) {
            // 判断是否为选择契约
            let caller: IBOChooseServiceCaller<D> = arguments[0];
            if (objects.instanceOf(caller.proxy, BOChooseServiceProxy)) {
                // 选择服务代理或其子类
                // 设置选择类型
                let chooseType: emChooseType = caller.chooseType;
                if (objects.isNull(chooseType)) {
                    chooseType = emChooseType.MULTIPLE;
                }
                this.view.chooseType = chooseType;
                this.onCompleted = caller.onCompleted;
                // 分析查询条件
                let criteria: Criteria;
                if (objects.instanceOf(caller.criteria, Criteria)) {
                    criteria = <any>caller.criteria;
                } else if (caller.criteria instanceof Array) {
                    criteria = new Criteria();
                    for (let item of caller.criteria) {
                        if (objects.instanceOf(item, Condition)) {
                            // 过滤无效查询条件
                            if (strings.isEmpty(item.alias)) {
                                continue;
                            }
                            if (item.operation === emConditionOperation.IS_NULL
                                || item.operation === emConditionOperation.NOT_NULL
                                || !objects.isNull(item.value)
                                || (!objects.isNull(item.comparedAlias) && item.comparedAlias.length > 0)
                            ) {
                                criteria.conditions.add(item);
                            }
                        }
                    }
                }
                // 修正查询数量
                criterias.resultCount(criteria);
                // 根据对象类型，修正排序条件
                try {
                    let boType: any = boFactory.classOf(caller.boCode);
                    if (!objects.isNull(boType)) {
                        // 获取到有效对象
                        criterias.sorts(criteria, boType);
                    }
                } catch (error) {
                    logger.log(emMessageLevel.WARN, "bo choose: not found [{0}]'s class.", caller.boCode);
                }
                // 存在查询，则直接触发查询事件
                if (!objects.isNull(criteria) && criteria.conditions.length > 0) {
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
        }
        // 保持参数原样传递
        super.run.apply(this, arguments);
    }
    /** 完成 */
    private onCompleted: Function;
    /** 触发完成事件 */
    private fireCompleted(selecteds: D[] | D): void {
        // 关闭视图
        this.close();
        if (objects.isNull(this.onCompleted)) {
            return;
        }
        // 转换返回类型
        let list: ArrayList<D> = new ArrayList<D>();
        if (selecteds instanceof Array) {
            // 当是数组时
            for (let item of selecteds) {
                list.add(item);
            }
        } else {
            // 非数组,认为是单对象
            list.add(selecteds);
        }
        if (list.length === 0) {
            // 没有数据不触发事件
            return;
        }
        try {
            // 调用完成事件
            this.onCompleted.call(this.onCompleted, list);
        } catch (error) {
            // 完成事件出错
            this.messages(error);
        }
    }
    /** 选择数据后,直接触发完成事件 */
    protected chooseData(datas: D[]): void {
        this.fireCompleted(datas);
    }
}