/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { Console } from "./bsapp/Console";
try {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {};
    }
    if ((<any>window).ibas.shell === undefined) {
        (<any>window).ibas.shell = {
            console: new Console()
        };
        (<any>window).ibas.shell.console.run();
    }
} catch (error) {
    let message: string = "您的浏览器不支持此应用，请联系管理员。" + "\r\n"
        + "Your browser does not support this application, please contact the administrator.";
    alert(message);
}