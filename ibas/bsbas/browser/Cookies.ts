/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    export namespace cookies {
        export const SEPARATOR_COOKIE: string = "; ";
        export const COOKIE_PATH: string = function (): string {
            let url: string = urls.rootUrl();
            if (strings.isEmpty(url)) {
                return "/";
            }
            // 去除域名
            if (url.length > document.location.origin.length) {
                url = url.substring(document.location.origin.length);
            }
            let builder: StringBuilder = new StringBuilder();
            for (let item of url.split("/")) {
                if (builder.length > 0) {
                    builder.append("/");
                }
                if (strings.isWith(item, undefined, ".html")) {
                    continue;
                }
                builder.append(item);
            }
            return builder.toString();
        }();
        export interface ICookie {
            name: string;
            value?: string;
            path?: string;
            domian?: string;
            expires?: Date | string;
        }
        function getCookies(): Array<ICookie> {
            let cookies: Array<ICookie> = new Array<ICookie>();
            if (!strings.isEmpty(document.cookie)) {
                for (let item of document.cookie.split(SEPARATOR_COOKIE)) {
                    if (strings.isEmpty(item)) {
                        continue;
                    }
                    let index: number = item.indexOf("=");
                    if (index <= 0) {
                        continue;
                    }
                    let key: string = item.substring(0, index);
                    if (strings.isEmpty(key)) {
                        continue;
                    }
                    let value: string = item.substring(index + 1);
                    cookies.push({
                        name: key,
                        value: objects.isNull(value) ? "" : unescape(value)
                    });
                }
            }
            return cookies;
        }
        function setCookie(cookie: ICookie): void {
            let builder: StringBuilder = new StringBuilder();
            builder.map(null, "");
            builder.map(undefined, "");
            for (let propty in cookie) {
                if (typeof propty !== "string") {
                    continue;
                }
                if (strings.equals(propty, "value")) {
                    continue;
                }
                if (builder.length > 0) {
                    builder.append(SEPARATOR_COOKIE);
                }
                if (strings.equals(propty, "name")) {
                    builder.append(cookie.name);
                    builder.append("=");
                    builder.append(objects.isNull(cookie.value) ? "" : escape(cookie.value));
                } else {
                    builder.append(propty);
                    builder.append("=");
                    builder.append(cookie[propty]);
                }
            }
            document.cookie = builder.toString();
        }
        function getCookie(name: string): ICookie {
            let cookies: Array<ICookie> = getCookies();
            if (cookies instanceof Array) {
                for (let cookie of cookies) {
                    if (!strings.equals(name, cookie.name)) {
                        continue;
                    }
                    if (!objects.isNull(cookie.path) && !strings.equals(COOKIE_PATH, cookie.path)) {
                        continue;
                    }
                    if (!objects.isNull(cookie.expires)) {
                        cookie.expires = dates.valueOf(cookie.expires);
                        if (dates.after(dates.now(), cookie.expires)) {
                            continue;
                        }
                    }
                    return cookie;
                }
            }
            return undefined;
        }
        export function set(name: string, value: string): void;
        export function set(name: string, value: string, expires: Date): void;
        export function set(cookie: ICookie): void;
        export function set(): void {
            if (arguments.length === 0 || objects.isNull(arguments[0])) {
                throw new Error(i18n.prop("sys_invalid_parameter", "cookie"));
            }
            let cookie: ICookie = arguments[0];
            if (typeof cookie !== "object") {
                cookie = {
                    name: String(arguments[0]),
                    path: COOKIE_PATH,
                };
            }
            cookie.value = arguments[1];
            if (arguments[2] !== undefined) {
                if (arguments[2] instanceof Date) {
                    cookie.expires = arguments[2];
                } else {
                    throw new Error(i18n.prop("sys_invalid_parameter", "expires"));
                }
            }
            setCookie(cookie);
        }
        export function get(name: string): string {
            if (strings.isEmpty(name)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "name"));
            }
            let cookie: ICookie = getCookie(name);
            if (cookie) {
                return cookie.value;
            } else {
                return undefined;
            }
        }
        export function remove(name: string): void {
            if (strings.isEmpty(name)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "name"));
            }
            set({ name: name, expires: new Date(0) });
        }
    }
}