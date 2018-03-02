/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./bsapp/Console.ts" />

namespace shell {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {
            copyright: "Color-Coding Studio",
            license: "Apache License, Version 2.0",
            url: "https://colorcoding.org/"
        };
    }
    if ((<any>window).ibas.shell === undefined) {
        (<any>window).ibas.shell = {
            version: app.Console.CONSOLE_VERSION,
            author: "niuren.zhu"
        };
        (new app.Console()).run();
    }
}