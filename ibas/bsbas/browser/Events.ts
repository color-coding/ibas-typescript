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

namespace ibas {
    export interface IBrowserEventListener {
        id?: string;
        eventType: emBrowserEventType;
        /** 事件被触发 */
        onEventFired(event: Event): void;
    }
    const PROPERTY_LISTENER: symbol = Symbol("listener");
    export class BrowserEventManager {
        /** 集合 */
        listeners(): IList<IBrowserEventListener>;
        listeners(type: emBrowserEventType): IList<IBrowserEventListener>;
        listeners(): IList<IBrowserEventListener> {
            if (objects.isNull(this[PROPERTY_LISTENER])) {
                this[PROPERTY_LISTENER] = new ArrayList<IBrowserEventListener>();
            }
            let type: any = arguments[0];
            if (objects.isNull(type)) {
                return this[PROPERTY_LISTENER];
            } else {
                let result: IList<IBrowserEventListener> = new ArrayList<IBrowserEventListener>();
                result.add(this[PROPERTY_LISTENER].where((listener: IBrowserEventListener) => {
                    if (listener.eventType === type) {
                        return true;
                    }
                }));
                return result;
            }

        }
        /** 获取 */
        listener(id: string): IBrowserEventListener {
            let listener: IBrowserEventListener = this.listeners().firstOrDefault((item) => {
                if (item.id === id) {
                    return true;
                }
            });
            return listener;
        }
        /** 注册 */
        registerListener(listener: IBrowserEventListener): void {
            let that: this = this;
            if (objects.isNull(listener.id)) {
                listener.id = uuids.random();
            }
            if (!objects.isNull(this.listener(listener.id))) {
                return;
            }
            if (this.listeners(listener.eventType).length === 0) {
                let eventType: string = enums.toString(emBrowserEventType, listener.eventType).toLowerCase();
                window.addEventListener(eventType, function (event: Event): void {
                    that.fireEvent(listener.eventType, event);
                }, false);
            }
            this.listeners().add(listener);
        }
        /** 触发浏览器事件 */
        fireEvent(type: emBrowserEventType): void;
        fireEvent(type: emBrowserEventType, event: Event): void;
        fireEvent(): void {
            let type: emBrowserEventType = arguments[0];
            let event: Event = arguments[1];
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

    /** 浏览器事件类型 */
    export enum emBrowserEventType {
        ABORT,
        AFTERPRINT,
        BEFOREPRINT,
        BEFOREUNLOAD,
        BLUR,
        CANPLAY,
        CANPLAYTHROUGH,
        CHANGE,
        CLICK,
        COMPASSNEEDSCALIBRATION,
        CONTEXTMENU,
        DBLCLICK,
        DEVICELIGHT,
        DEVICEMOTION,
        DEVICEORIENTATION,
        DRAG,
        DRAGEND,
        DRAGENTER,
        DRAGLEAVE,
        DRAGOVER,
        DRAGSTART,
        DROP,
        DURATIONCHANGE,
        EMPTIED,
        ENDED,
        ERROR,
        FOCUS,
        /** 浏览器哈希值改变 */
        HASHCHANGE,
        INPUT,
        INVALID,
        /** 用户按下任何键盘键（包括系统按钮，如箭头键和功能键） */
        KEYDOWN,
        /** 按下并放开任何字母数字键（不包括系统按钮，如箭头键和功能键） */
        KEYPRESS,
        /** 放开任何先前按下的键盘键 */
        KEYUP,
        LOAD,
        LOADEDDATA,
        LOADEDMETADATA,
        LOADSTART,
        MESSAGE,
        MOUSEDOWN,
        MOUSEENTER,
        MOUSELEAVE,
        MOUSEMOVE,
        MOUSEOUT,
        MOUSEOVER,
        MOUSEUP,
        MOUSEWHEEL,
        MSGESTURECHANGE,
        MSGESTUREDOUBLETAP,
        MSGESTUREEND,
        MSGESTUREHOLD,
        MSGESTURESTART,
        MSGESTURETAP,
        MSINERTIASTART,
        MSPOINTERCANCEL,
        MSPOINTERDOWN,
        MSPOINTERENTER,
        MSPOINTERLEAVE,
        MSPOINTERMOVE,
        MSPOINTEROUT,
        MSPOINTEROVER,
        MSPOINTERUP,
        OFFLINE,
        ONLINE,
        ORIENTATIONCHANGE,
        PAGEHIDE,
        PAGESHOW,
        PAUSE,
        PLAY,
        PLAYING,
        POPSTATE,
        PROGRESS,
        RATECHANGE,
        READYSTATECHANGE,
        RESET,
        RESIZE,
        SCROLL,
        SEEKED,
        SEEKING,
        SELECT,
        STALLED,
        STORAGE,
        SUBMIT,
        SUSPEND,
        TIMEUPDATE,
        /** 当系统停止跟踪触摸的时候触发 */
        TOUCHCANCEL,
        /** 当手指从屏幕上离开的时候触发 */
        TOUCHEND,
        /** 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动 */
        TOUCHMOVE,
        /** 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 */
        TOUCHSTART,
        UNLOAD,
        VOLUMECHANGE,
        WAITING,
        /** 自定义事件-扫码,CustomEvent */
        SCAN
    }

    /** 浏览器事件管理员实例 */
    export const browserEventManager: BrowserEventManager = new BrowserEventManager();
}