/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */


/**  */
export module requires {

    export function create(config: RequireConfig, library: any): Require {
        if ((<any>window).require === undefined || (<any>window).require === null) {
            throw new Error("not found requirejs.");
        }
        let names = [];
        if (library instanceof Array) {
            // 定义了path
            for (let item of library) {
                names.push(item);
            }
        } else if (typeof library === "string") {
            names.push(library);
        }
        config.paths = {};
        let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
        for (let index: number = 0; index < scripts.length; index++) {
            let script: HTMLScriptElement = scripts[index];
            if (script.src !== undefined && script.src !== null && script.src.length !== 0) {
                for (let name of names) {
                    if (name.endsWith(".js")) {
                        // 指定了js文件
                        if (script.src.endsWith(name)) {
                            config.paths[name] = script.src;
                            break;
                        }
                    } else {
                        // 非js结尾不是文件，所有此路径的js均返回
                        if (script.src.indexOf(name) > 0 && script.src.endsWith(".js")) {
                            name = script.src.substring(script.src.indexOf(name));
                            name = name.substring(0, name.lastIndexOf(".js"));
                            config.paths[name] = script.src.substring(0, script.src.lastIndexOf(".js"));
                            break;
                        }
                    }
                }
            }
        }
        return (<any>window).require.config(config);
    }
}