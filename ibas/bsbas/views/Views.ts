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
    /** 清理资源 */
    destroyEvent: Function;
    /**  
     * 触发视图事件
     * @param event 触发的事件
     * @param pars 参数
     */
    protected fireViewEvents(event: Function, ...pars: any[]): void {
        if (typeof event !== "function") {
            throw new Error(i18n.prop("msg_invalid_parameter", "event"));
        }
        event.apply(this.application, pars);
    }
}
/** 业务对象列表视图 */
export abstract class BOListView extends BOView implements IBOListView, IUseQueryPanel {
    /** 查询数据事件，参数：查询条件 ICriteria */
    fetchDataEvent: Function;
    /** 查询数据 */
    query(criteria: ICriteria): void {
        this.fireViewEvents(this.fetchDataEvent, criteria);
    }
}