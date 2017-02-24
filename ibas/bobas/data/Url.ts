/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { object } from "./Data";

/**
 * 地址
 */
export module url {
    /** 跟地址标记 */
    export const ROOT_URL_SIGN: string = ".../";
    /** 上级标记 */
    export const PARENT_URL_SIGN: string = "../";
    /** 当前标记 */
    export const CURRENT_URL_SIGN: string = "./";
    /** 正常化地址 */
    export function normalize(value: string): string {
        if (object.isNull(value)) {
            return null;
        }
        let url: string;
        if (value.startsWith(ROOT_URL_SIGN)) {
            // 存在根目录标记，则取文档地址作为根
            url = document.location.href;
            // 去除文档.html
            let last: number = url.lastIndexOf(".");
            if (last > 0 && url.lastIndexOf("/", last) <= last) {
                url = url.substring(0, url.lastIndexOf("/"));
            }
            if (!url.endsWith("/")) { url = url + "/"; }
            url = url + value.substring(ROOT_URL_SIGN.length);
        } else {
            url = value;
        }
        // 处理当前目录
        let cIndex: number = url.indexOf(CURRENT_URL_SIGN);
        while (cIndex >= 0) {
            let tmp: string = url.substring(0, cIndex);
            if (!tmp.endsWith(".")) {
                url = tmp + url.substring(cIndex + PARENT_URL_SIGN.length - 1);
            }
            cIndex = url.indexOf(CURRENT_URL_SIGN, cIndex + 1);
        }
        // 处理上级目录
        let pIndex: number = url.indexOf(PARENT_URL_SIGN);
        while (pIndex >= 0) {
            let tmp: string = url.substring(0, pIndex);
            tmp = tmp.substring(0, tmp.lastIndexOf("/"));
            tmp = tmp.substring(0, tmp.lastIndexOf("/"));
            url = tmp + url.substring(pIndex + PARENT_URL_SIGN.length - 1);
            pIndex = url.indexOf(PARENT_URL_SIGN);
        }
        return url;
    }
    /**
     * 获取当前根地址
     * @param type 基准文件名称，null表示文档地址
     */
    export function rootUrl(type: string): string {
        if (type === undefined || type === null) {
            // 未提供类型，则返回文档地址
            let url: string = window.document.location.href;
            return url.substring(0, url.lastIndexOf("/"));
        }
        let fileName: string = type;
        if (!fileName.startsWith("/")) { fileName = "/" + fileName; }
        if (!fileName.endsWith(".js")) { fileName = fileName + ".js"; }
        let root: string = window.document.location.origin;
        var docScripts: NodeListOf<HTMLScriptElement> = window.document.getElementsByTagName("script");
        for (let i: number = 0; i < docScripts.length; i++) {
            let atr: Attr = docScripts[i].attributes.getNamedItem("src");
            if (atr === undefined || atr === null) {
                continue;
            }
            let url: string = atr.value;
            if (url.indexOf("./") >= 0) {
                // 相对路径地址，需要处理下
                if (url.startsWith("http")) {
                    url = normalize(atr.value);
                } else {
                    if (object.isNull(atr.baseURI)) {
                        // 有的浏览器，不存在此属性
                        url = normalize(window.document.location.href + atr.value);
                    } else {
                        url = normalize(atr.baseURI + atr.value);
                    }
                }
            }
            if (url.endsWith(fileName)) {
                root = url.substring(0, url.lastIndexOf("/"));
                break;
            }
        }
        return root;
    }

}