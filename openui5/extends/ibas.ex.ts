/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace openui5 {
    /** 配置项目-是否应用web缓存 */
    export const CONFIG_ITEM_WEB_CACHE: string = "useCache";
    /** 配置项目-weby库名 */
    export const CONFIG_ITEM_WEB_CACHE_DB_NAME: string = "cacheDBName";
    export class BORepsitory {
        rootUrl: string = ibas.urls.rootUrl("/openui5/index");
        keyAttribute: string;
        textAttribute: string;
        boName: string;
        boCode: string;
        repositoryName: string;
        childPropertyName: string;
        selectedKey: string;
        criteria: ibas.ICriteria;
        provinces: Array<any>;
        citys: Array<any>;
        districts: Array<any>;
        cache: boolean = false;
        private systemWebCache: boolean = ibas.config.get(CONFIG_ITEM_WEB_CACHE, false);
        constructor(repositoryName?: string, boName?: string, keyAttribute?: string,
            textAttribute?: string, criteria?: ibas.Criteria, selectedKey?: string, childPropertyName?: string) {
            this.repositoryName = repositoryName;
            this.boName = boName;
            this.keyAttribute = keyAttribute;
            this.textAttribute = textAttribute;
            this.criteria = criteria;
            this.selectedKey = selectedKey;
            this.childPropertyName = childPropertyName;
        }
        async getKeyTextList(): Promise<ibas.ArrayList<ibas.KeyText>> {
            let that: this = this;
            let CacheDB: openui5.CacheDB;
            let cacheKeyText: ibas.KeyText;
            if (that.cache && that.systemWebCache) {
                CacheDB = await openui5.CacheDB.getIndexedDB();
                if (!ibas.objects.isNull(CacheDB)) {
                    cacheKeyText = await CacheDB.getData(that.boCode, that.selectedKey);
                }
            }
            let promise: Promise<ibas.ArrayList<ibas.KeyText>> = new Promise<ibas.ArrayList<ibas.KeyText>>(resolve => {
                if (ibas.strings.isEmpty(that.repositoryName) || ibas.strings.isEmpty(that.boName)
                    || ibas.strings.isEmpty(that.keyAttribute) || ibas.strings.isEmpty(that.textAttribute)
                    || !that.criteria) {
                    resolve(null);
                }
                if (that.cache && that.systemWebCache) {
                    if (!!cacheKeyText) {
                        let keyTextList: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                        keyTextList.push(cacheKeyText);
                        resolve(keyTextList);
                        return;
                    }
                }
                let boRep: any = ibas.boFactory.create(this.repositoryName);
                let criteria: ibas.ICriteria = that.criteria;
                criteria.noChilds = true;
                boRep[ibas.strings.format("fetch{0}", this.boName)]({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<any>): void {
                        if (opRslt.resultCode === 0) {
                            let keyTextList: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                            for (let data of opRslt.resultObjects) {
                                let keyText: ibas.KeyText = new ibas.KeyText();
                                keyText.key = data.getProperty(that.keyAttribute);
                                keyText.text = data.getProperty(that.textAttribute);
                                keyTextList.push(keyText);
                                if (that.cache && that.systemWebCache && !ibas.objects.isNull(CacheDB)) {
                                    CacheDB.add(that.boCode, keyText);
                                }
                            }
                            resolve(keyTextList);
                        } else {
                            resolve(null);
                        }
                    }
                });
            });
            return promise;
        }
        async getChildBoKeyTextList(): Promise<ibas.ArrayList<ibas.KeyText>> {
            let that: this = this;
            let promise: Promise<ibas.ArrayList<ibas.KeyText>> = new Promise<ibas.ArrayList<ibas.KeyText>>(resolve => {
                if (ibas.strings.isEmpty(that.repositoryName) || ibas.strings.isEmpty(that.boName)
                    || ibas.strings.isEmpty(that.keyAttribute) || ibas.strings.isEmpty(that.textAttribute)
                    || !that.criteria) {
                    resolve(null);
                }
                let boRep: any = ibas.boFactory.create(this.repositoryName);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria = that.criteria;
                boRep[ibas.strings.format("fetch{0}", this.boName)]({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<any>): void {
                        if (opRslt.resultCode === 0) {
                            let keyTextList: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                            let result: any = opRslt.resultObjects.firstOrDefault();
                            for (let data of result.getProperty(that.childPropertyName)) {
                                let keyText: ibas.KeyText = new ibas.KeyText();
                                keyText.key = data.getProperty(that.keyAttribute);
                                keyText.text = data.getProperty(that.textAttribute);
                                keyTextList.push(keyText);
                            }
                            resolve(keyTextList);
                        } else {
                            resolve(null);
                        }
                    }
                });
            });
            return promise;
        }
        async getProvinces(): Promise<boolean> {
            if (!ibas.strings.isEmpty(this.getLocalStorage("provinces"))) {
                this.provinces = this.getLocalStorage("provinces");
                return true;
            }
            let url: string = ibas.strings.format("{0}/data/province.json", this.rootUrl);
            this.provinces = await this.load(url);
            this.addLocalStorage("provinces", this.provinces);
            if (ibas.objects.isNull(this.provinces)) {
                return false;
            } else {
                return true;
            }
        }
        async getCitys(): Promise<boolean> {
            if (!ibas.strings.isEmpty(this.getLocalStorage("citys"))) {
                this.citys = this.getLocalStorage("citys");
                return true;
            }
            let url: string = ibas.strings.format("{0}/data/city.json", this.rootUrl);
            this.citys = await this.load(url);
            this.addLocalStorage("citys", this.citys);
            if (ibas.objects.isNull(this.citys)) {
                return false;
            } else {
                return true;
            }
        }
        async getDistricts(): Promise<boolean> {
            if (!ibas.strings.isEmpty(this.getLocalStorage("districts"))) {
                this.districts = this.getLocalStorage("districts");
                return true;
            }
            let url: string = ibas.strings.format("{0}/data/district.json", this.rootUrl);
            this.districts = await this.load(url);
            this.addLocalStorage("districts", this.districts);
            if (ibas.objects.isNull(this.districts)) {
                return false;
            } else {
                return true;
            }
        }
        private async load(address: string): Promise<any> {
            let promise: Promise<any> = new Promise<any>(resolve => {
                let JQryAjxSetting: JQueryAjaxSettings = {
                    url: address,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    cache: false,
                    error: function (xhr: JQueryXHR, status: string, error: string): void {
                        ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.strings.format("config: load file [{2}] faild [{0} - {1}].", status, error, address));
                        resolve(null);
                    },
                    success: function (data: any): void {
                        ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.strings.format("config: load file [{0}] successful.", address));
                        resolve(data);
                    },
                };
                jQuery.ajax(JQryAjxSetting);
            });
            return promise;
        }
        addLocalStorage(name: string, value: any): void {
            window.localStorage.setItem(name, JSON.stringify(value));
        }
        getLocalStorage(name: string): any {
            return JSON.parse(window.localStorage.getItem(name));
        }
    }
    /**
     * 缓存库 操作类
     */
    export class CacheDB {
        private cacheDBInfo: CacheDBInfo;
        /** web indexed库名 */
        private static webDBName: string = ibas.config.get(CONFIG_ITEM_WEB_CACHE_DB_NAME, "ibas_db");

        private static _indexedDB: openui5.CacheDB;
        public static async  getIndexedDB(): Promise<openui5.CacheDB> {
            // 判断浏览器是否支持indexedDB
            if (!window.indexedDB) {
                return null;
            }
            if (!CacheDB._indexedDB) {
                CacheDB._indexedDB = new openui5.CacheDB();
            }
            if (!CacheDB._indexedDB.cacheDBInfo) {
                CacheDB._indexedDB.cacheDBInfo = new CacheDBInfo();
                CacheDB._indexedDB.cacheDBInfo.dbName = CacheDB.webDBName;
                CacheDB._indexedDB.cacheDBInfo.currentDBFactory = window.indexedDB;
            }
            if (!CacheDB._indexedDB.cacheDBInfo.currentDB) {
                await CacheDB._indexedDB.initDB();
            }
            let promise: Promise<openui5.CacheDB> = new Promise<openui5.CacheDB>(resolve => {
                resolve(CacheDB._indexedDB);
            });
            return promise;
        }
        /**
         * 初始化DB
         * @param version 数据库版本，缺省则打开当前版本
         * @param newTables 需要初始化的表
         */
        public async initDB(version?: number, newTables?: Array<string>): Promise<boolean> {
            let that: this = this;
            let promise: Promise<boolean> = new Promise<boolean>(resolve => {
                let dbRequest: IDBOpenDBRequest = !version ? that.cacheDBInfo.currentDBFactory.open(that.cacheDBInfo.dbName)
                    : that.cacheDBInfo.currentDBFactory.open(that.cacheDBInfo.dbName, version);
                dbRequest.onerror = function (e: any): void {
                    console.log("OPen Error!");
                };
                dbRequest.onupgradeneeded = function (e: any): void {
                    that.cacheDBInfo.currentDB = e.target.result;
                    if (!!newTables) {
                        for (let table of newTables) {
                            if (!that.cacheDBInfo.currentDB.objectStoreNames.contains(table)) {
                                let store: IDBObjectStore = that.cacheDBInfo.currentDB.createObjectStore(table, { keyPath: "key" });
                                store.createIndex("textIndex", "text", { unique: true });
                                store.createIndex("keyIndex", "key", { unique: true });
                            }
                        }
                    }
                };
                dbRequest.onsuccess = function (e: any): void {
                    that.cacheDBInfo.currentDB = e.target.result;
                    that.cacheDBInfo.dbVersion = that.cacheDBInfo.currentDB.version;
                    resolve(true);
                };
            });
            return promise;
        }
        /**
         * 删除数据库
         * @param dbName 数据库名称
         */
        deleteDB(dbName?: string): void {
            // 未传入表名,默认为配置文件中表名
            if (!dbName) {
                dbName = ibas.config.get(CONFIG_ITEM_WEB_CACHE_DB_NAME, "ibas_db");
            }
            this.cacheDBInfo.currentDB.close();
            this.cacheDBInfo.currentDBFactory.deleteDatabase(dbName);
            this.cacheDBInfo = null;
            CacheDB.getIndexedDB();
        }
        /**
         * 获取读写权限
         * @param storeName 表名
         */
        async getStore(storeName: string, readOnly?: boolean): Promise<IDBObjectStore> {
            try {
                let that: this = this;
                // 如果当前缓存中不存在该表则重新初始化数据库
                if (!this.cacheDBInfo.currentDB.objectStoreNames.contains(storeName)) {
                    let newTables: Array<string> = new Array<string>();
                    newTables.push(storeName);
                    this.cacheDBInfo.currentDB.close();
                    this.cacheDBInfo.currentDB = null;
                    await this.initDB(this.cacheDBInfo.dbVersion + 1, newTables);
                }
                let promise: Promise<IDBObjectStore> = new Promise<IDBObjectStore>(resolve => {
                    try {
                        let transaction: IDBTransaction = (!readOnly) ?
                            that.cacheDBInfo.currentDB.transaction(storeName, "readwrite") : that.cacheDBInfo.currentDB.transaction(storeName, "readonly");
                        resolve(transaction.objectStore(storeName));
                    } catch (error) {
                        ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_ibas_ex_ibasdb_is_closed"));
                        that.deleteDB(that.cacheDBInfo.dbName);
                        return null;
                    }
                });
                return promise;
            } catch (error) {
                ibas.logger.log(ibas.emMessageLevel.DEBUG, ibas.i18n.prop("sap_ibas_ex_ibasdb_not_store"));
                return null;
            }
        }
        /**
         * 添加记录
         * @param storeName 表名
         */
        async add(storeName: string, data: ibas.KeyText): Promise<string> {
            let store: IDBObjectStore = await this.getStore(storeName);
            let promise: Promise<string> = new Promise<string>(resolve => {
                let request: IDBRequest = store.add(data);
                request.onsuccess = function (e: any): void {
                    let key: string = e.target.result;
                    resolve(key);
                };
                request.onerror = function (e: any): void {
                    resolve(null);
                };
            });
            return promise;
        }
        /**
         * 更新记录
         * @param storeName 表名
         * @param updateKey 更新记录主键
         */
        async update(storeName: string, newData: ibas.KeyText): Promise<ibas.KeyText> {
            let store: IDBObjectStore = await this.getStore(storeName);
            let promise: Promise<ibas.KeyText> = new Promise<ibas.KeyText>(resolve => {
                let request: IDBRequest = store.get(newData.key);
                request.onsuccess = function (e: any): void {
                    let obj: ibas.KeyText = e.target.result;
                    obj.text = newData.text;
                    store.put(obj);
                    resolve(obj);
                };
                request.onerror = function (e: any): void {
                    resolve(null);
                };
            });
            return promise;
        }
        /**
         * 删除记录
         * @param storeName 表名
         * @param updateKey 删除记录主键
         */
        async delete(storeName: string, deleteKey: string): Promise<boolean> {
            let store: IDBObjectStore = await this.getStore(storeName);
            let promise: Promise<boolean> = new Promise<boolean>(resolve => {
                let request: IDBRequest = store.delete(deleteKey);
                request.onsuccess = function (e: any): void {
                    resolve(true);
                };
                request.onerror = function (e: any): void {
                    resolve(false);
                };
            });
            return promise;
        }
        /**
         * 清除表中所有记录
         * @param storeName 表名
         */
        async clearObjectStore(storeName: string): Promise<void> {
            let store: IDBObjectStore = await this.getStore(storeName);
            store.clear();
        }
        /**
         * 查询
         * @param storeName 表名
         * @param fetchKey 查询主键
         */
        async fetch(storeName: string, fetchKey: string): Promise<Array<ibas.KeyText>> {
            let store: IDBObjectStore = await this.getStore(storeName, true);
            let key: IDBIndex = store.index("textIndex");
            let request: IDBRequest = key.openCursor(IDBKeyRange.only(fetchKey));
            let results: Array<ibas.KeyText> = new Array<ibas.KeyText>();
            let promise: Promise<Array<ibas.KeyText>> = new Promise<Array<ibas.KeyText>>(resolve => {
                request.onsuccess = function (e: any): void {
                    let cursor: any = e.target.result;
                    if (cursor) {
                        let keytext: ibas.KeyText = cursor.value;
                        results.push(keytext);
                        cursor.continue();
                    } else {
                        resolve(results);
                    }
                };
                request.onerror = function (e: any): void {
                    resolve(null);
                };
            });
            return promise;
        }
        /**
         * 查询
         * @param storeName 表名
         * @param indexValue 查询值
         */
        async getData(storeName: string, indexValue: string): Promise<ibas.KeyText> {
            let store: IDBObjectStore = await this.getStore(storeName, true);
            let promise: Promise<ibas.KeyText> = new Promise<ibas.KeyText>(resolve => {
                let index: IDBIndex = store.index("keyIndex");
                index.get(indexValue).onsuccess = function (e: any): void {
                    let obj: ibas.KeyText = e.target.result;
                    resolve(obj);
                };
                index.get(indexValue).onerror = function (e: any): void {
                    resolve(null);
                };
            });
            return promise;
        }
    }
    /**
     * 缓存库 操作类信息
     */
    export class CacheDBInfo {
        /** 库名 */
        dbName: string;
        /** 版本号 */
        dbVersion: number;
        /** 库工厂 */
        currentDBFactory: IDBFactory;
        /** 当前操作库实例 */
        currentDB: IDBDatabase;
    }
}