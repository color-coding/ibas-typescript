/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { i18n, ICriteria } from "../../../ibas/bobas/index";
import { View, IUrlView, IBarView } from "../core/index";
import {
    IBOView, IBOListView, IBOQueryView, IBOChooseView,
    IBOEditView, IBOViewView, IBOResidentView, IBOShortcutView
} from "../applications/index";
import {
    IEmbeddedQueryPanel
} from "../systems/index";

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
/** 业务对象查询视图，带查询面板 */
export abstract class BOQueryViewWithPanel extends BOQueryView implements IEmbeddedQueryPanel {
    /** 嵌入查询面板 */
    abstract embedded(view: any): void;
}
/** 业务对象列表视图 */
export abstract class BOListView extends BOQueryViewWithPanel implements IBOListView {
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
/** 业务对象工具条视图 */
export abstract class BOBarView extends BOView implements IBarView {
    /** 绘制工具条 */
    abstract darwBar(): any;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
}
/** 业务对象常驻应用视图 */
export abstract class BOResidentView extends BOBarView implements IBOResidentView {

}
/** 业务对象快捷应用视图 */
export abstract class BOShortcutView extends BOBarView implements IBOShortcutView {

}