/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, ArrayList, Criteria, Condition, emConditionOperation,
    criterias, boFactory, emMessageLevel, logger
} from "../../bobas/index";
import { IBOChooseView } from "./Applications.d";
import { BOQueryApplication } from "./Applications";
import { IBOChooseService, IBOChooseServiceContract } from "../services/index";
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
    implements IBOChooseService {
    /** 运行 */
    run(...args: any[]): void {
        if (!objects.isNull(args) && args.length === 1) {
            // 判断是否为选择契约
            let contract: IBOChooseServiceContract = args[0];
            // 设置选择类型
            let chooseType: emChooseType = contract.chooseType;
            if (objects.isNull(chooseType)) {
                chooseType = emChooseType.MULTIPLE;
            }
            this.view.chooseType = chooseType;
            // 选择契约且为此应用
            if (!objects.isNull(contract.boCode) && contract.boCode === this.boCode) {
                this.onCompleted = contract.onCompleted;
                // 分析查询条件
                let criteria: Criteria;
                if (objects.instanceOf(contract.criteria, Criteria)) {
                    criteria = <any>contract.criteria;
                } else if (contract.criteria instanceof Array) {
                    criteria = new Criteria();
                    for (let item of contract.criteria) {
                        if (item instanceof Condition) {
                            // 过滤无效查询条件
                            if (objects.isNull(item.alias) || item.alias.length === 0) {
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
                    let boType: any = boFactory.classOf(contract.boCode);
                    if (!objects.isNull(boType)) {
                        // 获取到有效对象
                        criterias.sorts(criteria, boType);
                    }
                } catch (error) {
                    logger.log(emMessageLevel.WARN, "bo choose: not found [{0}]'s class.", contract.boCode);
                }
                // 存在查询，则直接触发查询事件
                if (!objects.isNull(criteria) && criteria.conditions.length > 0) {
                    let view: IBOChooseView = <IBOChooseView>this.view;
                    if (view.query instanceof Function) {
                        // 视图存在查询方法，则调用此方法
                        view.query(criteria);
                    } else {
                        this.fetchData(criteria);
                    }
                    // 进入查询，不在执行后部分
                    return;
                }
            }
        }
        super.run(args);
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