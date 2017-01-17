/**
 * 模块索引文件，此文件集中导出类
 */
import { i18n } from '../i18n/I18N';
export * from './ArrayList';

/**
 * 对字符串操作的封装方法
 */
export module string {
    /**
     * 格式化输出
     * @param format 格式，I'm {0} and good at {1}.
     * @param args 替换字符
     */
    export function format(format: string, ...args: any[]): string {
        var result = format;
        if (args.length > 0) {
            // 存在替代字符
            if (args.length == 1 && Array.isArray(args[0])) {
                // 替代字符变量自身是个数组，则使用数组里的内容替代
                args = args[0];
                for (let key in args) {
                    if (args[key] != undefined) {
                        let reg = new RegExp("\\{" + key + "\\}", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < args.length; i++) {
                    if (args[i] != undefined) {
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
        if (content == undefined || content == null) { return count; }
        if (value == undefined || value == null) { return count; }
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
        if (content == undefined || content == null) { throw new Error(i18n.prop("msg_invalid_parameter", "content")); }
        if (search == undefined || search == null) { throw new Error(i18n.prop("msg_invalid_parameter", "search")); }
        if (replace == undefined || replace == null) { throw new Error(i18n.prop("msg_invalid_parameter", "replace")); }

        let pos = content.indexOf(search);
        while (pos >= 0) {
            content = content.replace(search, replace);
            pos = content.indexOf(search);
        }
        return content;
    }
}