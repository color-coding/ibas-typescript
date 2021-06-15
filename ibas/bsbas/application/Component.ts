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
/// <reference path="./Application.ts" />
namespace ibas {
    /** 组件应用设置 */
    export interface IComponentSetting {

    }
    /**
     * 组件应用
     */
    export abstract class ComponentApplication<T extends IComponentView, S extends IComponentSetting> extends Application<T> {
        /** 注册视图，重载需要回掉此方法 */
        protected registerView(): void {
            super.registerView();
        }
        protected setting: S;
        /** 运行 */
        run(setting?: S): void {
            this.setting = setting;
            super.run();
        }
    }
    /**
     * 组件应用-视图
     */
    export interface IComponentView extends IView {
    }
    /**
     * 应用服务映射
     */
    export interface IComponentMapping<T extends IComponentSetting> extends IElement {
        /** 视图导航 */
        navigation: IViewNavigation;
        /** 设置 */
        setting: T;
        /** 创建服务实例 */
        create(): ComponentApplication<IComponentView, T>;
    }
    /**
     * 应用服务映射
     */
    export abstract class ComponentMapping<T extends IComponentSetting> extends Element implements IComponentMapping<T> {
        constructor() {
            super();
        }
        /** 视图导航 */
        navigation: IViewNavigation;
        /** 设置 */
        abstract setting: T;
        /** 创建服务实例 */
        abstract create(): ComponentApplication<IComponentView, T>;
    }
}