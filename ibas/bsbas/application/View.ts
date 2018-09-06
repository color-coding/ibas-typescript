/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../../bobas/common/Utils.ts" />
/// <reference path="../../bobas/common/Criteria.ts" />
/// <reference path="../common/Data.ts" />
/// <reference path="./Application.ts" />

namespace ibas {
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
    export abstract class BODialogView extends BOView {
        /** 确认 */
        confirm(): void {
            // 确认方法，可重载
        }
    }
    /** 配置项目-自动查询 */
    export const CONFIG_ITEM_AUTO_QUERY: string = "autoQuery";
    /** 业务对象查询视图 */
    export abstract class BOQueryView extends BOView implements IBOQueryView {
        /** 查询标识 */
        get queryId(): string {
            return this.application.id;
        }
        /** 使用的查询 */
        get usingCriteria(): ICriteria {
            return this.lastCriteria;
        }
        /** 自动查询 */
        get autoQuery(): boolean {
            return ibas.config.get(CONFIG_ITEM_AUTO_QUERY, false);
        }
        /** 上一次使用的查询 */
        protected lastCriteria: ICriteria;
        /** 查询数据事件，参数：查询条件 ICriteria */
        fetchDataEvent: Function;
        /** 查询数据 */
        query(criteria: ICriteria): void {
            this.lastCriteria = criteria;
            this.fireViewEvents(this.fetchDataEvent, criteria);
        }
    }
    /** 业务对象查询对话视图 */
    export abstract class BOQueryDialogView extends BODialogView implements IBOQueryView {
        /** 查询标识 */
        get queryId(): string {
            return this.application.id;
        }
        /** 使用的查询 */
        get usingCriteria(): ICriteria {
            return this.lastCriteria;
        }
        /** 自动查询 */
        get autoQuery(): boolean {
            return false;
        }
        /** 上一次使用的查询 */
        protected lastCriteria: ICriteria;
        /** 查询数据事件，参数：查询条件 ICriteria */
        fetchDataEvent: Function;
        /** 查询数据 */
        query(criteria: ICriteria): void {
            this.lastCriteria = criteria;
            this.fireViewEvents(this.fetchDataEvent, criteria);
        }
    }
    /** 业务对象查询视图，带查询面板 */
    export abstract class BOQueryViewWithPanel extends BOQueryView implements IEmbeddedQueryPanel {
        /** 嵌入查询面板，返回值：是否需要初始化 */
        abstract embedded(view: any): void;
    }
    /** 业务对象列表视图 */
    export abstract class BOListView extends BOQueryView implements IBOListView {
        /** 新建数据事件 */
        newDataEvent: Function;
        /** 查看数据事件，参数：目标数据 */
        viewDataEvent: Function;
    }
    /** 业务对象选择视图 */
    export abstract class BOChooseView extends BOQueryDialogView implements IBOChooseView {
        /** 新建数据事件 */
        newDataEvent: Function;
        /** 选择数据事件，参数：选择数据 */
        chooseDataEvent: Function;
        /** 选择类型 */
        chooseType: emChooseType;
        /** 视图模式 */
        mode: emViewMode;
    }
    /** 业务对象查看视图 */
    export abstract class BOViewView extends BOView implements IBOViewView {
        /** 编辑数据事件 */
        editDataEvent: Function;
        /** 视图模式 */
        mode: emViewMode;
    }
    /** 业务对象编辑视图 */
    export abstract class BOEditView extends BOView implements IBOEditView {
        /** 保存数据事件 */
        saveDataEvent: Function;
    }
    /** 业务对象工具条视图 */
    export abstract class BOBarView extends BOView implements IBarView {
        /** 绘制工具条 */
        abstract drawBar(): any;
        /** 激活完整视图事件 */
        showFullViewEvent: Function;
        /** 工具条视图显示完成事件 */
        barShowedEvent: Function;
    }
    /** 业务对象面板视图 */
    export abstract class BOPanelView extends BODialogView implements IBarView {
        /** 绘制工具条 */
        abstract drawBar(): any;
        /** 激活完整视图事件 */
        showFullViewEvent: Function;
        /** 工具条视图显示完成事件 */
        barShowedEvent: Function;
    }
    /** 业务对象常驻应用视图 */
    export abstract class BOResidentView extends BOBarView implements IResidentView {

    }
    /** 业务对象快捷应用视图 */
    export abstract class BOShortcutView extends BOBarView implements IShortcutView {

    }
    /** 页签视图 */
    export abstract class TabView extends View implements IView {
    }
}