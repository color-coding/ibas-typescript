/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/** 调试 */
export module debug {
    /** 显示已加载的脚本 */
    export function printScripts(): void {
        let scripts: NodeListOf<HTMLScriptElement> = document.getElementsByTagName("script");
        for (let index: number = 0; index < scripts.length; index++) {
            let script: HTMLScriptElement = scripts[index];
            if (script.src !== undefined && script.src !== null && script.src.length !== 0) {
                console.debug("script: file %s", script.src);
            } else if (script.innerHTML !== undefined && script.innerHTML !== null && script.innerHTML.length !== 0) {
                console.debug("script: content %s", script.innerHTML);
            }
        }
    }
}