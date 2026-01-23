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
    /** 地址hash值标记-视图 */
    export const URL_HASH_SIGN_VIEWS: string = "#/views/";
    /** 视图 */
    export abstract class View extends AbstractView {
        /** 是否已显示 */
        isDisplayed: boolean;
        /** 是否忙 */
        isBusy: boolean;
        /**
         * 触发视图事件
         * @param event 触发的事件
         * @param pars 参数
         */
        protected fireViewEvents(event: Function, ...pars: any[]): void {
            if (this.isBusy) {
                logger.log(emMessageLevel.DEBUG, "view: event skipping, [{0} - {1}] is busy.", this.id, this.title);
                return;
            }
            if (typeof event !== "function") {
                throw new Error(i18n.prop("sys_invalid_parameter", "event"));
            }
            try {
                event.apply(this.application, pars);
            } catch (error) {
                if (this.application instanceof Application) {
                    (<any>Application).prototype.messages.call(this.application, error);
                } else if (this.application.viewShower && this.application.viewShower.messages instanceof Function) {
                    this.application.viewShower.messages({
                        title: this.title,
                        type: emMessageType.ERROR,
                        message: error.message,
                    });
                } else {
                    logger.log(emMessageLevel.ERROR, error.message);
                }
            }
        }
        /** 显示之后（重载要回调） */
        protected onDisplayed(): void {
            this.isDisplayed = true;
        }
        /** 关闭之后（重载要回调） */
        protected onClosed(): void {
            this.isDisplayed = false;
        }
        /** 按钮按下时 */
        protected onKeyDown(event: KeyboardEvent): void {
            // 可重载
            // logger.log(emMessageLevel.DEBUG, "view: key [{0}] down at [{1}].", event.keyCode, this.id);
        }
        /** 地址栏哈希值变化 */
        protected onHashChanged(event: HashChangeEvent): void {
            // 可重载
            logger.log(emMessageLevel.DEBUG, "view: hash change to [{0}] at [{1}].", event.newURL, this.id);
        }
        /** 手指触控移动 */
        protected onTouchMove(direction: emTouchMoveDirection, event: TouchEvent): void {
            // 可重载
        }
    }
    /** 地址视图 */
    export abstract class UrlView extends View implements IUrlView {
        /** 内部打开 */
        isInside: boolean;
        /** 地址 */
        url: string;
    }
    /** 对话框视图 */
    export abstract class DialogView extends View {
        /** 确认 */
        confirm(): void {
            // 确认方法，可重载
        }
    }
    /** 配置项目-自动查询 */
    export const CONFIG_ITEM_AUTO_QUERY: string = "autoQuery";
    /** 业务对象查询视图 */
    export abstract class BOQueryView extends View implements IBOQueryView {
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
            return config.get(CONFIG_ITEM_AUTO_QUERY, false);
        }
        queryPanel(): IQueryPanel {
            throw new Error(i18n.prop("sys_invalid_view_query_panel"));
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
    export abstract class BOQueryDialogView extends DialogView implements IBOQueryView {
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
        queryPanel(): IQueryPanel {
            throw new Error(i18n.prop("sys_invalid_view_query_panel"));
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
    /** 业务对象查询视图，带查询面板 */
    export abstract class BOQueryDialogViewWithPanel extends BOQueryDialogView implements IEmbeddedQueryPanel {
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
    export abstract class BOViewView extends View implements IBOViewView {
        /** 编辑数据事件 */
        editDataEvent: Function;
        /** 视图模式 */
        mode: emViewMode;
    }
    /** 业务对象编辑视图 */
    export abstract class BOEditView extends View implements IBOEditView {
        /** 保存数据事件 */
        saveDataEvent: Function;
    }
    /** 工具条视图 */
    export abstract class BarView extends View implements IBarView {
        /** 工具条标识 */
        barId: string;
        /** 绘制工具条 */
        abstract drawBar(): any;
        /** 激活完整视图事件 */
        showFullViewEvent: Function;
        /** 工具条视图显示完成事件 */
        barShowedEvent: Function;
    }
    /** 面板视图 */
    export abstract class PanelView extends DialogView implements IBarView {
        /** 工具条标识 */
        barId: string;
        /** 绘制工具条 */
        abstract drawBar(): any;
        /** 激活完整视图事件 */
        showFullViewEvent: Function;
        /** 工具条视图显示完成事件 */
        barShowedEvent: Function;
    }
    /** 常驻应用视图 */
    export abstract class ResidentView extends BarView implements IResidentView {

    }
    /** 快捷应用视图 */
    export abstract class ShortcutView extends BarView implements IShortcutView {

    }
    export namespace views {
        export function closed(this: View): void {
            this.onClosed();
            if (this.isDisplayed !== false) {
                this.isDisplayed = false;
            }
        }
        export function displayed(this: View): void {
            this.onDisplayed();
            if (this.isDisplayed !== true) {
                this.isDisplayed = true;
            }
        }
        export function hashChanged(this: View, event: HashChangeEvent): void {
            this.onHashChanged(event);
        }
        export function keyDown(this: View, event: KeyboardEvent): void {
            this.onKeyDown(event);
        }
        export function touchMove(this: View, direction: emTouchMoveDirection, event: TouchEvent): void {
            this.onTouchMove(direction, event);
        }
    }
}