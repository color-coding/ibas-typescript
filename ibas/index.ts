/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./3rdparty/crypto-js.d.ts" />
/// <reference path="./3rdparty/require.d.ts" />
/// <reference path="./bobas/common/Data.ts" />
/// <reference path="./bobas/common/Enum.ts" />
/// <reference path="./bobas/common/StringBuilder.ts" />
/// <reference path="./bobas/common/DataTable.ts" />
/// <reference path="./bobas/common/Criteria.ts" />
/// <reference path="./bobas/common/OperationResult.ts" />
/// <reference path="./bobas/common/Configuration.ts" />
/// <reference path="./bobas/common/Logger.ts" />
/// <reference path="./bobas/common/I18N.ts" />
/// <reference path="./bobas/common/Utils.ts" />
/// <reference path="./bobas/common/Waiter.ts" />
/// <reference path="./bobas/debug/Assert.ts" />
/// <reference path="./bobas/debug/TestCase.ts" />
/// <reference path="./bobas/bo/BusinessObjectCore.ts" />
/// <reference path="./bobas/bo/BusinessObject.ts" />
/// <reference path="./bobas/repository/DataDeclaration.ts" />
/// <reference path="./bobas/repository/DataConverter.ts" />
/// <reference path="./bobas/repository/BORepositoryCore.ts" />
/// <reference path="./bobas/repository/BORepositoryAjax.ts" />
/// <reference path="./bobas/repository/BORepositoryLocal.ts" />
/// <reference path="./bobas/repository/BORepository.ts" />
/// <reference path="./bobas/expression/Expression.ts" />
/// <reference path="./bobas/expression/JudgmentExpression.ts" />
/// <reference path="./bobas/expression/JudgmentLink.ts" />
/// <reference path="./bobas/task/Action.ts" />
/// <reference path="./bobas/task/Queue.ts" />
/// <reference path="./bobas/task/Worker.ts" />
/// <reference path="./bobas/rule/BusinessRuleCore.ts" />
/// <reference path="./bobas/rule/BusinessRule.ts" />
/// <reference path="./bsbas/common/Data.ts" />
/// <reference path="./bsbas/common/Enum.ts" />
/// <reference path="./bsbas/browser/Requires.ts" />
/// <reference path="./bsbas/browser/Events.ts" />
/// <reference path="./bsbas/browser/Files.ts" />
/// <reference path="./bsbas/browser/Cookies.ts" />
/// <reference path="./bsbas/application/Architecture.ts" />
/// <reference path="./bsbas/application/Application.ts" />
/// <reference path="./bsbas/application/BOApplication.ts" />
/// <reference path="./bsbas/application/View.ts" />
/// <reference path="./bsbas/application/Services.ts" />
/// <reference path="./bsbas/application/Variables.ts" />
/// <reference path="./bsbas/application/Component.ts" />

namespace ibas {
    /** 关于 */
    export const about: any = {
        /** 网址 */
        url: "https://colorcoding.org/",
        /** 版权 */
        copyright: "Color-Coding Studio",
        /** 许可 */
        license: "Apache License, Version 2.0",
        /** 版本 */
        version: "0.2.0",
        /** 维护者 */
        maintainer: "Niuren.Zhu <niuren.zhu@icloud.com>"
    };
    /**
     * 初始化（有回调方法时异步）
     * @param callBack 回调方法
     */
    export function init(callBack?: (error?: Error) => void): void {
        if (callBack instanceof Function) {
            // 加载配置
            config.load([
                strings.format("{0}/{1}", urls.rootUrl("/ibas/index"), CONFIG_FILE_NAME),
                strings.format("{0}/{1}", urls.rootUrl(), CONFIG_FILE_NAME)
            ], () => {
                // 设置默认语言
                let language: string = ibas.config.get(ibas.CONFIG_ITEM_LANGUAGE_CODE);
                if (!ibas.strings.isEmpty(language)) {
                    ibas.i18n.language = language;
                }
                // 加载资源
                i18n.load([
                    strings.format("{0}/resources/languages/ibas.json", urls.rootUrl("/ibas/index")),
                    strings.format("{0}/resources/languages/enums.json", urls.rootUrl("/ibas/index"))
                ], () => {
                    callBack();
                });
            });
        } else {
            // 加载配置
            config.load([
                strings.format("{0}/{1}", urls.rootUrl("/ibas/index"), CONFIG_FILE_NAME),
                strings.format("{0}/{1}", urls.rootUrl(), CONFIG_FILE_NAME)
            ]);
            // 设置默认语言
            let language: string = ibas.config.get(ibas.CONFIG_ITEM_LANGUAGE_CODE);
            if (!ibas.strings.isEmpty(language)) {
                ibas.i18n.language = language;
            }
            // 加载资源
            i18n.load([
                strings.format("{0}/resources/languages/ibas.json", urls.rootUrl("/ibas/index")),
                strings.format("{0}/resources/languages/enums.json", urls.rootUrl("/ibas/index"))
            ]);
        }
    }
}