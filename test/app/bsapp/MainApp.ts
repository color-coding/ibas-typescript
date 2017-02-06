/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { IViewNavigation } from "../../../src/bsbas/core/Core";
import { Navigation } from "./Navigation";
import * as sys from "../../../src/bsbas/systems/Systems";

/**
 * 系统入口应用
 */
export class MainApp extends sys.MainApp {

    get navigation(): IViewNavigation {
        if (super.navigation === null) {
            super.navigation = new Navigation();
        }
        return super.navigation;
    }

}