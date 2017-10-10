/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { strings, objects, logger, emMessageLevel, List, ArrayList, uuids } from "../../bobas/index";
import { emKeyboardEventType } from "../data/index";
import { IKeyboardEventListener } from "./KeyboardEventManager.d";
export class KeyboardEventManager {
    constructor() {
        let that: this = this;
        window.addEventListener("keydown", function (event: HashChangeEvent): void {
            that.fireEvent(emKeyboardEventType.KEYDOWN, event);
        }, false);
        window.addEventListener("keypress", function (event: HashChangeEvent): void {
            that.fireEvent(emKeyboardEventType.KEYPRESS, event);
        }, false);
        window.addEventListener("keyup", function (event: HashChangeEvent): void {
            that.fireEvent(emKeyboardEventType.KEYUP, event);
        }, false);
    }
    /** 集合 */
    private _listeners: List<IKeyboardEventListener>;
    listeners(): List<IKeyboardEventListener>;
    listeners(type: emKeyboardEventType): List<IKeyboardEventListener>;
    listeners(): List<IKeyboardEventListener> {
        if (objects.isNull(this._listeners)) {
            this._listeners = new ArrayList<IKeyboardEventListener>();
        }
        let type: any = arguments[0];
        if (objects.isNull(type)) {
            return this._listeners;
        } else {
            let result: List<IKeyboardEventListener> = new ArrayList<IKeyboardEventListener>();
            result.add(this._listeners.where((listener: IKeyboardEventListener) => {
                if (listener.eventType === type) {
                    return true;
                }
            }));
            return result;
        }

    }
    /** 获取 */
    listener(id: string): IKeyboardEventListener {
        let listener: IKeyboardEventListener = this.listeners().firstOrDefault((item: IKeyboardEventListener) => {
            if (item.id === id) {
                return true;
            }
        });
        return listener;
    }
    /** 注册 */
    registerListener(listener: IKeyboardEventListener): void {
        if (objects.isNull(listener.id)) {
            listener.id = uuids.random();
        }
        if (!objects.isNull(this.listener(listener.id))) {
            return;
        }
        this.listeners().add(listener);
    }
    /** 触发键盘事件 */
    fireEvent(type: emKeyboardEventType): void;
    fireEvent(type: emKeyboardEventType, event: any): void;
    fireEvent(): void {
        let type: emKeyboardEventType = arguments[0];
        let event: any = arguments[1];
        if (objects.isNull(type) || objects.isNull(event)) {
            return;
        }
        for (let listener of this.listeners()) {
            if (listener.eventType !== type) {
                continue;
            }
            listener.onEventFired(event);
        }
    }
}

