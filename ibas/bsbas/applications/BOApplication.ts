/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    i18n, object, logger, emMessageLevel
} from "../../../ibas/bobas/index";
import { Application } from "../core/index";
import { emMessageType } from "../data/index";
import { IBOView } from "./BOApplications.d";


/**
 * 业务对象应用
 */
export abstract class BOApplication<T extends IBOView> extends Application<T> {
    /** 运行 */
    run(): void {
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
            this.viewShower.show(this.view);
            this.afterViewShow();
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
    /** 清理资源 */
    destroy(): void {
        this.close();
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
     * @param type 消息类型
     * @param message 消息内容
     * @param callBack 回掉方法
     */
    protected messages(type: emMessageType, message: string, callBack: Function): void;
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
        let type: emMessageType;
        let message: string;
        let callBack: Function;
        if (arguments.length === 1 && arguments[0] instanceof Error) {
            type = emMessageType.ERROR;
            message = arguments[0].message;
        } else if (arguments.length === 3) {
            callBack = arguments[2];
        }
        if (!object.isNull(this.viewShower)) {
            this.viewShower.messages(type, message, callBack);
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
        }
    }
}