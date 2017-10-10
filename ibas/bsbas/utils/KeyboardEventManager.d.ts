/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { emKeyboardEventType } from "../data/index";
export interface IKeyboardEventListener {
    id?: string;
    eventType: emKeyboardEventType;
    /** 事件被触发 */
    onEventFired(event: KeyboardEvent)
}

