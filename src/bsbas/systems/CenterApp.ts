/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./Systems.d.ts" />
import { Application } from "./Application";
import { ICenterView } from "./Systems.d";

/** 应用-中心 */
export class CenterApp extends Application<ICenterView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "c1ec9ee1-1138-4358-8323-c579f1e4be37";
    /** 应用名称 */
    static APPLICATION_NAME: string = "sys_app_center";

    constructor() {
        super();
        this.id = CenterApp.APPLICATION_ID;
        this.name = CenterApp.APPLICATION_NAME;
    }

}