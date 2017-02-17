/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { i18n, ICriteria } from "../../../ibas/bobas/index";
import { View, IUrlView } from "../core/index";
import { IBOView, IBOListView } from "../applications/index";
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
/** 业务对象列表视图 */
export abstract class BOListView extends BOView implements IBOListView, IUseQueryPanel {
    /** 查询数据事件，参数：查询条件 ICriteria */
    fetchDataEvent: Function;
    /** 查询数据 */
    query(criteria: ICriteria): void {
        this.fireViewEvents(this.fetchDataEvent, criteria);
    }
    /** 新建数据事件 */
    newDataEvent: Function;
    /** 查看数据事件，参数：目标数据 */
    viewDataEvent: Function;
}