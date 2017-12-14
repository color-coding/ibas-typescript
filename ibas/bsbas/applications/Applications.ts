/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    i18n, objects, logger, emMessageLevel, ICriteria, config, CONFIG_ITEM_DEBUG_MODE
} from "../../bobas/index";
import { AbstractApplication, IView, IBarView, IMessgesCaller } from "../core/index";
import { emMessageType } from "../data/index";
import { IServiceAgent, IServiceContract, IServicesShower, IServiceProxy, servicesManager } from "../services/index";
import { IBOView, IBOQueryView, IBOViewWithServices } from "./Applications.d";


/**
 * 业务对象应用
 */
export abstract class Application<T extends IView> extends AbstractApplication<T> {
    /** 运行 */
    run(...args: any[]): void {
        this.show();
    }
    /** 显示视图 */
    show(): void {
        if (!objects.isNull(this.viewShower)) {
            if (objects.isNull(this.view)) {
                throw new Error(i18n.prop("sys_invalid_view", this.name));
            }
            if (this.view.isDisplayed) {
                // 已显示的视图不在显示
                this.proceeding(emMessageType.WARNING, i18n.prop("sys_application_view_was_displayed", this.name));
                return;
            }
            if (!objects.isNull(this.description)) {
                this.view.title = this.description;
            } else {
                this.view.title = this.name;
            }
            try {
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
        if (objects.isNull(this.view)) {
            throw new Error(i18n.prop("sys_invalid_view", this.name));
        }
        this.view.isDisplayed = true;
        // 延迟100毫秒激活显示函数
        setTimeout(this.view.onDisplayed(), 100);
        logger.log(emMessageLevel.DEBUG, "app: [{0} - {1}]'s view displayed.", this.id, this.name);
        this.viewShowed();
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
                this.view.isDisplayed = false;
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
        if (!objects.isNull(this.viewShower)) {
            this.viewShower.busy(this.view, busy, msg);
        } else {
            throw new Error(i18n.prop("sys_invalid_view_shower", this.name));
        }
    }
    /** 设置消息 */
    protected proceeding(msg: string): void;
    /** 设置消息 */
    protected proceeding(type: emMessageType, msg: string): void;
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
    run(...args: any[]): void {
        // 不支持运行
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
 * 业务对象应用，带服务
 */
export abstract class BOApplicationWithServices<T extends IBOViewWithServices> extends Application<T> {
    /** 业务对象编码 */
    boCode: string;
    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
        this.view.callServicesEvent = this.callServices;
    }
    /** 调用应用的服务 */
    private callServices(): void {
        let proxies: IServiceProxy<IServiceContract>[] = this.getServiceProxies();
        if (objects.isNull(proxies) || proxies.length === 0) {
            // 没有提供服务代理则退出
            return;
        }
        let shower: IServicesShower = arguments[0];
        if (objects.isNull(shower)) {
            shower = (<IServicesShower><any>this.view);
        }
        if (objects.isNull(shower) || shower.displayServices === undefined) {
            this.proceeding(emMessageType.WARNING, i18n.prop("sys_not_provided_display_service_method", this.description));
            return;
        }
        // 获取服务
        let services: Array<IServiceAgent> = new Array<IServiceAgent>();
        for (let proxy of proxies) {
            for (let service of servicesManager.getServices(proxy)) {
                services.push(service);
            }
        }
        if (services.length > 0) {
            // 显示可用服务
            shower.displayServices(services);
        } else {
            this.proceeding(emMessageType.WARNING, i18n.prop("sys_application_no_services", this.description));
        }
    }
    /** 获取服务的契约 */
    protected abstract getServiceProxies(): IServiceProxy<IServiceContract>[];
}