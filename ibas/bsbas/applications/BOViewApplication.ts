/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象查看应用

/// <reference path="./BOApplications.d.ts" />
import { IBOViewApplicationView } from "./BOApplications.d";
import { BOApplication } from "./BOApplication";


/**
 * 业务对象查看应用
 */
export class BOViewApplication<T extends IBOViewApplicationView> extends BOApplication<T> {


}