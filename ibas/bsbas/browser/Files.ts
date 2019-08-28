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
                    let oLink: HTMLAnchorElement = window.document.createElement("a");
                    if ("download" in oLink) {
                        oLink.download = fileName;
                        oLink.href = sBlobUrl;
                        oLink.style.cssText = "display:none";
                        oLink.click();
                        oLink.remove();
                        oURL.revokeObjectURL(sBlobUrl);
                        logger.log(emMessageLevel.DEBUG, "files: save file as [{0}].", fileName);
                        return;
                    }
                }
            }
            throw new Error(i18n.prop("sys_unsupported_operation"));
        }
        /**
         * 打开文件
         * @param onCompleted 打开完成
         * @param config 打开参数
         */
        export function open(onCompleted: (files: ibas.IList<File>) => void, config?: {
            accept?: string,
            multiple?: boolean,
        }): void {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "file";
            input.style.visibility = "hidden";
            if (config) {
                if (config.accept) {
                    input.accept = config.accept;
                }
                if (config.multiple) {
                    input.multiple = config.multiple;
                }
            }
            input.onchange = function (event: Event): void {
                if (onCompleted instanceof Function) {
                    let files: ibas.IList<File> = new ibas.ArrayList<File>(input.files.length);
                    for (let i: number = 0; i < input.files.length; i++) {
                        files[i] = input.files.item(i);
                    }
                    onCompleted(files);
                }
                input.remove();
                input = null;
            };
            input.click();
        }
    }
}