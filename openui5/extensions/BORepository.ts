/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace sap {
    export namespace extension {
        export namespace repository {
            /** 数据说明 */
            export interface IDataInfo {
                /** 数据类型 */
                type: string | Function | object;
                /** 属性-键 */
                key: string;
                /** 属性-描述 */
                text: string;
            }
            /**
             * 查询数据
             * @param boRepository 仓库实例
             * @param dataInfo 数据信息
             * @param criteria 查询
             * @param onCompleted 完成事件
             */
            export function fetch(boRepository: ibas.BORepositoryApplication,
                dataInfo: IDataInfo, criteria: ibas.ICriteria, onCompleted: (values: ibas.IList<ibas.KeyText> | Error) => void): void {
                try {
                    if (!(boRepository instanceof ibas.BORepositoryApplication)) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", "boRepository"));
                    }
                    let boName: string;
                    if (typeof dataInfo.type === "function") {
                        boName = ibas.objects.nameOf(dataInfo.type);
                    } else if (typeof dataInfo.type === "object") {
                        boName = ibas.objects.nameOf(dataInfo.type);
                    } else if (typeof dataInfo.type === "string") {
                        boName = dataInfo.type;
                    }
                    if (ibas.strings.isEmpty(boName)) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", "dataInfo.type"));
                    }
                    let propertyKey: string = dataInfo.key;
                    if (ibas.strings.isEmpty(propertyKey)) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", "dataInfo.key"));
                    }
                    let propertyText: string = dataInfo.text;
                    if (ibas.strings.isEmpty(propertyText)) {
                        propertyText = propertyKey;
                    }
                    let methodName: string = ibas.strings.format("fetch{0}", boName);
                    let method: Function = boRepository[methodName];
                    if (!(method instanceof Function)) {
                        throw new Error(ibas.i18n.prop("sys_invalid_parameter", methodName));
                    }
                    method.call(boRepository, {
                        criteria: criteria,
                        onCompleted(opRslt: ibas.IOperationResult<any>): void {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                let values: ibas.IList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                                for (let item of opRslt.resultObjects) {
                                    let keys: ibas.IList<any> = propertyValues(item, propertyKey);
                                    let texts: ibas.IList<any> = propertyValues(item, propertyText);
                                    for (let index: number = 0; index < keys.length; index++) {
                                        // 值全部转为字符类型
                                        values.add(new ibas.KeyText(String(keys[index]), index < texts.length ? String(texts[index]) : ""));
                                    }
                                }
                                if (onCompleted instanceof Function) {
                                    onCompleted(values);
                                }
                            } catch (error) {
                                if (onCompleted instanceof Function) {
                                    onCompleted(error);
                                }
                            }
                        }
                    });
                } catch (error) {
                    if (onCompleted instanceof Function) {
                        onCompleted(error);
                    }
                }
            }
            /**
             * 获取数据属性值
             * @param data 数据
             * @param property 属性(items.code | code)
             */
            export function propertyValues(data: any, property: string): ibas.IList<any> {
                let values: ibas.IList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                let path: string = property.split(".")[0];
                let value: any = data[path];
                if (!ibas.objects.isNull(value)) {
                    if (path.length < property.length) {
                        property = property.substring(path.length);
                        if (value instanceof Array) {
                            for (let item of propertyValues(value, property)) {
                                values.add(item);
                            }
                        }
                    } else {
                        values.add(value);
                    }
                }
                return values;
            }
            /**
             * 批量查询数据，排队等待查询（等待15毫秒或30个条件）
             * @param boRepository 仓库实例
             * @param dataInfo 数据信息
             * @param criteria 查询
             * @param onCompleted 完成事件
             */
            export function batchFetch(boRepository: ibas.BORepositoryApplication,
                dataInfo: IDataInfo, criteria: ibas.ICriteria, onCompleted: (values: ibas.IList<ibas.KeyText> | Error) => void): void {
                let batchTask: BatchTask = batchTaskManager.create(boRepository, dataInfo);
                batchTask.addTask(criteria, onCompleted);
                if (!batchTask.isRunning()) {
                    batchTask.do();
                }
            }
            class BatchTask extends ibas.Action {
                /** 等待时间 */
                static CONFIG_ITEM_WAITTING_TIME: string = "waittingTime";
                /** 过期时间 */
                static CONFIG_ITEM_EXPIRATION_TIME: string = "expirationTime";
                constructor() {
                    super();
                    this.tasks = new ibas.ArrayList<Task>();
                    this.cachedDatas = new Map<string, ibas.KeyText>();
                }
                /** 进行 */
                do(): void {
                    super.do();
                    // 过期回收
                    setTimeout(() => {
                        this.done();
                    }, this.getConfig(BatchTask.CONFIG_ITEM_EXPIRATION_TIME, 600000));
                }
                boRepository: ibas.BORepositoryApplication;
                dataInfo: IDataInfo;
                tasks: ibas.IList<Task>;
                cachedDatas: Map<string, ibas.KeyText>;
                protected run(): boolean {
                    this.id = String(setInterval(() => {
                        // 没有任务退出
                        if (this.tasks.length === 0) {
                            return;
                        }
                        // 合并查询条件
                        let tasks: ibas.ArrayList<Task> = new ibas.ArrayList<Task>();
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        for (let task of this.tasks) {
                            if (ibas.objects.isNull(task)) {
                                continue;
                            }
                            if (ibas.objects.isNull(task.criteria)) {
                                continue;
                            }
                            let rValues: ibas.IList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                            let newItem: ibas.ICondition;
                            for (let item of task.criteria.conditions) {
                                // 复制查询条件
                                if (item.alias === task.dataInfo.key) {
                                    let value: ibas.KeyText = this.cachedDatas.get(item.value);
                                    if (!ibas.objects.isNull(value)) {
                                        rValues.add(value);
                                        continue;
                                    }
                                }
                                criteria.conditions.add(newItem = ibas.objects.clone(item));
                                if (item === task.criteria.conditions.firstOrDefault()) {
                                    newItem.relationship = ibas.emConditionRelationship.OR;
                                    if (item.bracketOpen > 0 && task.criteria.conditions.length > 1) {
                                        newItem.bracketOpen++;
                                    }
                                } else if (item === task.criteria.conditions.lastOrDefault()) {
                                    if (item.bracketClose > 0 && task.criteria.conditions.length > 1) {
                                        newItem.bracketClose++;
                                    }
                                }
                            }
                            if (rValues.length > 0 && rValues.length >= task.criteria.conditions.length && task.onCompleted instanceof Function) {
                                task.onCompleted(rValues);
                            } else {
                                tasks.add(task);
                            }
                        }
                        this.tasks = new ibas.ArrayList<Task>();
                        // 没有需要查询
                        if (criteria.conditions.length === 0) {
                            return;
                        }
                        fetch(this.boRepository, this.dataInfo, criteria, (values: ibas.IList<ibas.KeyText> | Error) => {
                            if (values instanceof Error) {
                                for (let task of tasks) {
                                    if (task.onCompleted instanceof Function) {
                                        task.onCompleted(values);
                                    }
                                }
                            } else {
                                for (let value of values) {
                                    this.cachedDatas.set(value.key, value);
                                }
                                for (let task of tasks) {
                                    if (task && task.criteria) {
                                        let rValues: ibas.IList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                                        for (let item of task.criteria.conditions) {
                                            if (item.alias === task.dataInfo.key) {
                                                let value: ibas.KeyText = this.cachedDatas.get(item.value);
                                                if (!ibas.objects.isNull(value)) {
                                                    rValues.add(value);
                                                } else {
                                                    // 没有查到数据，则原始值
                                                    rValues.add(new ibas.KeyText(item.value, item.value));
                                                }
                                            }
                                        }
                                        if (rValues.length === 0) {
                                            continue;
                                        }
                                        if (task.onCompleted instanceof Function) {
                                            task.onCompleted(rValues);
                                        }
                                    }
                                }
                            }
                        });
                    }, this.getConfig(BatchTask.CONFIG_ITEM_WAITTING_TIME, 30)));
                    return false;
                }
                addTask(criteria: ibas.ICriteria, onCompleted: (values: ibas.IList<ibas.KeyText> | Error) => void): void {
                    let task: Task = new Task();
                    task.boRepository = this.boRepository;
                    task.dataInfo = this.dataInfo;
                    task.criteria = criteria;
                    task.onCompleted = onCompleted;
                    this.tasks.add(task);
                }
            }
            class Task {
                boRepository: ibas.BORepositoryApplication;
                dataInfo: IDataInfo;
                criteria: ibas.ICriteria;
                onCompleted: (values: ibas.IList<ibas.KeyText> | Error) => void;
            }
            class BatchTaskManager {
                batchTasks: Map<any, Map<any, BatchTask>>;
                create(boRepository: ibas.BORepositoryApplication, dataInfo: IDataInfo): BatchTask {
                    if (ibas.objects.isNull(this.batchTasks)) {
                        this.batchTasks = new Map<any, Map<any, BatchTask>>();
                    }
                    let values: Map<any, BatchTask> = this.batchTasks.get(boRepository);
                    if (ibas.objects.isNull(values)) {
                        this.batchTasks.set(boRepository, values = new Map<any, BatchTask>());
                    }
                    let value: BatchTask = values.get(dataInfo.type);
                    if (ibas.objects.isNull(value)) {
                        value = new BatchTask();
                        value.boRepository = boRepository;
                        value.dataInfo = dataInfo;
                        value.addConfig(BatchTask.CONFIG_ITEM_WAITTING_TIME, 30);
                        value.addConfig(BatchTask.CONFIG_ITEM_EXPIRATION_TIME, 600000);
                        value.onDone = function (): void {
                            values.delete(dataInfo.type);
                            if (values.size === 0) {
                                batchTaskManager.batchTasks.delete(boRepository);
                                values = null;
                            }
                            clearInterval(Number(value.id));
                            value = null;
                        };
                        values.set(dataInfo.type, value);
                    }
                    return value;
                }
            }
            const batchTaskManager: BatchTaskManager = new BatchTaskManager();
        }
    }
}
