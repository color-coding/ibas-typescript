/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />
/// <reference path="../../bobas/common/Configuration.ts" />
/// <reference path="../../bobas/common/Logger.ts" />
/// <reference path="../../bobas/common/Utils.ts" />
/// <reference path="../common/Enum.ts" />
/// <reference path="./Architecture.ts" />

namespace ibas {
    /** 使用查询面板 */
    export interface IUseQueryPanel {
        /** 查询标识 */
        readonly queryId: string;
        /** 查询目标 */
        readonly queryTarget?: any;
        /** 使用的查询 */
        readonly usingCriteria?: ICriteria;
        /** 查询数据 */
        query(criteria: ICriteria): void;
        /** 嵌入下拉条 */
        embeddedPuller?(view: any): void;
    }
    /** 嵌入查询面板 */
    export interface IEmbeddedQueryPanel {
        /** 嵌入 */
        embedded(view: any): void;
    }
    /**
     * 业务对象应用-视图
     */
    export interface IBOView extends IView {
    }
    /** 使用查询面板 */
    export interface IUseQueryPanel {
        /** 查询标识 */
        readonly queryId: string;
        /** 查询目标 */
        readonly queryTarget?: any;
        /** 使用的查询 */
        readonly usingCriteria?: ICriteria;
        /** 查询数据 */
        query(criteria: ICriteria): void;
        /** 嵌入下拉条 */
        embeddedPuller?(view: any): void;
    }
    /** 嵌入查询面板 */
    export interface IEmbeddedQueryPanel {
        /** 嵌入 */
        embedded(view: any): void;
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
        /** 选择类型 */
        chooseType: emChooseType;
    }
    /**
     * 业务对象应用-列表视图
     */
    export interface IBOListView extends IBOQueryView {
        /** 新建数据事件 */
        newDataEvent: Function;
        /** 查看数据事件，参数：目标数据 */
        viewDataEvent: Function;
    }
    /**
     * 业务对象应用-编辑视图
     */
    export interface IBOEditView extends IBOView {
        /** 保存数据事件 */
        saveDataEvent: Function;
    }
    /**
     * 业务对象应用-查看视图
     */
    export interface IBOViewView extends IBOView {
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
    /**
     * 业务对象应用
     */
    export abstract class Application<T extends IView> extends AbstractApplication<T> {
        /** 运行 */
        run(): void {
            this.show();
        }
        /** 显示视图 */
        show(): void {
            if (!objects.isNull(this.viewShower)) {
                try {
                    if (this.view instanceof View) {
                        if (this.view.isDisplayed) {
                            // 已显示的视图不在显示
                            this.proceeding(emMessageType.WARNING, i18n.prop("sys_application_view_was_displayed", this.name));
                            return;
                        }
                    } else {
                        throw new Error(i18n.prop("sys_invalid_view", this.name));
                    }
                    this.viewShower.show(this.view);
                    this.afterViewShow();
                } catch (error) {
                    this.viewShower.messages({
                        title: this.description,
                        type: emMessageType.ERROR,
                        message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? error.stack : error.message
                    });
                }
            } else {
                throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
            }
        }
        /** 视图显示后 */
        private afterViewShow(): void {
            if (this.view instanceof View) {
                this.view.isDisplayed = true;
                // 延迟100毫秒激活显示函数
                setTimeout(this.view.onDisplayed(), 100);
                logger.log(emMessageLevel.DEBUG, "app: [{0} - {1}]'s view displayed.", this.id, this.name);
                this.viewShowed();
            } else {
                throw new Error(i18n.prop("sys_invalid_view", this.name));
            }
        }
        /** 注册视图 */
        protected registerView(): void {
            this.view.closeEvent = this.close;
        }
        /** 视图显示后 */
        protected abstract viewShowed(): void;
        /** 关闭视图 */
        close(): void {
            if (!objects.isNull(this.view)) {
                if (!objects.isNull(this.viewShower)) {
                    this.viewShower.destroy(this.view);
                    if (this.view instanceof View) {
                        this.view.isDisplayed = false;
                        this.view.onClosed();
                    }
                }
            }
        }
        /** 设置忙状态 */
        protected busy(busy: boolean): void;
        /** 设置忙状态 */
        protected busy(busy: boolean, msg: string): void;
        /** 设置忙状态 */
        protected busy(): void {
            if (!this.isViewShowed()) {
                return;
            }
            let busy: boolean = arguments[0];
            let msg: string = arguments[1];
            if (this.view instanceof View) {
                this.view.isBusy = busy;
            }
            if (!objects.isNull(this.viewShower)) {
                this.viewShower.busy(this.view, busy, msg);
            } else {
                throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
            }
        }
        /** 设置消息 */
        protected proceeding(msg: string): void;
        /** 设置消息 */
        protected proceeding(error: Error): void;
        /** 设置消息 */
        protected proceeding(type: emMessageType, msg: string): void;
        /** 设置消息 */
        protected proceeding(): void {
            let type: emMessageType = emMessageType.INFORMATION;
            let msg: string;
            if (arguments.length === 1) {
                if (arguments[0] instanceof Error) {
                    msg = arguments[0].message;
                    type = emMessageType.ERROR;
                } else {
                    msg = arguments[0];
                }
            } else if (arguments.length === 2) {
                type = arguments[0];
                msg = arguments[1];
            }
            if (!objects.isNull(this.viewShower)) {
                if (this.isViewShowed()) {
                    this.viewShower.proceeding(this.view, type, msg);
                } else {
                    this.viewShower.proceeding(undefined, type, msg);
                }
            } else {
                throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
            }
        }
        /**
         * 显示消息对话框
         * @param caller 消息调用者
         */
        protected messages(caller: IMessgesCaller): void;
        /**
         * 显示消息对话框
         * @param type 消息类型
         * @param message 消息内容
         */
        protected messages(type: emMessageType, message: string): void;
        /**
         * 显示消息对话框
         * @param error 错误
         */
        protected messages(error: Error): void;
        /** 显示消息对话框 */
        protected messages(): void {
            let caller: IMessgesCaller;
            if (arguments.length === 1) {
                if (arguments[0].message !== undefined && arguments[0].type !== undefined) {
                    caller = arguments[0];
                } else if (arguments[0] instanceof Error) {
                    caller = {
                        title: i18n.prop(this.name),
                        type: emMessageType.ERROR,
                        message: config.get(CONFIG_ITEM_DEBUG_MODE, false) ? arguments[0].stack : arguments[0].message
                    };
                } else {
                    caller = {
                        title: i18n.prop(this.name),
                        type: emMessageType.INFORMATION,
                        message: arguments[0]
                    };
                }
            } else if (arguments.length === 2) {
                caller = {
                    title: i18n.prop(this.name),
                    type: arguments[0],
                    message: arguments[1]
                };
            }
            if (!objects.isNull(this.viewShower)) {
                this.viewShower.messages(caller);
            } else {
                throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
            }
        }
    }
    /**
     * 工具条应用
     */
    export abstract class BarApplication<T extends IBarView> extends Application<T> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
            this.view.showFullViewEvent = this.showFullView;
            this.view.barShowedEvent = this.barShowed;
        }
        /** 工具条显示完成，可重载 */
        protected barShowed(): void {
            // 工具条显示完成
        }
        /** 激活完整视图 */
        protected showFullView(): void {
            this.show();
        }
        /** 运行 */
        run(): void {
            // 不支持运行
        }
    }
    /**
     * 服务应用
     */
    export abstract class ServiceApplication<T extends IView, C extends IServiceContract>
        extends Application<T> implements IService<IServiceCaller<C>> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
        /** 运行 */
        run(): void;
        /**
         * 运行
         * @param caller 服务调用者
         */
        run(caller: IServiceCaller<C>): void;
        /** 运行 */
        run(): void {
            if (arguments.length === 1) {
                // 判断是否为选择契约
                let caller: IServiceCaller<C> = arguments[0];
                if (objects.instanceOf(caller.proxy, ServiceProxy)) {
                    this.runService(caller.proxy.contract);
                    return;
                }
            }
            // 保持参数原样传递
            super.run.apply(this, arguments);
        }
        /** 运行服务 */
        protected abstract runService(contract: C): void;
    }
    /**
     * 服务（带结果）应用
     */
    export abstract class ServiceWithResultApplication<T extends IView, C extends IServiceContract, D>
        extends ServiceApplication<T, C> implements IService<IServiceWithResultCaller<C, D>> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
        /** 运行 */
        run(): void;
        /**
         * 运行
         * @param caller 服务调用者
         */
        run(caller: IServiceWithResultCaller<C, D>): void;
        /** 运行 */
        run(): void {
            if (arguments.length === 1) {
                // 判断是否为选择契约
                let caller: IServiceWithResultCaller<C, D> = arguments[0];
                if (objects.instanceOf(caller.proxy, ServiceProxy)) {
                    this.onCompleted = caller.onCompleted;
                    this.runService(caller.proxy.contract);
                    return;
                }
            }
            // 保持参数原样传递
            super.run.apply(this, arguments);
        }
        /** 运行服务 */
        protected abstract runService(contract: C): void;
        /** 完成事件 */
        private onCompleted: Function;
        /** 触发完成事件 */
        protected fireCompleted(result: D): void {
            // 关闭视图
            this.close();
            if (!(this.onCompleted instanceof Function)) {
                return;
            }
            try {
                // 调用完成事件
                this.onCompleted.call(this.onCompleted, result);
            } catch (error) {
                // 完成事件出错
                this.messages(error);
            }
        }
    }
    /**
     * 业务对象应用
     */
    export abstract class BOApplication<T extends IBOView> extends Application<T> {
        /** 业务对象编码 */
        boCode: string;
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
    }
    /**
     * 业务对象查询应用
     */
    export abstract class BOQueryApplication<T extends IBOQueryView> extends BOApplication<T> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
            this.view.fetchDataEvent = this.fetchData;
        }
        /** 查询数据 */
        protected abstract fetchData(criteria: ICriteria): void;
    }
    /**
     * 常驻应用
     */
    export abstract class ResidentApplication<T extends IResidentView> extends BarApplication<T> {

        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
    }

    /**
     * 业务对象快捷应用
     */
    export abstract class ShortcutApplication<T extends IShortcutView> extends BarApplication<T> {

        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
    }
}