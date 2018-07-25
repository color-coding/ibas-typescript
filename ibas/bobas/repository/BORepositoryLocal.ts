/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="../common/Configuration.ts" />
/// <reference path="./BORepositoryCore.ts" />

namespace ibas {
    /** 本地仓库 */
    export abstract class LocalRepository {
        /** 数据转换者 */
        converter: IDataConverter;
    }
    /** 本地仓库，IndexedDB */
    export abstract class LocalRepositoryIndexedDB extends LocalRepository {
        /** 名称 */
        name: string;
        /** 数据库，需要先初始化 */
        protected db: IDBDatabase;
        /** 打开数据库 */
        protected openDB(opener: ILocalDBOpener): void {
            if (strings.isEmpty(this.name)) {
                opener.onError(new Error(i18n.prop("sys_invalid_parameter", "name")));
                return;
            }
            if (!objects.isNull(this.db)) {
                opener.onSuccess(this.db);
                return;
            }
            let dbFactory: IDBFactory = window.indexedDB;
            if (objects.isNull(dbFactory)) {
                opener.onError(new Error(i18n.prop("sys_invalid_parameter", "indexedDB")));
                return;
            }
            let that: this = this;
            let dbRequest: IDBOpenDBRequest = dbFactory.open(this.name, 1);
            dbRequest.onerror = function (e: Event): void {
                opener.onError((<any>e.currentTarget).error);
            };
            dbRequest.onsuccess = function (e: Event): void {
                that.db = (<any>e).target.result;
                opener.onSuccess(that.db);
            };
            dbRequest.onupgradeneeded = function (e: Event): void {
                that.db = (<any>e).target.result;
                opener.onSuccess(that.db);
                dbRequest.onsuccess = null;
            };
        }
        /** 关闭数据库 */
        closeDB(): void {
            if (objects.isNull(this.db)) {
                return;
            }
            this.db.close();
            this.db = null;
        }
    }
    /**
     * 数据库打开者
     */
    export interface ILocalDBOpener {
        /** 成功打开 */
        onSuccess(db: IDBDatabase): void;
        /** 发生错误 */
        onError(error: Error): void;
    }
    /**
     * 查询调用者
     */
    export interface ILocalFetchCaller<P> extends IMethodCaller<P> {
        /** 查询条件 */
        criteria: ICriteria;
    }
    /**
     * 保存调用者
     */
    export interface ILocalSaveCaller<P> extends IMethodCaller<P> {
        /** 被保存对象 */
        beSaved: P;
        /**
         * 调用完成
         * @param opRslt 结果
         */
        onCompleted(opRslt: IOperationResult<P>): void;
    }
    /** 本地业务对象仓库 */
    export class BORepositoryIndexedDB extends LocalRepositoryIndexedDB implements IBORepository {
        /**
         * 查询数据
         * @param boName 业务对象名称
         * @param caller 查询监听者
         */
        fetch<P>(boName: string, caller: ILocalFetchCaller<P>): void {
            let that: this = this;
            this.openDB({
                onError(error: Error): void {
                    caller.onCompleted(new OperationResult(error));
                },
                onSuccess(db: IDBDatabase): void {
                    let objectStore: IDBObjectStore = db.transaction(boName, "readonly").objectStore(boName);
                    let dbRequest: IDBRequest = objectStore.openCursor();
                    dbRequest.onerror = function (e: Event): void {
                        caller.onCompleted(new OperationResult((<any>e.currentTarget).error));
                    };
                    let opRslt: OperationResult<P> = new OperationResult<P>();
                    dbRequest.onsuccess = function (e: Event): void {
                        let cursor: IDBCursorWithValue = (<any>e.target).result;
                        if (cursor) {
                            let data: any = cursor.value;
                            if (!objects.isNull(that.converter)) {
                                data = that.converter.parsing(data, boName);
                            }
                            if (that.filter(caller.criteria, data)) {
                                opRslt.resultObjects.add(data);
                            }
                            cursor.continue();
                        } else {
                            caller.onCompleted(opRslt);
                        }
                    };
                }
            });
        }
        /**
         * 过滤数据
         * @param criteria 查询
         * @param data 数据
         * @return true,符合条件；false，不符合条件
         */
        protected filter(criteria: ICriteria, data: any): boolean {
            if (objects.isNull(criteria)) {
                return true;
            }
            if (criteria.conditions.length === 0) {
                return true;
            }
            let judgmentLink: BOJudgmentLinkCondition = new BOJudgmentLinkCondition();
            judgmentLink.parsingConditions(criteria.conditions);
            return judgmentLink.judge(data);
        }
        /**
         * 保存数据
         * @param boName 业务对象名称
         * @param caller 保存监听者
         */
        save<P>(boName: string, caller: ISaveCaller<P>): void {
            if (strings.isEmpty(boName)) {
                boName = "buckets";
            }
            let storeParameters: IDBObjectStoreParameters = {
                autoIncrement: true,
            };
            let that: this = this;
            this.openDB({
                onError(error: Error): void {
                    caller.onCompleted(new OperationResult(error));
                },
                onSuccess(db: IDBDatabase): void {
                    let objectStore: IDBObjectStore = null;
                    if (db.objectStoreNames.contains(boName)) {
                        objectStore = db.transaction(boName, "readwrite").objectStore(boName);
                    } else {
                        if (objects.isNull(storeParameters)) {
                            objectStore = db.createObjectStore(boName);
                        } else {
                            objectStore = db.createObjectStore(boName, storeParameters);
                        }
                    }
                    if (objects.isNull(objectStore)) {
                        caller.onCompleted(new OperationResult(new Error(i18n.prop("sys_invalid_parameter", "objectStore"))));
                        return;
                    }
                    let data: any = caller.beSaved;
                    if (!objects.isNull(that.converter)) {
                        data = that.converter.convert(data, boName);
                    }
                    let dbRequest: IDBRequest = objectStore.put(data);
                    dbRequest.onerror = function (e: Event): void {
                        caller.onCompleted(new OperationResult((<any>e.currentTarget).error));
                    };
                    dbRequest.onsuccess = function (e: Event): void {
                        let opRslt: OperationResult<P> = new OperationResult<P>();
                        opRslt.resultObjects.add(caller.beSaved);
                        caller.onCompleted(opRslt);
                    };
                }
            });
        }
    }
}