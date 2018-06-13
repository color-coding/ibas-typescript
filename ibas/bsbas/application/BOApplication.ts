/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../../bobas/common/Configuration.ts" />
/// <reference path="../../bobas/common/Logger.ts" />
/// <reference path="../../bobas/common/Utils.ts" />
/// <reference path="../common/Enum.ts" />
/// <reference path="./Services.ts" />
/// <reference path="./Application.ts" />

namespace ibas {
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
                // 选择服务代理或其子类
                if (objects.instanceOf(caller.proxy, BOChooseServiceProxy)) {
                    // 设置标题
                    if (!strings.isEmpty(caller.title)) {
                        this.description = caller.title;
                    }
                    // 设置返回方法
                    if (typeof caller.onCompleted === "function") {
                        this.onCompleted = caller.onCompleted;
                    }
                    // 设置选择类型
                    let chooseType: emChooseType = caller.chooseType;
                    if (objects.isNull(chooseType)) {
                        chooseType = emChooseType.MULTIPLE;
                    }
                    this.view.chooseType = chooseType;
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

    /**
     * 业务对象列表应用
     */
    export abstract class BOListApplication<T extends IBOListView, D> extends BOApplication<T> {
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

    /**
     * 业务对象编辑应用
     */
    export abstract class BOEditApplication<T extends IBOEditView, D> extends BOApplication<T> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
            this.view.saveDataEvent = this.saveData;
        }
        /** 当前编辑的数据 */
        protected abstract editData: D;
        /** 选择数据，参数：数据 */
        protected abstract saveData(): void;
        /** 关闭视图 */
        close(): void {
            if (objects.instanceOf(this.editData, Bindable)) {
                // 移出所有事件监听，防止资源不被回收
                (<Bindable><any>this.editData).removeListener(true);
            }
            this.editData = undefined;
            super.close();
        }
    }


    /**
     * 业务对象查看应用
     */
    export abstract class BOViewApplication<T extends IBOViewView, D> extends BOApplication<T> {

        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
        /** 当前查看的数据 */
        protected abstract viewData: D;
    }
    /**
     * 业务对象查看应用服务
     */
    export abstract class BOViewService<T extends IBOViewView, D> extends BOViewApplication<T, D> {
        /** 运行 */
        run(): void;
        /**
         * 运行
         * @param criteria 查询或查询条件
         */
        run(caller: IBOLinkServiceCaller): void;
        /** 运行 */
        run(): void {
            if (!objects.isNull(arguments[0])) {
                if (objects.instanceOf(arguments[0].proxy, BOLinkServiceProxy)) {
                    // 判断是否为选择契约
                    let caller: IBOLinkServiceCaller = arguments[0];
                    // 链接服务代理或其子类
                    if (caller.boCode === this.boCode
                        || config.applyVariables(caller.boCode) === config.applyVariables(this.boCode)) {
                        // 分析查询条件
                        let criteria: Criteria | string;
                        if (objects.instanceOf(caller.linkValue, Criteria)) {
                            criteria = <Criteria>caller.linkValue;
                        } else if (typeof caller.linkValue === "string") {
                            criteria = <string>caller.linkValue;
                        } else if (caller.linkValue instanceof Array) {
                            criteria = new Criteria();
                            criteria.result = 1;
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
                        // 退出后续
                        return;
                    }
                } else if (typeof arguments[0].category === "string") {
                    // 判断是否为hash参数
                    let value: string = arguments[0].category;
                    if (!strings.isEmpty(value)) {
                        let criteria: Criteria = new Criteria();
                        criteria.result = 1;
                        for (let item of value.split("&")) {
                            let tmps: string[] = item.split("=");
                            if (tmps.length >= 2) {
                                let condition: ICondition = criteria.conditions.create();
                                condition.alias = tmps[0];
                                condition.value = tmps[1];
                            }
                        }
                        this.fetchData(criteria);
                        // 退出后续
                        return;
                    }
                }
            }
            // 保持参数原样传递
            super.run.apply(this, arguments);
        }
        /** 查询数据 */
        protected abstract fetchData(criteria: ICriteria | string): void;
        /** 视图显示后 */
        protected viewShowed(): void {
            // 更新当前hash地址
            if (this.viewData instanceof BusinessObject) {
                let criteria: ICriteria = this.viewData.criteria();
                if (!objects.isNull(criteria) && criteria.conditions.length > 0) {
                    let bulider: StringBuilder = new StringBuilder();
                    bulider.append(URL_HASH_SIGN_SERVICES);
                    bulider.append(this.id);
                    bulider.append("/");
                    for (let item of criteria.conditions) {
                        if (bulider.length > 3) {
                            bulider.append("&");
                        }
                        bulider.append(item.alias);
                        bulider.append("=");
                        bulider.append(item.value);
                    }
                    // 发送登录连接请求后,清除地址栏中的查询参数信息,并且不保留浏览器历史记录
                    window.history.replaceState(null, null, decodeURI(bulider.toString()));
                }
            }

        }
    }
}