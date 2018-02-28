/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../../ibas/index.d.ts" />
/// <reference path="../../../../openui5/index.d.ts" />
/// <reference path="../../../index.d.ts" />

namespace shell {
    export namespace ui {
        export namespace c {
            /**
             * 视图-帮助
             */
            export class HelpView extends ibas.UrlView implements app.IHelpView {
                /** 绘制视图 */
                draw(): any {
                    return null;
                }

            }
        }
    }
}