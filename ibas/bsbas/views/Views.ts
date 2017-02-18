/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { i18n, ICriteria } from "../../../ibas/bobas/index";
import { View, IUrlView } from "../core/index";
import { IBOView, IBOListView, IBOQueryView, IBOChooseView, IBOEditView, IBOViewView } from "../applications/index";
import { IUseQueryPanel } from "../systems/index";

/** 地址视图 */
export abstract class UrlView extends View implements IUrlView {
    /** 内部打开 */
    isInside: boolean;
    /** 地址 */
    url: string;
}
/** 业务对象视图 */
export abstract class BOView extends View implements IBOView {
}
/** 业务对象查询视图 */
export abstract class BOQueryView extends BOView implements IBOQueryView {
    /** 查询数据事件，参数：查询条件 ICriteria */
    fetchDataEvent: Function;
    /** 查询数据 */
    query(criteria: ICriteria): void {
        this.fireViewEvents(this.fetchDataEvent, criteria);
    }
}
/** 业务对象列表视图 */
export abstract class BOListView extends BOQueryView implements IBOListView {
    /** 新建数据事件 */
    newDataEvent: Function;
    /** 查看数据事件，参数：目标数据 */
    viewDataEvent: Function;
}
/** 业务对象选择视图 */
export abstract class BOChooseView extends BOQueryView implements IBOChooseView {
    /** 新建数据事件 */
    newDataEvent: Function;
    /** 选择数据事件，参数：选择数据 */
    chooseDataEvent: Function;
}
/** 业务对象查看视图 */
export abstract class BOViewView extends BOView implements IBOViewView {
    /** 编辑数据事件 */
    editDataEvent: Function;
}
/** 业务对象编辑视图 */
export abstract class BOEditView extends BOView implements IBOEditView {
    /** 选择数据事件，参数：选择数据 */
    editDataEvent: Function;
    /** 新建数据事件 */
    saveDataEvent: Function;
}