/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    i18n, object, logger, emMessageLevel, ICriteria
} from "../../../ibas/bobas/index";
import { Application, IBarView, IMessgesCaller } from "../core/index";
import { emMessageType } from "../data/index";
import { IBOView, IBOQueryView } from "./BOApplications.d";


/**
 * 业务对象应用
 */
export abstract class BOApplication<T extends IBOView> extends Application<T> {
    /** 业务对象编码 */
    boCode: string;
    /** 运行 */
    run(...args: any[]): void {
        this.show();
    }
    /** 显示视图 */
    show(): void {
        if (!object.isNull(this.viewShower)) {
            if (object.isNull(this.view)) {
                throw new Error(i18n.prop("msg_invalid_view", this.name));
            }
            if (!object.isNull(this.description)) {
                this.view.title = this.description;
            } else {
                this.view.title = this.name;
            }
            try {
                this.viewShower.show(this.view);
                this.afterViewShow();
            } catch (error) {
                this.viewShower.messages(
                    {
                        type: emMessageType.ERROR,
                        message: arguments[0].message
                    });
            }
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
        }
    }
    /** 视图显示后 */
    private afterViewShow(): void {
        if (object.isNull(this.view)) {
            throw new Error(i18n.prop("msg_invalid_view", this.name));
        }
        this.view.isDisplayed = true;
        logger.log(emMessageLevel.DEBUG, "app: [{0} - {1}]'s view displayed.", this.id, this.name);
        this.viewShowed();
    }
    /** 视图显示后 */
    protected abstract viewShowed(): void;
    /** 关闭视图 */
    close(): void {
        if (!object.isNull(this.view)) {
            if (!object.isNull(this.viewShower)) {
                this.viewShower.destroy(this.view);
            }
        }

    }
    /** 设置忙状态 */
    protected busy(busy: boolean): void
    /** 设置忙状态 */
    protected busy(busy: boolean, msg: string): void
    /** 设置忙状态 */
    protected busy(): void {
        let busy: boolean = arguments[0];
        let msg: string = arguments[1];
        if (!object.isNull(this.viewShower)) {
            this.viewShower.busy(this.view, busy, msg);
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
        }
    }
    /** 设置消息 */
    protected proceeding(msg: string): void
    /** 设置消息 */
    protected proceeding(type: emMessageType, msg: string): void
    /** 设置消息 */
    protected proceeding(): void {
        let type: emMessageType = emMessageType.INFORMATION;
        let msg: string;
        if (arguments.length === 1) {
            msg = arguments[0];
        } else if (arguments.length === 2) {
            type = arguments[0];
            msg = arguments[1];
        }
        if (!object.isNull(this.viewShower)) {
            this.viewShower.proceeding(this.view, type, msg);
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
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
                    message: arguments[0].message
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
        if (!object.isNull(this.viewShower)) {
            this.viewShower.messages(caller);
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
        }
    }
}
/**
 * 业务对象查询应用
 */
export abstract class BOQueryApplication<T extends IBOQueryView> extends BOApplication<T> {
    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        this.view.closeEvent = this.close;
        this.view.fetchDataEvent = this.fetchData;
    }
    /** 查询数据 */
    protected abstract fetchData(criteria: ICriteria): void;
}
/**
 * 业务对象工具条应用
 */
export abstract class BOBarApplication<T extends IBarView> extends BOApplication<T> {
    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        this.view.closeEvent = this.close;
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
    run(...args: any[]): void {
        // 不支持运行
    }
}