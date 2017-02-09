/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用

/// <reference path="./BOApplications.d.ts" />
import { Application } from "../core/Architectures";
import { IViewNavigation } from "../core/Architectures.d";
import { IBOApplicationView } from "./BOApplications.d";


/**
 * 业务对象应用
 */
export abstract class BOApplication<T extends IBOApplicationView> extends Application<T> {

    private _navigation: IViewNavigation;

    get navigation(): IViewNavigation {
        return this._navigation;
    }
    set navigation(navigation: IViewNavigation) {
        this._navigation = navigation;
    }

    /** 显示视图 */
    show(): void {

    }
}