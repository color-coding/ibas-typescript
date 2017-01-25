/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用

/// <reference path="./Systems.d.ts" />
import * as core from "../core/Core";
import { INativeView  } from "./Systems.d";


/**
 * 业务对象应用
 */
export class Application<T extends INativeView> extends core.Application<T> {

    /** 显示视图 */
    show(): void {

    }
}