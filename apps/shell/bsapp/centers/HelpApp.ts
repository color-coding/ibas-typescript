/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { HelpApp as AbstractHelpApp } from "../../../../ibas/bsbas/systems/Systems";
import { config } from "../../../../ibas/bsbas/bsbas";

/**
 * 帮助应用
 */
export class HelpApp extends AbstractHelpApp {
    /** 运行 */
    run(): void {
        this.view.url = config.get(AbstractHelpApp.CONFIG_ITEM_HELP_URL);
        this.view.isInside = config.get(AbstractHelpApp.CONFIG_ITEM_HELP_INSIDE, false);
        super.run();
    }

}