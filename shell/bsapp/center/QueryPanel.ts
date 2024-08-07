/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace app {
        /** 配置项目-可配置查询 */
        const CONFIG_ITEM_QUERY_PANEL_CONFIGURABLE: string = "queryPanelConfigurable";
        /** 配置项目-可配置查询-设备 */
        const CONFIG_ITEM_QUERY_PANEL_CONFIGURABLE_ON_PLANTFORM: string = CONFIG_ITEM_QUERY_PANEL_CONFIGURABLE + "|{0}";
        /** 配置项目-可选择查询 */
        const CONFIG_ITEM_QUERY_PANEL_SELECTABLE: string = "queryPanelSelectable";
        /** 配置项目-可选择查询-设备 */
        const CONFIG_ITEM_QUERY_PANEL_SELECTABLE_ON_PLANTFORM: string = CONFIG_ITEM_QUERY_PANEL_SELECTABLE + "|{0}";
        /**
         * 查询面板
         */
        export class QueryPanel extends ibas.BarApplication<IQueryPanelView>  {
            /** 应用标识 */
            static APPLICATION_ID: string = "69e3d786-5bf5-451d-b660-3eb485171af5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "shell_query";

            constructor() {
                super();
                this.id = QueryPanel.APPLICATION_ID;
                this.name = QueryPanel.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 初始化 */
            protected init(callBack: Function): void {
                if (callBack instanceof Function) {
                    setTimeout(callBack, 5);
                }
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 注册视图事件
                this.view.searchEvent = this.search;
                this.view.deleteQueryEvent = this.deleteQuery;
                this.view.saveQueryEvent = this.saveQuery;
                this.view.addQueryConditionEvent = this.addQueryCondition;
                this.view.removeQueryConditionEvent = this.removeQueryCondition;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                this.editQuery = <bo.UserQuery>this.currentQuery();
                if (ibas.objects.isNull(this.editQuery)) {
                    this.editQuery = new bo.UserQuery();
                    this.editQuery.id = this.listener.queryId;
                    this.editQuery.name = ibas.i18n.prop("shell_data_new") + ibas.i18n.prop("shell_query");
                    this.editQuery.order = 1;
                    this.queries.add(this.editQuery);
                    this.showQueries();
                    this.view.usingQuery = (this.queries.length - 1).toString();
                }
                this.editQuery.target = this.targetName();
                if (ibas.objects.isNull(this.editQuery.criteria)) {
                    this.editQuery.criteria = new ibas.Criteria();
                    this.editQuery.criteria.businessObject = this.editQuery.target;
                }
                this.view.showQuery(this.editQuery);
                this.view.showQueryConditions(this.editQuery.criteria.conditions);
            }
            /** 工具条显示完成 */
            protected barShowed(): void {
                let selectable: boolean = ibas.config.get(CONFIG_ITEM_QUERY_PANEL_SELECTABLE, true);
                this.view.selectable = ibas.config.get(
                    ibas.strings.format(CONFIG_ITEM_QUERY_PANEL_SELECTABLE_ON_PLANTFORM,
                        ibas.enums.toString(ibas.emPlantform, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM)))
                    , selectable);
                if (this.listener instanceof ibas.BOChooseView) {
                    this.view.configurable = false;
                } else {
                    let configurable: boolean = ibas.config.get(CONFIG_ITEM_QUERY_PANEL_CONFIGURABLE, true);
                    this.view.configurable = ibas.config.get(
                        ibas.strings.format(CONFIG_ITEM_QUERY_PANEL_CONFIGURABLE_ON_PLANTFORM,
                            ibas.enums.toString(ibas.emPlantform, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM)))
                        , configurable);
                }
                this.listener.queryPanel = () => {
                    return this.view;
                };
                this.showQueries();
            }

            private showQueries(): void {
                if (ibas.objects.isNull(this.queries)) {
                    return;
                }
                let keyValues: Array<ibas.KeyValue> = new Array<ibas.KeyValue>();
                for (let index: number = 0; index < this.queries.length; index++) {
                    keyValues.push(new ibas.KeyValue(index.toString(), this.queries[index].name));
                }
                this.view.showQueries(keyValues);
            }
            private editQuery: bo.UserQuery;

            private deleteQuery(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            // 去除查询后保存，表示删除
                            that.editQuery.criteria = null;
                            that.saveQuery();
                        }
                    }
                });
            }
            private saveQuery(): void {
                try {
                    this.editQuery.user = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE);
                    let that: this = this;
                    let boRepository: bo.IBORepositoryShell = bo.repository.create();
                    boRepository.saveUserQuery({
                        beSaved: this.editQuery,
                        onCompleted(opRslt: ibas.IOperationResult<bo.IUserQuery>): void {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                that.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("shell_sucessful"));
                                // 操作成功，刷新数据，关闭界面
                                if (ibas.objects.isNull(that.editQuery.criteria)) {
                                    // 没查询，表示删除
                                    that.queries.remove(that.editQuery);
                                    that.barShowed();
                                }
                                that.close();
                            } catch (error) {
                                that.messages(error);
                            }
                        }
                    });
                } catch (error) {
                    this.messages(error);
                }
            }
            private addQueryCondition(): void {
                this.editQuery.criteria.conditions.create();
                this.view.showQueryConditions(this.editQuery.criteria.conditions);
            }
            private removeQueryCondition(condition: ibas.ICondition | ibas.ICondition[]): void {
                for (let item of ibas.arrays.create(condition)) {
                    this.editQuery.criteria.conditions.remove(item);
                }
                this.view.showQueryConditions(this.editQuery.criteria.conditions);
            }
            /** 运行 */
            run(): void;
            /** 运行 参数，初始化回调 */
            run(caller: {
                view: ibas.IUseQueryPanel & ibas.IBOQueryView,
                onInitialized?(): void,
            }): void;
            /** 运行 参数，初始化回调 */
            run(): void {
                let caller: {
                    view: ibas.IUseQueryPanel & ibas.IBOQueryView,
                    onInitialized?(): void,
                } = arguments[0];
                if (ibas.objects.isNull(caller)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller"));
                }
                if (ibas.objects.isNull(caller.view)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller.view"));
                }
                if (!(caller.onInitialized instanceof Function)) {
                    caller.onInitialized = function (): void {
                        // 回掉方法
                    };
                }
                this.listener = caller.view;
                let boRepository: bo.IBORepositoryShell = bo.repository.create();
                boRepository.fetchUserQueries({
                    user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                    queryId: this.listener.queryId,
                    onCompleted: (opRslt) => {
                        if (opRslt.resultCode !== 0) {
                            this.proceeding(ibas.emMessageType.WARNING, opRslt.message);
                        }
                        this.queries = new ibas.ArrayList<bo.IUserQuery>();
                        if (!ibas.objects.isNull(this.listener.usingCriteria)) {
                            this.queries.add({
                                id: this.listener.queryId,
                                name: ibas.i18n.prop("shell_query_exclusive"),
                                criteria: this.listener.usingCriteria,
                                order: 0,
                            });
                        }
                        for (let item of opRslt.resultObjects) {
                            if (ibas.objects.isNull(item.criteria)) {
                                continue;
                            }
                            if (!ibas.objects.isNull(this.listener.usingCriteria)) {
                                item.criteria = this.listener.usingCriteria.copyFrom(item.criteria);
                            }
                            this.queries.add(item);
                        }
                        this.init(caller.onInitialized);
                    }
                });
            }
            private listener: ibas.IUseQueryPanel;
            private targetName(): string {
                let boName: any = null;
                if (!ibas.objects.isNull(this.listener.queryTarget)) {
                    boName = this.listener.queryTarget;
                    if (!ibas.objects.isNull(boName) && typeof boName !== "string") {
                        if (!ibas.objects.isNull(boName.BUSINESS_OBJECT_CODE)) {
                            // 如果目标是对象，则尝试使用其编码
                            boName = boName.BUSINESS_OBJECT_CODE;
                        } else if (!ibas.objects.isNull(boName.name)) {
                            // 如果目标是对象，则尝试使用其名称
                            boName = boName.name;
                        }
                    }
                }
                if (typeof boName === "string") {
                    boName = ibas.config.applyVariables(boName);
                }
                return boName;
            }
            private queries: ibas.ArrayList<bo.IUserQuery>;
            private currentQuery(): bo.IUserQuery {
                if (!ibas.objects.isNull(this.queries)) {
                    for (let index: number = 0; index < this.queries.length; index++) {
                        if (index.toString() === this.view.usingQuery) {
                            return this.queries[index];
                        }
                    }
                }
                return null;
            }
            private currentCriteria(): ibas.ICriteria {
                let query: bo.IUserQuery = this.currentQuery();
                let criteria: ibas.ICriteria;
                if (!ibas.objects.isNull(query)) {
                    criteria = query.criteria;
                }
                if (ibas.objects.isNull(criteria)) {
                    criteria = new ibas.Criteria();
                }
                return criteria;
            }
            /** 查询 */
            private search(): void {
                this.busy(true);
                let criteria: ibas.ICriteria = this.currentCriteria();
                // 克隆新的，防止被污染
                criteria = criteria.clone();
                // 修正查询数量
                ibas.criterias.resultCount(criteria);
                // 根据目标类型，修正排序条件
                ibas.criterias.sorts(criteria, this.listener.queryTarget);
                // 没有查询条件且有查询内容，尝试从注册信息添加
                if ((criteria.conditions.length === 0
                    || criteria.conditions.firstOrDefault(c => c.operation === ibas.emConditionOperation.CONTAIN) == null)
                    && !ibas.objects.isNull(this.listener.queryTarget) && !ibas.strings.isEmpty(this.view.searchContent)) {
                    let boName: string = this.targetName();
                    if (!ibas.objects.isNull(boName)) {
                        let boRepository: bo.IBORepositoryShell = bo.repository.create();
                        boRepository.fetchBizObjectInfo({
                            user: ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE),
                            boCode: boName,
                            onCompleted: (opRslt: ibas.IOperationResult<bo.IBizObjectInfo>) => {
                                if (opRslt.resultCode !== 0) {
                                    this.messages(ibas.emMessageType.WARNING, opRslt.message);
                                }
                                if (criteria.conditions.length > 1) {
                                    criteria.conditions.firstOrDefault().bracketOpen += 1;
                                    criteria.conditions.lastOrDefault().bracketClose += 1;
                                }
                                // 检索到了查询字段
                                let firstCondition: ibas.ICondition = null;
                                let lastCondition: ibas.ICondition = null;
                                for (let boItem of opRslt.resultObjects) {
                                    for (let boProperty of boItem.properties) {
                                        if (!boProperty.searched) {
                                            continue;
                                        }
                                        let condition: ibas.ICondition = criteria.conditions.create();
                                        condition.alias = boProperty.name;
                                        condition.value = this.view.searchContent;
                                        if (!ibas.strings.isEmpty(condition.value)) {
                                            // 拆词，替换查询空格为%
                                            condition.value = ibas.strings.replace(condition.value, " ", "%");
                                        }
                                        condition.operation = ibas.emConditionOperation.CONTAIN;
                                        // 修正查询关系为或
                                        condition.relationship = ibas.emConditionRelationship.OR;
                                        if (firstCondition === null) {
                                            firstCondition = condition;
                                            firstCondition.relationship = ibas.emConditionRelationship.AND;
                                        }
                                        lastCondition = condition;
                                    }
                                }
                                if (firstCondition !== lastCondition) {
                                    firstCondition.bracketOpen = 1;
                                    lastCondition.bracketClose = 1;
                                }
                                // 没有查询字段，则查询主键
                                if (criteria.conditions.length === 0) {
                                    ibas.criterias.conditions(criteria, this.listener.queryTarget, this.view.searchContent);
                                }
                                this.fireQuery(criteria);
                            }
                        });
                    }
                } else {
                    this.fireQuery(criteria);
                }
            }
            /** 通知查询事件 */
            private fireQuery(criteria: ibas.ICriteria): void {
                if (!ibas.objects.isNull(this.listener)) {
                    // 给查询条件赋值
                    for (let item of criteria.conditions) {
                        if (item.operation === ibas.emConditionOperation.IS_NULL
                            || item.operation === ibas.emConditionOperation.NOT_NULL
                            || !ibas.strings.isEmpty(item.comparedAlias)) {
                            continue;
                        }
                        if (ibas.strings.isEmpty(item.value)) {
                            item.value = this.view.searchContent;
                        } else if (ibas.strings.isWith(item.value, "${", "}")) {
                            item.value = ibas.variablesManager.getValue(item.value);
                        }
                    }
                    this.listener.query(criteria);
                }
                this.busy(false);
            }
        }
        /** 查询面板-视图 */
        export interface IQueryPanelView extends ibas.IBarView, ibas.IQueryPanel {
            /** 查询事件 */
            searchEvent: Function;
            /** 显示可用查询 */
            showQueries(datas: ibas.KeyValue[]): void;
            /** 删除查询 */
            deleteQueryEvent: Function;
            /** 保存查询 */
            saveQueryEvent: Function;
            /** 显示查询内容 */
            showQuery(data: bo.UserQuery): void;
            /** 显示查询条件 */
            showQueryConditions(datas: ibas.ICondition[]): void;
            /** 添加查询条件 */
            addQueryConditionEvent: Function;
            /** 移出查询 */
            removeQueryConditionEvent: Function;
            /** 绘制下拉条 */
            drawPuller(): any;
        }
    }
}