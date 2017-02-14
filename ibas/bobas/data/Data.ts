/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

export * from "./Common.d";
export * from "./Common";
export * from "./Criteria.d";
export * from "./Criteria";
export * from "./OperationResult.d";
export * from "./OperationResult";
export * from "./Enums";

/**
 * 对字符串操作的封装方法
 */
export module string {
    /**
     * 是否为空
     * @param object 判断对象
     */
    export function isEmpty(content: any): boolean {
        if (content === undefined || content === null) {
            return true;
        }
        if (typeof (content) === "string" && content.length === 0) {
            return true;
        }
        return false;
    }
    /**
     * 格式化输出
     * @param format 格式，I'm {0} and good at {1}.
     * @param args 替换字符
     */
    export function format(format: string, ...args: any[]): string {
        let result = format;
        if (args.length > 0) {
            // 存在替代字符
            if (args.length === 1 && Array.isArray(args[0])) {
                // 替代字符变量自身是个数组，则使用数组里的内容替代
                args = args[0];
                for (let key in args) {
                    if (args[key] !== undefined) {
                        let reg = new RegExp("\\{" + key + "\\}", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            } else {
                for (let i = 0; i < args.length; i++) {
                    if (args[i] !== undefined) {
                        let reg = new RegExp("\\{" + i + "\\}", "g");
                        result = result.replace(reg, args[i]);
                    }
                }
            }
        }
        return result;
    }
    /**
     * 存在多少个字符
     * @param content 待分析字符
     * @param value 查询的字符
     */
    export function count(content: string, value: string): number {
        let count = 0;
        if (content === undefined || content === null) { return count; }
        if (value === undefined || value === null) { return count; }
        let pos = content.indexOf(value, 0);
        while (pos >= 0) {
            count++;
            pos = content.indexOf(value, pos + 1);
        }
        return count;
    }
    /**
     * 替换字符，全部
     * @param content 待分析字符
     * @param search 查询的字符
     * @param replace 替换的字符
     */
    export function replace(content: string, search: string, replace: string): string {
        if (content === undefined || content === null) { throw new Error("content is invalid."); }
        if (search === undefined || search === null) { throw new Error("search is invalid."); }
        if (replace === undefined || replace === null) { throw new Error("replace is invalid."); }

        let pos = content.indexOf(search);
        while (pos >= 0) {
            content = content.replace(search, replace);
            pos = content.indexOf(search);
        }
        return content;
    }
    /**
     * 比较字符串
     * @param value1 字符1
     * @param value2 字符2
     */
    export function equals(value1: string, value2: string): boolean {
        return value1 === value2;
    }
    /**
     * 比较字符串，忽略大小写
     * @param value1 字符1
     * @param value2 字符2
     */
    export function equalsIgnoreCase(value1: string, value2: string): boolean {
        let tmp1: string = value1.toLowerCase();
        let tmp2: string = value2.toLowerCase();
        return equals(tmp1, tmp2);
    }
}

/**
 * 对象
 */
export module object {
    /**
     * 是否为空
     * @param object 判断对象
     */
    export function isNull(object: any): boolean {
        if (object === undefined || object === null) {
            return true;
        }
        return false;
    }
}
/**
 * 唯一标识
 */
export module uuid {
    export function random(): string {
        function s4(): string {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}
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
        let fileName: string = "/" + type;
        let root: string = window.document.location.origin;
        var docScripts: NodeListOf<HTMLScriptElement> = window.document.getElementsByTagName("script");
        for (let i: number = 0; i < docScripts.length; i++) {
            let atr: Attr = docScripts[i].attributes.getNamedItem("src");
            if (atr === undefined || atr === null) {
                continue;
            }
            if (atr.value.endsWith(fileName)) {
                let tmp: string = atr.value;
                tmp = tmp.substring(0, tmp.length - fileName.length + 1);
                root = tmp;
                break;
            }
        }
        return root;
    }

}