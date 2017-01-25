/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用的相关说明文件

import { List, IBusinessObject } from "../../../src/bobas/bobas";
import { IView } from "../core/Core";

/**
 * 业务对象应用-视图
 */
export interface IBOApplicationView extends IView {

}
/**
 * 业务对象应用-选择视图
 */
export interface IBOChooseApplicationView extends IBOApplicationView {

}
/**
 * 业务对象应用-列表视图
 */
export interface IBOListApplicationView extends IBOApplicationView {

}
/**
 * 业务对象应用-编辑视图
 */
export interface IBOEditApplicationView extends IBOApplicationView {

}
/**
 * 业务对象应用-查看视图
 */
export interface IBOViewApplicationView extends IBOApplicationView {

}
/**
 * 业务对象应用-查询面板视图
 */
export interface IBOQueryPanelView extends IBOApplicationView {

}