/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用的相关说明文件

import { List, IBusinessObject } from "../../bobas/index";
import { IView, IBarView, IApplicationService } from "../core/index";
import { IUseQueryPanel } from "../systems/index";

/**
 * 业务对象应用-视图
 */
export interface IBOView extends IView {
}
/**
 * 业务对象应用-视图，带服务
 */
export interface IBOViewWithServices extends IBOView {
    /** 调用服务事件，参数1 IServicesShower显示服务者 */
    callServicesEvent: Function;
}
/**
 * 显示服务者
 */
export interface IServicesShower {
    /** 显示服务 */
    displayServices(services: IApplicationService[]): void;
}
/**
 * 业务对象应用-选择视图
 */
export interface IBOQueryView extends IBOView, IUseQueryPanel {
    /** 查询数据事件，参数：查询条件 ICriteria */
    fetchDataEvent: Function;
}
/**
 * 业务对象应用-选择视图
 */
export interface IBOChooseView extends IBOQueryView {
    /** 选择数据事件，参数：选择数据 */
    chooseDataEvent: Function;
    /** 新建数据事件 */
    newDataEvent: Function;
}
/**
 * 业务对象应用-列表视图
 */
export interface IBOListView extends IBOQueryView, IBOViewWithServices {
    /** 新建数据事件 */
    newDataEvent: Function;
    /** 查看数据事件，参数：目标数据 */
    viewDataEvent: Function;
}
/**
 * 业务对象应用-编辑视图
 */
export interface IBOEditView extends IBOViewWithServices {
    /** 保存数据事件 */
    saveDataEvent: Function;
}
/**
 * 业务对象应用-查看视图
 */
export interface IBOViewView extends IBOViewWithServices {
    /** 编辑数据事件 */
    editDataEvent: Function;
}
/**
 * 常驻应用-视图
 */
export interface IResidentView extends IBarView {

}
/**
 * 快捷应用-视图
 */
export interface IShortcutView extends IBarView {

}