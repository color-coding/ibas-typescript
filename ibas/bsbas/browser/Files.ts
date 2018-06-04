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
            if (window.Blob) {
                // ie 10+ (native saveAs FileAPI)
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(data, fileName);
                    logger.log(emMessageLevel.DEBUG, "files: save file as [{0}].", fileName);
                    return;
                } else {
                    let oURL: any = window.URL || (<any>window).webkitURL;
                    let sBlobUrl: string = oURL.createObjectURL(data);
                    let oLink: any = window.document.createElement("a");
                    if ("download" in oLink) {
                        // use an anchor link with download attribute for download
                        let $body: any = jQuery(document.body);
                        let $link: any = jQuery(oLink).attr({
                            download: fileName,
                            href: sBlobUrl,
                            style: "display:none"
                        });
                        $body.append($link);
                        $link.get(0).click();
                        $link.remove();
                        logger.log(emMessageLevel.DEBUG, "files: save file as [{0}].", fileName);
                        return;
                    }
                }
            }
            throw new Error(i18n.prop("sys_unsupported_operation"));
        }
    }
}