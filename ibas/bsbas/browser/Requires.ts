/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../3rdparty/require.d.ts" />
/// <reference path="../../bobas/common/Data.ts" />

namespace ibas {
    export namespace requires {
        /** 加载器名称模板 */
        export const CONTEXT_NAME_TEMPLATE_IBAS: string = "ibas.{0}";
        /** 加载等待时间 */
        export const CONFIG_ITEM_WAIT_SECONDS: string = "waitSeconds";
        /** 命名 */
        export function naming(name: string): string {
            return CONTEXT_NAME_TEMPLATE_IBAS.replace("{0}", name).toLowerCase();
        }
        /**
         * 创建require实例
         * @param config 配置
         */
        export function create(requireConfig: RequireConfig): Require {
            if ((<any>window).require === undefined || (<any>window).require === null) {
                throw new Error("not found requirejs.");
            }
            // 运行时版本
            let rtVersion: string = config.get(CONFIG_ITEM_RUNTIME_VERSION);
            if (!(objects.isNull(rtVersion)) && requireConfig.urlArgs === undefined) {
                requireConfig.urlArgs = function (id: string, url: string): string {
                    return (url.indexOf("?") === -1 ? "?" : "&") + "_=" + rtVersion;
                };
            }
            return (<any>window).require.config(requireConfig);
        }
    }
}