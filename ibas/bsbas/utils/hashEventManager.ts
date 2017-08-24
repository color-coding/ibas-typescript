/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { strings, objects, logger, emMessageLevel } from "../../bobas/index";
import { IHashChangeListener, IHashCategory } from "./hashEventManager.d";
export class HashEventManager {
    constructor() {
        let that: this = this;
        this._listeners = new Map();
    }
    /**  */
    private _listeners: Map<string, IHashChangeListener>;
    /** 注册 */
    registerListener(listener: IHashChangeListener): void {
        if (objects.isNull(listener)) {
            return;
        }
        if (objects.isNull(this._listeners)) {
            this._listeners = new Map();
        }
        if (this._listeners.has(listener.hashSign)) {
            return;
        }
        window.addEventListener("hashchange", function (event: any): void {
            if (event === undefined || event === null) {
                return;
            }
            if (event.newURL.indexOf(listener.hashSign) < 0) {
                return;
            }
            listener.onHashChange.apply(listener.caller, [event]);
        }, false);
        this._listeners.set(listener.hashSign, listener);
    }
    /** 获取 */
    getHashChangeListener(id: string): IHashChangeListener {
        if (objects.isNull(this._listeners)) {
            return null;
        }
        if (this._listeners.has(id)) {
            return this._listeners.get(id);
        }
        return null;
    }
    /** 触发HashChange事件 */
    fireHashChange(): void {
        window.dispatchEvent(hashChangeEvent());
    }
    /**
     * 修改当前地址栏hash值
     * @param newHash 
     */
    changeHash(newHash: string): void {
        if (strings.equalsIgnoreCase(window.location.hash, newHash)) {
            window.history.pushState(null, null, newHash);
            this.fireHashChange();
        } else {
            window.location.hash = newHash;
        }
    }
    /**
     * 替换当前地址栏hash值,但是不增加历史记录
     * @param newHash 新的Hash值 
     * @param isTriggerEvent 是否触发onHashChange事件,默认为true
     */
    replaceHash(newHash: string, isTriggerEvent: boolean = true): void {
        window.history.replaceState(null, null, newHash);
        logger.log(emMessageLevel.DEBUG,
            "hashs: redirect to '{0}'", newHash);
        if (isTriggerEvent != false) {
            this.fireHashChange();
        }
    }
    /**
     * 获取当前哈希值的类别和Id（服务、功能、视图）
     * @return 
     */
    getCurrentHashValueCategoryAndId(): IHashCategory {
        let hashCategory: IHashCategory = { Id: "", category: "" };
        let keys = this._listeners.keys();
        while (true) {
            let key: string = keys.next().value;
            if (objects.isNull(key)) break;
            let currentHashValue = window.location.hash;
            if (currentHashValue.startsWith(key)) {
                let url: string = currentHashValue.substring(key.length);
                let index = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                hashCategory.Id = url.substring(0, index);
                hashCategory.category = key;
                break;
            }
        }
        return hashCategory;
    }
}
function hashChangeEvent(newURL?: string): HashChangeEvent {
    return new HashChangeEvent("hashchange", new HashChangeEventInitArgs(newURL));
}
class HashChangeEventInitArgs implements HashChangeEventInit {
    constructor(url?: string) {
        if (objects.isNull(url)) {
            this.newURL = window.location.href;
        } else {
            this.newURL = url;
        }
    }
    newURL: string;
}
