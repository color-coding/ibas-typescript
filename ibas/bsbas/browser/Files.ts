/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../bobas/common/Data.ts" />

namespace ibas {
    /**
     * 文件
     */
    export namespace files {
        /** 保存文件 */
        export function save(data: Blob, fileName: string): void {
            if (strings.isEmpty(fileName)) {
                fileName = strings.format("file_{0}", dates.now().getTime());
            }
            let url: string = window.URL.createObjectURL(data);
            let save_link: any = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            save_link.href = url;
            save_link.download = fileName;
            let event: any = document.createEvent("MouseEvents");
            event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
            window.URL.revokeObjectURL(url);
            logger.log(emMessageLevel.DEBUG, "files: save file as [{0}].", fileName);
        }
    }
}