/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { strings, objects, logger, emMessageLevel, List, ArrayList } from "../../bobas/index";
import { IHashChangedListener, IHashInfo } from "./HashEventManager.d";
export class HashEventManager {
    constructor() {
        let that: this = this;
        window.addEventListener("hashchange", function (event: HashChangeEvent): void {
            that.fireHashChanged(event);
        }, false);
    }
    /** 集合 */
    private _listeners: List<IHashChangedListener>;
    get listeners(): List<IHashChangedListener> {
        if (objects.isNull(this._listeners)) {
            this._listeners = new ArrayList<IHashChangedListener>();
        }
        return this._listeners;
    }
    /** 获取 */
    listener(id: string): IHashChangedListener {
        let listener: IHashChangedListener = this.listeners.firstOrDefault((item) => {
            if (item.hashSign === id) {
                return true;
            }
        });
        return listener;
    }
    /** 注册 */
    registerListener(listener: IHashChangedListener): void {
        if (!objects.isNull(this.listener(listener.hashSign))) {
            return;
        }
        this.listeners.add(listener);
    }
    /** 触发HashChange事件 */
    fireHashChanged(): void;
    fireHashChanged(event: any): void;
    fireHashChanged(): void {
        let event: any = arguments[0];
        if (objects.isNull(event)) {
            event = { newURL: window.location.href };
        }
        for (let listener of this.listeners) {
            if (event.newURL.indexOf(listener.hashSign) < 0) {
                continue;
            }
            listener.onHashChanged(event);
        }
    }
    /**
     * 修改当前地址栏hash值
     * @param newHash
     */
    changeHash(newHash: string): void {
        if (strings.equalsIgnoreCase(window.location.hash, newHash)) {
            window.history.pushState(null, null, newHash);
            this.fireHashChanged();
        } else {
            window.location.hash = newHash;
        }
    }
    /**
     * 替换当前地址栏hash值,但是不增加历史记录
     * @param newHash 新的Hash值
     * @param isTriggerEvent 是否触发onHashChanged事件,默认为true
     */
    replaceHash(newHash: string, isTriggerEvent: boolean = true): void {
        window.history.replaceState(null, null, newHash);
        logger.log(emMessageLevel.DEBUG,
            "hashs: redirect to '{0}'", newHash);
        if (isTriggerEvent !== false) {
            this.fireHashChanged();
        }
    }
    /**
     * 获取当前哈希值的类别和Id（服务、功能、视图）
     * @return
     */
    currentHashInfo(): IHashInfo {
        let hashInfo: IHashInfo = { id: "", category: "" };
        for (let listener of this.listeners) {
            let key: string = listener.hashSign;
            let currentHashValue: string = window.location.hash;
            if (currentHashValue.startsWith(key)) {
                let url: string = currentHashValue.substring(key.length);
                let index: number = url.indexOf("/") < 0 ? url.length : url.indexOf("/");
                hashInfo.id = url.substring(0, index);
                hashInfo.category = key;
                break;
            }
        }
        return hashInfo;
    }
}
