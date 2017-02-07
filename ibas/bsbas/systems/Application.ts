/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
// 业务对象应用

import * as core from "../core/Core";
import { i18n, object, logger, emMessageLevel } from "../../../ibas/bobas/bobas";


/**
 * 业务对象应用
 */
export abstract class Application<T extends core.IView> extends core.Application<T> {

    /** 显示视图 */
    show(): void {
        if (!object.isNull(this.viewShower)) {
            if (object.isNull(this.view)) {
                throw new Error(i18n.prop("msg_invalid_view", this.name));
            }
            this.viewShower.show(this.view.darw());
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
}