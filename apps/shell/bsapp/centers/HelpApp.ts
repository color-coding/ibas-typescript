/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../../ibas/index";
import * as sys from "../../../../ibas/bsbas/systems/index";

/**
 * 帮助应用
 */
export class HelpApp extends sys.HelpApp {
    /** 运行 */
    run(): void {
        this.view.url = ibas.config.get(sys.HelpApp.CONFIG_ITEM_HELP_URL);
        this.view.isInside = ibas.config.get(sys.HelpApp.CONFIG_ITEM_HELP_INSIDE, false);
        super.run();
    }

}