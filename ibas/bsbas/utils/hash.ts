/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { objects, logger, emMessageLevel } from "../../bobas/index";
import { IHashChangeListener } from "./hash.d"
export class HashManager {
    constructor() {
        let that: this = this;
        this._listeners = new Map();
        // 哈希值变化
        window.addEventListener("hashchange", function (event: any): void {
            that.setCurrentHashActivated(false);
        }, false);
    }
    /**  */
    private _listeners: Map<string, IHashChangeListener>;
    private currentHashActivated: boolean;
    setCurrentHashActivated(activated: boolean): void {
        this.currentHashActivated = activated;
    }
    /** 注册 */
    registerListener(listener: IHashChangeListener): void {
        if (objects.isNull(listener)) {
            return;
        }
        if (objects.isNull(this._listeners)) {
            this._listeners = new Map();
        }
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
    /** 触发 */
    onHashChange(): void {
        try {
            logger.log(emMessageLevel.DEBUG,
                "hashs: manually trigger onHashChange event,current hash value is '{0}'", window.location.hash);
            if (this.currentHashActivated === true) {
                logger.log(emMessageLevel.DEBUG,
                    "hashs: current hash value is already processed; return");
                return;
            }
            if (objects.isNull(this._listeners)) {
                this._listeners = new Map();
                return;
            }
            let keys = this._listeners.keys();
            while (true) {
                let key: string = keys.next().value;
                if (objects.isNull(key)) break;
                let listener = this.getHashChangeListener(key);
                if (objects.isNull(listener)) continue;
                if (window.location.href.indexOf(listener.hashSign) > 0) {
                    listener.onHashChange.apply(listener.env, [hashChangeEvent()]);
                    break;
                }
            }
        }
        catch (error) {
            logger.log(emMessageLevel.ERROR,
                "hashs: manually trigger onHashChange event error,because [{0}]", error.message);
        }
    }
    /**
     * 修改当前地址栏hash值
     * @param newHash 新的Hash值 
     * @param isTriggerEvent 是否触发onHashChange事件,默认为true
     */
    changeHash(newHash: string, isTriggerEvent: boolean = true): void {
        window.history.replaceState(null, null, newHash);
        this.setCurrentHashActivated(false);
        logger.log(emMessageLevel.DEBUG,
            "hashs: redirect to '{0}'", newHash);
        if (isTriggerEvent != false) {
            this.onHashChange();
        } else {
            this.setCurrentHashActivated(true);
        }
    }
}
function hashChangeEvent(newURL?: string): HashChangeEvent {
    return new HashChangeEvent("", new HashChangeEventInitArgs(newURL));
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
