/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用

/// <reference path="./BOApplications.d.ts" />
import { i18n, object, logger, emMessageLevel } from "../../../ibas/bobas/bobas";
import { Application } from "../core/Architectures";
import { IBOApplicationView } from "./BOApplications.d";


/**
 * 业务对象应用
 */
export abstract class BOApplication<T extends IBOApplicationView> extends Application<T> {

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
            this.viewShower.show(this.view);
            this.afterViewShow();
        } else {
            throw new Error(i18n.prop("msg_invalid_view_shower", this.name));
        }
    }
    /** 视图显示后 */
    protected afterViewShow(): void {
        if (object.isNull(this.view)) {
            throw new Error(i18n.prop("msg_invalid_view", this.name));
        }
        this.view.isDisplayed = true;
        logger.log(emMessageLevel.DEBUG, "app: [{0} - {1}]'s view displayed.", this.id, this.name);
    }
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
}