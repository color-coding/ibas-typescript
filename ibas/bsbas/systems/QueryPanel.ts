/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, ICriteria, Criteria, ICondition, i18n, IOperationResult, config, ISort, emSortType, emConditionOperation
} from "../../../ibas/bobas/index";
import { BOBarApplication } from "../applications/index";
import { emMessageType } from "../data/index";
import { IQueryPanelView, IQueryPanel, IUseQueryPanel, IUserQuery, IBORepositorySystem, IBOInfo, IBOPropertyInfo } from "./Systems.d";
import { variablesManager } from "../runtime/index";
import { Factories } from "./Factories";

/**
 * 查询面板
 */
export abstract class QueryPanel<T extends IQueryPanelView> extends BOBarApplication<T> implements IQueryPanel<T> {
    /** 应用标识 */
    static APPLICATION_ID: string = "69e3d786-5bf5-451d-b660-3eb485171af5";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_query_panel";
    /** 查询结果集数量 */
    static CONFIG_ITEM_CRITERIA_RESULT_COUNT: string = "criteriaResultCount";

    constructor() {
        super();
        this.id = QueryPanel.APPLICATION_ID;
        this.name = QueryPanel.APPLICATION_NAME;
        this.description = i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 注册视图事件
        this.view.searchEvent = this.search;
    }
    /** 视图显示后 */
    protected viewShowed(): void { }
    /** 运行 参数，初始化回调 */
    run(): void {
        let callBack: any = arguments[0];
        if (!(callBack instanceof Function)) {
            callBack = function (): void { };
        }
        let boRepository: IBORepositorySystem = Factories.systemsFactory.createRepository();
        let that = this;
        boRepository.fetchUserQueries({
            userCode: variablesManager.getValue(variablesManager.VARIABLE_NAME_USER_CODE),
            queryId: this.listener.queryId,
            onCompleted: function (opRslt: IOperationResult<IUserQuery>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.queries = opRslt.resultObjects;
                    that.init(callBack);
                } catch (error) {
                    that.messages(error);
                }
            }
        });
    }
    /** 初始化 */
    protected abstract init(callBack: Function): void;

    protected listener: IUseQueryPanel;
    /** 注册监听 */
    register(listener: IUseQueryPanel): void {
        this.listener = listener;
    }
    private queries: Array<IUserQuery>;
    private currentCriteria(): ICriteria {
        let criteria: ICriteria;
        if (!object.isNull(this.queries)) {
            for (let item of this.queries) {
                if (item.id === this.view.usingQueryId) {
                    criteria = item.criteria;
                    break;
                }
            }
        }
        if (object.isNull(criteria)) {
            criteria = new Criteria();
        }
        return criteria;
    }
    /** 查询 */
    search(): void {
        this.busy(true);
        let criteria: ICriteria = this.currentCriteria();
        // 修正查询数量
        if (criteria.result < 1) {
            criteria.result = config.get(QueryPanel.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30);
        }
        // 给查询条件赋值
        for (let item of criteria.conditions) {
            if (object.isNull(item.value)) {
                item.value = this.view.searchContent;
            }
        }
        // 没有排序条件，尝试添加
        if (criteria.sorts.length === 0) {
            if (!object.isNull(this.listener.queryTarget)) {
                if (!object.isNull(this.listener.queryTarget.DocEntry)) {
                    let sort: ISort = criteria.sorts.create();
                    sort.alias = "DocEntry";
                    sort.sortType = emSortType.DESCENDING;
                } else if (!object.isNull(this.listener.queryTarget.ObjectKey)) {
                    let sort: ISort = criteria.sorts.create();
                    sort.alias = "ObjectKey";
                    sort.sortType = emSortType.DESCENDING;
                }
            }
        }
        // 没有查询条件，尝试从注册信息添加
        let that = this;
        if (criteria.conditions.length === 0 && !object.isNull(this.listener.queryTarget)) {
            let boName: any = this.listener.queryTarget;
            if (!object.isNull(boName) && typeof boName !== "string" && !object.isNull(boName.name)) {
                // 如果目标是对象，则使用其名称
                boName = boName.name;
            }
            let boRepository = Factories.systemsFactory.createRepository();
            boRepository.fetchBOInfos({
                boCode: null,
                boName: boName,
                onCompleted(opRslt: IOperationResult<IBOInfo>): void {
                    if (opRslt.resultCode === 0) {
                        for (let boItem of opRslt.resultObjects) {
                            for (let boProperty of boItem.properties) {
                                if (!boProperty.searched) {
                                    continue;
                                }
                                let condition: ICondition = criteria.conditions.create();
                                condition.alias = boProperty.property;
                                condition.value = that.view.searchContent;
                                condition.operation = emConditionOperation.CONTAIN;
                            }
                        }
                    } else {
                        that.messages(emMessageType.WARNING, opRslt.message);
                    }
                    that.fireQuery(criteria);
                }
            });
        } else {
            this.fireQuery(criteria);
        }
    }
    /** 通知查询事件 */
    protected fireQuery(criteria: ICriteria): void {
        if (!object.isNull(this.listener)) {
            this.listener.query(criteria);
        }
        this.busy(false);
    }
}
